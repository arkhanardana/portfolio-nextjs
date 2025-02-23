import { Braces } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import BlurFade from "./ui/blur-fade";
import { FloatingNav } from "./ui/floating-navbar";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import Link from "next/link";
import { Meteors } from "./ui/meteors";

export default function Hero() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <section className="relative h-screen bg-[#0C0C0C] w-full overflow-hidden">
      <Meteors number={40} />
      <FloatingNav navItems={navItems} />
      <div className="flex items-center gap-2 py-6 mx-8">
        <Braces color="#d1d5db" />
        <Link href="/" className="text-xl font-bold z-10 text-gray-300">
          Arkhan Ardana
        </Link>
      </div>
      <section className="relative flex flex-col items-center justify-center text-center h-[95svh] w-full z-10">
        <Avatar className="mb-6 w-40 h-40 md:w-60 md:h-60">
          <BlurFade delay={0.4} inView>
            <AvatarImage src="/khun.jpeg" />
            <AvatarFallback>AA</AvatarFallback>
          </BlurFade>
        </Avatar>
        <BlurFade delay={0.4} inView>
          <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-300">
            Hi, I&apos;m <span>Arkhan Ardana</span>.
          </h1>
          <p className="max-w-4xl mt-4 text-base sm:text-xl md:text-2xl text-gray-200">
            I&apos;m a passionate developer creating modern, interactive, and responsive web applications.
          </p>
        </BlurFade>
        <div className="relative w-full mx-auto mt-12">
          <VelocityScroll
            text="WEB DEVELOPER "
            default_velocity={5}
            className="text-center text-6xl font-bold tracking-[-0.02em] drop-shadow-sm text-gray-300 md:text-7xl lg:text-9xl md:leading-[5rem]"
          />
        </div>
      </section>
    </section>
  );
}
