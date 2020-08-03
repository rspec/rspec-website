function createSourceLinks(){$(".method_details_list .source_code").before("<span class='showSource'>[<a href='#' class='toggleSource'>View source</a>]</span>"),$(".toggleSource").toggle(function(){$(this).parent().nextAll(".source_code").slideDown(100),$(this).text("Hide source")},function(){$(this).parent().nextAll(".source_code").slideUp(100),$(this).text("View source")})}function createDefineLinks(){var e=0;$(".defines").after(" <a href='#' class='toggleDefines'>more...</a>"),$(".toggleDefines").toggle(function(){e=$(this).parent().prev().height(),$(this).prev().show(),$(this).parent().prev().height($(this).parent().height()),$(this).text("(less)")},function(){$(this).prev().hide(),$(this).parent().prev().height(e),$(this).text("more...")})}function createFullTreeLinks(){var e=0;$(".inheritanceTree").toggle(function(){e=$(this).parent().prev().height(),$(this).parent().toggleClass("showAll"),$(this).text("(hide)"),$(this).parent().prev().height($(this).parent().height())},function(){$(this).parent().toggleClass("showAll"),$(this).parent().prev().height(e),$(this).text("show all")})}function fixBoxInfoHeights(){$("dl.box dd.r1, dl.box dd.r2").each(function(){$(this).prev().height($(this).height())})}function searchFrameLinks(){$(".full_list_link").click(function(){return toggleSearchFrame(this,$(this).attr("href")),!1})}function toggleSearchFrame(e,t){var s=$("#search_frame");$("#search a").removeClass("active").addClass("inactive"),s.attr("src")==t&&"none"!=s.css("display")?(s.slideUp(100),$("#search a").removeClass("active inactive")):($(e).addClass("active").removeClass("inactive"),s.attr("src",t).slideDown(100))}function linkSummaries(){$(".summary_signature").click(function(){document.location=$(this).find("a").attr("href")})}function framesInit(){if(hasFrames){document.body.className="frames",$("#menu .noframes a").attr("href",document.location);try{window.top.document.title=$("html head title").text()}catch(e){}}else $("#menu .noframes a").text("frames").attr("href",framesUrl)}function keyboardShortcuts(){window.top.frames.main||$(document).keypress(function(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&("undefined"==typeof e.target||"INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName))switch(e.charCode){case 67:case 99:$("#class_list_link").click();break;case 77:case 109:$("#method_list_link").click();break;case 70:case 102:$("#file_list_link").click()}})}function summaryToggle(){$(".summary_toggle").click(function(){return localStorage&&(localStorage.summaryCollapsed=$(this).text()),$(".summary_toggle").each(function(){$(this).text("collapse"==$(this).text()?"expand":"collapse");var e=$(this).parent().parent().nextAll("ul.summary").first();if(e.hasClass("compact"))e.toggle(),e.nextAll("ul.summary").first().toggle();else if(e.hasClass("summary")){var t=$('<ul class="summary compact" />');t.html(e.html()),t.find(".summary_desc, .note").remove(),t.find("a").each(function(){$(this).html($(this).find("strong").html()),$(this).parent().html($(this)[0].outerHTML)}),e.before(t),e.toggle()}}),!1}),localStorage&&("collapse"==localStorage.summaryCollapsed?$(".summary_toggle").first().click():localStorage.summaryCollapsed="expand")}function fixOutsideWorldLinks(){$("a").each(function(){window.location.host!=this.host&&(this.target="_parent")})}function generateTOC(){if(0!==$("#filecontents").length){var e,t=$('<ol class="top"></ol>'),s=!1,a=t,i=0,n=["h2","h3","h4","h5","h6"];for($("#filecontents h1").length>1&&n.unshift("h1"),e=0;e<n.length;e++)n[e]="#filecontents "+n[e];var o=parseInt(n[0][1],10);$(n.join(", ")).each(function(){if(0==$(this).parents(".method_details .docstring").length&&"filecontents"!=this.id){s=!0;var t=parseInt(this.tagName[1],10);if(0===this.id.length){var n=$(this).attr("toc-id");if("undefined"!=typeof n)this.id=n;else{var n=$(this).text().replace(/[^a-z0-9-]/gi,"_");$("#"+n).length>0&&(n+=i,i++),this.id=n}}if(t>o)for(e=0;t-o>e;e++){var l=$("<ol/>");a.append(l),a=l}if(o>t)for(e=0;o-t>e;e++)a=a.parent();var r=$(this).attr("toc-title");"undefined"==typeof r&&(r=$(this).text()),a.append('<li><a href="#'+this.id+'">'+r+"</a></li>"),o=t}}),s&&(html='<div id="toc"><p class="title"><a class="hide_toc" href="#"><strong>Table of Contents</strong></a> <small>(<a href="#" class="float_toc">left</a>)</small></p></div>',$("#content").prepend(html),$("#toc").append(t),$("#toc .hide_toc").toggle(function(){$("#toc .top").slideUp("fast"),$("#toc").toggleClass("hidden"),$("#toc .title small").toggle()},function(){$("#toc .top").slideDown("fast"),$("#toc").toggleClass("hidden"),$("#toc .title small").toggle()}),$("#toc .float_toc").toggle(function(){$(this).text("float"),$("#toc").toggleClass("nofloat")},function(){$(this).text("left"),$("#toc").toggleClass("nofloat")}))}}$(framesInit),$(createSourceLinks),$(createDefineLinks),$(createFullTreeLinks),$(fixBoxInfoHeights),$(searchFrameLinks),$(linkSummaries),$(keyboardShortcuts),$(summaryToggle),$(fixOutsideWorldLinks),$(generateTOC);var SeedAndDewConfig={};!function(){SeedAndDewConfig.adClass="snd-ad",SeedAndDewConfig.projectId="ef35b4ec-231e-4950-bd93-4c06fe3b2543",SeedAndDewConfig.loadStartTime=performance.now(),SeedAndDewConfig.apiVersion="2018-05-28",SeedAndDewConfig.sessionId=Math.random().toString(36).substring(2,15);var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.seedanddew.com/static/embed.min.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();