"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "./section-header";
import { useLang } from "@/components/lang-provider";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  purpose: z.string().min(1),
  message: z.string().min(10),
});
type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const { t } = useLang();
  const [submitting, setSubmitting] = React.useState(false);
  const {
    register, handleSubmit, reset, setValue, watch, formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { purpose: t("purposeConsultation") } });

  const purpose = watch("purpose");

  const purposes = [
    t("purposeConsultation"), t("purposeQuotation"), t("purposeRepair"),
    t("purposeMaintenance"), t("purposeCallback"), t("purposeEquipment"), t("purposeOther"),
  ];

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success(t("formSuccess"));
      reset({ name: "", email: "", phone: "", message: "", purpose: t("purposeConsultation") });
    } catch {
      toast.error(t("formError"));
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: t("contactPhone"), value: "۰۹۱۵۸۲۲۲۱۹۹", href: "tel:+989158222199", ltr: true },
    { icon: Mail, label: t("contactEmail"), value: "info@parsenergyco.ir", href: "mailto:info@parsenergyco.ir", ltr: true },
    { icon: MapPin, label: t("contactOffice"), value: "مشهد، بزرگراه هاشمی رفسنجانی، نبش بلوار اقدسیه، طبقه اول | Mashhad, Hashemi Rafsanjani Highway, corner of Aqdasiyeh Blvd, 1st Floor" },
    { icon: Clock, label: t("contactHours"), value: t("hoursValue") },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("contactEyebrow")}
          title={<>{t("contactTitle1")} <span className="text-gradient-solar">{t("contactTitle2")}</span></>}
          description={t("contactDesc")}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">{t("formName")}</Label>
                <Input id="name" placeholder="..." {...register("name")} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">{t("formEmail")}</Label>
                <Input id="email" type="email" dir="ltr" placeholder="you@company.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">{t("formPhone")}</Label>
                <Input id="phone" dir="ltr" placeholder="+98 910 000 0000" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="purpose">{t("formPurpose")}</Label>
                <Select value={purpose} onValueChange={(v) => setValue("purpose", v)}>
                  <SelectTrigger id="purpose"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {purposes.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}
                  </SelectContent>
                </Select>
                {errors.purpose && <p className="text-xs text-destructive">{errors.purpose.message}</p>}
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="message">{t("formMessage")}</Label>
              <Textarea id="message" rows={5} placeholder={t("formMessagePlaceholder")} {...register("message")} />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={submitting} className="shadow-solar">
                {submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> <span className="mx-2">{t("sending")}</span></>
                ) : (
                  <><Send className="h-4 w-4" /> <span className="mx-2">{t("formSubmit")}</span></>
                )}
              </Button>
              <p className="text-xs text-muted-foreground">{t("formPrivacy")}</p>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-foreground">{t("contactInfoTitle")}</h3>
              <ul className="mt-4 space-y-3">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-end text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} dir="rtl" className="block text-end text-sm font-semibold text-foreground hover:text-primary" style={{ unicodeBidi: "plaintext" }}>{c.value}</a>
                      ) : (
                        <div dir="rtl" className="text-end text-sm font-semibold text-foreground" style={{ unicodeBidi: "plaintext" }}>{c.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a href="https://wa.me/989158222199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/5 p-6 transition-all hover:border-green-500/60 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/15">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-display text-base font-bold text-foreground">{t("whatsappTitle")}</div>
                <div className="text-sm text-muted-foreground">{t("whatsappDesc")}</div>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-tech/10 p-6">
              <h3 className="font-display text-base font-bold text-foreground">{t("calcFirstTitle")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("calcFirstDesc")}</p>
              <Button asChild variant="outline" className="mt-4 w-full">
                <a href="#tools">{t("openCalculators")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
