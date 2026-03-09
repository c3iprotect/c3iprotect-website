// Home Section

if (document.querySelector(".home-header")){

    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();

    timeline

      .to(".home-banner-img-sec", 10, { maxWidth: "100vw" }, "-=10")
    //   .fromTo(".home-header-text", { top:"0%" }, { top:"0.2"})
      .to(".home-header-text", 10, { top:"90%"}, "-=10");

    let scene = new ScrollMagic.Scene({
      triggerElement: ".home-header",
      duration: "100%",
      triggerHook: 0,
    })
      .setTween(timeline)
      .addTo(controller);

    }

