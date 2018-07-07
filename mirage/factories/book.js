import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  author: association(),

  title() { return faker.fake('{{hacker.ingverb}} any {{hacker.adjective}} {{hacker.noun}}') },
  isbn() { return faker.fake('{{random.number}}-{{random.number}}-{{random.number}}') },
  publishedDate() { return faker.date.past() },
});
