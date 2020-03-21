import "./scss/index.scss";

// default
var x = document.querySelector(".tablink.default");
changePage(x.id, Number(x.dataset.number));
// end default

document.querySelector("#tabs").addEventListener("click", someFunction);

function someFunction(event) {
  clearTab();
  clearButtomColor();
  changePage(event.target.id, Number(event.target.dataset.number));
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

function changePage(id, number) {

  if (number > 4) {
    page = 5;
  } else if (number < 2) {
    page = 1;
  } else {
    page = number;
  }

  document.getElementById(id + "Page").style.display = "block";
  document.getElementById(id).style.borderBottomColor = "dodgerblue";
}

document.querySelector("#tab1Page").addEventListener("click", tabActivityFnc);

function tabActivityFnc() {
  var elementId = event.target.id;
  myFunction(elementId);
}
function myFunction(id) {
  if(id.substr(id.length - 5) == 'close'){
    var res = id.replace("close", "popUp");
    document.querySelector("#" + res).style.display = "none";
  }
  if(id.substr(id.length - 5) == 'sends'){
    var data = id.replace("_sends", "");
    var res = id.replace("sends", "value");
    var res2 = id.replace("sends", "popUp");
    var text = id.replace("sends", "text");

    if(document.querySelector("#"+res).value != ""){
      localStorage.setItem(data, document.querySelector("#"+res).value);
    }

    if(localStorage.getItem(data)){
      document.querySelector("#"+text).innerText = localStorage.getItem(data)
    }
    document.querySelector("#"+res).value = "";
    document.querySelector('#'+res2).style.display = 'none';
    }
    else{
      document.getElementById(id + '_popUp').style.display = 'block';
    }
}
window.onload = ()=>{
  var form = ['phone_no', 'your_website', 'fullname', 'city_state_zip']
  form.map(data => {
      if(localStorage.getItem(data)){
        document.querySelector('#'+data+'_text').innerText = localStorage.getItem(data)
      }
    }
  )
}

// swip starts here
var container = document.querySelector("#main");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

let page = 1;

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      // console.log("swiped left");

      clearTab();
      clearButtomColor();
      changePage("tab" + (page + 1), page + 1);
    } else {
      // swiped right
      // console.log("swiped right");
      clearTab();
      clearButtomColor();
      changePage("tab" + (page - 1), page - 1);
    }
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
}
