!function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],_[o]&&p.push(_[o][0]),_[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==_[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},_={0:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;a.push([130,1]),r()}({113:function(e,t,r){"use strict";var n=r(14),_=r.n(n),a=r(47),o=r(29),i=r(114);_.a.use(a.a),t.a=function(e){var t={state:{candidates:[],addressEntered:null,imagery:"imagery2018",shouldShowImagery:!1},mutations:{setCandidates:function(e,t){e.candidates=t},setAddressEntered:function(e,t){e.addressEntered=t},setImagery:function(e,t){e.map.imagery=t},setShouldShowImagery:function(e,t){e.map.shouldShowImagery=t}}},r=Object(o.a)(t,i.a);return new a.a.Store({state:r.state,getters:r.getters,mutations:r.mutations})}},115:function(e,t,r){"use strict";t.a=function(e,t){e.mixin({created:function(){this.$config=t}})}},125:function(e,t,r){"use strict";var n=r(123),_=r(121),a=r(124),o=r(126),i=r(129),s=r(127),l=r(122),c=r(128),u={components:{Map_:n.a,EsriTiledMapLayer:_.a,BasemapToggleControl:a.a,BasemapSelectControl:o.a,ControlCorner:i.a,MeasureControl:s.a,LocationControl:l.a,CircleMarker:c.a},data:function(){return{}},mounted:function(){},computed:{activeBasemap:function(){if(this.$store.state.map.shouldShowImagery)return this.$store.state.map.imagery;var e=this.$config.map.defaultBasemap;return this.$store.state.map.basemap||e},tiledLayers:function(){var e=this.activeBasemap;return this.configForBasemap(e).tiledLayers||[]},locationMarker:function(){return{latlng:[this.$store.state.map.location.lat,this.$store.state.map.location.lng],radius:6,fillColor:"#ff3f3f",color:"#ff0000",weight:1,opacity:1,fillOpacity:1}}},methods:{configForBasemap:function(e){return this.$config.map.basemaps[e]||{}}}},p=(r(210),r(3)),f=Object(p.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-root"}},[e._m(0),e._v(" "),r("div",{staticClass:"medium-24 small-order-1 small-24 medium-order-2",attrs:{id:"components-root"}},[r("map_",{class:{"mb-map-with-widget":this.$store.state.cyclomedia.active||this.$store.state.pictometry.active},attrs:{id:"map-tag",center:this.$store.state.map.center,zoom:this.$store.state.map.zoom,"zoom-control-position":"bottomright","min-zoom":this.$config.map.minZoom,"max-zoom":this.$config.map.maxZoom}},[e._m(2),e._v(" "),r("control-corner",{attrs:{vSide:"top",hSide:"almostright"}}),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(6),e._v(" "),null!=this.$store.state.map.location.lat?r("circle-marker",{attrs:{latlng:this.locationMarker.latlng,radius:this.locationMarker.radius,fillColor:this.locationMarker.fillColor,color:this.locationMarker.color,weight:this.locationMarker.weight,opacity:this.locationMarker.opacity,fillOpacity:this.locationMarker.fillOpacity}}):e._e(),e._v(" "),e._l(this.$config.map.basemaps,function(t,n){return e.activeBasemap===n?r("esri-tiled-map-layer",{key:n,attrs:{url:t.url,"max-zoom":t.maxZoom,attribution:t.attribution}}):e._e()}),e._v(" "),e._l(this.$config.map.tiledLayers,function(t,n){return e.tiledLayers.includes(n)?r("esri-tiled-map-layer",{key:n,attrs:{url:t.url,zIndex:t.zIndex,attribution:t.attribution}}):e._e()})],2)],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"site-header app group"},[t("div",{staticClass:"row expanded"},[t("div",{staticClass:"columns"},[t("a",{staticClass:"logo",attrs:{href:"//beta.phila.gov"}},[t("img",{attrs:{src:"https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",alt:"City of Philadelphia"}})]),this._v(" "),t("div",{staticClass:"app-divide"}),this._v(" "),t("div",{staticClass:"page-title-container"},[t("a",{attrs:{href:"#/"}},[t("h1",{staticClass:"page-title"},[this._v("PVM Example App")])])])])])])},function(){var e=this.$createElement;return(this._self._c||e)("basemap-toggle-control",{attrs:{position:"topright"}})},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._m(1)],1)},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("basemap-select-control",{attrs:{position:"topalmostright"}})],1)},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("measure-control",{attrs:{position:"bottomleft"}})],1)},function(){var e=this.$createElement;return(this._self._c||e)("location-control",{attrs:{position:"bottomright"}})},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._m(5)],1)}],!1,null,null,null);t.a=f.exports},130:function(e,t,r){r(131),r(132),e.exports=r(135)},131:function(e,t,r){e.exports=r.p+"index.html"},132:function(e,t,r){var n=r(133);"string"==typeof n&&(n=[[e.i,n,""]]);var _={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,_);n.locals&&(e.exports=n.locals)},133:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".greeting > h2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.greeting > .callout {\r\n  border-color: #58c04d;\r\n  background: #fff;\r\n  /*margin: 0 0 1rem 0;*/\r\n  padding: 1rem;\r\n}\r\n\r\n.greeting > .callout > ul {\r\n  margin: 0 0 0 1.42857rem;\r\n  padding: 0 0 0 1.42857rem;\r\n}\r\n\r\n#application .site-header, #application .app-footer {\r\n\tbackground: #2176d2;\r\n}\r\n\r\n#application .site-header .page-title-container h1 {\r\n\tfont-size: 2.14286rem;\r\n}\r\n\r\n/*this fixes an issue with the topic panel scrolling over the footer padding*/\r\n#application .app-footer {\r\n\tposition: relative;\r\n}\r\n\r\n/*small*/\r\n@media screen and (max-width: 39.9375em) {\r\n\t.logo {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n\t.page-title-container {\r\n\t\tfloat: right;\r\n\t}\r\n}\r\n\r\n.button-image {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n",""])},135:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),vue__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(112),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(113),_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(115),_components_App_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(125),_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(29),_config_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(49),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(118),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_8__),_fortawesome_pro_solid_svg_icons_faDotCircle__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(119),_fortawesome_pro_solid_svg_icons_faDotCircle__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faDotCircle__WEBPACK_IMPORTED_MODULE_9__),_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(120),leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(314),leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_11__),leaflet_easybutton_src_easy_button_css__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(319),leaflet_easybutton_src_easy_button_css__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(leaflet_easybutton_src_easy_button_css__WEBPACK_IMPORTED_MODULE_12__),leaflet_measure_dist_leaflet_measure_css__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(321),leaflet_measure_dist_leaflet_measure_css__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(leaflet_measure_dist_leaflet_measure_css__WEBPACK_IMPORTED_MODULE_13__),_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(337),_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_14__),_styles_css__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(339),_styles_css__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_15__);_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.c.add(_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_8__.faExternalLink,_fortawesome_pro_solid_svg_icons_faDotCircle__WEBPACK_IMPORTED_MODULE_9__.faDotCircle);var clientConfig=_config_js__WEBPACK_IMPORTED_MODULE_6__.a,baseConfigUrl=_config_js__WEBPACK_IMPORTED_MODULE_6__.a.baseConfig;function initVue(e){var t=Object(_store__WEBPACK_IMPORTED_MODULE_2__.a)(e);vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__.a,e),vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("font-awesome-icon",_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a);new vue__WEBPACK_IMPORTED_MODULE_0___default.a({el:"#vue-app",render:function(e){return e(_components_App_vue__WEBPACK_IMPORTED_MODULE_4__.a)},store:t})}baseConfigUrl?axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseConfigUrl).then(function(response){var data=response.data,baseConfigFn=eval(data),gatekeeperKey=clientConfig.gatekeeperKey,baseConfig=baseConfigFn({gatekeeperKey:gatekeeperKey}),config=Object(_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__.a)(baseConfig,clientConfig);console.log("config:",config),initVue(config)}).catch(function(e){console.error("Error loading base config:",e)}):initVue(clientConfig)},210:function(e,t,r){"use strict";var n=r(28);r.n(n).a},211:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"\n#app-root {\r\n  height: 100%\n}\n#components-root {\r\n  /* padding: 20px; */\r\n  height: 90%;\r\n  overflow-y: auto;\n}\r\n\r\n/*don't highlight any form elements*/\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n  outline: none;\n}\r\n\r\n/* standards applies padding to buttons, which causes some weirdness with\r\nbuttons on the map panel. override here. */\nbutton {\r\n  padding: inherit !important;\n}\n.component-label {\r\n  font-size: 20px;\n}\n.margin-sides-20 {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\n}\n.margin-20 {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\n}\n.margin-bottom-60 {\r\n  margin-bottom: 60px !important;\n}\n.ib {\r\n  display: inline-block;\n}\n.mb-panel-map {\r\n  /*this allows the loading mask to fill the div*/\r\n  position: relative;\n}\n.mb-map-with-widget {\r\n  height: 50%;\n}\r\n\r\n\r\n",""])},28:function(e,t,r){var n=r(211);"string"==typeof n&&(n=[[e.i,n,""]]);var _={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,_);n.locals&&(e.exports=n.locals)},29:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return e&&"object"===_(e)&&!Array.isArray(e)&&null!==e}function o(e,t){var r=Object.assign({},e);return a(e)&&a(t)&&Object.keys(t).forEach(function(_){a(t[_])&&_ in e?r[_]=o(e[_],t[_]):Object.assign(r,n({},_,t[_]))}),r}r.d(t,"a",function(){return o})},339:function(e,t,r){var n=r(340);"string"==typeof n&&(n=[[e.i,n,""]]);var _={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,_);n.locals&&(e.exports=n.locals)},340:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".greeting > h2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.greeting > .callout {\r\n  border-color: #58c04d;\r\n  background: #fff;\r\n  /*margin: 0 0 1rem 0;*/\r\n  padding: 1rem;\r\n}\r\n\r\n.greeting > .callout > ul {\r\n  margin: 0 0 0 1.42857rem;\r\n  padding: 0 0 0 1.42857rem;\r\n}\r\n\r\n#application .site-header, #application .app-footer {\r\n\tbackground: #2176d2;\r\n}\r\n\r\n#application .site-header .page-title-container h1 {\r\n\tfont-size: 2.14286rem;\r\n}\r\n\r\n/*this fixes an issue with the topic panel scrolling over the footer padding*/\r\n#application .app-footer {\r\n\tposition: relative;\r\n}\r\n\r\n/*small*/\r\n@media screen and (max-width: 39.9375em) {\r\n\t.logo {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n\t.page-title-container {\r\n\t\tfloat: right;\r\n\t}\r\n}\r\n\r\n.button-image {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n",""])},49:function(e,t,r){"use strict";var n=r(48),_=r.n(n),a=r(117);_.a.settings.currency.precision=0;var o={baseConfig:"https://cdn.jsdelivr.net/gh/ajrothwell/mapboard-base-config@74cf4692237e16757681f6860b936efd734c27d8/config.js",router:{enabled:!1},map:{defaultBasemap:"pwd"},transforms:{currency:{globals:["accounting"],transform:function(e,t){return _.a.formatMoney(e)}},date:{transform:function(e){return Object(a.format)(e,"MM/DD/YYYY")}},phoneNumber:{transform:function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null}},rcoPrimaryContact:{transform:function(e){var t=/\(?(\d{3})\)?( |-)?(\d{3})(-| )?(\d{4})/g.exec(e);if(!t)return e;var r=["(",t[1],") ",t[3],"-",t[5]].join(""),n=t[0];return e.replace(n,r)}},booleanToYesNo:{transform:function(e){return e?"Yes":"No"}},integer:{transform:function(e){return!isNaN(e)&&parseInt(e)}},prettyNumber:{transform:function(e){return!isNaN(e)&&e.toLocaleString()}},feet:{transform:function(e){return e&&e+" ft"}},squareFeet:{transform:function(e){return e&&e+" sq ft"}},nowrap:{transform:function(e){return'<span style="white-space: nowrap;">'+e+"</span>"}},bold:{transform:function(e){return"<strong>"+e+"</strong>"}}},cyclomedia:{enabled:!0,measurementAllowed:!1,popoutAble:!0},pictometry:{enabled:!1}};t.a=o}});
//# sourceMappingURL=app.js.map