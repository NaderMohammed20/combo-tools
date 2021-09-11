var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(t){"use strict";var e=function(){this.$btnFullScreen=t("#btn-fullscreen")};e.prototype.initFullScreen=function(){this.$btnFullScreen.on("click",function(e){e.preventDefault(),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)})},e.prototype.initNavbar=function(){t(".navbar-toggle").on("click",function(e){t(this).toggleClass("open"),t("#navigation").slideToggle(400)}),t(".navigation-menu>li").slice(-2).addClass("last-elements"),t('.navigation-menu li.has-submenu a[href="#"]').on("click",function(e){t(window).width()<992&&(e.preventDefault(),t(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))})},e.prototype.initScrollbar=function(){t(".slimscroll").slimScroll({height:"auto",position:"right",size:"7px",color:"#9ea5ab",wheelStep:5,touchScrollStep:50})},e.prototype.initMenuItem=function(){t(".navigation-menu a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(t(this).parent().addClass("active"),t(this).parent().parent().parent().addClass("active"),t(this).parent().parent().parent().parent().parent().addClass("active"))})},e.prototype.initComponents=function(){t('[data-toggle="tooltip"]').tooltip(),t('[data-toggle="popover"]').popover()},e.prototype.init=function(){this.initFullScreen(),this.initNavbar(),this.initScrollbar(),this.initMenuItem(),this.initComponents(),Waves.init()},t.MainApp=new e,t.MainApp.Constructor=e}(window.jQuery),function(e){"use strict";window.jQuery.MainApp.init()}();

}
/*
     FILE ARCHIVED ON 11:26:45 Jun 09, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:19:51 Sep 10, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 817.635 (4)
  exclusion.robots.policy: 0.641
  LoadShardBlock: 294.757 (3)
  RedisCDXSource: 11.575
  load_resource: 2667.227
  captures_list: 363.921
  PetaboxLoader3.resolve: 2122.965
  CDXLines.iter: 42.231 (3)
  esindex: 0.021
  exclusion.robots: 0.671
*/