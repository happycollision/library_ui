import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  isbn: DS.attr(),
  publishedDate: DS.attr(),

  author: DS.belongsTo('author')
});
