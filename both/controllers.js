AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

MainController = AppController.extend({
  // EXAMPLE:
  // waitOn: function () {
  //   return Meteor.subscribe('products');
  // },
  // data: function () {
  //   return {
  //     products: Products.find({}, {sort: {numberOfVotes: -1, name: -1}})
  //   };
  // }
});