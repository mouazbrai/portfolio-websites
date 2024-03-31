/**Sections Transform Script */
let btns = document.querySelectorAll("nav .btns");
let pages = document.querySelector(".pages");
if (window.matchMedia("(min-width: 768px)").matches) {
    function removeActive() {
        for (let x = 0; x < btns.length; x++) {
            btns[x].classList.remove("btns-active");
        }
    }
    for (let x = 0; x < btns.length; x++) {
        btns[x].addEventListener("click", () => {
            removeActive();
            let index = -(x) * 100;
            btns[x].classList.add("btns-active");
            pages.style.left = `${index}%`;
            window.localStorage.setItem("btnNumber", x);
        });
    }
    let activeBtn = window.localStorage.getItem("btnNumber");
    window.onload = () => {
        if (activeBtn) {
            removeActive();
        }
        btns[activeBtn].classList.add("btns-active");
        pages.style.left = `${-(activeBtn) * 100}%`;
    }
}
