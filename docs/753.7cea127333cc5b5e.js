"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[753],{1731:(p,u,r)=>{r.d(u,{J:()=>c});var l=r(5619);const e_baseUrlData="https://ecommerce.routemisr.com/api/v1";var s=r(4769),d=r(9862),o=r(2425);let c=(()=>{var a;class i{constructor(t,n){this._HttpClient=t,this._ToastrService=n,this.cartNumber=new l.X(0),this.whishNumber=new l.X(0),this.whishList=new l.X([])}getUserOrders(t){return this._HttpClient.get(e_baseUrlData+"/orders/user/"+t)}addToCart(t){this.sendToCart(t).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message),this.cartNumber.next(n.numOfCartItems))}})}SetcheckOut(t,n){return this._HttpClient.post(e_baseUrlData+`/orders/checkout-session/${t}?url=https://ahmed-menisy.github.io/FreshCart`,n)}getProducts(t=1){return this._HttpClient.get(e_baseUrlData+`/products?page=${t}`)}getProductById(t){return this._HttpClient.get(e_baseUrlData+"/products/"+t)}getCategories(){return this._HttpClient.get(e_baseUrlData+"/categories")}getCategoriesById(t){return this._HttpClient.get(e_baseUrlData+"/categories/"+t)}getSubCategoriesToCat(t){return this._HttpClient.get(e_baseUrlData+`/categories/${t}/subcategories`)}sendToCart(t){return this._HttpClient.post(e_baseUrlData+"/cart",{productId:t})}getCartData(){return this._HttpClient.get(e_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(e_baseUrlData+"/cart")}updatePoductCount(t,n){return this._HttpClient.put(e_baseUrlData+"/cart/"+t,{count:n})}deletePoductCart(t){return this._HttpClient.delete(e_baseUrlData+"/cart/"+t)}getBrands(t=1){return this._HttpClient.get(e_baseUrlData+`/brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(e_baseUrlData+`/brands/${t}`)}setWishlist(t){return this._HttpClient.post(e_baseUrlData+"/wishlist",{productId:t})}removeWishlist(t){return this._HttpClient.delete(e_baseUrlData+`/wishlist/${t}`)}getWishlist(){return this._HttpClient.get(e_baseUrlData+"/wishlist")}setAddresses(t){return this._HttpClient.post(e_baseUrlData+"/addresses",t)}getAddresses(){return this._HttpClient.get(e_baseUrlData+"/addresses")}removeAddresses(t){return this._HttpClient.delete(e_baseUrlData+`/addresses/${t}`)}}return(a=i).\u0275fac=function(t){return new(t||a)(s.LFG(d.eN),s.LFG(o._W))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},1337:(p,u,r)=>{r.r(u),r.d(u,{NotfoundComponent:()=>d});var l=r(6814),e=r(953),s=r(4769);let d=(()=>{var o;class c{}return(o=c).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-notfound"]],standalone:!0,features:[s.jDz],decls:3,vars:0,consts:[[1,"pt-5"]],template:function(i,h){1&i&&(s._UZ(0,"app-navbar"),s.TgZ(1,"p",0),s._uU(2,"notfound works!"),s.qZA())},dependencies:[l.ez,e.S]}),c})()}}]);