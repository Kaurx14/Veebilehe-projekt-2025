// Funktsioon uudiste nimekirja renderdamiseks
function laeUudised() {
    // Leiame uudiste nimekirja konteineri
    var container = document.getElementById('uudiste-list');
    
    // Kui konteinerit ei leitud, lõpetame funktsiooni
    if (!container) return;

    // Käime läbi kõik uudised ja loome artiklid
    for (var i = 0; i < uudised.length; i++) {
        var uudis = uudised[i];
        
        // Loome uue artikli elemendi
        var article = document.createElement('article');
        article.className = 'uudise-artikkel';
        
        // Lisame artikli sisu: pilt, kuupäev, pealkiri ja tekst
        article.innerHTML = 
            '<img src="' + uudis.pilt + '" alt="' + uudis.pealkiri + '">' +
            '<div class="uudise-sisu">' +
                '<span class="kuupaev">' + uudis.kuupaev + '</span>' +
                '<h2>' + uudis.pealkiri + '</h2>' +
                '<p>' + uudis.sisu + '</p>' +
            '</div>';

        // Lisame artikli konteinerisse
        container.appendChild(article);
    }
}

// Käivitame funktsiooni, kui leht on laetud
document.addEventListener('DOMContentLoaded', function() {
    laeUudised();
});