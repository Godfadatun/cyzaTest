import "./scss/index.scss";

window.addEventListener("DOMContentLoaded", function() {
  // var elements = document.querySelectorAll(".responsive-nav, .modal-section");

  // Get the modal
  var searchModal = document.querySelector("#searchModal");
  var menuModal = document.querySelector("#menuModal");

  // Get the button that opens the modal
  var searchBtn = document.querySelector("#searchBtn");
  var menuBtn = document.querySelector("#menuBtn");

  // Get the <span> element that closes the modal
  var closeSearch = document.querySelector(".closeSearch");
  var closeMenu = document.querySelector(".closeMenu");

  let nav = document.querySelector("nav.main-navigation");

  const scrollFuc = position => {
    if (position > 400) {
      nav.style.backgroundColor = "#111111";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  };

  window.addEventListener("scroll", function() {
    scrollFuc(pageYOffset);
  });

  function getMobileNav() {
    let duplicateNav = nav.cloneNode(true);
    let modalContent = menuModal.querySelector("div.modal-content");
    let navButton = duplicateNav.querySelectorAll("button");
    let navContainer = duplicateNav.querySelector(".responsive-nav");
    let copyright = document.querySelector("footer .copyright").cloneNode(true);

    navButton.forEach(element => {
      navContainer.removeChild(element);
    });

    navContainer.appendChild(copyright);
    modalContent.appendChild(duplicateNav);
  }

  // When the user clicks on the button, open the modal
  let click = 0;
  menuBtn.addEventListener("click", function() {
    if (click === 0) {
      getMobileNav();
    }
    menuModal.style.display = "block";
    i++;
  });

  searchBtn.onclick = function() {
    searchModal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  closeSearch.onclick = function() {
    searchModal.style.display = "none";
  };

  closeMenu.onclick = function() {
    menuModal.style.display = "none";
  };

  // function toggleModal(modal, status){
  //   modal.style.display = status;
  // };

  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
});
