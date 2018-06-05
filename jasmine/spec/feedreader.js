/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('ensures it has a URL', function() {

      allFeeds.forEach(function(x) {
        expect(x.url).toBeDefined();
        expect(x.url.length).not.toBe(0);

      });


    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('ensure has name', function() {
      allFeeds.forEach(function(x) {
        expect(x.name).toBeDefined();
        expect(x.name.length).not.toBe(0);

      });
    });
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    it('ensures the menu element is hidden', function() {
      let myBody = document.body;
      expect($('body').hasClass('menu-hidden').toBe(true));
    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('ensures the menu changes visibility', function() {
      let myIcon = document.querySelector(".menu-icon-link")
      expect($('body').hasClass('menu-hidden').toBe(true));
      myIcon.click();
      expect($('body').hasClass('menu-hidden').toBe(false));
      myIcon.click();
    });
  }); //for describe('The menu', function()


  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });
    it('single entry at least', function(done) {
      let allFead = document.querySelector('.feed');
      let myFead = allFead.querySelector('.entry');
      expect(myFead).not.toBe(0);
      done();
    });
  }); //for   describe('Initial Entries', function() {

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    let allFead1, allFead2;
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        allFead1 = document.querySelector('.feed').innerHTML;
        loadFeed(1, function() {
          allFead2 = document.querySelector('.feed').innerHTML;
        })
        done();
      });
    });
    it('the content actually changes', function(done) {
      expect(allFead1).not.toBe(allFead2);
      done();
    }); //t('the content actually changes', function(done) {
  }); //for describe('New Feed Selection', function() {
}());
