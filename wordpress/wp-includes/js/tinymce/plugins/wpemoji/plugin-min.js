!function(r,s,u){r.PluginManager.add("wpemoji",function(n){var t,i=r.Env,e=window.navigator.userAgent,o=-1<e.indexOf("Windows"),a=!!((w=e.match(/Windows NT 6\.(\d)/))&&1<w[1]),w;function d(e){e.className="emoji",e.setAttribute("data-mce-resize","false"),e.setAttribute("data-mce-placeholder","1"),e.setAttribute("data-wp-emoji","1")}function c(e){var t={"data-mce-resize":"false","data-mce-placeholder":"1","data-wp-emoji":"1"};s.emoji.parse(e,{imgAttr:t})}function m(e){var t,o;e&&window.twemoji&&window.twemoji.test(e.textContent||e.innerText)&&(i.webkit&&(o=(t=n.selection).getBookmark()),c(e),i.webkit&&t.moveToBookmark(o))}s&&s.emoji&&!u.supports.everything&&(a?n.on("keyup",function(e){231===e.keyCode&&m(n.selection.getNode())}):o||(n.on("keydown keyup",function(e){t="keydown"===e.type}),n.on("input",function(){t||m(n.selection.getNode())})),n.on("setcontent",function(e){var t=n.selection,o=t.getNode();window.twemoji&&window.twemoji.test(o.textContent||o.innerText)&&(c(o),i.ie&&i.ie<9&&e.load&&o&&"BODY"===o.nodeName&&t.collapse(!0))}),n.on("PastePostProcess",function(e){window.twemoji&&r.each(n.dom.$("img.emoji",e.node),function(e){e.alt&&window.twemoji.test(e.alt)&&d(e)})}),n.on("postprocess",function(e){e.content&&(e.content=e.content.replace(/<img[^>]+data-wp-emoji="[^>]+>/g,function(e){var t=e.match(/alt="([^"]+)"/);return t&&t[1]?t[1]:e}))}),n.on("resolvename",function(e){"IMG"===e.target.nodeName&&n.dom.getAttrib(e.target,"data-wp-emoji")&&e.preventDefault()}))})}(window.tinymce,window.wp,window._wpemojiSettings);