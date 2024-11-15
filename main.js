let hideElements = document.getElementsByClassName('hide');

window.onscroll = function() {
    if (window.scrollY >= 1200) {
        for (let i = 0; i < hideElements.length; i++) {
            hideElements[i].classList.add('show');
            hideElements[i].classList.remove('hide');
        }
    } else {
        for (let i = 0; i < hideElements.length; i++) {
            hideElements[i].classList.remove('show');
            hideElements[i].classList.add('hide');
        }
    }
}









let d = document.getElementsByClassName('d')[0];

window.onscroll = function() {
    if (window.scrollY >= 400) {
        d.classList.add('show');
    } else {
        d.classList.remove('show');
    }

    d.onclick = function() {
        window.scrollTo(0,0)
    }
};
   
