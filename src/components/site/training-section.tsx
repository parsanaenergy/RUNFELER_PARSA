"use client";

import { GraduationCap, ArrowRight, CheckCircle2, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import { useLang } from "@/components/lang-provider";
import { faNum } from "@/lib/utils";

export function TrainingSection() {
  const { t, lang } = useLang();
  const isFa = lang === "fa";
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);

  const courses = isFa
    ? [
        { title: "دوره تاسیسات مکانیکی", desc: "طراحی، نصب و راه‌اندازی پکیج، کولر، هواساز و پمپ آب.", duration: "۸۰ ساعت" },
        { title: "دوره نیروگاه خورشیدی", desc: "طراحی، نصب و راه‌اندازی نیروگاه خورشیدی آفگرید و هایبرید.", duration: "۱۲۰ ساعت" },
        { title: "دوره برق صنعتی و ساختمان", desc: "تابلو برق، سیم‌کشی صنعتی، حفاظت و اتوماسیون.", duration: "۱۰۰ ساعت" },
        { title: "تعمیر اینورتر و برد الکترونیکی", desc: "تشخیص و تعمیر سطح قطعه اینورتر و برد کنترل.", duration: "۶۰ ساعت" },
        { title: "تعمیرات کولر و پکیج", desc: "عیب‌یابی و تعمیر کولر گازی، پکیج و پمپ.", duration: "۵۰ ساعت" },
        { title: "MPPT و کنترلر شارژ", desc: "انتخاب، تنظیم و عیب‌یابی کنترلر شارژ.", duration: "۳۰ ساعت" },
      ]
    : [
        { title: "HVAC Mechanical Course", desc: "Design, install and commission packages, ACs, air handlers and pumps.", duration: "80 hrs" },
        { title: "Solar Power Plant Course", desc: "Design, install and commission off-grid and hybrid solar plants.", duration: "120 hrs" },
        { title: "Industrial & Building Electrical", desc: "Panels, industrial wiring, protection and automation.", duration: "100 hrs" },
        { title: "Inverter & Board Repair", desc: "Component-level diagnosis and repair of inverters and control boards.", duration: "60 hrs" },
        { title: "AC & Package Repair", desc: "Troubleshooting and repair of ACs, packages and pumps.", duration: "50 hrs" },
        { title: "MPPT & Charge Controllers", desc: "Selection, configuration and troubleshooting of charge controllers.", duration: "30 hrs" },
      ];

  return (
    <section id="training" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("navTraining")}
          title={<>{isFa ? "آموزشگاه آزاد" : "Vocational"} <span className="text-gradient-solar">{isFa ? "فنی‌وحرفه‌ای پارسا انرژی" : "Training School"}</span></>}
          description={isFa
            ? "دوره‌های تخصصی کوتاه‌مدت و مهارتی در حوزه تاسیسات مکانیکی، برق و انرژی خورشیدی، با مدرک معتبر و مسیر شغلی برای فارغ‌التحصیلان."
            : "Specialist short-term and skill courses in mechanical HVAC, electrical and solar energy, with recognized certificates and a career path for graduates."}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-tech/30 bg-tech/5 p-6">
            <Award className="h-8 w-8 text-tech" />
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">{isFa ? "مدرک معتبر" : "Recognized certificate"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{isFa ? "مدرک فنی‌وحرفه‌ای قابل استناد برای بازار کار." : "Recognized vocational certificate valid for the job market."}</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">{isFa ? "مسیر شغلی" : "Career path"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{isFa ? "فرصت استخدام در تیم پارسا انرژی پس از فارغ‌التحصیلی." : "Employment opportunity at Parsa Energy after graduation."}</p>
          </div>
          <div className="rounded-2xl border border-amber/30 bg-amber/5 p-6">
            <GraduationCap className="h-8 w-8 text-amber" />
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">{isFa ? "آموزش عملی" : "Hands-on training"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{isFa ? "آزمایشگاه و کارگاه مجهز با تجهیزات واقعی." : "Equipped lab and workshop with real equipment."}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tech/10">
                  <GraduationCap className="h-5 w-5 text-tech" />
                </div>
                <Badge variant="outline" className="tabular-nums">{fmt(c.duration)}</Badge>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                {isFa ? "ثبت‌نام باز است" : "Enrollment open"}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:flex-row">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">{isFa ? "برای ثبت‌نام یا مشاوره دوره تماس بگیرید." : "Contact us to enroll or for course advising."}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{isFa ? "تلفن: ۰۹۱۰۸۸۸۸۱۹۹" : "Phone: +98 910 888 8199"}</p>
          </div>
          <Button asChild size="lg" className="shadow-solar">
            <a href="#contact">{isFa ? "ثبت‌نام دوره" : "Enroll now"} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
