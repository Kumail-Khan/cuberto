function slider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.7,
    spaceBetween: 30,
    freeMode: true,
  });
}
slider();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./video1.mp4", "./video2.mp4", "./video3.mp4"],
});

gsap.to(".felem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".felem");
Shery.imageEffect(".images", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach((section, idx) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + idx);
        },
      });
    });
  },
});

let btnDiv = document.querySelector("#btndiv a");

btnDiv.addEventListener("mouseenter", () => {
  gsap.to("#first p", {
    y: "-45px",
    ease: Power1,
  });
  gsap.to("#second p", {
    y: "0%",
    ease: Power1,
    color: "white",
  });
  gsap.to("#btncover", {
    scale: 1,
    ease: Power1,
  });
});

btnDiv.addEventListener("mouseleave", () => {
  gsap.to("#first p", {
    y: "0",
    ease: Power1,
  });
  gsap.to("#second p", {
    y: "100%",
    ease: Power1,
  });
  gsap.to("#btncover", {
    scale: 0,
    ease: Power1,
  });
});
