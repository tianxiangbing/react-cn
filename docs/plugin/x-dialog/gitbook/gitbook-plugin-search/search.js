require(["gitbook","jquery"],function(e,n){function t(e,n){var t;return function(){var r=this,a=arguments;t||(t=setTimeout(function(){t=null,e.apply(r,a)},n))}}function r(t){c.addClass("open");var r=0==t.count;c.toggleClass("no-results",r),f.empty(),d.text(t.count),v.text(t.query),t.results.forEach(function(t){var r=n("<li>",{class:"search-results-item"}),a=n("<h3>"),o=n("<a>",{href:e.state.basePath+"/"+t.url,text:t.title}),i=t.body.trim();i.length>g&&(i=i.slice(0,g).trim()+"...");var s=n("<p>").html(i);o.appendTo(a),a.appendTo(r),s.appendTo(r),r.appendTo(f)})}function a(n){w.addClass("with-search"),w.addClass("search-loading"),t(e.search.query(n,0,y).then(function(e){r(e)}).always(function(){w.removeClass("search-loading")}),1e3)}function o(){w.removeClass("with-search"),c.removeClass("open")}function i(){var e=u("q");e&&e.length>0&&(p.val(e),a(e))}function s(){function e(){var e=p.val();0==e.length?o():a(e)}p=n("#book-search-input input"),c=n("#book-search-results"),f=c.find(".search-results-list"),h=c.find(".search-results-title"),d=h.find(".search-results-count"),v=h.find(".search-query");var t=!1;p.on("propertychange",function(n){"value"==n.originalEvent.propertyName&&e()}),p.on("input",function(r){t||(n(this).unbind("propertychange"),t=!0),e()}),p.on("blur",function(e){if(m){var t=l("q",n(this).val());history.pushState({path:t},null,t)}})}function u(e){var n=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),r=t.exec(n);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}function l(e,n){n=encodeURIComponent(n);var t,r=window.location.href,a=new RegExp("([?&])"+e+"=.*?(&|#|$)(.*)","gi");if(a.test(r))return"undefined"!=typeof n&&null!==n?r.replace(a,"$1"+e+"="+n+"$2$3"):(t=r.split("#"),r=t[0].replace(a,"$1$3").replace(/(&|\?)$/,""),"undefined"!=typeof t[1]&&null!==t[1]&&(r+="#"+t[1]),r);if("undefined"!=typeof n&&null!==n){var o=r.indexOf("?")!==-1?"&":"?";return t=r.split("#"),r=t[0]+o+e+"="+n,"undefined"!=typeof t[1]&&null!==t[1]&&(r+="#"+t[1]),r}return r}var c,p,f,h,d,v,y=15,g=500,m="undefined"!=typeof history.pushState,w=n("body");e.events.on("page.change",function(){s(),o(),e.search.isInitialized()&&i()}),e.events.on("search.ready",function(){s(),i()})});