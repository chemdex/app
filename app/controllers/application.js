import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        collapseSidebar: function () {
            Ember.$('body').toggleClass('sidebar-collapse');
        }
    }
});
