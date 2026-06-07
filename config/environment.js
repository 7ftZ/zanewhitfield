"use strict";

module.exports = function (environment) {
  const SERVICE_ID = process.env.SERVICE_ID;
  const COLLABORATOR_EMAIL_TEMPLATE_ID =
    process.env.COLLABORATOR_EMAIL_TEMPLATE_ID;
  const MY_COLLABORATOR_DATA_EMAIL_TEMPLATE_ID =
    process.env.MY_COLLABORATOR_DATA_EMAIL_TEMPLATE_ID;
  const USER_ID = process.env.USER_ID;

  let ENV = {
    modulePrefix: "zanewhitfield",
    environment,
    rootURL: "/",
    locationType: "auto",

    //my env variables for emailJS
    serviceID: process.env.SERVICE_ID,
    collaboratorEmailTemplateID: process.env.COLLABORATOR_EMAIL_TEMPLATE_ID,
    myCollaboratorDataEmailTemplateID:
      process.env.MY_COLLABORATOR_DATA_EMAIL_TEMPLATE_ID,
    userID: process.env.USER_ID,

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    pageTitle: {
      replace: true,
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
