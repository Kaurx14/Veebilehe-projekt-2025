// Mängijate andmed
var mangijad = [
    {
        nimi: "Märt Kask",
        number: 1,
        positsioon: "Mängujuht",
        pikkus: 185,
        vanus: 22,
        punktid: 12.5,
        pilt: "assets/mangijad/mangija1.jpg"
    },
    {
        nimi: "Karl Tamm",
        number: 5,
        positsioon: "Tsenter",
        pikkus: 203,
        vanus: 24,
        punktid: 15.2,
        pilt: "assets/mangijad/mangija2.jpg"
    },
    {
        nimi: "Jaanus Saar",
        number: 7,
        positsioon: "Väike äär",
        pikkus: 192,
        vanus: 21,
        punktid: 10.8,
        pilt: "assets/mangijad/mangija1.jpg"
    },
    {
        nimi: "Toomas Laas",
        number: 11,
        positsioon: "Väike äär",
        pikkus: 188,
        vanus: 23,
        punktid: 9.3,
        pilt: "assets/mangijad/mangija2.jpg"
    },
    {
        nimi: "Andres Pärn",
        number: 14,
        positsioon: "Väike äär",
        pikkus: 190,
        vanus: 25,
        punktid: 11.7,
        pilt: "assets/mangijad/mangija1.jpg"
    },
    {
        nimi: "Kristjan Ots",
        number: 23,
        positsioon: "Suur äär",
        pikkus: 195,
        vanus: 20,
        punktid: 8.9,
        pilt: "assets/mangijad/mangija2.jpg"
    },
    {
        nimi: "Rasmus Kukk",
        number: 33,
        positsioon: "Tsenter",
        pikkus: 205,
        vanus: 26,
        punktid: 13.4,
        pilt: "assets/mangijad/mangija1.jpg"
    },
    {
        nimi: "Markus Välja",
        number: 42,
        positsioon: "Mängujuht",
        pikkus: 183,
        vanus: 19,
        punktid: 7.6,
        pilt: "assets/mangijad/mangija2.jpg"
    }
];

// Funktsioon mängijate kaartide kuvamiseks
function kuvaMangijad() {
    const container = document.querySelector('.mangijakaardid');
    
    if (!container) {
        console.error('Mängijate konteinerit ei leitud!');
        return;
    }
    
    // Tühjenda konteiner
    container.innerHTML = '';
    
    // Loo iga mängija jaoks kaart
    mangijad.forEach(function(mangija) {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        
        // HTML kaardiobjektile
        flipCard.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${mangija.pilt}" alt="${mangija.nimi}">
                    <h3>${mangija.nimi}</h3>
                </div>
                <div class="flip-card-back">
                    <h3>${mangija.nimi}</h3>
                    <p class="number">#${mangija.number}</p>
                    <p class="positsioon">${mangija.positsioon}</p>
                    <ul>
                        <li>Pikkus: ${mangija.pikkus} cm</li>
                        <li>Vanus: ${mangija.vanus} a</li>
                        <li>Punktid/mäng: ${mangija.punktid}</li>
                    </ul>
                </div>
            </div>
        `;
        
        container.appendChild(flipCard);
    });
}

// Kuva mängijad lehe laadimisel
document.addEventListener('DOMContentLoaded', function() {
    kuvaMangijad();
});

