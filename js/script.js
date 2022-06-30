let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

var myCenter = new google.maps.LatLng(53, -1.33);

var marker = new google.maps.Marker({
  position: myCenter,
  url: "/https://www.google.com/maps/place/24%C2%B009'39.9%22N+83%C2%B048'07.2%22E/@24.1601679,83.790303,14.83z/data=!4m14!1m7!3m6!1s0x398c0e4d8a595e0d:0x1353e3f74842e177!2sGarhwa,+Jharkhand+822114!3b1!8m2!3d24.1548982!4d83.7995617!3m5!1s0x398c0faa7f1cafa3:0x1f2dab91fd1c3eb4!7e2!8m2!3d24.1610806!4d83.8020051",
  animation: google.maps.Animation.DROP,
});

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 14,
    draggable: false,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);

  marker.setMap(map);
}

google.maps.event.addDomListener(window, "load", initialize);
google.maps.event.addListener(marker, "click", function () {
  window.location.href = marker.url;
});
