

(function(){
    
    document.cookie = 'cookie1=';
    document.cookie = 'cookie2=';
    document.cookie = 'cookie3=';
    document.cookie = 'cookie4=';
    
    var previousCookies = document.cookie;
    var changeCookie = previousCookies;
    var myInterval = function(){
        return setInterval(() =>{
            changeCookie = document.cookie
            if(changeCookie !== previousCookies){
                document.cookie = 'cookie5_afterCookieCreation='
                clearInterval(myInterval)
            }
        }, 1000)
    }
    
    myInterval()
    
})()
