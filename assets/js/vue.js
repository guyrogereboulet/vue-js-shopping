 
 const Home = {
     template : '<h1>Home</h1>',
     name: 'Home'
 }

 const UserSettings = {
     template : '<h1>User Settings</h1>',
     name: 'UserSettings'
 }


 const Whishlist = {
     template : '<h1>Whish list</h1>',
     name: 'Whishlist'
 }


 const ShoppingCart = {
     template : '<h1>Shopping Cart</h1>',
     name: 'ShoppingCart'
 }
     



// router
const router = new VueRouter({

    routes: [
    { path: '/', component: Home, name:'Home' },
    { path: '/user-settings', component: UserSettings, name: 'UserSettings'},
    { path: '/wish-list', component: Whishlist, name: 'Whishlist' },
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart'},
    ]
})



const vue = new Vue({
    router
}).$mount('#app');


