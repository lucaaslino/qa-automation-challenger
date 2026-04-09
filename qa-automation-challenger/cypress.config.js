module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com/',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      return config;
    }
  }
};
