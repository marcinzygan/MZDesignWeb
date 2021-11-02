const modal = document.querySelector(".modal") ;
const previews = document.querySelectorAll(".modal__gallery img") ;
const original = document.querySelector(".modal__full-img") ;
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener("click" , () => {
        modal.classList.add("open");
        original.classList.add("open");
       
        // Dynamic img and txt change 
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./img/posters/${originalSrc}`;
        const altTxt = preview.alt ;
        caption.textContent = altTxt ;

    })
})

modal.addEventListener("click" , (e) =>{
if(e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open")
}
});