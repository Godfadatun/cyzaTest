!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o,r,l,u=document.querySelector(".tablink.default");function c(){for(r=document.querySelectorAll(".tabcontent"),o=0;o<r.length;o++)r[o].style.display="none"}function i(e){for(l=document.querySelectorAll(".tablink"),o=0;o<l.length;o++)l[o].style.borderBottom=""}function a(e,t){b=t>4?5:t<2?1:t,document.getElementById(e+"Page").style.display="block",document.getElementById(e).style.borderBottomColor="dodgerblue"}a(u.id,Number(u.dataset.number)),document.querySelector("#tabs").addEventListener("click",(function(e){c(),i(),a(e.target.id,Number(e.target.dataset.number))})),document.querySelector("#tab1Page").addEventListener("click",(function(){!function(e){"close"!==e.substr(e.length-5)&&(document.getElementById(e+"_popUp").style.display="block");if("close"==e.substr(e.length-5)){var t=e.replace("close","popUp");document.querySelector("#"+t).style.display="none"}}(event.target.id)}));var d=document.querySelector("#main");d.addEventListener("touchstart",(function(e){s=e.touches[0].clientX,f=e.touches[0].clientY}),!1),d.addEventListener("touchmove",(function(e){if(null===s)return;if(null===f)return;var t=e.touches[0].clientX,n=e.touches[0].clientY,o=s-t,r=f-n;Math.abs(o)>Math.abs(r)?o>0?(c(),i(),a("tab"+(b+1),b+1)):(c(),i(),a("tab"+(b-1),b-1)):r>0?console.log("swiped up"):console.log("swiped down");s=null,f=null,e.preventDefault()}),!1);var s=null,f=null;var b=1},function(e,t,n){}]);