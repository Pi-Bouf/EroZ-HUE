/*
window.onload = function() {
    var buddy = document.getElementById('buddy');

    buddy.onclick = function() {


        var req = new XMLHttpRequest();
        req.open('GET', 'http://localhost/Projet%20-%20Giambiasi/getPublicData.php?lat=44.559638&lon=6.07975799999997&rayon=300', true);
        req.onreadystatechange = function(aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var plop = JSON.parse(req.responseText);
                    console.log(plop.temperature);
                } else
                    console.log("Erreur pendant le chargement de la page.\n");
            }
        };
        req.send(null);
    }

}

var hue = jsHue();
var user = null;
var bridge = hue.bridge('139.124.142.59');
bridge.createUser('MIWApp', function(data) {
    user = bridge.user("386ca59e5b0e3673fa2b3b21c0b118b")
    user.setLightState(1, { on: true }, function(data) { console.log("Eteint !") });
});

*/