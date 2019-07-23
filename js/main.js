window.addEventListener('load', function () {
    setTimeout(function(){
    document.querySelector(".preloader").classList.add('hide');
    document.querySelector(".hero").classList.add('visible');
    },1000);
}); 

/*
window.addEventListener('load', function () {
    document.querySelector(".preloader").classList.add('hide');
    document.querySelector(".hero").classList.add('visible');
});
*/

function hamburgerMenu(x) {
    x.classList.toggle("change");
}

function resizeHeaderOnScroll() {
    let distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.querySelector(".navigation");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
      headerEl.classList.remove("bigger");
    } else {
      headerEl.classList.remove("smaller");
      headerEl.classList.add("bigger");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

//form
const phone = document.querySelector("#phone");
const pmsg = document.querySelector("#phone_message");

phone.onfocus = function (){
    pmsg.style.display = 'block';
};

phone.onblur = function() {
    pmsg.style.display='none';
};

const email = document.querySelector("#email");
const emsg = document.querySelector("#email_message");

email.onfocus = function (){
    emsg.style.display = 'block';
};

email.onblur = function() {
    emsg.style.display='none';
};

var uname = document.querySelector("#uname");
var nmsg = document.querySelector("#name_message");

uname.onfocus = function (){
    nmsg.style.display = 'block';
};

uname.onblur = function() {
    nmsg.style.display='none';
};

var txt = document.querySelector("#txt");
var tmsg = document.querySelector("#text_message");

txt.onfocus = function (){
    tmsg.style.display = 'block';
};

txt.onblur = function() {
    tmsg.style.display='none';
};
