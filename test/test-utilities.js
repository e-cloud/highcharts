/* global Highcharts, lolex */

(function (window) {

    var timeString = new Date().toTimeString();

    window.TestUtilities = (window.TestUtilities || {});

    /**
     * Calls a function only, if the system is set to specific timezones.
     *
     * @param {string[]} timezones
     * Possible values are CET, CEST, etc.
     *
     * @param {function} fn
     * The function to call. First argument is the found timezone string.
     *
     * @return {any}
     * The callback result
     */
    window.TestUtilities.ifTimezone = function (timezones, fn) {

        if (typeof timezones !== 'object' &&
            typeof timezones.length !== 'function'
        ) {
            timezones = [timezones.toString()];
        }

        var timezoneString;

        for (var i = 0, ie = timezones.length; i < ie; ++i) {
            if (timeString.indexOf(timezones[i]) >= 0) {
                timezoneString = timezones[i];
                break;
            }
        }

        if (timezoneString) {
            fn(timezoneString);
        }
    };

    /**
     * Indiciates, if system time runs in CET timezone.
     */
    window.TestUtilities.isCET = (
        timeString.indexOf('CET') !== -1 ||
        timeString.indexOf('CEST') !== -1 ||
        timeString.indexOf('W. Europe Standard Time') !== -1 // Edge
    );

    /**
     * Convience wrapper for installing lolex and bypassing requestAnimationFrame.
     *
     * @return {Object}
     * The clock object
     */
    window.TestUtilities.lolexInstall = function () { // eslint-disable-line no-unused-vars

        var ret;

        if (typeof lolex !== 'undefined') {
            window.backupRequestAnimationFrame = window.requestAnimationFrame;
            window.requestAnimationFrame = null;
            // Abort running animations, otherwise they will take over
            Highcharts.timers.length = 0;
            ret = lolex.install();
        }

        return ret;
    };

    /**
     * Convenience wrapper for uninstalling lolex.
     *
     * @param  {Object} clock
     * The clock object
     *
     * @return {void}
     */
    window.TestUtilities.lolexUninstall = function (clock) { // eslint-disable-line no-unused-vars

        if (typeof lolex !== 'undefined') {

            clock.uninstall();

            // Reset native requestAnimationFrame
            window.requestAnimationFrame = window.backupRequestAnimationFrame;
            delete window.backupRequestAnimationFrame;
        }
    };

    /**
     * Convenience wrapper for running timeouts and uninstalling lolex.
     *
     * @param  {Object} clock
     * The clock object
     *
     * @return {void}
     */
    window.TestUtilities.lolexRunAndUninstall = function (clock) { // eslint-disable-line no-unused-vars

        if (typeof lolex !== 'undefined') {
            clock.runAll();
            window.TestUtilities.lolexUninstall(clock);
        }
    };


}(this));
