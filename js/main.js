function pmt(a,b,c,d,e){if(0!=a){var f=Math.pow(1+a,b);return-(a*(d+f*c))/((-1+f)*(1+a*e))}return 0!=b?-(d+c)/b:0}!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(b){var c=a(this);if(!(c.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&c.parent("object").length||c.parent(".fluid-width-video-wrapper").length)){c.css("height")||c.css("width")||!isNaN(c.attr("height"))&&!isNaN(c.attr("width"))||(c.attr("height",9),c.attr("width",16));var e="object"===this.tagName.toLowerCase()||c.attr("height")&&!isNaN(parseInt(c.attr("height"),10))?parseInt(c.attr("height"),10):c.height(),f=isNaN(parseInt(c.attr("width"),10))?c.width():parseInt(c.attr("width"),10),g=e/f;if(!c.attr("id")){var h="fitvid"+b;c.attr("id",h)}c.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*g+"%"),c.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-38315794-18","auto"),ga("send","pageview"),$(function(){$(".numbers-only").keyup(function(){var a=$(this).val().replace(/[^0-9.]/g,"");$(this).val(a)});var a=function(){var a=.28,b=.0599,c=parseFloat($(".number-of-gifts").val()),d=parseFloat($(".amount-per-gift").val()),e=c*d,f=(Math.ceil(-100*pmt(b/52,52,e,null,null))/100).toFixed(2),g=(Math.ceil(-100*pmt(b/26,26,e,null,null))/100).toFixed(2),h=(Math.ceil(-100*pmt(b/12,12,e,null,null))/100).toFixed(2),i=(Math.ceil(-100*pmt(b/24,24,e,null,null))/100).toFixed(2),j=52*f-e,k=Math.ceil(-100*pmt(a/12,12,e,null,null))/100,l=12*k-e,m=(Math.ceil(100*(l-j))/100).toFixed(2);$(".payment-weekly").html("$"+f),$(".payment-bi-weekly").html("$"+g),$(".payment-monthly").html("$"+h),$(".payment-semi-monthly").html("$"+i),$(".savings-interest").html(m)};a(),$(".number-of-gifts, .amount-per-gift").on("keyup",a)});