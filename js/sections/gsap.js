window.addEventListener("load", () => {
  if (window.innerWidth >= 1280) {
    const TL = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "power4.out",
        delay: 0.2,
      },
    });

    TL.from(".header", {
      y: -120,
      duration: 1,
      delay: 0,
    })
      .from(
        ".hero__text h1",
        {
          x: -150,
          autoAlpha: 0,
        },
        "-=.8"
      )
      .from(
        ".hero__text .lead",
        {
          y: 100,
          autoAlpha: 0,
        },
        "-=1.85"
      )
      .from(
        ".hero__text .paragraph",
        {
          y: 100,
          autoAlpha: 0,
        },
        "-=1.9"
      );

    gsap.from(".message p", {
      y: 100,
      duration: 2,
      autoAlpha: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".message p",
        start: "top 90%",
      },
    });

    gsap.from(".syspat__text", {
      x: -200,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".syspat__text",
        start: "top 80%",
      },
    });

    gsap.from(".aips__text", {
      x: 200,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".aips__text",
        start: "top 80%",
      },
    });

    gsap.from(".aips__img", {
      y: 50,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".aips__text",
        start: "top 80%",
      },
    });

    gsap.from(".about .history", {
      x: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".about .history",
        start: "top 80%",
      },
    });
    gsap.from(".about .organization", {
      x: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".about .organization",
        start: "top 80%",
      },
    });
    gsap.from(".about .future", {
      x: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".about .future",
        start: "top 80%",
      },
    });

    gsap.from(".services__text", {
      y: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".services__text",
        start: "top 90%",
      },
    });

    gsap.from(".effatha__text", {
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".effatha__text",
        start: "top 80%",
      },
    });
  }
});
