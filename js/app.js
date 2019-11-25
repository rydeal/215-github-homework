//simple function to determine if the details are visible or not
function showDiv(clicked) {
    divMod = document.getElementById(clicked);
    if(divMod.style.display === "none") {
        divMod.style.display = "block";
    } else {
        divMod.style.display = "none";
    }
}