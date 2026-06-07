import Route from "@ember/routing/route";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Route.extend({
  screen: service(),

  isUsingMobile: computed("screen.width", function () {
    if (this.get("screen.width") <= 375 || this.get("screen.width") <= 414) {
      return true;
    }
  }),
});
