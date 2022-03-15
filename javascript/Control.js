try {


    var container = document.getElementById("container")
    var container_Processing = document.getElementById("container_Processing")
    var danku = document.getElementById("danku")
    var Begin = document.getElementById("Begin");
    var question = document.getElementById("question");
    var A1 = document.getElementById("A1");
    var A2 = document.getElementById("A2");
    var A3 = document.getElementById("A3");
    var A4 = document.getElementById("A4");
    var Vraag = 0
    var A1pointer = 0
    var A2pointer = 0
    var A3pointer = 0
    var A4pointer = 0

    function Volgende() {

        if (Vraag == (Vragen.length - 1)) {

            beeindigen()
            return
        }

        Vraag += 1
        question.innerHTML = Vragen[Vraag]

        A1pointer += 1;
        document.getElementById("A1").innerHTML = AA[A1pointer];
        A2pointer += 1;
        document.getElementById("A2").innerHTML = AB[A2pointer];
        A3pointer += 1;
        document.getElementById("A3").innerHTML = AC[A3pointer];
        A4pointer += 1;
        document.getElementById("A4").innerHTML = AD[A4pointer];


    }

    function opstarten() {

        question.innerHTML = Vragen[Vraag]
        container.style.visibility = "hidden";
        container.style.display = "none";
        container_Processing.style.visibility = "visible";
        container_Processing.style.display = "flex";

    }

    function beeindigen() {

        question.innerHTML = Vragen[Vraag]
        container.style.visibility = "hidden";
        container.style.display = "none";
        container_Processing.style.visibility = "hidden";
        container_Processing.style.display = "none";
        danku.style.visibility = "visible";
        danku.style.display = "flex";


    }



    Begin.onclick = function() {



        opstarten()


    }

    A1.onclick = function() {

        Volgende();



    }
    A2.onclick = function() {


        Volgende();



    }
    A3.onclick = function() {


        Volgende();


    }
    A4.onclick = function() {

        Volgende();


    }







    var Vragen = ["Vraag 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 6: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 7: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 8: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 9: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores ",
        "Vraag 10: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum molestiae, asperiores "
    ]
    var AA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    var AB = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    var AC = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    var AD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
} catch (error) {

}


