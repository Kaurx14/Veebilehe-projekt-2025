var mangud = [
    {
        kuupaev: "07.12.2025",
        kellaaeg: "18:00",
        vastane: "Kadrina Karud",
        asukoht: "kodus",
        tulemus: null
    },
    {
        kuupaev: "14.12.2025",
        kellaaeg: "19:00",
        vastane: "KK Sõbra Keila",
        asukoht: "voorsil",
        tulemus: null
    },
    {
        kuupaev: "21.12.2025",
        kellaaeg: "17:30",
        vastane: "Pärnu Panthers",
        asukoht: "kodus",
        tulemus: null
    },
    {
        kuupaev: "23.11.2025",
        kellaaeg: "18:00",
        vastane: "Tallinna Tigers",
        asukoht: "voorsil",
        tulemus: { meie: 68, vastane: 72 }
    },
    {
        kuupaev: "16.11.2025",
        kellaaeg: "19:00",
        vastane: "KK Pahvi Keila",
        asukoht: "kodus",
        tulemus: { meie: 81, vastane: 74 }
    },
    {
        kuupaev: "09.11.2025",
        kellaaeg: "18:00",
        vastane: "Rakvere Rockets",
        asukoht: "kodus",
        tulemus: { meie: 78, vastane: 65 }
    },
    {
        kuupaev: "26.10.2025",
        kellaaeg: "17:00",
        vastane: "Viljandi Vipers",
        asukoht: "voorsil",
        tulemus: { meie: 62, vastane: 70 }
    }
];

var uudised = [
    {
        kuupaev: "30. november 2025",
        pealkiri: "Ettevalmistused detsembri mängudeks",
        sisu: "Meeskond treenib intensiivselt, et valmistuda detsembri mängudeks. Treener on rahul meeskonna arenguga ja usub, et suudame näidata head mängu. Eriti on paranenud meie kaitse ja meeskonnatöö.",
        pilt: "assets/uudis1.jpg"
    },
    {
        kuupaev: "24. november 2025",
        pealkiri: "Kaotus Tallinna Tigersile",
        sisu: "Laupäeval kaotasime võõrsil Tallinna Tigersile tulemusega 68-72. Mäng oli tasavägine, kuid vastased olid lõpuminutitel täpsemad. Parim skoorija oli Mängija 2 18 punktiga.",
        pilt: "assets/uudis2.jpg"
    },
    {
        kuupaev: "17. november 2025",
        pealkiri: "Võit KK Pahvi Keila üle!",
        sisu: "Koduväljakul saavutasime kindla võidu KK Pahvi Keila üle tulemusega 81-74. Meeskond mängis suurepäraselt ja publik oli fantastiline. Mängija 1 viskas 24 punkti.",
        pilt: "assets/uudis3.jpg"
    },
    {
        kuupaev: "10. november 2025",
        pealkiri: "Tugev võit Rakvere Rocketsi vastu",
        sisu: "Eelmisel nädalavahetusel võitsime kodumängus Rakvere Rocketsi 78-65. See oli meie parim esitus sel hooajal. Meeskond näitas suurepärast koostööd ja kaitses olime väga tugevad.",
        pilt: "assets/uudis4.jpg"
    },
    {
        kuupaev: "1. november 2025",
        pealkiri: "Treeningud kolmapäeviti kell 18:00",
        sisu: "Meeldetuletus kõigile mängijatele - regulaarsed treeningud toimuvad igal kolmapäeval kell 18:00 Tartu Spordihallis. Palume kõigil õigeks ajaks kohal olla! Treening kestab umbes 2 tundi.",
        pilt: "assets/uudis5.jpg"
    }
];

function renderKalender() {
    var tbody = document.getElementById('kalender-body');
    if (!tbody) return;

    mangud.sort(function(a, b) {
        var dateA = a.kuupaev.split('.').reverse().join('');
        var dateB = b.kuupaev.split('.').reverse().join('');
        return dateB.localeCompare(dateA);
    });

    for (var i = 0; i < mangud.length; i++) {
        var mang = mangud[i];
        var tr = document.createElement('tr');
        
        if (mang.tulemus) {
            tr.className = 'moodunud-mang';
        }

        var asukohtClass = mang.asukoht === 'kodus' ? 'kodus' : 'voorsil';
        var asukohtText = mang.asukoht === 'kodus' ? 'Kodus' : 'Võõrsil';

        var tulemustekst = '';
        if (mang.tulemus === null) {
            tulemustekst = '<span class="tulemas">Tulemas</span>';
        } else if (mang.tulemus.meie > mang.tulemus.vastane) {
            tulemustekst = '<span class="voit">Võit ' + mang.tulemus.meie + '-' + mang.tulemus.vastane + '</span>';
        } else {
            tulemustekst = '<span class="kaotus">Kaotus ' + mang.tulemus.meie + '-' + mang.tulemus.vastane + '</span>';
        }

        tr.innerHTML = 
            '<td>' + mang.kuupaev + '</td>' +
            '<td>' + mang.kellaaeg + '</td>' +
            '<td>' + mang.vastane + '</td>' +
            '<td><span class="' + asukohtClass + '">' + asukohtText + '</span></td>' +
            '<td>' + tulemustekst + '</td>';

        tbody.appendChild(tr);
    }
}

function renderUudised() {
    var container = document.getElementById('uudiste-list');
    if (!container) return;

    for (var i = 0; i < uudised.length; i++) {
        var uudis = uudised[i];
        
        var article = document.createElement('article');
        article.className = 'uudise-artikkel';
        
        article.innerHTML = 
            '<img src="' + uudis.pilt + '" alt="' + uudis.pealkiri + '">' +
            '<div class="uudise-sisu">' +
                '<span class="kuupaev">' + uudis.kuupaev + '</span>' +
                '<h2>' + uudis.pealkiri + '</h2>' +
                '<p>' + uudis.sisu + '</p>' +
            '</div>';

        container.appendChild(article);
    }
}

function initUudiseriba() {
    var newsTrack = document.querySelector('.uudiserada');
    
    if (newsTrack) {
        newsTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        newsTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
}

function renderUudiseriba() {
    var container = document.getElementById('uudiserada');
    if (!container) return;

    for (var loop = 0; loop < 2; loop++) {
        for (var i = 0; i < uudised.length; i++) {
            var uudis = uudised[i];
            
            var link = document.createElement('a');
            link.href = 'uudised.html';
            link.className = 'uudis';
            
            link.innerHTML = 
                '<img src="' + uudis.pilt + '" alt="' + uudis.pealkiri + '">' +
                '<p>' + uudis.pealkiri + '</p>';

            container.appendChild(link);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderKalender();
    renderUudised();
    renderUudiseriba();
    initUudiseriba();
});
