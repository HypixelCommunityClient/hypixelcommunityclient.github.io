"use strict";(function(){var a=function(a){var b=document.createElement("div");return b.classList.add("mdc-layout-grid__inner"),b.innerHTML="<div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-2-desktop dc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet title-cell\">"+"<h2 class=\"mdc-typography--headline3\">".concat(a,"</h2>")+"<hr/></div>",b},b=function(a,b){var c=document.createElement("div");return c.classList.add("mdc-layout-grid__cell"),c.innerHTML="<div class=\"mdc-card\"><div class=\"hyperium-card__primary\"><h2 class=\"hyperium-card__title mdc-typography--headline6\">"+a+"</h2></div><div class=\"hyperium-card__secondary mdc-typography--body2\">"+("string"==typeof b?b:b.join("<br/>"))+"</div></div>",c},c=function(a){var c=document.createElement("div");c.classList.add("mdc-layout-grid__inner"),c.innerHTML="<div class=\"mdc-layout-grid__cell container-cell\"><div class=\"mdc-layout-grid__inner two-columns\"></div></div>";var d=c.querySelector("div.mdc-layout-grid__inner.two-columns");return a.forEach(function(a){return d.appendChild(b(a.title,a.description))}),c},d=function(b){var d=document.getElementById("changelog-sections"),e=Object.keys(b).map(function(d){var e=document.createElement("section");e.id=d.toLowerCase();var f=document.createElement("div");return f.classList.add("mdc-layout-grid"),f.appendChild(a(d)),f.appendChild(c(b[d])),e.appendChild(f),e});d.querySelector("section").remove(),e.forEach(function(a,b){d.appendChild(a),setTimeout(function(){return a.classList.add("show")},200*b)})};fetchJson("https://raw.githubusercontent.com/HyperiumClient/hyperiumclient.github.io/master/changelog.json",function(a,b){if(b){var c=localStorage.getItem("hyperiumChangelog");return void(c&&0<c.length&&d(JSON.parse(c)))}localStorage.setItem("hyperiumChangelog",JSON.stringify(a)),d(a)})})();