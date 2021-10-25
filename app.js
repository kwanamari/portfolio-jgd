const modal = document.querySelector(".modal")
const previews = document.querySelectorAll(".works img")
const original = document.querySelector(".full-img")
const caption = document.querySelector(".caption")
const link = document.getElementById("open-link")



previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");


    // Dynamic Content
    const originalSrc = preview.getAttribute("data-original")
    original.src = originalSrc

    const altText = preview.alt
    caption.textContent = altText

    const linkSrc = preview.getAttribute("data-link")
    link.href = linkSrc
    

  });
});



modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

