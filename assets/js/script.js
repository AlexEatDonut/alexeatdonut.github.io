window.addEventListener("DOMContentLoaded", function () {
  let screenWidth = window.screen.width;

  if (screenWidth > 512) {
    function scrollFunction() {
      if (window.scrollY > 150) {
        document.querySelector(".h__tall").classList.add("h__small");
      } else {
        document.querySelector(".h__tall").classList.remove("h__small");
      }
    }
  }

  let burger_menu = document.querySelectorAll("#hAio__burger");

  window.addEventListener("scroll", scrollFunction);

  // const s__display = document.querySelector(".s__display");
  // let box_container = document.querySelector(".box-full");
  // let box_inner = document.querySelector(".box-inner");
  // let box_bg = document.querySelector(".box-bg");

  // s__display.addEventListener("click", function (ev) {
  //   // console.log(ev.target);

  //   let box_image = document.querySelector("#box-image");
  //   box_container.classList.remove("d-none");
  //   box_container.classList.add("flex-row");

  //   let index_img = ev.target.getAttribute("index");
  //   console.log(index_img);
  //   index_img_nb = parseInt(index_img);

  //   let map_object = map_gallery.find((item) => item.index == index_img_nb);
  //   let map_name = map_object.mapname;
  //   let map_desc = map_object.mapdesc;

  //   // console.log("ev target = "+ev.target+" et sa source est "+ev.target.src+", son index est "+index_img_nb+", son title est "+map_name+" et sa description est "+map_desc);
  //   document.querySelector("#box-image-title").innerHTML = map_name;
  //   document.querySelector("#box-image-description").innerHTML = map_desc;

  //   box_image.src = ev.target.src;
  // });

  let isMenuOn = false;

  function testMenu() {
    if (isMenuOn == false) {
      document.querySelector(".hAio__menu").classList.add("menu-visible");
      isMenuOn = true;
    } else {
      document
        .querySelector(".hAio__menu")
        .classList.remove("menu-visible");
      isMenuOn = false;
    }
  }

  burger_menu.forEach(burger => {
    burger.addEventListener("click", function () {
      testMenu();
    })
  });

  document.querySelectorAll(".hAio__menu .hAio__nav--choice")
    .forEach((item) =>
      item.addEventListener("click", function () {
        testMenu();
      })
    );
});
