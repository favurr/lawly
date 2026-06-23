import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {Video} from "@imagekit/next";

export default function HeroSection() {
  return (
    <>
      <main className="relative">
        <section>
          <div className="h-[calc(100dvh+3rem)] max-w-full w-full aspect-video md:aspect-auto relative pointer-events-none overflow-hidden rounded-b-3xl lg:rounded-b-[3rem]">
            <Video
              autoPlay
              // loop
              muted
              className="size-full -scale-x-000 object-cover"
              src="/LegalFlow/Home/hero-hi.mp4"
            ></Video>
            <div className="absolute inset-0 bg-linear-to-t from-black/70" />
          </div>
            <div className="lg:max-w-full h-screen w-full aspect-video md:aspect-auto absolute top-0 z-2 flex flex-col justify-end px-6">
              <div className="mx-auto w-full max-w-7xl pb-6 md:pb-12 lg:px-12 lg:pb-32">
                <div className="max-w-2xl">
                  <h1 className="text-balance text-primary-foreground text-5xl md:text-6xl xl:text-7xl">
                    Trusted Legal Counsel. Proven Results.
                  </h1>
                  <p className="mt-6 text-primary-foreground text-balance text-lg">
                    When legal challenges arise, you need experienced professionals who understand the law, protect your interests, and fight for the best possible outcome.
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full pl-5 pr-3 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Schedule a Consultation</span>
                        <ChevronRight className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
