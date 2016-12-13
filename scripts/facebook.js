(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    var status = document.getElementById("loginStatus");
    if (response.status === 'connected') {
        status.innerHTML = "Connecté !";
        var fbButton = document.getElementById("faceLogin");
        fbButton.parentNode.removeChild(fbButton);
    } else if (response.status === 'not_authorized') {
        FB.login(function(response) {
            if (response.session) {
                // user successfully logged in
            } else {
                // user cancelled login
            }
        }, { perms: 'email' });
    } else {
        FB.login();
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '1180797972007685',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
};