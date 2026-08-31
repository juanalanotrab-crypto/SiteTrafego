const hero = document.getElementById("hero");

if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("mousemove", (evento) => {
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;

    const movimentoX = ((evento.clientX - centroX) / centroX) * -18;
    const movimentoY = ((evento.clientY - centroY) / centroY) * -12;

    hero.style.setProperty("--movimento-x", `${movimentoX}px`);
    hero.style.setProperty("--movimento-y", `${movimentoY}px`);
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.setProperty("--movimento-x", "0px");
    hero.style.setProperty("--movimento-y", "0px");
  });
}
