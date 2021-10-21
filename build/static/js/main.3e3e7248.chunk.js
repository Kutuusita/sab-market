(this["webpackJsonpsab-market"]=this["webpackJsonpsab-market"]||[]).push([[0],{36:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(19),s=r.n(a),i=r(21),o=r(3),u=r(13),d=r(10),l=r(26),j=function(e,t){if(void 0===e)return{products:[],categoryId:null,loading:!0,error:null};switch(t.type){case"FETCH_PRODUCTS_REQUEST":return{products:[],categoryId:null,loading:!0,error:null};case"FETCH_PRODUCTS_SUCCESS":return{products:t.payload.newProducts,categoryId:t.payload.id,loading:!1,error:null};case"FETCH_PRODUCTS_FAILURE":return{products:[],categoryId:null,loading:!1,error:t.payload};default:return e.productList}},p=function(e,t){if(void 0===e)return{categories:[],loading:!0,error:null};switch(t.type){case"FETCH_CATEGORIES_REQUEST":return{categories:[],loading:!0,error:null};case"FETCH_CATEGORIES_SUCCESS":return{categories:t.payload,loading:!1,error:null};case"FETCH_CATEGORIES_FAILURE":return{categories:[],loading:!1,error:t.payload};default:return e.categoryList}},h=r(16),f=function(e,t,r){return 0===t.count?[].concat(Object(h.a)(e.slice(0,r)),Object(h.a)(e.slice(r+1))):-1===r?[].concat(Object(h.a)(e),[t]):[].concat(Object(h.a)(e.slice(0,r)),[t],Object(h.a)(e.slice(r+1)))},b=function(e,t,r){var c=e.productList.products,n=e.shoppingCart.cartItems,a=c.find((function(e){return e.id===t})),s=n.findIndex((function(e){return e.id===t})),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,c=t.id,n=void 0===c?e.id:c,a=t.count,s=void 0===a?0:a,i=t.title,o=void 0===i?e.title:i,u=t.total;return{id:n,title:o,count:s+r,total:(void 0===u?0:u)+r*e.price}}(a,n[s],r);return{cartItems:f(n,i,s),orderTotal:0}},g=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"PRODUCT_ADDED_TO_CART":return b(e,t.payload,1);case"PRODUCT_REMOVED_FROM_CART":return b(e,t.payload,-1);case"ALL_PRODUCTS_REMOVED_FROM_CART":var r=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return b(e,t.payload,-r.count);default:return e.shoppingCart}},O=function(e,t){return console.log(t.type,e),{categoryList:p(e,t),productList:j(e,t),shoppingCart:g(e,t)}},m=function(e){return function(){return function(t){t({type:"FETCH_CATEGORIES_REQUEST"}),e.getCategories().then((function(e){return t({type:"FETCH_CATEGORIES_SUCCESS",payload:e})})).catch((function(e){return t(function(e){return{type:"FETCH_CATEGORIES_FAILURE",payload:e}}(e))}))}}},v=r(8),x=r.n(v),y=r(18),_=r(9),C=function e(){var t=this;Object(_.a)(this,e),this._apiBase="https://market.sab-it.ru/market/market_object_2.php",this.headers={Origin:"http://localhost:3000/"},this.getResourse=function(){var e=Object(y.a)(x.a.mark((function e(r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase,"?type=").concat(r),{method:"GET",mode:"cors",headers:t.headers});case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"+", ".concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getProductsByCatId=function(){var e=Object(y.a)(x.a.mark((function e(r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("products");case 2:return c=e.sent,e.abrupt("return",c.filter((function(e){return t._filterProducts(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCategories=Object(y.a)(x.a.mark((function e(){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("category");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),this.getCategoryById=function(){var e=Object(y.a)(x.a.mark((function e(r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("category");case 2:return c=e.sent,e.abrupt("return",c.find((function(e){return t._filterProducts(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._filterProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return!(!e&&!e.length)&&(e.virtuemart_category_id===t&&e)}},E=new C,N=Object(d.c)(O,{categoryList:{categories:[],loading:!0,error:null},productList:{products:[],cutegoryId:null,loading:!0,error:null},shoppingCart:{cartItems:{},orderTotal:0}},Object(d.a)(l.a));N.dispatch(m(E));var T=N,S=n.a.createContext(),R=S.Provider,I=S.Consumer,w=r(12),k=r(15),P=r(14),U=(r(36),r(1)),A=function(){return Object(U.jsxs)("div",{className:"error-indicator",children:[Object(U.jsx)("span",{children:"something has gone terrible wrong"}),Object(U.jsx)("span",{children:"(but we already sebt droids to fix it)"})]})},F=function(e){Object(k.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(_.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={hasError:!1},e}return Object(w.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(U.jsx)(A,{}):this.props.children}}]),r}(c.Component),D=F,L=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},H=r(25),G=function(){return function(e){return function(t){return Object(U.jsx)(I,{children:function(r){return Object(U.jsx)(e,Object(H.a)(Object(H.a)({},t),{},{storeService:r}))}})}}},M=(r(38),function(){return Object(U.jsx)("div",{className:"spinner-wrap",children:Object(U.jsx)("div",{className:"spinner-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}),B=(r(39),function(e){var t=e.data,r=e.onItemSelected,c=t.virtuemart_category_id,n=t.file_url,a=t.category_name;return Object(U.jsxs)("div",{onClick:function(){return r(c)},className:"category-card",id:c,children:[Object(U.jsx)("div",{className:"category-card__image",children:Object(U.jsx)("img",{src:"https://market.sab-it.ru/".concat(n),alt:a})}),Object(U.jsx)("div",{className:"category-card__name",children:a})]})}),Q=(r(40),function(e){Object(k.a)(r,e);var t=Object(P.a)(r);function r(){return Object(_.a)(this,r),t.apply(this,arguments)}return Object(w.a)(r,[{key:"componentDidMount",value:function(){this.props.categories.length||this.props.fetchCategories()}},{key:"render",value:function(){var e=this.props,t=e.categories,r=e.loading,c=e.error,n=e.history,a=t.map((function(e){var t=e.virtuemart_category_id;return Object(U.jsx)(B,{onItemSelected:function(e){n.push("/category/".concat(e))},data:e},t)}));return c?Object(U.jsx)(A,{}):r?Object(U.jsx)(M,{}):Object(U.jsxs)("div",{className:"catalog",children:[Object(U.jsxs)("div",{className:"categories-section",children:[Object(U.jsx)("div",{className:"section-title",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 54-\u0424\u0417"}),Object(U.jsx)("div",{className:"category-card-list d-flex flex-wrap",children:a})]}),Object(U.jsx)("div",{className:"categories-section",children:Object(U.jsx)("div",{className:"section-title",children:"POS-\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"})})]})}}]),r}(c.Component)),J=L(o.e,G(),Object(u.b)((function(e){var t=e.categoryList;return{categories:t.categories,loading:t.loading,error:t.error}}),(function(e,t){var r=t.storeService;return Object(d.b)({fetchCategories:m(r)},e)})))(Q),V=(r(43),r.p+"static/media/product-card.65926f2c.jpg"),q=function(e){var t=e.data;return Object(U.jsxs)("div",{className:"product-card",children:[Object(U.jsx)("div",{className:"product-card__image",children:Object(U.jsx)("img",{src:t.image_url?t.image_url:V,alt:t.product_name})}),Object(U.jsx)("div",{className:"product-card__name",children:t.product_name}),Object(U.jsx)("button",{className:"add-to-cart",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(U.jsxs)("div",{className:"product-card__price",children:[Object(U.jsxs)("div",{className:"product-card__price--base",children:[t.product_price," \u20bd"]}),Object(U.jsxs)("div",{className:"product-card__price--sale",children:[Object(U.jsxs)("span",{className:"price",children:[t.product_price," \u20bd "]}),Object(U.jsx)("span",{children:"\u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u043e\u0439 \u0421\u0410\u0411.\u041f\u043b\u044e\u0441"})]})]})]})},z=(r(44),function(e){Object(k.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(_.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={data:[],cat:{}},e.service=new C,e}return Object(w.a)(r,[{key:"componentDidMount",value:function(){this.props.categoryId!==this.props.itemId&&this.props.fetchProducts(this.props.itemId)}},{key:"render",value:function(){var e=this.props,t=e.categories,r=e.products,c=(e.loading,e.error,e.itemId),n=r.map((function(e){return Object(U.jsx)(q,{data:e},e.virtuemart_product_id)})),a=t.find((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return!(!e&&!e.length)&&e.virtuemart_category_id===t&&e}(e,c)})),s=a.category_name;return Object(U.jsxs)("div",{className:"category",children:[Object(U.jsxs)("div",{className:"breadcrumbs",children:[Object(U.jsx)(i.b,{to:"/",className:"back-link",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(U.jsx)("div",{className:"breadcrumbs__link",children:s})]}),Object(U.jsx)("div",{className:"section-title",children:s}),Object(U.jsx)("div",{className:"products-list d-flex flex-wrap",children:n})]})}}]),r}(c.Component)),K=L(o.e,G(),Object(u.b)((function(e){var t=e.productList,r=t.products,c=t.categoryId,n=t.loading,a=t.error;return{categories:e.categoryList.categories,products:r,categoryId:c,loading:n,error:a}}),(function(e,t){var r,c=t.storeService;return Object(d.b)({fetchProducts:(r=c,function(e){return function(t){t({type:"FETCH_PRODUCTS_REQUEST"}),r.getProductsByCatId(e).then((function(r){return t(function(e,t){return{type:"FETCH_PRODUCTS_SUCCESS",payload:{newProducts:e,id:t}}}(r,e))})).catch((function(e){return t(function(e){return{type:"FETCH_PRODUCTS_FAILURE",payload:e}}(e))}))}})},e)})))(z),W=(r(45),function(){return Object(U.jsx)("footer",{className:"footer",children:Object(U.jsxs)("div",{className:"page-content d-flex flex-wrap",children:[Object(U.jsxs)("div",{className:"footer__col",children:[Object(U.jsx)("div",{className:"title",children:"\u0422\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430:"}),Object(U.jsx)("div",{className:"info",children:Object(U.jsx)("a",{href:"tel:88005507094",children:"8 (800) 550-70-94"})})]}),Object(U.jsxs)("div",{className:"footer__col",children:[Object(U.jsx)("div",{className:"title",children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b:"}),Object(U.jsx)("div",{className:"info",children:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e, 9:00\u201318:00"})]}),Object(U.jsxs)("div",{className:"footer__col",children:[Object(U.jsx)("div",{className:"title",children:"\u0410\u0434\u0440\u0435\u0441:"}),Object(U.jsx)("div",{className:"info",children:"\u0433. \u0421\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c, \u0443\u043b. \u041f\u0430\u0432\u043b\u0435\u043d\u043a\u043e, 2\u0410"})]})]})})}),X=(r(46),r.p+"static/media/main-category-icon--pos.01b79082.svg"),Y=r.p+"static/media/main-category-icon--po.12efb737.svg",Z=r.p+"static/media/main-category-icon--services.a8c18364.svg",$=function(){return Object(U.jsxs)("div",{className:"main-categoties d-flex justify-content-sb",children:[Object(U.jsxs)("button",{className:"main-categories-card active",id:"main-category-pos",children:[Object(U.jsx)("span",{className:"main-category-icon main-category-icon--pos",children:Object(U.jsx)("svg",{children:Object(U.jsx)("use",{href:X+"#svg-pos"})})}),"POS - \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"]}),Object(U.jsxs)("button",{className:"main-categories-card",id:"main-category-po",children:[Object(U.jsx)("span",{className:"main-category-icon main-category-icon--po",children:Object(U.jsx)("svg",{children:Object(U.jsx)("use",{href:Y+"#svg-po"})})}),"\u041f\u041e \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430"]}),Object(U.jsxs)("button",{className:"main-categories-card",id:"main-category-services",children:[Object(U.jsx)("span",{className:"main-category-icon main-category-icon--services",children:Object(U.jsx)("svg",{children:Object(U.jsx)("use",{href:Z+"#svg-services"})})}),"\u0421\u0410\u0411.\u0423\u0441\u043b\u0443\u0433\u0438"]})]})},ee=(r(47),function(){var e=new C;return Object(U.jsxs)(u.a,{store:T,children:[Object(U.jsx)(D,{children:Object(U.jsx)(R,{value:e,children:Object(U.jsx)("div",{className:"page-content",children:Object(U.jsxs)(i.a,{children:[Object(U.jsx)($,{}),Object(U.jsx)(o.a,{path:"/category/:id",render:function(e){var t=e.match.params.id;return Object(U.jsx)(K,{itemId:t})}}),Object(U.jsx)(o.a,{path:"/",component:J,exact:!0})]})})})}),Object(U.jsx)(W,{})]})});s.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(ee,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.3e3e7248.chunk.js.map