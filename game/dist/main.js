!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.getElementById("myCanvas"),r=n.getContext("2d"),i=10,o=n.width/2,l=n.height-100,a=0,c=2,d=10,u=75,f=(n.width-u)/2,h=n.height-30,p=!1,y=!1;document.addEventListener("keydown",function(e){"Right"!=e.key&&"ArrowRight"!=e.key||(p=!0);"Left"!=e.key&&"ArrowLeft"!=e.key||(y=!0)},!1),document.addEventListener("keyup",function(e){"Right"!=e.key&&"ArrowRight"!=e.key||(p=!1);"Left"!=e.key&&"ArrowLeft"!=e.key||(y=!1)},!1);var b=[],g=5,v=20,s=80;!function(){brickX=20,brickY=0;for(var e=0;e<4;e++){brickY+=v+10,brickX=20;for(var t=0;t<g;t++)b.push([brickX,brickY]),brickX+=s+10}}(),console.log(b),interval=setInterval(function(){r.clearRect(0,0,n.width,n.height),function(){for(var e=0;e<b.length;e++)if(o>=b[e][0]&&o<=b[e][0]+s&&(l===b[e][1]+2*i||l===b[e][1]-2*i)){0===b.length&&(alert("You Won!!!"),document.location.reload(),clearInterval(interval)),b.splice(e,1),c=-c;break}}(),function(e,t){t+c<i&&(c=-c),(e+a<i||e+a>n.width-i)&&(a=-a),t+c>n.height-i&&(document.location.reload(),clearInterval(interval)),paddleCenterMin=f+u/4,paddleCenterMax=f+u-u/4,paddleMin=f,paddleMax=f+u,e<=paddleCenterMax&&e>=paddleCenterMin&&t===h&&(c=-c,a=a),e>paddleCenterMax&&e<=paddleMax&&t===h&&(c=-c,a+=1),e>=paddleMin&&e<paddleCenterMin&&t===h&&(c=-c,a-=1)}(o,l),p&&f<n.width-u&&(f+=7),y&&f>0&&(f-=7),b.forEach(function(e){r.beginPath(),r.rect(e[0],e[1],s,v),r.fillStyle="#0095DD",r.fill(),r.closePath()}),r.beginPath(),r.arc(o,l,i,0,2*Math.PI),r.fillStyle="#0095DD",r.fill(),r.closePath(),r.beginPath(),r.rect(f,h,u,d),r.fillStyle="#0095DD",r.fill(),r.closePath(),o+=a,l+=c},10)}]);