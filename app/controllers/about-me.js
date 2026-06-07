import Controller from "@ember/controller";
import { htmlSafe } from "@ember/string";

export default Controller.extend({
  salesforceDescription: htmlSafe(
    `Front-end software engineer tasked with building, maintaining Heroku's site and command line interface.`
  ),
  nbcUniversalDescription: htmlSafe(
    `<div class="-mt-3">
      <ul class="list-disc">
        <li>Lead proof of concept project dealing with T.V. advertisement audience retention through the integration of Snapchat's platform</li>
        <li>Designed, scripted & directed proof of concept project promotion video for company stakeholders</li>
      </ul>
    </div>`
  ),
  microsoftDescription: htmlSafe(
    `Edited Call of Duty: Ghosts Launch Trailer in South Africa.`
  ),
});
