let center = document.querySelector(".center");

window.addEventListener("mousemove", (details) => {
  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + center.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + center.getBoundingClientRect().width / 2),
    details.clientX
  );
  gsap.to(center, {
    left: xval + "px",
    // top: details.clientY + "px",
    ease: Power3,
    durataion: 0.4,
  });
});
