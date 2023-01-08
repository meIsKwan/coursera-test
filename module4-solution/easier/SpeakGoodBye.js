(function (window) {
    byeSpeaker = [];
    var speakWord = "Good Bye ";
    byeSpeaker.speak = function (vava) {
        console.log(speakWord + vava);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
