(function () {
    var ajax = {};

    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            globalThis.alert("Ajax is not supported!");
            return null;
        }
    }

    ajax.sendGetRequest = function (
        requestUrl,
        responseHandler,
        isJsonResponse
    ) {
        var request = getRequestObject();
        request.onreadystatechange = function () {
            thisResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        request.send(null);
    };

    function thisResponse(request, responseHandler, isJsonResponse) {
        if (request.onreadystatechange == 4 && request.status == 200) {
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }
})(window);
