!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function i(e){let n=document.createElement("a");return n.href="#",n.className=id,n.innerHTML=e.toUppercase(),n}function a(e){let n=document.createElement("a");n.href="#";let t=document.createElement("i");return t.className="lab la-"+e,n.appendChild(t),n}t.r(n);var r=function(){let e=document.createElement("div");e.className="sidebar";let n=document.createElement("div");n.className="logo",e.appendChild(n);let t=0,r=["home","menu","contact"];for(;t<=r.length;){let n=i(r[t]);e.appendChild(n),t+=1}let o=document.createElement("div");o.className="socials";let s=["facebook","twitter","instagram"];for(;t<=s.length;){let e=a(r[t]);o.appendChild(e),t+=1}return e.appendChild(o),e}();(void(document.querySelector("#content").innerHTML=`\n    <div class="sidebar">\n        ${r}\n    </div>\n    <div class="main-content">\n        <section class="welcome">\n            <h1> Welcome to <span>The Delish</span>,<br> we bring the best of Africa in your meals.</h1>\n        </section>\n\n        <section class="cuisine">\n            <div>\n                <a href="#"><i class="las la-fish"></i></a>\n                <h2>The best ingredients</h2>\n            </div>\n            <div>\n                <a href="#"><i class="las la-concierge-bell"></i></a>\n                <h2>The best cooks</h2>\n            </div>\n            <div>\n                <a href="#"><i class="las la-cocktail"></i></a>\n                <h2>A breathtaking entviroment</h2>\n            </div>\n        </section>\n\n        <section class="dishes">\n            <h1>Get the real spicy and original african taste that will make you travel</h1>\n            <div class="underline"></div>\n            <div class="first-row">\n                <div class="nigeria">\n                    <h2>Nigerian spicy soups</h2>\n                </div>\n                <div class="cameroun">\n                    <h2>Camerounian fresh seafood</h2>\n                </div>\n            </div>\n            <div class="second-row">\n                <div class="kenya">\n                    <h2>Kenyan king barbecue</h2>\n                </div>\n                <div class="fufu">\n                    <h2>African Fufu feast</h2>\n                </div>\n            </div>\n        </section>\n        <section class="booking">\n            <h1>Wanna give a try? Book your table today!</h1>\n            <div class="underline"></div>\n            <div class="first-row">\n                <a href="#">Book a table</a>\n            </div>\n        </section>\n    </div>\n    `)).displayHome(),console.log("Project started")}]);