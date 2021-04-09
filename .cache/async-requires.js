// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-activities-js": () => import("./../../../src/pages/activities.js" /* webpackChunkName: "component---src-pages-activities-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-member-js": () => import("./../../../src/pages/member.js" /* webpackChunkName: "component---src-pages-member-js" */),
  "component---src-pages-news-js": () => import("./../../../src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */)
}

