(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shows"],{1499:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",class:{fade:"Search"===t.$route.name}},[e("router-link",{attrs:{to:{name:t.targetLocation,params:{id:t.id}}}},["Search"===t.$route.name?e("p",{staticClass:"type"},[t._v(t._s(t.type))]):t._e(),t.image?e("img",{attrs:{src:t.image,alt:t.name}}):t._e(),e("h2",{staticClass:"name"},[t._v(t._s(t.name))]),t.date?e("h3",{staticClass:"date"},[t._v(t._s(t.date))]):t._e(),e("div",{staticClass:"tags"},t._l(t.tags,(function(a){return e("h3",{key:a.key,staticClass:"tag"},[t._v(" "+t._s(a.name)+" ")])})),0)])],1)},n=[],i={name:"Card",props:{name:String,image:String,type:String,id:String,date:{type:String,default:null},tags:{type:Array,default:null}},computed:{targetLocation:function(){var t;switch(this.type){case"resident":t="ShowResident";break;case"show":t="ShowShow";break;case"blog":t="ShowBlog";break;default:console.log("no type");break}return t}}},r=i,l=(e("33ea"),e("2877")),c=Object(l["a"])(r,s,n,!1,null,"3c082a24",null);a["a"]=c.exports},"22f5":function(t,a,e){"use strict";e("3376")},3376:function(t,a,e){},"33ea":function(t,a,e){"use strict";e("3e08")},"3e08":function(t,a,e){},"55b5":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"grid-template"},[e("div",{staticClass:"header-pane"},[e("p",{staticClass:"header"},[t._v(t._s(t.header))])]),t._t("default")],2)},n=[],i={name:"GridTemplate",props:{header:String}},r=i,l=(e("22f5"),e("2877")),c=Object(l["a"])(r,s,n,!1,null,"3e25051f",null);a["a"]=c.exports},"768d":function(t,a,e){"use strict";e("e0cb")},b623:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"show-card"},[t.small?e("SmallCard",{attrs:{name:t.name.slice(0,-24),image:t.image,type:t.type,date:t.name.slice(-23,-13),tags:t.tags,id:t.id,small:t.small}}):e("Card",{attrs:{name:t.name.slice(0,-24),image:t.image,type:t.type,date:t.name.slice(-23,-13),tags:t.tags,id:t.id,small:t.small}})],1)},n=[],i=e("1499"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("router-link",{attrs:{to:{name:t.targetLocation,params:{id:t.id}}}},[t.image?e("img",{attrs:{src:t.image,alt:t.name}}):t._e()]),e("div",{staticClass:"name"},[e("h2",[t._v(t._s(t.name))])]),t.date?e("h3",{staticClass:"date"},[t._v(t._s(t.date))]):t._e(),e("div",{staticClass:"tags"},t._l(t.tags,(function(a){return e("p",{key:a.key,staticClass:"tag"},[t._v(" "+t._s(a.name)+" ")])})),0)],1)},l=[],c={name:"Card",props:{name:String,image:String,type:String,id:String,date:{type:String,default:null},tags:{type:Array,default:null}},computed:{targetLocation:function(){return"resident"===this.type?"ShowResident":"ShowShow"}}},o=c,d=(e("d59d"),e("2877")),u=Object(d["a"])(o,r,l,!1,null,"3cf7757a",null),m=u.exports,g={name:"show-card",components:{Card:i["a"],SmallCard:m},props:{name:String,image:String,type:String,tags:Array,id:String,small:{type:Boolean,default:!1}}},p=g,h=Object(d["a"])(p,s,n,!1,null,null,null);a["a"]=h.exports},d59d:function(t,a,e){"use strict";e("d72e")},d72e:function(t,a,e){},e0cb:function(t,a,e){},f6f7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.allShows&&t.allShows.data?e("div",{staticClass:"shows"},[e("grid-template",{attrs:{header:"shows"}},[e("div",{staticClass:"grid"},t._l(t.allShows.data,(function(t){return e("ShowCard",{key:t.key,staticClass:"grid-item",attrs:{name:t.name,image:t.pictures.large,type:"show",id:t.key,tags:t.tags}})})),1)])],1):t._e()},n=[],i=e("b623"),r=e("55b5"),l={name:"Shows",components:{ShowCard:i["a"],GridTemplate:r["a"]},computed:{allShows:function(){return this.$store.getters["pastShows/allShows"]}},created:function(){this.$store.dispatch("pastShows/fetchShows")}},c=l,o=(e("768d"),e("2877")),d=Object(o["a"])(c,s,n,!1,null,"1c16b840",null);a["default"]=d.exports}}]);
//# sourceMappingURL=shows.f592c3b0.js.map