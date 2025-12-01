// Funktsioon mängude kalendri renderdamiseks
function laeKalender() {
    // Leiame tabeli tbody elemendi
    var tbody = document.getElementById('kalender-body');
    
    // Kui elementi ei leitud, lõpetame funktsiooni
    if (!tbody) return;

    // Sorteerime mängud kuupäeva järgi (uuemad enne)
    mangud.sort(function(a, b) {
        // Teisendame kuupäeva formaadist pp.kk.aaaa formaati aaaakkpp võrdluseks
        var dateA = a.kuupaev.split('.').reverse().join('');
        var dateB = b.kuupaev.split('.').reverse().join('');
        return dateB.localeCompare(dateA);
    });

    // Käime läbi kõik mängud ja loome tabeli read
    for (var i = 0; i < mangud.length; i++) {
        var mang = mangud[i];
        
        // Loome uue tabeli rea
        var tr = document.createElement('tr');
        
        // Kui mäng on juba toimunud, lisame vastava klassi
        if (mang.tulemus) {
            tr.className = 'moodunud-mang';
        }

        // Määrame asukoha klassi ja teksti
        var asukohtClass = mang.asukoht === 'kodus' ? 'kodus' : 'voorsil';
        var asukohtText = mang.asukoht === 'kodus' ? 'Kodus' : 'Võõrsil';

        // Loome tulemuse teksti
        var tulemustekst = '';
        if (mang.tulemus === null) {
            // Mäng pole veel toimunud
            tulemustekst = '<span class="tulemas">Tulemas</span>';
        } else if (mang.tulemus.meie > mang.tulemus.vastane) {
            // Võitsime mängu
            tulemustekst = '<span class="voit">Võit ' + mang.tulemus.meie + '-' + mang.tulemus.vastane + '</span>';
        } else {
            // Kaotasime mängu
            tulemustekst = '<span class="kaotus">Kaotus ' + mang.tulemus.meie + '-' + mang.tulemus.vastane + '</span>';
        }

        // Lisame rea sisu
        tr.innerHTML = 
            '<td>' + mang.kuupaev + '</td>' +
            '<td>' + mang.kellaaeg + '</td>' +
            '<td>' + mang.vastane + '</td>' +
            '<td><span class="' + asukohtClass + '">' + asukohtText + '</span></td>' +
            '<td>' + tulemustekst + '</td>';

        // Lisame rea tabelisse
        tbody.appendChild(tr);
    }
}

// Käivitame funktsiooni, kui leht on laetud
document.addEventListener('DOMContentLoaded', function() {
    laeKalender();
});
