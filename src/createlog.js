
const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");


links.forEach(links => {
    links.addEventListener("click", e => {
        preventDefault();
        forms.classList.toggle("show-signup")
    })
})