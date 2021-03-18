const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/about.js"))),
  "component---src-pages-activities-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/activities.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/index.js"))),
  "component---src-pages-member-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/member.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/Users/kagawayuukana/42tokyo/extreme_42/hp/src/pages/news.js")))
}

