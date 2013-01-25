/* (c) Aaron Gustafson (@AaronGustafson). MIT License. http://github.com/easy-designs/jquery.easy-sticky-stack.js
 *  Based on work by Chris Spittles http://stackoverflow.com/a/13293684 */
(function(c,i,q){var g="easy-sticky-stack",s="absolute",p="fixed",b="width",k="scroll",n="top",h=g+"-wrapper",e="data-"+g,r=g+"-threshold",o=c("<div/>"),m=c(i),l=0,j="."+g+"{ position: relative; z-index: 1; }."+g+".fixed{ position: fixed; top: 0; z-index: 0; }."+g+".fixed.absolute { position: absolute; }";function d(v){var u;function t(){clearTimeout(u);u=q;v()}m.on("resize",function(){if(u){clearTimeout(u);u=q}u=setTimeout(t,50)});m.on("load",v)}function a(t,w){var v=new RegExp("(;s?)?"+w+"[^;]*;"),u="style";t.attr(u,t.attr(u).replace(v,"$1"))}function f(u){var t=u.length;this.init=function(){c("<style/>").html(j).appendTo(c("head"));u.addClass(g).each(function(){var v=c(this),w=v.is(":only-child"),x=v.width();if(!w){v.wrap(o.clone())}v.width(x).parent().addClass(h).height(v.outerHeight());v.data(p,v.offset().top);v.data(s,v.position().top)})};this.scroll=function(){u.each(function(A,x){var y=c(x),E=A<t-1?u.eq(A+1):c([]),w=A>0?u.eq(A-1):c([]),C=y.data(p),D=y.parent().height(),v=0,z=0,B=m.scrollTop();if(E.length){v=E.data(p)-D;z=E.data(s)-D}if(C<=B){y.addClass(p);if(E.length>0&&!y.hasClass(s)&&y.offset().top>=v){y.addClass(s).css(n,z)}}else{y.removeClass(p);if(w.length>0&&w.hasClass(s)&&B<=C-w.outerHeight()){a(w.removeClass(s),n)}}})}}d(function(){var u=new f(c("["+e+"]")),t=c("[data-"+r+"]").eq(0).data(r),v=true;u.init();if("matchMedia" in i){v=i.matchMedia("(min-width:"+t+")").matches}if(v){m.on(k,u.scroll)}else{m.off(k,u.scroll)}})}(jQuery,window,null));