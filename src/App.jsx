import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Check,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    category: "FOR BUSINESSES",
    title: "Web & App Development",
    description:
      "High-performance websites and applications designed to turn visitors into customers.",
  },
  {
    number: "02",
    category: "CUSTOM SOLUTIONS",
    title: "Software Development",
    description:
      "Scalable software solutions built around your business processes and requirements.",
  },
  {
    number: "03",
    category: "ONLINE SELLERS",
    title: "E-commerce Solutions",
    description:
      "Conversion-focused online stores with seamless shopping experiences.",
  },
  {
    number: "04",
    category: "GROWTH FOCUSED",
    title: "Digital Marketing",
    description:
      "Data-driven digital strategies that increase visibility, engagement and growth.",
  },
  
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Business & Market Analysis",
    description:
      "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Strategy & Architecture",
    description:
      "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI/UX & Branding",
    description:
      "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Web & App Development",
    description:
      "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "Quality Assurance",
    description:
      "We test every feature to ensure performance, security, and usability across all devices before launch.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Launch & Growth",
    subtitle: "Deployment & Marketing",
    description:
      "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(".nav-logo", {
      y: -200,
      opacity: 0,
      duration: 0.7,
    })
      .from(
        ".nav-links",
        {
          y: -25,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.4"
      )
      .from(
        ".nav-cta",
        {
          y: -20,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, navRef);

  return () => ctx.revert();
}, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-[9999] w-full border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          className="nav-logo flex shrink-0 items-center gap-3"
        >
          <div>
            <img
              src="/logo.png"
              alt="Tcongs Infotech"
              className="h-32 w-40 object-contain"
            />
          </div>
        </a>

        {/* NAVIGATION */}
        <div className="nav-links hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="relative text-sm font-medium text-[#ed1750]"
          >
            Home

            <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-[#ed1750]" />
          </a>

          <a
            href="#process"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Company
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Solution
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Connect
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="nav-cta group relative z-[10000] flex shrink-0 items-center gap-2 rounded-full bg-[#ed1750] px-5 py-3 text-xs font-bold text-white opacity-100 shadow-[0_0_25px_rgba(237,23,80,0.15)]  hover:scale-105 hover:bg-[#ff245d] hover:shadow-[0_0_40px_rgba(237,23,80,0.35)] sm:px-6 sm:py-3 sm:text-sm"
        >
          <span className="whitespace-nowrap">
            Launch Your Idea
          </span>

          

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </a>
      </div>
    </nav>
  );
};

/* =========================================================
   HERO
========================================================= */
const Hero = () => {
  const heroRef = useRef(null);
  const cursorBallRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         CURSOR BALL INITIAL STATE
      ===================================================== */

      gsap.set(cursorBallRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        scale: 1,
      });

      /* =====================================================
         HERO TIMELINE
      ===================================================== */

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
      })
        .from(
          ".hero-line",
          {
            y: 100,
            opacity: 0,
            stagger: 0.12,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".floating-card",
          {
            scale: 0.8,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.3"
        );

      /* =====================================================
         HERO ORB
      ===================================================== */

      gsap.to(".hero-orb", {
        y: -30,
        x: 20,
        rotation: 8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         PINK GLOW
      ===================================================== */

      gsap.to(".pink-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         MOUSE FOLLOW
      ===================================================== */

      const mouseMove = (e) => {
        const x =
          (e.clientX / window.innerWidth - 0.5) * 30;

        const y =
          (e.clientY / window.innerHeight - 0.5) * 30;

        /*
         * BALL FOLLOWS MOUSE
         */

        gsap.to(cursorBallRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
        });

        /*
         * HERO ORB PARALLAX
         */

        gsap.to(".hero-orb", {
          x,
          y,
          duration: 1.2,
          ease: "power3.out",
        });

        /*
         * FLOATING CARDS PARALLAX
         */

        gsap.to(".floating-card", {
          x: x * 0.35,
          y: y * 0.35,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      window.addEventListener(
        "mousemove",
        mouseMove
      );

      /* =====================================================
         BUTTON HOVER
      ===================================================== */

      const buttons =
        heroRef.current.querySelectorAll(
          ".hero-button"
        );

      buttons.forEach((button) => {
        const handleEnter = () => {
          gsap.to(cursorBallRef.current, {
            scale: 4,
            backgroundColor: "#ffffff",
            boxShadow:
              "0 0 50px rgba(255,255,255,0.5)",
            duration: 0.3,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(cursorBallRef.current, {
            scale: 1,
            backgroundColor: "#ed1750",
            boxShadow:
              "0 0 30px rgba(237,23,80,0.7)",
            duration: 0.3,
            ease: "power3.out",
          });
        };

        button.addEventListener(
          "mouseenter",
          handleEnter
        );

        button.addEventListener(
          "mouseleave",
          handleLeave
        );

        button._handleEnter = handleEnter;
        button._handleLeave = handleLeave;
      });

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        window.removeEventListener(
          "mousemove",
          mouseMove
        );

        buttons.forEach((button) => {
          button.removeEventListener(
            "mouseenter",
            button._handleEnter
          );

          button.removeEventListener(
            "mouseleave",
            button._handleLeave
          );
        });
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-6 pb-20 pt-28 text-white"
    >
      {/* ===================================================
          CURSOR BALL
      =================================================== */}

      <div
        ref={cursorBallRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          h-5
          w-5
          rounded-full
          bg-[#ed1750]
          shadow-[0_0_30px_rgba(237,23,80,0.7)]
          will-change-transform
        "
      />

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#d9144f]/10 blur-[160px]" />

        <div className="pink-glow absolute right-[12%] top-[35%] h-[250px] w-[250px] rounded-full bg-[#ff174f]/20 blur-[100px]" />

        <div className="absolute bottom-0 left-[10%] h-[300px] w-[300px] rounded-full bg-lime-400/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">

        {/* =================================================
            BADGE
        ================================================= */}

        <div className="hero-badge mb-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ed1750]">
            <ShieldCheck size={15} />
          </div>

          <span className="text-xs font-medium text-white/70 sm:text-sm">
            Trusted by businesses worldwide
          </span>

          <div className="hidden items-center gap-1 sm:flex">
            {[1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="h-6 w-6 rounded-full border border-white/10 bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="relative max-w-[1150px]">

          <div className="hero-orb absolute left-1/2 top-1/2 z-[-1] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-gradient-to-br from-white/[0.14] via-white/[0.03] to-transparent opacity-80 shadow-[inset_0_0_80px_rgba(255,255,255,.08),0_0_100px_rgba(255,255,255,.04)] sm:h-[520px] sm:w-[520px]" />

          <h1 className="text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.88] tracking-[-0.06em]">

            <span className="hero-line block">
              SMART DIGITAL
            </span>

            <span className="hero-line block">
              SOLUTIONS{" "}
              <span className="text-white/35">
                FOR
              </span>
            </span>

            <span className="hero-line block">
              MODERN{" "}
              <span className="text-[#ed1750]">
                BUSINESSES
              </span>
            </span>

          </h1>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="hero-description mt-10 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
          We help ambitious brands grow with{" "}
          <span className="text-[#ed1750]">
            web, apps & marketing
          </span>{" "}
          solutions built for the modern digital world.
        </p>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row">

          <a
            href="#contact"
            className="hero-button group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,.15)]"
          >
            Schedule Meeting

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

          <a
            href="#services"
            className="hero-button rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            Explore Services
          </a>

        </div>

        {/* =================================================
            FLOATING CARDS
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 hidden lg:block">

          <div className="floating-card absolute left-[5%] top-[55%] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-xl">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#ed1750]/20">
              <Sparkles
                size={17}
                className="text-[#ed1750]"
              />
            </div>

            <p className="text-xs text-white/40">
              Digital Growth
            </p>

            <p className="mt-1 text-sm font-semibold">
              +248% Engagement
            </p>

          </div>

          <div className="floating-card absolute right-[5%] top-[40%] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-xl">

            <div className="mb-3 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-lime-400" />

              <span className="text-xs text-white/50">
                Live Projects
              </span>

            </div>

            <p className="text-2xl font-bold">
              24+
            </p>

            <p className="text-xs text-white/40">
              businesses growing
            </p>

          </div>

        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="absolute bottom-4 flex flex-col items-center gap-3">

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Scroll to explore
          </span>

          <div className="h-10 w-px overflow-hidden bg-white/10">

            <div className="h-1/2 w-full animate-pulse bg-white/60" />

          </div>

        </div>

      </div>
    </section>
  );
};
/* =========================================================
   SERVICES
========================================================= */

/* =========================================================
   SERVICES SECTION
========================================================= */

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      /* -----------------------------------------------------
         INITIAL STATES
      ----------------------------------------------------- */

      gsap.set(".services-label", {
        y: 40,
        opacity: 0,
      });

      gsap.set(".services-heading-line", {
        y: 100,
        opacity: 0,
      });

      gsap.set(".services-description", {
        y: 30,
        opacity: 0,
      });

      gsap.set(cards, {
        y: 100,
        opacity: 0,
      });

      /* -----------------------------------------------------
         MAIN PINNED TIMELINE
      ----------------------------------------------------- */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Section starts pinning when it reaches the top
          start: "top top",

          // How long the section remains pinned
          end: "+=2600",

          pin: true,

          // Scroll controls animation
          scrub: 1,

          // Prevent jump when pinning starts
          anticipatePin: 1,

          // Recalculate on resize
          invalidateOnRefresh: true,
        },
      });

      /* -----------------------------------------------------
         LABEL
      ----------------------------------------------------- */

      tl.to(".services-label", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })

        /* ---------------------------------------------------
           HEADING
        --------------------------------------------------- */

        .to(
          ".services-heading-line",
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.15"
        )

        /* ---------------------------------------------------
           DESCRIPTION
        --------------------------------------------------- */

        .to(
          ".services-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25"
        )

        /* ---------------------------------------------------
           SERVICE CARDS
        --------------------------------------------------- */

        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.1"
        );

      /* -----------------------------------------------------
         SUBTLE BACKGROUND ANIMATION
      ----------------------------------------------------- */

      gsap.to(".services-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* -----------------------------------------------------
         CARD HOVER ANIMATIONS
      ----------------------------------------------------- */

      cards.forEach((card) => {
        const line = card.querySelector(
          ".service-line"
        );

        const arrow = card.querySelector(
          ".service-arrow"
        );

        const number = card.querySelector(
          ".service-number"
        );

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(line, {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 6,
            y: -6,
            rotate: 45,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(number, {
            color: "#ed1750",
            duration: 0.3,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(line, {
            scaleX: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(number, {
            color: "rgba(255,255,255,0.25)",
            duration: 0.3,
          });
        };

        card.addEventListener(
          "mouseenter",
          enter
        );

        card.addEventListener(
          "mouseleave",
          leave
        );

        card._enter = enter;
        card._leave = leave;
      });

      /* -----------------------------------------------------
         CLEANUP
      ----------------------------------------------------- */

      return () => {
        cards.forEach((card) => {
          card.removeEventListener(
            "mouseenter",
            card._enter
          );

          card.removeEventListener(
            "mouseleave",
            card._leave
          );
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080808] px-6 py-20 text-white lg:px-10"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow */}
        <div className="services-glow absolute left-[5%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#ed1750]/[0.06] blur-[150px]" />

        {/* Green glow */}
        <div className="absolute bottom-[-20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-lime-400/[0.04] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-[1200px] items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="services-label mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ed1750]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ed1750]">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <div className="overflow-hidden">
              <h2 className="services-heading-line text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                DIGITAL
                <br />
                SOLUTIONS
              </h2>
            </div>

            <div className="mt-2 overflow-hidden">
              <h2 className="services-heading-line text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white/30 sm:text-6xl lg:text-7xl">
                DEVELOPMENT
                <br />
                SERVICES
              </h2>
            </div>

            {/* Description */}
            <p className="services-description mt-8 max-w-md text-sm leading-7 text-white/40 sm:text-base">
              Scalable digital solutions for modern
              businesses. From websites and software to
              branding and growth, we build experiences
              that move businesses forward.
            </p>

            {/* Small stats */}
            <div className="services-description mt-10 flex gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-bold">
                  24+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  8+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                  Years
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  100%
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                  Commitment
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE - SERVICES
          ================================================= */}

          <div className="services-grid grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;

    if (!card) return;

    const line =
      card.querySelector(".service-line");

    const arrow =
      card.querySelector(".service-arrow");

    const description =
      card.querySelector(
        ".service-description"
      );

    gsap.to(card, {
      y: -8,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(line, {
      scaleX: 1,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(arrow, {
      x: 6,
      y: -6,
      rotate: 45,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(description, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    const line =
      card.querySelector(".service-line");

    const arrow =
      card.querySelector(".service-arrow");

    const description =
      card.querySelector(
        ".service-description"
      );

    gsap.to(card, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(line, {
      scaleX: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(arrow, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(description, {
      opacity: 0,
      y: 8,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative min-h-[250px] cursor-pointer overflow-hidden border-b border-r border-white/10 bg-transparent p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:min-h-[270px] sm:p-8"
    >
      {/* =================================================
          PINK TOP LINE
      ================================================= */}

      <div className="service-line absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-[#ed1750]" />

      {/* =================================================
          TOP
      ================================================= */}

      <div className="mb-10 flex items-start justify-between">
        <span
          className="service-number text-xs font-medium tracking-[0.2em] text-white/25"
          style={{
            color: "rgba(255,255,255,0.25)",
          }}
        >
          {service.number}
        </span>

        <div className="service-arrow flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 group-hover:border-[#ed1750]/50 group-hover:text-[#ed1750]">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* =================================================
          CATEGORY
      ================================================= */}

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
        {service.category}
      </p>

      {/* =================================================
          TITLE
      ================================================= */}

      <h3 className="max-w-[260px] text-xl font-medium leading-tight tracking-[-0.03em] sm:text-2xl">
        {service.title}
      </h3>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p className="service-description mt-4 max-w-[280px] translate-y-2 text-xs leading-6 text-white/40 opacity-0">
        {service.description}
      </p>

      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div className="absolute bottom-6 left-6 h-px w-7 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#ed1750] sm:left-8" />
    </div>
  );
};

/* =========================================================
   PROCESS SECTION
========================================================= */
const ProcessSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".process-step");

      /*
      =========================================================
      INITIAL STATES
      =========================================================
      */

      gsap.set(".process-title", {
        y: 80,
        opacity: 0,
      });

      gsap.set(".process-intro", {
        y: 30,
        opacity: 0,
      });

      /*
      All cards are stacked in exactly the same position.
      */

      gsap.set(steps, {
        y: 0,
        opacity: 1,
        zIndex: 1,
      });

      /*
      Discovery is on top initially.
      */

      gsap.set(steps[0], {
        zIndex: 10,
      });

      /*
      Image
      */

      gsap.set(".process-visual", {
        x: 80,
        opacity: 0,
      });

      /*
      =========================================================
      MAIN PINNED TIMELINE
      =========================================================
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          /*
          Start when the entire process section reaches
          the top of the viewport.
          */

          start: "top top",

          /*
          Large scroll area.
          */

          end: `+=${steps.length * 750}`,

          /*
          PIN EVERYTHING
          */

          pin: true,

          /*
          Scroll controls timeline
          */

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          /*
          Determine active card.
          */

          onUpdate: (self) => {
            const progress = self.progress;

            /*
            Reserve the first ~20% of the scroll
            for the heading/intro.

            Cards start after that.
            */

            const cardProgress = gsap.utils.mapRange(
              0.2,
              1,
              0,
              1,
              progress
            );

            const clampedProgress = gsap.utils.clamp(
              0,
              1,
              cardProgress
            );

            let currentStep = Math.floor(
              clampedProgress * steps.length
            );

            currentStep = Math.min(
              currentStep,
              steps.length - 1
            );

            setActiveStep((previous) => {
              if (previous !== currentStep) {
                return currentStep;
              }

              return previous;
            });
          },
        },
      });

      /*
      =========================================================
      HEADER ANIMATION
      =========================================================
      */

      tl.to(".process-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      })

        .to(
          ".process-intro",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )

        /*
        Keep header visible for a moment.
        This creates space before cards start moving.
        */

        .to({}, {
          duration: 0.5,
        })

        /*
        =======================================================
        IMAGE
        =======================================================
        */

        .to(
          ".process-visual",
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.2"
        );

      /*
      =========================================================
      CARD STACK
      =========================================================

      Every card is already positioned at the exact same
      location.

      Each new card comes from BELOW and covers the
      previous card.
      */

      steps.forEach((step, index) => {
        if (index === 0) {
          /*
          Discovery stays visible.
          */

          tl.to({}, {
            duration: 0.8,
          });

          return;
        }

        /*
        Make sure the new card is above the previous one.
        */

        tl.set(step, {
          zIndex: 10 + index,
        });

        /*
        New card starts below.
        */

        tl.fromTo(
          step,
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1.2,
            ease: "power3.inOut",
          }
        );

        /*
        Hold the current card.
        */

        tl.to({}, {
          duration: 0.8,
        });
      });

      /*
      =========================================================
      BACKGROUND GLOW
      =========================================================
      */

      gsap.to(".process-glow", {
        scale: 1.2,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
  ===========================================================
  MANUAL STEP CHANGE
  ===========================================================
  */

  const changeStep = (index) => {
    if (index === activeStep) return;

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",

      onComplete: () => {
        setActiveStep(index);

        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.04,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      },
    });
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080808] px-6 text-white lg:px-10"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="process-glow absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#ed1750]/10 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          PINNED CONTENT
      ===================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          <h2 className="process-title text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            From Idea to Scalable
            <br />

            <span className="text-white/35">
              Digital Solution
            </span>
          </h2>

          <p className="process-intro mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            At Tcongs Infotech, we follow a proven
            process to transform your ideas into
            high-performing digital products. From
            strategy to execution, we focus on
            delivering scalable and result-driven
            solutions.
          </p>
        </div>

        {/* ===================================================
            CARDS + IMAGE
        =================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

          {/* =================================================
              LEFT STACK
          ================================================= */}

          <div className="relative h-[430px]">

            {/* Vertical line */}

            <div className="absolute left-0 top-0 h-full w-px bg-white/10" />

            {processSteps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => changeStep(index)}
                className="
                  process-step
                  group
                  absolute
                  inset-0
                  h-full
                  w-full
                  bg-[#080808]
                  pl-6
                  pr-4
                  text-left
                  sm:pl-8
                "
              >
                {/* Active line */}

                <span
                  className={`
                    absolute
                    left-[-2px]
                    top-0
                    h-full
                    w-[3px]
                    transition-colors
                    duration-500
                    ${
                      activeStep === index
                        ? "bg-[#ed1750]"
                        : "bg-transparent"
                    }
                  `}
                />

                {/* Card content */}

                <div className="flex h-full flex-col justify-center">

                  {/* Number */}

                  <span
                    className={`
                      mb-6
                      text-sm
                      font-medium
                      tracking-[0.2em]
                      ${
                        activeStep === index
                          ? "text-[#ed1750]"
                          : "text-white/30"
                      }
                    `}
                  >
                    {step.number}
                  </span>

                  {/* Title */}

                  <h3
                    className={`
                      max-w-xl
                      text-4xl
                      font-black
                      leading-[0.95]
                      tracking-[-0.04em]
                      sm:text-5xl
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* Subtitle */}

                  <p className="mt-4 text-lg text-white/45">
                    {step.subtitle}
                  </p>

                  {/* Description */}

                  <p
                    className={`
                      mt-5
                      max-w-lg
                      text-sm
                      leading-7
                      ${
                        activeStep === index
                          ? "text-white/70"
                          : "text-white/40"
                      }
                    `}
                  >
                    {step.description}
                  </p>

                  {/* Bottom indicator */}

                  <div className="mt-8 flex items-center gap-3">

                    <span
                      className={`
                        h-px
                        ${
                          activeStep === index
                            ? "w-16 bg-[#ed1750]"
                            : "w-8 bg-white/20"
                        }
                      `}
                    />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                      Process
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="process-visual relative">

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">

              <img
                ref={imageRef}
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs backdrop-blur-md">
                {processSteps[activeStep].number} /{" "}
                {processSteps.length}
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                {processSteps[activeStep].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
/* =========================================================
   BIG CTA / BRAND GROWTH
========================================================= */

const GrowthSection = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const context = canvas.getContext("2d");

      /* =====================================================
         AVIF SETTINGS
      ===================================================== */

      const frameCount = 80;

      const images = [];

      const frameState = {
        frame: 0,
      };

      /* =====================================================
         FRAME PATH
      ===================================================== */

      const getFramePath = (index) => {
        const frameNumber = String(index + 1).padStart(
          4,
          "0"
        );

        return `/growth/frame_${frameNumber}.avif`;
      };

      /* =====================================================
         DRAW FRAME
         
         IMPORTANT:
         This uses CONTAIN behavior.
         The complete AVIF image will remain visible.
      ===================================================== */

      const drawFrame = (index) => {
        const image = images[index];

        if (!image || !image.complete) return;

        const rect = canvas.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        if (!width || !height) return;

        const imageRatio =
          image.naturalWidth / image.naturalHeight;

        const canvasRatio = width / height;

        let drawWidth;
        let drawHeight;

        /*
         * CONTAIN
         *
         * The complete image fits inside the box.
         */

        if (imageRatio > canvasRatio) {
          drawWidth = width;
          drawHeight = width / imageRatio;
        } else {
          drawHeight = height;
          drawWidth = height * imageRatio;
        }

        const x =
          (width - drawWidth) / 2;

        const y =
          (height - drawHeight) / 2;

        /*
         * Clear previous frame
         */

        context.clearRect(
          0,
          0,
          width,
          height
        );

        /*
         * Draw current frame
         */

        context.drawImage(
          image,
          x,
          y,
          drawWidth,
          drawHeight
        );
      };

      /* =====================================================
         LOAD AVIF FRAMES
      ===================================================== */

      let loadedImages = 0;

      const loadImages = () => {
        for (let i = 0; i < frameCount; i++) {
          const image = new Image();

          image.src = getFramePath(i);

          image.onload = () => {
            loadedImages++;

            if (loadedImages === frameCount) {
              drawFrame(0);
            }
          };

          image.onerror = () => {
            console.error(
              `Failed to load frame: ${getFramePath(i)}`
            );
          };

          images.push(image);
        }
      };

      /* =====================================================
         CANVAS RESIZE
      ===================================================== */

      const resizeCanvas = () => {
        const rect =
          canvas.getBoundingClientRect();

        const dpr = Math.min(
          window.devicePixelRatio || 1,
          2
        );

        canvas.width =
          rect.width * dpr;

        canvas.height =
          rect.height * dpr;

        /*
         * Reset canvas transform
         */

        context.setTransform(
          dpr,
          0,
          0,
          dpr,
          0,
          0
        );

        drawFrame(
          Math.round(frameState.frame)
        );
      };

      resizeCanvas();

      window.addEventListener(
        "resize",
        resizeCanvas
      );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(".growth-label", {
        y: 50,
        opacity: 0,
      });

      gsap.set(".growth-title-line", {
        y: 120,
        opacity: 0,
      });

      gsap.set(".growth-description", {
        y: 40,
        opacity: 0,
      });

      gsap.set(".growth-button", {
        y: 30,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(".growth-visual", {
        opacity: 0,
        scale: 0.95,
      });

      /* =====================================================
         MAIN PINNED TIMELINE
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          /*
           * Start when section reaches viewport top
           */
          start: "top top",

          /*
           * Increase this for slower animation
           */
          end: "+=3500",

          /*
           * PIN SECTION
           */
          pin: true,

          /*
           * Scroll controls animation
           */
          scrub: 1,

          /*
           * Prevent jumping
           */
          anticipatePin: 1,

          /*
           * Refresh measurements
           */
          invalidateOnRefresh: true,
        },
      });

      /* =====================================================
         INTRO + AVIF START TOGETHER
      ===================================================== */

      tl.to(
        ".growth-label",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        0
      )

        /*
         * Heading starts at EXACTLY the same time
         */

        .to(
          ".growth-title-line",
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1.2,
            ease: "power4.out",
          },
          0
        )

        /*
         * AVIF animation ALSO starts at EXACTLY
         * the same time.
         */

        .to(
          frameState,
          {
            frame: frameCount - 1,
            duration: 5,
            ease: "none",

            onUpdate: () => {
              drawFrame(
                Math.round(frameState.frame)
              );
            },
          },
          0
        )

        /*
         * Visual box appears together with animation
         */

        .to(
          ".growth-visual",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          0
        )

        /*
         * Description starts slightly after heading
         */

        .to(
          ".growth-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.65
        )

        /*
         * Button
         */

        .to(
          ".growth-button",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          1
        );

      /* =====================================================
         BACKGROUND GLOW
      ===================================================== */

      gsap.to(".growth-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         LOAD IMAGES
      ===================================================== */

      loadImages();

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        window.removeEventListener(
          "resize",
          resizeCanvas
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Lime glow */}

        <div className="growth-glow absolute -left-32 -top-32 h-[700px] w-[700px] rounded-full bg-lime-400/30 blur-[180px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#ed1750]/10 blur-[160px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-20 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10">

            {/* Label */}

            <div className="growth-label mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ed1750]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ed1750]">
                Let&apos;s Build
              </span>
            </div>

            {/* =================================================
                HEADINGS
            ================================================= */}

            <div className="overflow-hidden">
              <h2 className="growth-title-line text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                BUILD.
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="growth-title-line text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                SCALE.
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="growth-title-line text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                GROW YOUR
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="growth-title-line text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white/35 sm:text-6xl lg:text-7xl">
                DIGITAL BUSINESS.
              </h2>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="growth-description mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              At Tcongs Infotech, we deliver powerful
              web, app, and marketing solutions designed
              to help your business grow faster, scale
              smarter, and succeed globally.
            </p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <a
              href="#contact"
              className="growth-button group mt-9 inline-flex items-center gap-3 rounded-full bg-[#ed1750] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff245d] hover:shadow-[0_0_40px_rgba(237,23,80,.25)]"
            >
              Start Your Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>

          {/* =================================================
              AVIF VISUAL
          ================================================= */}

          <div className="growth-visual relative">

            {/* Box */}

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111]">

              {/* Canvas */}

              <canvas
                ref={canvasRef}
                className="absolute inset-0 block h-full w-full"
              />

              {/* Dark overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808]/20 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/30 via-transparent to-transparent" />

              {/* Label */}

              

              {/* Bottom indicator */}

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   CONTACT
========================================================= */

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    answer: "",
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-copy", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-28 text-white lg:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute right-[10%] top-1/3 h-[300px] w-[300px] rounded-full bg-[#ed1750]/10 blur-[120px]" />

      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left */}
        <div className="contact-copy">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#ed1750]">
            Contact Us
          </p>

          <h2 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">
            Let&apos;s Build Something
            <br />
            You&apos;ll Be Proud Of
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">
            Have a project in mind? Whether you need a
            website, mobile app, or digital solution, our
            team is ready to turn your ideas into reality.
          </p>

          <div className="mt-10 space-y-5 text-sm text-white/65">
            <div className="flex items-center gap-3">
              <Check size={17} className="text-[#ed1750]" />
              You&apos;ll hear from us within one business day.
            </div>

            <div className="flex items-center gap-3">
              <Check size={17} className="text-[#ed1750]" />
              We&apos;ll understand your goals and requirements.
            </div>

            <div className="flex items-center gap-3">
              <Check size={17} className="text-[#ed1750]" />
              You&apos;ll receive a clear proposal with pricing & timeline.
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="contact-form rounded-[28px] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl sm:p-7 lg:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <input
              value={form.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              placeholder="Full Name*"
              className="h-14 w-full rounded-xl border border-white/10 bg-[#151515] px-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-[#ed1750]/60 focus:ring-1 focus:ring-[#ed1750]/30"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              placeholder="Email Address*"
              className="h-14 w-full rounded-xl border border-white/10 bg-[#151515] px-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-[#ed1750]/60 focus:ring-1 focus:ring-[#ed1750]/30"
            />

            <div className="flex h-14 overflow-hidden rounded-xl border border-white/10 bg-[#151515] focus-within:border-[#ed1750]/60">
              <div className="flex items-center border-r border-white/10 px-4 text-sm">
                🇮🇳
              </div>

              <input
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="Phone Number*"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>

            <textarea
              value={form.project}
              onChange={(e) =>
                updateField("project", e.target.value)
              }
              placeholder="Tell us about your project*"
              className="min-h-[145px] w-full resize-none rounded-xl border border-white/10 bg-[#151515] p-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ed1750]/60 focus:ring-1 focus:ring-[#ed1750]/30"
            />

            <div className="rounded-xl border border-white/10 bg-[#151515] p-4">
              <p className="mb-3 text-sm text-white/45">
                Human Verification: 3 + 5 =
              </p>

              <input
                value={form.answer}
                onChange={(e) =>
                  updateField("answer", e.target.value)
                }
                placeholder="Enter Sum*"
                className="h-12 w-full rounded-lg border border-white/10 bg-[#1b1b1b] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ed1750]/60"
              />
            </div>

            <button
              type="submit"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full border border-lime-400 bg-transparent text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black"
            >
              Submit Inquiry
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-white/45">
              Prefer email instead? Feel free to contact us
              directly.
            </p>

            <a
              href="mailto:info@tcongsinfotech.com"
              className="mt-3 inline-block text-sm text-white transition-colors hover:text-[#ed1750]"
            >
              info@tcongsinfotech.com
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-column", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/10 bg-[#080808] px-6 pb-8 pt-16 text-white lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr]">
          {/* About */}
          <div className="footer-column">
            <p className="max-w-sm text-base leading-7 text-white/65">
              Empowering global brands with 8+ years of
              expertise in custom web development,
              e-commerce marketplace optimization, and
              Generative Engine Optimization (GEO). We
              turn complex challenges into seamless
              digital growth.
            </p>

            <a
              href="#"
              className="mt-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#ed1750] hover:text-white"
            >
              <span className="text-sm font-bold">in</span>
            </a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3 className="mb-7 text-sm font-semibold">
              Company
            </h3>

            <div className="space-y-4 text-sm text-white/45">
              <a
                href="#home"
                className="block transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#process"
                className="block transition-colors hover:text-white"
              >
                Company
              </a>

              <a
                href="#services"
                className="block transition-colors hover:text-white"
              >
                Solution
              </a>

              <a
                href="#contact"
                className="block transition-colors hover:text-white"
              >
                Connect
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="mb-7 text-sm font-semibold">
              Specialized Services
            </h3>

            <div className="space-y-4 text-sm text-white/45">
              {services.map((service) => (
                <a
                  key={service.number}
                  href="#services"
                  className="block transition-colors hover:text-white"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div className="footer-column">
            <h3 className="mb-7 text-sm font-semibold">
              Scale Your Online Business
            </h3>

            <div className="space-y-4 text-sm text-white/45">
              <p>Launch on Top Marketplaces</p>
              <p>Build High-Converting Stores</p>
              <p>Optimize Listings for Sales</p>
              <p>Run Profitable Ad Campaigns</p>
              <p>Grow Globally</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>
            <span className="font-semibold text-white/70">
              Mumbai Office:
            </span>{" "}
            Based in Mumbai, India. Serving clients
            worldwide.
          </p>

          <p>
            © 2026 Tcongs Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   FLOATING CHAT
========================================================= */

const ChatButton = () => {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.04,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      className="fixed bottom-5 right-5 z-[200] flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-[#ed1750] px-5 py-3 text-xs font-semibold text-black shadow-[0_10px_40px_rgba(237,23,80,.25)] transition-transform hover:scale-110"
    >
      <span className="h-3 w-3 rounded-full bg-black/80 ring-2 ring-white/20" />
      Chat
    </button>
  );
};

/* =========================================================
   APP
========================================================= */

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] font-sans text-white">
      <Navbar />

      <Hero />

      <ServicesSection />

      <ProcessSection />

      <GrowthSection />

      <ContactSection />

      <Footer />

      <ChatButton />
    </div>
  );
};

export default App;