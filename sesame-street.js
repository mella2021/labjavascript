document.addEventListener('DOMContentLoaded',function(){
    //Big bird yellow
    var cookieHeader=document.querySelector("#cookie-header");
    cookieHeader.getElementsByClassName.color="#f7ff16d";

    // count chocula
    var cookieJar=document.querySelector("#cookie-jar");
    var cookie=document.getElementById("cookie");
    var cookieCount =cookie.length;
    var cookieCountText="There are " +cookieCount +" cookie(s) in the cookie jar!";
    var cookieCountElement= document.querySelector("#cookie-count");
    cookieCountElement.textContent= cookieCountText;

    // cookie monster hungry
    setInterval (()=> {
        if (cookieCount > 0){
            cookieJar.removeChild(cookie[cookieCount-1]);
            cookieCount--;
            cookieCountText="There are " + cookieCount +"cookie(s) in the cookie jar!";
            cookieCountElement.textContent= cookieCountText;
        }

    },30000);


});