try {


    const Veiligheidscoordinatie = document.getElementById("Veiligheidscoordinatie")
    const Nutsvoorzieningen = document.getElementById('Nutsvoorzieningen')
    const PB_verslaggeving = document.getElementById('PBverslaggeving')
    const div = document.getElementById('Gui')
    const Title = document.getElementById('Title')
    const image = document.getElementById('Image')
    const message = document.getElementById('message')

    Veiligheidscoordinatie.onclick = function() {

        setTimeout(function() { div.style.opacity = "1"; }, 200);
        setTimeout(function() { div.style.opacity = "0.9"; }, 220);
        setTimeout(function() { div.style.opacity = "0.8"; }, 240);
        setTimeout(function() { div.style.opacity = "0.7"; }, 260);
        setTimeout(function() { div.style.opacity = "0.6"; }, 280);
        setTimeout(function() { div.style.opacity = "0.5"; }, 300);
        setTimeout(function() { div.style.opacity = "0.4"; }, 320);
        setTimeout(function() { div.style.opacity = "0.3"; }, 340);
        setTimeout(function() { div.style.opacity = "0.2"; }, 360);
        setTimeout(function() { div.style.opacity = "0.1"; }, 380);


        setTimeout(function() {

            div.style.opacity = "0";
            Title.textContent = "Veiligheidscoördinatie";
            message.textContent = "Wij nemen veiligheidcoördinatie ernstig !  Anders dan wat dikwijls over de veiligheidscoördinator verteld wordt, komen wij wél met een regelmatige frequentie op de werven en zorgen voor een degelijk dossier.  Zowel de administratie vóóraf, tijdens, als na de werken verloopt vlot."
            image.src = "img/Veiligheid.jpg"

        }, 400);
        setTimeout(function() {
            div.style.marginLeft = "0em";
            div.style.opacity = "0.1";
        }, 400);

        setTimeout(function() { div.style.opacity = "0.2"; }, 450);
        setTimeout(function() { div.style.opacity = "0.3"; }, 470);
        setTimeout(function() { div.style.opacity = "0.4"; }, 490);
        setTimeout(function() { div.style.opacity = "0.5"; }, 510);
        setTimeout(function() { div.style.opacity = "0.6"; }, 530);
        setTimeout(function() { div.style.opacity = "0.7"; }, 550);
        setTimeout(function() { div.style.opacity = "0.8"; }, 570);
        setTimeout(function() { div.style.opacity = "0.9"; }, 590);
        setTimeout(function() { div.style.opacity = "1"; }, 610);
    }

    Nutsvoorzieningen.onclick = function() {

        setTimeout(function() { div.style.opacity = "1"; }, 200);
        setTimeout(function() { div.style.opacity = "0.9"; }, 220);
        setTimeout(function() { div.style.opacity = "0.8"; }, 240);
        setTimeout(function() { div.style.opacity = "0.7"; }, 260);
        setTimeout(function() { div.style.opacity = "0.6"; }, 280);
        setTimeout(function() { div.style.opacity = "0.5"; }, 300);
        setTimeout(function() { div.style.opacity = "0.4"; }, 320);
        setTimeout(function() { div.style.opacity = "0.3"; }, 340);
        setTimeout(function() { div.style.opacity = "0.2"; }, 360);
        setTimeout(function() { div.style.opacity = "0.1"; }, 380);

        setTimeout(function() {



            div.style.marginLeft = "400em";
            div.style.opacity = "0";
            Title.textContent = "Nutsvoorzieningen";
            message.textContent = "Wij zorgen voor een vlotte aansluiting en de meest kosten-efficiënte manier daartoe.  Bovendien adviseren wij u in uw keuze van energieleverancier. Ook tijdens de uitvoering van uw bouwwerken, zorgen wij voor energie.  Zowel voor de aanvraag van de werfaansluiting, als het voorzien ervan, met andere woorden het verhuren en plaatsen van een werfkast, kan u op ons beroep doen. "

            image.src = "img/Riool.jpg"



        }, 400);
        setTimeout(function() {
            div.style.marginLeft = "0em";
            div.style.opacity = "0.1";
        }, 400);

        setTimeout(function() { div.style.opacity = "0.2"; }, 450);
        setTimeout(function() { div.style.opacity = "0.3"; }, 470);
        setTimeout(function() { div.style.opacity = "0.4"; }, 490);
        setTimeout(function() { div.style.opacity = "0.5"; }, 510);
        setTimeout(function() { div.style.opacity = "0.6"; }, 530);
        setTimeout(function() { div.style.opacity = "0.7"; }, 550);
        setTimeout(function() { div.style.opacity = "0.8"; }, 570);
        setTimeout(function() { div.style.opacity = "0.9"; }, 590);
        setTimeout(function() { div.style.opacity = "1"; }, 610);

    }

    PB_verslaggeving.onclick = function() {

        setTimeout(function() { div.style.opacity = "1"; }, 200);
        setTimeout(function() { div.style.opacity = "0.9"; }, 220);
        setTimeout(function() { div.style.opacity = "0.8"; }, 240);
        setTimeout(function() { div.style.opacity = "0.7"; }, 260);
        setTimeout(function() { div.style.opacity = "0.6"; }, 280);
        setTimeout(function() { div.style.opacity = "0.5"; }, 300);
        setTimeout(function() { div.style.opacity = "0.4"; }, 320);
        setTimeout(function() { div.style.opacity = "0.3"; }, 340);
        setTimeout(function() { div.style.opacity = "0.2"; }, 360);
        setTimeout(function() { div.style.opacity = "0.1"; }, 380);

        setTimeout(function() {


            div.style.marginLeft = "100em";
            div.style.opacity = "0";
            Title.textContent = "PB verslaggeving";
            message.textContent = "De Vlaamse energieprestatieregelgeving (EPB) bepaalt dat wie een huis bouwt of grondig verbouwt, moet voldoen aan bepaalde eisen inzake isolatie, energieverbruik en binnenklimaat.  Samen vormen deze eisen een maat voor de energetische kwaliteit van het gebouw die uitgedrukt wordt met o.a. het E-peil.  Het zijn de architect en de EPB-verslaggever die instaan voor de berekening van dit E-peil."

            image.src = "img/Verslag.jpg";

        }, 400);
        setTimeout(function() {
            div.style.marginLeft = "0em";
            div.style.opacity = "0.1";
        }, 400);

        setTimeout(function() { div.style.opacity = "0.2"; }, 450);
        setTimeout(function() { div.style.opacity = "0.3"; }, 470);
        setTimeout(function() { div.style.opacity = "0.4"; }, 490);
        setTimeout(function() { div.style.opacity = "0.5"; }, 510);
        setTimeout(function() { div.style.opacity = "0.6"; }, 530);
        setTimeout(function() { div.style.opacity = "0.7"; }, 550);
        setTimeout(function() { div.style.opacity = "0.8"; }, 570);
        setTimeout(function() { div.style.opacity = "0.9"; }, 590);
        setTimeout(function() { div.style.opacity = "1"; }, 610);
    }

} catch (error) {

}