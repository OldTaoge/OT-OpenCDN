function createXMLHttpRequest() {
    var request = false;
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
        if(request.overrideMimeType) {
            request.overrideMimeType('text/xml');
        }
    } else if(window.ActiveXObject) {
        var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP',
            'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0',
            'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
        for(var i=0; i<versions.length; i++) {
            try {
                request = new ActiveXObject(versions[i]);
                if(request) {
                    return request;
                }
            } catch(e) {}
        }
    }
    return request;
}
function ajax(xmlhttp,_method, _url, _param, _callback) {
    if (typeof xmlhttp == 'undefined') return;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            _callback(xmlhttp);
        }
    }
    xmlhttp.open(_method, _url, true);
    if (_method == "POST") {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(_param);
    }
    else {
        xmlhttp.send(null);
    }
}