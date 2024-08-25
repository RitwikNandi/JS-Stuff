export function setSuccess(element) {
  element.innerHTML = `Let's see... what happens...`;

  element.addEventListener("click", () => {
    const newImgTag = document.createElement("img");
    newImgTag.src = `https://i.imgflip.com/91d5dn.jpg`;

    document.querySelector("#app").appendChild(newImgTag);
  });
}
