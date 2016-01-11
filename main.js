function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// get year from query string
var year = parseInt(getParameterByName('year'));

// print year to license
if (!isNaN(year)) {
    document.getElementById("year").innerHTML = year;
}
