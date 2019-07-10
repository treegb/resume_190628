import vueRouter from 'vue-router';
//import appComp from './App.vue';
import resume from './components/resume.vue';
import portfolio from './components/portfolio.vue';
import aboutMe from './components/aboutMe.vue';
import a404 from './components/a404.vue';

let routes = [
  {
    path: "",
    component: resume
    ,
  },
  {
    path: "/resume",
    component: resume,
    name: "resume",
  },
  {
    path: "/portfolio",
    component: portfolio,
    name: "portfolio",
  },
  {
    path: "/aboutMe",
    component: aboutMe,
    name: "aboutMe",
  },
  {
    path: "/*",
    // .Match any other url.
    component: a404,
    name: "a404",
  },
];
let router = new vueRouter({
  routes: routes,
	mode: 'history',
  base: "/",
});
//router.afterEach((to, from) => {
//  //.{ Guards }.
//  console.log(".This line will print evertime route changed.");
//});
export default router;
