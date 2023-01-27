var previousCookies = document.cookie;
var changeCookie = previousCookies;
var myInterval = setInterval(() =>{
    changeCookie = document.cookie
    if(changeCookie !== previousCookies){
        document.cookie = 'cookie5_afterCookieCreation='
        clearInterval(myInterval)
    }
}, 1000)

(function(){
    document.cookie = 'cookie1=';
    document.cookie = 'cookie2=';
    document.cookie = 'cookie3=';
    document.cookie = 'cookie4=';
    myInterval()
})()
