var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.065);
        }, 335);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});

function openPage(evt, cityName) {
    // Declare all variables
    var i, tabcont, bio;
  
    // Get all elements with class="tabcontent" and hide them
    tabcont = document.getElementsByClassName("tabcont");
    for (i = 0; i < tabcont.length; i++) {
      tabcont[i].style.display = "none";
    }
  
    // Get all elements with class="bio" and remove the class "active"
    bio = document.getElementsByClassName("bio");
    for (i = 0; i < bio.length; i++) {
      bio[i].className = bio[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }