// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-list-js": () => import("./../src/templates/blog-list.js" /* webpackChunkName: "component---src-templates-blog-list-js" */),
  "component---src-templates-portfolio-list-js": () => import("./../src/templates/portfolio-list.js" /* webpackChunkName: "component---src-templates-portfolio-list-js" */),
  "component---src-templates-blog-js": () => import("./../src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-portfolio-js": () => import("./../src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-templates-basepage-js": () => import("./../src/templates/basepage.js" /* webpackChunkName: "component---src-templates-basepage-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-music-js": () => import("./../src/pages/music.js" /* webpackChunkName: "component---src-pages-music-js" */),
  "component---src-pages-news-js": () => import("./../src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */)
}

