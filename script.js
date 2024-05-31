/*Menu*/
const navToggle = document.querySelector(".nav_toggle"),
    navMenu = document.querySelector(".nav_menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active") ; 
    })




/*----Texte-----*/

var typed = new Typed(".profession_text", {
    strings: ["Lucas Hervas","","Lucas Hervas","","Lucas Hervas"],
    typeSpeed: 70,
    backSpeed: 100,
    loop: false,  
})


/*----BACK TOP BUTTON-----*/


const back_btn_top = document.querySelector(".btn-top");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>= 50){
        back_btn_top.classList.add("active")
    }
    else{
        back_btn_top.classList.remove("active")
    }

})



/*----SOCIAL REVEAL ANIMATION-----*/

constsr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
});

screen.reveal('.home_content, .about_banner, .brand_container, .copyright', {});
screen.reveal('.about_content, .contact_container, .skills_wrapper, .count_wrapper', {delay: 500});
screen.reveal('.social_list, .title_wrapper, .work_list',{interval: 250});
screen.reveal('.service_item, .team_item, .work_item, .input_field', {interval: 250});
