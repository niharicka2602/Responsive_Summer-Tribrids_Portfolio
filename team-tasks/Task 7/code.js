function lw() {
    var i = document.getElementById("ip").value
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET" , "http://192.168.0.104/cgi-bin/task7.py?x=" + i , true);
    
    xhr.send();
    
    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("d1").innerHTML = output;
    }
    }
