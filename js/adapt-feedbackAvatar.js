define([
    'core/js/adapt',
    'core/js/views/componentView'
], function(Adapt, ComponentView) {

    var FeedbackAvatar = ComponentView.extend({

        preRender: function() {
            this.listenTo(Adapt, 'questionView:showFeedback', this.updateAvatar);

            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.$avatars = this.$('.avatar');

            this.$('.component-widget').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        },

        // Used to check if the graphic should reset on revisit
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        updateAvatar: function(questionView) {
            var questionModel = questionView.model;
            var questionId = this.model.get('_questionId');

            if (questionModel.get('_id') !== questionId) {
                return;
            }

            var isCorrect = questionModel.get('_isCorrect');
            var atleastOne = questionModel.get('_isAtLeastOneCorrectSelection');

            if (isCorrect === true) {
                this.hideAvatars();
                this.$('.avatar-correct').removeClass('hidden');
            } else if (atleastOne === true) {
                this.hideAvatars();
                this.$('.avatar-partly-correct').removeClass('hidden');
            } else {
                this.hideAvatars();
                this.$('.avatar-incorrect').removeClass('hidden');
            }

            this.setCompletionStatus();
        },

        hideAvatars: function() {
            for (var i = 0; i < this.$avatars.length; i++) {
                this.$avatars.eq(i).addClass('hidden');
            }
        }

    });

    Adapt.register('feedbackAvatar', FeedbackAvatar);

    return FeedbackAvatar;

});
