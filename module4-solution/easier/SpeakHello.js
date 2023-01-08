(function (window) {
    helloSpeaker = [];
    var speakWord = "Hello ";
    helloSpeaker.speak = function (names) {
        console.log(speakWord + names);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
