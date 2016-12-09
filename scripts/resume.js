function getResume(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', '/resume.json', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      callback(data)
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function () {
    // There was a connection error of some sort
  };

  request.send();
}

var resume = getResume(function(data) {
  populateResume(data);
})


function populateResume(data) {
  console.log(data);
}
