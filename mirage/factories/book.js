import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  author: association(),

  title() { return faker.hacker.verb() },
  isbn() { return '12345' },
  publishedDate() { return faker.date.past() },
});
