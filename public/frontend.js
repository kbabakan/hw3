// Use this file to add all of the functionality to the website including the XMLHttpRequests. 
// You may use the class examples for references as the XMLHttpRequests always follow the same pattern for the kind of
// work we will be using them for. Remeber google is your friend!

var httpGet = function(theUrl)
{
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        console.log(xmlHttp.responseText);
        var test = document.getElementById('ResDIV').innerHTML=xmlHttp.responseText;
    };

    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send();
}

var getUser = function(){
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var theURL = '/users/'+username+'/'+password;
    httpGet(theURL);
};
