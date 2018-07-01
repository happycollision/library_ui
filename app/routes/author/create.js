import Route from '@ember/routing/route';



export default Route.extend({

  // resets form when user leaves and returns
  model() {
    return {
      first: '',
      last: ''
    }
  }

});
