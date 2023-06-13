window.addEventListener("DOMContentLoaded", function () {
  // code for shrinking header, kept for legacy use if people wish to use it
  // let screenWidth = window.screen.width;
  // if (screenWidth > 512) {
  //   function scrollFunction() {
  //     if (window.scrollY > 192) {
  //       document.querySelector(".h__tall").classList.add("h__small");
  //     } else {
  //       document.querySelector(".h__tall").classList.remove("h__small");
  //     }
  //   }
  // }
  // window.addEventListener("scroll", scrollFunction);

  let burger_menu = document.querySelectorAll("#hAio__burger");

  // left over code for clicking on gallery images, to be added
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

  //   let object_images = map_gallery.find((item) => item.index == index_img_nb);
  //   let object_name = map_object.mapname;
  //   let object_desc = map_object.mapdesc;

  //   console.log("ev target = "+ev.target+", the img src is "+ev.target.src+", its index is "+index_img_nb+", its title is "+object_name+" a its description is "+object_desc);
  //   document.querySelector("#box-image-title").innerHTML = object_name;
  //   document.querySelector("#box-image-description").innerHTML = object_desc;

  //   box_image.src = ev.target.src;
  // });

  let isMenuOn = false;

  function testMenu() {
    if (isMenuOn == false) {
      document.querySelector(".hAio__menu").classList.add("menu-visible");
      isMenuOn = true;
    } else {
      document.querySelector(".hAio__menu").classList.remove("menu-visible");
      isMenuOn = false;
    }
  }

  burger_menu.forEach((burger) => {
    burger.addEventListener("click", function () {
      testMenu();
    });
  });

  document.querySelectorAll(".hAio__menu .hAio__nav--choice").forEach((item) =>
    item.addEventListener("click", function () {
      testMenu();
    })
  );
});
