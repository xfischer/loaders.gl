(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(t,n,e){"use strict";e.r(n),e.d(n,"query",function(){return o}),e.d(n,"default",function(){return c});e(82),e(33);var r=e(2),a=e.n(r),i=e(0),u=e.n(i),o="4156247007";function s(t){var n=t.data.docBySlug.html,e=t.pageContext.relativeLinks;return n.replace(/href="([^"]+)"/g,function(t,n){if(n.startsWith("http")||n.startsWith("#"))return t;var r=n.startsWith("/")?n.slice(1):n;return'href="'+e[r]+'"'})}var c=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={html:s(n)},e}return a()(n,t),n.prototype.render=function(){var t=this.state.html;return u.a.createElement("div",null,u.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}}))},n}(u.a.Component)}}]);