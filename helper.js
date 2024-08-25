export function changeStuff() {}

export function headingStuff(element) {
  const elementtext = element.innerText;
  element.innerHTML = `${elementtext} aka Ritwik Nandi`;
}

export function boldSpan(element) {
  element.addEventListener("click", function () {
    this.style.fontWeight =
      this.style.fontWeight === `bold` ? `normal` : `bold`;
  });
}

export function imageHandler(element) {
  element.addEventListener("click", function () {
    console.log(document.querySelector("#app").firstChild.nextSibling);
    document.querySelector(
      "#app"
    ).firstChild.nextSibling.src = `https://i.imgflip.com/91d3qe.jpg`;
  });
}

