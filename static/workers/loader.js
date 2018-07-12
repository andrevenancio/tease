/* eslint-disable */
var COMMANDS = {
    LOAD: 'LOAD',
    LOAD_COMPLETE: 'LOAD_COMPLETE',
};

var preloadFiles = function(data, callback) {
    var current = 0;

    function onResponse() {
        current++;
        if (current !== data.length) {
            loadNextFile();
        } else {
            callback();
        }
    }

    function loadNextFile() {
        var request = new XMLHttpRequest();
        request.open('GET', data[current].file);
        request.responseType = 'blob';
        request.onload = onResponse;
        request.onerror = onResponse;
        request.send();
    }

    loadNextFile();
};


onmessage = function(e) {
    if (e.data.cmd === COMMANDS.LOAD) {
        preloadFiles(e.data.files, function() {
            postMessage({ cmd: COMMANDS.LOAD_COMPLETE });
        });
    }
};
