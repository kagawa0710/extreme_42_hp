var plugins = [{
      plugin: require('/Users/kagawayuukana/42tokyo/extreme_42/hp/node_modules/gatsby-plugin-jss/gatsby-ssr'),
      options: {"plugins":[],"theme":{"typography":{"primary":"Orbitron, sans-serif","secondary":"Electrolize, sans-serif"},"color":{"accent":0.2,"alpha":0.5,"primary":{"dark":"#bbbbbb","main":"#eeeeee","light":"#ffffff"},"secondary":{"dark":"#19a0b3","main":"#27e1fa","light":"#7eecfb"},"tertiary":{"dark":"#b5a005","main":"#fae127","light":"#feec67"},"heading":{"main":"#eeeeee"},"text":{"main":"#cccccc"},"link":{"dark":"#55cbd0","main":"#87f7fc","light":"#aff3f6"},"background":{"dark":"#000000","main":"#02161a","light":"#043b3b"}},"animation":{"time":250,"stagger":50}}},
    },{
      plugin: require('/Users/kagawayuukana/42tokyo/extreme_42/hp/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
  },
  // {
  //     plugin: require('/Users/kagawayuukana/42tokyo/extreme_42/hp/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
  //     options: {"plugins":[],"name":"Soul Extract","short_name":"Soul Extract","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"standalone","orientation":"portrait","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"95ea5cff012f971ed864a05d4505500e"},
  // },
  {
      plugin: require('/Users/kagawayuukana/42tokyo/extreme_42/hp/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/kagawayuukana/42tokyo/extreme_42/hp/src/layouts/Template/index.js"},
    },{
      plugin: require('/Users/kagawayuukana/42tokyo/extreme_42/hp/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-64916263-1"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
