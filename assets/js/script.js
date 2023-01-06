window.addEventListener("DOMContentLoaded", function(){

    let screenWidth = window.screen.width;

    if (screenWidth > 512) {
        function scrollFunction() {
            if (window.scrollY > 150) {
                document.querySelector(".header-tall").classList.add("header-small");
            } else {  
                document.querySelector(".header-tall").classList.remove("header-small");
            }
          } 
    };

    let burger_menu = this.document.querySelector(".header-burger");

    const github_link = "https://github.com/AlexEatDonut";
    const twitter_link = "https://twitter.com/AlexEatDonut";
    const youtube_link = "https://www.youtube.com/@AlexEatDonut";
    const map_link = "https://tf2maps.net/members/alexeatdonut.29391/#resources";

    let link_github = document.querySelectorAll(".link-github");

    link_github.forEach(aTag => {
        aTag.href = github_link;
    });

    let link_twitter = document.querySelectorAll(".link-twitter");

    link_twitter.forEach(aTag => {
        aTag.href = twitter_link;
    });

    let link_youtube = document.querySelectorAll(".link-youtube");

    link_youtube.forEach(aTag => {
        aTag.href = youtube_link;
    });

let link_map = document.querySelectorAll(".link-map");

link_map.forEach(aTag => {
    aTag.href = map_link;
});

window.addEventListener("scroll", scrollFunction);

const section_gallery = document.querySelector(".section-gallery");
let box_container = document.querySelector(".box-full");
let box_inner = document.querySelector(".box-inner")
let box_bg = document.querySelector(".box-bg");

section_gallery.addEventListener("click", function (ev){

    // console.log(ev.target);

    let box_image = document.querySelector("#box-image");
    box_container.classList.remove("d-none");
    box_container.classList.add("flex-row");

    let index_img = ev.target.getAttribute("index");
    console.log(index_img);
    index_img_nb = parseInt(index_img);

    let map_object = map_gallery.find(item => item.index == index_img_nb);
    let map_name = map_object.mapname;
    let map_desc = map_object.mapdesc;

    

    // console.log("ev target = "+ev.target+" et sa source est "+ev.target.src+", son index est "+index_img_nb+", son title est "+map_name+" et sa description est "+map_desc);
    document.querySelector("#box-image-title").innerHTML = map_name;
    document.querySelector("#box-image-description").innerHTML = map_desc;
 
    box_image.src = ev.target.src;  
});

let isMenuOn = false

function testMenu(){
    if (isMenuOn==false){
        document.querySelector(".header-aio-menu").classList.add("menu-visible");
        isMenuOn = true
    }
    else {
        document.querySelector(".header-aio-menu").classList.remove("menu-visible");
        isMenuOn = false
    }
}

burger_menu.addEventListener("click", function (ev){
    testMenu();
});
document.querySelectorAll(".header-aio-menu .header-nav-choice").forEach (item => 
    item.addEventListener("click", function (ev){
        testMenu();
}));



});



