import Controller from "@ember/controller";
import emailjs from "emailjs-com";
import { computed } from "@ember/object";
import config from "zanewhitfield/config/environment";

export default Controller.extend({
  formHasBeenSubmitted: false,
  remainingTime: 5,
  plural: "s",
  pluralForErrors: "s",
  firstName: "",
  lastName: "",
  collaboratorEmail: "",
  collaboratorMessage: "",
  collaboratorName: computed("firstName", "lastName", function () {
    return `${this.firstName} ${this.lastName}`;
  }),
  isFormIncomplete: false,
  reasonIsFirstName: false,
  reasonIsLastName: false,
  reasonIsEmail: false,
  reasonIsMessage: false,
  errorReason: "",

  actions: {
    submissionSetup() {
      const errorIsPlural = () => {
        const errorsList = [
          "reasonIsFirstName",
          "reasonIsLastName",
          "reasonIsEmail",
          "reasonIsMessage",
        ];

        let errorCount = 0;

        errorsList.forEach((element) => {
          if (this.get(element)) {
            errorCount++;
          }
        });

        if (errorCount > 1) {
          this.set("pluralForErrors", "s");
        } else {
          this.set("pluralForErrors", "");
        }
      };

      const errorMessageConstruction = () => {
        errorIsPlural();
        this.set(
          "errorReason",
          `Please fill in the missing field${this.get("pluralForErrors")}`
        );
      };

      const formValidation = () => {
        if (this.firstName === "") {
          this.set("reasonIsFirstName", true);
        } else {
          this.set("reasonIsFirstName", false);
        }

        if (this.lastName === "") {
          this.set("reasonIsLastName", true);
        } else {
          this.set("reasonIsLastName", false);
        }

        if (
          this.collaboratorEmail === "" ||
          !this.collaboratorEmail.includes("@")
        ) {
          this.set("reasonIsEmail", true);
        } else {
          this.set("reasonIsEmail", false);
        }

        if (this.collaboratorMessage === "") {
          this.set("reasonIsMessage", true);
        } else {
          this.set("reasonIsMessage", false);
        }

        if (
          this.firstName === "" ||
          this.lastName === "" ||
          this.collaboratorEmail === "" ||
          !this.collaboratorEmail.includes("@") ||
          this.collaboratorMessage === ""
        ) {
          return false;
        } else {
          return true;
        }
      };

      const isValidFormSubmission = formValidation();

      if (isValidFormSubmission) {
        this.set("formHasBeenSubmitted", true);

        const currentTime = () => {
          return this.get("remainingTime");
        };

        const decrementProperty = () => {
          this.decrementProperty("remainingTime");
        };

        const plural = () => {
          this.set("plural", "");
        };

        const transitionToHome = () => {
          this.transitionToRoute("about-me");
        };

        const toggleFormHasBeenSubmitted = () => {
          this.set("formHasBeenSubmitted", false);
        };

        const resetRemainingTime = () => {
          this.set("remainingTime", 5);
        };

        const resetPlural = () => {
          this.set("plural", "s");
        };

        const timeCountDown = setInterval(function () {
          decrementProperty();
          if (currentTime() === 1) {
            plural();
          }
          if (currentTime() <= 0) {
            transitionToHome();
            clearInterval(timeCountDown);
            resetRemainingTime();
            resetPlural();
            toggleFormHasBeenSubmitted();
            emailToMe();
            emailToCollaborator();
            resetFormFields();
          }
        }, 1000);

        const emailToCollaborator = () => {
          const templateParams = {
            firstName: this.firstName,
            subject: "Let's Talk!",
            to_email: this.collaboratorEmail,
            from_name: "Zane Whitfield",
          };

          emailjs
            .send(
              config.serviceID,
              config.collaboratorEmailTemplateID,
              templateParams,
              config.userID
            )
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        };

        const emailToMe = () => {
          const templateParams = {
            collaboratorName: this.collaboratorName,
            subject: `New Collaboration | ${this.collaboratorName} `,
            to_email: "whitfield.zane@gmail.com",
            from_name: "zanewhitfield.com | New Collaboration",
            message: this.collaboratorMessage,
            collaboratorEmail: this.collaboratorEmail,
          };

          emailjs
            .send(
              config.serviceID,
              config.myCollaboratorDataEmailTemplateID,
              templateParams,
              config.userID
            )
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        };

        const resetFormFields = () => {
          this.set("firstName", "");
          this.set("lastName", "");
          this.set("collaboratorEmail", "");
          this.set("collaboratorMessage", "");
          this.set("isFormIncomplete", false);
        };
      } else {
        this.set("isFormIncomplete", true);
        errorMessageConstruction();
      }
    },
  },
});
