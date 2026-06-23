import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  Menu,
  MessageSquare,
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen mx-auto min-w-7 flex-col bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%),linear-gradient(180deg,#fff_0%,#f8fbff_45%,#ffffff_100%)] text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/80">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="#top" className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-2 text-primary shadow-sm ring-1 ring-primary/10">
              <Scale className="size-5" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight">LegalFlow AI</p>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">Modern legal operations</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#features" className="transition-colors hover:text-primary">Features</Link>
            <Link href="#ai" className="transition-colors hover:text-primary">AI Capabilities</Link>
            <Link href="#practice-areas" className="transition-colors hover:text-primary">Practice Areas</Link>
            <Link href="#faq" className="transition-colors hover:text-primary">FAQ</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">Log in</Button>
            <Button size="sm" className="shadow-sm">Get Started</Button>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="container py-14 sm:py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col items-start gap-6 text-left">
              <Badge variant="secondary" className="rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-sm">
                <Sparkles className="mr-2 size-3 text-primary" />
                The future of legal practice
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Legal Help Shouldn't Be Difficult to Access
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
                 Get answers to your questions, upload documents securely, and schedule a consultation with our legal team—all from one place.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="px-6 shadow-sm">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
              <div className="grid w-full gap-3 sm:grid-cols-3">
                {[
                  ["24/7", "Always-on intake"],
                  ["38%", "Faster response time"],
                  ["92%", "Lead qualification"],
                ].map(([value, label]) => (
                  <article key={label} className="rounded-2xl border border-border/80 bg-background/90 p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-foreground">{value}</p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[28px] border border-border/80 bg-background/95 p-5 shadow-[0_18px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[24px] bg-linear-to-br from-primary/10 via-background to-muted/70 p-5 ring-1 ring-primary/10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Daily operations</p>
                    <p className="text-xs text-muted-foreground">Live overview for your legal team</p>
                  </div>
                  <Badge variant="outline" className="rounded-full">Live</Badge>
                </div>

                <div className="grid gap-3">
                  {[
                    { icon: Calendar, title: "Consultation bookings", value: "16 today", accent: "bg-primary/10 text-primary" },
                    { icon: MessageSquare, title: "Client replies", value: "9 pending", accent: "bg-emerald-500/10 text-emerald-600" },
                    { icon: Shield, title: "Document review", value: "6 secure files", accent: "bg-amber-500/10 text-amber-600" },
                  ].map(({ icon: Icon, title, value, accent }) => (
                    <article key={title} className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/90 p-3 shadow-sm">
                      <div className={`rounded-xl p-2 ${accent}`}>
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground">{value}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <TrendingUp className="size-4" />
                    Conversion improved this week
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Automated intake + smart scheduling reduced admin time and improved response quality for every intake request.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="features" className="container py-10 sm:py-16">
          <div className="rounded-[32px] border border-border/80 bg-muted/50 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-10 flex flex-col gap-3 text-center lg:items-center">
              <Badge variant="outline" className="w-fit">Everything in one place</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">One ecosystem, total control</h2>
              <p className="max-w-2xl text-muted-foreground">A modern legal-tech stack built for speed, trust, and a seamless client flow across every touchpoint.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Globe, title: "Public website", copy: "Conversion-first pages, secure booking, and rich practice-area content.", bullets: ["Practice area pages", "Consultation booking", "Blog and resources"] },
                { icon: Briefcase, title: "Firm dashboard", copy: "See leads, matters, calendars, and team workload in one place.", bullets: ["Lead management", "Case tracking", "Team coordination"] },
                { icon: Users, title: "Client portal", copy: "Give clients a secure channel for updates, forms, and document sharing.", bullets: ["Secure messaging", "Document uploads", "Billing and invoices"] },
                { icon: BarChart3, title: "Marketing CRM", copy: "Refine campaigns, monitor SEO, and measure conversion performance.", bullets: ["Content management", "SEO insights", "Analytics"] },
              ].map(({ icon: Icon, title, copy, bullets }) => (
                <Card key={title} className="h-full border-border/80 bg-background/90 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription>{copy}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 text-sm text-muted-foreground">
                      {bullets.map((item) => (
                        <li key={item} className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" /> {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" className="container py-10 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit">AI capabilities</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Smart automation that feels like an extension of your team</h2>
              <p className="text-lg text-muted-foreground">From intake to follow-up, LegalFlow AI helps your staff move faster without sacrificing the human part of the client relationship.</p>
              <div className="grid gap-4">
                {[
                  { icon: Bot, title: "AI legal receptionist", text: "Qualifies leads, answers FAQs, and captures consultation details around the clock." },
                  { icon: FileText, title: "AI intake assistant", text: "Gathers facts, requests supporting documents, and organizes information automatically." },
                  { icon: Sparkles, title: "AI content generation", text: "Drafts blog posts, practice-area pages, and client-ready summaries in your voice." },
                ].map(({ icon: Icon, title, text }) => (
                  <article key={title} className="flex gap-4 rounded-3xl border border-border/80 bg-background/95 p-4 shadow-sm">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" /></div>
                    <div>
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-border/80 bg-background/95 p-4 shadow-[0_18px_60px_-30px_rgba(15,23,42,0.45)] sm:p-6">
              <div className="rounded-[28px] bg-linear-to-br from-primary/8 via-background to-muted/80 p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-border/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Bot className="size-4" /></div>
                    <div>
                      <p className="text-sm font-semibold">AI assistant</p>
                      <p className="text-[11px] text-muted-foreground">Online · Ready to respond</p>
                    </div>
                  </div>
                  <Badge variant="outline">Secure</Badge>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-muted p-3">Hello! I can help with intake, scheduling, and follow-up for your clients.</div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-primary p-3 text-primary-foreground">I need a consultation for a business contract issue this week.</div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-muted p-3">Absolutely — I can qualify the matter, collect key facts, and send a secure booking link.</div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/80 bg-background/90 px-3 py-2 text-xs text-muted-foreground">
                  <span>Type your message...</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="practice-areas" className="container py-10 sm:py-16">
          <div className="rounded-[32px] border border-border/80 bg-muted/40 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-10 flex flex-col gap-3 text-center">
              <Badge variant="outline" className="w-fit self-center">Built for every practice</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Flexible enough for any legal specialty</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">Adapt the platform to the way your business works, whether you focus on family, real estate, immigration, or high-volume litigation.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {['Family Law','Business Law','Real Estate','Personal Injury','Criminal Defense','Immigration','Estate Planning','Employment Law'].map((area) => (
                <article key={area} className="group flex items-center justify-between rounded-2xl border border-border/80 bg-background/95 p-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5">
                  <span className="font-medium">{area}</span>
                  <ChevronRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="container py-10 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-border/80 bg-background/95 p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-3">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1"><AccordionTrigger>How does the AI legal receptionist work?</AccordionTrigger><AccordionContent>The AI receptionist uses natural language processing to interact with visitors on your website. It can answer common questions, qualify leads, and directly book consultations into your calendar.</AccordionContent></AccordionItem>
              <AccordionItem value="item-2"><AccordionTrigger>Is my client data secure?</AccordionTrigger><AccordionContent>Yes. All data is encrypted in transit and at rest, and our secure client portal keeps sensitive communication and documents protected.</AccordionContent></AccordionItem>
              <AccordionItem value="item-3"><AccordionTrigger>Can I customize the website content?</AccordionTrigger><AccordionContent>Absolutely. The marketing CRM lets you update practice-area pages, attorney profiles, blog posts, and testimonials while using AI-assisted drafting for faster content creation.</AccordionContent></AccordionItem>
              <AccordionItem value="item-4"><AccordionTrigger>Does it integrate with my existing calendar?</AccordionTrigger><AccordionContent>Yes, LegalFlow AI integrates with major calendar providers such as Google Calendar and Outlook to prevent double-booking and streamline your schedule.</AccordionContent></AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="container py-10 sm:py-16">
          <div className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-14 text-center text-primary-foreground shadow-[0_18px_60px_-28px_rgba(15,23,42,0.45)] sm:px-10 sm:py-16 lg:px-14">
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
              <Badge variant="secondary" className="border border-white/10 bg-white/10 text-primary-foreground">Ready to modernize?</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Bring clarity, speed, and trust to your legal operations.</h2>
              <p className="max-w-2xl text-primary-foreground/85">Join modern law firms that are using AI to reduce administrative burden, improve follow-up, and create a better client experience from the very first impression.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" className="px-8">Get started now</Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-transparent px-8 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">Contact sales</Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 size-64 translate-y-1/2 -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80 bg-muted/40">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-2 text-primary"><Scale className="size-5" /></div>
                <span className="text-xl font-semibold tracking-tight">LegalFlow AI</span>
              </div>
              <p className="text-sm text-muted-foreground">The digital operating system for modern law firms.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Platform</h4>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Firm Dashboard</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Client Portal</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">AI Receptionist</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Marketing CRM</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Practice Areas</h4>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Business Law</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Family Law</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Personal Injury</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Criminal Defense</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-sm text-muted-foreground sm:flex-row">
            <p>© 2026 LegalFlow AI Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary">Twitter</Link>
              <Link href="#" className="hover:text-primary">LinkedIn</Link>
              <Link href="#" className="hover:text-primary">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
