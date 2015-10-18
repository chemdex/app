import Ember from 'ember';

export default Ember.Route.extend({
    activate: function () {
        Ember.$('body').addClass('skin-blue sidebar-mini');
        return this._super(...arguments);
    }
});
