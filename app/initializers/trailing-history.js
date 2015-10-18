// Credit goes to Ghost (http://github.com/TryGhost/Ghost for this)
import Ember from 'ember';

let trailingHistory = Ember.HistoryLocation.extend({
    formatURL: function () {
        return this._super.apply(this, arguments).replace(/\/?$/, '/');
    }
});

export default {
    name: 'registerTrailingLocationHistory',

    initialize: function (application) {
        application.register('location:trailing-history', trailingHistory);
    }
};
