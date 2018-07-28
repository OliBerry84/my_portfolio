// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}
