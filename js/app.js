var visibleDiv = 0;
var lastDiv = 0;
var theDiv = null;
function showDiv(click) {
    theDiv = document.getElementById(click).innerHTML;
    console.log(theDiv);
    theDiv.style.display = theDiv.style.display == "none" ? "flex" : "none";
    // for(x = 0; x < 16; x++) {
    //     if (theDiv == x) {
    //         if(visibleDiv == 0 && x !== lastDiv) {
    //             document.getElementsByClassName("eq" + theDiv + "-text")[0].style.backgroundColor = "white";
    //             visibleDiv = 1;
    //             lastDiv = x;
    //         } else {
    //             changeDiv = document.getElementsByClassName("eq" + theDiv + "-text");
    //             console.log(changeDiv);
    //             visibleDiv = 0;
    //             lastDiv = x;
    //         }  
    //     }
    // }
}