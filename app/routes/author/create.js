import Route from '@ember/routing/route';



export default Route.extend({

  // resets form when user leaves and returns
  model() {
    return {
      first: '',
      last: ''
    }
  }

  // resetController(controller){
  //   this._super(...arguments);

  //   // controller.set('first', '');
  //   // controller.set('last','');

  //   // controller.reset();
  //   // controller.setProperties({
  //   //   first: '',
  //   //   last: ''
  //   // });
  // }
});
