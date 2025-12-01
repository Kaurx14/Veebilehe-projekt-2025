// Funktsioon uudiseriba renderdamiseks avalehel
// Loob uudised dünaamiliselt uudised massiivist
function laeUudiseriba() {
    // Leiame uudiseriba konteineri
    var container = document.getElementById('uudiserada');
    
    // Kui konteinerit ei leitud, lõpetame funktsiooni
    if (!container) return;

    // Loome uudised kaks korda, et saavutada sujuv lõputu kerimise efekt
    for (var loop = 0; loop < 2; loop++) {
        // Käime läbi kõik uudised
        for (var i = 0; i < uudised.length; i++) {
            var uudis = uudised[i];
            
            // Loome uue lingi elemendi
            var link = document.createElement('a');
            link.href = 'uudised.html';
            link.className = 'uudis';
            
            // Lisame lingi sisse pildi ja pealkirja
            link.innerHTML = 
                '<img src="' + uudis.pilt + '" alt="' + uudis.pealkiri + '">' +
                '<p>' + uudis.pealkiri + '</p>';

            // Lisame lingi konteinerisse
            container.appendChild(link);
        }
    }
}

// Funktsioon uudiseriba animatsiooni peatamiseks hoveri ajal
function laeUudiseribaAnimatsioon() {
    var newsTrack = document.querySelector('.uudiserada');
    
    if (newsTrack) {
        // Kui hiir liigub uudisribale, peatame animatsiooni
        newsTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        // Kui hiir lahkub uudiseribalt, käivitame animatsiooni uuesti
        newsTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
}

// Käivitame funktsioonid, kui leht on laetud
document.addEventListener('DOMContentLoaded', function() {
    laeUudiseriba();
    laeUudiseribaAnimatsioon();
});