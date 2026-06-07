import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import { inject as service } from "@ember/service";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  router: service(),

  init() {
    this._super(...arguments);

    this.on("routeDidChange", () => {
      window.scrollTo(0, 0);
    });
  },
});

Router.map(function () {
  this.route("about-me", function () {});
  this.route("projects");
  this.route("collaboration");
});

export default Router;
