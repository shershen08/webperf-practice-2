import {onCLS, onFID, onLCP} from 'https://unpkg.com/web-vitals@3?module';

function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    (navigator.sendBeacon && navigator.sendBeacon('https://httpbin.org/status/200', body)) ||
    fetch('https://httpbin.org/status/200', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);

(function ($) {

    "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

})(window.jQuery);
