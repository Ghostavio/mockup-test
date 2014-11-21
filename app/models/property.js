import DS from 'ember-data';

var Property = DS.Model.extend({
  title        : DS.attr('string'),
  reference    : DS.attr('string'),
  description  : DS.attr('string'),
  price        : DS.attr('number'),
  sqft         : DS.attr('number'),
  type         : DS.attr('string'),
  location     : DS.attr('string'),
  city         : DS.attr('string'),
  community    : DS.attr('string'),
  subcommunity : DS.attr('string'),
  property     : DS.attr('string'),
  bedrooms     : DS.attr('string'),
  bathrooms    : DS.attr('string'),
  buy          : DS.attr('boolean'),
  rent         : DS.attr('boolean'),
  commercial   : DS.attr('boolean'),
  favorite     : DS.attr('boolean'), // this doesn't make sense in a proper structure because it should be user based, but since it's just a mockup let's cheat a little :)
  publishDate  : DS.attr('date'),
  updatedDate  : DS.attr('string')
});

Property.reopenClass({
  FIXTURES: [
    {
      id           : 1,
      title        : "Elite & Luxurious, 'The Reserve' Villa at 'Al Barani'",
      reference    : "F4-R-163",
      description  : "<p>Call Samone now on 055 569 0466 to find out more about this exquisite Type 8 villa in Saheel. Serious investors welcome.</p><p>This beautifully maintained Type 8 villa nestled in one of the quietest, peaceful streets of Saheel is undoubtedly one of the most sought after residences in Arabian Ranches. This villa is currently tenanted by a family who take care of the villa as if it is their own and will be continuing to do so for the next three years making this an ideal investment with a guaranteed return. With a picture perfect garden, sparkling swimming pool and luxurious outside entertaining area this family home will continue to gain capital growth well into the future.</p><p>As you enter the front wooden door you are immediately presented with a bright and bold dining room with an abundance of natural light streaming in from all angles. It creates a sense of warmth for family meals shared togethers and having gatherings with friends.</p><p>As you step down into the living room you have a tremendous view of the enchanting garden and swimming pool. Both areas are spacious and have terraces leading off the doors to the side of the dining room and the front of the living room.</p><p>The kitchen is a marvellous design, completely open and inviting with granite bench tops, extensive storage and cupboard space. The kitchen which is the heart of the home overlooks the family room and has views of the vibrant garden ensuring meal preparation times are enjoyable, easy and can involve all members of the family.</p>",
      price        : 70000000,
      sqft         : 50000,
      type         : "Villa",
      location     : "DUBAI - AL BARARI - AL BARARI VILLAS",
      city         : "Dubai",
      community    : "Al Barari",
      subcommunity : "Al Barari Villas",
      property     : "N/A",
      bedrooms     : "7+",
      bathrooms    : "7+",
      buy          : true,
      rent         : false,
      commercial   : false,
      favorite     : false,
      publishDate  : "20/07/2013",
      updatedDate  : "05/08/2013"
    },
    {
      id           : 2,
      title        : "2 Bedroom Furnished Apartment for rent in JBR",
      reference    : "F4-R-164",
      description  : "<p>This unique community now offers a great choice of apartments with fabulous view. All enjoy a breathtaking beachfront setting, surrounded by landscaped plazas, fountains and swimming pools. Jumeirah Beach is also home to The Walk, Dubai’s most happening outdoor destination, offering exclusive shopping, hotels, restaurants and coffee shops.</p><p>Jumeirah Beach Residence takes pride in its restaurants, cafes, hotels, medical services, retail shops and much more. Life would be cozy and comfortable within the eco-friendly ambiance featuring beautifully maintained gardens and well-manicured lawns. The rooms of the apartments are aristocratic with high quality interiors.</p><p>The apartment is furnished to a high end with a fully fitted kitchen. The furniture is in excellent condition and its currently vacant. The apartment is looking directly on the marina with easy access to the marina as well JBR.</p><p>Free parking for visitors just minutes away walking distance.</p>",
      price        : 250000,
      sqft         : 2000,
      type         : "Apartment",
      location     : "DUBAI - JUMEIRAH BEACH RESIDENCE - SADAF",
      city         : "Dubai",
      community    : "JBR",
      subcommunity : "Sadaf",
      property     : "N/A",
      bedrooms     : "3",
      bathrooms    : "2",
      buy          : false,
      rent         : true,
      commercial   : false,
      favorite     : false,
      publishDate  : "10/07/2014",
      updatedDate  : "25/08/2014"
    },
    {
      id           : 3,
      title        : "Big Office in Shatha Tower",
      reference    : "F4-R-165",
      description  : "<p>Very beautiful office for rent.<p><p>Parking: 12 parking spaces</p><p>About:</p><p>Shatha Tower is located in the heart of Media City, close to the Media One Hotel, and with very easy access to Sheikh Zayed Road.</p>",
      price        : 100000,
      sqft         : 2000,
      type         : "Office",
      location     : "DUBAI - MEDIA CITY - SHATHA TOWER",
      city         : "Dubai",
      community    : "Media City",
      subcommunity : "N/A",
      property     : "N/A",
      bedrooms     : "4",
      bathrooms    : "2",
      buy          : false,
      rent         : false,
      commercial   : true,
      favorite     : false,
      publishDate  : "10/07/2014",
      updatedDate  : "25/08/2014"
    }
  ]
});

export default Property;
