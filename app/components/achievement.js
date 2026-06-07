import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  screen: service(),

  isUsingMobile: computed("screen.width", function () {
    if (this.get("screen.width") <= 375 || this.get("screen.width") <= 414) {
      return true;
    }
  }),
});
