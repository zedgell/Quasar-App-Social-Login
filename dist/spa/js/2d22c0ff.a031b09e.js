(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[e._v("\n        Quasar App\n      ")]),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{id:"image"}})])],1),a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v("Account Settings")]),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{id:"image2"}})])],1),a("q-item-section",{attrs:{id:"name"}})],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],o=a("0967"),i=a("2b0e"),l=function(e,t){var a=window.open;if(!0===o["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(e);var r=a(e,"_blank");if(r)return r.focus(),r;t&&t()},s={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{openURL:l}},p=s,c=a("2877"),d=Object(c["a"])(p,r,n,!1,null,null,null);t["default"]=d.exports}}]);