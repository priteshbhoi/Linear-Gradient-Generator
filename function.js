document.querySelector(".gra-range").addEventListener("input", e => {
  document.documentElement.style.setProperty(
    "--grad-hint",
    e.target.value + "%"
  );
  updateCode();
});

document.querySelector(".side1").addEventListener("input", e => {
  document.documentElement.style.setProperty("--firstside", e.target.value);
  updateCode();
});

document.querySelector(".side2").addEventListener("input", e => {
  document.documentElement.style.setProperty("--secondside", e.target.value);
  updateCode();
});

updateCode = () => {
  const body = window.getComputedStyle(document.body);
  const codeBlock = document.querySelector(".output-value");
  codeBlock.innerText = `background: linear-gradient(to right, ${body.getPropertyValue(
    "--firstside"
  )}, ${body.getPropertyValue("--grad-hint")}, ${body.getPropertyValue(
    "--secondside"
  )})`;
};

updateCode();
