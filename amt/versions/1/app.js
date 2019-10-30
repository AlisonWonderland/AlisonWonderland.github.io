const stats_container = document.querySelector(".stats-container");
const search_containter = document.querySelector(".search-container");
console.log(search_containter.offsetHeight);
stats_container.style.marginTop = search_containter.offsetHeight + "px";

function openSideMenu() {
    // document.getElementById("side-menu").style.display = "block";
    document.getElementById("side-menu").style.left = "0px";
}

function closeSideMenu() {
    // document.getElementById("side-menu").style.display = "none";
    document.getElementById("side-menu").style.left= "-500px";
}

