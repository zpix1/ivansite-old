$(function() {
    $("#sidenav").load("https:/zpix1.github.io/old/sidenav.lo.html", function() {
        $(".button-collapse").sideNav()
    });
    if(navigator.userAgent == 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36'){
        alert('С домашними животными вход запрещен!');
    }
});