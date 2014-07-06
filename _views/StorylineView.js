/**
 StoryLineView module manages the Timeline > channels UI while displaying the visual length in time for each block on the selected channel
 @class StorylineView
 @constructor
 @param {String}
 @return {Object} instantiated StorylineView
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    BB.SERVICES.STORYLINE = 'StoryLine';

    var StorylineView = BB.View.extend({

        /**
         Constructor
         @method initialize
         **/
        initialize: function () {
            var self = this;
            BB.comBroker.listen(BB.EVENTS.SIDE_PANEL_SIZED, $.proxy(self._render, self));
            BB.comBroker.listen(BB.EVENTS.APP_SIZED, $.proxy(self._render, self));
            self._render();
        },

        /**
         Draw a fresh storyline for current timelime
         @method _render
         **/
        _render: function () {
            var w = $(Elements.STORYLINE_CONTAINER).width();
            $(Elements.CLASS_CHANNEL_BODY_CONTAINER).width(w - 25);
        }
    });

    return StorylineView;

});