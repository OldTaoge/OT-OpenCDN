    var xmlhttp = false;
    function createRequest(url, callback=alertContents) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
            if(xmlhttp.overrideMimeType){
                xmlhttp.overrideMimeType("text/xml");
            }
        } else if(window.ActiveXObject) {
            try{
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
                }catch (e) {}
            }
        }
        if(!xmlhttp){
            alert("不能创建xmlhttp实例，请不要使用兼容模式或更换浏览器！")
            return false;
        }
        xmlhttp.onreadystatechange = callback;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
    function createRequest_POST(url, send_form, callback=alertContents) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
            if(xmlhttp.overrideMimeType){
                xmlhttp.overrideMimeType("text/xml");
            }
        } else if(window.ActiveXObject) {
            try{
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
                }catch (e) {}
            }
        }
        if(!xmlhttp){
            alert("不能创建xmlhttp实例，请不要使用兼容模式或更换浏览器！")
            return false;
        }
        xmlhttp.onreadystatechange = callback;
        xmlhttp.open("POST", url, true);
        xmlhttp.send(send_form);
    }