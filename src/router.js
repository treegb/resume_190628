import vueRouter from 'vue-router';
//import appComp from './App.vue';
import resume from './components/resume.vue';
import portfolio from './components/portfolio.vue';
import aboutMe from './components/aboutMe.vue';
import a404 from './components/a404.vue';
let githubRepoName = "resume_190628";
// .If deployed repository name changed, this have to change too.

// .Notice: Those Routes final path name, should sync with file name under { vue-router-workaround } directory!
// .This is ugly workaround, but since GitHub Pages does not support
// customer server configuration files such as .htaccess or .conf,
// we have no choices.
let routes = [
  {
    path: `/(${githubRepoName}/index.html)`,
    component: resume,
    // .Related to { vue-router-workaround }.
  },
  {
    path: `/(${githubRepoName}|)`,
    component: resume,
    name: "siteRoot",
  },
  {
    path: `/${githubRepoName}/resume`,
    component: resume,
    name: "resume",
  },
  {
    path: `/${githubRepoName}/portfolio`,
    component: portfolio,
    name: "portfolio",
  },
  {
    path: `/${githubRepoName}/aboutMe`,
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
