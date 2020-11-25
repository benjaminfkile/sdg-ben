let bellows = document.getElementsByClassName("bellow");
let zIndex = 0
let tabDex = 1

buildInterface = () => {

    for (let i = 0; i < bellows.length; i++) {
        bellows[i].addEventListener("click", function () {
            zIndex++
            tabDex = i
            bellow = this.nextElementSibling;
            this.classList.toggle("active");
            if (bellow.style.display === "block") {
                bellow.style.display = "none";
            } else {
                bellow.style.display = "block";
            }
            if (document.documentElement.clientWidth > 767) {
                zIndex += 1
                bellow.style.display = "block"
                document.getElementById("p" + i).style.zIndex = zIndex;
                for (let j = 0; j < bellows.length; j++) {
                    if (j === i) {
                        document.getElementById("b" + j).style.backgroundColor = "rgb(0,0,0)"
                        document.getElementById("b" + j).style.color = "rgb(255,255,255)"
                    }
                    else {
                        document.getElementById("b" + j).style.backgroundColor = "rgb(255,255,255)"
                        document.getElementById("b" + j).style.color = "rgb(0,0,0)"
                    }
                }
            }
        });
    }
}

updateInterface = () => {

    if (document.documentElement.clientWidth < 767) {
        for (let i = 0; i < bellows.length; i++) {
            document.getElementById("b" + i).style.backgroundColor = "rgb(255,255,255)"
            document.getElementById("b" + i).style.color = "rgb(0,0,0)"
            if (bellows[i].classList[1] === "active") {
                bellows[i].classList.toggle("active")
            }
            document.getElementById("p" + i).style.display = "none"
        }
    } else {
        document.getElementById("b" + tabDex).click()
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    buildInterface()
    window.addEventListener("resize", updateInterface);
    if (screen.width > 767) {
        document.getElementById("b" + tabDex).click()
    }
});