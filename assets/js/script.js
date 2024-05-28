'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

    //add food points from the GeoJSON (campus_food.js) file

    var foodpoints = L.geoJSON(campus_food, {  
      pointToLayer: function(feature, latlng){  
          return L.circleMarker(latlng, {color: 'orange', radius: 8});
      },
      onEachFeature: function(feature, layer){
          layer.bindPopup(
              "<img src='img/" + feature.properties.img_name + "' width='259'/><br><b>Name: </b>" + feature.properties.Name + "<br><b>Description: </b>"+ feature.properties.description);
      }
  }).addTo(foodmap);s