/**
 * Created by chanaka on 12/8/15.
 */
(function ($) {

    $.extend({
        playSound: function () {
            return $("<embed src='" + arguments[0] + ".mp3' hidden='true' autostart='true' loop='false' class='playSound'>" + "<audio autoplay='autoplay' style='display:none;' controls='controls'><source src='" + arguments[0] + ".mp3' /><source src='" + arguments[0] + ".ogg' /></audio>").appendTo('body');
        },

        stopSound: function () {
            return null;
        }
    });

})(jQuery);