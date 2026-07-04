import { organizationSchema, websiteSchema, faqSchema, buildArticleSchemas } from "@/lib/seo-data";

/**
 * GEO-005: Sitewide JSON-LD structured data injected once in the root layout.
 *
 * - Organization: company identity with sameAs (Knowledge Graph ready)
 * - WebSite: site + SearchAction (enables AI/search sitelinks search box)
 * - FAQPage: top-level company FAQs — exactly matching on-page text (ServerContentLayer)
 * - BlogPosting (×8): every knowledge-center article with datePublished/dateModified
 *
 * All schemas are emitted as server-rendered <script> tags so RAG crawlers
 * and AI answer engines can parse them without executing JavaScript.
 */
export function StructuredData() {
  const articleSchemas = buildArticleSchemas();
  return (
    <>
      {/* Organization + ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* FAQPage — matches on-page FAQ text exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* BlogPosting for each knowledge-center article */}
      {articleSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
