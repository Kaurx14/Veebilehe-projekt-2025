// Mängude andmed - sisaldab nii toimunud kui tulevasi mänge
// tulemus: null tähendab, et mäng pole veel toimunud
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
        tulemus: { meie: 68, vastane: 72 }  // kaotus
    },
    {
        kuupaev: "16.11.2025",
        kellaaeg: "19:00",
        vastane: "KK Pahvi Keila",
        asukoht: "kodus",
        tulemus: { meie: 81, vastane: 74 }  // võit
    },
    {
        kuupaev: "09.11.2025",
        kellaaeg: "18:00",
        vastane: "Rakvere Rockets",
        asukoht: "kodus",
        tulemus: { meie: 78, vastane: 65 }  // võit
    },
    {
        kuupaev: "26.10.2025",
        kellaaeg: "17:00",
        vastane: "Viljandi Vipers",
        asukoht: "voorsil",
        tulemus: { meie: 62, vastane: 70 }  // kaotus
    }
];

// Uudiste andmed - kuvatakse nii avalehel uudiseribal kui uudiste lehel
var uudised = [
    {
        kuupaev: "30. november 2025",
        pealkiri: "Ettevalmistused detsembri mängudeks",
        sisu: "Meeskond treenib intensiivselt, et valmistuda detsembri mängudeks. Treener on rahul meeskonna arenguga ja usub, et suudame näidata head mängu. Eriti on paranenud meie kaitse ja meeskonnatöö.",
        pilt: "assets/uudised/ettevalmistus.jpg"
    },
    {
        kuupaev: "24. november 2025",
        pealkiri: "Kaotus Tallinna Tigersile",
        sisu: "Laupäeval kaotasime võõrsil Tallinna Tigersile tulemusega 68-72. Mäng oli tasavägine, kuid vastased olid lõpuminutitel täpsemad. Parim skoorija oli Mängija 2 18 punktiga.",
        pilt: "assets/uudised/kaotus.jpg"
    },
    {
        kuupaev: "17. november 2025",
        pealkiri: "Võit KK Pahvi Keila üle!",
        sisu: "Koduväljakul saavutasime kindla võidu KK Pahvi Keila üle tulemusega 81-74. Meeskond mängis suurepäraselt ja publik oli fantastiline. Mängija 1 viskas 24 punkti.",
        pilt: "assets/uudised/võit_keila.png"
    },
    {
        kuupaev: "10. november 2025",
        pealkiri: "Tugev võit Rakvere Rocketsi vastu",
        sisu: "Eelmisel nädalavahetusel võitsime kodumängus Rakvere Rocketsi 78-65. See oli meie parim esitus sel hooajal. Meeskond näitas suurepärast koostööd ja kaitses olime väga tugevad.",
        pilt: "assets/uudised/võit_Rakvere.jpg"
    },
    {
        kuupaev: "1. november 2025",
        pealkiri: "Treeningud kolmapäeviti kell 18:00",
        sisu: "Meeldetuletus kõigile mängijatele - regulaarsed treeningud toimuvad igal kolmapäeval kell 18:00 Tartu Spordihallis. Palume kõigil õigeks ajaks kohal olla! Treening kestab umbes 2 tundi.",
        pilt: "assets/uudised/treening.png"
    }
];
