import "./scss/index.scss";

var x = document.querySelector(".tablink.default");
changePage(x.id);

document.querySelector("#tabs").addEventListener("click", someFunction);

function someFunction(event) {
  clearTab();
  clearButtomColor();
  changePage(event.target.id);
}

var i, tabcontent, tablinks;

function clearTab() {
  tabcontent = document.querySelectorAll(".tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

function clearButtomColor(params) {
  tablinks = document.querySelectorAll(".tablink");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderBottom = "";
  }
}

function changePage(id) {
  document.getElementById(id + "Page").style.display = "block";
  document.getElementById(id).style.borderBottomColor = "dodgerblue";
}
