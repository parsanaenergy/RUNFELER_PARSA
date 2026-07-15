import { articles, faqs, services, products, projects } from "@/lib/content";
import { kbArticles } from "@/lib/kb-articles";

/**
 * GEO-002: Server-Side Rendered content layer.
 *
 * این کامپوننت یک Server Component است (بدون "use client") که تمام محتوای
 * متنی کلیدی — بدنه کامل مقالات، سوالات متداول، توضیحات سرویس‌ها، مشخصات
 * محصولات و جزئیات پروژه‌ها — را به‌صورت HTML معنایی در سند اولیه رندر
 * می‌کند. خزنده‌های RAG و هوش مصنوعی بدون نیاز به اجرای JavaScript به
 * این محتوا دسترسی دارند.
 *
 * محتوا به زبان فارسی (زبان اصلی سایت) رندر می‌شود. نسخه انگلیسی از
 * طریق تعامل کاربر (Language Toggle) در سمت کلاینت فعال می‌شود.
 *
 * این لایه از نظر بصری فشرده است (متن خوانا با تایپوگرافی ساده) تا تجربه
 * کاربر انسانی را مختل نکند، اما برای موتورهای جستجو و هوش مصنوعی کاملاً
 * قابل خواندن است.
 */

export function ServerContentLayer() {
  return (
    <section
      id="content-archive"
      aria-label="آرشیو محتوای کامل | Full content archive"
      aria-hidden="true"
      hidden
      style={{ display: "none" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-foreground">آرشیو کامل محتوای پارسا انرژی</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          تمام مقالات، سوالات متداول، خدمات و مشخصات محصولات در ادامه به‌صورت متن کامل و قابل
          استناد برای موتورهای جستجو و دستیاران هوش مصنوعی ارائه می‌شود.
        </p>

        {/* --- Articles (full body, server-rendered) --- */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground">دانشنامه فنی — مقالات کامل</h3>
          {articles.map((article, idx) => (
            <article key={article.slug} className="mb-10 border-b border-border pb-8 last:border-0">
              <h4 className="mb-1 text-lg font-bold text-foreground">{article.title.fa}</h4>
              <p className="mb-3 text-xs text-muted-foreground">
                دسته: {article.category.fa} · زمان مطالعه: {article.readTime.fa} · تاریخ: {article.date} · نویسنده: {article.author.fa}
              </p>

              {/* GEO-003: Answer Capsule (BLUF) — 40-120 words, direct answer, no links */}
              <p className="mb-4 rounded-lg bg-primary/5 p-4 text-sm font-medium leading-relaxed text-foreground">
                {article.excerpt.fa}
              </p>

              {/* Article body — full paragraphs, server-rendered */}
              <div className="space-y-3">
                {article.body.map((para, i) => (
                  <p key={i} className="text-sm leading-7 text-muted-foreground">{para.fa}</p>
                ))}
              </div>

              {/* Article FAQs — visible in HTML, not behind a click */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-5">
                  <h5 className="mb-3 text-base font-semibold text-foreground">سوالات متداول این مقاله</h5>
                  <dl className="space-y-3">
                    {article.faqs.map((f, i) => (
                      <div key={i} className="rounded-lg border border-border p-3">
                        <dt className="mb-1 text-sm font-semibold text-foreground">{f.q.fa}</dt>
                        <dd className="text-sm text-muted-foreground">{f.a.fa}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* --- Services (full details, server-rendered) --- */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground">خدمات تخصصی پارسا انرژی</h3>
          {services.map((service) => (
            <article key={service.slug} className="mb-8 border-b border-border pb-6 last:border-0">
              <h4 className="mb-1 text-lg font-bold text-foreground">{service.name.fa}</h4>
              <p className="mb-2 text-sm font-medium text-primary">{service.tagline.fa}</p>
              <p className="mb-3 text-sm leading-7 text-muted-foreground">{service.description.fa}</p>

              <div className="mb-3">
                <strong className="text-sm text-foreground">شامل موارد: </strong>
                <span className="text-sm text-muted-foreground">{service.features.map((f) => f.fa).join("، ")}.</span>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-foreground">خروجی‌ها: </strong>
                <span className="text-sm text-muted-foreground">{service.deliverables.map((d) => d.fa).join("، ")}.</span>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-foreground">عناصر اعتماد: </strong>
                <span className="text-sm text-muted-foreground">{service.trust.map((t) => t.fa).join("، ")}.</span>
              </div>

              {service.faqs.length > 0 && (
                <dl className="mt-3 space-y-2">
                  {service.faqs.map((f, i) => (
                    <div key={i}>
                      <dt className="text-sm font-semibold text-foreground">{f.q.fa}</dt>
                      <dd className="text-sm text-muted-foreground">{f.a.fa}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>

        {/* --- Products (specs, server-rendered) --- */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground">محصولات و تجهیزات — مشخصات کامل</h3>
          {products.map((product) => (
            <article key={product.slug} className="mb-6 border-b border-border pb-5 last:border-0">
              <h4 className="mb-1 text-base font-bold text-foreground">{product.name.fa}</h4>
              <p className="mb-1 text-sm text-muted-foreground">{product.description.fa}</p>
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>برند:</strong> {product.brand} · <strong>دسته:</strong> {product.category.fa} · <strong>{product.priceFrom.fa.includes("استعلام") ? "قیمت" : "قیمت از"}:</strong> {product.priceFrom.fa}
              </p>
              <ul className="text-sm text-muted-foreground">
                {product.specs.map((s) => (
                  <li key={s.label.fa}><strong>{s.label.fa}:</strong> {s.value.fa}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>کاربردها:</strong> {product.applications.map((a) => a.fa).join("، ")}.
              </p>
              {product.faqs.length > 0 && (
                <dl className="mt-2 space-y-1">
                  {product.faqs.map((f, i) => (
                    <div key={i}>
                      <dt className="text-sm font-semibold text-foreground">{f.q.fa}</dt>
                      <dd className="text-sm text-muted-foreground">{f.a.fa}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>

        {/* --- Projects (details, server-rendered) --- */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground">پروژه‌ها و پرونده‌های اجرایی</h3>
          {projects.map((project) => (
            <article key={project.slug} className="mb-6 border-b border-border pb-5 last:border-0">
              <h4 className="mb-1 text-base font-bold text-foreground">{project.title.fa}</h4>
              <p className="mb-1 text-xs text-muted-foreground">
                {project.sector.fa} · {project.location.fa} · {project.capacity.fa} · {project.year}
              </p>
              <p className="mb-2 text-sm text-muted-foreground">{project.summary.fa}</p>
              <ul className="text-sm text-muted-foreground">
                {project.highlights.map((h, i) => (<li key={i}>{h.fa}</li>))}
              </ul>
            </article>
          ))}
        </div>

        {/* --- Company FAQs (server-rendered, matches JSON-LD exactly) --- */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-foreground">سوالات متداول شرکت</h3>
          <dl className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <dt className="mb-2 text-sm font-bold text-foreground">{faq.q.fa}</dt>
                <dd className="text-sm leading-7 text-muted-foreground">{faq.a.fa}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* --- Knowledge Base articles (full body, server-rendered for SEO) --- */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-foreground">دانشنامه و اخبار — مقالات کامل</h3>
          {kbArticles.map((article) => (
            <article key={article.slug} className="mb-8 border-b border-border pb-6 last:border-0">
              <h4 className="mb-1 text-lg font-bold text-foreground">{article.title.fa}</h4>
              <p className="mb-2 text-xs text-muted-foreground">
                دسته: {article.categoryLabel.fa} · زمان مطالعه: {article.readTime.fa} · تاریخ: {article.date}
              </p>
              <p className="mb-3 rounded-lg bg-primary/5 p-3 text-sm font-medium leading-relaxed text-foreground">
                {article.excerpt.fa}
              </p>
              <div className="space-y-2">
                {article.body.fa.map((section, i) => (
                  <div key={i}>
                    <h5 className="text-sm font-bold text-foreground">{section.h2}</h5>
                    <p className="text-sm leading-7 text-muted-foreground">{section.p}</p>
                  </div>
                ))}
              </div>
              {article.faqs.length > 0 && (
                <dl className="mt-3 space-y-1">
                  {article.faqs.map((f, i) => (
                    <div key={i}>
                      <dt className="text-sm font-semibold text-foreground">{f.q.fa}</dt>
                      <dd className="text-sm text-muted-foreground">{f.a.fa}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
