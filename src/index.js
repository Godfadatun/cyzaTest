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


document.querySelector("#tab1Page").addEventListener("click", tabActivityFnc);

function tabActivityFnc(){
  console.log(event.target)
  var elementId = event.target.id
  myFunction(elementId)
}
function myFunction(id) {
  if(id.substr(id.length - 5) == 'close'){
    var res = id.replace("close", "popUp");
    document.querySelector('#'+res).style.display = 'none';
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
}else{
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

