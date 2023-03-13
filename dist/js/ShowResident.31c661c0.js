(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShowResident"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):a(r(t))}},1499:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:{fade:"Search"===t.$route.name}},[n("router-link",{attrs:{to:{name:t.targetLocation,params:{id:t.id}}}},["Search"===t.$route.name?n("p",{staticClass:"type"},[t._v(t._s(t.type))]):t._e(),t.image?n("img",{attrs:{src:t.image,alt:t.name}}):t._e(),n("h2",{staticClass:"name"},[t._v(t._s(t.name))]),t.date?n("h3",{staticClass:"date"},[t._v(t._s(t.date))]):t._e(),n("div",{staticClass:"tags"},t._l(t.tags,(function(e){return n("h3",{key:e.key,staticClass:"tag"},[t._v(" "+t._s(e.name)+" ")])})),0)])],1)},a=[],i={name:"Card",props:{name:String,image:String,type:String,id:String,date:{type:String,default:null},tags:{type:Array,default:null}},computed:{targetLocation:function(){var t;switch(this.type){case"resident":t="ShowResident";break;case"show":t="ShowShow";break;case"blog":t="ShowBlog";break;default:console.log("no type");break}return t}}},s=i,o=(n("33ea"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"3c082a24",null);e["a"]=c.exports},"2bff":function(t,e,n){},"33ea":function(t,e,n){"use strict";n("3e08")},"35fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.resident?n("div",{staticClass:"showRes"},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:t.resident.image_url,alt:""}}),n("VerticalShow")],1),n("section",{staticClass:"main"},[t._m(0),n("div",{staticClass:"info"},[n("h2",{staticClass:"res-name"},[t._v(t._s(t.resident.name))]),t.resident.soundcloud_url||t.resident.mixcloud_url||t.resident.facebook_url||t.resident.twitter_url||t.resident.instagram_url||t.resident.bandcamp_url||t.resident.youtube_url?n("div",{staticClass:"links"},[t.resident.soundcloud_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.soundcloud_url,iconClass:"fa fa-soundcloud"}})],1):t._e(),t.resident.mixcloud_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.mixcloud_url,iconClass:"fa fa-mixcloud"}})],1):t._e(),t.resident.facebook_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.facebook_url,iconClass:"fab fa-facebook"}})],1):t._e(),t.resident.twitter_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.twitter_url,iconClass:"fa fa-twitter"}})],1):t._e(),t.resident.instagram_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.instagram_url,iconClass:"fa fa-instagram"}})],1):t._e(),t.resident.bandcamp_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.bandcamp_url,iconClass:"fa fa-bandcamp"}})],1):t._e(),t.resident.youtube_url?n("div",{staticClass:"link"},[n("Icon",{attrs:{linkto:t.resident.youtube_url,iconClass:"fab fa-youtube"}})],1):t._e()]):t._e(),n("div",{staticClass:"description"},[n("vue-markdown",[t._v(" "+t._s(t.resident.description)+" ")])],1),n("div",{staticClass:"cards"},t._l(t.shows,(function(t){return n("ShowCard",{key:t.key,staticClass:"grid-item show",attrs:{name:t.name,image:t.pictures.large,type:"show",id:t.key,tags:t.tags,small:!0}})})),1)])])]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-pane"},[n("p",{staticClass:"header"},[t._v("resident")])])}];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw i}}}}var c=n("1da1"),l=(n("96cf"),n("159c")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.linkto?n("a",{attrs:{href:t.linkto,target:"_blank"}},[n("i",{staticClass:"fa-lg",class:t.iconClass,staticStyle:{color:"black"}})]):t._e()])},f=[],d={name:"Icon",props:{linkto:String,iconClass:String}},m=d,p=n("2877"),v=Object(p["a"])(m,u,f,!1,null,null,null),h=v.exports,b=n("bc3a"),g=n.n(b),y=n("b623"),_=n("9ce6"),w=n.n(_),S={name:"showRes",components:{VerticalShow:l["a"],Icon:h,VueMarkdown:w.a,ShowCard:y["a"]},data:function(){return{resident:"",shows:[]}},computed:{id:function(){return this.$route.params.id},showUrls:function(){var t=[];return this.resident.mix_url_one&&t.push(this.resident.mix_url_one),this.resident.mix_url_two&&t.push(this.resident.mix_url_two),this.resident.mix_url_three&&t.push(this.resident.mix_url_three),t}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("residents/fetchIndividualResident",t.id);case 2:t.resident=e.sent,n=o(t.showUrls),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=15;break}return a=r.value,e.next=10,g.a.get("https://api.mixcloud.com".concat(a.slice(24)));case 10:i=e.sent,s=i.data,t.shows.push(s);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](4),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})))()}},C=S,k=(n("ba85"),Object(p["a"])(C,r,a,!1,null,"3bb3de0e",null));e["default"]=k.exports},"3e08":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),i=n("9bdd"),s=n("e95a"),o=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,f,d,m,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,g=void 0!==b,y=l(p),_=0;if(g&&(b=r(b,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&s(y))for(e=o(p.length),n=new v(e);e>_;_++)m=g?b(p[_],_):p[_],c(n,_,m);else for(f=y.call(p),d=f.next,n=new v;!(u=d.call(f)).done;_++)m=g?i(f,b,[u.value,_],!0):u.value,c(n,_,m);return n.length=_,n}},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),i=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||s(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?a.f(t,s,i(0,n)):t[s]=n}},"9bdd":function(t,e,n){var r=n("825a"),a=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(s){throw a(t),s}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),s=n("c430"),o=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),m=n("861d"),p=n("825a"),v=n("7b0b"),h=n("fc6a"),b=n("c04e"),g=n("5c6c"),y=n("7c73"),_=n("df75"),w=n("241c"),S=n("057f"),C=n("7418"),k=n("06cf"),x=n("9bf2"),O=n("d1e7"),j=n("9112"),A=n("6eeb"),I=n("5692"),$=n("f772"),E=n("d012"),P=n("90e3"),R=n("b622"),N=n("e538"),J=n("746f"),L=n("d44e"),M=n("69f3"),T=n("b727").forEach,U=$("hidden"),V="Symbol",B="prototype",F=R("toPrimitive"),D=M.set,Q=M.getterFor(V),W=Object[B],q=a.Symbol,z=i("JSON","stringify"),G=k.f,H=x.f,K=S.f,X=O.f,Y=I("symbols"),Z=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),nt=I("wks"),rt=a.QObject,at=!rt||!rt[B]||!rt[B].findChild,it=o&&u((function(){return 7!=y(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(W,e);r&&delete W[e],H(t,e,n),r&&t!==W&&H(W,e,r)}:H,st=function(t,e){var n=Y[t]=y(q[B]);return D(n,{type:V,tag:t,description:e}),o||(n.description=e),n},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===W&&ct(Z,e,n),p(t);var r=b(e,!0);return p(n),f(Y,r)?(n.enumerable?(f(t,U)&&t[U][r]&&(t[U][r]=!1),n=y(n,{enumerable:g(0,!1)})):(f(t,U)||H(t,U,g(1,{})),t[U][r]=!0),it(t,r,n)):H(t,r,n)},lt=function(t,e){p(t);var n=h(e),r=_(n).concat(pt(n));return T(r,(function(e){o&&!ft.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=b(t,!0),n=X.call(this,e);return!(this===W&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,U)&&this[U][e])||n)},dt=function(t,e){var n=h(t),r=b(e,!0);if(n!==W||!f(Y,r)||f(Z,r)){var a=G(n,r);return!a||!f(Y,r)||f(n,U)&&n[U][r]||(a.enumerable=!0),a}},mt=function(t){var e=K(h(t)),n=[];return T(e,(function(t){f(Y,t)||f(E,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=K(e?Z:h(t)),r=[];return T(n,(function(t){!f(Y,t)||e&&!f(W,t)||r.push(Y[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===W&&n.call(Z,t),f(this,U)&&f(this[U],e)&&(this[U][e]=!1),it(this,e,g(1,t))};return o&&at&&it(W,e,{configurable:!0,set:n}),st(e,t)},A(q[B],"toString",(function(){return Q(this).tag})),A(q,"withoutSetter",(function(t){return st(P(t),t)})),O.f=ft,x.f=ct,k.f=dt,w.f=S.f=mt,C.f=pt,N.f=function(t){return st(R(t),t)},o&&(H(q[B],"description",{configurable:!0,get:function(){return Q(this).description}}),s||A(W,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),T(_(nt),(function(t){J(t)})),r({target:V,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(v(t))}}),z){var vt=!c||u((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=e,(m(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),a[1]=e,z.apply(null,a)}})}q[B][F]||j(q[B],F,q[B].valueOf),L(q,V),E[U]=!0},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:a})},b623:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-card"},[t.small?n("SmallCard",{attrs:{name:t.name.slice(0,-24),image:t.image,type:t.type,date:t.name.slice(-23,-13),tags:t.tags,id:t.id,small:t.small}}):n("Card",{attrs:{name:t.name.slice(0,-24),image:t.image,type:t.type,date:t.name.slice(-23,-13),tags:t.tags,id:t.id,small:t.small}})],1)},a=[],i=n("1499"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("router-link",{attrs:{to:{name:t.targetLocation,params:{id:t.id}}}},[t.image?n("img",{attrs:{src:t.image,alt:t.name}}):t._e()]),n("div",{staticClass:"name"},[n("h2",[t._v(t._s(t.name))])]),t.date?n("h3",{staticClass:"date"},[t._v(t._s(t.date))]):t._e(),n("div",{staticClass:"tags"},t._l(t.tags,(function(e){return n("p",{key:e.key,staticClass:"tag"},[t._v(" "+t._s(e.name)+" ")])})),0)],1)},o=[],c={name:"Card",props:{name:String,image:String,type:String,id:String,date:{type:String,default:null},tags:{type:Array,default:null}},computed:{targetLocation:function(){return"resident"===this.type?"ShowResident":"ShowShow"}}},l=c,u=(n("d59d"),n("2877")),f=Object(u["a"])(l,s,o,!1,null,"3cf7757a",null),d=f.exports,m={name:"show-card",components:{Card:i["a"],SmallCard:d},props:{name:String,image:String,type:String,tags:Array,id:String,small:{type:Boolean,default:!1}}},p=m,v=Object(u["a"])(p,r,a,!1,null,null,null);e["a"]=v.exports},ba85:function(t,e,n){"use strict";n("2bff")},d28b:function(t,e,n){var r=n("746f");r("iterator")},d59d:function(t,e,n){"use strict";n("d72e")},d72e:function(t,e,n){},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),s=n("5135"),o=n("861d"),c=n("9bf2").f,l=n("e893"),u=i.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(s(f,t))return"";var n=v?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),f=n("1dde"),d=f("slice"),m=u("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,u,f=c(this),d=o(f.length),h=s(t,d),b=s(void 0===e?d:e,d);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(f,h,b);for(r=new(void 0===n?Array:n)(v(b-h,0)),u=0;h<b;h++,u++)h in f&&l(r,u,f[h]);return r.length=u,r}})}}]);
//# sourceMappingURL=ShowResident.31c661c0.js.map