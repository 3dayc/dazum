var title = document.getElementsByClassName("js-title");
var acTwo = document.getElementsByClassName("two_text");
var i, j;

function navToggle(){
    for (i = 0; i < title.length; i++) {
        title[i].addEventListener("click", function() {
            for (j=0; j<title.length; j++) {
                title[j].classList.remove("active_nav");
                title[j].nextElementSibling.style.opacity="0";
                title[j].nextElementSibling.style.visibility="hidden";
                title[j].nextElementSibling.style.height="0";
                title[j].nextElementSibling.style.display="none";
            }
            title[0].nextElementSibling.style.opacity="1";
            title[0].nextElementSibling.style.visibility="visible";
            title[0].nextElementSibling.style.height="100%";
            title[0].nextElementSibling.style.display="block";
            this.classList.toggle("active_nav");
            panel = this.nextElementSibling;
            panel.style.opacity="1";
            panel.style.visibility="visible";
            panel.style.height="100%";
            panel.style.display="block";
        });
    }
}

function active_two(){
    for(var k=0; k<acTwo.length; k++){
        acTwo[k].classList.remove("active_two-nav");
    }
    this.classList.add("active_two-nav");
}

function active_two_start(){
    for(var k=0; k<acTwo.length; k++){
        acTwo[k].addEventListener("click", active_two);
    }
}

navToggle();
active_two_start();
