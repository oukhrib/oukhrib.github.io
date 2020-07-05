window.onscroll = function(e){
    if(window.scrollY >= 100 && !document.querySelector(".scrolled")){
        document.querySelector(".navbar").classList.add("scrolled");
    }
    if(window.scrollY < 100 && document.querySelector(".scrolled")){
        document.querySelector(".navbar").classList.remove("scrolled");
    }
}