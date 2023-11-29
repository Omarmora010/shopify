"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[848],{1731:(v,u,i)=>{i.d(u,{J:()=>g});var c=i(5619);const s_baseUrlData="https://ecommerce.routemisr.com/api/v1";var t=i(4769),h=i(9862),m=i(2425);let g=(()=>{var l;class p{constructor(e,r){this._HttpClient=e,this._ToastrService=r,this.cartNumber=new c.X(0),this.whishNumber=new c.X(0),this.whishList=new c.X([])}getUserOrders(e){return this._HttpClient.get(s_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:r=>{"success"===r.status&&(this._ToastrService.success(r.message),this.cartNumber.next(r.numOfCartItems))}})}SetcheckOut(e,r){return this._HttpClient.post(s_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart`,r)}getProducts(e=1){return this._HttpClient.get(s_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(s_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(s_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(s_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(s_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(s_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(s_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(s_baseUrlData+"/cart")}updatePoductCount(e,r){return this._HttpClient.put(s_baseUrlData+"/cart/"+e,{count:r})}deletePoductCart(e){return this._HttpClient.delete(s_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(s_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(s_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(s_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(s_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(s_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(s_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(s_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(s_baseUrlData+`/addresses/${e}`)}}return(l=p).\u0275fac=function(e){return new(e||l)(t.LFG(h.eN),t.LFG(m._W))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),p})()},848:(v,u,i)=>{i.r(u),i.d(u,{AllordersComponent:()=>e});var c=i(6814),s=i(1651),t=i(4769),h=i(4768),m=i(1731);function g(r,o){if(1&r&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"img",18),t.TgZ(3,"div",19)(4,"h3",20),t._uU(5),t.ALo(6,"cuttext"),t.qZA(),t.TgZ(7,"span",21),t._uU(8),t.qZA(),t.TgZ(9,"span",21),t._uU(10),t.qZA()()(),t._UZ(11,"hr",22),t.qZA()),2&r){const a=o.$implicit;t.xp6(2),t.Q6J("src",a.product.imageCover,t.LSH)("alt",a.product.title),t.xp6(3),t.hij(" ",t.xi3(6,5,a.product.title,3)," "),t.xp6(3),t.hij(" Count:",a.count," "),t.xp6(2),t.hij(" Price:",a.price," ")}}function l(r,o){if(1&r&&(t.TgZ(0,"div",5)(1,"h3",6),t._uU(2),t.qZA(),t.TgZ(3,"div",7),t.YNc(4,g,12,8,"div",8),t.qZA(),t.TgZ(5,"div",9)(6,"div",10)(7,"p",11)(8,"span"),t._uU(9," Is Delivered: "),t.qZA(),t.TgZ(10,"span",12),t._uU(11),t.qZA()(),t.TgZ(12,"p",11)(13,"span"),t._uU(14," Is Paid: "),t.qZA(),t.TgZ(15,"span",12),t._uU(16),t.qZA()(),t.TgZ(17,"span",13),t._uU(18),t.qZA(),t.TgZ(19,"span",13),t._uU(20),t.qZA()()(),t.TgZ(21,"div",14),t._UZ(22,"hr",15),t.qZA()()),2&r){const a=o.$implicit,n=o.index;t.xp6(2),t.hij("Order: ",n+1,""),t.xp6(2),t.Q6J("ngForOf",a.cartItems),t.xp6(6),t.Tol(a.isDelivered?"bg-success":"bg-danger"),t.xp6(1),t.Oqu(a.isDelivered?"Yes":"No"),t.xp6(4),t.Tol(a.isPaid?"bg-success":"bg-danger"),t.xp6(1),t.Oqu(a.isPaid?"Yes":"No"),t.xp6(2),t.hij(" Payment Method Type: ",a.paymentMethodType," "),t.xp6(2),t.hij(" totalOrderPrice: ",a.totalOrderPrice," ")}}function p(r,o){if(1&r&&(t.TgZ(0,"section",2)(1,"h1",3),t._uU(2,"All Orders"),t.qZA(),t.YNc(3,l,23,10,"div",4),t.qZA()),2&r){const a=t.oxw();t.xp6(3),t.Q6J("ngForOf",a.ordersData)}}function _(r,o){1&r&&(t.TgZ(0,"h1",23),t._uU(1,"Your Orders Is Empty..."),t.qZA())}let e=(()=>{var r;class o{constructor(n,d){this._AuthService=n,this._EcomdataService=d,this.ordersData=[],this.userId=""}ngOnInit(){this._AuthService.userData.subscribe({next:n=>{null!==n&&(this.userId=n.id,this._EcomdataService.getUserOrders(this.userId).subscribe({next:d=>{this.ordersData=d}}))}})}}return(r=o).\u0275fac=function(n){return new(n||r)(t.Y36(h.e),t.Y36(m.J))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-allorders"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","rounded shadow bg-main-light w-75 mx-auto p-3 allorders",4,"ngIf","ngIfElse"],["oreder",""],[1,"rounded","shadow","bg-main-light","w-75","mx-auto","p-3","allorders"],[1,"text-center","h4"],["class","row align-items-center border rounded m-2 p-2",4,"ngFor","ngForOf"],[1,"row","align-items-center","border","rounded","m-2","p-2"],[1,"h6"],[1,"col-md-8"],["class","ps-5 mb-1",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"border","border-dark","rounded","p-1"],[1,"mb-0"],[1,"badge"],[1,"d-block"],[1,"col-12"],[1,"my-3","mx-5"],[1,"ps-5","mb-1"],[1,"product-item","d-flex","align-items-center","gap-3"],["width","70",3,"src","alt"],[1,"product-info"],[1,"h6","small","text-main"],[1,"text-muted","d-block"],[1,"border-warning","mx-5"],[1,"text-center","my-3","display-3"]],template:function(n,d){if(1&n&&(t.YNc(0,p,4,1,"section",0),t.YNc(1,_,2,0,"ng-template",null,1,t.W1O)),2&n){const C=t.MAs(2);t.Q6J("ngIf",d.ordersData.length)("ngIfElse",C)}},dependencies:[c.ez,c.sg,c.O5,s.r],styles:[".allorders[_ngcontent-%COMP%]{max-height:80vh;overflow-y:auto}"]}),o})()}}]);