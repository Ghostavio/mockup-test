import DS from 'ember-data';

var Images = DS.Model.extend({
  name      : DS.attr('string'),
  path      : DS.attr('string'),
  property  : DS.hasMany('property')
});

// since we're just testing a mockup without a real API, we're hardcoding the data here
Images.reopenClass({
  FIXTURES: [
    {
      id       : 1,
      name     : "Image 1",
      path     : "/assets/images/a.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 2,
      name     : "Image 2",
      path     : "/assets/images/b.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 3,
      name     : "Image 3",
      path     : "/assets/images/c.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 4,
      name     : "Image 4",
      path     : "/assets/images/d.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 5,
      name     : "Image 5",
      path     : "/assets/images/e.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 6,
      name     : "Image 6",
      path     : "/assets/images/f.jpg",
      property : [ 1, 2, 3 ]
    },
    {
      id       : 7,
      name     : "Image 7",
      path     : "/assets/images/g.jpg",
      property : [ 1, 2, 3 ]
    }
  ]
});

export default Images;
