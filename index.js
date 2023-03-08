document.addEventListener("DOMContentLoaded", () => {
    const hamburger = this.document.querySelector(".hamburger-img");
    const menuBar = this.document.getElementById("menu");
    const image = this.document.querySelector(".image-interactive");
    const creationImage = this.document.getElementsByClassName("creation-image");
    console.log(creationImage);
    const info = this.document.querySelector(".info");
    let isActive = false;
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger-toggle");
        if (!isActive)
        {
            menuBar.classList.remove("ul-inactive");
            menuBar.classList.add("ul-active");
            isActive = true;
        }
        else {
            menuBar.classList.remove("ul-active");
            menuBar.classList.add("ul-inactive");
            isActive = false;
        }
        menuBar.style.animationPlayState= "running";
    })

    window.onscroll = () => {
        if (window.scrollY >= window.innerHeight - 550)
        {
            image.style.animationPlayState = "running";
            info.style.animationPlayState = "running";
        }
        if (window.scrollY >= window.innerHeight + 400)
        {
            Array.from(creationImage).forEach(element => {
                element.style.animationPlayState = "running";
            });
        }
    }
})
