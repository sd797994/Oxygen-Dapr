"use strict";

exports.__esModule = true;
exports.route = route;
exports.functionalRoute = functionalRoute;
exports.routeProps = void 0;

/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err && err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
exports.routeProps = routeProps;