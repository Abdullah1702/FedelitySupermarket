const firebaseConfig = {
    apiKey: "AIzaSyDoV7TkVu4b_gzOJnk28ObJVMISNE10gxI",
    authDomain: "fedelitysupermarket.firebaseapp.com",
    databaseURL: "https://fedelitysupermarket-default-rtdb.firebaseio.com",
    projectId: "fedelitysupermarket",
    storageBucket: "fedelitysupermarket.appspot.com",
    messagingSenderId: "279293796443",
    appId: "1:279293796443:web:b45baae038f936580d1f7e",
    measurementId: "G-PTLXBT0CX2"
};

firebase.initializeApp(firebaseConfig);

const CLIENTI = firebase.database().ref('Supermercati').child(sessionStorage.getItem("idSupermercato")).child('Clienti');
const CLIENTE_SELEZIONATO = CLIENTI.child(sessionStorage.getItem("idToUpdate"));
var initializerP = false;
var comune;
window.onload = function() {
    const nome = document.getElementById('nome');
    const cognome = document.getElementById('cognome');
    const dataNascita = document.getElementById('dataNascita');
    const indirizzo = document.getElementById('indirizzo');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');



    CLIENTE_SELEZIONATO.on("value", snap => {

        snap.forEach(info => {
            if (info.key == "cognome") {
                cognome.setAttribute("value", info.val());
            } else if (info.key == "nome") {
                nome.setAttribute("value", info.val());
            } else if (info.key == "dataNascita") {
                dataNascita.setAttribute("value", info.val());
            } else if (info.key == "provincia") {

                $("div.provincia select").val(info.val()).change();
            } else if (info.key == "comune") {
                console.log(info.val());
                comune = info.val();
            } else if (info.key == "indirizzo") {
                indirizzo.setAttribute("value", info.val());
            } else if (info.key == "email") {
                email.setAttribute("value", info.val());
            } else if (info.key == "telefono") {
                telefono.setAttribute("value", info.val());
            } else if (info.key == "sesso") {
                $("div.sesso select").val(info.val()).change();
            }
        });
        const updateButton = document.getElementById('update-btn');

        updateButton.addEventListener("click", e => {
            e.preventDefault();

            const nomeU = document.getElementById('nome').value;
            const cognomeU = document.getElementById('cognome').value;
            const dataNascitaU = document.getElementById('dataNascita').value;
            const indirizzoU = document.getElementById('indirizzo').value;
            const emailU = document.getElementById('email').value;
            const telefonoU = document.getElementById('telefono').value;
            const sessoU = document.getElementById('sesso').value;
            const provinciaU = document.getElementById('provincia').value;
            const comuneU = document.getElementById('comune').value;


            if (email == "" && telefono == "") {
                CLIENTE_SELEZIONATO.child("nome").set(nomeU);
                CLIENTE_SELEZIONATO.child("cognome").set(cognomeU);
                CLIENTE_SELEZIONATO.child("dataNascita").set(dataNascitaU);
                CLIENTE_SELEZIONATO.child("indirizzo").set(indirizzoU);
                CLIENTE_SELEZIONATO.child("sesso").set(sessoU);
                CLIENTE_SELEZIONATO.child("provincia").set(provinciaU);
                CLIENTE_SELEZIONATO.child("comune").set(comuneU);

            } else if (email != "" && telefono == "") {

                CLIENTE_SELEZIONATO.child("nome").set(nomeU);
                CLIENTE_SELEZIONATO.child("cognome").set(cognomeU);
                CLIENTE_SELEZIONATO.child("dataNascita").set(dataNascitaU);
                CLIENTE_SELEZIONATO.child("indirizzo").set(indirizzoU);
                CLIENTE_SELEZIONATO.child("email").set(emailU);
                CLIENTE_SELEZIONATO.child("sesso").set(sessoU);
                CLIENTE_SELEZIONATO.child("provincia").set(provinciaU);
                CLIENTE_SELEZIONATO.child("comune").set(comuneU);

            } else if (email == "" && telefono != "") {
                CLIENTE_SELEZIONATO.child("nome").set(nomeU);
                CLIENTE_SELEZIONATO.child("cognome").set(cognomeU);
                CLIENTE_SELEZIONATO.child("dataNascita").set(dataNascitaU);
                CLIENTE_SELEZIONATO.child("indirizzo").set(indirizzoU);
                CLIENTE_SELEZIONATO.child("telefono").set(telefonoU);
                CLIENTE_SELEZIONATO.child("sesso").set(sessoU);
                CLIENTE_SELEZIONATO.child("provincia").set(provinciaU);
                CLIENTE_SELEZIONATO.child("comune").set(comuneU);

            } else {
                CLIENTE_SELEZIONATO.child("nome").set(nomeU);
                CLIENTE_SELEZIONATO.child("cognome").set(cognomeU);
                CLIENTE_SELEZIONATO.child("dataNascita").set(dataNascitaU);
                CLIENTE_SELEZIONATO.child("indirizzo").set(indirizzoU);
                CLIENTE_SELEZIONATO.child("telefono").set(telefonoU);
                CLIENTE_SELEZIONATO.child("email").set(emailU);
                CLIENTE_SELEZIONATO.child("sesso").set(sessoU);
                CLIENTE_SELEZIONATO.child("provincia").set(provinciaU);
                CLIENTE_SELEZIONATO.child("comune").set(comuneU);
            }

            window.location.href = "inner-page.php";
        });




    });
};


function provinceAdapt(province) {
    console.log(province);
    var comuni = "";
    var comuniPerProv = [{
            "comune": "Agliè",
            "provincia": "TO"
        }, {
            "comune": "Airasca",
            "provincia": "TO"
        }, {
            "comune": "Ala di Stura",
            "provincia": "TO"
        }, {
            "comune": "Albiano d'Ivrea",
            "provincia": "TO"
        }, {
            "comune": "Almese",
            "provincia": "TO"
        }, {
            "comune": "Alpette",
            "provincia": "TO"
        }, {
            "comune": "Alpignano",
            "provincia": "TO"
        }, {
            "comune": "Andezeno",
            "provincia": "TO"
        }, {
            "comune": "Andrate",
            "provincia": "TO"
        }, {
            "comune": "Angrogna",
            "provincia": "TO"
        }, {
            "comune": "Arignano",
            "provincia": "TO"
        }, {
            "comune": "Avigliana",
            "provincia": "TO"
        }, {
            "comune": "Azeglio",
            "provincia": "TO"
        }, {
            "comune": "Bairo",
            "provincia": "TO"
        }, {
            "comune": "Balangero",
            "provincia": "TO"
        }, {
            "comune": "Baldissero Canavese",
            "provincia": "TO"
        }, {
            "comune": "Baldissero Torinese",
            "provincia": "TO"
        }, {
            "comune": "Balme",
            "provincia": "TO"
        }, {
            "comune": "Banchette",
            "provincia": "TO"
        }, {
            "comune": "Barbania",
            "provincia": "TO"
        }, {
            "comune": "Bardonecchia",
            "provincia": "TO"
        }, {
            "comune": "Barone Canavese",
            "provincia": "TO"
        }, {
            "comune": "Beinasco",
            "provincia": "TO"
        }, {
            "comune": "Bibiana",
            "provincia": "TO"
        }, {
            "comune": "Bobbio Pellice",
            "provincia": "TO"
        }, {
            "comune": "Bollengo",
            "provincia": "TO"
        }, {
            "comune": "Borgaro Torinese",
            "provincia": "TO"
        }, {
            "comune": "Borgiallo",
            "provincia": "TO"
        }, {
            "comune": "Borgofranco d'Ivrea",
            "provincia": "TO"
        }, {
            "comune": "Borgomasino",
            "provincia": "TO"
        }, {
            "comune": "Borgone Susa",
            "provincia": "TO"
        }, {
            "comune": "Bosconero",
            "provincia": "TO"
        }, {
            "comune": "Brandizzo",
            "provincia": "TO"
        }, {
            "comune": "Bricherasio",
            "provincia": "TO"
        }, {
            "comune": "Brosso",
            "provincia": "TO"
        }, {
            "comune": "Brozolo",
            "provincia": "TO"
        }, {
            "comune": "Bruino",
            "provincia": "TO"
        }, {
            "comune": "Brusasco",
            "provincia": "TO"
        }, {
            "comune": "Bruzolo",
            "provincia": "TO"
        }, {
            "comune": "Buriasco",
            "provincia": "TO"
        }, {
            "comune": "Burolo",
            "provincia": "TO"
        }, {
            "comune": "Busano",
            "provincia": "TO"
        }, {
            "comune": "Bussoleno",
            "provincia": "TO"
        }, {
            "comune": "Buttigliera Alta",
            "provincia": "TO"
        }, {
            "comune": "Cafasse",
            "provincia": "TO"
        }, {
            "comune": "Caluso",
            "provincia": "TO"
        }, {
            "comune": "Cambiano",
            "provincia": "TO"
        }, {
            "comune": "Campiglione Fenile",
            "provincia": "TO"
        }, {
            "comune": "Candia Canavese",
            "provincia": "TO"
        }, {
            "comune": "Candiolo",
            "provincia": "TO"
        }, {
            "comune": "Canischio",
            "provincia": "TO"
        }, {
            "comune": "Cantalupa",
            "provincia": "TO"
        }, {
            "comune": "Cantoira",
            "provincia": "TO"
        }, {
            "comune": "Caprie",
            "provincia": "TO"
        }, {
            "comune": "Caravino",
            "provincia": "TO"
        }, {
            "comune": "Carema",
            "provincia": "TO"
        }, {
            "comune": "Carignano",
            "provincia": "TO"
        }, {
            "comune": "Carmagnola",
            "provincia": "TO"
        }, {
            "comune": "Casalborgone",
            "provincia": "TO"
        }, {
            "comune": "Cascinette d'Ivrea",
            "provincia": "TO"
        }, {
            "comune": "Caselette",
            "provincia": "TO"
        }, {
            "comune": "Caselle Torinese",
            "provincia": "TO"
        }, {
            "comune": "Castagneto Po",
            "provincia": "TO"
        }, {
            "comune": "Castagnole Piemonte",
            "provincia": "TO"
        }, {
            "comune": "Castellamonte",
            "provincia": "TO"
        }, {
            "comune": "Castelnuovo Nigra",
            "provincia": "TO"
        }, {
            "comune": "Castiglione Torinese",
            "provincia": "TO"
        }, {
            "comune": "Cavagnolo",
            "provincia": "TO"
        }, {
            "comune": "Cavour",
            "provincia": "TO"
        }, {
            "comune": "Cercenasco",
            "provincia": "TO"
        }, {
            "comune": "Ceres",
            "provincia": "TO"
        }, {
            "comune": "Ceresole Reale",
            "provincia": "TO"
        }, {
            "comune": "Cesana Torinese",
            "provincia": "TO"
        }, {
            "comune": "Chialamberto",
            "provincia": "TO"
        }, {
            "comune": "Chianocco",
            "provincia": "TO"
        }, {
            "comune": "Chiaverano",
            "provincia": "TO"
        }, {
            "comune": "Chieri",
            "provincia": "TO"
        }, {
            "comune": "Chiesanuova",
            "provincia": "TO"
        }, {
            "comune": "Chiomonte",
            "provincia": "TO"
        }, {
            "comune": "Chiusa di San Michele",
            "provincia": "TO"
        }, {
            "comune": "Chivasso",
            "provincia": "TO"
        }, {
            "comune": "Ciconio",
            "provincia": "TO"
        }, {
            "comune": "Cintano",
            "provincia": "TO"
        }, {
            "comune": "Cinzano",
            "provincia": "TO"
        }, {
            "comune": "Ciriè",
            "provincia": "TO"
        }, {
            "comune": "Claviere",
            "provincia": "TO"
        }, {
            "comune": "Coassolo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Coazze",
            "provincia": "TO"
        }, {
            "comune": "Collegno",
            "provincia": "TO"
        }, {
            "comune": "Colleretto Castelnuovo",
            "provincia": "TO"
        }, {
            "comune": "Colleretto Giacosa",
            "provincia": "TO"
        }, {
            "comune": "Condove",
            "provincia": "TO"
        }, {
            "comune": "Corio",
            "provincia": "TO"
        }, {
            "comune": "Cossano Canavese",
            "provincia": "TO"
        }, {
            "comune": "Cuceglio",
            "provincia": "TO"
        }, {
            "comune": "Cumiana",
            "provincia": "TO"
        }, {
            "comune": "Cuorgnè",
            "provincia": "TO"
        }, {
            "comune": "Druento",
            "provincia": "TO"
        }, {
            "comune": "Exilles",
            "provincia": "TO"
        }, {
            "comune": "Favria",
            "provincia": "TO"
        }, {
            "comune": "Feletto",
            "provincia": "TO"
        }, {
            "comune": "Fenestrelle",
            "provincia": "TO"
        }, {
            "comune": "Fiano",
            "provincia": "TO"
        }, {
            "comune": "Fiorano Canavese",
            "provincia": "TO"
        }, {
            "comune": "Foglizzo",
            "provincia": "TO"
        }, {
            "comune": "Forno Canavese",
            "provincia": "TO"
        }, {
            "comune": "Frassinetto",
            "provincia": "TO"
        }, {
            "comune": "Front",
            "provincia": "TO"
        }, {
            "comune": "Frossasco",
            "provincia": "TO"
        }, {
            "comune": "Garzigliana",
            "provincia": "TO"
        }, {
            "comune": "Gassino Torinese",
            "provincia": "TO"
        }, {
            "comune": "Germagnano",
            "provincia": "TO"
        }, {
            "comune": "Giaglione",
            "provincia": "TO"
        }, {
            "comune": "Giaveno",
            "provincia": "TO"
        }, {
            "comune": "Givoletto",
            "provincia": "TO"
        }, {
            "comune": "Gravere",
            "provincia": "TO"
        }, {
            "comune": "Groscavallo",
            "provincia": "TO"
        }, {
            "comune": "Grosso",
            "provincia": "TO"
        }, {
            "comune": "Grugliasco",
            "provincia": "TO"
        }, {
            "comune": "Ingria",
            "provincia": "TO"
        }, {
            "comune": "Inverso Pinasca",
            "provincia": "TO"
        }, {
            "comune": "Isolabella",
            "provincia": "TO"
        }, {
            "comune": "Issiglio",
            "provincia": "TO"
        }, {
            "comune": "Ivrea",
            "provincia": "TO"
        }, {
            "comune": "La Cassa",
            "provincia": "TO"
        }, {
            "comune": "La Loggia",
            "provincia": "TO"
        }, {
            "comune": "Lanzo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Lauriano",
            "provincia": "TO"
        }, {
            "comune": "Leini",
            "provincia": "TO"
        }, {
            "comune": "Lemie",
            "provincia": "TO"
        }, {
            "comune": "Lessolo",
            "provincia": "TO"
        }, {
            "comune": "Levone",
            "provincia": "TO"
        }, {
            "comune": "Locana",
            "provincia": "TO"
        }, {
            "comune": "Lombardore",
            "provincia": "TO"
        }, {
            "comune": "Lombriasco",
            "provincia": "TO"
        }, {
            "comune": "Loranzè",
            "provincia": "TO"
        }, {
            "comune": "Lugnacco",
            "provincia": "TO"
        }, {
            "comune": "Luserna San Giovanni",
            "provincia": "TO"
        }, {
            "comune": "Lusernetta",
            "provincia": "TO"
        }, {
            "comune": "Lusigliè",
            "provincia": "TO"
        }, {
            "comune": "Macello",
            "provincia": "TO"
        }, {
            "comune": "Maglione",
            "provincia": "TO"
        }, {
            "comune": "Marentino",
            "provincia": "TO"
        }, {
            "comune": "Massello",
            "provincia": "TO"
        }, {
            "comune": "Mathi",
            "provincia": "TO"
        }, {
            "comune": "Mattie",
            "provincia": "TO"
        }, {
            "comune": "Mazzè",
            "provincia": "TO"
        }, {
            "comune": "Meana di Susa",
            "provincia": "TO"
        }, {
            "comune": "Mercenasco",
            "provincia": "TO"
        }, {
            "comune": "Meugliano",
            "provincia": "TO"
        }, {
            "comune": "Mezzenile",
            "provincia": "TO"
        }, {
            "comune": "Mombello di Torino",
            "provincia": "TO"
        }, {
            "comune": "Mompantero",
            "provincia": "TO"
        }, {
            "comune": "Monastero di Lanzo",
            "provincia": "TO"
        }, {
            "comune": "Moncalieri",
            "provincia": "TO"
        }, {
            "comune": "Moncenisio",
            "provincia": "TO"
        }, {
            "comune": "Montaldo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Montalenghe",
            "provincia": "TO"
        }, {
            "comune": "Montalto Dora",
            "provincia": "TO"
        }, {
            "comune": "Montanaro",
            "provincia": "TO"
        }, {
            "comune": "Monteu da Po",
            "provincia": "TO"
        }, {
            "comune": "Moriondo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Nichelino",
            "provincia": "TO"
        }, {
            "comune": "Noasca",
            "provincia": "TO"
        }, {
            "comune": "Nole",
            "provincia": "TO"
        }, {
            "comune": "Nomaglio",
            "provincia": "TO"
        }, {
            "comune": "None",
            "provincia": "TO"
        }, {
            "comune": "Novalesa",
            "provincia": "TO"
        }, {
            "comune": "Oglianico",
            "provincia": "TO"
        }, {
            "comune": "Orbassano",
            "provincia": "TO"
        }, {
            "comune": "Orio Canavese",
            "provincia": "TO"
        }, {
            "comune": "Osasco",
            "provincia": "TO"
        }, {
            "comune": "Osasio",
            "provincia": "TO"
        }, {
            "comune": "Oulx",
            "provincia": "TO"
        }, {
            "comune": "Ozegna",
            "provincia": "TO"
        }, {
            "comune": "Palazzo Canavese",
            "provincia": "TO"
        }, {
            "comune": "Pancalieri",
            "provincia": "TO"
        }, {
            "comune": "Parella",
            "provincia": "TO"
        }, {
            "comune": "Pavarolo",
            "provincia": "TO"
        }, {
            "comune": "Pavone Canavese",
            "provincia": "TO"
        }, {
            "comune": "Pecco",
            "provincia": "TO"
        }, {
            "comune": "Pecetto Torinese",
            "provincia": "TO"
        }, {
            "comune": "Perosa Argentina",
            "provincia": "TO"
        }, {
            "comune": "Perosa Canavese",
            "provincia": "TO"
        }, {
            "comune": "Perrero",
            "provincia": "TO"
        }, {
            "comune": "Pertusio",
            "provincia": "TO"
        }, {
            "comune": "Pessinetto",
            "provincia": "TO"
        }, {
            "comune": "Pianezza",
            "provincia": "TO"
        }, {
            "comune": "Pinasca",
            "provincia": "TO"
        }, {
            "comune": "Pinerolo",
            "provincia": "TO"
        }, {
            "comune": "Pino Torinese",
            "provincia": "TO"
        }, {
            "comune": "Piobesi Torinese",
            "provincia": "TO"
        }, {
            "comune": "Piossasco",
            "provincia": "TO"
        }, {
            "comune": "Piscina",
            "provincia": "TO"
        }, {
            "comune": "Piverone",
            "provincia": "TO"
        }, {
            "comune": "Poirino",
            "provincia": "TO"
        }, {
            "comune": "Pomaretto",
            "provincia": "TO"
        }, {
            "comune": "Pont-Canavese",
            "provincia": "TO"
        }, {
            "comune": "Porte",
            "provincia": "TO"
        }, {
            "comune": "Pragelato",
            "provincia": "TO"
        }, {
            "comune": "Prali",
            "provincia": "TO"
        }, {
            "comune": "Pralormo",
            "provincia": "TO"
        }, {
            "comune": "Pramollo",
            "provincia": "TO"
        }, {
            "comune": "Prarostino",
            "provincia": "TO"
        }, {
            "comune": "Prascorsano",
            "provincia": "TO"
        }, {
            "comune": "Pratiglione",
            "provincia": "TO"
        }, {
            "comune": "Quagliuzzo",
            "provincia": "TO"
        }, {
            "comune": "Quassolo",
            "provincia": "TO"
        }, {
            "comune": "Quincinetto",
            "provincia": "TO"
        }, {
            "comune": "Reano",
            "provincia": "TO"
        }, {
            "comune": "Ribordone",
            "provincia": "TO"
        }, {
            "comune": "Rivalba",
            "provincia": "TO"
        }, {
            "comune": "Rivalta di Torino",
            "provincia": "TO"
        }, {
            "comune": "Riva Presso Chieri",
            "provincia": "TO"
        }, {
            "comune": "Rivara",
            "provincia": "TO"
        }, {
            "comune": "Rivarolo Canavese",
            "provincia": "TO"
        }, {
            "comune": "Rivarossa",
            "provincia": "TO"
        }, {
            "comune": "Rivoli",
            "provincia": "TO"
        }, {
            "comune": "Robassomero",
            "provincia": "TO"
        }, {
            "comune": "Rocca Canavese",
            "provincia": "TO"
        }, {
            "comune": "Roletto",
            "provincia": "TO"
        }, {
            "comune": "Romano Canavese",
            "provincia": "TO"
        }, {
            "comune": "Ronco Canavese",
            "provincia": "TO"
        }, {
            "comune": "Rondissone",
            "provincia": "TO"
        }, {
            "comune": "Rorà",
            "provincia": "TO"
        }, {
            "comune": "Roure",
            "provincia": "TO"
        }, {
            "comune": "Rosta",
            "provincia": "TO"
        }, {
            "comune": "Rubiana",
            "provincia": "TO"
        }, {
            "comune": "Rueglio",
            "provincia": "TO"
        }, {
            "comune": "Salassa",
            "provincia": "TO"
        }, {
            "comune": "Salbertrand",
            "provincia": "TO"
        }, {
            "comune": "Salerano Canavese",
            "provincia": "TO"
        }, {
            "comune": "Salza di Pinerolo",
            "provincia": "TO"
        }, {
            "comune": "Samone",
            "provincia": "TO"
        }, {
            "comune": "San Benigno Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Carlo Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Colombano Belmonte",
            "provincia": "TO"
        }, {
            "comune": "San Didero",
            "provincia": "TO"
        }, {
            "comune": "San Francesco al Campo",
            "provincia": "TO"
        }, {
            "comune": "Sangano",
            "provincia": "TO"
        }, {
            "comune": "San Germano Chisone",
            "provincia": "TO"
        }, {
            "comune": "San Gillio",
            "provincia": "TO"
        }, {
            "comune": "San Giorgio Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Giorio di Susa",
            "provincia": "TO"
        }, {
            "comune": "San Giusto Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Martino Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Maurizio Canavese",
            "provincia": "TO"
        }, {
            "comune": "San Mauro Torinese",
            "provincia": "TO"
        }, {
            "comune": "San Pietro Val Lemina",
            "provincia": "TO"
        }, {
            "comune": "San Ponso",
            "provincia": "TO"
        }, {
            "comune": "San Raffaele Cimena",
            "provincia": "TO"
        }, {
            "comune": "San Sebastiano da Po",
            "provincia": "TO"
        }, {
            "comune": "San Secondo di Pinerolo",
            "provincia": "TO"
        }, {
            "comune": "Sant'Ambrogio di Torino",
            "provincia": "TO"
        }, {
            "comune": "Sant'Antonino di Susa",
            "provincia": "TO"
        }, {
            "comune": "Santena",
            "provincia": "TO"
        }, {
            "comune": "Sauze di Cesana",
            "provincia": "TO"
        }, {
            "comune": "Sauze d'Oulx",
            "provincia": "TO"
        }, {
            "comune": "Scalenghe",
            "provincia": "TO"
        }, {
            "comune": "Scarmagno",
            "provincia": "TO"
        }, {
            "comune": "Sciolze",
            "provincia": "TO"
        }, {
            "comune": "Sestriere",
            "provincia": "TO"
        }, {
            "comune": "Settimo Rottaro",
            "provincia": "TO"
        }, {
            "comune": "Settimo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Settimo Vittone",
            "provincia": "TO"
        }, {
            "comune": "Sparone",
            "provincia": "TO"
        }, {
            "comune": "Strambinello",
            "provincia": "TO"
        }, {
            "comune": "Strambino",
            "provincia": "TO"
        }, {
            "comune": "Susa",
            "provincia": "TO"
        }, {
            "comune": "Tavagnasco",
            "provincia": "TO"
        }, {
            "comune": "Torino",
            "provincia": "TO"
        }, {
            "comune": "Torrazza Piemonte",
            "provincia": "TO"
        }, {
            "comune": "Torre Canavese",
            "provincia": "TO"
        }, {
            "comune": "Torre Pellice",
            "provincia": "TO"
        }, {
            "comune": "Trana",
            "provincia": "TO"
        }, {
            "comune": "Trausella",
            "provincia": "TO"
        }, {
            "comune": "Traversella",
            "provincia": "TO"
        }, {
            "comune": "Traves",
            "provincia": "TO"
        }, {
            "comune": "Trofarello",
            "provincia": "TO"
        }, {
            "comune": "Usseaux",
            "provincia": "TO"
        }, {
            "comune": "Usseglio",
            "provincia": "TO"
        }, {
            "comune": "Vaie",
            "provincia": "TO"
        }, {
            "comune": "Val della Torre",
            "provincia": "TO"
        }, {
            "comune": "Valgioie",
            "provincia": "TO"
        }, {
            "comune": "Vallo Torinese",
            "provincia": "TO"
        }, {
            "comune": "Valperga",
            "provincia": "TO"
        }, {
            "comune": "Valprato Soana",
            "provincia": "TO"
        }, {
            "comune": "Varisella",
            "provincia": "TO"
        }, {
            "comune": "Vauda Canavese",
            "provincia": "TO"
        }, {
            "comune": "Venaus",
            "provincia": "TO"
        }, {
            "comune": "Venaria Reale",
            "provincia": "TO"
        }, {
            "comune": "Verolengo",
            "provincia": "TO"
        }, {
            "comune": "Verrua Savoia",
            "provincia": "TO"
        }, {
            "comune": "Vestignè",
            "provincia": "TO"
        }, {
            "comune": "Vialfrè",
            "provincia": "TO"
        }, {
            "comune": "Vico Canavese",
            "provincia": "TO"
        }, {
            "comune": "Vidracco",
            "provincia": "TO"
        }, {
            "comune": "Vigone",
            "provincia": "TO"
        }, {
            "comune": "Villafranca Piemonte",
            "provincia": "TO"
        }, {
            "comune": "Villanova Canavese",
            "provincia": "TO"
        }, {
            "comune": "Villarbasse",
            "provincia": "TO"
        }, {
            "comune": "Villar Dora",
            "provincia": "TO"
        }, {
            "comune": "Villareggia",
            "provincia": "TO"
        }, {
            "comune": "Villar Focchiardo",
            "provincia": "TO"
        }, {
            "comune": "Villar Pellice",
            "provincia": "TO"
        }, {
            "comune": "Villar Perosa",
            "provincia": "TO"
        }, {
            "comune": "Villastellone",
            "provincia": "TO"
        }, {
            "comune": "Vinovo",
            "provincia": "TO"
        }, {
            "comune": "Virle Piemonte",
            "provincia": "TO"
        }, {
            "comune": "Vische",
            "provincia": "TO"
        }, {
            "comune": "Vistrorio",
            "provincia": "TO"
        }, {
            "comune": "Viù",
            "provincia": "TO"
        }, {
            "comune": "Volpiano",
            "provincia": "TO"
        }, {
            "comune": "Volvera",
            "provincia": "TO"
        }, {
            "comune": "Mappano",
            "provincia": "TO"
        }, {
            "comune": "Alagna Valsesia",
            "provincia": "VC"
        }, {
            "comune": "Albano Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Alice Castello",
            "provincia": "VC"
        }, {
            "comune": "Arborio",
            "provincia": "VC"
        }, {
            "comune": "Asigliano Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Balmuccia",
            "provincia": "VC"
        }, {
            "comune": "Balocco",
            "provincia": "VC"
        }, {
            "comune": "Bianzè",
            "provincia": "VC"
        }, {
            "comune": "Boccioleto",
            "provincia": "VC"
        }, {
            "comune": "Borgo d'Ale",
            "provincia": "VC"
        }, {
            "comune": "Borgosesia",
            "provincia": "VC"
        }, {
            "comune": "Borgo Vercelli",
            "provincia": "VC"
        }, {
            "comune": "Breia",
            "provincia": "VC"
        }, {
            "comune": "Buronzo",
            "provincia": "VC"
        }, {
            "comune": "Campertogno",
            "provincia": "VC"
        }, {
            "comune": "Carcoforo",
            "provincia": "VC"
        }, {
            "comune": "Caresana",
            "provincia": "VC"
        }, {
            "comune": "Caresanablot",
            "provincia": "VC"
        }, {
            "comune": "Carisio",
            "provincia": "VC"
        }, {
            "comune": "Casanova Elvo",
            "provincia": "VC"
        }, {
            "comune": "San Giacomo Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Cellio",
            "provincia": "VC"
        }, {
            "comune": "Cervatto",
            "provincia": "VC"
        }, {
            "comune": "Cigliano",
            "provincia": "VC"
        }, {
            "comune": "Civiasco",
            "provincia": "VC"
        }, {
            "comune": "Collobiano",
            "provincia": "VC"
        }, {
            "comune": "Costanzana",
            "provincia": "VC"
        }, {
            "comune": "Cravagliana",
            "provincia": "VC"
        }, {
            "comune": "Crescentino",
            "provincia": "VC"
        }, {
            "comune": "Crova",
            "provincia": "VC"
        }, {
            "comune": "Desana",
            "provincia": "VC"
        }, {
            "comune": "Fobello",
            "provincia": "VC"
        }, {
            "comune": "Fontanetto Po",
            "provincia": "VC"
        }, {
            "comune": "Formigliana",
            "provincia": "VC"
        }, {
            "comune": "Gattinara",
            "provincia": "VC"
        }, {
            "comune": "Ghislarengo",
            "provincia": "VC"
        }, {
            "comune": "Greggio",
            "provincia": "VC"
        }, {
            "comune": "Guardabosone",
            "provincia": "VC"
        }, {
            "comune": "Lamporo",
            "provincia": "VC"
        }, {
            "comune": "Lenta",
            "provincia": "VC"
        }, {
            "comune": "Lignana",
            "provincia": "VC"
        }, {
            "comune": "Livorno Ferraris",
            "provincia": "VC"
        }, {
            "comune": "Lozzolo",
            "provincia": "VC"
        }, {
            "comune": "Mollia",
            "provincia": "VC"
        }, {
            "comune": "Moncrivello",
            "provincia": "VC"
        }, {
            "comune": "Motta de' Conti",
            "provincia": "VC"
        }, {
            "comune": "Olcenengo",
            "provincia": "VC"
        }, {
            "comune": "Oldenico",
            "provincia": "VC"
        }, {
            "comune": "Palazzolo Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Pertengo",
            "provincia": "VC"
        }, {
            "comune": "Pezzana",
            "provincia": "VC"
        }, {
            "comune": "Pila",
            "provincia": "VC"
        }, {
            "comune": "Piode",
            "provincia": "VC"
        }, {
            "comune": "Postua",
            "provincia": "VC"
        }, {
            "comune": "Prarolo",
            "provincia": "VC"
        }, {
            "comune": "Quarona",
            "provincia": "VC"
        }, {
            "comune": "Quinto Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Rassa",
            "provincia": "VC"
        }, {
            "comune": "Rima San Giuseppe",
            "provincia": "VC"
        }, {
            "comune": "Rimasco",
            "provincia": "VC"
        }, {
            "comune": "Rimella",
            "provincia": "VC"
        }, {
            "comune": "Riva Valdobbia",
            "provincia": "VC"
        }, {
            "comune": "Rive",
            "provincia": "VC"
        }, {
            "comune": "Roasio",
            "provincia": "VC"
        }, {
            "comune": "Ronsecco",
            "provincia": "VC"
        }, {
            "comune": "Rossa",
            "provincia": "VC"
        }, {
            "comune": "Rovasenda",
            "provincia": "VC"
        }, {
            "comune": "Sabbia",
            "provincia": "VC"
        }, {
            "comune": "Salasco",
            "provincia": "VC"
        }, {
            "comune": "Sali Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Saluggia",
            "provincia": "VC"
        }, {
            "comune": "San Germano Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Santhià",
            "provincia": "VC"
        }, {
            "comune": "Scopa",
            "provincia": "VC"
        }, {
            "comune": "Scopello",
            "provincia": "VC"
        }, {
            "comune": "Serravalle Sesia",
            "provincia": "VC"
        }, {
            "comune": "Stroppiana",
            "provincia": "VC"
        }, {
            "comune": "Tricerro",
            "provincia": "VC"
        }, {
            "comune": "Trino",
            "provincia": "VC"
        }, {
            "comune": "Tronzano Vercellese",
            "provincia": "VC"
        }, {
            "comune": "Valduggia",
            "provincia": "VC"
        }, {
            "comune": "Varallo",
            "provincia": "VC"
        }, {
            "comune": "Vercelli",
            "provincia": "VC"
        }, {
            "comune": "Villarboit",
            "provincia": "VC"
        }, {
            "comune": "Villata",
            "provincia": "VC"
        }, {
            "comune": "Vocca",
            "provincia": "VC"
        }, {
            "comune": "Agrate Conturbia",
            "provincia": "NO"
        }, {
            "comune": "Ameno",
            "provincia": "NO"
        }, {
            "comune": "Armeno",
            "provincia": "NO"
        }, {
            "comune": "Arona",
            "provincia": "NO"
        }, {
            "comune": "Barengo",
            "provincia": "NO"
        }, {
            "comune": "Bellinzago Novarese",
            "provincia": "NO"
        }, {
            "comune": "Biandrate",
            "provincia": "NO"
        }, {
            "comune": "Boca",
            "provincia": "NO"
        }, {
            "comune": "Bogogno",
            "provincia": "NO"
        }, {
            "comune": "Bolzano Novarese",
            "provincia": "NO"
        }, {
            "comune": "Borgolavezzaro",
            "provincia": "NO"
        }, {
            "comune": "Borgomanero",
            "provincia": "NO"
        }, {
            "comune": "Borgo Ticino",
            "provincia": "NO"
        }, {
            "comune": "Briga Novarese",
            "provincia": "NO"
        }, {
            "comune": "Briona",
            "provincia": "NO"
        }, {
            "comune": "Caltignaga",
            "provincia": "NO"
        }, {
            "comune": "Cameri",
            "provincia": "NO"
        }, {
            "comune": "Carpignano Sesia",
            "provincia": "NO"
        }, {
            "comune": "Casalbeltrame",
            "provincia": "NO"
        }, {
            "comune": "Casaleggio Novara",
            "provincia": "NO"
        }, {
            "comune": "Casalino",
            "provincia": "NO"
        }, {
            "comune": "Casalvolone",
            "provincia": "NO"
        }, {
            "comune": "Castellazzo Novarese",
            "provincia": "NO"
        }, {
            "comune": "Castelletto Sopra Ticino",
            "provincia": "NO"
        }, {
            "comune": "Cavaglietto",
            "provincia": "NO"
        }, {
            "comune": "Cavaglio d'Agogna",
            "provincia": "NO"
        }, {
            "comune": "Cavallirio",
            "provincia": "NO"
        }, {
            "comune": "Cerano",
            "provincia": "NO"
        }, {
            "comune": "Colazza",
            "provincia": "NO"
        }, {
            "comune": "Comignago",
            "provincia": "NO"
        }, {
            "comune": "Cressa",
            "provincia": "NO"
        }, {
            "comune": "Cureggio",
            "provincia": "NO"
        }, {
            "comune": "Divignano",
            "provincia": "NO"
        }, {
            "comune": "Dormelletto",
            "provincia": "NO"
        }, {
            "comune": "Fara Novarese",
            "provincia": "NO"
        }, {
            "comune": "Fontaneto d'Agogna",
            "provincia": "NO"
        }, {
            "comune": "Galliate",
            "provincia": "NO"
        }, {
            "comune": "Garbagna Novarese",
            "provincia": "NO"
        }, {
            "comune": "Gargallo",
            "provincia": "NO"
        }, {
            "comune": "Gattico",
            "provincia": "NO"
        }, {
            "comune": "Ghemme",
            "provincia": "NO"
        }, {
            "comune": "Gozzano",
            "provincia": "NO"
        }, {
            "comune": "Granozzo con Monticello",
            "provincia": "NO"
        }, {
            "comune": "Grignasco",
            "provincia": "NO"
        }, {
            "comune": "Invorio",
            "provincia": "NO"
        }, {
            "comune": "Landiona",
            "provincia": "NO"
        }, {
            "comune": "Lesa",
            "provincia": "NO"
        }, {
            "comune": "Maggiora",
            "provincia": "NO"
        }, {
            "comune": "Mandello Vitta",
            "provincia": "NO"
        }, {
            "comune": "Marano Ticino",
            "provincia": "NO"
        }, {
            "comune": "Massino Visconti",
            "provincia": "NO"
        }, {
            "comune": "Meina",
            "provincia": "NO"
        }, {
            "comune": "Mezzomerico",
            "provincia": "NO"
        }, {
            "comune": "Miasino",
            "provincia": "NO"
        }, {
            "comune": "Momo",
            "provincia": "NO"
        }, {
            "comune": "Nebbiuno",
            "provincia": "NO"
        }, {
            "comune": "Nibbiola",
            "provincia": "NO"
        }, {
            "comune": "Novara",
            "provincia": "NO"
        }, {
            "comune": "Oleggio",
            "provincia": "NO"
        }, {
            "comune": "Oleggio Castello",
            "provincia": "NO"
        }, {
            "comune": "Orta San Giulio",
            "provincia": "NO"
        }, {
            "comune": "Paruzzaro",
            "provincia": "NO"
        }, {
            "comune": "Pella",
            "provincia": "NO"
        }, {
            "comune": "Pettenasco",
            "provincia": "NO"
        }, {
            "comune": "Pisano",
            "provincia": "NO"
        }, {
            "comune": "Pogno",
            "provincia": "NO"
        }, {
            "comune": "Pombia",
            "provincia": "NO"
        }, {
            "comune": "Prato Sesia",
            "provincia": "NO"
        }, {
            "comune": "Recetto",
            "provincia": "NO"
        }, {
            "comune": "Romagnano Sesia",
            "provincia": "NO"
        }, {
            "comune": "Romentino",
            "provincia": "NO"
        }, {
            "comune": "San Maurizio d'Opaglio",
            "provincia": "NO"
        }, {
            "comune": "San Nazzaro Sesia",
            "provincia": "NO"
        }, {
            "comune": "San Pietro Mosezzo",
            "provincia": "NO"
        }, {
            "comune": "Sillavengo",
            "provincia": "NO"
        }, {
            "comune": "Sizzano",
            "provincia": "NO"
        }, {
            "comune": "Soriso",
            "provincia": "NO"
        }, {
            "comune": "Sozzago",
            "provincia": "NO"
        }, {
            "comune": "Suno",
            "provincia": "NO"
        }, {
            "comune": "Terdobbiate",
            "provincia": "NO"
        }, {
            "comune": "Tornaco",
            "provincia": "NO"
        }, {
            "comune": "Trecate",
            "provincia": "NO"
        }, {
            "comune": "Vaprio d'Agogna",
            "provincia": "NO"
        }, {
            "comune": "Varallo Pombia",
            "provincia": "NO"
        }, {
            "comune": "Veruno",
            "provincia": "NO"
        }, {
            "comune": "Vespolate",
            "provincia": "NO"
        }, {
            "comune": "Vicolungo",
            "provincia": "NO"
        }, {
            "comune": "Vinzaglio",
            "provincia": "NO"
        }, {
            "comune": "Acceglio",
            "provincia": "CN"
        }, {
            "comune": "Aisone",
            "provincia": "CN"
        }, {
            "comune": "Alba",
            "provincia": "CN"
        }, {
            "comune": "Albaretto della Torre",
            "provincia": "CN"
        }, {
            "comune": "Alto",
            "provincia": "CN"
        }, {
            "comune": "Argentera",
            "provincia": "CN"
        }, {
            "comune": "Arguello",
            "provincia": "CN"
        }, {
            "comune": "Bagnasco",
            "provincia": "CN"
        }, {
            "comune": "Bagnolo Piemonte",
            "provincia": "CN"
        }, {
            "comune": "Baldissero d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Barbaresco",
            "provincia": "CN"
        }, {
            "comune": "Barge",
            "provincia": "CN"
        }, {
            "comune": "Barolo",
            "provincia": "CN"
        }, {
            "comune": "Bastia Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Battifollo",
            "provincia": "CN"
        }, {
            "comune": "Beinette",
            "provincia": "CN"
        }, {
            "comune": "Bellino",
            "provincia": "CN"
        }, {
            "comune": "Belvedere Langhe",
            "provincia": "CN"
        }, {
            "comune": "Bene Vagienna",
            "provincia": "CN"
        }, {
            "comune": "Benevello",
            "provincia": "CN"
        }, {
            "comune": "Bergolo",
            "provincia": "CN"
        }, {
            "comune": "Bernezzo",
            "provincia": "CN"
        }, {
            "comune": "Bonvicino",
            "provincia": "CN"
        }, {
            "comune": "Borgomale",
            "provincia": "CN"
        }, {
            "comune": "Borgo San Dalmazzo",
            "provincia": "CN"
        }, {
            "comune": "Bosia",
            "provincia": "CN"
        }, {
            "comune": "Bossolasco",
            "provincia": "CN"
        }, {
            "comune": "Boves",
            "provincia": "CN"
        }, {
            "comune": "Bra",
            "provincia": "CN"
        }, {
            "comune": "Briaglia",
            "provincia": "CN"
        }, {
            "comune": "Briga Alta",
            "provincia": "CN"
        }, {
            "comune": "Brondello",
            "provincia": "CN"
        }, {
            "comune": "Brossasco",
            "provincia": "CN"
        }, {
            "comune": "Busca",
            "provincia": "CN"
        }, {
            "comune": "Camerana",
            "provincia": "CN"
        }, {
            "comune": "Camo",
            "provincia": "CN"
        }, {
            "comune": "Canale",
            "provincia": "CN"
        }, {
            "comune": "Canosio",
            "provincia": "CN"
        }, {
            "comune": "Caprauna",
            "provincia": "CN"
        }, {
            "comune": "Caraglio",
            "provincia": "CN"
        }, {
            "comune": "Caramagna Piemonte",
            "provincia": "CN"
        }, {
            "comune": "Cardè",
            "provincia": "CN"
        }, {
            "comune": "Carrù",
            "provincia": "CN"
        }, {
            "comune": "Cartignano",
            "provincia": "CN"
        }, {
            "comune": "Casalgrasso",
            "provincia": "CN"
        }, {
            "comune": "Castagnito",
            "provincia": "CN"
        }, {
            "comune": "Casteldelfino",
            "provincia": "CN"
        }, {
            "comune": "Castellar",
            "provincia": "CN"
        }, {
            "comune": "Castelletto Stura",
            "provincia": "CN"
        }, {
            "comune": "Castelletto Uzzone",
            "provincia": "CN"
        }, {
            "comune": "Castellinaldo d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Castellino Tanaro",
            "provincia": "CN"
        }, {
            "comune": "Castelmagno",
            "provincia": "CN"
        }, {
            "comune": "Castelnuovo di Ceva",
            "provincia": "CN"
        }, {
            "comune": "Castiglione Falletto",
            "provincia": "CN"
        }, {
            "comune": "Castiglione Tinella",
            "provincia": "CN"
        }, {
            "comune": "Castino",
            "provincia": "CN"
        }, {
            "comune": "Cavallerleone",
            "provincia": "CN"
        }, {
            "comune": "Cavallermaggiore",
            "provincia": "CN"
        }, {
            "comune": "Celle di Macra",
            "provincia": "CN"
        }, {
            "comune": "Centallo",
            "provincia": "CN"
        }, {
            "comune": "Ceresole Alba",
            "provincia": "CN"
        }, {
            "comune": "Cerretto Langhe",
            "provincia": "CN"
        }, {
            "comune": "Cervasca",
            "provincia": "CN"
        }, {
            "comune": "Cervere",
            "provincia": "CN"
        }, {
            "comune": "Ceva",
            "provincia": "CN"
        }, {
            "comune": "Cherasco",
            "provincia": "CN"
        }, {
            "comune": "Chiusa di Pesio",
            "provincia": "CN"
        }, {
            "comune": "Cigliè",
            "provincia": "CN"
        }, {
            "comune": "Cissone",
            "provincia": "CN"
        }, {
            "comune": "Clavesana",
            "provincia": "CN"
        }, {
            "comune": "Corneliano d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Cortemilia",
            "provincia": "CN"
        }, {
            "comune": "Cossano Belbo",
            "provincia": "CN"
        }, {
            "comune": "Costigliole Saluzzo",
            "provincia": "CN"
        }, {
            "comune": "Cravanzana",
            "provincia": "CN"
        }, {
            "comune": "Crissolo",
            "provincia": "CN"
        }, {
            "comune": "Cuneo",
            "provincia": "CN"
        }, {
            "comune": "Demonte",
            "provincia": "CN"
        }, {
            "comune": "Diano d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Dogliani",
            "provincia": "CN"
        }, {
            "comune": "Dronero",
            "provincia": "CN"
        }, {
            "comune": "Elva",
            "provincia": "CN"
        }, {
            "comune": "Entracque",
            "provincia": "CN"
        }, {
            "comune": "Envie",
            "provincia": "CN"
        }, {
            "comune": "Farigliano",
            "provincia": "CN"
        }, {
            "comune": "Faule",
            "provincia": "CN"
        }, {
            "comune": "Feisoglio",
            "provincia": "CN"
        }, {
            "comune": "Fossano",
            "provincia": "CN"
        }, {
            "comune": "Frabosa Soprana",
            "provincia": "CN"
        }, {
            "comune": "Frabosa Sottana",
            "provincia": "CN"
        }, {
            "comune": "Frassino",
            "provincia": "CN"
        }, {
            "comune": "Gaiola",
            "provincia": "CN"
        }, {
            "comune": "Gambasca",
            "provincia": "CN"
        }, {
            "comune": "Garessio",
            "provincia": "CN"
        }, {
            "comune": "Genola",
            "provincia": "CN"
        }, {
            "comune": "Gorzegno",
            "provincia": "CN"
        }, {
            "comune": "Gottasecca",
            "provincia": "CN"
        }, {
            "comune": "Govone",
            "provincia": "CN"
        }, {
            "comune": "Grinzane Cavour",
            "provincia": "CN"
        }, {
            "comune": "Guarene",
            "provincia": "CN"
        }, {
            "comune": "Igliano",
            "provincia": "CN"
        }, {
            "comune": "Isasca",
            "provincia": "CN"
        }, {
            "comune": "Lagnasco",
            "provincia": "CN"
        }, {
            "comune": "La Morra",
            "provincia": "CN"
        }, {
            "comune": "Lequio Berria",
            "provincia": "CN"
        }, {
            "comune": "Lequio Tanaro",
            "provincia": "CN"
        }, {
            "comune": "Lesegno",
            "provincia": "CN"
        }, {
            "comune": "Levice",
            "provincia": "CN"
        }, {
            "comune": "Limone Piemonte",
            "provincia": "CN"
        }, {
            "comune": "Lisio",
            "provincia": "CN"
        }, {
            "comune": "Macra",
            "provincia": "CN"
        }, {
            "comune": "Magliano Alfieri",
            "provincia": "CN"
        }, {
            "comune": "Magliano Alpi",
            "provincia": "CN"
        }, {
            "comune": "Mango",
            "provincia": "CN"
        }, {
            "comune": "Manta",
            "provincia": "CN"
        }, {
            "comune": "Marene",
            "provincia": "CN"
        }, {
            "comune": "Margarita",
            "provincia": "CN"
        }, {
            "comune": "Marmora",
            "provincia": "CN"
        }, {
            "comune": "Marsaglia",
            "provincia": "CN"
        }, {
            "comune": "Martiniana Po",
            "provincia": "CN"
        }, {
            "comune": "Melle",
            "provincia": "CN"
        }, {
            "comune": "Moiola",
            "provincia": "CN"
        }, {
            "comune": "Mombarcaro",
            "provincia": "CN"
        }, {
            "comune": "Mombasiglio",
            "provincia": "CN"
        }, {
            "comune": "Monastero di Vasco",
            "provincia": "CN"
        }, {
            "comune": "Monasterolo Casotto",
            "provincia": "CN"
        }, {
            "comune": "Monasterolo di Savigliano",
            "provincia": "CN"
        }, {
            "comune": "Monchiero",
            "provincia": "CN"
        }, {
            "comune": "Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Monesiglio",
            "provincia": "CN"
        }, {
            "comune": "Monforte d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Montà",
            "provincia": "CN"
        }, {
            "comune": "Montaldo di Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Montaldo Roero",
            "provincia": "CN"
        }, {
            "comune": "Montanera",
            "provincia": "CN"
        }, {
            "comune": "Montelupo Albese",
            "provincia": "CN"
        }, {
            "comune": "Montemale di Cuneo",
            "provincia": "CN"
        }, {
            "comune": "Monterosso Grana",
            "provincia": "CN"
        }, {
            "comune": "Monteu Roero",
            "provincia": "CN"
        }, {
            "comune": "Montezemolo",
            "provincia": "CN"
        }, {
            "comune": "Monticello d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Moretta",
            "provincia": "CN"
        }, {
            "comune": "Morozzo",
            "provincia": "CN"
        }, {
            "comune": "Murazzano",
            "provincia": "CN"
        }, {
            "comune": "Murello",
            "provincia": "CN"
        }, {
            "comune": "Narzole",
            "provincia": "CN"
        }, {
            "comune": "Neive",
            "provincia": "CN"
        }, {
            "comune": "Neviglie",
            "provincia": "CN"
        }, {
            "comune": "Niella Belbo",
            "provincia": "CN"
        }, {
            "comune": "Niella Tanaro",
            "provincia": "CN"
        }, {
            "comune": "Novello",
            "provincia": "CN"
        }, {
            "comune": "Nucetto",
            "provincia": "CN"
        }, {
            "comune": "Oncino",
            "provincia": "CN"
        }, {
            "comune": "Ormea",
            "provincia": "CN"
        }, {
            "comune": "Ostana",
            "provincia": "CN"
        }, {
            "comune": "Paesana",
            "provincia": "CN"
        }, {
            "comune": "Pagno",
            "provincia": "CN"
        }, {
            "comune": "Pamparato",
            "provincia": "CN"
        }, {
            "comune": "Paroldo",
            "provincia": "CN"
        }, {
            "comune": "Perletto",
            "provincia": "CN"
        }, {
            "comune": "Perlo",
            "provincia": "CN"
        }, {
            "comune": "Peveragno",
            "provincia": "CN"
        }, {
            "comune": "Pezzolo Valle Uzzone",
            "provincia": "CN"
        }, {
            "comune": "Pianfei",
            "provincia": "CN"
        }, {
            "comune": "Piasco",
            "provincia": "CN"
        }, {
            "comune": "Pietraporzio",
            "provincia": "CN"
        }, {
            "comune": "Piobesi d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Piozzo",
            "provincia": "CN"
        }, {
            "comune": "Pocapaglia",
            "provincia": "CN"
        }, {
            "comune": "Polonghera",
            "provincia": "CN"
        }, {
            "comune": "Pontechianale",
            "provincia": "CN"
        }, {
            "comune": "Pradleves",
            "provincia": "CN"
        }, {
            "comune": "Prazzo",
            "provincia": "CN"
        }, {
            "comune": "Priero",
            "provincia": "CN"
        }, {
            "comune": "Priocca",
            "provincia": "CN"
        }, {
            "comune": "Priola",
            "provincia": "CN"
        }, {
            "comune": "Prunetto",
            "provincia": "CN"
        }, {
            "comune": "Racconigi",
            "provincia": "CN"
        }, {
            "comune": "Revello",
            "provincia": "CN"
        }, {
            "comune": "Rifreddo",
            "provincia": "CN"
        }, {
            "comune": "Rittana",
            "provincia": "CN"
        }, {
            "comune": "Roaschia",
            "provincia": "CN"
        }, {
            "comune": "Roascio",
            "provincia": "CN"
        }, {
            "comune": "Robilante",
            "provincia": "CN"
        }, {
            "comune": "Roburent",
            "provincia": "CN"
        }, {
            "comune": "Roccabruna",
            "provincia": "CN"
        }, {
            "comune": "Rocca Cigliè",
            "provincia": "CN"
        }, {
            "comune": "Rocca de' Baldi",
            "provincia": "CN"
        }, {
            "comune": "Roccaforte Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Roccasparvera",
            "provincia": "CN"
        }, {
            "comune": "Roccavione",
            "provincia": "CN"
        }, {
            "comune": "Rocchetta Belbo",
            "provincia": "CN"
        }, {
            "comune": "Roddi",
            "provincia": "CN"
        }, {
            "comune": "Roddino",
            "provincia": "CN"
        }, {
            "comune": "Rodello",
            "provincia": "CN"
        }, {
            "comune": "Rossana",
            "provincia": "CN"
        }, {
            "comune": "Ruffia",
            "provincia": "CN"
        }, {
            "comune": "Sale delle Langhe",
            "provincia": "CN"
        }, {
            "comune": "Sale San Giovanni",
            "provincia": "CN"
        }, {
            "comune": "Saliceto",
            "provincia": "CN"
        }, {
            "comune": "Salmour",
            "provincia": "CN"
        }, {
            "comune": "Saluzzo",
            "provincia": "CN"
        }, {
            "comune": "Sambuco",
            "provincia": "CN"
        }, {
            "comune": "Sampeyre",
            "provincia": "CN"
        }, {
            "comune": "San Benedetto Belbo",
            "provincia": "CN"
        }, {
            "comune": "San Damiano Macra",
            "provincia": "CN"
        }, {
            "comune": "Sanfrè",
            "provincia": "CN"
        }, {
            "comune": "Sanfront",
            "provincia": "CN"
        }, {
            "comune": "San Michele Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Sant'Albano Stura",
            "provincia": "CN"
        }, {
            "comune": "Santa Vittoria d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Santo Stefano Belbo",
            "provincia": "CN"
        }, {
            "comune": "Santo Stefano Roero",
            "provincia": "CN"
        }, {
            "comune": "Savigliano",
            "provincia": "CN"
        }, {
            "comune": "Scagnello",
            "provincia": "CN"
        }, {
            "comune": "Scarnafigi",
            "provincia": "CN"
        }, {
            "comune": "Serralunga d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Serravalle Langhe",
            "provincia": "CN"
        }, {
            "comune": "Sinio",
            "provincia": "CN"
        }, {
            "comune": "Somano",
            "provincia": "CN"
        }, {
            "comune": "Sommariva del Bosco",
            "provincia": "CN"
        }, {
            "comune": "Sommariva Perno",
            "provincia": "CN"
        }, {
            "comune": "Stroppo",
            "provincia": "CN"
        }, {
            "comune": "Tarantasca",
            "provincia": "CN"
        }, {
            "comune": "Torre Bormida",
            "provincia": "CN"
        }, {
            "comune": "Torre Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Torre San Giorgio",
            "provincia": "CN"
        }, {
            "comune": "Torresina",
            "provincia": "CN"
        }, {
            "comune": "Treiso",
            "provincia": "CN"
        }, {
            "comune": "Trezzo Tinella",
            "provincia": "CN"
        }, {
            "comune": "Trinità",
            "provincia": "CN"
        }, {
            "comune": "Valdieri",
            "provincia": "CN"
        }, {
            "comune": "Valgrana",
            "provincia": "CN"
        }, {
            "comune": "Valloriate",
            "provincia": "CN"
        }, {
            "comune": "Valmala",
            "provincia": "CN"
        }, {
            "comune": "Venasca",
            "provincia": "CN"
        }, {
            "comune": "Verduno",
            "provincia": "CN"
        }, {
            "comune": "Vernante",
            "provincia": "CN"
        }, {
            "comune": "Verzuolo",
            "provincia": "CN"
        }, {
            "comune": "Vezza d'Alba",
            "provincia": "CN"
        }, {
            "comune": "Vicoforte",
            "provincia": "CN"
        }, {
            "comune": "Vignolo",
            "provincia": "CN"
        }, {
            "comune": "Villafalletto",
            "provincia": "CN"
        }, {
            "comune": "Villanova Mondovì",
            "provincia": "CN"
        }, {
            "comune": "Villanova Solaro",
            "provincia": "CN"
        }, {
            "comune": "Villar San Costanzo",
            "provincia": "CN"
        }, {
            "comune": "Vinadio",
            "provincia": "CN"
        }, {
            "comune": "Viola",
            "provincia": "CN"
        }, {
            "comune": "Vottignasco",
            "provincia": "CN"
        }, {
            "comune": "Agliano Terme",
            "provincia": "AT"
        }, {
            "comune": "Albugnano",
            "provincia": "AT"
        }, {
            "comune": "Antignano",
            "provincia": "AT"
        }, {
            "comune": "Aramengo",
            "provincia": "AT"
        }, {
            "comune": "Asti",
            "provincia": "AT"
        }, {
            "comune": "Azzano d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Baldichieri d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Belveglio",
            "provincia": "AT"
        }, {
            "comune": "Berzano di San Pietro",
            "provincia": "AT"
        }, {
            "comune": "Bruno",
            "provincia": "AT"
        }, {
            "comune": "Bubbio",
            "provincia": "AT"
        }, {
            "comune": "Buttigliera d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Calamandrana",
            "provincia": "AT"
        }, {
            "comune": "Calliano",
            "provincia": "AT"
        }, {
            "comune": "Calosso",
            "provincia": "AT"
        }, {
            "comune": "Camerano Casasco",
            "provincia": "AT"
        }, {
            "comune": "Canelli",
            "provincia": "AT"
        }, {
            "comune": "Cantarana",
            "provincia": "AT"
        }, {
            "comune": "Capriglio",
            "provincia": "AT"
        }, {
            "comune": "Casorzo",
            "provincia": "AT"
        }, {
            "comune": "Cassinasco",
            "provincia": "AT"
        }, {
            "comune": "Castagnole delle Lanze",
            "provincia": "AT"
        }, {
            "comune": "Castagnole Monferrato",
            "provincia": "AT"
        }, {
            "comune": "Castel Boglione",
            "provincia": "AT"
        }, {
            "comune": "Castell'Alfero",
            "provincia": "AT"
        }, {
            "comune": "Castellero",
            "provincia": "AT"
        }, {
            "comune": "Castelletto Molina",
            "provincia": "AT"
        }, {
            "comune": "Castello di Annone",
            "provincia": "AT"
        }, {
            "comune": "Castelnuovo Belbo",
            "provincia": "AT"
        }, {
            "comune": "Castelnuovo Calcea",
            "provincia": "AT"
        }, {
            "comune": "Castelnuovo Don Bosco",
            "provincia": "AT"
        }, {
            "comune": "Castel Rocchero",
            "provincia": "AT"
        }, {
            "comune": "Cellarengo",
            "provincia": "AT"
        }, {
            "comune": "Celle Enomondo",
            "provincia": "AT"
        }, {
            "comune": "Cerreto d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Cerro Tanaro",
            "provincia": "AT"
        }, {
            "comune": "Cessole",
            "provincia": "AT"
        }, {
            "comune": "Chiusano d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Cinaglio",
            "provincia": "AT"
        }, {
            "comune": "Cisterna d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Coazzolo",
            "provincia": "AT"
        }, {
            "comune": "Cocconato",
            "provincia": "AT"
        }, {
            "comune": "Corsione",
            "provincia": "AT"
        }, {
            "comune": "Cortandone",
            "provincia": "AT"
        }, {
            "comune": "Cortanze",
            "provincia": "AT"
        }, {
            "comune": "Cortazzone",
            "provincia": "AT"
        }, {
            "comune": "Cortiglione",
            "provincia": "AT"
        }, {
            "comune": "Cossombrato",
            "provincia": "AT"
        }, {
            "comune": "Costigliole d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Cunico",
            "provincia": "AT"
        }, {
            "comune": "Dusino San Michele",
            "provincia": "AT"
        }, {
            "comune": "Ferrere",
            "provincia": "AT"
        }, {
            "comune": "Fontanile",
            "provincia": "AT"
        }, {
            "comune": "Frinco",
            "provincia": "AT"
        }, {
            "comune": "Grana",
            "provincia": "AT"
        }, {
            "comune": "Grazzano Badoglio",
            "provincia": "AT"
        }, {
            "comune": "Incisa Scapaccino",
            "provincia": "AT"
        }, {
            "comune": "Isola d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Loazzolo",
            "provincia": "AT"
        }, {
            "comune": "Maranzana",
            "provincia": "AT"
        }, {
            "comune": "Maretto",
            "provincia": "AT"
        }, {
            "comune": "Moasca",
            "provincia": "AT"
        }, {
            "comune": "Mombaldone",
            "provincia": "AT"
        }, {
            "comune": "Mombaruzzo",
            "provincia": "AT"
        }, {
            "comune": "Mombercelli",
            "provincia": "AT"
        }, {
            "comune": "Monale",
            "provincia": "AT"
        }, {
            "comune": "Monastero Bormida",
            "provincia": "AT"
        }, {
            "comune": "Moncalvo",
            "provincia": "AT"
        }, {
            "comune": "Moncucco Torinese",
            "provincia": "AT"
        }, {
            "comune": "Mongardino",
            "provincia": "AT"
        }, {
            "comune": "Montabone",
            "provincia": "AT"
        }, {
            "comune": "Montafia",
            "provincia": "AT"
        }, {
            "comune": "Montaldo Scarampi",
            "provincia": "AT"
        }, {
            "comune": "Montechiaro d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Montegrosso d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Montemagno",
            "provincia": "AT"
        }, {
            "comune": "Moransengo",
            "provincia": "AT"
        }, {
            "comune": "Nizza Monferrato",
            "provincia": "AT"
        }, {
            "comune": "Olmo Gentile",
            "provincia": "AT"
        }, {
            "comune": "Passerano Marmorito",
            "provincia": "AT"
        }, {
            "comune": "Penango",
            "provincia": "AT"
        }, {
            "comune": "Piea",
            "provincia": "AT"
        }, {
            "comune": "Pino d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Piovà Massaia",
            "provincia": "AT"
        }, {
            "comune": "Portacomaro",
            "provincia": "AT"
        }, {
            "comune": "Quaranti",
            "provincia": "AT"
        }, {
            "comune": "Refrancore",
            "provincia": "AT"
        }, {
            "comune": "Revigliasco d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Roatto",
            "provincia": "AT"
        }, {
            "comune": "Robella",
            "provincia": "AT"
        }, {
            "comune": "Rocca d'Arazzo",
            "provincia": "AT"
        }, {
            "comune": "Roccaverano",
            "provincia": "AT"
        }, {
            "comune": "Rocchetta Palafea",
            "provincia": "AT"
        }, {
            "comune": "Rocchetta Tanaro",
            "provincia": "AT"
        }, {
            "comune": "San Damiano d'Asti",
            "provincia": "AT"
        }, {
            "comune": "San Giorgio Scarampi",
            "provincia": "AT"
        }, {
            "comune": "San Martino Alfieri",
            "provincia": "AT"
        }, {
            "comune": "San Marzano Oliveto",
            "provincia": "AT"
        }, {
            "comune": "San Paolo Solbrito",
            "provincia": "AT"
        }, {
            "comune": "Scurzolengo",
            "provincia": "AT"
        }, {
            "comune": "Serole",
            "provincia": "AT"
        }, {
            "comune": "Sessame",
            "provincia": "AT"
        }, {
            "comune": "Settime",
            "provincia": "AT"
        }, {
            "comune": "Soglio",
            "provincia": "AT"
        }, {
            "comune": "Tigliole",
            "provincia": "AT"
        }, {
            "comune": "Tonco",
            "provincia": "AT"
        }, {
            "comune": "Tonengo",
            "provincia": "AT"
        }, {
            "comune": "Vaglio Serra",
            "provincia": "AT"
        }, {
            "comune": "Valfenera",
            "provincia": "AT"
        }, {
            "comune": "Vesime",
            "provincia": "AT"
        }, {
            "comune": "Viale",
            "provincia": "AT"
        }, {
            "comune": "Viarigi",
            "provincia": "AT"
        }, {
            "comune": "Vigliano d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Villafranca d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Villanova d'Asti",
            "provincia": "AT"
        }, {
            "comune": "Villa San Secondo",
            "provincia": "AT"
        }, {
            "comune": "Vinchio",
            "provincia": "AT"
        }, {
            "comune": "Montiglio Monferrato",
            "provincia": "AT"
        }, {
            "comune": "Acqui Terme",
            "provincia": "AL"
        }, {
            "comune": "Albera Ligure",
            "provincia": "AL"
        }, {
            "comune": "Alessandria",
            "provincia": "AL"
        }, {
            "comune": "Alfiano Natta",
            "provincia": "AL"
        }, {
            "comune": "Alice Bel Colle",
            "provincia": "AL"
        }, {
            "comune": "Alluvioni Cambiò",
            "provincia": "AL"
        }, {
            "comune": "Altavilla Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Alzano Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Arquata Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Avolasca",
            "provincia": "AL"
        }, {
            "comune": "Balzola",
            "provincia": "AL"
        }, {
            "comune": "Basaluzzo",
            "provincia": "AL"
        }, {
            "comune": "Bassignana",
            "provincia": "AL"
        }, {
            "comune": "Belforte Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Bergamasco",
            "provincia": "AL"
        }, {
            "comune": "Berzano di Tortona",
            "provincia": "AL"
        }, {
            "comune": "Bistagno",
            "provincia": "AL"
        }, {
            "comune": "Borghetto di Borbera",
            "provincia": "AL"
        }, {
            "comune": "Borgoratto Alessandrino",
            "provincia": "AL"
        }, {
            "comune": "Borgo San Martino",
            "provincia": "AL"
        }, {
            "comune": "Bosco Marengo",
            "provincia": "AL"
        }, {
            "comune": "Bosio",
            "provincia": "AL"
        }, {
            "comune": "Bozzole",
            "provincia": "AL"
        }, {
            "comune": "Brignano-Frascata",
            "provincia": "AL"
        }, {
            "comune": "Cabella Ligure",
            "provincia": "AL"
        }, {
            "comune": "Camagna Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Camino",
            "provincia": "AL"
        }, {
            "comune": "Cantalupo Ligure",
            "provincia": "AL"
        }, {
            "comune": "Capriata d'Orba",
            "provincia": "AL"
        }, {
            "comune": "Carbonara Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Carentino",
            "provincia": "AL"
        }, {
            "comune": "Carezzano",
            "provincia": "AL"
        }, {
            "comune": "Carpeneto",
            "provincia": "AL"
        }, {
            "comune": "Carrega Ligure",
            "provincia": "AL"
        }, {
            "comune": "Carrosio",
            "provincia": "AL"
        }, {
            "comune": "Cartosio",
            "provincia": "AL"
        }, {
            "comune": "Casal Cermelli",
            "provincia": "AL"
        }, {
            "comune": "Casaleggio Boiro",
            "provincia": "AL"
        }, {
            "comune": "Casale Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Casalnoceto",
            "provincia": "AL"
        }, {
            "comune": "Casasco",
            "provincia": "AL"
        }, {
            "comune": "Cassano Spinola",
            "provincia": "AL"
        }, {
            "comune": "Cassine",
            "provincia": "AL"
        }, {
            "comune": "Cassinelle",
            "provincia": "AL"
        }, {
            "comune": "Castellania",
            "provincia": "AL"
        }, {
            "comune": "Castellar Guidobono",
            "provincia": "AL"
        }, {
            "comune": "Castellazzo Bormida",
            "provincia": "AL"
        }, {
            "comune": "Castelletto d'Erro",
            "provincia": "AL"
        }, {
            "comune": "Castelletto d'Orba",
            "provincia": "AL"
        }, {
            "comune": "Castelletto Merli",
            "provincia": "AL"
        }, {
            "comune": "Castelletto Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Castelnuovo Bormida",
            "provincia": "AL"
        }, {
            "comune": "Castelnuovo Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Castelspina",
            "provincia": "AL"
        }, {
            "comune": "Cavatore",
            "provincia": "AL"
        }, {
            "comune": "Cella Monte",
            "provincia": "AL"
        }, {
            "comune": "Cereseto",
            "provincia": "AL"
        }, {
            "comune": "Cerreto Grue",
            "provincia": "AL"
        }, {
            "comune": "Cerrina Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Coniolo",
            "provincia": "AL"
        }, {
            "comune": "Conzano",
            "provincia": "AL"
        }, {
            "comune": "Costa Vescovato",
            "provincia": "AL"
        }, {
            "comune": "Cremolino",
            "provincia": "AL"
        }, {
            "comune": "Cuccaro Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Denice",
            "provincia": "AL"
        }, {
            "comune": "Dernice",
            "provincia": "AL"
        }, {
            "comune": "Fabbrica Curone",
            "provincia": "AL"
        }, {
            "comune": "Felizzano",
            "provincia": "AL"
        }, {
            "comune": "Fraconalto",
            "provincia": "AL"
        }, {
            "comune": "Francavilla Bisio",
            "provincia": "AL"
        }, {
            "comune": "Frascaro",
            "provincia": "AL"
        }, {
            "comune": "Frassinello Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Frassineto Po",
            "provincia": "AL"
        }, {
            "comune": "Fresonara",
            "provincia": "AL"
        }, {
            "comune": "Frugarolo",
            "provincia": "AL"
        }, {
            "comune": "Fubine Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Gabiano",
            "provincia": "AL"
        }, {
            "comune": "Gamalero",
            "provincia": "AL"
        }, {
            "comune": "Garbagna",
            "provincia": "AL"
        }, {
            "comune": "Gavazzana",
            "provincia": "AL"
        }, {
            "comune": "Gavi",
            "provincia": "AL"
        }, {
            "comune": "Giarole",
            "provincia": "AL"
        }, {
            "comune": "Gremiasco",
            "provincia": "AL"
        }, {
            "comune": "Grognardo",
            "provincia": "AL"
        }, {
            "comune": "Grondona",
            "provincia": "AL"
        }, {
            "comune": "Guazzora",
            "provincia": "AL"
        }, {
            "comune": "Isola Sant'Antonio",
            "provincia": "AL"
        }, {
            "comune": "Lerma",
            "provincia": "AL"
        }, {
            "comune": "Lu",
            "provincia": "AL"
        }, {
            "comune": "Malvicino",
            "provincia": "AL"
        }, {
            "comune": "Masio",
            "provincia": "AL"
        }, {
            "comune": "Melazzo",
            "provincia": "AL"
        }, {
            "comune": "Merana",
            "provincia": "AL"
        }, {
            "comune": "Mirabello Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Molare",
            "provincia": "AL"
        }, {
            "comune": "Molino dei Torti",
            "provincia": "AL"
        }, {
            "comune": "Mombello Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Momperone",
            "provincia": "AL"
        }, {
            "comune": "Moncestino",
            "provincia": "AL"
        }, {
            "comune": "Mongiardino Ligure",
            "provincia": "AL"
        }, {
            "comune": "Monleale",
            "provincia": "AL"
        }, {
            "comune": "Montacuto",
            "provincia": "AL"
        }, {
            "comune": "Montaldeo",
            "provincia": "AL"
        }, {
            "comune": "Montaldo Bormida",
            "provincia": "AL"
        }, {
            "comune": "Montecastello",
            "provincia": "AL"
        }, {
            "comune": "Montechiaro d'Acqui",
            "provincia": "AL"
        }, {
            "comune": "Montegioco",
            "provincia": "AL"
        }, {
            "comune": "Montemarzino",
            "provincia": "AL"
        }, {
            "comune": "Morano sul Po",
            "provincia": "AL"
        }, {
            "comune": "Morbello",
            "provincia": "AL"
        }, {
            "comune": "Mornese",
            "provincia": "AL"
        }, {
            "comune": "Morsasco",
            "provincia": "AL"
        }, {
            "comune": "Murisengo",
            "provincia": "AL"
        }, {
            "comune": "Novi Ligure",
            "provincia": "AL"
        }, {
            "comune": "Occimiano",
            "provincia": "AL"
        }, {
            "comune": "Odalengo Grande",
            "provincia": "AL"
        }, {
            "comune": "Odalengo Piccolo",
            "provincia": "AL"
        }, {
            "comune": "Olivola",
            "provincia": "AL"
        }, {
            "comune": "Orsara Bormida",
            "provincia": "AL"
        }, {
            "comune": "Ottiglio",
            "provincia": "AL"
        }, {
            "comune": "Ovada",
            "provincia": "AL"
        }, {
            "comune": "Oviglio",
            "provincia": "AL"
        }, {
            "comune": "Ozzano Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Paderna",
            "provincia": "AL"
        }, {
            "comune": "Pareto",
            "provincia": "AL"
        }, {
            "comune": "Parodi Ligure",
            "provincia": "AL"
        }, {
            "comune": "Pasturana",
            "provincia": "AL"
        }, {
            "comune": "Pecetto di Valenza",
            "provincia": "AL"
        }, {
            "comune": "Pietra Marazzi",
            "provincia": "AL"
        }, {
            "comune": "Piovera",
            "provincia": "AL"
        }, {
            "comune": "Pomaro Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Pontecurone",
            "provincia": "AL"
        }, {
            "comune": "Pontestura",
            "provincia": "AL"
        }, {
            "comune": "Ponti",
            "provincia": "AL"
        }, {
            "comune": "Ponzano Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Ponzone",
            "provincia": "AL"
        }, {
            "comune": "Pozzol Groppo",
            "provincia": "AL"
        }, {
            "comune": "Pozzolo Formigaro",
            "provincia": "AL"
        }, {
            "comune": "Prasco",
            "provincia": "AL"
        }, {
            "comune": "Predosa",
            "provincia": "AL"
        }, {
            "comune": "Quargnento",
            "provincia": "AL"
        }, {
            "comune": "Quattordio",
            "provincia": "AL"
        }, {
            "comune": "Ricaldone",
            "provincia": "AL"
        }, {
            "comune": "Rivalta Bormida",
            "provincia": "AL"
        }, {
            "comune": "Rivarone",
            "provincia": "AL"
        }, {
            "comune": "Roccaforte Ligure",
            "provincia": "AL"
        }, {
            "comune": "Rocca Grimalda",
            "provincia": "AL"
        }, {
            "comune": "Rocchetta Ligure",
            "provincia": "AL"
        }, {
            "comune": "Rosignano Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Sala Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Sale",
            "provincia": "AL"
        }, {
            "comune": "San Cristoforo",
            "provincia": "AL"
        }, {
            "comune": "San Giorgio Monferrato",
            "provincia": "AL"
        }, {
            "comune": "San Salvatore Monferrato",
            "provincia": "AL"
        }, {
            "comune": "San Sebastiano Curone",
            "provincia": "AL"
        }, {
            "comune": "Sant'Agata Fossili",
            "provincia": "AL"
        }, {
            "comune": "Sardigliano",
            "provincia": "AL"
        }, {
            "comune": "Sarezzano",
            "provincia": "AL"
        }, {
            "comune": "Serralunga di Crea",
            "provincia": "AL"
        }, {
            "comune": "Serravalle Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Sezzadio",
            "provincia": "AL"
        }, {
            "comune": "Silvano d'Orba",
            "provincia": "AL"
        }, {
            "comune": "Solero",
            "provincia": "AL"
        }, {
            "comune": "Solonghello",
            "provincia": "AL"
        }, {
            "comune": "Spigno Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Spineto Scrivia",
            "provincia": "AL"
        }, {
            "comune": "Stazzano",
            "provincia": "AL"
        }, {
            "comune": "Strevi",
            "provincia": "AL"
        }, {
            "comune": "Tagliolo Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Tassarolo",
            "provincia": "AL"
        }, {
            "comune": "Terruggia",
            "provincia": "AL"
        }, {
            "comune": "Terzo",
            "provincia": "AL"
        }, {
            "comune": "Ticineto",
            "provincia": "AL"
        }, {
            "comune": "Tortona",
            "provincia": "AL"
        }, {
            "comune": "Treville",
            "provincia": "AL"
        }, {
            "comune": "Trisobbio",
            "provincia": "AL"
        }, {
            "comune": "Valenza",
            "provincia": "AL"
        }, {
            "comune": "Valmacca",
            "provincia": "AL"
        }, {
            "comune": "Vignale Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Vignole Borbera",
            "provincia": "AL"
        }, {
            "comune": "Viguzzolo",
            "provincia": "AL"
        }, {
            "comune": "Villadeati",
            "provincia": "AL"
        }, {
            "comune": "Villalvernia",
            "provincia": "AL"
        }, {
            "comune": "Villamiroglio",
            "provincia": "AL"
        }, {
            "comune": "Villanova Monferrato",
            "provincia": "AL"
        }, {
            "comune": "Villaromagnano",
            "provincia": "AL"
        }, {
            "comune": "Visone",
            "provincia": "AL"
        }, {
            "comune": "Volpedo",
            "provincia": "AL"
        }, {
            "comune": "Volpeglino",
            "provincia": "AL"
        }, {
            "comune": "Voltaggio",
            "provincia": "AL"
        }, {
            "comune": "Allein",
            "provincia": "AO"
        }, {
            "comune": "Antey-Saint-Andrè",
            "provincia": "AO"
        }, {
            "comune": "Aosta",
            "provincia": "AO"
        }, {
            "comune": "Arnad",
            "provincia": "AO"
        }, {
            "comune": "Arvier",
            "provincia": "AO"
        }, {
            "comune": "Avise",
            "provincia": "AO"
        }, {
            "comune": "Ayas",
            "provincia": "AO"
        }, {
            "comune": "Aymavilles",
            "provincia": "AO"
        }, {
            "comune": "Bard",
            "provincia": "AO"
        }, {
            "comune": "Bionaz",
            "provincia": "AO"
        }, {
            "comune": "Brissogne",
            "provincia": "AO"
        }, {
            "comune": "Brusson",
            "provincia": "AO"
        }, {
            "comune": "Challand-Saint-Anselme",
            "provincia": "AO"
        }, {
            "comune": "Challand-Saint-Victor",
            "provincia": "AO"
        }, {
            "comune": "Chambave",
            "provincia": "AO"
        }, {
            "comune": "Chamois",
            "provincia": "AO"
        }, {
            "comune": "Champdepraz",
            "provincia": "AO"
        }, {
            "comune": "Champorcher",
            "provincia": "AO"
        }, {
            "comune": "Charvensod",
            "provincia": "AO"
        }, {
            "comune": "Chatillon",
            "provincia": "AO"
        }, {
            "comune": "Cogne",
            "provincia": "AO"
        }, {
            "comune": "Courmayeur",
            "provincia": "AO"
        }, {
            "comune": "Donnas",
            "provincia": "AO"
        }, {
            "comune": "Doues",
            "provincia": "AO"
        }, {
            "comune": "Emarèse",
            "provincia": "AO"
        }, {
            "comune": "Etroubles",
            "provincia": "AO"
        }, {
            "comune": "Fénis",
            "provincia": "AO"
        }, {
            "comune": "Fontainemore",
            "provincia": "AO"
        }, {
            "comune": "Gaby",
            "provincia": "AO"
        }, {
            "comune": "Gignod",
            "provincia": "AO"
        }, {
            "comune": "Gressan",
            "provincia": "AO"
        }, {
            "comune": "Gressoney-la-Trinitè",
            "provincia": "AO"
        }, {
            "comune": "Gressoney-Saint-Jean",
            "provincia": "AO"
        }, {
            "comune": "Hone",
            "provincia": "AO"
        }, {
            "comune": "Introd",
            "provincia": "AO"
        }, {
            "comune": "Issime",
            "provincia": "AO"
        }, {
            "comune": "Issogne",
            "provincia": "AO"
        }, {
            "comune": "Jovencan",
            "provincia": "AO"
        }, {
            "comune": "La Magdeleine",
            "provincia": "AO"
        }, {
            "comune": "La Salle",
            "provincia": "AO"
        }, {
            "comune": "La Thuile",
            "provincia": "AO"
        }, {
            "comune": "Lillianes",
            "provincia": "AO"
        }, {
            "comune": "Montjovet",
            "provincia": "AO"
        }, {
            "comune": "Morgex",
            "provincia": "AO"
        }, {
            "comune": "Nus",
            "provincia": "AO"
        }, {
            "comune": "Ollomont",
            "provincia": "AO"
        }, {
            "comune": "Oyace",
            "provincia": "AO"
        }, {
            "comune": "Perloz",
            "provincia": "AO"
        }, {
            "comune": "Pollein",
            "provincia": "AO"
        }, {
            "comune": "Pontboset",
            "provincia": "AO"
        }, {
            "comune": "Pontey",
            "provincia": "AO"
        }, {
            "comune": "Pont-Saint-Martin",
            "provincia": "AO"
        }, {
            "comune": "Prè-Saint-Didier",
            "provincia": "AO"
        }, {
            "comune": "Quart",
            "provincia": "AO"
        }, {
            "comune": "Rhemes-Notre-Dame",
            "provincia": "AO"
        }, {
            "comune": "Rhemes-Saint-Georges",
            "provincia": "AO"
        }, {
            "comune": "Roisan",
            "provincia": "AO"
        }, {
            "comune": "Saint-Christophe",
            "provincia": "AO"
        }, {
            "comune": "Saint-Denis",
            "provincia": "AO"
        }, {
            "comune": "Saint-Marcel",
            "provincia": "AO"
        }, {
            "comune": "Saint-Nicolas",
            "provincia": "AO"
        }, {
            "comune": "Saint-Oyen",
            "provincia": "AO"
        }, {
            "comune": "Saint-Pierre",
            "provincia": "AO"
        }, {
            "comune": "Saint-Rhémy-en-Bosses",
            "provincia": "AO"
        }, {
            "comune": "Saint-Vincent",
            "provincia": "AO"
        }, {
            "comune": "Sarre",
            "provincia": "AO"
        }, {
            "comune": "Torgnon",
            "provincia": "AO"
        }, {
            "comune": "Valgrisenche",
            "provincia": "AO"
        }, {
            "comune": "Valpelline",
            "provincia": "AO"
        }, {
            "comune": "Valsavarenche",
            "provincia": "AO"
        }, {
            "comune": "Valtournenche",
            "provincia": "AO"
        }, {
            "comune": "Verrayes",
            "provincia": "AO"
        }, {
            "comune": "Verrès",
            "provincia": "AO"
        }, {
            "comune": "Villeneuve",
            "provincia": "AO"
        }, {
            "comune": "Airole",
            "provincia": "IM"
        }, {
            "comune": "Apricale",
            "provincia": "IM"
        }, {
            "comune": "Aquila d'Arroscia",
            "provincia": "IM"
        }, {
            "comune": "Armo",
            "provincia": "IM"
        }, {
            "comune": "Aurigo",
            "provincia": "IM"
        }, {
            "comune": "Badalucco",
            "provincia": "IM"
        }, {
            "comune": "Bajardo",
            "provincia": "IM"
        }, {
            "comune": "Bordighera",
            "provincia": "IM"
        }, {
            "comune": "Borghetto d'Arroscia",
            "provincia": "IM"
        }, {
            "comune": "Borgomaro",
            "provincia": "IM"
        }, {
            "comune": "Camporosso",
            "provincia": "IM"
        }, {
            "comune": "Caravonica",
            "provincia": "IM"
        }, {
            "comune": "Carpasio",
            "provincia": "IM"
        }, {
            "comune": "Castellaro",
            "provincia": "IM"
        }, {
            "comune": "Castel Vittorio",
            "provincia": "IM"
        }, {
            "comune": "Ceriana",
            "provincia": "IM"
        }, {
            "comune": "Cervo",
            "provincia": "IM"
        }, {
            "comune": "Cesio",
            "provincia": "IM"
        }, {
            "comune": "Chiusanico",
            "provincia": "IM"
        }, {
            "comune": "Chiusavecchia",
            "provincia": "IM"
        }, {
            "comune": "Cipressa",
            "provincia": "IM"
        }, {
            "comune": "Civezza",
            "provincia": "IM"
        }, {
            "comune": "Cosio d'Arroscia",
            "provincia": "IM"
        }, {
            "comune": "Costarainera",
            "provincia": "IM"
        }, {
            "comune": "Diano Arentino",
            "provincia": "IM"
        }, {
            "comune": "Diano Castello",
            "provincia": "IM"
        }, {
            "comune": "Diano Marina",
            "provincia": "IM"
        }, {
            "comune": "Diano San Pietro",
            "provincia": "IM"
        }, {
            "comune": "Dolceacqua",
            "provincia": "IM"
        }, {
            "comune": "Dolcedo",
            "provincia": "IM"
        }, {
            "comune": "Imperia",
            "provincia": "IM"
        }, {
            "comune": "Isolabona",
            "provincia": "IM"
        }, {
            "comune": "Lucinasco",
            "provincia": "IM"
        }, {
            "comune": "Mendatica",
            "provincia": "IM"
        }, {
            "comune": "Molini di Triora",
            "provincia": "IM"
        }, {
            "comune": "Montalto Ligure",
            "provincia": "IM"
        }, {
            "comune": "Montegrosso Pian Latte",
            "provincia": "IM"
        }, {
            "comune": "Olivetta San Michele",
            "provincia": "IM"
        }, {
            "comune": "Ospedaletti",
            "provincia": "IM"
        }, {
            "comune": "Perinaldo",
            "provincia": "IM"
        }, {
            "comune": "Pietrabruna",
            "provincia": "IM"
        }, {
            "comune": "Pieve di Teco",
            "provincia": "IM"
        }, {
            "comune": "Pigna",
            "provincia": "IM"
        }, {
            "comune": "Pompeiana",
            "provincia": "IM"
        }, {
            "comune": "Pontedassio",
            "provincia": "IM"
        }, {
            "comune": "Pornassio",
            "provincia": "IM"
        }, {
            "comune": "Prelà",
            "provincia": "IM"
        }, {
            "comune": "Ranzo",
            "provincia": "IM"
        }, {
            "comune": "Rezzo",
            "provincia": "IM"
        }, {
            "comune": "Riva Ligure",
            "provincia": "IM"
        }, {
            "comune": "Rocchetta Nervina",
            "provincia": "IM"
        }, {
            "comune": "San Bartolomeo al Mare",
            "provincia": "IM"
        }, {
            "comune": "San Biagio della Cima",
            "provincia": "IM"
        }, {
            "comune": "San Lorenzo al Mare",
            "provincia": "IM"
        }, {
            "comune": "Sanremo",
            "provincia": "IM"
        }, {
            "comune": "Santo Stefano al Mare",
            "provincia": "IM"
        }, {
            "comune": "Seborga",
            "provincia": "IM"
        }, {
            "comune": "Soldano",
            "provincia": "IM"
        }, {
            "comune": "Taggia",
            "provincia": "IM"
        }, {
            "comune": "Terzorio",
            "provincia": "IM"
        }, {
            "comune": "Triora",
            "provincia": "IM"
        }, {
            "comune": "Vallebona",
            "provincia": "IM"
        }, {
            "comune": "Vallecrosia",
            "provincia": "IM"
        }, {
            "comune": "Vasia",
            "provincia": "IM"
        }, {
            "comune": "Ventimiglia",
            "provincia": "IM"
        }, {
            "comune": "Vessalico",
            "provincia": "IM"
        }, {
            "comune": "Villa Faraldi",
            "provincia": "IM"
        }, {
            "comune": "Alassio",
            "provincia": "SV"
        }, {
            "comune": "Albenga",
            "provincia": "SV"
        }, {
            "comune": "Albissola Marina",
            "provincia": "SV"
        }, {
            "comune": "Altare",
            "provincia": "SV"
        }, {
            "comune": "Andora",
            "provincia": "SV"
        }, {
            "comune": "Arnasco",
            "provincia": "SV"
        }, {
            "comune": "Balestrino",
            "provincia": "SV"
        }, {
            "comune": "Bardineto",
            "provincia": "SV"
        }, {
            "comune": "Bergeggi",
            "provincia": "SV"
        }, {
            "comune": "Boissano",
            "provincia": "SV"
        }, {
            "comune": "Borghetto Santo Spirito",
            "provincia": "SV"
        }, {
            "comune": "Borgio Verezzi",
            "provincia": "SV"
        }, {
            "comune": "Bormida",
            "provincia": "SV"
        }, {
            "comune": "Cairo Montenotte",
            "provincia": "SV"
        }, {
            "comune": "Calice Ligure",
            "provincia": "SV"
        }, {
            "comune": "Calizzano",
            "provincia": "SV"
        }, {
            "comune": "Carcare",
            "provincia": "SV"
        }, {
            "comune": "Casanova Lerrone",
            "provincia": "SV"
        }, {
            "comune": "Castelbianco",
            "provincia": "SV"
        }, {
            "comune": "Castelvecchio di Rocca Barbena",
            "provincia": "SV"
        }, {
            "comune": "Celle Ligure",
            "provincia": "SV"
        }, {
            "comune": "Cengio",
            "provincia": "SV"
        }, {
            "comune": "Ceriale",
            "provincia": "SV"
        }, {
            "comune": "Cisano sul Neva",
            "provincia": "SV"
        }, {
            "comune": "Cosseria",
            "provincia": "SV"
        }, {
            "comune": "Dego",
            "provincia": "SV"
        }, {
            "comune": "Erli",
            "provincia": "SV"
        }, {
            "comune": "Finale Ligure",
            "provincia": "SV"
        }, {
            "comune": "Garlenda",
            "provincia": "SV"
        }, {
            "comune": "Giustenice",
            "provincia": "SV"
        }, {
            "comune": "Giusvalla",
            "provincia": "SV"
        }, {
            "comune": "Laigueglia",
            "provincia": "SV"
        }, {
            "comune": "Loano",
            "provincia": "SV"
        }, {
            "comune": "Magliolo",
            "provincia": "SV"
        }, {
            "comune": "Mallare",
            "provincia": "SV"
        }, {
            "comune": "Massimino",
            "provincia": "SV"
        }, {
            "comune": "Millesimo",
            "provincia": "SV"
        }, {
            "comune": "Mioglia",
            "provincia": "SV"
        }, {
            "comune": "Murialdo",
            "provincia": "SV"
        }, {
            "comune": "Nasino",
            "provincia": "SV"
        }, {
            "comune": "Noli",
            "provincia": "SV"
        }, {
            "comune": "Onzo",
            "provincia": "SV"
        }, {
            "comune": "Orco Feglino",
            "provincia": "SV"
        }, {
            "comune": "Ortovero",
            "provincia": "SV"
        }, {
            "comune": "Osiglia",
            "provincia": "SV"
        }, {
            "comune": "Pallare",
            "provincia": "SV"
        }, {
            "comune": "Piana Crixia",
            "provincia": "SV"
        }, {
            "comune": "Pietra Ligure",
            "provincia": "SV"
        }, {
            "comune": "Plodio",
            "provincia": "SV"
        }, {
            "comune": "Pontinvrea",
            "provincia": "SV"
        }, {
            "comune": "Quiliano",
            "provincia": "SV"
        }, {
            "comune": "Rialto",
            "provincia": "SV"
        }, {
            "comune": "Roccavignale",
            "provincia": "SV"
        }, {
            "comune": "Sassello",
            "provincia": "SV"
        }, {
            "comune": "Savona",
            "provincia": "SV"
        }, {
            "comune": "Spotorno",
            "provincia": "SV"
        }, {
            "comune": "Stella",
            "provincia": "SV"
        }, {
            "comune": "Stellanello",
            "provincia": "SV"
        }, {
            "comune": "Testico",
            "provincia": "SV"
        }, {
            "comune": "Toirano",
            "provincia": "SV"
        }, {
            "comune": "Tovo San Giacomo",
            "provincia": "SV"
        }, {
            "comune": "Urbe",
            "provincia": "SV"
        }, {
            "comune": "Vado Ligure",
            "provincia": "SV"
        }, {
            "comune": "Varazze",
            "provincia": "SV"
        }, {
            "comune": "Vendone",
            "provincia": "SV"
        }, {
            "comune": "Vezzi Portio",
            "provincia": "SV"
        }, {
            "comune": "Villanova d'Albenga",
            "provincia": "SV"
        }, {
            "comune": "Zuccarello",
            "provincia": "SV"
        }, {
            "comune": "Arenzano",
            "provincia": "GE"
        }, {
            "comune": "Avegno",
            "provincia": "GE"
        }, {
            "comune": "Bargagli",
            "provincia": "GE"
        }, {
            "comune": "Bogliasco",
            "provincia": "GE"
        }, {
            "comune": "Borzonasca",
            "provincia": "GE"
        }, {
            "comune": "Busalla",
            "provincia": "GE"
        }, {
            "comune": "Camogli",
            "provincia": "GE"
        }, {
            "comune": "Campo Ligure",
            "provincia": "GE"
        }, {
            "comune": "Campomorone",
            "provincia": "GE"
        }, {
            "comune": "Carasco",
            "provincia": "GE"
        }, {
            "comune": "Casarza Ligure",
            "provincia": "GE"
        }, {
            "comune": "Casella",
            "provincia": "GE"
        }, {
            "comune": "Castiglione Chiavarese",
            "provincia": "GE"
        }, {
            "comune": "Ceranesi",
            "provincia": "GE"
        }, {
            "comune": "Chiavari",
            "provincia": "GE"
        }, {
            "comune": "Cicagna",
            "provincia": "GE"
        }, {
            "comune": "Cogoleto",
            "provincia": "GE"
        }, {
            "comune": "Cogorno",
            "provincia": "GE"
        }, {
            "comune": "Coreglia Ligure",
            "provincia": "GE"
        }, {
            "comune": "Crocefieschi",
            "provincia": "GE"
        }, {
            "comune": "Davagna",
            "provincia": "GE"
        }, {
            "comune": "Fascia",
            "provincia": "GE"
        }, {
            "comune": "Favale di Malvaro",
            "provincia": "GE"
        }, {
            "comune": "Fontanigorda",
            "provincia": "GE"
        }, {
            "comune": "Genova",
            "provincia": "GE"
        }, {
            "comune": "Gorreto",
            "provincia": "GE"
        }, {
            "comune": "Isola del Cantone",
            "provincia": "GE"
        }, {
            "comune": "Lavagna",
            "provincia": "GE"
        }, {
            "comune": "Leivi",
            "provincia": "GE"
        }, {
            "comune": "Lorsica",
            "provincia": "GE"
        }, {
            "comune": "Lumarzo",
            "provincia": "GE"
        }, {
            "comune": "Masone",
            "provincia": "GE"
        }, {
            "comune": "Mele",
            "provincia": "GE"
        }, {
            "comune": "Mezzanego",
            "provincia": "GE"
        }, {
            "comune": "Mignanego",
            "provincia": "GE"
        }, {
            "comune": "Moconesi",
            "provincia": "GE"
        }, {
            "comune": "Moneglia",
            "provincia": "GE"
        }, {
            "comune": "Montebruno",
            "provincia": "GE"
        }, {
            "comune": "Montoggio",
            "provincia": "GE"
        }, {
            "comune": "Ne",
            "provincia": "GE"
        }, {
            "comune": "Neirone",
            "provincia": "GE"
        }, {
            "comune": "Orero",
            "provincia": "GE"
        }, {
            "comune": "Pieve Ligure",
            "provincia": "GE"
        }, {
            "comune": "Portofino",
            "provincia": "GE"
        }, {
            "comune": "Propata",
            "provincia": "GE"
        }, {
            "comune": "Rapallo",
            "provincia": "GE"
        }, {
            "comune": "Recco",
            "provincia": "GE"
        }, {
            "comune": "Rezzoaglio",
            "provincia": "GE"
        }, {
            "comune": "Ronco Scrivia",
            "provincia": "GE"
        }, {
            "comune": "Rondanina",
            "provincia": "GE"
        }, {
            "comune": "Rossiglione",
            "provincia": "GE"
        }, {
            "comune": "Rovegno",
            "provincia": "GE"
        }, {
            "comune": "San Colombano Certenoli",
            "provincia": "GE"
        }, {
            "comune": "Santa Margherita Ligure",
            "provincia": "GE"
        }, {
            "comune": "Sant'Olcese",
            "provincia": "GE"
        }, {
            "comune": "Santo Stefano d'Aveto",
            "provincia": "GE"
        }, {
            "comune": "Savignone",
            "provincia": "GE"
        }, {
            "comune": "Serra Riccò",
            "provincia": "GE"
        }, {
            "comune": "Sestri Levante",
            "provincia": "GE"
        }, {
            "comune": "Sori",
            "provincia": "GE"
        }, {
            "comune": "Tiglieto",
            "provincia": "GE"
        }, {
            "comune": "Torriglia",
            "provincia": "GE"
        }, {
            "comune": "Tribogna",
            "provincia": "GE"
        }, {
            "comune": "Uscio",
            "provincia": "GE"
        }, {
            "comune": "Valbrevenna",
            "provincia": "GE"
        }, {
            "comune": "Vobbia",
            "provincia": "GE"
        }, {
            "comune": "Zoagli",
            "provincia": "GE"
        }, {
            "comune": "Ameglia",
            "provincia": "SP"
        }, {
            "comune": "Arcola",
            "provincia": "SP"
        }, {
            "comune": "Beverino",
            "provincia": "SP"
        }, {
            "comune": "Bolano",
            "provincia": "SP"
        }, {
            "comune": "Bonassola",
            "provincia": "SP"
        }, {
            "comune": "Borghetto di Vara",
            "provincia": "SP"
        }, {
            "comune": "Brugnato",
            "provincia": "SP"
        }, {
            "comune": "Calice al Cornoviglio",
            "provincia": "SP"
        }, {
            "comune": "Carro",
            "provincia": "SP"
        }, {
            "comune": "Carrodano",
            "provincia": "SP"
        }, {
            "comune": "Castelnuovo Magra",
            "provincia": "SP"
        }, {
            "comune": "Deiva Marina",
            "provincia": "SP"
        }, {
            "comune": "Follo",
            "provincia": "SP"
        }, {
            "comune": "Framura",
            "provincia": "SP"
        }, {
            "comune": "La Spezia",
            "provincia": "SP"
        }, {
            "comune": "Lerici",
            "provincia": "SP"
        }, {
            "comune": "Levanto",
            "provincia": "SP"
        }, {
            "comune": "Maissana",
            "provincia": "SP"
        }, {
            "comune": "Monterosso al Mare",
            "provincia": "SP"
        }, {
            "comune": "Luni",
            "provincia": "SP"
        }, {
            "comune": "Pignone",
            "provincia": "SP"
        }, {
            "comune": "Portovenere",
            "provincia": "SP"
        }, {
            "comune": "Riccò del Golfo di Spezia",
            "provincia": "SP"
        }, {
            "comune": "Riomaggiore",
            "provincia": "SP"
        }, {
            "comune": "Rocchetta di Vara",
            "provincia": "SP"
        }, {
            "comune": "Santo Stefano di Magra",
            "provincia": "SP"
        }, {
            "comune": "Sarzana",
            "provincia": "SP"
        }, {
            "comune": "Sesta Godano",
            "provincia": "SP"
        }, {
            "comune": "Varese Ligure",
            "provincia": "SP"
        }, {
            "comune": "Vernazza",
            "provincia": "SP"
        }, {
            "comune": "Vezzano Ligure",
            "provincia": "SP"
        }, {
            "comune": "Zignago",
            "provincia": "SP"
        }, {
            "comune": "Agra",
            "provincia": "VA"
        }, {
            "comune": "Albizzate",
            "provincia": "VA"
        }, {
            "comune": "Angera",
            "provincia": "VA"
        }, {
            "comune": "Arcisate",
            "provincia": "VA"
        }, {
            "comune": "Arsago Seprio",
            "provincia": "VA"
        }, {
            "comune": "Azzate",
            "provincia": "VA"
        }, {
            "comune": "Azzio",
            "provincia": "VA"
        }, {
            "comune": "Barasso",
            "provincia": "VA"
        }, {
            "comune": "Bardello",
            "provincia": "VA"
        }, {
            "comune": "Bedero Valcuvia",
            "provincia": "VA"
        }, {
            "comune": "Besano",
            "provincia": "VA"
        }, {
            "comune": "Besnate",
            "provincia": "VA"
        }, {
            "comune": "Besozzo",
            "provincia": "VA"
        }, {
            "comune": "Biandronno",
            "provincia": "VA"
        }, {
            "comune": "Bisuschio",
            "provincia": "VA"
        }, {
            "comune": "Bodio Lomnago",
            "provincia": "VA"
        }, {
            "comune": "Brebbia",
            "provincia": "VA"
        }, {
            "comune": "Bregano",
            "provincia": "VA"
        }, {
            "comune": "Brenta",
            "provincia": "VA"
        }, {
            "comune": "Brezzo di Bedero",
            "provincia": "VA"
        }, {
            "comune": "Brinzio",
            "provincia": "VA"
        }, {
            "comune": "Brissago-Valtravaglia",
            "provincia": "VA"
        }, {
            "comune": "Brunello",
            "provincia": "VA"
        }, {
            "comune": "Brusimpiano",
            "provincia": "VA"
        }, {
            "comune": "Buguggiate",
            "provincia": "VA"
        }, {
            "comune": "Busto Arsizio",
            "provincia": "VA"
        }, {
            "comune": "Cadegliano-Viconago",
            "provincia": "VA"
        }, {
            "comune": "Cadrezzate",
            "provincia": "VA"
        }, {
            "comune": "Cairate",
            "provincia": "VA"
        }, {
            "comune": "Cantello",
            "provincia": "VA"
        }, {
            "comune": "Caravate",
            "provincia": "VA"
        }, {
            "comune": "Cardano al Campo",
            "provincia": "VA"
        }, {
            "comune": "Carnago",
            "provincia": "VA"
        }, {
            "comune": "Caronno Pertusella",
            "provincia": "VA"
        }, {
            "comune": "Caronno Varesino",
            "provincia": "VA"
        }, {
            "comune": "Casale Litta",
            "provincia": "VA"
        }, {
            "comune": "Casalzuigno",
            "provincia": "VA"
        }, {
            "comune": "Casciago",
            "provincia": "VA"
        }, {
            "comune": "Casorate Sempione",
            "provincia": "VA"
        }, {
            "comune": "Cassano Magnago",
            "provincia": "VA"
        }, {
            "comune": "Cassano Valcuvia",
            "provincia": "VA"
        }, {
            "comune": "Castellanza",
            "provincia": "VA"
        }, {
            "comune": "Castello Cabiaglio",
            "provincia": "VA"
        }, {
            "comune": "Castelseprio",
            "provincia": "VA"
        }, {
            "comune": "Castelveccana",
            "provincia": "VA"
        }, {
            "comune": "Castiglione Olona",
            "provincia": "VA"
        }, {
            "comune": "Castronno",
            "provincia": "VA"
        }, {
            "comune": "Cavaria con Premezzo",
            "provincia": "VA"
        }, {
            "comune": "Cazzago Brabbia",
            "provincia": "VA"
        }, {
            "comune": "Cislago",
            "provincia": "VA"
        }, {
            "comune": "Cittiglio",
            "provincia": "VA"
        }, {
            "comune": "Clivio",
            "provincia": "VA"
        }, {
            "comune": "Cocquio-Trevisago",
            "provincia": "VA"
        }, {
            "comune": "Comabbio",
            "provincia": "VA"
        }, {
            "comune": "Comerio",
            "provincia": "VA"
        }, {
            "comune": "Cremenaga",
            "provincia": "VA"
        }, {
            "comune": "Crosio della Valle",
            "provincia": "VA"
        }, {
            "comune": "Cuasso al Monte",
            "provincia": "VA"
        }, {
            "comune": "Cugliate-Fabiasco",
            "provincia": "VA"
        }, {
            "comune": "Cunardo",
            "provincia": "VA"
        }, {
            "comune": "Curiglia con Monteviasco",
            "provincia": "VA"
        }, {
            "comune": "Cuveglio",
            "provincia": "VA"
        }, {
            "comune": "Cuvio",
            "provincia": "VA"
        }, {
            "comune": "Daverio",
            "provincia": "VA"
        }, {
            "comune": "Dumenza",
            "provincia": "VA"
        }, {
            "comune": "Duno",
            "provincia": "VA"
        }, {
            "comune": "Fagnano Olona",
            "provincia": "VA"
        }, {
            "comune": "Ferno",
            "provincia": "VA"
        }, {
            "comune": "Ferrera di Varese",
            "provincia": "VA"
        }, {
            "comune": "Gallarate",
            "provincia": "VA"
        }, {
            "comune": "Galliate Lombardo",
            "provincia": "VA"
        }, {
            "comune": "Gavirate",
            "provincia": "VA"
        }, {
            "comune": "Gazzada Schianno",
            "provincia": "VA"
        }, {
            "comune": "Gemonio",
            "provincia": "VA"
        }, {
            "comune": "Gerenzano",
            "provincia": "VA"
        }, {
            "comune": "Germignaga",
            "provincia": "VA"
        }, {
            "comune": "Golasecca",
            "provincia": "VA"
        }, {
            "comune": "Gorla Maggiore",
            "provincia": "VA"
        }, {
            "comune": "Gorla Minore",
            "provincia": "VA"
        }, {
            "comune": "Gornate Olona",
            "provincia": "VA"
        }, {
            "comune": "Grantola",
            "provincia": "VA"
        }, {
            "comune": "Inarzo",
            "provincia": "VA"
        }, {
            "comune": "Induno Olona",
            "provincia": "VA"
        }, {
            "comune": "Ispra",
            "provincia": "VA"
        }, {
            "comune": "Jerago con Orago",
            "provincia": "VA"
        }, {
            "comune": "Lavena Ponte Tresa",
            "provincia": "VA"
        }, {
            "comune": "Laveno-Mombello",
            "provincia": "VA"
        }, {
            "comune": "Leggiuno",
            "provincia": "VA"
        }, {
            "comune": "Lonate Ceppino",
            "provincia": "VA"
        }, {
            "comune": "Lonate Pozzolo",
            "provincia": "VA"
        }, {
            "comune": "Lozza",
            "provincia": "VA"
        }, {
            "comune": "Luino",
            "provincia": "VA"
        }, {
            "comune": "Luvinate",
            "provincia": "VA"
        }, {
            "comune": "Malgesso",
            "provincia": "VA"
        }, {
            "comune": "Malnate",
            "provincia": "VA"
        }, {
            "comune": "Marchirolo",
            "provincia": "VA"
        }, {
            "comune": "Marnate",
            "provincia": "VA"
        }, {
            "comune": "Marzio",
            "provincia": "VA"
        }, {
            "comune": "Masciago Primo",
            "provincia": "VA"
        }, {
            "comune": "Mercallo",
            "provincia": "VA"
        }, {
            "comune": "Mesenzana",
            "provincia": "VA"
        }, {
            "comune": "Montegrino Valtravaglia",
            "provincia": "VA"
        }, {
            "comune": "Monvalle",
            "provincia": "VA"
        }, {
            "comune": "Morazzone",
            "provincia": "VA"
        }, {
            "comune": "Mornago",
            "provincia": "VA"
        }, {
            "comune": "Oggiona con Santo Stefano",
            "provincia": "VA"
        }, {
            "comune": "Olgiate Olona",
            "provincia": "VA"
        }, {
            "comune": "Origgio",
            "provincia": "VA"
        }, {
            "comune": "Orino",
            "provincia": "VA"
        }, {
            "comune": "Osmate",
            "provincia": "VA"
        }, {
            "comune": "Porto Ceresio",
            "provincia": "VA"
        }, {
            "comune": "Porto Valtravaglia",
            "provincia": "VA"
        }, {
            "comune": "Rancio Valcuvia",
            "provincia": "VA"
        }, {
            "comune": "Ranco",
            "provincia": "VA"
        }, {
            "comune": "Saltrio",
            "provincia": "VA"
        }, {
            "comune": "Samarate",
            "provincia": "VA"
        }, {
            "comune": "Saronno",
            "provincia": "VA"
        }, {
            "comune": "Sesto Calende",
            "provincia": "VA"
        }, {
            "comune": "Solbiate Arno",
            "provincia": "VA"
        }, {
            "comune": "Solbiate Olona",
            "provincia": "VA"
        }, {
            "comune": "Somma Lombardo",
            "provincia": "VA"
        }, {
            "comune": "Sumirago",
            "provincia": "VA"
        }, {
            "comune": "Taino",
            "provincia": "VA"
        }, {
            "comune": "Ternate",
            "provincia": "VA"
        }, {
            "comune": "Tradate",
            "provincia": "VA"
        }, {
            "comune": "Travedona-Monate",
            "provincia": "VA"
        }, {
            "comune": "Tronzano Lago Maggiore",
            "provincia": "VA"
        }, {
            "comune": "Uboldo",
            "provincia": "VA"
        }, {
            "comune": "Valganna",
            "provincia": "VA"
        }, {
            "comune": "Varano Borghi",
            "provincia": "VA"
        }, {
            "comune": "Varese",
            "provincia": "VA"
        }, {
            "comune": "Vedano Olona",
            "provincia": "VA"
        }, {
            "comune": "Venegono Inferiore",
            "provincia": "VA"
        }, {
            "comune": "Vergiate",
            "provincia": "VA"
        }, {
            "comune": "Viggiù",
            "provincia": "VA"
        }, {
            "comune": "Vizzola Ticino",
            "provincia": "VA"
        }, {
            "comune": "Sangiano",
            "provincia": "VA"
        }, {
            "comune": "Maccagno con Pino e Veddasca",
            "provincia": "VA"
        }, {
            "comune": "Albavilla",
            "provincia": "CO"
        }, {
            "comune": "Albese con Cassano",
            "provincia": "CO"
        }, {
            "comune": "Albiolo",
            "provincia": "CO"
        }, {
            "comune": "Alserio",
            "provincia": "CO"
        }, {
            "comune": "Alzate Brianza",
            "provincia": "CO"
        }, {
            "comune": "Anzano del Parco",
            "provincia": "CO"
        }, {
            "comune": "Appiano Gentile",
            "provincia": "CO"
        }, {
            "comune": "Argegno",
            "provincia": "CO"
        }, {
            "comune": "Arosio",
            "provincia": "CO"
        }, {
            "comune": "Asso",
            "provincia": "CO"
        }, {
            "comune": "Barni",
            "provincia": "CO"
        }, {
            "comune": "Bene Lario",
            "provincia": "CO"
        }, {
            "comune": "Beregazzo con Figliaro",
            "provincia": "CO"
        }, {
            "comune": "Binago",
            "provincia": "CO"
        }, {
            "comune": "Bizzarone",
            "provincia": "CO"
        }, {
            "comune": "Blessagno",
            "provincia": "CO"
        }, {
            "comune": "Blevio",
            "provincia": "CO"
        }, {
            "comune": "Bregnano",
            "provincia": "CO"
        }, {
            "comune": "Brenna",
            "provincia": "CO"
        }, {
            "comune": "Brienno",
            "provincia": "CO"
        }, {
            "comune": "Brunate",
            "provincia": "CO"
        }, {
            "comune": "Bulgarograsso",
            "provincia": "CO"
        }, {
            "comune": "Cabiate",
            "provincia": "CO"
        }, {
            "comune": "Cadorago",
            "provincia": "CO"
        }, {
            "comune": "Caglio",
            "provincia": "CO"
        }, {
            "comune": "Cagno",
            "provincia": "CO"
        }, {
            "comune": "Campione d'Italia",
            "provincia": "CO"
        }, {
            "comune": "Cantù",
            "provincia": "CO"
        }, {
            "comune": "Canzo",
            "provincia": "CO"
        }, {
            "comune": "Capiago Intimiano",
            "provincia": "CO"
        }, {
            "comune": "Carate Urio",
            "provincia": "CO"
        }, {
            "comune": "Carbonate",
            "provincia": "CO"
        }, {
            "comune": "Carimate",
            "provincia": "CO"
        }, {
            "comune": "Carlazzo",
            "provincia": "CO"
        }, {
            "comune": "Carugo",
            "provincia": "CO"
        }, {
            "comune": "Casasco d'Intelvi",
            "provincia": "CO"
        }, {
            "comune": "Caslino d'Erba",
            "provincia": "CO"
        }, {
            "comune": "Casnate con Bernate",
            "provincia": "CO"
        }, {
            "comune": "Cassina Rizzardi",
            "provincia": "CO"
        }, {
            "comune": "Castelmarte",
            "provincia": "CO"
        }, {
            "comune": "Castelnuovo Bozzente",
            "provincia": "CO"
        }, {
            "comune": "Castiglione d'Intelvi",
            "provincia": "CO"
        }, {
            "comune": "Cavargna",
            "provincia": "CO"
        }, {
            "comune": "Cerano d'Intelvi",
            "provincia": "CO"
        }, {
            "comune": "Cermenate",
            "provincia": "CO"
        }, {
            "comune": "Cernobbio",
            "provincia": "CO"
        }, {
            "comune": "Cirimido",
            "provincia": "CO"
        }, {
            "comune": "Claino con Osteno",
            "provincia": "CO"
        }, {
            "comune": "Colonno",
            "provincia": "CO"
        }, {
            "comune": "Como",
            "provincia": "CO"
        }, {
            "comune": "Corrido",
            "provincia": "CO"
        }, {
            "comune": "Cremia",
            "provincia": "CO"
        }, {
            "comune": "Cucciago",
            "provincia": "CO"
        }, {
            "comune": "Cusino",
            "provincia": "CO"
        }, {
            "comune": "Dizzasco",
            "provincia": "CO"
        }, {
            "comune": "Domaso",
            "provincia": "CO"
        }, {
            "comune": "Dongo",
            "provincia": "CO"
        }, {
            "comune": "Dosso del Liro",
            "provincia": "CO"
        }, {
            "comune": "Erba",
            "provincia": "CO"
        }, {
            "comune": "Eupilio",
            "provincia": "CO"
        }, {
            "comune": "Faggeto Lario",
            "provincia": "CO"
        }, {
            "comune": "Faloppio",
            "provincia": "CO"
        }, {
            "comune": "Fenegrò",
            "provincia": "CO"
        }, {
            "comune": "Figino Serenza",
            "provincia": "CO"
        }, {
            "comune": "Fino Mornasco",
            "provincia": "CO"
        }, {
            "comune": "Garzeno",
            "provincia": "CO"
        }, {
            "comune": "Gera Lario",
            "provincia": "CO"
        }, {
            "comune": "Grandate",
            "provincia": "CO"
        }, {
            "comune": "Grandola ed Uniti",
            "provincia": "CO"
        }, {
            "comune": "Griante",
            "provincia": "CO"
        }, {
            "comune": "Guanzate",
            "provincia": "CO"
        }, {
            "comune": "Inverigo",
            "provincia": "CO"
        }, {
            "comune": "Laglio",
            "provincia": "CO"
        }, {
            "comune": "Laino",
            "provincia": "CO"
        }, {
            "comune": "Lambrugo",
            "provincia": "CO"
        }, {
            "comune": "Lasnigo",
            "provincia": "CO"
        }, {
            "comune": "Lezzeno",
            "provincia": "CO"
        }, {
            "comune": "Limido Comasco",
            "provincia": "CO"
        }, {
            "comune": "Lipomo",
            "provincia": "CO"
        }, {
            "comune": "Livo",
            "provincia": "CO"
        }, {
            "comune": "Locate Varesino",
            "provincia": "CO"
        }, {
            "comune": "Lomazzo",
            "provincia": "CO"
        }, {
            "comune": "Longone al Segrino",
            "provincia": "CO"
        }, {
            "comune": "Luisago",
            "provincia": "CO"
        }, {
            "comune": "Lurago d'Erba",
            "provincia": "CO"
        }, {
            "comune": "Lurago Marinone",
            "provincia": "CO"
        }, {
            "comune": "Lurate Caccivio",
            "provincia": "CO"
        }, {
            "comune": "Magreglio",
            "provincia": "CO"
        }, {
            "comune": "Mariano Comense",
            "provincia": "CO"
        }, {
            "comune": "Maslianico",
            "provincia": "CO"
        }, {
            "comune": "Menaggio",
            "provincia": "CO"
        }, {
            "comune": "Merone",
            "provincia": "CO"
        }, {
            "comune": "Moltrasio",
            "provincia": "CO"
        }, {
            "comune": "Monguzzo",
            "provincia": "CO"
        }, {
            "comune": "Montano Lucino",
            "provincia": "CO"
        }, {
            "comune": "Montemezzo",
            "provincia": "CO"
        }, {
            "comune": "Montorfano",
            "provincia": "CO"
        }, {
            "comune": "Mozzate",
            "provincia": "CO"
        }, {
            "comune": "Musso",
            "provincia": "CO"
        }, {
            "comune": "Nesso",
            "provincia": "CO"
        }, {
            "comune": "Novedrate",
            "provincia": "CO"
        }, {
            "comune": "Olgiate Comasco",
            "provincia": "CO"
        }, {
            "comune": "Oltrona di San Mamette",
            "provincia": "CO"
        }, {
            "comune": "Orsenigo",
            "provincia": "CO"
        }, {
            "comune": "Peglio",
            "provincia": "CO"
        }, {
            "comune": "Pianello del Lario",
            "provincia": "CO"
        }, {
            "comune": "Pigra",
            "provincia": "CO"
        }, {
            "comune": "Plesio",
            "provincia": "CO"
        }, {
            "comune": "Pognana Lario",
            "provincia": "CO"
        }, {
            "comune": "Ponna",
            "provincia": "CO"
        }, {
            "comune": "Ponte Lambro",
            "provincia": "CO"
        }, {
            "comune": "Porlezza",
            "provincia": "CO"
        }, {
            "comune": "Proserpio",
            "provincia": "CO"
        }, {
            "comune": "Pusiano",
            "provincia": "CO"
        }, {
            "comune": "Rezzago",
            "provincia": "CO"
        }, {
            "comune": "Rodero",
            "provincia": "CO"
        }, {
            "comune": "Ronago",
            "provincia": "CO"
        }, {
            "comune": "Rovellasca",
            "provincia": "CO"
        }, {
            "comune": "Rovello Porro",
            "provincia": "CO"
        }, {
            "comune": "Sala Comacina",
            "provincia": "CO"
        }, {
            "comune": "San Bartolomeo Val Cavargna",
            "provincia": "CO"
        }, {
            "comune": "San Fedele Intelvi",
            "provincia": "CO"
        }, {
            "comune": "San Fermo della Battaglia",
            "provincia": "CO"
        }, {
            "comune": "San Nazzaro Val Cavargna",
            "provincia": "CO"
        }, {
            "comune": "Schignano",
            "provincia": "CO"
        }, {
            "comune": "Senna Comasco",
            "provincia": "CO"
        }, {
            "comune": "Solbiate",
            "provincia": "CO"
        }, {
            "comune": "Sorico",
            "provincia": "CO"
        }, {
            "comune": "Sormano",
            "provincia": "CO"
        }, {
            "comune": "Stazzona",
            "provincia": "CO"
        }, {
            "comune": "Tavernerio",
            "provincia": "CO"
        }, {
            "comune": "Torno",
            "provincia": "CO"
        }, {
            "comune": "Trezzone",
            "provincia": "CO"
        }, {
            "comune": "Turate",
            "provincia": "CO"
        }, {
            "comune": "Uggiate-Trevano",
            "provincia": "CO"
        }, {
            "comune": "Valbrona",
            "provincia": "CO"
        }, {
            "comune": "Valmorea",
            "provincia": "CO"
        }, {
            "comune": "Val Rezzo",
            "provincia": "CO"
        }, {
            "comune": "Valsolda",
            "provincia": "CO"
        }, {
            "comune": "Veleso",
            "provincia": "CO"
        }, {
            "comune": "Veniano",
            "provincia": "CO"
        }, {
            "comune": "Vercana",
            "provincia": "CO"
        }, {
            "comune": "Vertemate con Minoprio",
            "provincia": "CO"
        }, {
            "comune": "Villa Guardia",
            "provincia": "CO"
        }, {
            "comune": "Zelbio",
            "provincia": "CO"
        }, {
            "comune": "San Siro",
            "provincia": "CO"
        }, {
            "comune": "Gravedona ed Uniti",
            "provincia": "CO"
        }, {
            "comune": "Bellagio",
            "provincia": "CO"
        }, {
            "comune": "Colverde",
            "provincia": "CO"
        }, {
            "comune": "Tremezzina",
            "provincia": "CO"
        }, {
            "comune": "Alta Valle Intelvi",
            "provincia": "CO"
        }, {
            "comune": "Albaredo per San Marco",
            "provincia": "SO"
        }, {
            "comune": "Albosaggia",
            "provincia": "SO"
        }, {
            "comune": "Andalo Valtellino",
            "provincia": "SO"
        }, {
            "comune": "Aprica",
            "provincia": "SO"
        }, {
            "comune": "Ardenno",
            "provincia": "SO"
        }, {
            "comune": "Bema",
            "provincia": "SO"
        }, {
            "comune": "Berbenno di Valtellina",
            "provincia": "SO"
        }, {
            "comune": "Bianzone",
            "provincia": "SO"
        }, {
            "comune": "Bormio",
            "provincia": "SO"
        }, {
            "comune": "Buglio in Monte",
            "provincia": "SO"
        }, {
            "comune": "Caiolo",
            "provincia": "SO"
        }, {
            "comune": "Campodolcino",
            "provincia": "SO"
        }, {
            "comune": "Caspoggio",
            "provincia": "SO"
        }, {
            "comune": "Castello dell'Acqua",
            "provincia": "SO"
        }, {
            "comune": "Castione Andevenno",
            "provincia": "SO"
        }, {
            "comune": "Cedrasco",
            "provincia": "SO"
        }, {
            "comune": "Cercino",
            "provincia": "SO"
        }, {
            "comune": "Chiavenna",
            "provincia": "SO"
        }, {
            "comune": "Chiesa in Valmalenco",
            "provincia": "SO"
        }, {
            "comune": "Chiuro",
            "provincia": "SO"
        }, {
            "comune": "Cino",
            "provincia": "SO"
        }, {
            "comune": "Civo",
            "provincia": "SO"
        }, {
            "comune": "Colorina",
            "provincia": "SO"
        }, {
            "comune": "Cosio Valtellino",
            "provincia": "SO"
        }, {
            "comune": "Dazio",
            "provincia": "SO"
        }, {
            "comune": "Delebio",
            "provincia": "SO"
        }, {
            "comune": "Dubino",
            "provincia": "SO"
        }, {
            "comune": "Faedo Valtellino",
            "provincia": "SO"
        }, {
            "comune": "Forcola",
            "provincia": "SO"
        }, {
            "comune": "Fusine",
            "provincia": "SO"
        }, {
            "comune": "Gerola Alta",
            "provincia": "SO"
        }, {
            "comune": "Gordona",
            "provincia": "SO"
        }, {
            "comune": "Grosio",
            "provincia": "SO"
        }, {
            "comune": "Grosotto",
            "provincia": "SO"
        }, {
            "comune": "Madesimo",
            "provincia": "SO"
        }, {
            "comune": "Lanzada",
            "provincia": "SO"
        }, {
            "comune": "Livigno",
            "provincia": "SO"
        }, {
            "comune": "Lovero",
            "provincia": "SO"
        }, {
            "comune": "Mantello",
            "provincia": "SO"
        }, {
            "comune": "Mazzo di Valtellina",
            "provincia": "SO"
        }, {
            "comune": "Mello",
            "provincia": "SO"
        }, {
            "comune": "Mese",
            "provincia": "SO"
        }, {
            "comune": "Montagna in Valtellina",
            "provincia": "SO"
        }, {
            "comune": "Morbegno",
            "provincia": "SO"
        }, {
            "comune": "Novate Mezzola",
            "provincia": "SO"
        }, {
            "comune": "Pedesina",
            "provincia": "SO"
        }, {
            "comune": "Piantedo",
            "provincia": "SO"
        }, {
            "comune": "Piateda",
            "provincia": "SO"
        }, {
            "comune": "Piuro",
            "provincia": "SO"
        }, {
            "comune": "Poggiridenti",
            "provincia": "SO"
        }, {
            "comune": "Ponte in Valtellina",
            "provincia": "SO"
        }, {
            "comune": "Postalesio",
            "provincia": "SO"
        }, {
            "comune": "Prata Camportaccio",
            "provincia": "SO"
        }, {
            "comune": "Rasura",
            "provincia": "SO"
        }, {
            "comune": "Rogolo",
            "provincia": "SO"
        }, {
            "comune": "Samolaco",
            "provincia": "SO"
        }, {
            "comune": "San Giacomo Filippo",
            "provincia": "SO"
        }, {
            "comune": "Sernio",
            "provincia": "SO"
        }, {
            "comune": "Sondalo",
            "provincia": "SO"
        }, {
            "comune": "Sondrio",
            "provincia": "SO"
        }, {
            "comune": "Spriana",
            "provincia": "SO"
        }, {
            "comune": "Talamona",
            "provincia": "SO"
        }, {
            "comune": "Tartano",
            "provincia": "SO"
        }, {
            "comune": "Teglio",
            "provincia": "SO"
        }, {
            "comune": "Tirano",
            "provincia": "SO"
        }, {
            "comune": "Torre di Santa Maria",
            "provincia": "SO"
        }, {
            "comune": "Tovo di Sant'Agata",
            "provincia": "SO"
        }, {
            "comune": "Traona",
            "provincia": "SO"
        }, {
            "comune": "Tresivio",
            "provincia": "SO"
        }, {
            "comune": "Valdidentro",
            "provincia": "SO"
        }, {
            "comune": "Valdisotto",
            "provincia": "SO"
        }, {
            "comune": "Valfurva",
            "provincia": "SO"
        }, {
            "comune": "Val Masino",
            "provincia": "SO"
        }, {
            "comune": "Verceia",
            "provincia": "SO"
        }, {
            "comune": "Vervio",
            "provincia": "SO"
        }, {
            "comune": "Villa di Chiavenna",
            "provincia": "SO"
        }, {
            "comune": "Villa di Tirano",
            "provincia": "SO"
        }, {
            "comune": "Abbiategrasso",
            "provincia": "MI"
        }, {
            "comune": "Albairate",
            "provincia": "MI"
        }, {
            "comune": "Arconate",
            "provincia": "MI"
        }, {
            "comune": "Arese",
            "provincia": "MI"
        }, {
            "comune": "Arluno",
            "provincia": "MI"
        }, {
            "comune": "Assago",
            "provincia": "MI"
        }, {
            "comune": "Bareggio",
            "provincia": "MI"
        }, {
            "comune": "Basiano",
            "provincia": "MI"
        }, {
            "comune": "Basiglio",
            "provincia": "MI"
        }, {
            "comune": "Bellinzago Lombardo",
            "provincia": "MI"
        }, {
            "comune": "Bernate Ticino",
            "provincia": "MI"
        }, {
            "comune": "Besate",
            "provincia": "MI"
        }, {
            "comune": "Binasco",
            "provincia": "MI"
        }, {
            "comune": "Boffalora Sopra Ticino",
            "provincia": "MI"
        }, {
            "comune": "Bollate",
            "provincia": "MI"
        }, {
            "comune": "Bresso",
            "provincia": "MI"
        }, {
            "comune": "Bubbiano",
            "provincia": "MI"
        }, {
            "comune": "Buccinasco",
            "provincia": "MI"
        }, {
            "comune": "Buscate",
            "provincia": "MI"
        }, {
            "comune": "Bussero",
            "provincia": "MI"
        }, {
            "comune": "Busto Garolfo",
            "provincia": "MI"
        }, {
            "comune": "Calvignasco",
            "provincia": "MI"
        }, {
            "comune": "Cambiago",
            "provincia": "MI"
        }, {
            "comune": "Canegrate",
            "provincia": "MI"
        }, {
            "comune": "Carpiano",
            "provincia": "MI"
        }, {
            "comune": "Carugate",
            "provincia": "MI"
        }, {
            "comune": "Casarile",
            "provincia": "MI"
        }, {
            "comune": "Casorezzo",
            "provincia": "MI"
        }, {
            "comune": "Cassano d'Adda",
            "provincia": "MI"
        }, {
            "comune": "Cassina de' Pecchi",
            "provincia": "MI"
        }, {
            "comune": "Cassinetta di Lugagnano",
            "provincia": "MI"
        }, {
            "comune": "Castano Primo",
            "provincia": "MI"
        }, {
            "comune": "Cernusco sul Naviglio",
            "provincia": "MI"
        }, {
            "comune": "Cerro al Lambro",
            "provincia": "MI"
        }, {
            "comune": "Cerro Maggiore",
            "provincia": "MI"
        }, {
            "comune": "Cesano Boscone",
            "provincia": "MI"
        }, {
            "comune": "Cesate",
            "provincia": "MI"
        }, {
            "comune": "Cinisello Balsamo",
            "provincia": "MI"
        }, {
            "comune": "Cisliano",
            "provincia": "MI"
        }, {
            "comune": "Cologno Monzese",
            "provincia": "MI"
        }, {
            "comune": "Colturano",
            "provincia": "MI"
        }, {
            "comune": "Corbetta",
            "provincia": "MI"
        }, {
            "comune": "Cormano",
            "provincia": "MI"
        }, {
            "comune": "Cornaredo",
            "provincia": "MI"
        }, {
            "comune": "Corsico",
            "provincia": "MI"
        }, {
            "comune": "Cuggiono",
            "provincia": "MI"
        }, {
            "comune": "Cusago",
            "provincia": "MI"
        }, {
            "comune": "Cusano Milanino",
            "provincia": "MI"
        }, {
            "comune": "Dairago",
            "provincia": "MI"
        }, {
            "comune": "Dresano",
            "provincia": "MI"
        }, {
            "comune": "Gaggiano",
            "provincia": "MI"
        }, {
            "comune": "Garbagnate Milanese",
            "provincia": "MI"
        }, {
            "comune": "Gessate",
            "provincia": "MI"
        }, {
            "comune": "Gorgonzola",
            "provincia": "MI"
        }, {
            "comune": "Grezzago",
            "provincia": "MI"
        }, {
            "comune": "Gudo Visconti",
            "provincia": "MI"
        }, {
            "comune": "Inveruno",
            "provincia": "MI"
        }, {
            "comune": "Inzago",
            "provincia": "MI"
        }, {
            "comune": "Lacchiarella",
            "provincia": "MI"
        }, {
            "comune": "Lainate",
            "provincia": "MI"
        }, {
            "comune": "Legnano",
            "provincia": "MI"
        }, {
            "comune": "Liscate",
            "provincia": "MI"
        }, {
            "comune": "Locate di Triulzi",
            "provincia": "MI"
        }, {
            "comune": "Magenta",
            "provincia": "MI"
        }, {
            "comune": "Magnago",
            "provincia": "MI"
        }, {
            "comune": "Marcallo con Casone",
            "provincia": "MI"
        }, {
            "comune": "Masate",
            "provincia": "MI"
        }, {
            "comune": "Mediglia",
            "provincia": "MI"
        }, {
            "comune": "Melegnano",
            "provincia": "MI"
        }, {
            "comune": "Melzo",
            "provincia": "MI"
        }, {
            "comune": "Mesero",
            "provincia": "MI"
        }, {
            "comune": "Milano",
            "provincia": "MI"
        }, {
            "comune": "Morimondo",
            "provincia": "MI"
        }, {
            "comune": "Motta Visconti",
            "provincia": "MI"
        }, {
            "comune": "Nerviano",
            "provincia": "MI"
        }, {
            "comune": "Nosate",
            "provincia": "MI"
        }, {
            "comune": "Novate Milanese",
            "provincia": "MI"
        }, {
            "comune": "Noviglio",
            "provincia": "MI"
        }, {
            "comune": "Opera",
            "provincia": "MI"
        }, {
            "comune": "Ossona",
            "provincia": "MI"
        }, {
            "comune": "Ozzero",
            "provincia": "MI"
        }, {
            "comune": "Paderno Dugnano",
            "provincia": "MI"
        }, {
            "comune": "Pantigliate",
            "provincia": "MI"
        }, {
            "comune": "Parabiago",
            "provincia": "MI"
        }, {
            "comune": "Paullo",
            "provincia": "MI"
        }, {
            "comune": "Pero",
            "provincia": "MI"
        }, {
            "comune": "Peschiera Borromeo",
            "provincia": "MI"
        }, {
            "comune": "Pessano con Bornago",
            "provincia": "MI"
        }, {
            "comune": "Pieve Emanuele",
            "provincia": "MI"
        }, {
            "comune": "Pioltello",
            "provincia": "MI"
        }, {
            "comune": "Pogliano Milanese",
            "provincia": "MI"
        }, {
            "comune": "Pozzo d'Adda",
            "provincia": "MI"
        }, {
            "comune": "Pozzuolo Martesana",
            "provincia": "MI"
        }, {
            "comune": "Pregnana Milanese",
            "provincia": "MI"
        }, {
            "comune": "Rescaldina",
            "provincia": "MI"
        }, {
            "comune": "Rho",
            "provincia": "MI"
        }, {
            "comune": "Robecchetto con Induno",
            "provincia": "MI"
        }, {
            "comune": "Robecco sul Naviglio",
            "provincia": "MI"
        }, {
            "comune": "Rodano",
            "provincia": "MI"
        }, {
            "comune": "Rosate",
            "provincia": "MI"
        }, {
            "comune": "Rozzano",
            "provincia": "MI"
        }, {
            "comune": "San Colombano al Lambro",
            "provincia": "MI"
        }, {
            "comune": "San Donato Milanese",
            "provincia": "MI"
        }, {
            "comune": "San Giorgio su Legnano",
            "provincia": "MI"
        }, {
            "comune": "San Giuliano Milanese",
            "provincia": "MI"
        }, {
            "comune": "Santo Stefano Ticino",
            "provincia": "MI"
        }, {
            "comune": "San Vittore Olona",
            "provincia": "MI"
        }, {
            "comune": "San Zenone al Lambro",
            "provincia": "MI"
        }, {
            "comune": "Sedriano",
            "provincia": "MI"
        }, {
            "comune": "Segrate",
            "provincia": "MI"
        }, {
            "comune": "Senago",
            "provincia": "MI"
        }, {
            "comune": "Sesto San Giovanni",
            "provincia": "MI"
        }, {
            "comune": "Settala",
            "provincia": "MI"
        }, {
            "comune": "Settimo Milanese",
            "provincia": "MI"
        }, {
            "comune": "Solaro",
            "provincia": "MI"
        }, {
            "comune": "Trezzano Rosa",
            "provincia": "MI"
        }, {
            "comune": "Trezzano sul Naviglio",
            "provincia": "MI"
        }, {
            "comune": "Trezzo sull'Adda",
            "provincia": "MI"
        }, {
            "comune": "Tribiano",
            "provincia": "MI"
        }, {
            "comune": "Truccazzano",
            "provincia": "MI"
        }, {
            "comune": "Turbigo",
            "provincia": "MI"
        }, {
            "comune": "Vanzago",
            "provincia": "MI"
        }, {
            "comune": "Vaprio d'Adda",
            "provincia": "MI"
        }, {
            "comune": "Vermezzo",
            "provincia": "MI"
        }, {
            "comune": "Vernate",
            "provincia": "MI"
        }, {
            "comune": "Vignate",
            "provincia": "MI"
        }, {
            "comune": "Vimodrone",
            "provincia": "MI"
        }, {
            "comune": "Vittuone",
            "provincia": "MI"
        }, {
            "comune": "Vizzolo Predabissi",
            "provincia": "MI"
        }, {
            "comune": "Zelo Surrigone",
            "provincia": "MI"
        }, {
            "comune": "Zibido San Giacomo",
            "provincia": "MI"
        }, {
            "comune": "Villa Cortese",
            "provincia": "MI"
        }, {
            "comune": "Vanzaghello",
            "provincia": "MI"
        }, {
            "comune": "Baranzate",
            "provincia": "MI"
        }, {
            "comune": "Adrara San Martino",
            "provincia": "BG"
        }, {
            "comune": "Adrara San Rocco",
            "provincia": "BG"
        }, {
            "comune": "Albano Sant'Alessandro",
            "provincia": "BG"
        }, {
            "comune": "Albino",
            "provincia": "BG"
        }, {
            "comune": "Almè",
            "provincia": "BG"
        }, {
            "comune": "Almenno San Bartolomeo",
            "provincia": "BG"
        }, {
            "comune": "Almenno San Salvatore",
            "provincia": "BG"
        }, {
            "comune": "Alzano Lombardo",
            "provincia": "BG"
        }, {
            "comune": "Ambivere",
            "provincia": "BG"
        }, {
            "comune": "Antegnate",
            "provincia": "BG"
        }, {
            "comune": "Arcene",
            "provincia": "BG"
        }, {
            "comune": "Ardesio",
            "provincia": "BG"
        }, {
            "comune": "Arzago d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Averara",
            "provincia": "BG"
        }, {
            "comune": "Aviatico",
            "provincia": "BG"
        }, {
            "comune": "Azzano San Paolo",
            "provincia": "BG"
        }, {
            "comune": "Azzone",
            "provincia": "BG"
        }, {
            "comune": "Bagnatica",
            "provincia": "BG"
        }, {
            "comune": "Barbata",
            "provincia": "BG"
        }, {
            "comune": "Bariano",
            "provincia": "BG"
        }, {
            "comune": "Barzana",
            "provincia": "BG"
        }, {
            "comune": "Bedulita",
            "provincia": "BG"
        }, {
            "comune": "Berbenno",
            "provincia": "BG"
        }, {
            "comune": "Bergamo",
            "provincia": "BG"
        }, {
            "comune": "Berzo San Fermo",
            "provincia": "BG"
        }, {
            "comune": "Bianzano",
            "provincia": "BG"
        }, {
            "comune": "Blello",
            "provincia": "BG"
        }, {
            "comune": "Bolgare",
            "provincia": "BG"
        }, {
            "comune": "Boltiere",
            "provincia": "BG"
        }, {
            "comune": "Bonate Sopra",
            "provincia": "BG"
        }, {
            "comune": "Bonate Sotto",
            "provincia": "BG"
        }, {
            "comune": "Borgo di Terzo",
            "provincia": "BG"
        }, {
            "comune": "Bossico",
            "provincia": "BG"
        }, {
            "comune": "Bottanuco",
            "provincia": "BG"
        }, {
            "comune": "Bracca",
            "provincia": "BG"
        }, {
            "comune": "Branzi",
            "provincia": "BG"
        }, {
            "comune": "Brembate",
            "provincia": "BG"
        }, {
            "comune": "Brembate di Sopra",
            "provincia": "BG"
        }, {
            "comune": "Brignano Gera d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Brumano",
            "provincia": "BG"
        }, {
            "comune": "Brusaporto",
            "provincia": "BG"
        }, {
            "comune": "Calcinate",
            "provincia": "BG"
        }, {
            "comune": "Calcio",
            "provincia": "BG"
        }, {
            "comune": "Calusco d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Calvenzano",
            "provincia": "BG"
        }, {
            "comune": "Camerata Cornello",
            "provincia": "BG"
        }, {
            "comune": "Canonica d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Capizzone",
            "provincia": "BG"
        }, {
            "comune": "Capriate San Gervasio",
            "provincia": "BG"
        }, {
            "comune": "Caprino Bergamasco",
            "provincia": "BG"
        }, {
            "comune": "Caravaggio",
            "provincia": "BG"
        }, {
            "comune": "Carobbio degli Angeli",
            "provincia": "BG"
        }, {
            "comune": "Carona",
            "provincia": "BG"
        }, {
            "comune": "Carvico",
            "provincia": "BG"
        }, {
            "comune": "Casazza",
            "provincia": "BG"
        }, {
            "comune": "Casirate d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Casnigo",
            "provincia": "BG"
        }, {
            "comune": "Cassiglio",
            "provincia": "BG"
        }, {
            "comune": "Castelli Calepio",
            "provincia": "BG"
        }, {
            "comune": "Castel Rozzone",
            "provincia": "BG"
        }, {
            "comune": "Castione della Presolana",
            "provincia": "BG"
        }, {
            "comune": "Castro",
            "provincia": "BG"
        }, {
            "comune": "Cavernago",
            "provincia": "BG"
        }, {
            "comune": "Cazzano Sant'Andrea",
            "provincia": "BG"
        }, {
            "comune": "Cenate Sopra",
            "provincia": "BG"
        }, {
            "comune": "Cenate Sotto",
            "provincia": "BG"
        }, {
            "comune": "Cene",
            "provincia": "BG"
        }, {
            "comune": "Cerete",
            "provincia": "BG"
        }, {
            "comune": "Chignolo d'Isola",
            "provincia": "BG"
        }, {
            "comune": "Chiuduno",
            "provincia": "BG"
        }, {
            "comune": "Cisano Bergamasco",
            "provincia": "BG"
        }, {
            "comune": "Ciserano",
            "provincia": "BG"
        }, {
            "comune": "Cividate al Piano",
            "provincia": "BG"
        }, {
            "comune": "Clusone",
            "provincia": "BG"
        }, {
            "comune": "Colere",
            "provincia": "BG"
        }, {
            "comune": "Cologno al Serio",
            "provincia": "BG"
        }, {
            "comune": "Colzate",
            "provincia": "BG"
        }, {
            "comune": "Comun Nuovo",
            "provincia": "BG"
        }, {
            "comune": "Corna Imagna",
            "provincia": "BG"
        }, {
            "comune": "Cortenuova",
            "provincia": "BG"
        }, {
            "comune": "Costa di Mezzate",
            "provincia": "BG"
        }, {
            "comune": "Costa Valle Imagna",
            "provincia": "BG"
        }, {
            "comune": "Costa Volpino",
            "provincia": "BG"
        }, {
            "comune": "Covo",
            "provincia": "BG"
        }, {
            "comune": "Credaro",
            "provincia": "BG"
        }, {
            "comune": "Curno",
            "provincia": "BG"
        }, {
            "comune": "Cusio",
            "provincia": "BG"
        }, {
            "comune": "Dalmine",
            "provincia": "BG"
        }, {
            "comune": "Dossena",
            "provincia": "BG"
        }, {
            "comune": "Endine Gaiano",
            "provincia": "BG"
        }, {
            "comune": "Entratico",
            "provincia": "BG"
        }, {
            "comune": "Fara Gera d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Fara Olivana con Sola",
            "provincia": "BG"
        }, {
            "comune": "Filago",
            "provincia": "BG"
        }, {
            "comune": "Fino del Monte",
            "provincia": "BG"
        }, {
            "comune": "Fiorano al Serio",
            "provincia": "BG"
        }, {
            "comune": "Fontanella",
            "provincia": "BG"
        }, {
            "comune": "Fonteno",
            "provincia": "BG"
        }, {
            "comune": "Foppolo",
            "provincia": "BG"
        }, {
            "comune": "Foresto Sparso",
            "provincia": "BG"
        }, {
            "comune": "Fornovo San Giovanni",
            "provincia": "BG"
        }, {
            "comune": "Fuipiano Valle Imagna",
            "provincia": "BG"
        }, {
            "comune": "Gandellino",
            "provincia": "BG"
        }, {
            "comune": "Gandino",
            "provincia": "BG"
        }, {
            "comune": "Gandosso",
            "provincia": "BG"
        }, {
            "comune": "Gaverina Terme",
            "provincia": "BG"
        }, {
            "comune": "Gazzaniga",
            "provincia": "BG"
        }, {
            "comune": "Ghisalba",
            "provincia": "BG"
        }, {
            "comune": "Gorlago",
            "provincia": "BG"
        }, {
            "comune": "Gorle",
            "provincia": "BG"
        }, {
            "comune": "Gorno",
            "provincia": "BG"
        }, {
            "comune": "Grassobbio",
            "provincia": "BG"
        }, {
            "comune": "Gromo",
            "provincia": "BG"
        }, {
            "comune": "Grone",
            "provincia": "BG"
        }, {
            "comune": "Grumello del Monte",
            "provincia": "BG"
        }, {
            "comune": "Isola di Fondra",
            "provincia": "BG"
        }, {
            "comune": "Isso",
            "provincia": "BG"
        }, {
            "comune": "Lallio",
            "provincia": "BG"
        }, {
            "comune": "Leffe",
            "provincia": "BG"
        }, {
            "comune": "Lenna",
            "provincia": "BG"
        }, {
            "comune": "Levate",
            "provincia": "BG"
        }, {
            "comune": "Locatello",
            "provincia": "BG"
        }, {
            "comune": "Lovere",
            "provincia": "BG"
        }, {
            "comune": "Lurano",
            "provincia": "BG"
        }, {
            "comune": "Luzzana",
            "provincia": "BG"
        }, {
            "comune": "Madone",
            "provincia": "BG"
        }, {
            "comune": "Mapello",
            "provincia": "BG"
        }, {
            "comune": "Martinengo",
            "provincia": "BG"
        }, {
            "comune": "Mezzoldo",
            "provincia": "BG"
        }, {
            "comune": "Misano di Gera d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Moio de' Calvi",
            "provincia": "BG"
        }, {
            "comune": "Monasterolo del Castello",
            "provincia": "BG"
        }, {
            "comune": "Montello",
            "provincia": "BG"
        }, {
            "comune": "Morengo",
            "provincia": "BG"
        }, {
            "comune": "Mornico al Serio",
            "provincia": "BG"
        }, {
            "comune": "Mozzanica",
            "provincia": "BG"
        }, {
            "comune": "Mozzo",
            "provincia": "BG"
        }, {
            "comune": "Nembro",
            "provincia": "BG"
        }, {
            "comune": "Olmo al Brembo",
            "provincia": "BG"
        }, {
            "comune": "Oltre il Colle",
            "provincia": "BG"
        }, {
            "comune": "Oltressenda Alta",
            "provincia": "BG"
        }, {
            "comune": "Oneta",
            "provincia": "BG"
        }, {
            "comune": "Onore",
            "provincia": "BG"
        }, {
            "comune": "Orio al Serio",
            "provincia": "BG"
        }, {
            "comune": "Ornica",
            "provincia": "BG"
        }, {
            "comune": "Osio Sopra",
            "provincia": "BG"
        }, {
            "comune": "Osio Sotto",
            "provincia": "BG"
        }, {
            "comune": "Pagazzano",
            "provincia": "BG"
        }, {
            "comune": "Paladina",
            "provincia": "BG"
        }, {
            "comune": "Palazzago",
            "provincia": "BG"
        }, {
            "comune": "Palosco",
            "provincia": "BG"
        }, {
            "comune": "Parre",
            "provincia": "BG"
        }, {
            "comune": "Parzanica",
            "provincia": "BG"
        }, {
            "comune": "Pedrengo",
            "provincia": "BG"
        }, {
            "comune": "Peia",
            "provincia": "BG"
        }, {
            "comune": "Pianico",
            "provincia": "BG"
        }, {
            "comune": "Piario",
            "provincia": "BG"
        }, {
            "comune": "Piazza Brembana",
            "provincia": "BG"
        }, {
            "comune": "Piazzatorre",
            "provincia": "BG"
        }, {
            "comune": "Piazzolo",
            "provincia": "BG"
        }, {
            "comune": "Pognano",
            "provincia": "BG"
        }, {
            "comune": "Ponte Nossa",
            "provincia": "BG"
        }, {
            "comune": "Ponteranica",
            "provincia": "BG"
        }, {
            "comune": "Ponte San Pietro",
            "provincia": "BG"
        }, {
            "comune": "Pontida",
            "provincia": "BG"
        }, {
            "comune": "Pontirolo Nuovo",
            "provincia": "BG"
        }, {
            "comune": "Pradalunga",
            "provincia": "BG"
        }, {
            "comune": "Predore",
            "provincia": "BG"
        }, {
            "comune": "Premolo",
            "provincia": "BG"
        }, {
            "comune": "Presezzo",
            "provincia": "BG"
        }, {
            "comune": "Pumenengo",
            "provincia": "BG"
        }, {
            "comune": "Ranica",
            "provincia": "BG"
        }, {
            "comune": "Ranzanico",
            "provincia": "BG"
        }, {
            "comune": "Riva di Solto",
            "provincia": "BG"
        }, {
            "comune": "Rogno",
            "provincia": "BG"
        }, {
            "comune": "Romano di Lombardia",
            "provincia": "BG"
        }, {
            "comune": "Roncobello",
            "provincia": "BG"
        }, {
            "comune": "Roncola",
            "provincia": "BG"
        }, {
            "comune": "Rota d'Imagna",
            "provincia": "BG"
        }, {
            "comune": "Rovetta",
            "provincia": "BG"
        }, {
            "comune": "San Giovanni Bianco",
            "provincia": "BG"
        }, {
            "comune": "San Paolo d'Argon",
            "provincia": "BG"
        }, {
            "comune": "San Pellegrino Terme",
            "provincia": "BG"
        }, {
            "comune": "Santa Brigida",
            "provincia": "BG"
        }, {
            "comune": "Sarnico",
            "provincia": "BG"
        }, {
            "comune": "Scanzorosciate",
            "provincia": "BG"
        }, {
            "comune": "Schilpario",
            "provincia": "BG"
        }, {
            "comune": "Sedrina",
            "provincia": "BG"
        }, {
            "comune": "Selvino",
            "provincia": "BG"
        }, {
            "comune": "Seriate",
            "provincia": "BG"
        }, {
            "comune": "Serina",
            "provincia": "BG"
        }, {
            "comune": "Solto Collina",
            "provincia": "BG"
        }, {
            "comune": "Songavazzo",
            "provincia": "BG"
        }, {
            "comune": "Sorisole",
            "provincia": "BG"
        }, {
            "comune": "Sotto il Monte Giovanni XXIII",
            "provincia": "BG"
        }, {
            "comune": "Sovere",
            "provincia": "BG"
        }, {
            "comune": "Spinone al Lago",
            "provincia": "BG"
        }, {
            "comune": "Spirano",
            "provincia": "BG"
        }, {
            "comune": "Stezzano",
            "provincia": "BG"
        }, {
            "comune": "Strozza",
            "provincia": "BG"
        }, {
            "comune": "Suisio",
            "provincia": "BG"
        }, {
            "comune": "Taleggio",
            "provincia": "BG"
        }, {
            "comune": "Tavernola Bergamasca",
            "provincia": "BG"
        }, {
            "comune": "Telgate",
            "provincia": "BG"
        }, {
            "comune": "Terno d'Isola",
            "provincia": "BG"
        }, {
            "comune": "Torre Boldone",
            "provincia": "BG"
        }, {
            "comune": "Torre de' Roveri",
            "provincia": "BG"
        }, {
            "comune": "Torre Pallavicina",
            "provincia": "BG"
        }, {
            "comune": "Trescore Balneario",
            "provincia": "BG"
        }, {
            "comune": "Treviglio",
            "provincia": "BG"
        }, {
            "comune": "Treviolo",
            "provincia": "BG"
        }, {
            "comune": "Ubiale Clanezzo",
            "provincia": "BG"
        }, {
            "comune": "Urgnano",
            "provincia": "BG"
        }, {
            "comune": "Valbondione",
            "provincia": "BG"
        }, {
            "comune": "Valbrembo",
            "provincia": "BG"
        }, {
            "comune": "Valgoglio",
            "provincia": "BG"
        }, {
            "comune": "Valleve",
            "provincia": "BG"
        }, {
            "comune": "Valnegra",
            "provincia": "BG"
        }, {
            "comune": "Valtorta",
            "provincia": "BG"
        }, {
            "comune": "Vedeseta",
            "provincia": "BG"
        }, {
            "comune": "Verdellino",
            "provincia": "BG"
        }, {
            "comune": "Verdello",
            "provincia": "BG"
        }, {
            "comune": "Vertova",
            "provincia": "BG"
        }, {
            "comune": "Viadanica",
            "provincia": "BG"
        }, {
            "comune": "Vigano San Martino",
            "provincia": "BG"
        }, {
            "comune": "Vigolo",
            "provincia": "BG"
        }, {
            "comune": "Villa d'Adda",
            "provincia": "BG"
        }, {
            "comune": "Villa d'Almè",
            "provincia": "BG"
        }, {
            "comune": "Villa di Serio",
            "provincia": "BG"
        }, {
            "comune": "Villa d'Ogna",
            "provincia": "BG"
        }, {
            "comune": "Villongo",
            "provincia": "BG"
        }, {
            "comune": "Vilminore di Scalve",
            "provincia": "BG"
        }, {
            "comune": "Zandobbio",
            "provincia": "BG"
        }, {
            "comune": "Zanica",
            "provincia": "BG"
        }, {
            "comune": "Zogno",
            "provincia": "BG"
        }, {
            "comune": "Costa Serina",
            "provincia": "BG"
        }, {
            "comune": "Algua",
            "provincia": "BG"
        }, {
            "comune": "Cornalba",
            "provincia": "BG"
        }, {
            "comune": "Medolago",
            "provincia": "BG"
        }, {
            "comune": "Solza",
            "provincia": "BG"
        }, {
            "comune": "Sant'Omobono Terme",
            "provincia": "BG"
        }, {
            "comune": "Val Brembilla",
            "provincia": "BG"
        }, {
            "comune": "Acquafredda",
            "provincia": "BS"
        }, {
            "comune": "Adro",
            "provincia": "BS"
        }, {
            "comune": "Agnosine",
            "provincia": "BS"
        }, {
            "comune": "Alfianello",
            "provincia": "BS"
        }, {
            "comune": "Anfo",
            "provincia": "BS"
        }, {
            "comune": "Angolo Terme",
            "provincia": "BS"
        }, {
            "comune": "Artogne",
            "provincia": "BS"
        }, {
            "comune": "Azzano Mella",
            "provincia": "BS"
        }, {
            "comune": "Bagnolo Mella",
            "provincia": "BS"
        }, {
            "comune": "Bagolino",
            "provincia": "BS"
        }, {
            "comune": "Barbariga",
            "provincia": "BS"
        }, {
            "comune": "Barghe",
            "provincia": "BS"
        }, {
            "comune": "Bassano Bresciano",
            "provincia": "BS"
        }, {
            "comune": "Bedizzole",
            "provincia": "BS"
        }, {
            "comune": "Berlingo",
            "provincia": "BS"
        }, {
            "comune": "Berzo Demo",
            "provincia": "BS"
        }, {
            "comune": "Berzo Inferiore",
            "provincia": "BS"
        }, {
            "comune": "Bienno",
            "provincia": "BS"
        }, {
            "comune": "Bione",
            "provincia": "BS"
        }, {
            "comune": "Borgo San Giacomo",
            "provincia": "BS"
        }, {
            "comune": "Borgosatollo",
            "provincia": "BS"
        }, {
            "comune": "Borno",
            "provincia": "BS"
        }, {
            "comune": "Botticino",
            "provincia": "BS"
        }, {
            "comune": "Bovegno",
            "provincia": "BS"
        }, {
            "comune": "Bovezzo",
            "provincia": "BS"
        }, {
            "comune": "Brandico",
            "provincia": "BS"
        }, {
            "comune": "Braone",
            "provincia": "BS"
        }, {
            "comune": "Breno",
            "provincia": "BS"
        }, {
            "comune": "Brescia",
            "provincia": "BS"
        }, {
            "comune": "Brione",
            "provincia": "BS"
        }, {
            "comune": "Caino",
            "provincia": "BS"
        }, {
            "comune": "Calcinato",
            "provincia": "BS"
        }, {
            "comune": "Calvagese della Riviera",
            "provincia": "BS"
        }, {
            "comune": "Calvisano",
            "provincia": "BS"
        }, {
            "comune": "Capo di Ponte",
            "provincia": "BS"
        }, {
            "comune": "Capovalle",
            "provincia": "BS"
        }, {
            "comune": "Capriano del Colle",
            "provincia": "BS"
        }, {
            "comune": "Capriolo",
            "provincia": "BS"
        }, {
            "comune": "Carpenedolo",
            "provincia": "BS"
        }, {
            "comune": "Castegnato",
            "provincia": "BS"
        }, {
            "comune": "Castelcovati",
            "provincia": "BS"
        }, {
            "comune": "Castel Mella",
            "provincia": "BS"
        }, {
            "comune": "Castenedolo",
            "provincia": "BS"
        }, {
            "comune": "Casto",
            "provincia": "BS"
        }, {
            "comune": "Castrezzato",
            "provincia": "BS"
        }, {
            "comune": "Cazzago San Martino",
            "provincia": "BS"
        }, {
            "comune": "Cedegolo",
            "provincia": "BS"
        }, {
            "comune": "Cellatica",
            "provincia": "BS"
        }, {
            "comune": "Cerveno",
            "provincia": "BS"
        }, {
            "comune": "Ceto",
            "provincia": "BS"
        }, {
            "comune": "Cevo",
            "provincia": "BS"
        }, {
            "comune": "Chiari",
            "provincia": "BS"
        }, {
            "comune": "Cigole",
            "provincia": "BS"
        }, {
            "comune": "Cimbergo",
            "provincia": "BS"
        }, {
            "comune": "Cividate Camuno",
            "provincia": "BS"
        }, {
            "comune": "Coccaglio",
            "provincia": "BS"
        }, {
            "comune": "Collebeato",
            "provincia": "BS"
        }, {
            "comune": "Collio",
            "provincia": "BS"
        }, {
            "comune": "Cologne",
            "provincia": "BS"
        }, {
            "comune": "Comezzano-Cizzago",
            "provincia": "BS"
        }, {
            "comune": "Concesio",
            "provincia": "BS"
        }, {
            "comune": "Corte Franca",
            "provincia": "BS"
        }, {
            "comune": "Corteno Golgi",
            "provincia": "BS"
        }, {
            "comune": "Corzano",
            "provincia": "BS"
        }, {
            "comune": "Darfo Boario Terme",
            "provincia": "BS"
        }, {
            "comune": "Dello",
            "provincia": "BS"
        }, {
            "comune": "Desenzano del Garda",
            "provincia": "BS"
        }, {
            "comune": "Edolo",
            "provincia": "BS"
        }, {
            "comune": "Erbusco",
            "provincia": "BS"
        }, {
            "comune": "Esine",
            "provincia": "BS"
        }, {
            "comune": "Fiesse",
            "provincia": "BS"
        }, {
            "comune": "Flero",
            "provincia": "BS"
        }, {
            "comune": "Gambara",
            "provincia": "BS"
        }, {
            "comune": "Gardone Riviera",
            "provincia": "BS"
        }, {
            "comune": "Gardone Val Trompia",
            "provincia": "BS"
        }, {
            "comune": "Gargnano",
            "provincia": "BS"
        }, {
            "comune": "Gavardo",
            "provincia": "BS"
        }, {
            "comune": "Ghedi",
            "provincia": "BS"
        }, {
            "comune": "Gianico",
            "provincia": "BS"
        }, {
            "comune": "Gottolengo",
            "provincia": "BS"
        }, {
            "comune": "Gussago",
            "provincia": "BS"
        }, {
            "comune": "Idro",
            "provincia": "BS"
        }, {
            "comune": "Incudine",
            "provincia": "BS"
        }, {
            "comune": "Irma",
            "provincia": "BS"
        }, {
            "comune": "Iseo",
            "provincia": "BS"
        }, {
            "comune": "Isorella",
            "provincia": "BS"
        }, {
            "comune": "Lavenone",
            "provincia": "BS"
        }, {
            "comune": "Leno",
            "provincia": "BS"
        }, {
            "comune": "Limone sul Garda",
            "provincia": "BS"
        }, {
            "comune": "Lodrino",
            "provincia": "BS"
        }, {
            "comune": "Lograto",
            "provincia": "BS"
        }, {
            "comune": "Lonato del Garda",
            "provincia": "BS"
        }, {
            "comune": "Longhena",
            "provincia": "BS"
        }, {
            "comune": "Losine",
            "provincia": "BS"
        }, {
            "comune": "Lozio",
            "provincia": "BS"
        }, {
            "comune": "Lumezzane",
            "provincia": "BS"
        }, {
            "comune": "Maclodio",
            "provincia": "BS"
        }, {
            "comune": "Magasa",
            "provincia": "BS"
        }, {
            "comune": "Mairano",
            "provincia": "BS"
        }, {
            "comune": "Malegno",
            "provincia": "BS"
        }, {
            "comune": "Malonno",
            "provincia": "BS"
        }, {
            "comune": "Manerba del Garda",
            "provincia": "BS"
        }, {
            "comune": "Manerbio",
            "provincia": "BS"
        }, {
            "comune": "Marcheno",
            "provincia": "BS"
        }, {
            "comune": "Marmentino",
            "provincia": "BS"
        }, {
            "comune": "Marone",
            "provincia": "BS"
        }, {
            "comune": "Mazzano",
            "provincia": "BS"
        }, {
            "comune": "Milzano",
            "provincia": "BS"
        }, {
            "comune": "Moniga del Garda",
            "provincia": "BS"
        }, {
            "comune": "Monno",
            "provincia": "BS"
        }, {
            "comune": "Monte Isola",
            "provincia": "BS"
        }, {
            "comune": "Monticelli Brusati",
            "provincia": "BS"
        }, {
            "comune": "Montichiari",
            "provincia": "BS"
        }, {
            "comune": "Montirone",
            "provincia": "BS"
        }, {
            "comune": "Mura",
            "provincia": "BS"
        }, {
            "comune": "Muscoline",
            "provincia": "BS"
        }, {
            "comune": "Nave",
            "provincia": "BS"
        }, {
            "comune": "Niardo",
            "provincia": "BS"
        }, {
            "comune": "Nuvolento",
            "provincia": "BS"
        }, {
            "comune": "Nuvolera",
            "provincia": "BS"
        }, {
            "comune": "Odolo",
            "provincia": "BS"
        }, {
            "comune": "Offlaga",
            "provincia": "BS"
        }, {
            "comune": "Ome",
            "provincia": "BS"
        }, {
            "comune": "Ono San Pietro",
            "provincia": "BS"
        }, {
            "comune": "Orzinuovi",
            "provincia": "BS"
        }, {
            "comune": "Orzivecchi",
            "provincia": "BS"
        }, {
            "comune": "Ospitaletto",
            "provincia": "BS"
        }, {
            "comune": "Ossimo",
            "provincia": "BS"
        }, {
            "comune": "Padenghe sul Garda",
            "provincia": "BS"
        }, {
            "comune": "Paderno Franciacorta",
            "provincia": "BS"
        }, {
            "comune": "Paisco Loveno",
            "provincia": "BS"
        }, {
            "comune": "Paitone",
            "provincia": "BS"
        }, {
            "comune": "Palazzolo sull'Oglio",
            "provincia": "BS"
        }, {
            "comune": "Paratico",
            "provincia": "BS"
        }, {
            "comune": "Paspardo",
            "provincia": "BS"
        }, {
            "comune": "Passirano",
            "provincia": "BS"
        }, {
            "comune": "Pavone del Mella",
            "provincia": "BS"
        }, {
            "comune": "San Paolo",
            "provincia": "BS"
        }, {
            "comune": "Pertica Alta",
            "provincia": "BS"
        }, {
            "comune": "Pertica Bassa",
            "provincia": "BS"
        }, {
            "comune": "Pezzaze",
            "provincia": "BS"
        }, {
            "comune": "Pian Camuno",
            "provincia": "BS"
        }, {
            "comune": "Pisogne",
            "provincia": "BS"
        }, {
            "comune": "Polaveno",
            "provincia": "BS"
        }, {
            "comune": "Polpenazze del Garda",
            "provincia": "BS"
        }, {
            "comune": "Pompiano",
            "provincia": "BS"
        }, {
            "comune": "Poncarale",
            "provincia": "BS"
        }, {
            "comune": "Ponte di Legno",
            "provincia": "BS"
        }, {
            "comune": "Pontevico",
            "provincia": "BS"
        }, {
            "comune": "Pontoglio",
            "provincia": "BS"
        }, {
            "comune": "Pozzolengo",
            "provincia": "BS"
        }, {
            "comune": "Pralboino",
            "provincia": "BS"
        }, {
            "comune": "Preseglie",
            "provincia": "BS"
        }, {
            "comune": "Prevalle",
            "provincia": "BS"
        }, {
            "comune": "Provaglio d'Iseo",
            "provincia": "BS"
        }, {
            "comune": "Provaglio Val Sabbia",
            "provincia": "BS"
        }, {
            "comune": "Puegnago sul Garda",
            "provincia": "BS"
        }, {
            "comune": "Quinzano d'Oglio",
            "provincia": "BS"
        }, {
            "comune": "Remedello",
            "provincia": "BS"
        }, {
            "comune": "Rezzato",
            "provincia": "BS"
        }, {
            "comune": "Roccafranca",
            "provincia": "BS"
        }, {
            "comune": "Rodengo Saiano",
            "provincia": "BS"
        }, {
            "comune": "Roè Volciano",
            "provincia": "BS"
        }, {
            "comune": "Roncadelle",
            "provincia": "BS"
        }, {
            "comune": "Rovato",
            "provincia": "BS"
        }, {
            "comune": "Rudiano",
            "provincia": "BS"
        }, {
            "comune": "Sabbio Chiese",
            "provincia": "BS"
        }, {
            "comune": "Sale Marasino",
            "provincia": "BS"
        }, {
            "comune": "Salò",
            "provincia": "BS"
        }, {
            "comune": "San Felice del Benaco",
            "provincia": "BS"
        }, {
            "comune": "San Gervasio Bresciano",
            "provincia": "BS"
        }, {
            "comune": "San Zeno Naviglio",
            "provincia": "BS"
        }, {
            "comune": "Sarezzo",
            "provincia": "BS"
        }, {
            "comune": "Saviore dell'Adamello",
            "provincia": "BS"
        }, {
            "comune": "Sellero",
            "provincia": "BS"
        }, {
            "comune": "Seniga",
            "provincia": "BS"
        }, {
            "comune": "Serle",
            "provincia": "BS"
        }, {
            "comune": "Sirmione",
            "provincia": "BS"
        }, {
            "comune": "Soiano del Lago",
            "provincia": "BS"
        }, {
            "comune": "Sonico",
            "provincia": "BS"
        }, {
            "comune": "Sulzano",
            "provincia": "BS"
        }, {
            "comune": "Tavernole sul Mella",
            "provincia": "BS"
        }, {
            "comune": "Temù",
            "provincia": "BS"
        }, {
            "comune": "Tignale",
            "provincia": "BS"
        }, {
            "comune": "Torbole Casaglia",
            "provincia": "BS"
        }, {
            "comune": "Toscolano-Maderno",
            "provincia": "BS"
        }, {
            "comune": "Travagliato",
            "provincia": "BS"
        }, {
            "comune": "Tremosine sul Garda",
            "provincia": "BS"
        }, {
            "comune": "Trenzano",
            "provincia": "BS"
        }, {
            "comune": "Treviso Bresciano",
            "provincia": "BS"
        }, {
            "comune": "Urago d'Oglio",
            "provincia": "BS"
        }, {
            "comune": "Vallio Terme",
            "provincia": "BS"
        }, {
            "comune": "Valvestino",
            "provincia": "BS"
        }, {
            "comune": "Verolanuova",
            "provincia": "BS"
        }, {
            "comune": "Verolavecchia",
            "provincia": "BS"
        }, {
            "comune": "Vestone",
            "provincia": "BS"
        }, {
            "comune": "Vezza d'Oglio",
            "provincia": "BS"
        }, {
            "comune": "Villa Carcina",
            "provincia": "BS"
        }, {
            "comune": "Villachiara",
            "provincia": "BS"
        }, {
            "comune": "Villanuova sul Clisi",
            "provincia": "BS"
        }, {
            "comune": "Vione",
            "provincia": "BS"
        }, {
            "comune": "Visano",
            "provincia": "BS"
        }, {
            "comune": "Vobarno",
            "provincia": "BS"
        }, {
            "comune": "Zone",
            "provincia": "BS"
        }, {
            "comune": "Piancogno",
            "provincia": "BS"
        }, {
            "comune": "Alagna",
            "provincia": "PV"
        }, {
            "comune": "Albaredo Arnaboldi",
            "provincia": "PV"
        }, {
            "comune": "Albonese",
            "provincia": "PV"
        }, {
            "comune": "Albuzzano",
            "provincia": "PV"
        }, {
            "comune": "Arena Po",
            "provincia": "PV"
        }, {
            "comune": "Badia Pavese",
            "provincia": "PV"
        }, {
            "comune": "Bagnaria",
            "provincia": "PV"
        }, {
            "comune": "Barbianello",
            "provincia": "PV"
        }, {
            "comune": "Bascapè",
            "provincia": "PV"
        }, {
            "comune": "Bastida Pancarana",
            "provincia": "PV"
        }, {
            "comune": "Battuda",
            "provincia": "PV"
        }, {
            "comune": "Belgioioso",
            "provincia": "PV"
        }, {
            "comune": "Bereguardo",
            "provincia": "PV"
        }, {
            "comune": "Borgarello",
            "provincia": "PV"
        }, {
            "comune": "Borgo Priolo",
            "provincia": "PV"
        }, {
            "comune": "Borgoratto Mormorolo",
            "provincia": "PV"
        }, {
            "comune": "Borgo San Siro",
            "provincia": "PV"
        }, {
            "comune": "Bornasco",
            "provincia": "PV"
        }, {
            "comune": "Bosnasco",
            "provincia": "PV"
        }, {
            "comune": "Brallo di Pregola",
            "provincia": "PV"
        }, {
            "comune": "Breme",
            "provincia": "PV"
        }, {
            "comune": "Bressana Bottarone",
            "provincia": "PV"
        }, {
            "comune": "Broni",
            "provincia": "PV"
        }, {
            "comune": "Calvignano",
            "provincia": "PV"
        }, {
            "comune": "Campospinoso",
            "provincia": "PV"
        }, {
            "comune": "Candia Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Canevino",
            "provincia": "PV"
        }, {
            "comune": "Canneto Pavese",
            "provincia": "PV"
        }, {
            "comune": "Carbonara al Ticino",
            "provincia": "PV"
        }, {
            "comune": "Casanova Lonati",
            "provincia": "PV"
        }, {
            "comune": "Casatisma",
            "provincia": "PV"
        }, {
            "comune": "Casei Gerola",
            "provincia": "PV"
        }, {
            "comune": "Casorate Primo",
            "provincia": "PV"
        }, {
            "comune": "Cassolnovo",
            "provincia": "PV"
        }, {
            "comune": "Castana",
            "provincia": "PV"
        }, {
            "comune": "Casteggio",
            "provincia": "PV"
        }, {
            "comune": "Castelletto di Branduzzo",
            "provincia": "PV"
        }, {
            "comune": "Castello d'Agogna",
            "provincia": "PV"
        }, {
            "comune": "Castelnovetto",
            "provincia": "PV"
        }, {
            "comune": "Cava Manara",
            "provincia": "PV"
        }, {
            "comune": "Cecima",
            "provincia": "PV"
        }, {
            "comune": "Ceranova",
            "provincia": "PV"
        }, {
            "comune": "Ceretto Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Cergnago",
            "provincia": "PV"
        }, {
            "comune": "Certosa di Pavia",
            "provincia": "PV"
        }, {
            "comune": "Cervesina",
            "provincia": "PV"
        }, {
            "comune": "Chignolo Po",
            "provincia": "PV"
        }, {
            "comune": "Cigognola",
            "provincia": "PV"
        }, {
            "comune": "Cilavegna",
            "provincia": "PV"
        }, {
            "comune": "Codevilla",
            "provincia": "PV"
        }, {
            "comune": "Confienza",
            "provincia": "PV"
        }, {
            "comune": "Copiano",
            "provincia": "PV"
        }, {
            "comune": "Corana",
            "provincia": "PV"
        }, {
            "comune": "Corvino San Quirico",
            "provincia": "PV"
        }, {
            "comune": "Costa de' Nobili",
            "provincia": "PV"
        }, {
            "comune": "Cozzo",
            "provincia": "PV"
        }, {
            "comune": "Cura Carpignano",
            "provincia": "PV"
        }, {
            "comune": "Dorno",
            "provincia": "PV"
        }, {
            "comune": "Ferrera Erbognone",
            "provincia": "PV"
        }, {
            "comune": "Filighera",
            "provincia": "PV"
        }, {
            "comune": "Fortunago",
            "provincia": "PV"
        }, {
            "comune": "Frascarolo",
            "provincia": "PV"
        }, {
            "comune": "Galliavola",
            "provincia": "PV"
        }, {
            "comune": "Gambarana",
            "provincia": "PV"
        }, {
            "comune": "Gambolò",
            "provincia": "PV"
        }, {
            "comune": "Garlasco",
            "provincia": "PV"
        }, {
            "comune": "Gerenzago",
            "provincia": "PV"
        }, {
            "comune": "Giussago",
            "provincia": "PV"
        }, {
            "comune": "Godiasco Salice Terme",
            "provincia": "PV"
        }, {
            "comune": "Golferenzo",
            "provincia": "PV"
        }, {
            "comune": "Gravellona Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Gropello Cairoli",
            "provincia": "PV"
        }, {
            "comune": "Inverno e Monteleone",
            "provincia": "PV"
        }, {
            "comune": "Landriano",
            "provincia": "PV"
        }, {
            "comune": "Langosco",
            "provincia": "PV"
        }, {
            "comune": "Lardirago",
            "provincia": "PV"
        }, {
            "comune": "Linarolo",
            "provincia": "PV"
        }, {
            "comune": "Lirio",
            "provincia": "PV"
        }, {
            "comune": "Lomello",
            "provincia": "PV"
        }, {
            "comune": "Lungavilla",
            "provincia": "PV"
        }, {
            "comune": "Magherno",
            "provincia": "PV"
        }, {
            "comune": "Marcignago",
            "provincia": "PV"
        }, {
            "comune": "Marzano",
            "provincia": "PV"
        }, {
            "comune": "Mede",
            "provincia": "PV"
        }, {
            "comune": "Menconico",
            "provincia": "PV"
        }, {
            "comune": "Mezzana Bigli",
            "provincia": "PV"
        }, {
            "comune": "Mezzana Rabattone",
            "provincia": "PV"
        }, {
            "comune": "Mezzanino",
            "provincia": "PV"
        }, {
            "comune": "Miradolo Terme",
            "provincia": "PV"
        }, {
            "comune": "Montalto Pavese",
            "provincia": "PV"
        }, {
            "comune": "Montebello della Battaglia",
            "provincia": "PV"
        }, {
            "comune": "Montecalvo Versiggia",
            "provincia": "PV"
        }, {
            "comune": "Montescano",
            "provincia": "PV"
        }, {
            "comune": "Montesegale",
            "provincia": "PV"
        }, {
            "comune": "Monticelli Pavese",
            "provincia": "PV"
        }, {
            "comune": "Montù Beccaria",
            "provincia": "PV"
        }, {
            "comune": "Mornico Losana",
            "provincia": "PV"
        }, {
            "comune": "Mortara",
            "provincia": "PV"
        }, {
            "comune": "Nicorvo",
            "provincia": "PV"
        }, {
            "comune": "Olevano di Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Oliva Gessi",
            "provincia": "PV"
        }, {
            "comune": "Ottobiano",
            "provincia": "PV"
        }, {
            "comune": "Palestro",
            "provincia": "PV"
        }, {
            "comune": "Pancarana",
            "provincia": "PV"
        }, {
            "comune": "Parona",
            "provincia": "PV"
        }, {
            "comune": "Pavia",
            "provincia": "PV"
        }, {
            "comune": "Pietra de' Giorgi",
            "provincia": "PV"
        }, {
            "comune": "Pieve Albignola",
            "provincia": "PV"
        }, {
            "comune": "Pieve del Cairo",
            "provincia": "PV"
        }, {
            "comune": "Pieve Porto Morone",
            "provincia": "PV"
        }, {
            "comune": "Pinarolo Po",
            "provincia": "PV"
        }, {
            "comune": "Pizzale",
            "provincia": "PV"
        }, {
            "comune": "Ponte Nizza",
            "provincia": "PV"
        }, {
            "comune": "Portalbera",
            "provincia": "PV"
        }, {
            "comune": "Rea",
            "provincia": "PV"
        }, {
            "comune": "Redavalle",
            "provincia": "PV"
        }, {
            "comune": "Retorbido",
            "provincia": "PV"
        }, {
            "comune": "Rivanazzano Terme",
            "provincia": "PV"
        }, {
            "comune": "Robbio",
            "provincia": "PV"
        }, {
            "comune": "Robecco Pavese",
            "provincia": "PV"
        }, {
            "comune": "Rocca de' Giorgi",
            "provincia": "PV"
        }, {
            "comune": "Rocca Susella",
            "provincia": "PV"
        }, {
            "comune": "Rognano",
            "provincia": "PV"
        }, {
            "comune": "Romagnese",
            "provincia": "PV"
        }, {
            "comune": "Roncaro",
            "provincia": "PV"
        }, {
            "comune": "Rosasco",
            "provincia": "PV"
        }, {
            "comune": "Rovescala",
            "provincia": "PV"
        }, {
            "comune": "Ruino",
            "provincia": "PV"
        }, {
            "comune": "San Cipriano Po",
            "provincia": "PV"
        }, {
            "comune": "San Damiano al Colle",
            "provincia": "PV"
        }, {
            "comune": "San Genesio ed Uniti",
            "provincia": "PV"
        }, {
            "comune": "San Giorgio di Lomellina",
            "provincia": "PV"
        }, {
            "comune": "San Martino Siccomario",
            "provincia": "PV"
        }, {
            "comune": "Sannazzaro de' Burgondi",
            "provincia": "PV"
        }, {
            "comune": "Santa Cristina e Bissone",
            "provincia": "PV"
        }, {
            "comune": "Santa Giuletta",
            "provincia": "PV"
        }, {
            "comune": "Sant'Alessio con Vialone",
            "provincia": "PV"
        }, {
            "comune": "Santa Margherita di Staffora",
            "provincia": "PV"
        }, {
            "comune": "Santa Maria della Versa",
            "provincia": "PV"
        }, {
            "comune": "Sant'Angelo Lomellina",
            "provincia": "PV"
        }, {
            "comune": "San Zenone al Po",
            "provincia": "PV"
        }, {
            "comune": "Sartirana Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Scaldasole",
            "provincia": "PV"
        }, {
            "comune": "Semiana",
            "provincia": "PV"
        }, {
            "comune": "Silvano Pietra",
            "provincia": "PV"
        }, {
            "comune": "Siziano",
            "provincia": "PV"
        }, {
            "comune": "Sommo",
            "provincia": "PV"
        }, {
            "comune": "Spessa",
            "provincia": "PV"
        }, {
            "comune": "Stradella",
            "provincia": "PV"
        }, {
            "comune": "Suardi",
            "provincia": "PV"
        }, {
            "comune": "Torrazza Coste",
            "provincia": "PV"
        }, {
            "comune": "Torre Beretti e Castellaro",
            "provincia": "PV"
        }, {
            "comune": "Torre d'Arese",
            "provincia": "PV"
        }, {
            "comune": "Torre de' Negri",
            "provincia": "PV"
        }, {
            "comune": "Torre d'Isola",
            "provincia": "PV"
        }, {
            "comune": "Torrevecchia Pia",
            "provincia": "PV"
        }, {
            "comune": "Torricella Verzate",
            "provincia": "PV"
        }, {
            "comune": "Travacò Siccomario",
            "provincia": "PV"
        }, {
            "comune": "Trivolzio",
            "provincia": "PV"
        }, {
            "comune": "Tromello",
            "provincia": "PV"
        }, {
            "comune": "Trovo",
            "provincia": "PV"
        }, {
            "comune": "Val di Nizza",
            "provincia": "PV"
        }, {
            "comune": "Valeggio",
            "provincia": "PV"
        }, {
            "comune": "Valle Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Valle Salimbene",
            "provincia": "PV"
        }, {
            "comune": "Valverde",
            "provincia": "PV"
        }, {
            "comune": "Varzi",
            "provincia": "PV"
        }, {
            "comune": "Velezzo Lomellina",
            "provincia": "PV"
        }, {
            "comune": "Vellezzo Bellini",
            "provincia": "PV"
        }, {
            "comune": "Verretto",
            "provincia": "PV"
        }, {
            "comune": "Verrua Po",
            "provincia": "PV"
        }, {
            "comune": "Vidigulfo",
            "provincia": "PV"
        }, {
            "comune": "Vigevano",
            "provincia": "PV"
        }, {
            "comune": "Villa Biscossi",
            "provincia": "PV"
        }, {
            "comune": "Villanova d'Ardenghi",
            "provincia": "PV"
        }, {
            "comune": "Villanterio",
            "provincia": "PV"
        }, {
            "comune": "Vistarino",
            "provincia": "PV"
        }, {
            "comune": "Voghera",
            "provincia": "PV"
        }, {
            "comune": "Volpara",
            "provincia": "PV"
        }, {
            "comune": "Zavattarello",
            "provincia": "PV"
        }, {
            "comune": "Zeccone",
            "provincia": "PV"
        }, {
            "comune": "Zeme",
            "provincia": "PV"
        }, {
            "comune": "Zenevredo",
            "provincia": "PV"
        }, {
            "comune": "Zerbo",
            "provincia": "PV"
        }, {
            "comune": "Zerbolò",
            "provincia": "PV"
        }, {
            "comune": "Zinasco",
            "provincia": "PV"
        }, {
            "comune": "Cornale e Bastida",
            "provincia": "PV"
        }, {
            "comune": "Corteolona e Genzone",
            "provincia": "PV"
        }, {
            "comune": "Acquanegra Cremonese",
            "provincia": "CR"
        }, {
            "comune": "Agnadello",
            "provincia": "CR"
        }, {
            "comune": "Annicco",
            "provincia": "CR"
        }, {
            "comune": "Azzanello",
            "provincia": "CR"
        }, {
            "comune": "Bagnolo Cremasco",
            "provincia": "CR"
        }, {
            "comune": "Bonemerse",
            "provincia": "CR"
        }, {
            "comune": "Bordolano",
            "provincia": "CR"
        }, {
            "comune": "Ca' d'Andrea",
            "provincia": "CR"
        }, {
            "comune": "Calvatone",
            "provincia": "CR"
        }, {
            "comune": "Camisano",
            "provincia": "CR"
        }, {
            "comune": "Campagnola Cremasca",
            "provincia": "CR"
        }, {
            "comune": "Capergnanica",
            "provincia": "CR"
        }, {
            "comune": "Cappella Cantone",
            "provincia": "CR"
        }, {
            "comune": "Cappella de' Picenardi",
            "provincia": "CR"
        }, {
            "comune": "Capralba",
            "provincia": "CR"
        }, {
            "comune": "Casalbuttano ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Casale Cremasco-Vidolasco",
            "provincia": "CR"
        }, {
            "comune": "Casaletto Ceredano",
            "provincia": "CR"
        }, {
            "comune": "Casaletto di Sopra",
            "provincia": "CR"
        }, {
            "comune": "Casaletto Vaprio",
            "provincia": "CR"
        }, {
            "comune": "Casalmaggiore",
            "provincia": "CR"
        }, {
            "comune": "Casalmorano",
            "provincia": "CR"
        }, {
            "comune": "Casteldidone",
            "provincia": "CR"
        }, {
            "comune": "Castel Gabbiano",
            "provincia": "CR"
        }, {
            "comune": "Castelleone",
            "provincia": "CR"
        }, {
            "comune": "Castelverde",
            "provincia": "CR"
        }, {
            "comune": "Castelvisconti",
            "provincia": "CR"
        }, {
            "comune": "Cella Dati",
            "provincia": "CR"
        }, {
            "comune": "Chieve",
            "provincia": "CR"
        }, {
            "comune": "Cicognolo",
            "provincia": "CR"
        }, {
            "comune": "Cingia de' Botti",
            "provincia": "CR"
        }, {
            "comune": "Corte de' Cortesi con Cignone",
            "provincia": "CR"
        }, {
            "comune": "Corte de' Frati",
            "provincia": "CR"
        }, {
            "comune": "Credera Rubbiano",
            "provincia": "CR"
        }, {
            "comune": "Crema",
            "provincia": "CR"
        }, {
            "comune": "Cremona",
            "provincia": "CR"
        }, {
            "comune": "Cremosano",
            "provincia": "CR"
        }, {
            "comune": "Crotta d'Adda",
            "provincia": "CR"
        }, {
            "comune": "Cumignano sul Naviglio",
            "provincia": "CR"
        }, {
            "comune": "Derovere",
            "provincia": "CR"
        }, {
            "comune": "Dovera",
            "provincia": "CR"
        }, {
            "comune": "Drizzona",
            "provincia": "CR"
        }, {
            "comune": "Fiesco",
            "provincia": "CR"
        }, {
            "comune": "Formigara",
            "provincia": "CR"
        }, {
            "comune": "Gabbioneta-Binanuova",
            "provincia": "CR"
        }, {
            "comune": "Gadesco-Pieve Delmona",
            "provincia": "CR"
        }, {
            "comune": "Genivolta",
            "provincia": "CR"
        }, {
            "comune": "Gerre de' Caprioli",
            "provincia": "CR"
        }, {
            "comune": "Gombito",
            "provincia": "CR"
        }, {
            "comune": "Grontardo",
            "provincia": "CR"
        }, {
            "comune": "Grumello Cremonese ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Gussola",
            "provincia": "CR"
        }, {
            "comune": "Isola Dovarese",
            "provincia": "CR"
        }, {
            "comune": "Izano",
            "provincia": "CR"
        }, {
            "comune": "Madignano",
            "provincia": "CR"
        }, {
            "comune": "Malagnino",
            "provincia": "CR"
        }, {
            "comune": "Martignana di Po",
            "provincia": "CR"
        }, {
            "comune": "Monte Cremasco",
            "provincia": "CR"
        }, {
            "comune": "Montodine",
            "provincia": "CR"
        }, {
            "comune": "Moscazzano",
            "provincia": "CR"
        }, {
            "comune": "Motta Baluffi",
            "provincia": "CR"
        }, {
            "comune": "Offanengo",
            "provincia": "CR"
        }, {
            "comune": "Olmeneta",
            "provincia": "CR"
        }, {
            "comune": "Ostiano",
            "provincia": "CR"
        }, {
            "comune": "Paderno Ponchielli",
            "provincia": "CR"
        }, {
            "comune": "Palazzo Pignano",
            "provincia": "CR"
        }, {
            "comune": "Pandino",
            "provincia": "CR"
        }, {
            "comune": "Persico Dosimo",
            "provincia": "CR"
        }, {
            "comune": "Pescarolo ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Pessina Cremonese",
            "provincia": "CR"
        }, {
            "comune": "Piadena",
            "provincia": "CR"
        }, {
            "comune": "Pianengo",
            "provincia": "CR"
        }, {
            "comune": "Pieranica",
            "provincia": "CR"
        }, {
            "comune": "Pieve d'Olmi",
            "provincia": "CR"
        }, {
            "comune": "Pieve San Giacomo",
            "provincia": "CR"
        }, {
            "comune": "Pizzighettone",
            "provincia": "CR"
        }, {
            "comune": "Pozzaglio ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Quintano",
            "provincia": "CR"
        }, {
            "comune": "Ricengo",
            "provincia": "CR"
        }, {
            "comune": "Ripalta Arpina",
            "provincia": "CR"
        }, {
            "comune": "Ripalta Cremasca",
            "provincia": "CR"
        }, {
            "comune": "Ripalta Guerina",
            "provincia": "CR"
        }, {
            "comune": "Rivarolo del Re ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Rivolta d'Adda",
            "provincia": "CR"
        }, {
            "comune": "Robecco d'Oglio",
            "provincia": "CR"
        }, {
            "comune": "Romanengo",
            "provincia": "CR"
        }, {
            "comune": "Salvirola",
            "provincia": "CR"
        }, {
            "comune": "San Bassano",
            "provincia": "CR"
        }, {
            "comune": "San Daniele Po",
            "provincia": "CR"
        }, {
            "comune": "San Giovanni in Croce",
            "provincia": "CR"
        }, {
            "comune": "San Martino del Lago",
            "provincia": "CR"
        }, {
            "comune": "Scandolara Ravara",
            "provincia": "CR"
        }, {
            "comune": "Scandolara Ripa d'Oglio",
            "provincia": "CR"
        }, {
            "comune": "Sergnano",
            "provincia": "CR"
        }, {
            "comune": "Sesto ed Uniti",
            "provincia": "CR"
        }, {
            "comune": "Solarolo Rainerio",
            "provincia": "CR"
        }, {
            "comune": "Soncino",
            "provincia": "CR"
        }, {
            "comune": "Soresina",
            "provincia": "CR"
        }, {
            "comune": "Sospiro",
            "provincia": "CR"
        }, {
            "comune": "Spinadesco",
            "provincia": "CR"
        }, {
            "comune": "Spineda",
            "provincia": "CR"
        }, {
            "comune": "Spino d'Adda",
            "provincia": "CR"
        }, {
            "comune": "Stagno Lombardo",
            "provincia": "CR"
        }, {
            "comune": "Ticengo",
            "provincia": "CR"
        }, {
            "comune": "Torlino Vimercati",
            "provincia": "CR"
        }, {
            "comune": "Tornata",
            "provincia": "CR"
        }, {
            "comune": "Torre de' Picenardi",
            "provincia": "CR"
        }, {
            "comune": "Torricella del Pizzo",
            "provincia": "CR"
        }, {
            "comune": "Trescore Cremasco",
            "provincia": "CR"
        }, {
            "comune": "Trigolo",
            "provincia": "CR"
        }, {
            "comune": "Vaiano Cremasco",
            "provincia": "CR"
        }, {
            "comune": "Vailate",
            "provincia": "CR"
        }, {
            "comune": "Vescovato",
            "provincia": "CR"
        }, {
            "comune": "Volongo",
            "provincia": "CR"
        }, {
            "comune": "Voltido",
            "provincia": "CR"
        }, {
            "comune": "Acquanegra sul Chiese",
            "provincia": "MN"
        }, {
            "comune": "Asola",
            "provincia": "MN"
        }, {
            "comune": "Bagnolo San Vito",
            "provincia": "MN"
        }, {
            "comune": "Bigarello",
            "provincia": "MN"
        }, {
            "comune": "Borgofranco sul Po",
            "provincia": "MN"
        }, {
            "comune": "Bozzolo",
            "provincia": "MN"
        }, {
            "comune": "Canneto sull'Oglio",
            "provincia": "MN"
        }, {
            "comune": "Carbonara di Po",
            "provincia": "MN"
        }, {
            "comune": "Casalmoro",
            "provincia": "MN"
        }, {
            "comune": "Casaloldo",
            "provincia": "MN"
        }, {
            "comune": "Casalromano",
            "provincia": "MN"
        }, {
            "comune": "Castelbelforte",
            "provincia": "MN"
        }, {
            "comune": "Castel d'Ario",
            "provincia": "MN"
        }, {
            "comune": "Castel Goffredo",
            "provincia": "MN"
        }, {
            "comune": "Castellucchio",
            "provincia": "MN"
        }, {
            "comune": "Castiglione delle Stiviere",
            "provincia": "MN"
        }, {
            "comune": "Cavriana",
            "provincia": "MN"
        }, {
            "comune": "Ceresara",
            "provincia": "MN"
        }, {
            "comune": "Commessaggio",
            "provincia": "MN"
        }, {
            "comune": "Curtatone",
            "provincia": "MN"
        }, {
            "comune": "Dosolo",
            "provincia": "MN"
        }, {
            "comune": "Gazoldo degli Ippoliti",
            "provincia": "MN"
        }, {
            "comune": "Gazzuolo",
            "provincia": "MN"
        }, {
            "comune": "Goito",
            "provincia": "MN"
        }, {
            "comune": "Gonzaga",
            "provincia": "MN"
        }, {
            "comune": "Guidizzolo",
            "provincia": "MN"
        }, {
            "comune": "Magnacavallo",
            "provincia": "MN"
        }, {
            "comune": "Mantova",
            "provincia": "MN"
        }, {
            "comune": "Marcaria",
            "provincia": "MN"
        }, {
            "comune": "Mariana Mantovana",
            "provincia": "MN"
        }, {
            "comune": "Marmirolo",
            "provincia": "MN"
        }, {
            "comune": "Medole",
            "provincia": "MN"
        }, {
            "comune": "Moglia",
            "provincia": "MN"
        }, {
            "comune": "Monzambano",
            "provincia": "MN"
        }, {
            "comune": "Motteggiana",
            "provincia": "MN"
        }, {
            "comune": "Ostiglia",
            "provincia": "MN"
        }, {
            "comune": "Pegognaga",
            "provincia": "MN"
        }, {
            "comune": "Pieve di Coriano",
            "provincia": "MN"
        }, {
            "comune": "Piubega",
            "provincia": "MN"
        }, {
            "comune": "Poggio Rusco",
            "provincia": "MN"
        }, {
            "comune": "Pomponesco",
            "provincia": "MN"
        }, {
            "comune": "Ponti sul Mincio",
            "provincia": "MN"
        }, {
            "comune": "Porto Mantovano",
            "provincia": "MN"
        }, {
            "comune": "Quingentole",
            "provincia": "MN"
        }, {
            "comune": "Quistello",
            "provincia": "MN"
        }, {
            "comune": "Redondesco",
            "provincia": "MN"
        }, {
            "comune": "Revere",
            "provincia": "MN"
        }, {
            "comune": "Rivarolo Mantovano",
            "provincia": "MN"
        }, {
            "comune": "Rodigo",
            "provincia": "MN"
        }, {
            "comune": "Roncoferraro",
            "provincia": "MN"
        }, {
            "comune": "Roverbella",
            "provincia": "MN"
        }, {
            "comune": "Sabbioneta",
            "provincia": "MN"
        }, {
            "comune": "San Benedetto Po",
            "provincia": "MN"
        }, {
            "comune": "San Giacomo delle Segnate",
            "provincia": "MN"
        }, {
            "comune": "San Giorgio di Mantova",
            "provincia": "MN"
        }, {
            "comune": "San Giovanni del Dosso",
            "provincia": "MN"
        }, {
            "comune": "San Martino dall'Argine",
            "provincia": "MN"
        }, {
            "comune": "Schivenoglia",
            "provincia": "MN"
        }, {
            "comune": "Sermide e Felonica",
            "provincia": "MN"
        }, {
            "comune": "Serravalle a Po",
            "provincia": "MN"
        }, {
            "comune": "Solferino",
            "provincia": "MN"
        }, {
            "comune": "Sustinente",
            "provincia": "MN"
        }, {
            "comune": "Suzzara",
            "provincia": "MN"
        }, {
            "comune": "Viadana",
            "provincia": "MN"
        }, {
            "comune": "Villa Poma",
            "provincia": "MN"
        }, {
            "comune": "Villimpenta",
            "provincia": "MN"
        }, {
            "comune": "Volta Mantovana",
            "provincia": "MN"
        }, {
            "comune": "Borgo Virgilio",
            "provincia": "MN"
        }, {
            "comune": "Aldino",
            "provincia": "BZ"
        }, {
            "comune": "Andriano",
            "provincia": "BZ"
        }, {
            "comune": "Anterivo",
            "provincia": "BZ"
        }, {
            "comune": "Appiano sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Avelengo",
            "provincia": "BZ"
        }, {
            "comune": "Badia",
            "provincia": "BZ"
        }, {
            "comune": "Barbiano",
            "provincia": "BZ"
        }, {
            "comune": "Bolzano",
            "provincia": "BZ"
        }, {
            "comune": "Braies",
            "provincia": "BZ"
        }, {
            "comune": "Brennero",
            "provincia": "BZ"
        }, {
            "comune": "Bressanone",
            "provincia": "BZ"
        }, {
            "comune": "Bronzolo",
            "provincia": "BZ"
        }, {
            "comune": "Brunico",
            "provincia": "BZ"
        }, {
            "comune": "Caines",
            "provincia": "BZ"
        }, {
            "comune": "Caldaro sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Campo di Trens",
            "provincia": "BZ"
        }, {
            "comune": "Campo Tures",
            "provincia": "BZ"
        }, {
            "comune": "Castelbello-Ciardes",
            "provincia": "BZ"
        }, {
            "comune": "Castelrotto",
            "provincia": "BZ"
        }, {
            "comune": "Cermes",
            "provincia": "BZ"
        }, {
            "comune": "Chienes",
            "provincia": "BZ"
        }, {
            "comune": "Chiusa",
            "provincia": "BZ"
        }, {
            "comune": "Cornedo all'Isarco",
            "provincia": "BZ"
        }, {
            "comune": "Cortaccia sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Cortina sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Corvara in Badia",
            "provincia": "BZ"
        }, {
            "comune": "Curon Venosta",
            "provincia": "BZ"
        }, {
            "comune": "Dobbiaco",
            "provincia": "BZ"
        }, {
            "comune": "Egna",
            "provincia": "BZ"
        }, {
            "comune": "Falzes",
            "provincia": "BZ"
        }, {
            "comune": "Fiè allo Sciliar",
            "provincia": "BZ"
        }, {
            "comune": "Fortezza",
            "provincia": "BZ"
        }, {
            "comune": "Funes",
            "provincia": "BZ"
        }, {
            "comune": "Gais",
            "provincia": "BZ"
        }, {
            "comune": "Gargazzone",
            "provincia": "BZ"
        }, {
            "comune": "Glorenza",
            "provincia": "BZ"
        }, {
            "comune": "Laces",
            "provincia": "BZ"
        }, {
            "comune": "Lagundo",
            "provincia": "BZ"
        }, {
            "comune": "Laion",
            "provincia": "BZ"
        }, {
            "comune": "Laives",
            "provincia": "BZ"
        }, {
            "comune": "Lana",
            "provincia": "BZ"
        }, {
            "comune": "Lasa",
            "provincia": "BZ"
        }, {
            "comune": "Lauregno",
            "provincia": "BZ"
        }, {
            "comune": "Luson",
            "provincia": "BZ"
        }, {
            "comune": "Magrè sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Malles Venosta",
            "provincia": "BZ"
        }, {
            "comune": "Marebbe",
            "provincia": "BZ"
        }, {
            "comune": "Marlengo",
            "provincia": "BZ"
        }, {
            "comune": "Martello",
            "provincia": "BZ"
        }, {
            "comune": "Meltina",
            "provincia": "BZ"
        }, {
            "comune": "Merano",
            "provincia": "BZ"
        }, {
            "comune": "Monguelfo-Tesido",
            "provincia": "BZ"
        }, {
            "comune": "Montagna",
            "provincia": "BZ"
        }, {
            "comune": "Moso in Passiria",
            "provincia": "BZ"
        }, {
            "comune": "Nalles",
            "provincia": "BZ"
        }, {
            "comune": "Naturno",
            "provincia": "BZ"
        }, {
            "comune": "Naz-Sciaves",
            "provincia": "BZ"
        }, {
            "comune": "Nova Levante",
            "provincia": "BZ"
        }, {
            "comune": "Nova Ponente",
            "provincia": "BZ"
        }, {
            "comune": "Ora",
            "provincia": "BZ"
        }, {
            "comune": "Ortisei",
            "provincia": "BZ"
        }, {
            "comune": "Parcines",
            "provincia": "BZ"
        }, {
            "comune": "Perca",
            "provincia": "BZ"
        }, {
            "comune": "Plaus",
            "provincia": "BZ"
        }, {
            "comune": "Ponte Gardena",
            "provincia": "BZ"
        }, {
            "comune": "Postal",
            "provincia": "BZ"
        }, {
            "comune": "Prato allo Stelvio",
            "provincia": "BZ"
        }, {
            "comune": "Predoi",
            "provincia": "BZ"
        }, {
            "comune": "Proves",
            "provincia": "BZ"
        }, {
            "comune": "Racines",
            "provincia": "BZ"
        }, {
            "comune": "Rasun-Anterselva",
            "provincia": "BZ"
        }, {
            "comune": "Renon",
            "provincia": "BZ"
        }, {
            "comune": "Rifiano",
            "provincia": "BZ"
        }, {
            "comune": "Rio di Pusteria",
            "provincia": "BZ"
        }, {
            "comune": "Rodengo",
            "provincia": "BZ"
        }, {
            "comune": "Salorno",
            "provincia": "BZ"
        }, {
            "comune": "San Candido",
            "provincia": "BZ"
        }, {
            "comune": "San Genesio Atesino",
            "provincia": "BZ"
        }, {
            "comune": "San Leonardo in Passiria",
            "provincia": "BZ"
        }, {
            "comune": "San Lorenzo di Sebato",
            "provincia": "BZ"
        }, {
            "comune": "San Martino in Badia",
            "provincia": "BZ"
        }, {
            "comune": "San Martino in Passiria",
            "provincia": "BZ"
        }, {
            "comune": "San Pancrazio",
            "provincia": "BZ"
        }, {
            "comune": "Santa Cristina Valgardena",
            "provincia": "BZ"
        }, {
            "comune": "Sarentino",
            "provincia": "BZ"
        }, {
            "comune": "Scena",
            "provincia": "BZ"
        }, {
            "comune": "Selva dei Molini",
            "provincia": "BZ"
        }, {
            "comune": "Selva di Val Gardena",
            "provincia": "BZ"
        }, {
            "comune": "Senales",
            "provincia": "BZ"
        }, {
            "comune": "Sesto",
            "provincia": "BZ"
        }, {
            "comune": "Silandro",
            "provincia": "BZ"
        }, {
            "comune": "Sluderno",
            "provincia": "BZ"
        }, {
            "comune": "Stelvio",
            "provincia": "BZ"
        }, {
            "comune": "Terento",
            "provincia": "BZ"
        }, {
            "comune": "Terlano",
            "provincia": "BZ"
        }, {
            "comune": "Termeno sulla Strada del Vino",
            "provincia": "BZ"
        }, {
            "comune": "Tesimo",
            "provincia": "BZ"
        }, {
            "comune": "Tires",
            "provincia": "BZ"
        }, {
            "comune": "Tirolo",
            "provincia": "BZ"
        }, {
            "comune": "Trodena nel parco naturale",
            "provincia": "BZ"
        }, {
            "comune": "Tubre",
            "provincia": "BZ"
        }, {
            "comune": "Ultimo",
            "provincia": "BZ"
        }, {
            "comune": "Vadena",
            "provincia": "BZ"
        }, {
            "comune": "Valdaora",
            "provincia": "BZ"
        }, {
            "comune": "Val di Vizze",
            "provincia": "BZ"
        }, {
            "comune": "Valle Aurina",
            "provincia": "BZ"
        }, {
            "comune": "Valle di Casies",
            "provincia": "BZ"
        }, {
            "comune": "Vandoies",
            "provincia": "BZ"
        }, {
            "comune": "Varna",
            "provincia": "BZ"
        }, {
            "comune": "Verano",
            "provincia": "BZ"
        }, {
            "comune": "Villabassa",
            "provincia": "BZ"
        }, {
            "comune": "Villandro",
            "provincia": "BZ"
        }, {
            "comune": "Vipiteno",
            "provincia": "BZ"
        }, {
            "comune": "Velturno",
            "provincia": "BZ"
        }, {
            "comune": "La Valle",
            "provincia": "BZ"
        }, {
            "comune": "Senale-San Felice",
            "provincia": "BZ"
        }, {
            "comune": "Ala",
            "provincia": "TN"
        }, {
            "comune": "Albiano",
            "provincia": "TN"
        }, {
            "comune": "Aldeno",
            "provincia": "TN"
        }, {
            "comune": "Andalo",
            "provincia": "TN"
        }, {
            "comune": "Arco",
            "provincia": "TN"
        }, {
            "comune": "Avio",
            "provincia": "TN"
        }, {
            "comune": "Baselga di Pinè",
            "provincia": "TN"
        }, {
            "comune": "Bedollo",
            "provincia": "TN"
        }, {
            "comune": "Besenello",
            "provincia": "TN"
        }, {
            "comune": "Bieno",
            "provincia": "TN"
        },

        {
            "comune": "Bocenago",
            "provincia": "TN"
        }, {
            "comune": "Bondone",
            "provincia": "TN"
        }, {
            "comune": "Borgo Valsugana",
            "provincia": "TN"
        }, {
            "comune": "Brentonico",
            "provincia": "TN"
        }, {
            "comune": "Bresimo",
            "provincia": "TN"
        }, {
            "comune": "Brez",
            "provincia": "TN"
        }, {
            "comune": "Caderzone Terme",
            "provincia": "TN"
        }, {
            "comune": "Cagnò",
            "provincia": "TN"
        }, {
            "comune": "Calceranica al Lago",
            "provincia": "TN"
        }, {
            "comune": "Caldes",
            "provincia": "TN"
        }, {
            "comune": "Caldonazzo",
            "provincia": "TN"
        }, {
            "comune": "Calliano",
            "provincia": "TN"
        }, {
            "comune": "Campitello di Fassa",
            "provincia": "TN"
        }, {
            "comune": "Campodenno",
            "provincia": "TN"
        }, {
            "comune": "Canal San Bovo",
            "provincia": "TN"
        }, {
            "comune": "Canazei",
            "provincia": "TN"
        }, {
            "comune": "Capriana",
            "provincia": "TN"
        }, {
            "comune": "Carano",
            "provincia": "TN"
        }, {
            "comune": "Carisolo",
            "provincia": "TN"
        }, {
            "comune": "Carzano",
            "provincia": "TN"
        }, {
            "comune": "Castel Condino",
            "provincia": "TN"
        }, {
            "comune": "Castelfondo",
            "provincia": "TN"
        }, {
            "comune": "Castello-Molina di Fiemme",
            "provincia": "TN"
        }, {
            "comune": "Castello Tesino",
            "provincia": "TN"
        }, {
            "comune": "Castelnuovo",
            "provincia": "TN"
        }, {
            "comune": "Cavalese",
            "provincia": "TN"
        }, {
            "comune": "Cavareno",
            "provincia": "TN"
        }, {
            "comune": "Cavedago",
            "provincia": "TN"
        }, {
            "comune": "Cavedine",
            "provincia": "TN"
        }, {
            "comune": "Cavizzana",
            "provincia": "TN"
        }, {
            "comune": "Cimone",
            "provincia": "TN"
        }, {
            "comune": "Cinte Tesino",
            "provincia": "TN"
        }, {
            "comune": "Cis",
            "provincia": "TN"
        }, {
            "comune": "Civezzano",
            "provincia": "TN"
        }, {
            "comune": "Cles",
            "provincia": "TN"
        }, {
            "comune": "Cloz",
            "provincia": "TN"
        }, {
            "comune": "Commezzadura",
            "provincia": "TN"
        }, {
            "comune": "Croviana",
            "provincia": "TN"
        }, {
            "comune": "Daiano",
            "provincia": "TN"
        }, {
            "comune": "Dambel",
            "provincia": "TN"
        }, {
            "comune": "Denno",
            "provincia": "TN"
        }, {
            "comune": "Drena",
            "provincia": "TN"
        }, {
            "comune": "Dro",
            "provincia": "TN"
        }, {
            "comune": "Faedo",
            "provincia": "TN"
        }, {
            "comune": "Fai della Paganella",
            "provincia": "TN"
        }, {
            "comune": "Fiavè",
            "provincia": "TN"
        }, {
            "comune": "Fierozzo",
            "provincia": "TN"
        }, {
            "comune": "Folgaria",
            "provincia": "TN"
        }, {
            "comune": "Fondo",
            "provincia": "TN"
        }, {
            "comune": "Fornace",
            "provincia": "TN"
        }, {
            "comune": "Frassilongo",
            "provincia": "TN"
        }, {
            "comune": "Garniga Terme",
            "provincia": "TN"
        }, {
            "comune": "Giovo",
            "provincia": "TN"
        }, {
            "comune": "Giustino",
            "provincia": "TN"
        }, {
            "comune": "Grigno",
            "provincia": "TN"
        }, {
            "comune": "Imer",
            "provincia": "TN"
        }, {
            "comune": "Isera",
            "provincia": "TN"
        }, {
            "comune": "Lavarone",
            "provincia": "TN"
        }, {
            "comune": "Lavis",
            "provincia": "TN"
        }, {
            "comune": "Levico Terme",
            "provincia": "TN"
        }, {
            "comune": "Livo",
            "provincia": "TN"
        }, {
            "comune": "Lona-Lases",
            "provincia": "TN"
        }, {
            "comune": "Luserna",
            "provincia": "TN"
        }, {
            "comune": "Malè",
            "provincia": "TN"
        }, {
            "comune": "Malosco",
            "provincia": "TN"
        }, {
            "comune": "Massimeno",
            "provincia": "TN"
        }, {
            "comune": "Mazzin",
            "provincia": "TN"
        }, {
            "comune": "Mezzana",
            "provincia": "TN"
        }, {
            "comune": "Mezzano",
            "provincia": "TN"
        }, {
            "comune": "Mezzocorona",
            "provincia": "TN"
        }, {
            "comune": "Mezzolombardo",
            "provincia": "TN"
        }, {
            "comune": "Moena",
            "provincia": "TN"
        }, {
            "comune": "Molveno",
            "provincia": "TN"
        }, {
            "comune": "Mori",
            "provincia": "TN"
        }, {
            "comune": "Nago-Torbole",
            "provincia": "TN"
        }, {
            "comune": "Nave San Rocco",
            "provincia": "TN"
        }, {
            "comune": "Nogaredo",
            "provincia": "TN"
        }, {
            "comune": "Nomi",
            "provincia": "TN"
        }, {
            "comune": "Novaledo",
            "provincia": "TN"
        }, {
            "comune": "Ospedaletto",
            "provincia": "TN"
        }, {
            "comune": "Ossana",
            "provincia": "TN"
        }, {
            "comune": "Palù del Fersina",
            "provincia": "TN"
        }, {
            "comune": "Panchià",
            "provincia": "TN"
        }, {
            "comune": "Ronzo-Chienis",
            "provincia": "TN"
        }, {
            "comune": "Peio",
            "provincia": "TN"
        }, {
            "comune": "Pellizzano",
            "provincia": "TN"
        }, {
            "comune": "Pelugo",
            "provincia": "TN"
        }, {
            "comune": "Pergine Valsugana",
            "provincia": "TN"
        }, {
            "comune": "Pieve Tesino",
            "provincia": "TN"
        }, {
            "comune": "Pinzolo",
            "provincia": "TN"
        }, {
            "comune": "Pomarolo",
            "provincia": "TN"
        }, {
            "comune": "Pozza di Fassa",
            "provincia": "TN"
        }, {
            "comune": "Predazzo",
            "provincia": "TN"
        }, {
            "comune": "Rabbi",
            "provincia": "TN"
        }, {
            "comune": "Revò",
            "provincia": "TN"
        }, {
            "comune": "Riva del Garda",
            "provincia": "TN"
        }, {
            "comune": "Romallo",
            "provincia": "TN"
        }, {
            "comune": "Romeno",
            "provincia": "TN"
        }, {
            "comune": "Roncegno Terme",
            "provincia": "TN"
        }, {
            "comune": "Ronchi Valsugana",
            "provincia": "TN"
        }, {
            "comune": "Ronzone",
            "provincia": "TN"
        }, {
            "comune": "Roverè della Luna",
            "provincia": "TN"
        }, {
            "comune": "Rovereto",
            "provincia": "TN"
        }, {
            "comune": "Ruffrè-Mendola",
            "provincia": "TN"
        }, {
            "comune": "Rumo",
            "provincia": "TN"
        }, {
            "comune": "Sagron Mis",
            "provincia": "TN"
        }, {
            "comune": "Samone",
            "provincia": "TN"
        }, {
            "comune": "San Michele all'Adige",
            "provincia": "TN"
        }, {
            "comune": "Sant'Orsola Terme",
            "provincia": "TN"
        }, {
            "comune": "Sanzeno",
            "provincia": "TN"
        }, {
            "comune": "Sarnonico",
            "provincia": "TN"
        }, {
            "comune": "Scurelle",
            "provincia": "TN"
        }, {
            "comune": "Segonzano",
            "provincia": "TN"
        }, {
            "comune": "Sfruz",
            "provincia": "TN"
        }, {
            "comune": "Soraga di Fassa",
            "provincia": "TN"
        }, {
            "comune": "Sover",
            "provincia": "TN"
        }, {
            "comune": "Spiazzo",
            "provincia": "TN"
        }, {
            "comune": "Spormaggiore",
            "provincia": "TN"
        }, {
            "comune": "Sporminore",
            "provincia": "TN"
        }, {
            "comune": "Stenico",
            "provincia": "TN"
        }, {
            "comune": "Storo",
            "provincia": "TN"
        }, {
            "comune": "Strembo",
            "provincia": "TN"
        }, {
            "comune": "Telve",
            "provincia": "TN"
        }, {
            "comune": "Telve di Sopra",
            "provincia": "TN"
        }, {
            "comune": "Tenna",
            "provincia": "TN"
        }, {
            "comune": "Tenno",
            "provincia": "TN"
        }, {
            "comune": "Terragnolo",
            "provincia": "TN"
        }, {
            "comune": "Terzolas",
            "provincia": "TN"
        }, {
            "comune": "Tesero",
            "provincia": "TN"
        }, {
            "comune": "Tione di Trento",
            "provincia": "TN"
        }, {
            "comune": "Ton",
            "provincia": "TN"
        }, {
            "comune": "Torcegno",
            "provincia": "TN"
        }, {
            "comune": "Trambileno",
            "provincia": "TN"
        }, {
            "comune": "Trento",
            "provincia": "TN"
        }, {
            "comune": "Valfloriana",
            "provincia": "TN"
        }, {
            "comune": "Vallarsa",
            "provincia": "TN"
        }, {
            "comune": "Varena",
            "provincia": "TN"
        }, {
            "comune": "Vermiglio",
            "provincia": "TN"
        }, {
            "comune": "Vignola-Falesina",
            "provincia": "TN"
        }, {
            "comune": "Vigo di Fassa",
            "provincia": "TN"
        }, {
            "comune": "Villa Lagarina",
            "provincia": "TN"
        }, {
            "comune": "Volano",
            "provincia": "TN"
        }, {
            "comune": "Zambana",
            "provincia": "TN"
        }, {
            "comune": "Ziano di Fiemme",
            "provincia": "TN"
        }, {
            "comune": "Comano Terme",
            "provincia": "TN"
        }, {
            "comune": "Ledro",
            "provincia": "TN"
        }, {
            "comune": "Predaia",
            "provincia": "TN"
        }, {
            "comune": "San Lorenzo Dorsino",
            "provincia": "TN"
        }, {
            "comune": "Valdaone",
            "provincia": "TN"
        }, {
            "comune": "Dimaro Folgarida",
            "provincia": "TN"
        }, {
            "comune": "Pieve di Bono-Prezzo",
            "provincia": "TN"
        }, {
            "comune": "Altavalle",
            "provincia": "TN"
        }, {
            "comune": "Altopiano della Vigolana",
            "provincia": "TN"
        }, {
            "comune": "Amblar-Don",
            "provincia": "TN"
        }, {
            "comune": "Borgo Chiese",
            "provincia": "TN"
        }, {
            "comune": "Borgo Lares",
            "provincia": "TN"
        }, {
            "comune": "Castel Ivano",
            "provincia": "TN"
        }, {
            "comune": "Cembra Lisignago",
            "provincia": "TN"
        }, {
            "comune": "Contà",
            "provincia": "TN"
        }, {
            "comune": "Madruzzo",
            "provincia": "TN"
        }, {
            "comune": "Porte di Rendena",
            "provincia": "TN"
        }, {
            "comune": "Primiero San Martino di Castrozza",
            "provincia": "TN"
        }, {
            "comune": "Sella Giudicarie",
            "provincia": "TN"
        }, {
            "comune": "Tre Ville",
            "provincia": "TN"
        }, {
            "comune": "Vallelaghi",
            "provincia": "TN"
        }, {
            "comune": "Ville d'Anaunia",
            "provincia": "TN"
        }, {
            "comune": "Affi",
            "provincia": "VR"
        }, {
            "comune": "Albaredo d'Adige",
            "provincia": "VR"
        }, {
            "comune": "Angiari",
            "provincia": "VR"
        }, {
            "comune": "Arcole",
            "provincia": "VR"
        }, {
            "comune": "Badia Calavena",
            "provincia": "VR"
        }, {
            "comune": "Bardolino",
            "provincia": "VR"
        }, {
            "comune": "Belfiore",
            "provincia": "VR"
        }, {
            "comune": "Bevilacqua",
            "provincia": "VR"
        }, {
            "comune": "Bonavigo",
            "provincia": "VR"
        }, {
            "comune": "Boschi Sant'Anna",
            "provincia": "VR"
        }, {
            "comune": "Bosco Chiesanuova",
            "provincia": "VR"
        }, {
            "comune": "Bovolone",
            "provincia": "VR"
        }, {
            "comune": "Brentino Belluno",
            "provincia": "VR"
        }, {
            "comune": "Brenzone sul Garda",
            "provincia": "VR"
        }, {
            "comune": "Bussolengo",
            "provincia": "VR"
        }, {
            "comune": "Buttapietra",
            "provincia": "VR"
        }, {
            "comune": "Caldiero",
            "provincia": "VR"
        }, {
            "comune": "Caprino Veronese",
            "provincia": "VR"
        }, {
            "comune": "Casaleone",
            "provincia": "VR"
        }, {
            "comune": "Castagnaro",
            "provincia": "VR"
        }, {
            "comune": "Castel d'Azzano",
            "provincia": "VR"
        }, {
            "comune": "Castelnuovo del Garda",
            "provincia": "VR"
        }, {
            "comune": "Cavaion Veronese",
            "provincia": "VR"
        }, {
            "comune": "Cazzano di Tramigna",
            "provincia": "VR"
        }, {
            "comune": "Cerea",
            "provincia": "VR"
        }, {
            "comune": "Cerro Veronese",
            "provincia": "VR"
        }, {
            "comune": "Cologna Veneta",
            "provincia": "VR"
        }, {
            "comune": "Colognola ai Colli",
            "provincia": "VR"
        }, {
            "comune": "Concamarise",
            "provincia": "VR"
        }, {
            "comune": "Costermano sul Garda",
            "provincia": "VR"
        }, {
            "comune": "Dolcè",
            "provincia": "VR"
        }, {
            "comune": "Erbè",
            "provincia": "VR"
        }, {
            "comune": "Erbezzo",
            "provincia": "VR"
        }, {
            "comune": "Ferrara di Monte Baldo",
            "provincia": "VR"
        }, {
            "comune": "Fumane",
            "provincia": "VR"
        }, {
            "comune": "Garda",
            "provincia": "VR"
        }, {
            "comune": "Gazzo Veronese",
            "provincia": "VR"
        }, {
            "comune": "Grezzana",
            "provincia": "VR"
        }, {
            "comune": "Illasi",
            "provincia": "VR"
        }, {
            "comune": "Isola della Scala",
            "provincia": "VR"
        }, {
            "comune": "Isola Rizza",
            "provincia": "VR"
        }, {
            "comune": "Lavagno",
            "provincia": "VR"
        }, {
            "comune": "Lazise",
            "provincia": "VR"
        }, {
            "comune": "Legnago",
            "provincia": "VR"
        }, {
            "comune": "Malcesine",
            "provincia": "VR"
        }, {
            "comune": "Marano di Valpolicella",
            "provincia": "VR"
        }, {
            "comune": "Mezzane di Sotto",
            "provincia": "VR"
        }, {
            "comune": "Minerbe",
            "provincia": "VR"
        }, {
            "comune": "Montecchia di Crosara",
            "provincia": "VR"
        }, {
            "comune": "Monteforte d'Alpone",
            "provincia": "VR"
        }, {
            "comune": "Mozzecane",
            "provincia": "VR"
        }, {
            "comune": "Negrar",
            "provincia": "VR"
        }, {
            "comune": "Nogara",
            "provincia": "VR"
        }, {
            "comune": "Nogarole Rocca",
            "provincia": "VR"
        }, {
            "comune": "Oppeano",
            "provincia": "VR"
        }, {
            "comune": "Palù",
            "provincia": "VR"
        }, {
            "comune": "Pastrengo",
            "provincia": "VR"
        }, {
            "comune": "Pescantina",
            "provincia": "VR"
        }, {
            "comune": "Peschiera del Garda",
            "provincia": "VR"
        }, {
            "comune": "Povegliano Veronese",
            "provincia": "VR"
        }, {
            "comune": "Pressana",
            "provincia": "VR"
        }, {
            "comune": "Rivoli Veronese",
            "provincia": "VR"
        }, {
            "comune": "Roncà",
            "provincia": "VR"
        }, {
            "comune": "Ronco all'Adige",
            "provincia": "VR"
        }, {
            "comune": "Roverchiara",
            "provincia": "VR"
        }, {
            "comune": "Roveredo di Guà",
            "provincia": "VR"
        }, {
            "comune": "Roverè Veronese",
            "provincia": "VR"
        }, {
            "comune": "Salizzole",
            "provincia": "VR"
        }, {
            "comune": "San Bonifacio",
            "provincia": "VR"
        }, {
            "comune": "San Giovanni Ilarione",
            "provincia": "VR"
        }, {
            "comune": "San Giovanni Lupatoto",
            "provincia": "VR"
        }, {
            "comune": "Sanguinetto",
            "provincia": "VR"
        }, {
            "comune": "San Martino Buon Albergo",
            "provincia": "VR"
        }, {
            "comune": "San Mauro di Saline",
            "provincia": "VR"
        }, {
            "comune": "San Pietro di Morubio",
            "provincia": "VR"
        }, {
            "comune": "San Pietro in Cariano",
            "provincia": "VR"
        }, {
            "comune": "Sant'Ambrogio di Valpolicella",
            "provincia": "VR"
        }, {
            "comune": "Sant'Anna d'Alfaedo",
            "provincia": "VR"
        }, {
            "comune": "San Zeno di Montagna",
            "provincia": "VR"
        }, {
            "comune": "Selva di Progno",
            "provincia": "VR"
        }, {
            "comune": "Soave",
            "provincia": "VR"
        }, {
            "comune": "Sommacampagna",
            "provincia": "VR"
        }, {
            "comune": "Sona",
            "provincia": "VR"
        }, {
            "comune": "Sorgà",
            "provincia": "VR"
        }, {
            "comune": "Terrazzo",
            "provincia": "VR"
        }, {
            "comune": "Torri del Benaco",
            "provincia": "VR"
        }, {
            "comune": "Tregnago",
            "provincia": "VR"
        }, {
            "comune": "Trevenzuolo",
            "provincia": "VR"
        }, {
            "comune": "Valeggio sul Mincio",
            "provincia": "VR"
        }, {
            "comune": "Velo Veronese",
            "provincia": "VR"
        }, {
            "comune": "Verona",
            "provincia": "VR"
        }, {
            "comune": "Veronella",
            "provincia": "VR"
        }, {
            "comune": "Vestenanova",
            "provincia": "VR"
        }, {
            "comune": "Vigasio",
            "provincia": "VR"
        }, {
            "comune": "Villa Bartolomea",
            "provincia": "VR"
        }, {
            "comune": "Villafranca di Verona",
            "provincia": "VR"
        }, {
            "comune": "Zevio",
            "provincia": "VR"
        }, {
            "comune": "Zimella",
            "provincia": "VR"
        }, {
            "comune": "Agugliaro",
            "provincia": "VI"
        }, {
            "comune": "Albettone",
            "provincia": "VI"
        }, {
            "comune": "Alonte",
            "provincia": "VI"
        }, {
            "comune": "Altavilla Vicentina",
            "provincia": "VI"
        }, {
            "comune": "Altissimo",
            "provincia": "VI"
        }, {
            "comune": "Arcugnano",
            "provincia": "VI"
        }, {
            "comune": "Arsiero",
            "provincia": "VI"
        }, {
            "comune": "Arzignano",
            "provincia": "VI"
        }, {
            "comune": "Asiago",
            "provincia": "VI"
        }, {
            "comune": "Asigliano Veneto",
            "provincia": "VI"
        }, {
            "comune": "Barbarano Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Bassano del Grappa",
            "provincia": "VI"
        }, {
            "comune": "Bolzano Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Breganze",
            "provincia": "VI"
        }, {
            "comune": "Brendola",
            "provincia": "VI"
        }, {
            "comune": "Bressanvido",
            "provincia": "VI"
        }, {
            "comune": "Brogliano",
            "provincia": "VI"
        }, {
            "comune": "Caldogno",
            "provincia": "VI"
        }, {
            "comune": "Caltrano",
            "provincia": "VI"
        }, {
            "comune": "Calvene",
            "provincia": "VI"
        }, {
            "comune": "Camisano Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Campiglia dei Berici",
            "provincia": "VI"
        }, {
            "comune": "Campolongo sul Brenta",
            "provincia": "VI"
        }, {
            "comune": "Carrè",
            "provincia": "VI"
        }, {
            "comune": "Cartigliano",
            "provincia": "VI"
        }, {
            "comune": "Cassola",
            "provincia": "VI"
        }, {
            "comune": "Castegnero",
            "provincia": "VI"
        }, {
            "comune": "Castelgomberto",
            "provincia": "VI"
        }, {
            "comune": "Chiampo",
            "provincia": "VI"
        }, {
            "comune": "Chiuppano",
            "provincia": "VI"
        }, {
            "comune": "Cismon del Grappa",
            "provincia": "VI"
        }, {
            "comune": "Cogollo del Cengio",
            "provincia": "VI"
        }, {
            "comune": "Conco",
            "provincia": "VI"
        }, {
            "comune": "Cornedo Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Costabissara",
            "provincia": "VI"
        }, {
            "comune": "Creazzo",
            "provincia": "VI"
        }, {
            "comune": "Crespadoro",
            "provincia": "VI"
        }, {
            "comune": "Dueville",
            "provincia": "VI"
        }, {
            "comune": "Enego",
            "provincia": "VI"
        }, {
            "comune": "Fara Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Foza",
            "provincia": "VI"
        }, {
            "comune": "Gallio",
            "provincia": "VI"
        }, {
            "comune": "Gambellara",
            "provincia": "VI"
        }, {
            "comune": "Gambugliano",
            "provincia": "VI"
        }, {
            "comune": "Grisignano di Zocco",
            "provincia": "VI"
        }, {
            "comune": "Grumolo delle Abbadesse",
            "provincia": "VI"
        }, {
            "comune": "Isola Vicentina",
            "provincia": "VI"
        }, {
            "comune": "Laghi",
            "provincia": "VI"
        }, {
            "comune": "Lastebasse",
            "provincia": "VI"
        }, {
            "comune": "Longare",
            "provincia": "VI"
        }, {
            "comune": "Lonigo",
            "provincia": "VI"
        }, {
            "comune": "Lugo di Vicenza",
            "provincia": "VI"
        }, {
            "comune": "Lusiana",
            "provincia": "VI"
        }, {
            "comune": "Malo",
            "provincia": "VI"
        }, {
            "comune": "Marano Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Marostica",
            "provincia": "VI"
        }, {
            "comune": "Mason Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Molvena",
            "provincia": "VI"
        }, {
            "comune": "Montebello Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Montecchio Maggiore",
            "provincia": "VI"
        }, {
            "comune": "Montecchio Precalcino",
            "provincia": "VI"
        }, {
            "comune": "Monte di Malo",
            "provincia": "VI"
        }, {
            "comune": "Montegalda",
            "provincia": "VI"
        }, {
            "comune": "Montegaldella",
            "provincia": "VI"
        }, {
            "comune": "Monteviale",
            "provincia": "VI"
        }, {
            "comune": "Monticello Conte Otto",
            "provincia": "VI"
        }, {
            "comune": "Montorso Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Mossano",
            "provincia": "VI"
        }, {
            "comune": "Mussolente",
            "provincia": "VI"
        }, {
            "comune": "Nanto",
            "provincia": "VI"
        }, {
            "comune": "Nogarole Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Nove",
            "provincia": "VI"
        }, {
            "comune": "Noventa Vicentina",
            "provincia": "VI"
        }, {
            "comune": "Orgiano",
            "provincia": "VI"
        }, {
            "comune": "Pedemonte",
            "provincia": "VI"
        }, {
            "comune": "Pianezze",
            "provincia": "VI"
        }, {
            "comune": "Piovene Rocchette",
            "provincia": "VI"
        }, {
            "comune": "Pojana Maggiore",
            "provincia": "VI"
        }, {
            "comune": "Posina",
            "provincia": "VI"
        }, {
            "comune": "Pove del Grappa",
            "provincia": "VI"
        }, {
            "comune": "Pozzoleone",
            "provincia": "VI"
        }, {
            "comune": "Quinto Vicentino",
            "provincia": "VI"
        }, {
            "comune": "Recoaro Terme",
            "provincia": "VI"
        }, {
            "comune": "Roana",
            "provincia": "VI"
        }, {
            "comune": "Romano d'Ezzelino",
            "provincia": "VI"
        }, {
            "comune": "Rosà",
            "provincia": "VI"
        }, {
            "comune": "Rossano Veneto",
            "provincia": "VI"
        }, {
            "comune": "Rotzo",
            "provincia": "VI"
        }, {
            "comune": "Salcedo",
            "provincia": "VI"
        }, {
            "comune": "Sandrigo",
            "provincia": "VI"
        }, {
            "comune": "San Nazario",
            "provincia": "VI"
        }, {
            "comune": "San Pietro Mussolino",
            "provincia": "VI"
        }, {
            "comune": "Santorso",
            "provincia": "VI"
        }, {
            "comune": "San Vito di Leguzzano",
            "provincia": "VI"
        }, {
            "comune": "Sarcedo",
            "provincia": "VI"
        }, {
            "comune": "Sarego",
            "provincia": "VI"
        }, {
            "comune": "Schiavon",
            "provincia": "VI"
        }, {
            "comune": "Schio",
            "provincia": "VI"
        }, {
            "comune": "Solagna",
            "provincia": "VI"
        }, {
            "comune": "Sossano",
            "provincia": "VI"
        }, {
            "comune": "Sovizzo",
            "provincia": "VI"
        }, {
            "comune": "Tezze sul Brenta",
            "provincia": "VI"
        }, {
            "comune": "Thiene",
            "provincia": "VI"
        }, {
            "comune": "Tonezza del Cimone",
            "provincia": "VI"
        }, {
            "comune": "Torrebelvicino",
            "provincia": "VI"
        }, {
            "comune": "Torri di Quartesolo",
            "provincia": "VI"
        }, {
            "comune": "Trissino",
            "provincia": "VI"
        }, {
            "comune": "Valdagno",
            "provincia": "VI"
        }, {
            "comune": "Valdastico",
            "provincia": "VI"
        }, {
            "comune": "Valli del Pasubio",
            "provincia": "VI"
        }, {
            "comune": "Valstagna",
            "provincia": "VI"
        }, {
            "comune": "Velo d'Astico",
            "provincia": "VI"
        }, {
            "comune": "Vicenza",
            "provincia": "VI"
        }, {
            "comune": "Villaga",
            "provincia": "VI"
        }, {
            "comune": "Villaverla",
            "provincia": "VI"
        }, {
            "comune": "Zanè",
            "provincia": "VI"
        }, {
            "comune": "Zermeghedo",
            "provincia": "VI"
        }, {
            "comune": "Zovencedo",
            "provincia": "VI"
        }, {
            "comune": "Zugliano",
            "provincia": "VI"
        }, {
            "comune": "Val Liona",
            "provincia": "VI"
        }, {
            "comune": "Agordo",
            "provincia": "BL"
        }, {
            "comune": "Alano di Piave",
            "provincia": "BL"
        }, {
            "comune": "Alleghe",
            "provincia": "BL"
        }, {
            "comune": "Arsiè",
            "provincia": "BL"
        }, {
            "comune": "Auronzo di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Belluno",
            "provincia": "BL"
        }, {
            "comune": "Borca di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Calalzo di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Cencenighe Agordino",
            "provincia": "BL"
        }, {
            "comune": "Cesiomaggiore",
            "provincia": "BL"
        }, {
            "comune": "Chies d'Alpago",
            "provincia": "BL"
        }, {
            "comune": "Cibiana di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Colle Santa Lucia",
            "provincia": "BL"
        }, {
            "comune": "Cortina d'Ampezzo",
            "provincia": "BL"
        }, {
            "comune": "Danta di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Domegge di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Falcade",
            "provincia": "BL"
        }, {
            "comune": "Feltre",
            "provincia": "BL"
        }, {
            "comune": "Fonzaso",
            "provincia": "BL"
        }, {
            "comune": "Canale d'Agordo",
            "provincia": "BL"
        }, {
            "comune": "Gosaldo",
            "provincia": "BL"
        }, {
            "comune": "Lamon",
            "provincia": "BL"
        }, {
            "comune": "La Valle Agordina",
            "provincia": "BL"
        }, {
            "comune": "Lentiai",
            "provincia": "BL"
        }, {
            "comune": "Limana",
            "provincia": "BL"
        }, {
            "comune": "Livinallongo del Col di Lana",
            "provincia": "BL"
        }, {
            "comune": "Lorenzago di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Lozzo di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Mel",
            "provincia": "BL"
        }, {
            "comune": "Ospitale di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Pedavena",
            "provincia": "BL"
        }, {
            "comune": "Perarolo di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Pieve di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Ponte nelle Alpi",
            "provincia": "BL"
        }, {
            "comune": "Rivamonte Agordino",
            "provincia": "BL"
        }, {
            "comune": "Rocca Pietore",
            "provincia": "BL"
        }, {
            "comune": "San Gregorio nelle Alpi",
            "provincia": "BL"
        }, {
            "comune": "San Nicolò di Comelico",
            "provincia": "BL"
        }, {
            "comune": "San Pietro di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Santa Giustina",
            "provincia": "BL"
        }, {
            "comune": "San Tomaso Agordino",
            "provincia": "BL"
        }, {
            "comune": "Santo Stefano di Cadore",
            "provincia": "BL"
        }, {
            "comune": "San Vito di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Sappada",
            "provincia": "BL"
        }, {
            "comune": "Sedico",
            "provincia": "BL"
        }, {
            "comune": "Selva di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Seren del Grappa",
            "provincia": "BL"
        }, {
            "comune": "Sospirolo",
            "provincia": "BL"
        }, {
            "comune": "Soverzene",
            "provincia": "BL"
        }, {
            "comune": "Sovramonte",
            "provincia": "BL"
        }, {
            "comune": "Taibon Agordino",
            "provincia": "BL"
        }, {
            "comune": "Tambre",
            "provincia": "BL"
        }, {
            "comune": "Trichiana",
            "provincia": "BL"
        }, {
            "comune": "Vallada Agordina",
            "provincia": "BL"
        }, {
            "comune": "Valle di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Vigo di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Vodo Cadore",
            "provincia": "BL"
        }, {
            "comune": "Voltago Agordino",
            "provincia": "BL"
        }, {
            "comune": "Zoppè di Cadore",
            "provincia": "BL"
        }, {
            "comune": "Quero Vas",
            "provincia": "BL"
        }, {
            "comune": "Longarone",
            "provincia": "BL"
        }, {
            "comune": "Alpago",
            "provincia": "BL"
        }, {
            "comune": "Val di Zoldo",
            "provincia": "BL"
        }, {
            "comune": "Altivole",
            "provincia": "TV"
        }, {
            "comune": "Arcade",
            "provincia": "TV"
        }, {
            "comune": "Asolo",
            "provincia": "TV"
        }, {
            "comune": "Borso del Grappa",
            "provincia": "TV"
        }, {
            "comune": "Breda di Piave",
            "provincia": "TV"
        }, {
            "comune": "Caerano di San Marco",
            "provincia": "TV"
        }, {
            "comune": "Cappella Maggiore",
            "provincia": "TV"
        }, {
            "comune": "Carbonera",
            "provincia": "TV"
        }, {
            "comune": "Casale sul Sile",
            "provincia": "TV"
        }, {
            "comune": "Casier",
            "provincia": "TV"
        }, {
            "comune": "Castelcucco",
            "provincia": "TV"
        }, {
            "comune": "Castelfranco Veneto",
            "provincia": "TV"
        }, {
            "comune": "Castello di Godego",
            "provincia": "TV"
        }, {
            "comune": "Cavaso del Tomba",
            "provincia": "TV"
        }, {
            "comune": "Cessalto",
            "provincia": "TV"
        }, {
            "comune": "Chiarano",
            "provincia": "TV"
        }, {
            "comune": "Cimadolmo",
            "provincia": "TV"
        }, {
            "comune": "Cison di Valmarino",
            "provincia": "TV"
        }, {
            "comune": "Codognè",
            "provincia": "TV"
        }, {
            "comune": "Colle Umberto",
            "provincia": "TV"
        }, {
            "comune": "Conegliano",
            "provincia": "TV"
        }, {
            "comune": "Cordignano",
            "provincia": "TV"
        }, {
            "comune": "Cornuda",
            "provincia": "TV"
        }, {
            "comune": "Crespano del Grappa",
            "provincia": "TV"
        }, {
            "comune": "Crocetta del Montello",
            "provincia": "TV"
        }, {
            "comune": "Farra di Soligo",
            "provincia": "TV"
        }, {
            "comune": "Follina",
            "provincia": "TV"
        }, {
            "comune": "Fontanelle",
            "provincia": "TV"
        }, {
            "comune": "Fonte",
            "provincia": "TV"
        }, {
            "comune": "Fregona",
            "provincia": "TV"
        }, {
            "comune": "Gaiarine",
            "provincia": "TV"
        }, {
            "comune": "Giavera del Montello",
            "provincia": "TV"
        }, {
            "comune": "Godega di Sant'Urbano",
            "provincia": "TV"
        }, {
            "comune": "Gorgo al Monticano",
            "provincia": "TV"
        }, {
            "comune": "Istrana",
            "provincia": "TV"
        }, {
            "comune": "Loria",
            "provincia": "TV"
        }, {
            "comune": "Mansuè",
            "provincia": "TV"
        }, {
            "comune": "Mareno di Piave",
            "provincia": "TV"
        }, {
            "comune": "Maser",
            "provincia": "TV"
        }, {
            "comune": "Maserada sul Piave",
            "provincia": "TV"
        }, {
            "comune": "Meduna di Livenza",
            "provincia": "TV"
        }, {
            "comune": "Miane",
            "provincia": "TV"
        }, {
            "comune": "Mogliano Veneto",
            "provincia": "TV"
        }, {
            "comune": "Monastier di Treviso",
            "provincia": "TV"
        }, {
            "comune": "Monfumo",
            "provincia": "TV"
        }, {
            "comune": "Montebelluna",
            "provincia": "TV"
        }, {
            "comune": "Morgano",
            "provincia": "TV"
        }, {
            "comune": "Moriago della Battaglia",
            "provincia": "TV"
        }, {
            "comune": "Motta di Livenza",
            "provincia": "TV"
        }, {
            "comune": "Nervesa della Battaglia",
            "provincia": "TV"
        }, {
            "comune": "Oderzo",
            "provincia": "TV"
        }, {
            "comune": "Ormelle",
            "provincia": "TV"
        }, {
            "comune": "Orsago",
            "provincia": "TV"
        }, {
            "comune": "Paderno del Grappa",
            "provincia": "TV"
        }, {
            "comune": "Paese",
            "provincia": "TV"
        }, {
            "comune": "Pederobba",
            "provincia": "TV"
        }, {
            "comune": "Pieve di Soligo",
            "provincia": "TV"
        }, {
            "comune": "Ponte di Piave",
            "provincia": "TV"
        }, {
            "comune": "Ponzano Veneto",
            "provincia": "TV"
        }, {
            "comune": "Portobuffolè",
            "provincia": "TV"
        }, {
            "comune": "Possagno",
            "provincia": "TV"
        }, {
            "comune": "Povegliano",
            "provincia": "TV"
        }, {
            "comune": "Preganziol",
            "provincia": "TV"
        }, {
            "comune": "Quinto di Treviso",
            "provincia": "TV"
        }, {
            "comune": "Refrontolo",
            "provincia": "TV"
        }, {
            "comune": "Resana",
            "provincia": "TV"
        }, {
            "comune": "Revine Lago",
            "provincia": "TV"
        }, {
            "comune": "Riese Pio X",
            "provincia": "TV"
        }, {
            "comune": "Roncade",
            "provincia": "TV"
        }, {
            "comune": "Salgareda",
            "provincia": "TV"
        }, {
            "comune": "San Biagio di Callalta",
            "provincia": "TV"
        }, {
            "comune": "San Fior",
            "provincia": "TV"
        }, {
            "comune": "San Pietro di Feletto",
            "provincia": "TV"
        }, {
            "comune": "San Polo di Piave",
            "provincia": "TV"
        }, {
            "comune": "Santa Lucia di Piave",
            "provincia": "TV"
        }, {
            "comune": "San Vendemiano",
            "provincia": "TV"
        }, {
            "comune": "San Zenone degli Ezzelini",
            "provincia": "TV"
        }, {
            "comune": "Sarmede",
            "provincia": "TV"
        }, {
            "comune": "Segusino",
            "provincia": "TV"
        }, {
            "comune": "Sernaglia della Battaglia",
            "provincia": "TV"
        }, {
            "comune": "Silea",
            "provincia": "TV"
        }, {
            "comune": "Spresiano",
            "provincia": "TV"
        }, {
            "comune": "Susegana",
            "provincia": "TV"
        }, {
            "comune": "Tarzo",
            "provincia": "TV"
        }, {
            "comune": "Trevignano",
            "provincia": "TV"
        }, {
            "comune": "Treviso",
            "provincia": "TV"
        }, {
            "comune": "Valdobbiadene",
            "provincia": "TV"
        }, {
            "comune": "Vazzola",
            "provincia": "TV"
        }, {
            "comune": "Vedelago",
            "provincia": "TV"
        }, {
            "comune": "Vidor",
            "provincia": "TV"
        }, {
            "comune": "Villorba",
            "provincia": "TV"
        }, {
            "comune": "Vittorio Veneto",
            "provincia": "TV"
        }, {
            "comune": "Volpago del Montello",
            "provincia": "TV"
        }, {
            "comune": "Zenson di Piave",
            "provincia": "TV"
        }, {
            "comune": "Zero Branco",
            "provincia": "TV"
        }, {
            "comune": "Annone Veneto",
            "provincia": "VE"
        }, {
            "comune": "Campagna Lupia",
            "provincia": "VE"
        }, {
            "comune": "Campolongo Maggiore",
            "provincia": "VE"
        }, {
            "comune": "Camponogara",
            "provincia": "VE"
        }, {
            "comune": "Caorle",
            "provincia": "VE"
        }, {
            "comune": "Cavarzere",
            "provincia": "VE"
        }, {
            "comune": "Ceggia",
            "provincia": "VE"
        }, {
            "comune": "Chioggia",
            "provincia": "VE"
        }, {
            "comune": "Cinto Caomaggiore",
            "provincia": "VE"
        }, {
            "comune": "Cona",
            "provincia": "VE"
        }, {
            "comune": "Concordia Sagittaria",
            "provincia": "VE"
        }, {
            "comune": "Dolo",
            "provincia": "VE"
        }, {
            "comune": "Eraclea",
            "provincia": "VE"
        }, {
            "comune": "Fiesso d'Artico",
            "provincia": "VE"
        }, {
            "comune": "Fossalta di Piave",
            "provincia": "VE"
        }, {
            "comune": "Fossalta di Portogruaro",
            "provincia": "VE"
        }, {
            "comune": "Fossò",
            "provincia": "VE"
        }, {
            "comune": "Gruaro",
            "provincia": "VE"
        }, {
            "comune": "Jesolo",
            "provincia": "VE"
        }, {
            "comune": "Marcon",
            "provincia": "VE"
        }, {
            "comune": "Martellago",
            "provincia": "VE"
        }, {
            "comune": "Meolo",
            "provincia": "VE"
        }, {
            "comune": "Mira",
            "provincia": "VE"
        }, {
            "comune": "Mirano",
            "provincia": "VE"
        }, {
            "comune": "Musile di Piave",
            "provincia": "VE"
        }, {
            "comune": "Noale",
            "provincia": "VE"
        }, {
            "comune": "Noventa di Piave",
            "provincia": "VE"
        }, {
            "comune": "Pianiga",
            "provincia": "VE"
        }, {
            "comune": "Portogruaro",
            "provincia": "VE"
        }, {
            "comune": "Pramaggiore",
            "provincia": "VE"
        }, {
            "comune": "Quarto d'Altino",
            "provincia": "VE"
        }, {
            "comune": "Salzano",
            "provincia": "VE"
        }, {
            "comune": "San Donà di Piave",
            "provincia": "VE"
        }, {
            "comune": "San Michele al Tagliamento",
            "provincia": "VE"
        }, {
            "comune": "Santa Maria di Sala",
            "provincia": "VE"
        }, {
            "comune": "San Stino di Livenza",
            "provincia": "VE"
        }, {
            "comune": "Scorzè",
            "provincia": "VE"
        }, {
            "comune": "Spinea",
            "provincia": "VE"
        }, {
            "comune": "Stra",
            "provincia": "VE"
        }, {
            "comune": "Teglio Veneto",
            "provincia": "VE"
        }, {
            "comune": "Torre di Mosto",
            "provincia": "VE"
        }, {
            "comune": "Venezia",
            "provincia": "VE"
        }, {
            "comune": "Vigonovo",
            "provincia": "VE"
        }, {
            "comune": "Cavallino-Treporti",
            "provincia": "VE"
        }, {
            "comune": "Abano Terme",
            "provincia": "PD"
        }, {
            "comune": "Agna",
            "provincia": "PD"
        }, {
            "comune": "Albignasego",
            "provincia": "PD"
        }, {
            "comune": "Anguillara Veneta",
            "provincia": "PD"
        }, {
            "comune": "Arquà Petrarca",
            "provincia": "PD"
        }, {
            "comune": "Arre",
            "provincia": "PD"
        }, {
            "comune": "Arzergrande",
            "provincia": "PD"
        }, {
            "comune": "Bagnoli di Sopra",
            "provincia": "PD"
        }, {
            "comune": "Baone",
            "provincia": "PD"
        }, {
            "comune": "Barbona",
            "provincia": "PD"
        }, {
            "comune": "Battaglia Terme",
            "provincia": "PD"
        }, {
            "comune": "Boara Pisani",
            "provincia": "PD"
        }, {
            "comune": "Borgoricco",
            "provincia": "PD"
        }, {
            "comune": "Bovolenta",
            "provincia": "PD"
        }, {
            "comune": "Brugine",
            "provincia": "PD"
        }, {
            "comune": "Cadoneghe",
            "provincia": "PD"
        }, {
            "comune": "Campodarsego",
            "provincia": "PD"
        }, {
            "comune": "Campodoro",
            "provincia": "PD"
        }, {
            "comune": "Camposampiero",
            "provincia": "PD"
        }, {
            "comune": "Campo San Martino",
            "provincia": "PD"
        }, {
            "comune": "Candiana",
            "provincia": "PD"
        }, {
            "comune": "Carceri",
            "provincia": "PD"
        }, {
            "comune": "Carmignano di Brenta",
            "provincia": "PD"
        }, {
            "comune": "Cartura",
            "provincia": "PD"
        }, {
            "comune": "Casale di Scodosia",
            "provincia": "PD"
        }, {
            "comune": "Casalserugo",
            "provincia": "PD"
        }, {
            "comune": "Castelbaldo",
            "provincia": "PD"
        }, {
            "comune": "Cervarese Santa Croce",
            "provincia": "PD"
        }, {
            "comune": "Cinto Euganeo",
            "provincia": "PD"
        }, {
            "comune": "Cittadella",
            "provincia": "PD"
        }, {
            "comune": "Codevigo",
            "provincia": "PD"
        }, {
            "comune": "Conselve",
            "provincia": "PD"
        }, {
            "comune": "Correzzola",
            "provincia": "PD"
        }, {
            "comune": "Curtarolo",
            "provincia": "PD"
        }, {
            "comune": "Este",
            "provincia": "PD"
        }, {
            "comune": "Fontaniva",
            "provincia": "PD"
        }, {
            "comune": "Galliera Veneta",
            "provincia": "PD"
        }, {
            "comune": "Galzignano Terme",
            "provincia": "PD"
        }, {
            "comune": "Gazzo",
            "provincia": "PD"
        }, {
            "comune": "Grantorto",
            "provincia": "PD"
        }, {
            "comune": "Granze",
            "provincia": "PD"
        }, {
            "comune": "Legnaro",
            "provincia": "PD"
        }, {
            "comune": "Limena",
            "provincia": "PD"
        }, {
            "comune": "Loreggia",
            "provincia": "PD"
        }, {
            "comune": "Lozzo Atestino",
            "provincia": "PD"
        }, {
            "comune": "Maserà di Padova",
            "provincia": "PD"
        }, {
            "comune": "Masi",
            "provincia": "PD"
        }, {
            "comune": "Massanzago",
            "provincia": "PD"
        }, {
            "comune": "Megliadino San Fidenzio",
            "provincia": "PD"
        }, {
            "comune": "Megliadino San Vitale",
            "provincia": "PD"
        }, {
            "comune": "Merlara",
            "provincia": "PD"
        }, {
            "comune": "Mestrino",
            "provincia": "PD"
        }, {
            "comune": "Monselice",
            "provincia": "PD"
        }, {
            "comune": "Montagnana",
            "provincia": "PD"
        }, {
            "comune": "Montegrotto Terme",
            "provincia": "PD"
        }, {
            "comune": "Noventa Padovana",
            "provincia": "PD"
        }, {
            "comune": "Ospedaletto Euganeo",
            "provincia": "PD"
        }, {
            "comune": "Padova",
            "provincia": "PD"
        }, {
            "comune": "Pernumia",
            "provincia": "PD"
        }, {
            "comune": "Piacenza d'Adige",
            "provincia": "PD"
        }, {
            "comune": "Piazzola sul Brenta",
            "provincia": "PD"
        }, {
            "comune": "Piombino Dese",
            "provincia": "PD"
        }, {
            "comune": "Piove di Sacco",
            "provincia": "PD"
        }, {
            "comune": "Polverara",
            "provincia": "PD"
        }, {
            "comune": "Ponso",
            "provincia": "PD"
        }, {
            "comune": "Pontelongo",
            "provincia": "PD"
        }, {
            "comune": "Ponte San Nicolò",
            "provincia": "PD"
        }, {
            "comune": "Pozzonovo",
            "provincia": "PD"
        }, {
            "comune": "Rovolon",
            "provincia": "PD"
        }, {
            "comune": "Rubano",
            "provincia": "PD"
        }, {
            "comune": "Saccolongo",
            "provincia": "PD"
        }, {
            "comune": "Saletto",
            "provincia": "PD"
        }, {
            "comune": "San Giorgio delle Pertiche",
            "provincia": "PD"
        }, {
            "comune": "San Giorgio in Bosco",
            "provincia": "PD"
        }, {
            "comune": "San Martino di Lupari",
            "provincia": "PD"
        }, {
            "comune": "San Pietro in Gu",
            "provincia": "PD"
        }, {
            "comune": "San Pietro Viminario",
            "provincia": "PD"
        }, {
            "comune": "Santa Giustina in Colle",
            "provincia": "PD"
        }, {
            "comune": "Santa Margherita d'Adige",
            "provincia": "PD"
        }, {
            "comune": "Sant'Angelo di Piove di Sacco",
            "provincia": "PD"
        }, {
            "comune": "Sant'Elena",
            "provincia": "PD"
        }, {
            "comune": "Sant'Urbano",
            "provincia": "PD"
        }, {
            "comune": "Saonara",
            "provincia": "PD"
        }, {
            "comune": "Selvazzano Dentro",
            "provincia": "PD"
        }, {
            "comune": "Solesino",
            "provincia": "PD"
        }, {
            "comune": "Stanghella",
            "provincia": "PD"
        }, {
            "comune": "Teolo",
            "provincia": "PD"
        }, {
            "comune": "Terrassa Padovana",
            "provincia": "PD"
        }, {
            "comune": "Tombolo",
            "provincia": "PD"
        }, {
            "comune": "Torreglia",
            "provincia": "PD"
        }, {
            "comune": "Trebaseleghe",
            "provincia": "PD"
        }, {
            "comune": "Tribano",
            "provincia": "PD"
        }, {
            "comune": "Urbana",
            "provincia": "PD"
        }, {
            "comune": "Veggiano",
            "provincia": "PD"
        }, {
            "comune": "Vescovana",
            "provincia": "PD"
        }, {
            "comune": "Vighizzolo d'Este",
            "provincia": "PD"
        }, {
            "comune": "Vigodarzere",
            "provincia": "PD"
        }, {
            "comune": "Vigonza",
            "provincia": "PD"
        }, {
            "comune": "Villa del Conte",
            "provincia": "PD"
        }, {
            "comune": "Villa Estense",
            "provincia": "PD"
        }, {
            "comune": "Villafranca Padovana",
            "provincia": "PD"
        }, {
            "comune": "Villanova di Camposampiero",
            "provincia": "PD"
        }, {
            "comune": "Vo'",
            "provincia": "PD"
        }, {
            "comune": "Due Carrare",
            "provincia": "PD"
        }, {
            "comune": "Adria",
            "provincia": "RO"
        }, {
            "comune": "Ariano nel Polesine",
            "provincia": "RO"
        }, {
            "comune": "Arquà Polesine",
            "provincia": "RO"
        }, {
            "comune": "Badia Polesine",
            "provincia": "RO"
        }, {
            "comune": "Bagnolo di Po",
            "provincia": "RO"
        }, {
            "comune": "Bergantino",
            "provincia": "RO"
        }, {
            "comune": "Bosaro",
            "provincia": "RO"
        }, {
            "comune": "Calto",
            "provincia": "RO"
        }, {
            "comune": "Canaro",
            "provincia": "RO"
        }, {
            "comune": "Canda",
            "provincia": "RO"
        }, {
            "comune": "Castelguglielmo",
            "provincia": "RO"
        }, {
            "comune": "Castelmassa",
            "provincia": "RO"
        }, {
            "comune": "Castelnovo Bariano",
            "provincia": "RO"
        }, {
            "comune": "Ceneselli",
            "provincia": "RO"
        }, {
            "comune": "Ceregnano",
            "provincia": "RO"
        }, {
            "comune": "Corbola",
            "provincia": "RO"
        }, {
            "comune": "Costa di Rovigo",
            "provincia": "RO"
        }, {
            "comune": "Crespino",
            "provincia": "RO"
        }, {
            "comune": "Ficarolo",
            "provincia": "RO"
        }, {
            "comune": "Fiesso Umbertiano",
            "provincia": "RO"
        }, {
            "comune": "Frassinelle Polesine",
            "provincia": "RO"
        }, {
            "comune": "Fratta Polesine",
            "provincia": "RO"
        }, {
            "comune": "Gaiba",
            "provincia": "RO"
        }, {
            "comune": "Gavello",
            "provincia": "RO"
        }, {
            "comune": "Giacciano con Baruchella",
            "provincia": "RO"
        }, {
            "comune": "Guarda Veneta",
            "provincia": "RO"
        }, {
            "comune": "Lendinara",
            "provincia": "RO"
        }, {
            "comune": "Loreo",
            "provincia": "RO"
        }, {
            "comune": "Lusia",
            "provincia": "RO"
        }, {
            "comune": "Melara",
            "provincia": "RO"
        }, {
            "comune": "Occhiobello",
            "provincia": "RO"
        }, {
            "comune": "Papozze",
            "provincia": "RO"
        }, {
            "comune": "Pettorazza Grimani",
            "provincia": "RO"
        }, {
            "comune": "Pincara",
            "provincia": "RO"
        }, {
            "comune": "Polesella",
            "provincia": "RO"
        }, {
            "comune": "Pontecchio Polesine",
            "provincia": "RO"
        }, {
            "comune": "Porto Tolle",
            "provincia": "RO"
        }, {
            "comune": "Rosolina",
            "provincia": "RO"
        }, {
            "comune": "Rovigo",
            "provincia": "RO"
        }, {
            "comune": "Salara",
            "provincia": "RO"
        }, {
            "comune": "San Bellino",
            "provincia": "RO"
        }, {
            "comune": "San Martino di Venezze",
            "provincia": "RO"
        }, {
            "comune": "Stienta",
            "provincia": "RO"
        }, {
            "comune": "Taglio di Po",
            "provincia": "RO"
        }, {
            "comune": "Trecenta",
            "provincia": "RO"
        }, {
            "comune": "Villadose",
            "provincia": "RO"
        }, {
            "comune": "Villamarzana",
            "provincia": "RO"
        }, {
            "comune": "Villanova del Ghebbo",
            "provincia": "RO"
        }, {
            "comune": "Villanova Marchesana",
            "provincia": "RO"
        }, {
            "comune": "Porto Viro",
            "provincia": "RO"
        }, {
            "comune": "Aiello del Friuli",
            "provincia": "UD"
        }, {
            "comune": "Amaro",
            "provincia": "UD"
        }, {
            "comune": "Ampezzo",
            "provincia": "UD"
        }, {
            "comune": "Aquileia",
            "provincia": "UD"
        }, {
            "comune": "Arta Terme",
            "provincia": "UD"
        }, {
            "comune": "Artegna",
            "provincia": "UD"
        }, {
            "comune": "Attimis",
            "provincia": "UD"
        }, {
            "comune": "Bagnaria Arsa",
            "provincia": "UD"
        }, {
            "comune": "Basiliano",
            "provincia": "UD"
        }, {
            "comune": "Bertiolo",
            "provincia": "UD"
        }, {
            "comune": "Bicinicco",
            "provincia": "UD"
        }, {
            "comune": "Bordano",
            "provincia": "UD"
        }, {
            "comune": "Buja",
            "provincia": "UD"
        }, {
            "comune": "Buttrio",
            "provincia": "UD"
        }, {
            "comune": "Camino al Tagliamento",
            "provincia": "UD"
        }, {
            "comune": "Campoformido",
            "provincia": "UD"
        }, {
            "comune": "Carlino",
            "provincia": "UD"
        }, {
            "comune": "Cassacco",
            "provincia": "UD"
        }, {
            "comune": "Castions di Strada",
            "provincia": "UD"
        }, {
            "comune": "Cavazzo Carnico",
            "provincia": "UD"
        }, {
            "comune": "Cercivento",
            "provincia": "UD"
        }, {
            "comune": "Cervignano del Friuli",
            "provincia": "UD"
        }, {
            "comune": "Chiopris-Viscone",
            "provincia": "UD"
        }, {
            "comune": "Chiusaforte",
            "provincia": "UD"
        }, {
            "comune": "Cividale del Friuli",
            "provincia": "UD"
        }, {
            "comune": "Codroipo",
            "provincia": "UD"
        }, {
            "comune": "Colloredo di Monte Albano",
            "provincia": "UD"
        }, {
            "comune": "Comeglians",
            "provincia": "UD"
        }, {
            "comune": "Corno di Rosazzo",
            "provincia": "UD"
        }, {
            "comune": "Coseano",
            "provincia": "UD"
        }, {
            "comune": "Dignano",
            "provincia": "UD"
        }, {
            "comune": "Dogna",
            "provincia": "UD"
        }, {
            "comune": "Drenchia",
            "provincia": "UD"
        }, {
            "comune": "Enemonzo",
            "provincia": "UD"
        }, {
            "comune": "Faedis",
            "provincia": "UD"
        }, {
            "comune": "Fagagna",
            "provincia": "UD"
        }, {
            "comune": "Fiumicello",
            "provincia": "UD"
        }, {
            "comune": "Flaibano",
            "provincia": "UD"
        }, {
            "comune": "Forni Avoltri",
            "provincia": "UD"
        }, {
            "comune": "Forni di Sopra",
            "provincia": "UD"
        }, {
            "comune": "Forni di Sotto",
            "provincia": "UD"
        }, {
            "comune": "Gemona del Friuli",
            "provincia": "UD"
        }, {
            "comune": "Gonars",
            "provincia": "UD"
        }, {
            "comune": "Grimacco",
            "provincia": "UD"
        }, {
            "comune": "Latisana",
            "provincia": "UD"
        }, {
            "comune": "Lauco",
            "provincia": "UD"
        }, {
            "comune": "Lestizza",
            "provincia": "UD"
        }, {
            "comune": "Lignano Sabbiadoro",
            "provincia": "UD"
        }, {
            "comune": "Ligosullo",
            "provincia": "UD"
        }, {
            "comune": "Lusevera",
            "provincia": "UD"
        }, {
            "comune": "Magnano in Riviera",
            "provincia": "UD"
        }, {
            "comune": "Majano",
            "provincia": "UD"
        }, {
            "comune": "Malborghetto Valbruna",
            "provincia": "UD"
        }, {
            "comune": "Manzano",
            "provincia": "UD"
        }, {
            "comune": "Marano Lagunare",
            "provincia": "UD"
        }, {
            "comune": "Martignacco",
            "provincia": "UD"
        }, {
            "comune": "Mereto di Tomba",
            "provincia": "UD"
        }, {
            "comune": "Moggio Udinese",
            "provincia": "UD"
        }, {
            "comune": "Moimacco",
            "provincia": "UD"
        }, {
            "comune": "Montenars",
            "provincia": "UD"
        }, {
            "comune": "Mortegliano",
            "provincia": "UD"
        }, {
            "comune": "Moruzzo",
            "provincia": "UD"
        }, {
            "comune": "Muzzana del Turgnano",
            "provincia": "UD"
        }, {
            "comune": "Nimis",
            "provincia": "UD"
        }, {
            "comune": "Osoppo",
            "provincia": "UD"
        }, {
            "comune": "Ovaro",
            "provincia": "UD"
        }, {
            "comune": "Pagnacco",
            "provincia": "UD"
        }, {
            "comune": "Palazzolo dello Stella",
            "provincia": "UD"
        }, {
            "comune": "Palmanova",
            "provincia": "UD"
        }, {
            "comune": "Paluzza",
            "provincia": "UD"
        }, {
            "comune": "Pasian di Prato",
            "provincia": "UD"
        }, {
            "comune": "Paularo",
            "provincia": "UD"
        }, {
            "comune": "Pavia di Udine",
            "provincia": "UD"
        }, {
            "comune": "Pocenia",
            "provincia": "UD"
        }, {
            "comune": "Pontebba",
            "provincia": "UD"
        }, {
            "comune": "Porpetto",
            "provincia": "UD"
        }, {
            "comune": "Povoletto",
            "provincia": "UD"
        }, {
            "comune": "Pozzuolo del Friuli",
            "provincia": "UD"
        }, {
            "comune": "Pradamano",
            "provincia": "UD"
        }, {
            "comune": "Prato Carnico",
            "provincia": "UD"
        }, {
            "comune": "Precenicco",
            "provincia": "UD"
        }, {
            "comune": "Premariacco",
            "provincia": "UD"
        }, {
            "comune": "Preone",
            "provincia": "UD"
        }, {
            "comune": "Prepotto",
            "provincia": "UD"
        }, {
            "comune": "Pulfero",
            "provincia": "UD"
        }, {
            "comune": "Ragogna",
            "provincia": "UD"
        }, {
            "comune": "Ravascletto",
            "provincia": "UD"
        }, {
            "comune": "Raveo",
            "provincia": "UD"
        }, {
            "comune": "Reana del Rojale",
            "provincia": "UD"
        }, {
            "comune": "Remanzacco",
            "provincia": "UD"
        }, {
            "comune": "Resia",
            "provincia": "UD"
        }, {
            "comune": "Resiutta",
            "provincia": "UD"
        }, {
            "comune": "Rigolato",
            "provincia": "UD"
        }, {
            "comune": "Rive D'Arcano",
            "provincia": "UD"
        }, {
            "comune": "Ronchis",
            "provincia": "UD"
        }, {
            "comune": "Ruda",
            "provincia": "UD"
        }, {
            "comune": "San Daniele del Friuli",
            "provincia": "UD"
        }, {
            "comune": "San Giorgio di Nogaro",
            "provincia": "UD"
        }, {
            "comune": "San Giovanni al Natisone",
            "provincia": "UD"
        }, {
            "comune": "San Leonardo",
            "provincia": "UD"
        }, {
            "comune": "San Pietro al Natisone",
            "provincia": "UD"
        }, {
            "comune": "Santa Maria La Longa",
            "provincia": "UD"
        }, {
            "comune": "San Vito al Torre",
            "provincia": "UD"
        }, {
            "comune": "San Vito di Fagagna",
            "provincia": "UD"
        }, {
            "comune": "Sauris",
            "provincia": "UD"
        }, {
            "comune": "Savogna",
            "provincia": "UD"
        }, {
            "comune": "Sedegliano",
            "provincia": "UD"
        }, {
            "comune": "Socchieve",
            "provincia": "UD"
        }, {
            "comune": "Stregna",
            "provincia": "UD"
        }, {
            "comune": "Sutrio",
            "provincia": "UD"
        }, {
            "comune": "Taipana",
            "provincia": "UD"
        }, {
            "comune": "Talmassons",
            "provincia": "UD"
        }, {
            "comune": "Tarcento",
            "provincia": "UD"
        }, {
            "comune": "Tarvisio",
            "provincia": "UD"
        }, {
            "comune": "Tavagnacco",
            "provincia": "UD"
        }, {
            "comune": "Terzo d'Aquileia",
            "provincia": "UD"
        }, {
            "comune": "Tolmezzo",
            "provincia": "UD"
        }, {
            "comune": "Torreano",
            "provincia": "UD"
        }, {
            "comune": "Torviscosa",
            "provincia": "UD"
        }, {
            "comune": "Trasaghis",
            "provincia": "UD"
        }, {
            "comune": "Treppo Carnico",
            "provincia": "UD"
        }, {
            "comune": "Treppo Grande",
            "provincia": "UD"
        }, {
            "comune": "Tricesimo",
            "provincia": "UD"
        }, {
            "comune": "Trivignano Udinese",
            "provincia": "UD"
        }, {
            "comune": "Udine",
            "provincia": "UD"
        }, {
            "comune": "Varmo",
            "provincia": "UD"
        }, {
            "comune": "Venzone",
            "provincia": "UD"
        }, {
            "comune": "Verzegnis",
            "provincia": "UD"
        }, {
            "comune": "Villa Santina",
            "provincia": "UD"
        }, {
            "comune": "Villa Vicentina",
            "provincia": "UD"
        }, {
            "comune": "Visco",
            "provincia": "UD"
        }, {
            "comune": "Zuglio",
            "provincia": "UD"
        }, {
            "comune": "Forgaria nel Friuli",
            "provincia": "UD"
        }, {
            "comune": "Campolongo Tapogliano",
            "provincia": "UD"
        }, {
            "comune": "Rivignano Teor",
            "provincia": "UD"
        }, {
            "comune": "Capriva del Friuli",
            "provincia": "GO"
        }, {
            "comune": "Cormons",
            "provincia": "GO"
        }, {
            "comune": "Doberdò del Lago",
            "provincia": "GO"
        }, {
            "comune": "Dolegna del Collio",
            "provincia": "GO"
        }, {
            "comune": "Farra d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "Fogliano Redipuglia",
            "provincia": "GO"
        }, {
            "comune": "Gorizia",
            "provincia": "GO"
        }, {
            "comune": "Gradisca d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "Grado",
            "provincia": "GO"
        }, {
            "comune": "Mariano del Friuli",
            "provincia": "GO"
        }, {
            "comune": "Medea",
            "provincia": "GO"
        }, {
            "comune": "Monfalcone",
            "provincia": "GO"
        }, {
            "comune": "Moraro",
            "provincia": "GO"
        }, {
            "comune": "Mossa",
            "provincia": "GO"
        }, {
            "comune": "Romans d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "Ronchi dei Legionari",
            "provincia": "GO"
        }, {
            "comune": "Sagrado",
            "provincia": "GO"
        }, {
            "comune": "San Canzian d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "San Floriano del Collio",
            "provincia": "GO"
        }, {
            "comune": "San Lorenzo Isontino",
            "provincia": "GO"
        }, {
            "comune": "San Pier d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "Savogna d'Isonzo",
            "provincia": "GO"
        }, {
            "comune": "Staranzano",
            "provincia": "GO"
        }, {
            "comune": "Turriaco",
            "provincia": "GO"
        }, {
            "comune": "Villesse",
            "provincia": "GO"
        }, {
            "comune": "Duino-Aurisina",
            "provincia": "TS"
        }, {
            "comune": "Monrupino",
            "provincia": "TS"
        }, {
            "comune": "Muggia",
            "provincia": "TS"
        }, {
            "comune": "San Dorligo della Valle-Dolina",
            "provincia": "TS"
        }, {
            "comune": "Sgonico",
            "provincia": "TS"
        }, {
            "comune": "Trieste",
            "provincia": "TS"
        }, {
            "comune": "Agazzano",
            "provincia": "PC"
        }, {
            "comune": "Alseno",
            "provincia": "PC"
        }, {
            "comune": "Besenzone",
            "provincia": "PC"
        }, {
            "comune": "Bettola",
            "provincia": "PC"
        }, {
            "comune": "Bobbio",
            "provincia": "PC"
        }, {
            "comune": "Borgonovo Val Tidone",
            "provincia": "PC"
        }, {
            "comune": "Cadeo",
            "provincia": "PC"
        }, {
            "comune": "Calendasco",
            "provincia": "PC"
        }, {
            "comune": "Caminata",
            "provincia": "PC"
        }, {
            "comune": "Caorso",
            "provincia": "PC"
        }, {
            "comune": "Carpaneto Piacentino",
            "provincia": "PC"
        }, {
            "comune": "Castell'Arquato",
            "provincia": "PC"
        }, {
            "comune": "Castel San Giovanni",
            "provincia": "PC"
        }, {
            "comune": "Castelvetro Piacentino",
            "provincia": "PC"
        }, {
            "comune": "Cerignale",
            "provincia": "PC"
        }, {
            "comune": "Coli",
            "provincia": "PC"
        }, {
            "comune": "Corte Brugnatella",
            "provincia": "PC"
        }, {
            "comune": "Cortemaggiore",
            "provincia": "PC"
        }, {
            "comune": "Farini",
            "provincia": "PC"
        }, {
            "comune": "Ferriere",
            "provincia": "PC"
        }, {
            "comune": "Fiorenzuola d'Arda",
            "provincia": "PC"
        }, {
            "comune": "Gazzola",
            "provincia": "PC"
        }, {
            "comune": "Gossolengo",
            "provincia": "PC"
        }, {
            "comune": "Gragnano Trebbiense",
            "provincia": "PC"
        }, {
            "comune": "Gropparello",
            "provincia": "PC"
        }, {
            "comune": "Lugagnano Val D'Arda",
            "provincia": "PC"
        }, {
            "comune": "Monticelli d'Ongina",
            "provincia": "PC"
        }, {
            "comune": "Morfasso",
            "provincia": "PC"
        }, {
            "comune": "Nibbiano",
            "provincia": "PC"
        }, {
            "comune": "Ottone",
            "provincia": "PC"
        }, {
            "comune": "Pecorara",
            "provincia": "PC"
        }, {
            "comune": "Piacenza",
            "provincia": "PC"
        }, {
            "comune": "Pianello Val Tidone",
            "provincia": "PC"
        }, {
            "comune": "Piozzano",
            "provincia": "PC"
        }, {
            "comune": "Podenzano",
            "provincia": "PC"
        }, {
            "comune": "Ponte dell'Olio",
            "provincia": "PC"
        }, {
            "comune": "Pontenure",
            "provincia": "PC"
        }, {
            "comune": "Rivergaro",
            "provincia": "PC"
        }, {
            "comune": "Rottofreno",
            "provincia": "PC"
        }, {
            "comune": "San Giorgio Piacentino",
            "provincia": "PC"
        }, {
            "comune": "San Pietro in Cerro",
            "provincia": "PC"
        }, {
            "comune": "Sarmato",
            "provincia": "PC"
        }, {
            "comune": "Travo",
            "provincia": "PC"
        }, {
            "comune": "Vernasca",
            "provincia": "PC"
        }, {
            "comune": "Vigolzone",
            "provincia": "PC"
        }, {
            "comune": "Villanova sull'Arda",
            "provincia": "PC"
        }, {
            "comune": "Zerba",
            "provincia": "PC"
        }, {
            "comune": "Ziano Piacentino",
            "provincia": "PC"
        }, {
            "comune": "Albareto",
            "provincia": "PR"
        }, {
            "comune": "Bardi",
            "provincia": "PR"
        }, {
            "comune": "Bedonia",
            "provincia": "PR"
        }, {
            "comune": "Berceto",
            "provincia": "PR"
        }, {
            "comune": "Bore",
            "provincia": "PR"
        }, {
            "comune": "Borgo Val di Taro",
            "provincia": "PR"
        }, {
            "comune": "Busseto",
            "provincia": "PR"
        }, {
            "comune": "Calestano",
            "provincia": "PR"
        }, {
            "comune": "Collecchio",
            "provincia": "PR"
        }, {
            "comune": "Colorno",
            "provincia": "PR"
        }, {
            "comune": "Compiano",
            "provincia": "PR"
        }, {
            "comune": "Corniglio",
            "provincia": "PR"
        }, {
            "comune": "Felino",
            "provincia": "PR"
        }, {
            "comune": "Fidenza",
            "provincia": "PR"
        }, {
            "comune": "Fontanellato",
            "provincia": "PR"
        }, {
            "comune": "Fontevivo",
            "provincia": "PR"
        }, {
            "comune": "Fornovo di Taro",
            "provincia": "PR"
        }, {
            "comune": "Langhirano",
            "provincia": "PR"
        }, {
            "comune": "Lesignano de' Bagni",
            "provincia": "PR"
        }, {
            "comune": "Medesano",
            "provincia": "PR"
        }, {
            "comune": "Mezzani",
            "provincia": "PR"
        }, {
            "comune": "Monchio delle Corti",
            "provincia": "PR"
        }, {
            "comune": "Montechiarugolo",
            "provincia": "PR"
        }, {
            "comune": "Neviano degli Arduini",
            "provincia": "PR"
        }, {
            "comune": "Noceto",
            "provincia": "PR"
        }, {
            "comune": "Palanzano",
            "provincia": "PR"
        }, {
            "comune": "Parma",
            "provincia": "PR"
        }, {
            "comune": "Pellegrino Parmense",
            "provincia": "PR"
        }, {
            "comune": "Roccabianca",
            "provincia": "PR"
        }, {
            "comune": "Sala Baganza",
            "provincia": "PR"
        }, {
            "comune": "Salsomaggiore Terme",
            "provincia": "PR"
        }, {
            "comune": "San Secondo Parmense",
            "provincia": "PR"
        }, {
            "comune": "Solignano",
            "provincia": "PR"
        }, {
            "comune": "Soragna",
            "provincia": "PR"
        }, {
            "comune": "Sorbolo",
            "provincia": "PR"
        }, {
            "comune": "Terenzo",
            "provincia": "PR"
        }, {
            "comune": "Tizzano Val Parma",
            "provincia": "PR"
        }, {
            "comune": "Tornolo",
            "provincia": "PR"
        }, {
            "comune": "Torrile",
            "provincia": "PR"
        }, {
            "comune": "Traversetolo",
            "provincia": "PR"
        }, {
            "comune": "Valmozzola",
            "provincia": "PR"
        }, {
            "comune": "Varano de' Melegari",
            "provincia": "PR"
        }, {
            "comune": "Varsi",
            "provincia": "PR"
        }, {
            "comune": "Sissa Trecasali",
            "provincia": "PR"
        }, {
            "comune": "Polesine Zibello",
            "provincia": "PR"
        }, {
            "comune": "Albinea",
            "provincia": "RE"
        }, {
            "comune": "Bagnolo in Piano",
            "provincia": "RE"
        }, {
            "comune": "Baiso",
            "provincia": "RE"
        }, {
            "comune": "Bibbiano",
            "provincia": "RE"
        }, {
            "comune": "Boretto",
            "provincia": "RE"
        }, {
            "comune": "Brescello",
            "provincia": "RE"
        }, {
            "comune": "Cadelbosco di Sopra",
            "provincia": "RE"
        }, {
            "comune": "Campagnola Emilia",
            "provincia": "RE"
        }, {
            "comune": "Campegine",
            "provincia": "RE"
        }, {
            "comune": "Carpineti",
            "provincia": "RE"
        }, {
            "comune": "Casalgrande",
            "provincia": "RE"
        }, {
            "comune": "Casina",
            "provincia": "RE"
        }, {
            "comune": "Castellarano",
            "provincia": "RE"
        }, {
            "comune": "Castelnovo di Sotto",
            "provincia": "RE"
        }, {
            "comune": "Castelnovo ne' Monti",
            "provincia": "RE"
        }, {
            "comune": "Cavriago",
            "provincia": "RE"
        }, {
            "comune": "Canossa",
            "provincia": "RE"
        }, {
            "comune": "Correggio",
            "provincia": "RE"
        }, {
            "comune": "Fabbrico",
            "provincia": "RE"
        }, {
            "comune": "Gattatico",
            "provincia": "RE"
        }, {
            "comune": "Gualtieri",
            "provincia": "RE"
        }, {
            "comune": "Guastalla",
            "provincia": "RE"
        }, {
            "comune": "Luzzara",
            "provincia": "RE"
        }, {
            "comune": "Montecchio Emilia",
            "provincia": "RE"
        }, {
            "comune": "Novellara",
            "provincia": "RE"
        }, {
            "comune": "Poviglio",
            "provincia": "RE"
        }, {
            "comune": "Quattro Castella",
            "provincia": "RE"
        }, {
            "comune": "Reggiolo",
            "provincia": "RE"
        }, {
            "comune": "Reggio nell'Emilia",
            "provincia": "RE"
        }, {
            "comune": "Rio Saliceto",
            "provincia": "RE"
        }, {
            "comune": "Rolo",
            "provincia": "RE"
        }, {
            "comune": "Rubiera",
            "provincia": "RE"
        }, {
            "comune": "San Martino in Rio",
            "provincia": "RE"
        }, {
            "comune": "San Polo d'Enza",
            "provincia": "RE"
        }, {
            "comune": "Sant'Ilario d'Enza",
            "provincia": "RE"
        }, {
            "comune": "Scandiano",
            "provincia": "RE"
        }, {
            "comune": "Toano",
            "provincia": "RE"
        }, {
            "comune": "Vetto",
            "provincia": "RE"
        }, {
            "comune": "Vezzano sul Crostolo",
            "provincia": "RE"
        }, {
            "comune": "Viano",
            "provincia": "RE"
        }, {
            "comune": "Villa Minozzo",
            "provincia": "RE"
        }, {
            "comune": "Ventasso",
            "provincia": "RE"
        }, {
            "comune": "Bastiglia",
            "provincia": "MO"
        }, {
            "comune": "Bomporto",
            "provincia": "MO"
        }, {
            "comune": "Campogalliano",
            "provincia": "MO"
        }, {
            "comune": "Camposanto",
            "provincia": "MO"
        }, {
            "comune": "Carpi",
            "provincia": "MO"
        }, {
            "comune": "Castelfranco Emilia",
            "provincia": "MO"
        }, {
            "comune": "Castelnuovo Rangone",
            "provincia": "MO"
        }, {
            "comune": "Castelvetro di Modena",
            "provincia": "MO"
        }, {
            "comune": "Cavezzo",
            "provincia": "MO"
        }, {
            "comune": "Concordia sulla Secchia",
            "provincia": "MO"
        }, {
            "comune": "Fanano",
            "provincia": "MO"
        }, {
            "comune": "Finale Emilia",
            "provincia": "MO"
        }, {
            "comune": "Fiorano Modenese",
            "provincia": "MO"
        }, {
            "comune": "Fiumalbo",
            "provincia": "MO"
        }, {
            "comune": "Formigine",
            "provincia": "MO"
        }, {
            "comune": "Frassinoro",
            "provincia": "MO"
        }, {
            "comune": "Guiglia",
            "provincia": "MO"
        }, {
            "comune": "Lama Mocogno",
            "provincia": "MO"
        }, {
            "comune": "Maranello",
            "provincia": "MO"
        }, {
            "comune": "Marano sul Panaro",
            "provincia": "MO"
        }, {
            "comune": "Medolla",
            "provincia": "MO"
        }, {
            "comune": "Mirandola",
            "provincia": "MO"
        }, {
            "comune": "Modena",
            "provincia": "MO"
        }, {
            "comune": "Montecreto",
            "provincia": "MO"
        }, {
            "comune": "Montefiorino",
            "provincia": "MO"
        }, {
            "comune": "Montese",
            "provincia": "MO"
        }, {
            "comune": "Nonantola",
            "provincia": "MO"
        }, {
            "comune": "Novi di Modena",
            "provincia": "MO"
        }, {
            "comune": "Palagano",
            "provincia": "MO"
        }, {
            "comune": "Pavullo nel Frignano",
            "provincia": "MO"
        }, {
            "comune": "Pievepelago",
            "provincia": "MO"
        }, {
            "comune": "Polinago",
            "provincia": "MO"
        }, {
            "comune": "Prignano sulla Secchia",
            "provincia": "MO"
        }, {
            "comune": "Ravarino",
            "provincia": "MO"
        }, {
            "comune": "Riolunato",
            "provincia": "MO"
        }, {
            "comune": "San Cesario sul Panaro",
            "provincia": "MO"
        }, {
            "comune": "San Felice sul Panaro",
            "provincia": "MO"
        }, {
            "comune": "San Possidonio",
            "provincia": "MO"
        }, {
            "comune": "San Prospero",
            "provincia": "MO"
        }, {
            "comune": "Sassuolo",
            "provincia": "MO"
        }, {
            "comune": "Savignano sul Panaro",
            "provincia": "MO"
        }, {
            "comune": "Serramazzoni",
            "provincia": "MO"
        }, {
            "comune": "Sestola",
            "provincia": "MO"
        }, {
            "comune": "Soliera",
            "provincia": "MO"
        }, {
            "comune": "Spilamberto",
            "provincia": "MO"
        }, {
            "comune": "Vignola",
            "provincia": "MO"
        }, {
            "comune": "Zocca",
            "provincia": "MO"
        }, {
            "comune": "Anzola dell'Emilia",
            "provincia": "BO"
        }, {
            "comune": "Argelato",
            "provincia": "BO"
        }, {
            "comune": "Baricella",
            "provincia": "BO"
        }, {
            "comune": "Bentivoglio",
            "provincia": "BO"
        }, {
            "comune": "Bologna",
            "provincia": "BO"
        }, {
            "comune": "Borgo Tossignano",
            "provincia": "BO"
        }, {
            "comune": "Budrio",
            "provincia": "BO"
        }, {
            "comune": "Calderara di Reno",
            "provincia": "BO"
        }, {
            "comune": "Camugnano",
            "provincia": "BO"
        }, {
            "comune": "Casalecchio di Reno",
            "provincia": "BO"
        }, {
            "comune": "Casalfiumanese",
            "provincia": "BO"
        }, {
            "comune": "Castel d'Aiano",
            "provincia": "BO"
        }, {
            "comune": "Castel del Rio",
            "provincia": "BO"
        }, {
            "comune": "Castel di Casio",
            "provincia": "BO"
        }, {
            "comune": "Castel Guelfo di Bologna",
            "provincia": "BO"
        }, {
            "comune": "Castello d'Argile",
            "provincia": "BO"
        }, {
            "comune": "Castel Maggiore",
            "provincia": "BO"
        }, {
            "comune": "Castel San Pietro Terme",
            "provincia": "BO"
        }, {
            "comune": "Castenaso",
            "provincia": "BO"
        }, {
            "comune": "Castiglione dei Pepoli",
            "provincia": "BO"
        }, {
            "comune": "Crevalcore",
            "provincia": "BO"
        }, {
            "comune": "Dozza",
            "provincia": "BO"
        }, {
            "comune": "Fontanelice",
            "provincia": "BO"
        }, {
            "comune": "Gaggio Montano",
            "provincia": "BO"
        }, {
            "comune": "Galliera",
            "provincia": "BO"
        }, {
            "comune": "Granarolo dell'Emilia",
            "provincia": "BO"
        }, {
            "comune": "Grizzana Morandi",
            "provincia": "BO"
        }, {
            "comune": "Imola",
            "provincia": "BO"
        }, {
            "comune": "Lizzano in Belvedere",
            "provincia": "BO"
        }, {
            "comune": "Loiano",
            "provincia": "BO"
        }, {
            "comune": "Malalbergo",
            "provincia": "BO"
        }, {
            "comune": "Marzabotto",
            "provincia": "BO"
        }, {
            "comune": "Medicina",
            "provincia": "BO"
        }, {
            "comune": "Minerbio",
            "provincia": "BO"
        }, {
            "comune": "Molinella",
            "provincia": "BO"
        }, {
            "comune": "Monghidoro",
            "provincia": "BO"
        }, {
            "comune": "Monterenzio",
            "provincia": "BO"
        }, {
            "comune": "Monte San Pietro",
            "provincia": "BO"
        }, {
            "comune": "Monzuno",
            "provincia": "BO"
        }, {
            "comune": "Mordano",
            "provincia": "BO"
        }, {
            "comune": "Ozzano dell'Emilia",
            "provincia": "BO"
        }, {
            "comune": "Pianoro",
            "provincia": "BO"
        }, {
            "comune": "Pieve di Cento",
            "provincia": "BO"
        }, {
            "comune": "Sala Bolognese",
            "provincia": "BO"
        }, {
            "comune": "San Benedetto Val di Sambro",
            "provincia": "BO"
        }, {
            "comune": "San Giorgio di Piano",
            "provincia": "BO"
        }, {
            "comune": "San Giovanni in Persiceto",
            "provincia": "BO"
        }, {
            "comune": "San Lazzaro di Savena",
            "provincia": "BO"
        }, {
            "comune": "San Pietro in Casale",
            "provincia": "BO"
        }, {
            "comune": "Sant'Agata Bolognese",
            "provincia": "BO"
        }, {
            "comune": "Sasso Marconi",
            "provincia": "BO"
        }, {
            "comune": "Vergato",
            "provincia": "BO"
        }, {
            "comune": "Zola Predosa",
            "provincia": "BO"
        }, {
            "comune": "Valsamoggia",
            "provincia": "BO"
        }, {
            "comune": "Alto Reno Terme",
            "provincia": "BO"
        }, {
            "comune": "Argenta",
            "provincia": "FE"
        }, {
            "comune": "Berra",
            "provincia": "FE"
        }, {
            "comune": "Bondeno",
            "provincia": "FE"
        }, {
            "comune": "Cento",
            "provincia": "FE"
        }, {
            "comune": "Codigoro",
            "provincia": "FE"
        }, {
            "comune": "Comacchio",
            "provincia": "FE"
        }, {
            "comune": "Copparo",
            "provincia": "FE"
        }, {
            "comune": "Ferrara",
            "provincia": "FE"
        }, {
            "comune": "Formignana",
            "provincia": "FE"
        }, {
            "comune": "Jolanda di Savoia",
            "provincia": "FE"
        }, {
            "comune": "Lagosanto",
            "provincia": "FE"
        }, {
            "comune": "Masi Torello",
            "provincia": "FE"
        }, {
            "comune": "Mesola",
            "provincia": "FE"
        }, {
            "comune": "Ostellato",
            "provincia": "FE"
        }, {
            "comune": "Poggio Renatico",
            "provincia": "FE"
        }, {
            "comune": "Portomaggiore",
            "provincia": "FE"
        }, {
            "comune": "Ro",
            "provincia": "FE"
        }, {
            "comune": "Vigarano Mainarda",
            "provincia": "FE"
        }, {
            "comune": "Voghiera",
            "provincia": "FE"
        }, {
            "comune": "Tresigallo",
            "provincia": "FE"
        }, {
            "comune": "Goro",
            "provincia": "FE"
        }, {
            "comune": "Fiscaglia",
            "provincia": "FE"
        }, {
            "comune": "Terre del Reno",
            "provincia": "FE"
        }, {
            "comune": "Alfonsine",
            "provincia": "RA"
        }, {
            "comune": "Bagnacavallo",
            "provincia": "RA"
        }, {
            "comune": "Bagnara di Romagna",
            "provincia": "RA"
        }, {
            "comune": "Brisighella",
            "provincia": "RA"
        }, {
            "comune": "Casola Valsenio",
            "provincia": "RA"
        }, {
            "comune": "Castel Bolognese",
            "provincia": "RA"
        }, {
            "comune": "Cervia",
            "provincia": "RA"
        }, {
            "comune": "Conselice",
            "provincia": "RA"
        }, {
            "comune": "Cotignola",
            "provincia": "RA"
        }, {
            "comune": "Faenza",
            "provincia": "RA"
        }, {
            "comune": "Fusignano",
            "provincia": "RA"
        }, {
            "comune": "Lugo",
            "provincia": "RA"
        }, {
            "comune": "Massa Lombarda",
            "provincia": "RA"
        }, {
            "comune": "Ravenna",
            "provincia": "RA"
        }, {
            "comune": "Riolo Terme",
            "provincia": "RA"
        }, {
            "comune": "Russi",
            "provincia": "RA"
        }, {
            "comune": "Sant'Agata sul Santerno",
            "provincia": "RA"
        }, {
            "comune": "Solarolo",
            "provincia": "RA"
        }, {
            "comune": "Bagno di Romagna",
            "provincia": "FC"
        }, {
            "comune": "Bertinoro",
            "provincia": "FC"
        }, {
            "comune": "Borghi",
            "provincia": "FC"
        }, {
            "comune": "Castrocaro Terme e Terra del Sole",
            "provincia": "FC"
        }, {
            "comune": "Cesena",
            "provincia": "FC"
        }, {
            "comune": "Cesenatico",
            "provincia": "FC"
        }, {
            "comune": "Civitella di Romagna",
            "provincia": "FC"
        }, {
            "comune": "Dovadola",
            "provincia": "FC"
        }, {
            "comune": "Forlì",
            "provincia": "FC"
        }, {
            "comune": "Forlimpopoli",
            "provincia": "FC"
        }, {
            "comune": "Galeata",
            "provincia": "FC"
        }, {
            "comune": "Gambettola",
            "provincia": "FC"
        }, {
            "comune": "Gatteo",
            "provincia": "FC"
        }, {
            "comune": "Longiano",
            "provincia": "FC"
        }, {
            "comune": "Meldola",
            "provincia": "FC"
        }, {
            "comune": "Mercato Saraceno",
            "provincia": "FC"
        }, {
            "comune": "Modigliana",
            "provincia": "FC"
        }, {
            "comune": "Montiano",
            "provincia": "FC"
        }, {
            "comune": "Portico e San Benedetto",
            "provincia": "FC"
        }, {
            "comune": "Predappio",
            "provincia": "FC"
        }, {
            "comune": "Premilcuore",
            "provincia": "FC"
        }, {
            "comune": "Rocca San Casciano",
            "provincia": "FC"
        }, {
            "comune": "Roncofreddo",
            "provincia": "FC"
        }, {
            "comune": "San Mauro Pascoli",
            "provincia": "FC"
        }, {
            "comune": "Santa Sofia",
            "provincia": "FC"
        }, {
            "comune": "Sarsina",
            "provincia": "FC"
        }, {
            "comune": "Savignano sul Rubicone",
            "provincia": "FC"
        }, {
            "comune": "Sogliano al Rubicone",
            "provincia": "FC"
        }, {
            "comune": "Tredozio",
            "provincia": "FC"
        }, {
            "comune": "Verghereto",
            "provincia": "FC"
        }, {
            "comune": "Acqualagna",
            "provincia": "PU"
        }, {
            "comune": "Apecchio",
            "provincia": "PU"
        }, {
            "comune": "Auditore",
            "provincia": "PU"
        }, {
            "comune": "Belforte all'Isauro",
            "provincia": "PU"
        }, {
            "comune": "Borgo Pace",
            "provincia": "PU"
        }, {
            "comune": "Cagli",
            "provincia": "PU"
        }, {
            "comune": "Cantiano",
            "provincia": "PU"
        }, {
            "comune": "Carpegna",
            "provincia": "PU"
        }, {
            "comune": "Cartoceto",
            "provincia": "PU"
        }, {
            "comune": "Fano",
            "provincia": "PU"
        }, {
            "comune": "Fermignano",
            "provincia": "PU"
        }, {
            "comune": "Fossombrone",
            "provincia": "PU"
        }, {
            "comune": "Fratte Rosa",
            "provincia": "PU"
        }, {
            "comune": "Frontino",
            "provincia": "PU"
        }, {
            "comune": "Frontone",
            "provincia": "PU"
        }, {
            "comune": "Gabicce Mare",
            "provincia": "PU"
        }, {
            "comune": "Gradara",
            "provincia": "PU"
        }, {
            "comune": "Isola del Piano",
            "provincia": "PU"
        }, {
            "comune": "Lunano",
            "provincia": "PU"
        }, {
            "comune": "Macerata Feltria",
            "provincia": "PU"
        }, {
            "comune": "Mercatello sul Metauro",
            "provincia": "PU"
        }, {
            "comune": "Mercatino Conca",
            "provincia": "PU"
        }, {
            "comune": "Mombaroccio",
            "provincia": "PU"
        }, {
            "comune": "Mondavio",
            "provincia": "PU"
        }, {
            "comune": "Mondolfo",
            "provincia": "PU"
        }, {
            "comune": "Montecalvo in Foglia",
            "provincia": "PU"
        }, {
            "comune": "Monte Cerignone",
            "provincia": "PU"
        }, {
            "comune": "Monteciccardo",
            "provincia": "PU"
        }, {
            "comune": "Montecopiolo",
            "provincia": "PU"
        }, {
            "comune": "Montefelcino",
            "provincia": "PU"
        }, {
            "comune": "Monte Grimano Terme",
            "provincia": "PU"
        }, {
            "comune": "Montelabbate",
            "provincia": "PU"
        }, {
            "comune": "Monte Porzio",
            "provincia": "PU"
        }, {
            "comune": "Peglio",
            "provincia": "PU"
        }, {
            "comune": "Pergola",
            "provincia": "PU"
        }, {
            "comune": "Pesaro",
            "provincia": "PU"
        }, {
            "comune": "Petriano",
            "provincia": "PU"
        }, {
            "comune": "Piandimeleto",
            "provincia": "PU"
        }, {
            "comune": "Pietrarubbia",
            "provincia": "PU"
        }, {
            "comune": "Piobbico",
            "provincia": "PU"
        }, {
            "comune": "San Costanzo",
            "provincia": "PU"
        }, {
            "comune": "San Lorenzo in Campo",
            "provincia": "PU"
        }, {
            "comune": "Sant'Angelo in Vado",
            "provincia": "PU"
        }, {
            "comune": "Sant'Ippolito",
            "provincia": "PU"
        }, {
            "comune": "Sassocorvaro",
            "provincia": "PU"
        }, {
            "comune": "Sassofeltrio",
            "provincia": "PU"
        }, {
            "comune": "Serra Sant'Abbondio",
            "provincia": "PU"
        }, {
            "comune": "Tavoleto",
            "provincia": "PU"
        }, {
            "comune": "Tavullia",
            "provincia": "PU"
        }, {
            "comune": "Urbania",
            "provincia": "PU"
        }, {
            "comune": "Urbino",
            "provincia": "PU"
        }, {
            "comune": "Vallefoglia",
            "provincia": "PU"
        }, {
            "comune": "Colli al Metauro",
            "provincia": "PU"
        }, {
            "comune": "Terre Roveresche",
            "provincia": "PU"
        }, {
            "comune": "Agugliano",
            "provincia": "AN"
        }, {
            "comune": "Ancona",
            "provincia": "AN"
        }, {
            "comune": "Arcevia",
            "provincia": "AN"
        }, {
            "comune": "Barbara",
            "provincia": "AN"
        }, {
            "comune": "Belvedere Ostrense",
            "provincia": "AN"
        }, {
            "comune": "Camerano",
            "provincia": "AN"
        }, {
            "comune": "Camerata Picena",
            "provincia": "AN"
        }, {
            "comune": "Castelbellino",
            "provincia": "AN"
        }, {
            "comune": "Castelfidardo",
            "provincia": "AN"
        }, {
            "comune": "Castelleone di Suasa",
            "provincia": "AN"
        }, {
            "comune": "Castelplanio",
            "provincia": "AN"
        }, {
            "comune": "Cerreto d'Esi",
            "provincia": "AN"
        }, {
            "comune": "Chiaravalle",
            "provincia": "AN"
        }, {
            "comune": "Corinaldo",
            "provincia": "AN"
        }, {
            "comune": "Cupramontana",
            "provincia": "AN"
        }, {
            "comune": "Fabriano",
            "provincia": "AN"
        }, {
            "comune": "Falconara Marittima",
            "provincia": "AN"
        }, {
            "comune": "Filottrano",
            "provincia": "AN"
        }, {
            "comune": "Genga",
            "provincia": "AN"
        }, {
            "comune": "Jesi",
            "provincia": "AN"
        }, {
            "comune": "Loreto",
            "provincia": "AN"
        }, {
            "comune": "Maiolati Spontini",
            "provincia": "AN"
        }, {
            "comune": "Mergo",
            "provincia": "AN"
        }, {
            "comune": "Monsano",
            "provincia": "AN"
        }, {
            "comune": "Montecarotto",
            "provincia": "AN"
        }, {
            "comune": "Montemarciano",
            "provincia": "AN"
        }, {
            "comune": "Monte Roberto",
            "provincia": "AN"
        }, {
            "comune": "Monte San Vito",
            "provincia": "AN"
        }, {
            "comune": "Morro d'Alba",
            "provincia": "AN"
        }, {
            "comune": "Numana",
            "provincia": "AN"
        }, {
            "comune": "Offagna",
            "provincia": "AN"
        }, {
            "comune": "Osimo",
            "provincia": "AN"
        }, {
            "comune": "Ostra",
            "provincia": "AN"
        }, {
            "comune": "Ostra Vetere",
            "provincia": "AN"
        }, {
            "comune": "Poggio San Marcello",
            "provincia": "AN"
        }, {
            "comune": "Polverigi",
            "provincia": "AN"
        }, {
            "comune": "Rosora",
            "provincia": "AN"
        }, {
            "comune": "San Marcello",
            "provincia": "AN"
        }, {
            "comune": "San Paolo di Jesi",
            "provincia": "AN"
        }, {
            "comune": "Santa Maria Nuova",
            "provincia": "AN"
        }, {
            "comune": "Sassoferrato",
            "provincia": "AN"
        }, {
            "comune": "Senigallia",
            "provincia": "AN"
        }, {
            "comune": "Serra de' Conti",
            "provincia": "AN"
        }, {
            "comune": "Serra San Quirico",
            "provincia": "AN"
        }, {
            "comune": "Sirolo",
            "provincia": "AN"
        }, {
            "comune": "Staffolo",
            "provincia": "AN"
        }, {
            "comune": "Trecastelli",
            "provincia": "AN"
        }, {
            "comune": "Apiro",
            "provincia": "MC"
        }, {
            "comune": "Appignano",
            "provincia": "MC"
        }, {
            "comune": "Belforte del Chienti",
            "provincia": "MC"
        }, {
            "comune": "Bolognola",
            "provincia": "MC"
        }, {
            "comune": "Caldarola",
            "provincia": "MC"
        }, {
            "comune": "Camerino",
            "provincia": "MC"
        }, {
            "comune": "Camporotondo di Fiastrone",
            "provincia": "MC"
        }, {
            "comune": "Castelraimondo",
            "provincia": "MC"
        }, {
            "comune": "Castelsantangelo sul Nera",
            "provincia": "MC"
        }, {
            "comune": "Cessapalombo",
            "provincia": "MC"
        }, {
            "comune": "Cingoli",
            "provincia": "MC"
        }, {
            "comune": "Civitanova Marche",
            "provincia": "MC"
        }, {
            "comune": "Colmurano",
            "provincia": "MC"
        }, {
            "comune": "Corridonia",
            "provincia": "MC"
        }, {
            "comune": "Esanatoglia",
            "provincia": "MC"
        }, {
            "comune": "FIastra",
            "provincia": "MC"
        }, {
            "comune": "Fiuminata",
            "provincia": "MC"
        }, {
            "comune": "Gagliole",
            "provincia": "MC"
        }, {
            "comune": "Gualdo",
            "provincia": "MC"
        }, {
            "comune": "Loro Piceno",
            "provincia": "MC"
        }, {
            "comune": "Macerata",
            "provincia": "MC"
        }, {
            "comune": "Matelica",
            "provincia": "MC"
        }, {
            "comune": "Mogliano",
            "provincia": "MC"
        }, {
            "comune": "Montecassiano",
            "provincia": "MC"
        }, {
            "comune": "Monte Cavallo",
            "provincia": "MC"
        }, {
            "comune": "Montecosaro",
            "provincia": "MC"
        }, {
            "comune": "Montefano",
            "provincia": "MC"
        }, {
            "comune": "Montelupone",
            "provincia": "MC"
        }, {
            "comune": "Monte San Giusto",
            "provincia": "MC"
        }, {
            "comune": "Monte San Martino",
            "provincia": "MC"
        }, {
            "comune": "Morrovalle",
            "provincia": "MC"
        }, {
            "comune": "Muccia",
            "provincia": "MC"
        }, {
            "comune": "Penna San Giovanni",
            "provincia": "MC"
        }, {
            "comune": "Petriolo",
            "provincia": "MC"
        }, {
            "comune": "Pieve Torina",
            "provincia": "MC"
        }, {
            "comune": "Pioraco",
            "provincia": "MC"
        }, {
            "comune": "Poggio San Vicino",
            "provincia": "MC"
        }, {
            "comune": "Pollenza",
            "provincia": "MC"
        }, {
            "comune": "Porto Recanati",
            "provincia": "MC"
        }, {
            "comune": "Potenza Picena",
            "provincia": "MC"
        }, {
            "comune": "Recanati",
            "provincia": "MC"
        }, {
            "comune": "Ripe San Ginesio",
            "provincia": "MC"
        }, {
            "comune": "San Ginesio",
            "provincia": "MC"
        }, {
            "comune": "San Severino Marche",
            "provincia": "MC"
        }, {
            "comune": "Sant'Angelo in Pontano",
            "provincia": "MC"
        }, {
            "comune": "Sarnano",
            "provincia": "MC"
        }, {
            "comune": "Sefro",
            "provincia": "MC"
        }, {
            "comune": "Serrapetrona",
            "provincia": "MC"
        }, {
            "comune": "Serravalle di Chienti",
            "provincia": "MC"
        }, {
            "comune": "Tolentino",
            "provincia": "MC"
        }, {
            "comune": "Treia",
            "provincia": "MC"
        }, {
            "comune": "Urbisaglia",
            "provincia": "MC"
        }, {
            "comune": "Ussita",
            "provincia": "MC"
        }, {
            "comune": "Visso",
            "provincia": "MC"
        }, {
            "comune": "Valfornace",
            "provincia": "MC"
        }, {
            "comune": "Acquasanta Terme",
            "provincia": "AP"
        }, {
            "comune": "Acquaviva Picena",
            "provincia": "AP"
        }, {
            "comune": "Appignano del Tronto",
            "provincia": "AP"
        }, {
            "comune": "Arquata del Tronto",
            "provincia": "AP"
        }, {
            "comune": "Ascoli Piceno",
            "provincia": "AP"
        }, {
            "comune": "Carassai",
            "provincia": "AP"
        }, {
            "comune": "Castel di Lama",
            "provincia": "AP"
        }, {
            "comune": "Castignano",
            "provincia": "AP"
        }, {
            "comune": "Castorano",
            "provincia": "AP"
        }, {
            "comune": "Colli del Tronto",
            "provincia": "AP"
        }, {
            "comune": "Comunanza",
            "provincia": "AP"
        }, {
            "comune": "Cossignano",
            "provincia": "AP"
        }, {
            "comune": "Cupra Marittima",
            "provincia": "AP"
        }, {
            "comune": "Folignano",
            "provincia": "AP"
        }, {
            "comune": "Force",
            "provincia": "AP"
        }, {
            "comune": "Grottammare",
            "provincia": "AP"
        }, {
            "comune": "Maltignano",
            "provincia": "AP"
        }, {
            "comune": "Massignano",
            "provincia": "AP"
        }, {
            "comune": "Monsampolo del Tronto",
            "provincia": "AP"
        }, {
            "comune": "Montalto delle Marche",
            "provincia": "AP"
        }, {
            "comune": "Montedinove",
            "provincia": "AP"
        }, {
            "comune": "Montefiore dell'Aso",
            "provincia": "AP"
        }, {
            "comune": "Montegallo",
            "provincia": "AP"
        }, {
            "comune": "Montemonaco",
            "provincia": "AP"
        }, {
            "comune": "Monteprandone",
            "provincia": "AP"
        }, {
            "comune": "Offida",
            "provincia": "AP"
        }, {
            "comune": "Palmiano",
            "provincia": "AP"
        }, {
            "comune": "Ripatransone",
            "provincia": "AP"
        }, {
            "comune": "Roccafluvione",
            "provincia": "AP"
        }, {
            "comune": "Rotella",
            "provincia": "AP"
        }, {
            "comune": "San Benedetto del Tronto",
            "provincia": "AP"
        }, {
            "comune": "Spinetoli",
            "provincia": "AP"
        }, {
            "comune": "Venarotta",
            "provincia": "AP"
        }, {
            "comune": "Aulla",
            "provincia": "MS"
        }, {
            "comune": "Bagnone",
            "provincia": "MS"
        }, {
            "comune": "Carrara",
            "provincia": "MS"
        }, {
            "comune": "Casola in Lunigiana",
            "provincia": "MS"
        }, {
            "comune": "Comano",
            "provincia": "MS"
        }, {
            "comune": "Filattiera",
            "provincia": "MS"
        }, {
            "comune": "Fivizzano",
            "provincia": "MS"
        }, {
            "comune": "Fosdinovo",
            "provincia": "MS"
        }, {
            "comune": "Licciana Nardi",
            "provincia": "MS"
        }, {
            "comune": "Massa",
            "provincia": "MS"
        }, {
            "comune": "Montignoso",
            "provincia": "MS"
        }, {
            "comune": "Mulazzo",
            "provincia": "MS"
        }, {
            "comune": "Podenzana",
            "provincia": "MS"
        }, {
            "comune": "Pontremoli",
            "provincia": "MS"
        }, {
            "comune": "Tresana",
            "provincia": "MS"
        }, {
            "comune": "Villafranca in Lunigiana",
            "provincia": "MS"
        }, {
            "comune": "Zeri",
            "provincia": "MS"
        }, {
            "comune": "Altopascio",
            "provincia": "LU"
        }, {
            "comune": "Bagni di Lucca",
            "provincia": "LU"
        }, {
            "comune": "Barga",
            "provincia": "LU"
        }, {
            "comune": "Borgo a Mozzano",
            "provincia": "LU"
        }, {
            "comune": "Camaiore",
            "provincia": "LU"
        }, {
            "comune": "Camporgiano",
            "provincia": "LU"
        }, {
            "comune": "Capannori",
            "provincia": "LU"
        }, {
            "comune": "Careggine",
            "provincia": "LU"
        }, {
            "comune": "Castelnuovo di Garfagnana",
            "provincia": "LU"
        }, {
            "comune": "Castiglione di Garfagnana",
            "provincia": "LU"
        }, {
            "comune": "Coreglia Antelminelli",
            "provincia": "LU"
        }, {
            "comune": "Forte dei Marmi",
            "provincia": "LU"
        }, {
            "comune": "Fosciandora",
            "provincia": "LU"
        }, {
            "comune": "Gallicano",
            "provincia": "LU"
        }, {
            "comune": "Lucca",
            "provincia": "LU"
        }, {
            "comune": "Massarosa",
            "provincia": "LU"
        }, {
            "comune": "Minucciano",
            "provincia": "LU"
        }, {
            "comune": "Molazzana",
            "provincia": "LU"
        }, {
            "comune": "Montecarlo",
            "provincia": "LU"
        }, {
            "comune": "Pescaglia",
            "provincia": "LU"
        }, {
            "comune": "Piazza al Serchio",
            "provincia": "LU"
        }, {
            "comune": "Pietrasanta",
            "provincia": "LU"
        }, {
            "comune": "Pieve Fosciana",
            "provincia": "LU"
        }, {
            "comune": "Porcari",
            "provincia": "LU"
        }, {
            "comune": "San Romano in Garfagnana",
            "provincia": "LU"
        }, {
            "comune": "Seravezza",
            "provincia": "LU"
        }, {
            "comune": "Stazzema",
            "provincia": "LU"
        }, {
            "comune": "Vagli Sotto",
            "provincia": "LU"
        }, {
            "comune": "Viareggio",
            "provincia": "LU"
        }, {
            "comune": "Villa Basilica",
            "provincia": "LU"
        }, {
            "comune": "Villa Collemandina",
            "provincia": "LU"
        }, {
            "comune": "Fabbriche di Vergemoli",
            "provincia": "LU"
        }, {
            "comune": "Sillano Giuncugnano",
            "provincia": "LU"
        }, {
            "comune": "Agliana",
            "provincia": "PT"
        }, {
            "comune": "Buggiano",
            "provincia": "PT"
        }, {
            "comune": "Lamporecchio",
            "provincia": "PT"
        }, {
            "comune": "Larciano",
            "provincia": "PT"
        }, {
            "comune": "Marliana",
            "provincia": "PT"
        }, {
            "comune": "Massa e Cozzile",
            "provincia": "PT"
        }, {
            "comune": "Monsummano Terme",
            "provincia": "PT"
        }, {
            "comune": "Montale",
            "provincia": "PT"
        }, {
            "comune": "Montecatini-Terme",
            "provincia": "PT"
        }, {
            "comune": "Pescia",
            "provincia": "PT"
        }, {
            "comune": "Pieve a Nievole",
            "provincia": "PT"
        }, {
            "comune": "Pistoia",
            "provincia": "PT"
        }, {
            "comune": "Ponte Buggianese",
            "provincia": "PT"
        }, {
            "comune": "Quarrata",
            "provincia": "PT"
        }, {
            "comune": "Sambuca Pistoiese",
            "provincia": "PT"
        }, {
            "comune": "Serravalle Pistoiese",
            "provincia": "PT"
        }, {
            "comune": "Uzzano",
            "provincia": "PT"
        }, {
            "comune": "Chiesina Uzzanese",
            "provincia": "PT"
        }, {
            "comune": "Abetone Cutigliano",
            "provincia": "PT"
        }, {
            "comune": "San Marcello Piteglio",
            "provincia": "PT"
        }, {
            "comune": "Bagno a Ripoli",
            "provincia": "FI"
        }, {
            "comune": "Barberino di Mugello",
            "provincia": "FI"
        }, {
            "comune": "Barberino Val d'Elsa",
            "provincia": "FI"
        }, {
            "comune": "Borgo San Lorenzo",
            "provincia": "FI"
        }, {
            "comune": "Calenzano",
            "provincia": "FI"
        }, {
            "comune": "Campi Bisenzio",
            "provincia": "FI"
        }, {
            "comune": "Capraia e Limite",
            "provincia": "FI"
        }, {
            "comune": "Castelfiorentino",
            "provincia": "FI"
        }, {
            "comune": "Cerreto Guidi",
            "provincia": "FI"
        }, {
            "comune": "Certaldo",
            "provincia": "FI"
        }, {
            "comune": "Dicomano",
            "provincia": "FI"
        }, {
            "comune": "Empoli",
            "provincia": "FI"
        }, {
            "comune": "Fiesole",
            "provincia": "FI"
        }, {
            "comune": "Firenze",
            "provincia": "FI"
        }, {
            "comune": "Firenzuola",
            "provincia": "FI"
        }, {
            "comune": "Fucecchio",
            "provincia": "FI"
        }, {
            "comune": "Gambassi Terme",
            "provincia": "FI"
        }, {
            "comune": "Greve in Chianti",
            "provincia": "FI"
        }, {
            "comune": "Impruneta",
            "provincia": "FI"
        }, {
            "comune": "Lastra a Signa",
            "provincia": "FI"
        }, {
            "comune": "Londa",
            "provincia": "FI"
        }, {
            "comune": "Marradi",
            "provincia": "FI"
        }, {
            "comune": "Montaione",
            "provincia": "FI"
        }, {
            "comune": "Montelupo Fiorentino",
            "provincia": "FI"
        }, {
            "comune": "Montespertoli",
            "provincia": "FI"
        }, {
            "comune": "Palazzuolo sul Senio",
            "provincia": "FI"
        }, {
            "comune": "Pelago",
            "provincia": "FI"
        }, {
            "comune": "Pontassieve",
            "provincia": "FI"
        }, {
            "comune": "Reggello",
            "provincia": "FI"
        }, {
            "comune": "Rignano sull'Arno",
            "provincia": "FI"
        }, {
            "comune": "Rufina",
            "provincia": "FI"
        }, {
            "comune": "San Casciano in Val di Pesa",
            "provincia": "FI"
        }, {
            "comune": "San Godenzo",
            "provincia": "FI"
        }, {
            "comune": "Scandicci",
            "provincia": "FI"
        }, {
            "comune": "Sesto Fiorentino",
            "provincia": "FI"
        }, {
            "comune": "Signa",
            "provincia": "FI"
        }, {
            "comune": "Tavarnelle Val di Pesa",
            "provincia": "FI"
        }, {
            "comune": "Vaglia",
            "provincia": "FI"
        }, {
            "comune": "Vicchio",
            "provincia": "FI"
        }, {
            "comune": "Vinci",
            "provincia": "FI"
        }, {
            "comune": "Figline e Incisa Valdarno",
            "provincia": "FI"
        }, {
            "comune": "Scarperia e San Piero",
            "provincia": "FI"
        }, {
            "comune": "Bibbona",
            "provincia": "LI"
        }, {
            "comune": "Campiglia Marittima",
            "provincia": "LI"
        }, {
            "comune": "Campo nell'Elba",
            "provincia": "LI"
        }, {
            "comune": "Capoliveri",
            "provincia": "LI"
        }, {
            "comune": "Capraia Isola",
            "provincia": "LI"
        }, {
            "comune": "Castagneto Carducci",
            "provincia": "LI"
        }, {
            "comune": "Cecina",
            "provincia": "LI"
        }, {
            "comune": "Collesalvetti",
            "provincia": "LI"
        }, {
            "comune": "Livorno",
            "provincia": "LI"
        }, {
            "comune": "Marciana",
            "provincia": "LI"
        }, {
            "comune": "Marciana Marina",
            "provincia": "LI"
        }, {
            "comune": "Piombino",
            "provincia": "LI"
        }, {
            "comune": "Porto Azzurro",
            "provincia": "LI"
        }, {
            "comune": "Portoferraio",
            "provincia": "LI"
        }, {
            "comune": "Rio Marina",
            "provincia": "LI"
        }, {
            "comune": "Rio nell'Elba",
            "provincia": "LI"
        }, {
            "comune": "Rosignano Marittimo",
            "provincia": "LI"
        }, {
            "comune": "San Vincenzo",
            "provincia": "LI"
        }, {
            "comune": "Sassetta",
            "provincia": "LI"
        }, {
            "comune": "Suvereto",
            "provincia": "LI"
        }, {
            "comune": "Bientina",
            "provincia": "PI"
        }, {
            "comune": "Buti",
            "provincia": "PI"
        }, {
            "comune": "Calci",
            "provincia": "PI"
        }, {
            "comune": "Calcinaia",
            "provincia": "PI"
        }, {
            "comune": "Capannoli",
            "provincia": "PI"
        }, {
            "comune": "Casale Marittimo",
            "provincia": "PI"
        }, {
            "comune": "Cascina",
            "provincia": "PI"
        }, {
            "comune": "Castelfranco di Sotto",
            "provincia": "PI"
        }, {
            "comune": "Castellina Marittima",
            "provincia": "PI"
        }, {
            "comune": "Castelnuovo di Val di Cecina",
            "provincia": "PI"
        }, {
            "comune": "Chianni",
            "provincia": "PI"
        }, {
            "comune": "Fauglia",
            "provincia": "PI"
        }, {
            "comune": "Guardistallo",
            "provincia": "PI"
        }, {
            "comune": "Lajatico",
            "provincia": "PI"
        }, {
            "comune": "Montecatini Val di Cecina",
            "provincia": "PI"
        }, {
            "comune": "Montescudaio",
            "provincia": "PI"
        }, {
            "comune": "Monteverdi Marittimo",
            "provincia": "PI"
        }, {
            "comune": "Montopoli in Val d'Arno",
            "provincia": "PI"
        }, {
            "comune": "Orciano Pisano",
            "provincia": "PI"
        }, {
            "comune": "Palaia",
            "provincia": "PI"
        }, {
            "comune": "Peccioli",
            "provincia": "PI"
        }, {
            "comune": "Pisa",
            "provincia": "PI"
        }, {
            "comune": "Pomarance",
            "provincia": "PI"
        }, {
            "comune": "Ponsacco",
            "provincia": "PI"
        }, {
            "comune": "Pontedera",
            "provincia": "PI"
        }, {
            "comune": "Riparbella",
            "provincia": "PI"
        }, {
            "comune": "San Giuliano Terme",
            "provincia": "PI"
        }, {
            "comune": "San Miniato",
            "provincia": "PI"
        }, {
            "comune": "Santa Croce sull'Arno",
            "provincia": "PI"
        }, {
            "comune": "Santa Luce",
            "provincia": "PI"
        }, {
            "comune": "Santa Maria a Monte",
            "provincia": "PI"
        }, {
            "comune": "Terricciola",
            "provincia": "PI"
        }, {
            "comune": "Vecchiano",
            "provincia": "PI"
        }, {
            "comune": "Vicopisano",
            "provincia": "PI"
        }, {
            "comune": "Volterra",
            "provincia": "PI"
        }, {
            "comune": "Casciana Terme Lari",
            "provincia": "PI"
        }, {
            "comune": "Crespina Lorenzana",
            "provincia": "PI"
        }, {
            "comune": "Anghiari",
            "provincia": "AR"
        }, {
            "comune": "Arezzo",
            "provincia": "AR"
        }, {
            "comune": "Badia Tedalda",
            "provincia": "AR"
        }, {
            "comune": "Bibbiena",
            "provincia": "AR"
        }, {
            "comune": "Bucine",
            "provincia": "AR"
        }, {
            "comune": "Capolona",
            "provincia": "AR"
        }, {
            "comune": "Caprese Michelangelo",
            "provincia": "AR"
        }, {
            "comune": "Castel Focognano",
            "provincia": "AR"
        }, {
            "comune": "Castel San Niccolò",
            "provincia": "AR"
        }, {
            "comune": "Castiglion Fibocchi",
            "provincia": "AR"
        }, {
            "comune": "Castiglion Fiorentino",
            "provincia": "AR"
        }, {
            "comune": "Cavriglia",
            "provincia": "AR"
        }, {
            "comune": "Chitignano",
            "provincia": "AR"
        }, {
            "comune": "Chiusi della Verna",
            "provincia": "AR"
        }, {
            "comune": "Civitella in Val di Chiana",
            "provincia": "AR"
        }, {
            "comune": "Cortona",
            "provincia": "AR"
        }, {
            "comune": "Foiano della Chiana",
            "provincia": "AR"
        }, {
            "comune": "Laterina",
            "provincia": "AR"
        }, {
            "comune": "Loro Ciuffenna",
            "provincia": "AR"
        }, {
            "comune": "Lucignano",
            "provincia": "AR"
        }, {
            "comune": "Marciano della Chiana",
            "provincia": "AR"
        }, {
            "comune": "Montemignaio",
            "provincia": "AR"
        }, {
            "comune": "Monterchi",
            "provincia": "AR"
        }, {
            "comune": "Monte San Savino",
            "provincia": "AR"
        }, {
            "comune": "Montevarchi",
            "provincia": "AR"
        }, {
            "comune": "Ortignano Raggiolo",
            "provincia": "AR"
        }, {
            "comune": "Pergine Valdarno",
            "provincia": "AR"
        }, {
            "comune": "Pieve Santo Stefano",
            "provincia": "AR"
        }, {
            "comune": "Poppi",
            "provincia": "AR"
        }, {
            "comune": "San Giovanni Valdarno",
            "provincia": "AR"
        }, {
            "comune": "Sansepolcro",
            "provincia": "AR"
        }, {
            "comune": "Sestino",
            "provincia": "AR"
        }, {
            "comune": "Subbiano",
            "provincia": "AR"
        }, {
            "comune": "Talla",
            "provincia": "AR"
        }, {
            "comune": "Terranuova Bracciolini",
            "provincia": "AR"
        }, {
            "comune": "Castelfranco Piandiscò",
            "provincia": "AR"
        }, {
            "comune": "Pratovecchio Stia",
            "provincia": "AR"
        }, {
            "comune": "Abbadia San Salvatore",
            "provincia": "SI"
        }, {
            "comune": "Asciano",
            "provincia": "SI"
        }, {
            "comune": "Buonconvento",
            "provincia": "SI"
        }, {
            "comune": "Casole d'Elsa",
            "provincia": "SI"
        }, {
            "comune": "Castellina in Chianti",
            "provincia": "SI"
        }, {
            "comune": "Castelnuovo Berardenga",
            "provincia": "SI"
        }, {
            "comune": "Castiglione d'Orcia",
            "provincia": "SI"
        }, {
            "comune": "Cetona",
            "provincia": "SI"
        }, {
            "comune": "Chianciano Terme",
            "provincia": "SI"
        }, {
            "comune": "Chiusdino",
            "provincia": "SI"
        }, {
            "comune": "Chiusi",
            "provincia": "SI"
        }, {
            "comune": "Colle di Val d'Elsa",
            "provincia": "SI"
        }, {
            "comune": "Gaiole in Chianti",
            "provincia": "SI"
        }, {
            "comune": "Montepulciano",
            "provincia": "SI"
        }, {
            "comune": "Monteriggioni",
            "provincia": "SI"
        }, {
            "comune": "Monteroni d'Arbia",
            "provincia": "SI"
        }, {
            "comune": "Monticiano",
            "provincia": "SI"
        }, {
            "comune": "Murlo",
            "provincia": "SI"
        }, {
            "comune": "Piancastagnaio",
            "provincia": "SI"
        }, {
            "comune": "Pienza",
            "provincia": "SI"
        }, {
            "comune": "Poggibonsi",
            "provincia": "SI"
        }, {
            "comune": "Radda in Chianti",
            "provincia": "SI"
        }, {
            "comune": "Radicofani",
            "provincia": "SI"
        }, {
            "comune": "Radicondoli",
            "provincia": "SI"
        }, {
            "comune": "Rapolano Terme",
            "provincia": "SI"
        }, {
            "comune": "San Casciano dei Bagni",
            "provincia": "SI"
        }, {
            "comune": "San Gimignano",
            "provincia": "SI"
        }, {
            "comune": "San Quirico d'Orcia",
            "provincia": "SI"
        }, {
            "comune": "Sarteano",
            "provincia": "SI"
        }, {
            "comune": "Siena",
            "provincia": "SI"
        }, {
            "comune": "Sinalunga",
            "provincia": "SI"
        }, {
            "comune": "Sovicille",
            "provincia": "SI"
        }, {
            "comune": "Torrita di Siena",
            "provincia": "SI"
        }, {
            "comune": "Trequanda",
            "provincia": "SI"
        }, {
            "comune": "Montalcino",
            "provincia": "SI"
        }, {
            "comune": "Arcidosso",
            "provincia": "GR"
        }, {
            "comune": "Campagnatico",
            "provincia": "GR"
        }, {
            "comune": "Capalbio",
            "provincia": "GR"
        }, {
            "comune": "Castel del Piano",
            "provincia": "GR"
        }, {
            "comune": "Castell'Azzara",
            "provincia": "GR"
        }, {
            "comune": "Castiglione della Pescaia",
            "provincia": "GR"
        }, {
            "comune": "Cinigiano",
            "provincia": "GR"
        }, {
            "comune": "Civitella Paganico",
            "provincia": "GR"
        }, {
            "comune": "Follonica",
            "provincia": "GR"
        }, {
            "comune": "Gavorrano",
            "provincia": "GR"
        }, {
            "comune": "Grosseto",
            "provincia": "GR"
        }, {
            "comune": "Isola del Giglio",
            "provincia": "GR"
        }, {
            "comune": "Magliano in Toscana",
            "provincia": "GR"
        }, {
            "comune": "Manciano",
            "provincia": "GR"
        }, {
            "comune": "Massa Marittima",
            "provincia": "GR"
        }, {
            "comune": "Monte Argentario",
            "provincia": "GR"
        }, {
            "comune": "Montieri",
            "provincia": "GR"
        }, {
            "comune": "Orbetello",
            "provincia": "GR"
        }, {
            "comune": "Pitigliano",
            "provincia": "GR"
        }, {
            "comune": "Roccalbegna",
            "provincia": "GR"
        }, {
            "comune": "Roccastrada",
            "provincia": "GR"
        }, {
            "comune": "Santa Fiora",
            "provincia": "GR"
        }, {
            "comune": "Scansano",
            "provincia": "GR"
        }, {
            "comune": "Scarlino",
            "provincia": "GR"
        }, {
            "comune": "Seggiano",
            "provincia": "GR"
        }, {
            "comune": "Sorano",
            "provincia": "GR"
        }, {
            "comune": "Monterotondo Marittimo",
            "provincia": "GR"
        }, {
            "comune": "Semproniano",
            "provincia": "GR"
        }, {
            "comune": "Assisi",
            "provincia": "PG"
        }, {
            "comune": "Bastia Umbra",
            "provincia": "PG"
        }, {
            "comune": "Bettona",
            "provincia": "PG"
        }, {
            "comune": "Bevagna",
            "provincia": "PG"
        }, {
            "comune": "Campello sul Clitunno",
            "provincia": "PG"
        }, {
            "comune": "Cannara",
            "provincia": "PG"
        }, {
            "comune": "Cascia",
            "provincia": "PG"
        }, {
            "comune": "Castel Ritaldi",
            "provincia": "PG"
        }, {
            "comune": "Castiglione del Lago",
            "provincia": "PG"
        }, {
            "comune": "Cerreto di Spoleto",
            "provincia": "PG"
        }, {
            "comune": "Citerna",
            "provincia": "PG"
        }, {
            "comune": "Città della Pieve",
            "provincia": "PG"
        }, {
            "comune": "Città di Castello",
            "provincia": "PG"
        }, {
            "comune": "Collazzone",
            "provincia": "PG"
        }, {
            "comune": "Corciano",
            "provincia": "PG"
        }, {
            "comune": "Costacciaro",
            "provincia": "PG"
        }, {
            "comune": "Deruta",
            "provincia": "PG"
        }, {
            "comune": "Foligno",
            "provincia": "PG"
        }, {
            "comune": "Fossato di Vico",
            "provincia": "PG"
        }, {
            "comune": "Fratta Todina",
            "provincia": "PG"
        }, {
            "comune": "Giano dell'Umbria",
            "provincia": "PG"
        }, {
            "comune": "Gualdo Cattaneo",
            "provincia": "PG"
        }, {
            "comune": "Gualdo Tadino",
            "provincia": "PG"
        }, {
            "comune": "Gubbio",
            "provincia": "PG"
        }, {
            "comune": "Lisciano Niccone",
            "provincia": "PG"
        }, {
            "comune": "Magione",
            "provincia": "PG"
        }, {
            "comune": "Marsciano",
            "provincia": "PG"
        }, {
            "comune": "Massa Martana",
            "provincia": "PG"
        }, {
            "comune": "Monte Castello di Vibio",
            "provincia": "PG"
        }, {
            "comune": "Montefalco",
            "provincia": "PG"
        }, {
            "comune": "Monteleone di Spoleto",
            "provincia": "PG"
        }, {
            "comune": "Monte Santa Maria Tiberina",
            "provincia": "PG"
        }, {
            "comune": "Montone",
            "provincia": "PG"
        }, {
            "comune": "Nocera Umbra",
            "provincia": "PG"
        }, {
            "comune": "Norcia",
            "provincia": "PG"
        }, {
            "comune": "Paciano",
            "provincia": "PG"
        }, {
            "comune": "Panicale",
            "provincia": "PG"
        }, {
            "comune": "Passignano sul Trasimeno",
            "provincia": "PG"
        }, {
            "comune": "Perugia",
            "provincia": "PG"
        }, {
            "comune": "Piegaro",
            "provincia": "PG"
        }, {
            "comune": "Pietralunga",
            "provincia": "PG"
        }, {
            "comune": "Poggiodomo",
            "provincia": "PG"
        }, {
            "comune": "Preci",
            "provincia": "PG"
        }, {
            "comune": "San Giustino",
            "provincia": "PG"
        }, {
            "comune": "Sant'Anatolia di Narco",
            "provincia": "PG"
        }, {
            "comune": "Scheggia e Pascelupo",
            "provincia": "PG"
        }, {
            "comune": "Scheggino",
            "provincia": "PG"
        }, {
            "comune": "Sellano",
            "provincia": "PG"
        }, {
            "comune": "Sigillo",
            "provincia": "PG"
        }, {
            "comune": "Spello",
            "provincia": "PG"
        }, {
            "comune": "Spoleto",
            "provincia": "PG"
        }, {
            "comune": "Todi",
            "provincia": "PG"
        }, {
            "comune": "Torgiano",
            "provincia": "PG"
        }, {
            "comune": "Trevi",
            "provincia": "PG"
        }, {
            "comune": "Tuoro sul Trasimeno",
            "provincia": "PG"
        }, {
            "comune": "Umbertide",
            "provincia": "PG"
        }, {
            "comune": "Valfabbrica",
            "provincia": "PG"
        }, {
            "comune": "Vallo di Nera",
            "provincia": "PG"
        }, {
            "comune": "Valtopina",
            "provincia": "PG"
        }, {
            "comune": "Acquasparta",
            "provincia": "TR"
        }, {
            "comune": "Allerona",
            "provincia": "TR"
        }, {
            "comune": "Alviano",
            "provincia": "TR"
        }, {
            "comune": "Amelia",
            "provincia": "TR"
        }, {
            "comune": "Arrone",
            "provincia": "TR"
        }, {
            "comune": "Attigliano",
            "provincia": "TR"
        }, {
            "comune": "Baschi",
            "provincia": "TR"
        }, {
            "comune": "Calvi dell'Umbria",
            "provincia": "TR"
        }, {
            "comune": "Castel Giorgio",
            "provincia": "TR"
        }, {
            "comune": "Castel Viscardo",
            "provincia": "TR"
        }, {
            "comune": "Fabro",
            "provincia": "TR"
        }, {
            "comune": "Ferentillo",
            "provincia": "TR"
        }, {
            "comune": "Ficulle",
            "provincia": "TR"
        }, {
            "comune": "Giove",
            "provincia": "TR"
        }, {
            "comune": "Guardea",
            "provincia": "TR"
        }, {
            "comune": "Lugnano in Teverina",
            "provincia": "TR"
        }, {
            "comune": "Montecastrilli",
            "provincia": "TR"
        }, {
            "comune": "Montecchio",
            "provincia": "TR"
        }, {
            "comune": "Montefranco",
            "provincia": "TR"
        }, {
            "comune": "Montegabbione",
            "provincia": "TR"
        }, {
            "comune": "Monteleone d'Orvieto",
            "provincia": "TR"
        }, {
            "comune": "Narni",
            "provincia": "TR"
        }, {
            "comune": "Orvieto",
            "provincia": "TR"
        }, {
            "comune": "Otricoli",
            "provincia": "TR"
        }, {
            "comune": "Parrano",
            "provincia": "TR"
        }, {
            "comune": "Penna in Teverina",
            "provincia": "TR"
        }, {
            "comune": "Polino",
            "provincia": "TR"
        }, {
            "comune": "Porano",
            "provincia": "TR"
        }, {
            "comune": "San Gemini",
            "provincia": "TR"
        }, {
            "comune": "San Venanzo",
            "provincia": "TR"
        }, {
            "comune": "Stroncone",
            "provincia": "TR"
        }, {
            "comune": "Terni",
            "provincia": "TR"
        }, {
            "comune": "Avigliano Umbro",
            "provincia": "TR"
        }, {
            "comune": "Acquapendente",
            "provincia": "VT"
        }, {
            "comune": "Arlena di Castro",
            "provincia": "VT"
        }, {
            "comune": "Bagnoregio",
            "provincia": "VT"
        }, {
            "comune": "Barbarano Romano",
            "provincia": "VT"
        }, {
            "comune": "Bassano Romano",
            "provincia": "VT"
        }, {
            "comune": "Bassano in Teverina",
            "provincia": "VT"
        }, {
            "comune": "Blera",
            "provincia": "VT"
        }, {
            "comune": "Bolsena",
            "provincia": "VT"
        }, {
            "comune": "Bomarzo",
            "provincia": "VT"
        }, {
            "comune": "Calcata",
            "provincia": "VT"
        }, {
            "comune": "Canepina",
            "provincia": "VT"
        }, {
            "comune": "Canino",
            "provincia": "VT"
        }, {
            "comune": "Capodimonte",
            "provincia": "VT"
        }, {
            "comune": "Capranica",
            "provincia": "VT"
        }, {
            "comune": "Caprarola",
            "provincia": "VT"
        }, {
            "comune": "Carbognano",
            "provincia": "VT"
        }, {
            "comune": "Castel Sant'Elia",
            "provincia": "VT"
        }, {
            "comune": "Castiglione in Teverina",
            "provincia": "VT"
        }, {
            "comune": "Celleno",
            "provincia": "VT"
        }, {
            "comune": "Cellere",
            "provincia": "VT"
        }, {
            "comune": "Civita Castellana",
            "provincia": "VT"
        }, {
            "comune": "Civitella d'Agliano",
            "provincia": "VT"
        }, {
            "comune": "Corchiano",
            "provincia": "VT"
        }, {
            "comune": "Fabrica di Roma",
            "provincia": "VT"
        }, {
            "comune": "Faleria",
            "provincia": "VT"
        }, {
            "comune": "Farnese",
            "provincia": "VT"
        }, {
            "comune": "Gallese",
            "provincia": "VT"
        }, {
            "comune": "Gradoli",
            "provincia": "VT"
        }, {
            "comune": "Graffignano",
            "provincia": "VT"
        }, {
            "comune": "Grotte di Castro",
            "provincia": "VT"
        }, {
            "comune": "Ischia di Castro",
            "provincia": "VT"
        }, {
            "comune": "Latera",
            "provincia": "VT"
        }, {
            "comune": "Lubriano",
            "provincia": "VT"
        }, {
            "comune": "Marta",
            "provincia": "VT"
        }, {
            "comune": "Montalto di Castro",
            "provincia": "VT"
        }, {
            "comune": "Montefiascone",
            "provincia": "VT"
        }, {
            "comune": "Monte Romano",
            "provincia": "VT"
        }, {
            "comune": "Monterosi",
            "provincia": "VT"
        }, {
            "comune": "Nepi",
            "provincia": "VT"
        }, {
            "comune": "Onano",
            "provincia": "VT"
        }, {
            "comune": "Oriolo Romano",
            "provincia": "VT"
        }, {
            "comune": "Orte",
            "provincia": "VT"
        }, {
            "comune": "Piansano",
            "provincia": "VT"
        }, {
            "comune": "Proceno",
            "provincia": "VT"
        }, {
            "comune": "Ronciglione",
            "provincia": "VT"
        }, {
            "comune": "Villa San Giovanni in Tuscia",
            "provincia": "VT"
        }, {
            "comune": "San Lorenzo Nuovo",
            "provincia": "VT"
        }, {
            "comune": "Soriano nel Cimino",
            "provincia": "VT"
        }, {
            "comune": "Sutri",
            "provincia": "VT"
        }, {
            "comune": "Tarquinia",
            "provincia": "VT"
        }, {
            "comune": "Tessennano",
            "provincia": "VT"
        }, {
            "comune": "Tuscania",
            "provincia": "VT"
        }, {
            "comune": "Valentano",
            "provincia": "VT"
        }, {
            "comune": "Vallerano",
            "provincia": "VT"
        }, {
            "comune": "Vasanello",
            "provincia": "VT"
        }, {
            "comune": "Vejano",
            "provincia": "VT"
        }, {
            "comune": "Vetralla",
            "provincia": "VT"
        }, {
            "comune": "Vignanello",
            "provincia": "VT"
        }, {
            "comune": "Viterbo",
            "provincia": "VT"
        }, {
            "comune": "Vitorchiano",
            "provincia": "VT"
        }, {
            "comune": "Accumoli",
            "provincia": "RI"
        }, {
            "comune": "Amatrice",
            "provincia": "RI"
        }, {
            "comune": "Antrodoco",
            "provincia": "RI"
        }, {
            "comune": "Ascrea",
            "provincia": "RI"
        }, {
            "comune": "Belmonte in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Borbona",
            "provincia": "RI"
        }, {
            "comune": "Borgorose",
            "provincia": "RI"
        }, {
            "comune": "Borgo Velino",
            "provincia": "RI"
        }, {
            "comune": "Cantalice",
            "provincia": "RI"
        }, {
            "comune": "Cantalupo in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Casaprota",
            "provincia": "RI"
        }, {
            "comune": "Casperia",
            "provincia": "RI"
        }, {
            "comune": "Castel di Tora",
            "provincia": "RI"
        }, {
            "comune": "Castelnuovo di Farfa",
            "provincia": "RI"
        }, {
            "comune": "Castel Sant'Angelo",
            "provincia": "RI"
        }, {
            "comune": "Cittaducale",
            "provincia": "RI"
        }, {
            "comune": "Cittareale",
            "provincia": "RI"
        }, {
            "comune": "Collalto Sabino",
            "provincia": "RI"
        }, {
            "comune": "Colle di Tora",
            "provincia": "RI"
        }, {
            "comune": "Collegiove",
            "provincia": "RI"
        }, {
            "comune": "Collevecchio",
            "provincia": "RI"
        }, {
            "comune": "Colli sul Velino",
            "provincia": "RI"
        }, {
            "comune": "Concerviano",
            "provincia": "RI"
        }, {
            "comune": "Configni",
            "provincia": "RI"
        }, {
            "comune": "Contigliano",
            "provincia": "RI"
        }, {
            "comune": "Cottanello",
            "provincia": "RI"
        }, {
            "comune": "Fara in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Fiamignano",
            "provincia": "RI"
        }, {
            "comune": "Forano",
            "provincia": "RI"
        }, {
            "comune": "Frasso Sabino",
            "provincia": "RI"
        }, {
            "comune": "Greccio",
            "provincia": "RI"
        }, {
            "comune": "Labro",
            "provincia": "RI"
        }, {
            "comune": "Leonessa",
            "provincia": "RI"
        }, {
            "comune": "Longone Sabino",
            "provincia": "RI"
        }, {
            "comune": "Magliano Sabina",
            "provincia": "RI"
        }, {
            "comune": "Marcetelli",
            "provincia": "RI"
        }, {
            "comune": "Micigliano",
            "provincia": "RI"
        }, {
            "comune": "Mompeo",
            "provincia": "RI"
        }, {
            "comune": "Montasola",
            "provincia": "RI"
        }, {
            "comune": "Montebuono",
            "provincia": "RI"
        }, {
            "comune": "Monteleone Sabino",
            "provincia": "RI"
        }, {
            "comune": "Montenero Sabino",
            "provincia": "RI"
        }, {
            "comune": "Monte San Giovanni in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Montopoli di Sabina",
            "provincia": "RI"
        }, {
            "comune": "Morro Reatino",
            "provincia": "RI"
        }, {
            "comune": "Nespolo",
            "provincia": "RI"
        }, {
            "comune": "Orvinio",
            "provincia": "RI"
        }, {
            "comune": "Paganico Sabino",
            "provincia": "RI"
        }, {
            "comune": "Pescorocchiano",
            "provincia": "RI"
        }, {
            "comune": "Petrella Salto",
            "provincia": "RI"
        }, {
            "comune": "Poggio Bustone",
            "provincia": "RI"
        }, {
            "comune": "Poggio Catino",
            "provincia": "RI"
        }, {
            "comune": "Poggio Mirteto",
            "provincia": "RI"
        }, {
            "comune": "Poggio Moiano",
            "provincia": "RI"
        }, {
            "comune": "Poggio Nativo",
            "provincia": "RI"
        }, {
            "comune": "Poggio San Lorenzo",
            "provincia": "RI"
        }, {
            "comune": "Posta",
            "provincia": "RI"
        }, {
            "comune": "Pozzaglia Sabina",
            "provincia": "RI"
        }, {
            "comune": "Rieti",
            "provincia": "RI"
        }, {
            "comune": "Rivodutri",
            "provincia": "RI"
        }, {
            "comune": "Roccantica",
            "provincia": "RI"
        }, {
            "comune": "Rocca Sinibalda",
            "provincia": "RI"
        }, {
            "comune": "Salisano",
            "provincia": "RI"
        }, {
            "comune": "Scandriglia",
            "provincia": "RI"
        }, {
            "comune": "Selci",
            "provincia": "RI"
        }, {
            "comune": "Stimigliano",
            "provincia": "RI"
        }, {
            "comune": "Tarano",
            "provincia": "RI"
        }, {
            "comune": "Toffia",
            "provincia": "RI"
        }, {
            "comune": "Torricella in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Torri in Sabina",
            "provincia": "RI"
        }, {
            "comune": "Turania",
            "provincia": "RI"
        }, {
            "comune": "Vacone",
            "provincia": "RI"
        }, {
            "comune": "Varco Sabino",
            "provincia": "RI"
        }, {
            "comune": "Affile",
            "provincia": "RM"
        }, {
            "comune": "Agosta",
            "provincia": "RM"
        }, {
            "comune": "Albano Laziale",
            "provincia": "RM"
        }, {
            "comune": "Allumiere",
            "provincia": "RM"
        }, {
            "comune": "Anguillara Sabazia",
            "provincia": "RM"
        }, {
            "comune": "Anticoli Corrado",
            "provincia": "RM"
        }, {
            "comune": "Anzio",
            "provincia": "RM"
        }, {
            "comune": "Arcinazzo Romano",
            "provincia": "RM"
        }, {
            "comune": "Ariccia",
            "provincia": "RM"
        }, {
            "comune": "Arsoli",
            "provincia": "RM"
        }, {
            "comune": "Artena",
            "provincia": "RM"
        }, {
            "comune": "Bellegra",
            "provincia": "RM"
        }, {
            "comune": "Bracciano",
            "provincia": "RM"
        }, {
            "comune": "Camerata Nuova",
            "provincia": "RM"
        }, {
            "comune": "Campagnano di Roma",
            "provincia": "RM"
        }, {
            "comune": "Canale Monterano",
            "provincia": "RM"
        }, {
            "comune": "Canterano",
            "provincia": "RM"
        }, {
            "comune": "Capena",
            "provincia": "RM"
        }, {
            "comune": "Capranica Prenestina",
            "provincia": "RM"
        }, {
            "comune": "Carpineto Romano",
            "provincia": "RM"
        }, {
            "comune": "Casape",
            "provincia": "RM"
        }, {
            "comune": "Castel Gandolfo",
            "provincia": "RM"
        }, {
            "comune": "Castel Madama",
            "provincia": "RM"
        }, {
            "comune": "Castelnuovo di Porto",
            "provincia": "RM"
        }, {
            "comune": "Castel San Pietro Romano",
            "provincia": "RM"
        }, {
            "comune": "Cave",
            "provincia": "RM"
        }, {
            "comune": "Cerreto Laziale",
            "provincia": "RM"
        }, {
            "comune": "Cervara di Roma",
            "provincia": "RM"
        }, {
            "comune": "Cerveteri",
            "provincia": "RM"
        }, {
            "comune": "Ciciliano",
            "provincia": "RM"
        }, {
            "comune": "Cineto Romano",
            "provincia": "RM"
        }, {
            "comune": "Civitavecchia",
            "provincia": "RM"
        }, {
            "comune": "Civitella San Paolo",
            "provincia": "RM"
        }, {
            "comune": "Colleferro",
            "provincia": "RM"
        }, {
            "comune": "Colonna",
            "provincia": "RM"
        }, {
            "comune": "Fiano Romano",
            "provincia": "RM"
        }, {
            "comune": "Filacciano",
            "provincia": "RM"
        }, {
            "comune": "Formello",
            "provincia": "RM"
        }, {
            "comune": "Frascati",
            "provincia": "RM"
        }, {
            "comune": "Gallicano nel Lazio",
            "provincia": "RM"
        }, {
            "comune": "Gavignano",
            "provincia": "RM"
        }, {
            "comune": "Genazzano",
            "provincia": "RM"
        }, {
            "comune": "Genzano di Roma",
            "provincia": "RM"
        }, {
            "comune": "Gerano",
            "provincia": "RM"
        }, {
            "comune": "Gorga",
            "provincia": "RM"
        }, {
            "comune": "Grottaferrata",
            "provincia": "RM"
        }, {
            "comune": "Guidonia Montecelio",
            "provincia": "RM"
        }, {
            "comune": "Jenne",
            "provincia": "RM"
        }, {
            "comune": "Labico",
            "provincia": "RM"
        }, {
            "comune": "Lanuvio",
            "provincia": "RM"
        }, {
            "comune": "Licenza",
            "provincia": "RM"
        }, {
            "comune": "Magliano Romano",
            "provincia": "RM"
        }, {
            "comune": "Mandela",
            "provincia": "RM"
        }, {
            "comune": "Manziana",
            "provincia": "RM"
        }, {
            "comune": "Marano Equo",
            "provincia": "RM"
        }, {
            "comune": "Marcellina",
            "provincia": "RM"
        }, {
            "comune": "Marino",
            "provincia": "RM"
        }, {
            "comune": "Mazzano Romano",
            "provincia": "RM"
        }, {
            "comune": "Mentana",
            "provincia": "RM"
        }, {
            "comune": "Monte Compatri",
            "provincia": "RM"
        }, {
            "comune": "Monteflavio",
            "provincia": "RM"
        }, {
            "comune": "Montelanico",
            "provincia": "RM"
        }, {
            "comune": "Montelibretti",
            "provincia": "RM"
        }, {
            "comune": "Monte Porzio Catone",
            "provincia": "RM"
        }, {
            "comune": "Monterotondo",
            "provincia": "RM"
        }, {
            "comune": "Montorio Romano",
            "provincia": "RM"
        }, {
            "comune": "Moricone",
            "provincia": "RM"
        }, {
            "comune": "Morlupo",
            "provincia": "RM"
        }, {
            "comune": "Nazzano",
            "provincia": "RM"
        }, {
            "comune": "Nemi",
            "provincia": "RM"
        }, {
            "comune": "Nerola",
            "provincia": "RM"
        }, {
            "comune": "Nettuno",
            "provincia": "RM"
        }, {
            "comune": "Olevano Romano",
            "provincia": "RM"
        }, {
            "comune": "Palestrina",
            "provincia": "RM"
        }, {
            "comune": "Palombara Sabina",
            "provincia": "RM"
        }, {
            "comune": "Percile",
            "provincia": "RM"
        }, {
            "comune": "Pisoniano",
            "provincia": "RM"
        }, {
            "comune": "Poli",
            "provincia": "RM"
        }, {
            "comune": "Pomezia",
            "provincia": "RM"
        }, {
            "comune": "Ponzano Romano",
            "provincia": "RM"
        }, {
            "comune": "Riano",
            "provincia": "RM"
        }, {
            "comune": "Rignano Flaminio",
            "provincia": "RM"
        }, {
            "comune": "Riofreddo",
            "provincia": "RM"
        }, {
            "comune": "Rocca Canterano",
            "provincia": "RM"
        }, {
            "comune": "Rocca di Cave",
            "provincia": "RM"
        }, {
            "comune": "Rocca di Papa",
            "provincia": "RM"
        }, {
            "comune": "Roccagiovine",
            "provincia": "RM"
        }, {
            "comune": "Rocca Priora",
            "provincia": "RM"
        }, {
            "comune": "Rocca Santo Stefano",
            "provincia": "RM"
        }, {
            "comune": "Roiate",
            "provincia": "RM"
        }, {
            "comune": "Roma",
            "provincia": "RM"
        }, {
            "comune": "Roviano",
            "provincia": "RM"
        }, {
            "comune": "Sacrofano",
            "provincia": "RM"
        }, {
            "comune": "Sambuci",
            "provincia": "RM"
        }, {
            "comune": "San Gregorio da Sassola",
            "provincia": "RM"
        }, {
            "comune": "San Polo dei Cavalieri",
            "provincia": "RM"
        }, {
            "comune": "Santa Marinella",
            "provincia": "RM"
        }, {
            "comune": "Sant'Angelo Romano",
            "provincia": "RM"
        }, {
            "comune": "Sant'Oreste",
            "provincia": "RM"
        }, {
            "comune": "San Vito Romano",
            "provincia": "RM"
        }, {
            "comune": "Saracinesco",
            "provincia": "RM"
        }, {
            "comune": "Segni",
            "provincia": "RM"
        }, {
            "comune": "Subiaco",
            "provincia": "RM"
        }, {
            "comune": "Tivoli",
            "provincia": "RM"
        }, {
            "comune": "Tolfa",
            "provincia": "RM"
        }, {
            "comune": "Torrita Tiberina",
            "provincia": "RM"
        }, {
            "comune": "Trevignano Romano",
            "provincia": "RM"
        }, {
            "comune": "Vallepietra",
            "provincia": "RM"
        }, {
            "comune": "Vallinfreda",
            "provincia": "RM"
        }, {
            "comune": "Valmontone",
            "provincia": "RM"
        }, {
            "comune": "Velletri",
            "provincia": "RM"
        }, {
            "comune": "Vicovaro",
            "provincia": "RM"
        }, {
            "comune": "Vivaro Romano",
            "provincia": "RM"
        }, {
            "comune": "Zagarolo",
            "provincia": "RM"
        }, {
            "comune": "Lariano",
            "provincia": "RM"
        }, {
            "comune": "Ladispoli",
            "provincia": "RM"
        }, {
            "comune": "Ardea",
            "provincia": "RM"
        }, {
            "comune": "Ciampino",
            "provincia": "RM"
        }, {
            "comune": "San Cesareo",
            "provincia": "RM"
        }, {
            "comune": "Fiumicino",
            "provincia": "RM"
        }, {
            "comune": "Fonte Nuova",
            "provincia": "RM"
        }, {
            "comune": "Aprilia",
            "provincia": "LT"
        }, {
            "comune": "Bassiano",
            "provincia": "LT"
        }, {
            "comune": "Campodimele",
            "provincia": "LT"
        }, {
            "comune": "Castelforte",
            "provincia": "LT"
        }, {
            "comune": "Cisterna di Latina",
            "provincia": "LT"
        }, {
            "comune": "Cori",
            "provincia": "LT"
        }, {
            "comune": "Fondi",
            "provincia": "LT"
        }, {
            "comune": "Formia",
            "provincia": "LT"
        }, {
            "comune": "Gaeta",
            "provincia": "LT"
        }, {
            "comune": "Itri",
            "provincia": "LT"
        }, {
            "comune": "Latina",
            "provincia": "LT"
        }, {
            "comune": "Lenola",
            "provincia": "LT"
        }, {
            "comune": "Maenza",
            "provincia": "LT"
        }, {
            "comune": "Minturno",
            "provincia": "LT"
        }, {
            "comune": "Monte San Biagio",
            "provincia": "LT"
        }, {
            "comune": "Norma",
            "provincia": "LT"
        }, {
            "comune": "Pontinia",
            "provincia": "LT"
        }, {
            "comune": "Ponza",
            "provincia": "LT"
        }, {
            "comune": "Priverno",
            "provincia": "LT"
        }, {
            "comune": "Prossedi",
            "provincia": "LT"
        }, {
            "comune": "Roccagorga",
            "provincia": "LT"
        }, {
            "comune": "Rocca Massima",
            "provincia": "LT"
        }, {
            "comune": "Roccasecca dei Volsci",
            "provincia": "LT"
        }, {
            "comune": "Sabaudia",
            "provincia": "LT"
        }, {
            "comune": "San Felice Circeo",
            "provincia": "LT"
        }, {
            "comune": "Santi Cosma e Damiano",
            "provincia": "LT"
        }, {
            "comune": "Sermoneta",
            "provincia": "LT"
        }, {
            "comune": "Sezze",
            "provincia": "LT"
        }, {
            "comune": "Sonnino",
            "provincia": "LT"
        }, {
            "comune": "Sperlonga",
            "provincia": "LT"
        }, {
            "comune": "Spigno Saturnia",
            "provincia": "LT"
        }, {
            "comune": "Terracina",
            "provincia": "LT"
        }, {
            "comune": "Ventotene",
            "provincia": "LT"
        }, {
            "comune": "Acquafondata",
            "provincia": "FR"
        }, {
            "comune": "Acuto",
            "provincia": "FR"
        }, {
            "comune": "Alatri",
            "provincia": "FR"
        }, {
            "comune": "Alvito",
            "provincia": "FR"
        }, {
            "comune": "Amaseno",
            "provincia": "FR"
        }, {
            "comune": "Anagni",
            "provincia": "FR"
        }, {
            "comune": "Aquino",
            "provincia": "FR"
        }, {
            "comune": "Arce",
            "provincia": "FR"
        }, {
            "comune": "Arnara",
            "provincia": "FR"
        }, {
            "comune": "Arpino",
            "provincia": "FR"
        }, {
            "comune": "Atina",
            "provincia": "FR"
        }, {
            "comune": "Ausonia",
            "provincia": "FR"
        }, {
            "comune": "Belmonte Castello",
            "provincia": "FR"
        }, {
            "comune": "Boville Ernica",
            "provincia": "FR"
        }, {
            "comune": "Broccostella",
            "provincia": "FR"
        }, {
            "comune": "Campoli Appennino",
            "provincia": "FR"
        }, {
            "comune": "Casalattico",
            "provincia": "FR"
        }, {
            "comune": "Casalvieri",
            "provincia": "FR"
        }, {
            "comune": "Cassino",
            "provincia": "FR"
        }, {
            "comune": "Castelliri",
            "provincia": "FR"
        }, {
            "comune": "Castelnuovo Parano",
            "provincia": "FR"
        }, {
            "comune": "Castrocielo",
            "provincia": "FR"
        }, {
            "comune": "Castro dei Volsci",
            "provincia": "FR"
        }, {
            "comune": "Ceccano",
            "provincia": "FR"
        }, {
            "comune": "Ceprano",
            "provincia": "FR"
        }, {
            "comune": "Cervaro",
            "provincia": "FR"
        }, {
            "comune": "Colfelice",
            "provincia": "FR"
        }, {
            "comune": "Collepardo",
            "provincia": "FR"
        }, {
            "comune": "Colle San Magno",
            "provincia": "FR"
        }, {
            "comune": "Coreno Ausonio",
            "provincia": "FR"
        }, {
            "comune": "Esperia",
            "provincia": "FR"
        }, {
            "comune": "Falvaterra",
            "provincia": "FR"
        }, {
            "comune": "Ferentino",
            "provincia": "FR"
        }, {
            "comune": "Filettino",
            "provincia": "FR"
        }, {
            "comune": "Fiuggi",
            "provincia": "FR"
        }, {
            "comune": "Fontana Liri",
            "provincia": "FR"
        }, {
            "comune": "Fontechiari",
            "provincia": "FR"
        }, {
            "comune": "Frosinone",
            "provincia": "FR"
        }, {
            "comune": "Fumone",
            "provincia": "FR"
        }, {
            "comune": "Gallinaro",
            "provincia": "FR"
        }, {
            "comune": "Giuliano di Roma",
            "provincia": "FR"
        }, {
            "comune": "Guarcino",
            "provincia": "FR"
        }, {
            "comune": "Isola del Liri",
            "provincia": "FR"
        }, {
            "comune": "Monte San Giovanni Campano",
            "provincia": "FR"
        }, {
            "comune": "Morolo",
            "provincia": "FR"
        }, {
            "comune": "Paliano",
            "provincia": "FR"
        }, {
            "comune": "Pastena",
            "provincia": "FR"
        }, {
            "comune": "Patrica",
            "provincia": "FR"
        }, {
            "comune": "Pescosolido",
            "provincia": "FR"
        }, {
            "comune": "Picinisco",
            "provincia": "FR"
        }, {
            "comune": "Pico",
            "provincia": "FR"
        }, {
            "comune": "Piedimonte San Germano",
            "provincia": "FR"
        }, {
            "comune": "Piglio",
            "provincia": "FR"
        }, {
            "comune": "Pignataro Interamna",
            "provincia": "FR"
        }, {
            "comune": "Pofi",
            "provincia": "FR"
        }, {
            "comune": "Pontecorvo",
            "provincia": "FR"
        }, {
            "comune": "Posta Fibreno",
            "provincia": "FR"
        }, {
            "comune": "Ripi",
            "provincia": "FR"
        }, {
            "comune": "Rocca d'Arce",
            "provincia": "FR"
        }, {
            "comune": "Roccasecca",
            "provincia": "FR"
        }, {
            "comune": "San Biagio Saracinisco",
            "provincia": "FR"
        }, {
            "comune": "San Donato Val di Comino",
            "provincia": "FR"
        }, {
            "comune": "San Giorgio a Liri",
            "provincia": "FR"
        }, {
            "comune": "San Giovanni Incarico",
            "provincia": "FR"
        }, {
            "comune": "Sant'Ambrogio sul Garigliano",
            "provincia": "FR"
        }, {
            "comune": "Sant'Andrea del Garigliano",
            "provincia": "FR"
        }, {
            "comune": "Sant'Apollinare",
            "provincia": "FR"
        }, {
            "comune": "Sant'Elia Fiumerapido",
            "provincia": "FR"
        }, {
            "comune": "Santopadre",
            "provincia": "FR"
        }, {
            "comune": "San Vittore del Lazio",
            "provincia": "FR"
        }, {
            "comune": "Serrone",
            "provincia": "FR"
        }, {
            "comune": "Settefrati",
            "provincia": "FR"
        }, {
            "comune": "Sgurgola",
            "provincia": "FR"
        }, {
            "comune": "Sora",
            "provincia": "FR"
        }, {
            "comune": "Strangolagalli",
            "provincia": "FR"
        }, {
            "comune": "Supino",
            "provincia": "FR"
        }, {
            "comune": "Terelle",
            "provincia": "FR"
        }, {
            "comune": "Torre Cajetani",
            "provincia": "FR"
        }, {
            "comune": "Torrice",
            "provincia": "FR"
        }, {
            "comune": "Trevi nel Lazio",
            "provincia": "FR"
        }, {
            "comune": "Trivigliano",
            "provincia": "FR"
        }, {
            "comune": "Vallecorsa",
            "provincia": "FR"
        }, {
            "comune": "Vallemaio",
            "provincia": "FR"
        }, {
            "comune": "Vallerotonda",
            "provincia": "FR"
        }, {
            "comune": "Veroli",
            "provincia": "FR"
        }, {
            "comune": "Vicalvi",
            "provincia": "FR"
        }, {
            "comune": "Vico nel Lazio",
            "provincia": "FR"
        }, {
            "comune": "Villa Latina",
            "provincia": "FR"
        }, {
            "comune": "Villa Santa Lucia",
            "provincia": "FR"
        }, {
            "comune": "Villa Santo Stefano",
            "provincia": "FR"
        }, {
            "comune": "Viticuso",
            "provincia": "FR"
        }, {
            "comune": "Ailano",
            "provincia": "CE"
        }, {
            "comune": "Alife",
            "provincia": "CE"
        }, {
            "comune": "Alvignano",
            "provincia": "CE"
        }, {
            "comune": "Arienzo",
            "provincia": "CE"
        }, {
            "comune": "Aversa",
            "provincia": "CE"
        }, {
            "comune": "Baia e Latina",
            "provincia": "CE"
        }, {
            "comune": "Bellona",
            "provincia": "CE"
        }, {
            "comune": "Caianello",
            "provincia": "CE"
        }, {
            "comune": "Caiazzo",
            "provincia": "CE"
        }, {
            "comune": "Calvi Risorta",
            "provincia": "CE"
        }, {
            "comune": "Camigliano",
            "provincia": "CE"
        }, {
            "comune": "Cancello ed Arnone",
            "provincia": "CE"
        }, {
            "comune": "Capodrise",
            "provincia": "CE"
        }, {
            "comune": "Capriati a Volturno",
            "provincia": "CE"
        }, {
            "comune": "Capua",
            "provincia": "CE"
        }, {
            "comune": "Carinaro",
            "provincia": "CE"
        }, {
            "comune": "Carinola",
            "provincia": "CE"
        }, {
            "comune": "Casagiove",
            "provincia": "CE"
        }, {
            "comune": "Casal di Principe",
            "provincia": "CE"
        }, {
            "comune": "Casaluce",
            "provincia": "CE"
        }, {
            "comune": "Casapulla",
            "provincia": "CE"
        }, {
            "comune": "Caserta",
            "provincia": "CE"
        }, {
            "comune": "Castel Campagnano",
            "provincia": "CE"
        }, {
            "comune": "Castel di Sasso",
            "provincia": "CE"
        }, {
            "comune": "Castello del Matese",
            "provincia": "CE"
        }, {
            "comune": "Castel Morrone",
            "provincia": "CE"
        }, {
            "comune": "Castel Volturno",
            "provincia": "CE"
        }, {
            "comune": "Cervino",
            "provincia": "CE"
        }, {
            "comune": "Cesa",
            "provincia": "CE"
        }, {
            "comune": "Ciorlano",
            "provincia": "CE"
        }, {
            "comune": "Conca della Campania",
            "provincia": "CE"
        }, {
            "comune": "Curti",
            "provincia": "CE"
        }, {
            "comune": "Dragoni",
            "provincia": "CE"
        }, {
            "comune": "Fontegreca",
            "provincia": "CE"
        }, {
            "comune": "Formicola",
            "provincia": "CE"
        }, {
            "comune": "Francolise",
            "provincia": "CE"
        }, {
            "comune": "Frignano",
            "provincia": "CE"
        }, {
            "comune": "Gallo Matese",
            "provincia": "CE"
        }, {
            "comune": "Galluccio",
            "provincia": "CE"
        }, {
            "comune": "Giano Vetusto",
            "provincia": "CE"
        }, {
            "comune": "Gioia Sannitica",
            "provincia": "CE"
        }, {
            "comune": "Grazzanise",
            "provincia": "CE"
        }, {
            "comune": "Gricignano di Aversa",
            "provincia": "CE"
        }, {
            "comune": "Letino",
            "provincia": "CE"
        }, {
            "comune": "Liberi",
            "provincia": "CE"
        }, {
            "comune": "Lusciano",
            "provincia": "CE"
        }, {
            "comune": "Macerata Campania",
            "provincia": "CE"
        }, {
            "comune": "Maddaloni",
            "provincia": "CE"
        }, {
            "comune": "Marcianise",
            "provincia": "CE"
        }, {
            "comune": "Marzano Appio",
            "provincia": "CE"
        }, {
            "comune": "Mignano Monte Lungo",
            "provincia": "CE"
        }, {
            "comune": "Mondragone",
            "provincia": "CE"
        }, {
            "comune": "Orta di Atella",
            "provincia": "CE"
        }, {
            "comune": "Parete",
            "provincia": "CE"
        }, {
            "comune": "Pastorano",
            "provincia": "CE"
        }, {
            "comune": "Piana di Monte Verna",
            "provincia": "CE"
        }, {
            "comune": "Piedimonte Matese",
            "provincia": "CE"
        }, {
            "comune": "Pietramelara",
            "provincia": "CE"
        }, {
            "comune": "Pietravairano",
            "provincia": "CE"
        }, {
            "comune": "Pignataro Maggiore",
            "provincia": "CE"
        }, {
            "comune": "Pontelatone",
            "provincia": "CE"
        }, {
            "comune": "Portico di Caserta",
            "provincia": "CE"
        }, {
            "comune": "Prata Sannita",
            "provincia": "CE"
        }, {
            "comune": "Pratella",
            "provincia": "CE"
        }, {
            "comune": "Presenzano",
            "provincia": "CE"
        }, {
            "comune": "Raviscanina",
            "provincia": "CE"
        }, {
            "comune": "Recale",
            "provincia": "CE"
        }, {
            "comune": "Riardo",
            "provincia": "CE"
        }, {
            "comune": "Rocca D'Evandro",
            "provincia": "CE"
        }, {
            "comune": "Roccamonfina",
            "provincia": "CE"
        }, {
            "comune": "Roccaromana",
            "provincia": "CE"
        }, {
            "comune": "Rocchetta e Croce",
            "provincia": "CE"
        }, {
            "comune": "Ruviano",
            "provincia": "CE"
        }, {
            "comune": "San Cipriano d'Aversa",
            "provincia": "CE"
        }, {
            "comune": "San Felice a Cancello",
            "provincia": "CE"
        }, {
            "comune": "San Gregorio Matese",
            "provincia": "CE"
        }, {
            "comune": "San Marcellino",
            "provincia": "CE"
        }, {
            "comune": "San Nicola la Strada",
            "provincia": "CE"
        }, {
            "comune": "San Pietro Infine",
            "provincia": "CE"
        }, {
            "comune": "San Potito Sannitico",
            "provincia": "CE"
        }, {
            "comune": "San Prisco",
            "provincia": "CE"
        }, {
            "comune": "Santa Maria a Vico",
            "provincia": "CE"
        }, {
            "comune": "Santa Maria Capua Vetere",
            "provincia": "CE"
        }, {
            "comune": "Santa Maria La Fossa",
            "provincia": "CE"
        }, {
            "comune": "San Tammaro",
            "provincia": "CE"
        }, {
            "comune": "Sant'Angelo d'Alife",
            "provincia": "CE"
        }, {
            "comune": "Sant'Arpino",
            "provincia": "CE"
        }, {
            "comune": "Sessa Aurunca",
            "provincia": "CE"
        }, {
            "comune": "Sparanise",
            "provincia": "CE"
        }, {
            "comune": "Succivo",
            "provincia": "CE"
        }, {
            "comune": "Teano",
            "provincia": "CE"
        }, {
            "comune": "Teverola",
            "provincia": "CE"
        }, {
            "comune": "Tora e Piccilli",
            "provincia": "CE"
        }, {
            "comune": "Trentola Ducenta",
            "provincia": "CE"
        }, {
            "comune": "Vairano Patenora",
            "provincia": "CE"
        }, {
            "comune": "Valle Agricola",
            "provincia": "CE"
        }, {
            "comune": "Valle di Maddaloni",
            "provincia": "CE"
        }, {
            "comune": "Villa di Briano",
            "provincia": "CE"
        }, {
            "comune": "Villa Literno",
            "provincia": "CE"
        }, {
            "comune": "Vitulazio",
            "provincia": "CE"
        }, {
            "comune": "Falciano del Massico",
            "provincia": "CE"
        }, {
            "comune": "Cellole",
            "provincia": "CE"
        }, {
            "comune": "Casapesenna",
            "provincia": "CE"
        }, {
            "comune": "San Marco Evangelista",
            "provincia": "CE"
        }, {
            "comune": "Airola",
            "provincia": "BN"
        }, {
            "comune": "Amorosi",
            "provincia": "BN"
        }, {
            "comune": "Apice",
            "provincia": "BN"
        }, {
            "comune": "Apollosa",
            "provincia": "BN"
        }, {
            "comune": "Arpaia",
            "provincia": "BN"
        }, {
            "comune": "Arpaise",
            "provincia": "BN"
        }, {
            "comune": "Baselice",
            "provincia": "BN"
        }, {
            "comune": "Benevento",
            "provincia": "BN"
        }, {
            "comune": "Bonea",
            "provincia": "BN"
        }, {
            "comune": "Bucciano",
            "provincia": "BN"
        }, {
            "comune": "Buonalbergo",
            "provincia": "BN"
        }, {
            "comune": "Calvi",
            "provincia": "BN"
        }, {
            "comune": "Campolattaro",
            "provincia": "BN"
        }, {
            "comune": "Campoli del Monte Taburno",
            "provincia": "BN"
        }, {
            "comune": "Casalduni",
            "provincia": "BN"
        }, {
            "comune": "Castelfranco in Miscano",
            "provincia": "BN"
        }, {
            "comune": "Castelpagano",
            "provincia": "BN"
        }, {
            "comune": "Castelpoto",
            "provincia": "BN"
        }, {
            "comune": "Castelvenere",
            "provincia": "BN"
        }, {
            "comune": "Castelvetere in Val Fortore",
            "provincia": "BN"
        }, {
            "comune": "Cautano",
            "provincia": "BN"
        }, {
            "comune": "Ceppaloni",
            "provincia": "BN"
        }, {
            "comune": "Cerreto Sannita",
            "provincia": "BN"
        }, {
            "comune": "Circello",
            "provincia": "BN"
        }, {
            "comune": "Colle Sannita",
            "provincia": "BN"
        }, {
            "comune": "Cusano Mutri",
            "provincia": "BN"
        }, {
            "comune": "Dugenta",
            "provincia": "BN"
        }, {
            "comune": "Durazzano",
            "provincia": "BN"
        }, {
            "comune": "Faicchio",
            "provincia": "BN"
        }, {
            "comune": "Foglianise",
            "provincia": "BN"
        }, {
            "comune": "Foiano di Val Fortore",
            "provincia": "BN"
        }, {
            "comune": "Forchia",
            "provincia": "BN"
        }, {
            "comune": "Fragneto L'Abate",
            "provincia": "BN"
        }, {
            "comune": "Fragneto Monforte",
            "provincia": "BN"
        }, {
            "comune": "Frasso Telesino",
            "provincia": "BN"
        }, {
            "comune": "Ginestra degli Schiavoni",
            "provincia": "BN"
        }, {
            "comune": "Guardia Sanframondi",
            "provincia": "BN"
        }, {
            "comune": "Limatola",
            "provincia": "BN"
        }, {
            "comune": "Melizzano",
            "provincia": "BN"
        }, {
            "comune": "Moiano",
            "provincia": "BN"
        }, {
            "comune": "Molinara",
            "provincia": "BN"
        }, {
            "comune": "Montefalcone di Val Fortore",
            "provincia": "BN"
        }, {
            "comune": "Montesarchio",
            "provincia": "BN"
        }, {
            "comune": "Morcone",
            "provincia": "BN"
        }, {
            "comune": "Paduli",
            "provincia": "BN"
        }, {
            "comune": "Pago Veiano",
            "provincia": "BN"
        }, {
            "comune": "Pannarano",
            "provincia": "BN"
        }, {
            "comune": "Paolisi",
            "provincia": "BN"
        }, {
            "comune": "Paupisi",
            "provincia": "BN"
        }, {
            "comune": "Pesco Sannita",
            "provincia": "BN"
        }, {
            "comune": "Pietraroja",
            "provincia": "BN"
        }, {
            "comune": "Pietrelcina",
            "provincia": "BN"
        }, {
            "comune": "Ponte",
            "provincia": "BN"
        }, {
            "comune": "Pontelandolfo",
            "provincia": "BN"
        }, {
            "comune": "Puglianello",
            "provincia": "BN"
        }, {
            "comune": "Reino",
            "provincia": "BN"
        }, {
            "comune": "San Bartolomeo in Galdo",
            "provincia": "BN"
        }, {
            "comune": "San Giorgio del Sannio",
            "provincia": "BN"
        }, {
            "comune": "San Giorgio La Molara",
            "provincia": "BN"
        }, {
            "comune": "San Leucio del Sannio",
            "provincia": "BN"
        }, {
            "comune": "San Lorenzello",
            "provincia": "BN"
        }, {
            "comune": "San Lorenzo Maggiore",
            "provincia": "BN"
        }, {
            "comune": "San Lupo",
            "provincia": "BN"
        }, {
            "comune": "San Marco dei Cavoti",
            "provincia": "BN"
        }, {
            "comune": "San Martino Sannita",
            "provincia": "BN"
        }, {
            "comune": "San Nazzaro",
            "provincia": "BN"
        }, {
            "comune": "San Nicola Manfredi",
            "provincia": "BN"
        }, {
            "comune": "San Salvatore Telesino",
            "provincia": "BN"
        }, {
            "comune": "Santa Croce del Sannio",
            "provincia": "BN"
        }, {
            "comune": "Sant'Agata De' Goti",
            "provincia": "BN"
        }, {
            "comune": "Sant'Angelo a Cupolo",
            "provincia": "BN"
        }, {
            "comune": "Sassinoro",
            "provincia": "BN"
        }, {
            "comune": "Solopaca",
            "provincia": "BN"
        }, {
            "comune": "Telese Terme",
            "provincia": "BN"
        }, {
            "comune": "Tocco Caudio",
            "provincia": "BN"
        }, {
            "comune": "Torrecuso",
            "provincia": "BN"
        }, {
            "comune": "Vitulano",
            "provincia": "BN"
        }, {
            "comune": "Sant'Arcangelo Trimonte",
            "provincia": "BN"
        }, {
            "comune": "Acerra",
            "provincia": "NA"
        }, {
            "comune": "Afragola",
            "provincia": "NA"
        }, {
            "comune": "Agerola",
            "provincia": "NA"
        }, {
            "comune": "Anacapri",
            "provincia": "NA"
        }, {
            "comune": "Arzano",
            "provincia": "NA"
        }, {
            "comune": "Bacoli",
            "provincia": "NA"
        }, {
            "comune": "Barano d'Ischia",
            "provincia": "NA"
        }, {
            "comune": "Boscoreale",
            "provincia": "NA"
        }, {
            "comune": "Boscotrecase",
            "provincia": "NA"
        }, {
            "comune": "Brusciano",
            "provincia": "NA"
        }, {
            "comune": "Caivano",
            "provincia": "NA"
        }, {
            "comune": "Calvizzano",
            "provincia": "NA"
        }, {
            "comune": "Camposano",
            "provincia": "NA"
        }, {
            "comune": "Capri",
            "provincia": "NA"
        }, {
            "comune": "Carbonara di Nola",
            "provincia": "NA"
        }, {
            "comune": "Cardito",
            "provincia": "NA"
        }, {
            "comune": "Casalnuovo di Napoli",
            "provincia": "NA"
        }, {
            "comune": "Casamarciano",
            "provincia": "NA"
        }, {
            "comune": "Casamicciola Terme",
            "provincia": "NA"
        }, {
            "comune": "Casandrino",
            "provincia": "NA"
        }, {
            "comune": "Casavatore",
            "provincia": "NA"
        }, {
            "comune": "Casola di Napoli",
            "provincia": "NA"
        }, {
            "comune": "Casoria",
            "provincia": "NA"
        }, {
            "comune": "Castellammare di Stabia",
            "provincia": "NA"
        }, {
            "comune": "Castello di Cisterna",
            "provincia": "NA"
        }, {
            "comune": "Cercola",
            "provincia": "NA"
        }, {
            "comune": "Cicciano",
            "provincia": "NA"
        }, {
            "comune": "Cimitile",
            "provincia": "NA"
        }, {
            "comune": "Comiziano",
            "provincia": "NA"
        }, {
            "comune": "Crispano",
            "provincia": "NA"
        }, {
            "comune": "Forio",
            "provincia": "NA"
        }, {
            "comune": "Frattamaggiore",
            "provincia": "NA"
        }, {
            "comune": "Frattaminore",
            "provincia": "NA"
        }, {
            "comune": "Giugliano in Campania",
            "provincia": "NA"
        }, {
            "comune": "Gragnano",
            "provincia": "NA"
        }, {
            "comune": "Grumo Nevano",
            "provincia": "NA"
        }, {
            "comune": "Ischia",
            "provincia": "NA"
        }, {
            "comune": "Lacco Ameno",
            "provincia": "NA"
        }, {
            "comune": "Lettere",
            "provincia": "NA"
        }, {
            "comune": "Liveri",
            "provincia": "NA"
        }, {
            "comune": "Marano di Napoli",
            "provincia": "NA"
        }, {
            "comune": "Mariglianella",
            "provincia": "NA"
        }, {
            "comune": "Marigliano",
            "provincia": "NA"
        }, {
            "comune": "Massa Lubrense",
            "provincia": "NA"
        }, {
            "comune": "Melito di Napoli",
            "provincia": "NA"
        }, {
            "comune": "Meta",
            "provincia": "NA"
        }, {
            "comune": "Monte di Procida",
            "provincia": "NA"
        }, {
            "comune": "Mugnano di Napoli",
            "provincia": "NA"
        }, {
            "comune": "Napoli",
            "provincia": "NA"
        }, {
            "comune": "Nola",
            "provincia": "NA"
        }, {
            "comune": "Ottaviano",
            "provincia": "NA"
        }, {
            "comune": "Palma Campania",
            "provincia": "NA"
        }, {
            "comune": "Piano di Sorrento",
            "provincia": "NA"
        }, {
            "comune": "Pimonte",
            "provincia": "NA"
        }, {
            "comune": "Poggiomarino",
            "provincia": "NA"
        }, {
            "comune": "Pollena Trocchia",
            "provincia": "NA"
        }, {
            "comune": "Pomigliano d'Arco",
            "provincia": "NA"
        }, {
            "comune": "Pompei",
            "provincia": "NA"
        }, {
            "comune": "Portici",
            "provincia": "NA"
        }, {
            "comune": "Pozzuoli",
            "provincia": "NA"
        }, {
            "comune": "Procida",
            "provincia": "NA"
        }, {
            "comune": "Qualiano",
            "provincia": "NA"
        }, {
            "comune": "Quarto",
            "provincia": "NA"
        }, {
            "comune": "Ercolano",
            "provincia": "NA"
        }, {
            "comune": "Roccarainola",
            "provincia": "NA"
        }, {
            "comune": "San Gennaro Vesuviano",
            "provincia": "NA"
        }, {
            "comune": "San Giorgio a Cremano",
            "provincia": "NA"
        }, {
            "comune": "San Giuseppe Vesuviano",
            "provincia": "NA"
        }, {
            "comune": "San Paolo Bel Sito",
            "provincia": "NA"
        }, {
            "comune": "San Sebastiano al Vesuvio",
            "provincia": "NA"
        }, {
            "comune": "Sant'Agnello",
            "provincia": "NA"
        }, {
            "comune": "Sant'Anastasia",
            "provincia": "NA"
        }, {
            "comune": "Sant'Antimo",
            "provincia": "NA"
        }, {
            "comune": "Sant'Antonio Abate",
            "provincia": "NA"
        }, {
            "comune": "San Vitaliano",
            "provincia": "NA"
        }, {
            "comune": "Saviano",
            "provincia": "NA"
        }, {
            "comune": "Scisciano",
            "provincia": "NA"
        }, {
            "comune": "Serrara Fontana",
            "provincia": "NA"
        }, {
            "comune": "Somma Vesuviana",
            "provincia": "NA"
        }, {
            "comune": "Sorrento",
            "provincia": "NA"
        }, {
            "comune": "Striano",
            "provincia": "NA"
        }, {
            "comune": "Terzigno",
            "provincia": "NA"
        }, {
            "comune": "Torre Annunziata",
            "provincia": "NA"
        }, {
            "comune": "Torre del Greco",
            "provincia": "NA"
        }, {
            "comune": "Tufino",
            "provincia": "NA"
        }, {
            "comune": "Vico Equense",
            "provincia": "NA"
        }, {
            "comune": "Villaricca",
            "provincia": "NA"
        }, {
            "comune": "Visciano",
            "provincia": "NA"
        }, {
            "comune": "Volla",
            "provincia": "NA"
        }, {
            "comune": "Santa Maria la Carità",
            "provincia": "NA"
        }, {
            "comune": "Trecase",
            "provincia": "NA"
        }, {
            "comune": "Massa di Somma",
            "provincia": "NA"
        }, {
            "comune": "Aiello del Sabato",
            "provincia": "AV"
        }, {
            "comune": "Altavilla Irpina",
            "provincia": "AV"
        }, {
            "comune": "Andretta",
            "provincia": "AV"
        }, {
            "comune": "Aquilonia",
            "provincia": "AV"
        }, {
            "comune": "Ariano Irpino",
            "provincia": "AV"
        }, {
            "comune": "Atripalda",
            "provincia": "AV"
        }, {
            "comune": "Avella",
            "provincia": "AV"
        }, {
            "comune": "Avellino",
            "provincia": "AV"
        }, {
            "comune": "Bagnoli Irpino",
            "provincia": "AV"
        }, {
            "comune": "Baiano",
            "provincia": "AV"
        }, {
            "comune": "Bisaccia",
            "provincia": "AV"
        }, {
            "comune": "Bonito",
            "provincia": "AV"
        }, {
            "comune": "Cairano",
            "provincia": "AV"
        }, {
            "comune": "Calabritto",
            "provincia": "AV"
        }, {
            "comune": "Calitri",
            "provincia": "AV"
        }, {
            "comune": "Candida",
            "provincia": "AV"
        }, {
            "comune": "Caposele",
            "provincia": "AV"
        }, {
            "comune": "Capriglia Irpina",
            "provincia": "AV"
        }, {
            "comune": "Carife",
            "provincia": "AV"
        }, {
            "comune": "Casalbore",
            "provincia": "AV"
        }, {
            "comune": "Cassano Irpino",
            "provincia": "AV"
        }, {
            "comune": "Castel Baronia",
            "provincia": "AV"
        }, {
            "comune": "Castelfranci",
            "provincia": "AV"
        }, {
            "comune": "Castelvetere sul Calore",
            "provincia": "AV"
        }, {
            "comune": "Cervinara",
            "provincia": "AV"
        }, {
            "comune": "Cesinali",
            "provincia": "AV"
        }, {
            "comune": "Chianche",
            "provincia": "AV"
        }, {
            "comune": "Chiusano di San Domenico",
            "provincia": "AV"
        }, {
            "comune": "Contrada",
            "provincia": "AV"
        }, {
            "comune": "Conza della Campania",
            "provincia": "AV"
        }, {
            "comune": "Domicella",
            "provincia": "AV"
        }, {
            "comune": "Flumeri",
            "provincia": "AV"
        }, {
            "comune": "Fontanarosa",
            "provincia": "AV"
        }, {
            "comune": "Forino",
            "provincia": "AV"
        }, {
            "comune": "Frigento",
            "provincia": "AV"
        }, {
            "comune": "Gesualdo",
            "provincia": "AV"
        }, {
            "comune": "Greci",
            "provincia": "AV"
        }, {
            "comune": "Grottaminarda",
            "provincia": "AV"
        }, {
            "comune": "Grottolella",
            "provincia": "AV"
        }, {
            "comune": "Guardia Lombardi",
            "provincia": "AV"
        }, {
            "comune": "Lacedonia",
            "provincia": "AV"
        }, {
            "comune": "Lapio",
            "provincia": "AV"
        }, {
            "comune": "Lauro",
            "provincia": "AV"
        }, {
            "comune": "Lioni",
            "provincia": "AV"
        }, {
            "comune": "Luogosano",
            "provincia": "AV"
        }, {
            "comune": "Manocalzati",
            "provincia": "AV"
        }, {
            "comune": "Marzano di Nola",
            "provincia": "AV"
        }, {
            "comune": "Melito Irpino",
            "provincia": "AV"
        }, {
            "comune": "Mercogliano",
            "provincia": "AV"
        }, {
            "comune": "Mirabella Eclano",
            "provincia": "AV"
        }, {
            "comune": "Montaguto",
            "provincia": "AV"
        }, {
            "comune": "Montecalvo Irpino",
            "provincia": "AV"
        }, {
            "comune": "Montefalcione",
            "provincia": "AV"
        }, {
            "comune": "Monteforte Irpino",
            "provincia": "AV"
        }, {
            "comune": "Montefredane",
            "provincia": "AV"
        }, {
            "comune": "Montefusco",
            "provincia": "AV"
        }, {
            "comune": "Montella",
            "provincia": "AV"
        }, {
            "comune": "Montemarano",
            "provincia": "AV"
        }, {
            "comune": "Montemiletto",
            "provincia": "AV"
        }, {
            "comune": "Monteverde",
            "provincia": "AV"
        }, {
            "comune": "Morra De Sanctis",
            "provincia": "AV"
        }, {
            "comune": "Moschiano",
            "provincia": "AV"
        }, {
            "comune": "Mugnano del Cardinale",
            "provincia": "AV"
        }, {
            "comune": "Nusco",
            "provincia": "AV"
        }, {
            "comune": "Ospedaletto d'Alpinolo",
            "provincia": "AV"
        }, {
            "comune": "Pago del Vallo di Lauro",
            "provincia": "AV"
        }, {
            "comune": "Parolise",
            "provincia": "AV"
        }, {
            "comune": "Paternopoli",
            "provincia": "AV"
        }, {
            "comune": "Petruro Irpino",
            "provincia": "AV"
        }, {
            "comune": "Pietradefusi",
            "provincia": "AV"
        }, {
            "comune": "Pietrastornina",
            "provincia": "AV"
        }, {
            "comune": "Prata di Principato Ultra",
            "provincia": "AV"
        }, {
            "comune": "Pratola Serra",
            "provincia": "AV"
        }, {
            "comune": "Quadrelle",
            "provincia": "AV"
        }, {
            "comune": "Quindici",
            "provincia": "AV"
        }, {
            "comune": "Roccabascerana",
            "provincia": "AV"
        }, {
            "comune": "Rocca San Felice",
            "provincia": "AV"
        }, {
            "comune": "Rotondi",
            "provincia": "AV"
        }, {
            "comune": "Salza Irpina",
            "provincia": "AV"
        }, {
            "comune": "San Mango sul Calore",
            "provincia": "AV"
        }, {
            "comune": "San Martino Valle Caudina",
            "provincia": "AV"
        }, {
            "comune": "San Michele di Serino",
            "provincia": "AV"
        }, {
            "comune": "San Nicola Baronia",
            "provincia": "AV"
        }, {
            "comune": "San Potito Ultra",
            "provincia": "AV"
        }, {
            "comune": "San Sossio Baronia",
            "provincia": "AV"
        }, {
            "comune": "Santa Lucia di Serino",
            "provincia": "AV"
        }, {
            "comune": "Sant'Andrea di Conza",
            "provincia": "AV"
        }, {
            "comune": "Sant'Angelo all'Esca",
            "provincia": "AV"
        }, {
            "comune": "Sant'Angelo a Scala",
            "provincia": "AV"
        }, {
            "comune": "Sant'Angelo dei Lombardi",
            "provincia": "AV"
        }, {
            "comune": "Santa Paolina",
            "provincia": "AV"
        }, {
            "comune": "Santo Stefano del Sole",
            "provincia": "AV"
        }, {
            "comune": "Savignano Irpino",
            "provincia": "AV"
        }, {
            "comune": "Scampitella",
            "provincia": "AV"
        }, {
            "comune": "Senerchia",
            "provincia": "AV"
        }, {
            "comune": "Serino",
            "provincia": "AV"
        }, {
            "comune": "Sirignano",
            "provincia": "AV"
        }, {
            "comune": "Solofra",
            "provincia": "AV"
        }, {
            "comune": "Sorbo Serpico",
            "provincia": "AV"
        }, {
            "comune": "Sperone",
            "provincia": "AV"
        }, {
            "comune": "Sturno",
            "provincia": "AV"
        }, {
            "comune": "Summonte",
            "provincia": "AV"
        }, {
            "comune": "Taurano",
            "provincia": "AV"
        }, {
            "comune": "Taurasi",
            "provincia": "AV"
        }, {
            "comune": "Teora",
            "provincia": "AV"
        }, {
            "comune": "Torella dei Lombardi",
            "provincia": "AV"
        }, {
            "comune": "Torre Le Nocelle",
            "provincia": "AV"
        }, {
            "comune": "Torrioni",
            "provincia": "AV"
        }, {
            "comune": "Trevico",
            "provincia": "AV"
        }, {
            "comune": "Tufo",
            "provincia": "AV"
        }, {
            "comune": "Vallata",
            "provincia": "AV"
        }, {
            "comune": "Vallesaccarda",
            "provincia": "AV"
        }, {
            "comune": "Venticano",
            "provincia": "AV"
        }, {
            "comune": "Villamaina",
            "provincia": "AV"
        }, {
            "comune": "Villanova del Battista",
            "provincia": "AV"
        }, {
            "comune": "Volturara Irpina",
            "provincia": "AV"
        }, {
            "comune": "Zungoli",
            "provincia": "AV"
        }, {
            "comune": "Montoro",
            "provincia": "AV"
        }, {
            "comune": "Acerno",
            "provincia": "SA"
        }, {
            "comune": "Agropoli",
            "provincia": "SA"
        }, {
            "comune": "Albanella",
            "provincia": "SA"
        }, {
            "comune": "Alfano",
            "provincia": "SA"
        }, {
            "comune": "Altavilla Silentina",
            "provincia": "SA"
        }, {
            "comune": "Amalfi",
            "provincia": "SA"
        }, {
            "comune": "Angri",
            "provincia": "SA"
        }, {
            "comune": "Aquara",
            "provincia": "SA"
        }, {
            "comune": "Ascea",
            "provincia": "SA"
        }, {
            "comune": "Atena Lucana",
            "provincia": "SA"
        }, {
            "comune": "Atrani",
            "provincia": "SA"
        }, {
            "comune": "Auletta",
            "provincia": "SA"
        }, {
            "comune": "Baronissi",
            "provincia": "SA"
        }, {
            "comune": "Battipaglia",
            "provincia": "SA"
        }, {
            "comune": "Bellosguardo",
            "provincia": "SA"
        }, {
            "comune": "Bracigliano",
            "provincia": "SA"
        }, {
            "comune": "Buccino",
            "provincia": "SA"
        }, {
            "comune": "Buonabitacolo",
            "provincia": "SA"
        }, {
            "comune": "Caggiano",
            "provincia": "SA"
        }, {
            "comune": "Calvanico",
            "provincia": "SA"
        }, {
            "comune": "Camerota",
            "provincia": "SA"
        }, {
            "comune": "Campagna",
            "provincia": "SA"
        }, {
            "comune": "Campora",
            "provincia": "SA"
        }, {
            "comune": "Cannalonga",
            "provincia": "SA"
        }, {
            "comune": "Capaccio Paestum",
            "provincia": "SA"
        }, {
            "comune": "Casalbuono",
            "provincia": "SA"
        }, {
            "comune": "Casaletto Spartano",
            "provincia": "SA"
        }, {
            "comune": "Casal Velino",
            "provincia": "SA"
        }, {
            "comune": "Caselle in Pittari",
            "provincia": "SA"
        }, {
            "comune": "Castelcivita",
            "provincia": "SA"
        }, {
            "comune": "Castellabate",
            "provincia": "SA"
        }, {
            "comune": "Castelnuovo Cilento",
            "provincia": "SA"
        }, {
            "comune": "Castelnuovo di Conza",
            "provincia": "SA"
        }, {
            "comune": "Castel San Giorgio",
            "provincia": "SA"
        }, {
            "comune": "Castel San Lorenzo",
            "provincia": "SA"
        }, {
            "comune": "Castiglione del Genovesi",
            "provincia": "SA"
        }, {
            "comune": "Cava de' Tirreni",
            "provincia": "SA"
        }, {
            "comune": "Celle di Bulgheria",
            "provincia": "SA"
        }, {
            "comune": "Centola",
            "provincia": "SA"
        }, {
            "comune": "Ceraso",
            "provincia": "SA"
        }, {
            "comune": "Cetara",
            "provincia": "SA"
        }, {
            "comune": "Cicerale",
            "provincia": "SA"
        }, {
            "comune": "Colliano",
            "provincia": "SA"
        }, {
            "comune": "Conca dei Marini",
            "provincia": "SA"
        }, {
            "comune": "Controne",
            "provincia": "SA"
        }, {
            "comune": "Contursi Terme",
            "provincia": "SA"
        }, {
            "comune": "Corbara",
            "provincia": "SA"
        }, {
            "comune": "Corleto Monforte",
            "provincia": "SA"
        }, {
            "comune": "Cuccaro Vetere",
            "provincia": "SA"
        }, {
            "comune": "Eboli",
            "provincia": "SA"
        }, {
            "comune": "Felitto",
            "provincia": "SA"
        }, {
            "comune": "Fisciano",
            "provincia": "SA"
        }, {
            "comune": "Furore",
            "provincia": "SA"
        }, {
            "comune": "Futani",
            "provincia": "SA"
        }, {
            "comune": "Giffoni Sei Casali",
            "provincia": "SA"
        }, {
            "comune": "Giffoni Valle Piana",
            "provincia": "SA"
        }, {
            "comune": "Gioi",
            "provincia": "SA"
        }, {
            "comune": "Giungano",
            "provincia": "SA"
        }, {
            "comune": "Ispani",
            "provincia": "SA"
        }, {
            "comune": "Laureana Cilento",
            "provincia": "SA"
        }, {
            "comune": "Laurino",
            "provincia": "SA"
        }, {
            "comune": "Laurito",
            "provincia": "SA"
        }, {
            "comune": "Laviano",
            "provincia": "SA"
        }, {
            "comune": "Lustra",
            "provincia": "SA"
        }, {
            "comune": "Magliano Vetere",
            "provincia": "SA"
        }, {
            "comune": "Maiori",
            "provincia": "SA"
        }, {
            "comune": "Mercato San Severino",
            "provincia": "SA"
        }, {
            "comune": "Minori",
            "provincia": "SA"
        }, {
            "comune": "Moio della Civitella",
            "provincia": "SA"
        }, {
            "comune": "Montano Antilia",
            "provincia": "SA"
        }, {
            "comune": "Montecorice",
            "provincia": "SA"
        }, {
            "comune": "Montecorvino Pugliano",
            "provincia": "SA"
        }, {
            "comune": "Montecorvino Rovella",
            "provincia": "SA"
        }, {
            "comune": "Monteforte Cilento",
            "provincia": "SA"
        }, {
            "comune": "Monte San Giacomo",
            "provincia": "SA"
        }, {
            "comune": "Montesano sulla Marcellana",
            "provincia": "SA"
        }, {
            "comune": "Morigerati",
            "provincia": "SA"
        }, {
            "comune": "Nocera Inferiore",
            "provincia": "SA"
        },

        {
            "comune": "Novi Velia",
            "provincia": "SA"
        }, {
            "comune": "Ogliastro Cilento",
            "provincia": "SA"
        }, {
            "comune": "Olevano sul Tusciano",
            "provincia": "SA"
        }, {
            "comune": "Oliveto Citra",
            "provincia": "SA"
        }, {
            "comune": "Omignano",
            "provincia": "SA"
        }, {
            "comune": "Orria",
            "provincia": "SA"
        }, {
            "comune": "Ottati",
            "provincia": "SA"
        }, {
            "comune": "Padula",
            "provincia": "SA"
        }, {
            "comune": "Pagani",
            "provincia": "SA"
        }, {
            "comune": "Palomonte",
            "provincia": "SA"
        }, {
            "comune": "Pellezzano",
            "provincia": "SA"
        }, {
            "comune": "Perdifumo",
            "provincia": "SA"
        }, {
            "comune": "Perito",
            "provincia": "SA"
        }, {
            "comune": "Pertosa",
            "provincia": "SA"
        }, {
            "comune": "Petina",
            "provincia": "SA"
        }, {
            "comune": "Piaggine",
            "provincia": "SA"
        }, {
            "comune": "Pisciotta",
            "provincia": "SA"
        }, {
            "comune": "Polla",
            "provincia": "SA"
        }, {
            "comune": "Pollica",
            "provincia": "SA"
        }, {
            "comune": "Pontecagnano Faiano",
            "provincia": "SA"
        }, {
            "comune": "Positano",
            "provincia": "SA"
        }, {
            "comune": "Postiglione",
            "provincia": "SA"
        }, {
            "comune": "Praiano",
            "provincia": "SA"
        }, {
            "comune": "Prignano Cilento",
            "provincia": "SA"
        }, {
            "comune": "Ravello",
            "provincia": "SA"
        }, {
            "comune": "Ricigliano",
            "provincia": "SA"
        }, {
            "comune": "Roccadaspide",
            "provincia": "SA"
        }, {
            "comune": "Roccagloriosa",
            "provincia": "SA"
        }, {
            "comune": "Roccapiemonte",
            "provincia": "SA"
        }, {
            "comune": "Rofrano",
            "provincia": "SA"
        }, {
            "comune": "Romagnano al Monte",
            "provincia": "SA"
        }, {
            "comune": "Roscigno",
            "provincia": "SA"
        }, {
            "comune": "Rutino",
            "provincia": "SA"
        }, {
            "comune": "Sacco",
            "provincia": "SA"
        }, {
            "comune": "Sala Consilina",
            "provincia": "SA"
        }, {
            "comune": "Salento",
            "provincia": "SA"
        }, {
            "comune": "Salerno",
            "provincia": "SA"
        }, {
            "comune": "Salvitelle",
            "provincia": "SA"
        }, {
            "comune": "San Cipriano Picentino",
            "provincia": "SA"
        }, {
            "comune": "San Giovanni a Piro",
            "provincia": "SA"
        }, {
            "comune": "San Gregorio Magno",
            "provincia": "SA"
        }, {
            "comune": "San Mango Piemonte",
            "provincia": "SA"
        }, {
            "comune": "San Marzano sul Sarno",
            "provincia": "SA"
        }, {
            "comune": "San Mauro Cilento",
            "provincia": "SA"
        }, {
            "comune": "San Mauro La Bruca",
            "provincia": "SA"
        }, {
            "comune": "San Pietro al Tanagro",
            "provincia": "SA"
        }, {
            "comune": "San Rufo",
            "provincia": "SA"
        }, {
            "comune": "Santa Marina",
            "provincia": "SA"
        }, {
            "comune": "Sant'Angelo a Fasanella",
            "provincia": "SA"
        }, {
            "comune": "Sant'Arsenio",
            "provincia": "SA"
        }, {
            "comune": "Sant'Egidio del Monte Albino",
            "provincia": "SA"
        }, {
            "comune": "Santomenna",
            "provincia": "SA"
        }, {
            "comune": "San Valentino Torio",
            "provincia": "SA"
        }, {
            "comune": "Sanza",
            "provincia": "SA"
        }, {
            "comune": "Sapri",
            "provincia": "SA"
        }, {
            "comune": "Sarno",
            "provincia": "SA"
        }, {
            "comune": "Sassano",
            "provincia": "SA"
        }, {
            "comune": "Scafati",
            "provincia": "SA"
        }, {
            "comune": "Scala",
            "provincia": "SA"
        }, {
            "comune": "Serramezzana",
            "provincia": "SA"
        }, {
            "comune": "Serre",
            "provincia": "SA"
        }, {
            "comune": "Sessa Cilento",
            "provincia": "SA"
        }, {
            "comune": "Siano",
            "provincia": "SA"
        }, {
            "comune": "Sicignano degli Alburni",
            "provincia": "SA"
        }, {
            "comune": "Stella Cilento",
            "provincia": "SA"
        }, {
            "comune": "Stio",
            "provincia": "SA"
        }, {
            "comune": "Teggiano",
            "provincia": "SA"
        }, {
            "comune": "Torchiara",
            "provincia": "SA"
        }, {
            "comune": "Torraca",
            "provincia": "SA"
        }, {
            "comune": "Torre Orsaia",
            "provincia": "SA"
        }, {
            "comune": "Tortorella",
            "provincia": "SA"
        }, {
            "comune": "Tramonti",
            "provincia": "SA"
        }, {
            "comune": "Trentinara",
            "provincia": "SA"
        }, {
            "comune": "Valle dell'Angelo",
            "provincia": "SA"
        }, {
            "comune": "Vallo della Lucania",
            "provincia": "SA"
        }, {
            "comune": "Valva",
            "provincia": "SA"
        }, {
            "comune": "Vibonati",
            "provincia": "SA"
        }, {
            "comune": "Vietri sul Mare",
            "provincia": "SA"
        }, {
            "comune": "Bellizzi",
            "provincia": "SA"
        }, {
            "comune": "Acciano",
            "provincia": "AQ"
        }, {
            "comune": "Aielli",
            "provincia": "AQ"
        }, {
            "comune": "Alfedena",
            "provincia": "AQ"
        }, {
            "comune": "Anversa degli Abruzzi",
            "provincia": "AQ"
        }, {
            "comune": "Ateleta",
            "provincia": "AQ"
        }, {
            "comune": "Avezzano",
            "provincia": "AQ"
        }, {
            "comune": "Balsorano",
            "provincia": "AQ"
        }, {
            "comune": "Barete",
            "provincia": "AQ"
        }, {
            "comune": "Barisciano",
            "provincia": "AQ"
        }, {
            "comune": "Barrea",
            "provincia": "AQ"
        }, {
            "comune": "Bisegna",
            "provincia": "AQ"
        }, {
            "comune": "Bugnara",
            "provincia": "AQ"
        }, {
            "comune": "Cagnano Amiterno",
            "provincia": "AQ"
        }, {
            "comune": "Calascio",
            "provincia": "AQ"
        }, {
            "comune": "Campo di Giove",
            "provincia": "AQ"
        }, {
            "comune": "Campotosto",
            "provincia": "AQ"
        }, {
            "comune": "Canistro",
            "provincia": "AQ"
        }, {
            "comune": "Cansano",
            "provincia": "AQ"
        }, {
            "comune": "Capestrano",
            "provincia": "AQ"
        }, {
            "comune": "Capistrello",
            "provincia": "AQ"
        }, {
            "comune": "Capitignano",
            "provincia": "AQ"
        }, {
            "comune": "Caporciano",
            "provincia": "AQ"
        }, {
            "comune": "Cappadocia",
            "provincia": "AQ"
        }, {
            "comune": "Carapelle Calvisio",
            "provincia": "AQ"
        }, {
            "comune": "Carsoli",
            "provincia": "AQ"
        }, {
            "comune": "Castel del Monte",
            "provincia": "AQ"
        }, {
            "comune": "Castel di Ieri",
            "provincia": "AQ"
        }, {
            "comune": "Castel di Sangro",
            "provincia": "AQ"
        }, {
            "comune": "Castellafiume",
            "provincia": "AQ"
        }, {
            "comune": "Castelvecchio Calvisio",
            "provincia": "AQ"
        }, {
            "comune": "Castelvecchio Subequo",
            "provincia": "AQ"
        }, {
            "comune": "Celano",
            "provincia": "AQ"
        }, {
            "comune": "Cerchio",
            "provincia": "AQ"
        }, {
            "comune": "Civita d'Antino",
            "provincia": "AQ"
        }, {
            "comune": "Civitella Alfedena",
            "provincia": "AQ"
        }, {
            "comune": "Civitella Roveto",
            "provincia": "AQ"
        }, {
            "comune": "Cocullo",
            "provincia": "AQ"
        }, {
            "comune": "Collarmele",
            "provincia": "AQ"
        }, {
            "comune": "Collelongo",
            "provincia": "AQ"
        }, {
            "comune": "Collepietro",
            "provincia": "AQ"
        }, {
            "comune": "Corfinio",
            "provincia": "AQ"
        }, {
            "comune": "Fagnano Alto",
            "provincia": "AQ"
        }, {
            "comune": "Fontecchio",
            "provincia": "AQ"
        }, {
            "comune": "Fossa",
            "provincia": "AQ"
        }, {
            "comune": "Gagliano Aterno",
            "provincia": "AQ"
        }, {
            "comune": "Gioia dei Marsi",
            "provincia": "AQ"
        }, {
            "comune": "Goriano Sicoli",
            "provincia": "AQ"
        }, {
            "comune": "Introdacqua",
            "provincia": "AQ"
        }, {
            "comune": "L'Aquila",
            "provincia": "AQ"
        }, {
            "comune": "Lecce nei Marsi",
            "provincia": "AQ"
        }, {
            "comune": "Luco dei Marsi",
            "provincia": "AQ"
        }, {
            "comune": "Lucoli",
            "provincia": "AQ"
        }, {
            "comune": "Magliano de' Marsi",
            "provincia": "AQ"
        }, {
            "comune": "Massa d'Albe",
            "provincia": "AQ"
        }, {
            "comune": "Molina Aterno",
            "provincia": "AQ"
        }, {
            "comune": "Montereale",
            "provincia": "AQ"
        }, {
            "comune": "Morino",
            "provincia": "AQ"
        }, {
            "comune": "Navelli",
            "provincia": "AQ"
        }, {
            "comune": "Ocre",
            "provincia": "AQ"
        }, {
            "comune": "Ofena",
            "provincia": "AQ"
        }, {
            "comune": "Opi",
            "provincia": "AQ"
        }, {
            "comune": "Oricola",
            "provincia": "AQ"
        }, {
            "comune": "Ortona dei Marsi",
            "provincia": "AQ"
        }, {
            "comune": "Ortucchio",
            "provincia": "AQ"
        }, {
            "comune": "Ovindoli",
            "provincia": "AQ"
        }, {
            "comune": "Pacentro",
            "provincia": "AQ"
        }, {
            "comune": "Pereto",
            "provincia": "AQ"
        }, {
            "comune": "Pescasseroli",
            "provincia": "AQ"
        }, {
            "comune": "Pescina",
            "provincia": "AQ"
        }, {
            "comune": "Pescocostanzo",
            "provincia": "AQ"
        }, {
            "comune": "Pettorano sul Gizio",
            "provincia": "AQ"
        }, {
            "comune": "Pizzoli",
            "provincia": "AQ"
        }, {
            "comune": "Poggio Picenze",
            "provincia": "AQ"
        }, {
            "comune": "Prata d'Ansidonia",
            "provincia": "AQ"
        }, {
            "comune": "Pratola Peligna",
            "provincia": "AQ"
        }, {
            "comune": "Prezza",
            "provincia": "AQ"
        }, {
            "comune": "Raiano",
            "provincia": "AQ"
        }, {
            "comune": "Rivisondoli",
            "provincia": "AQ"
        }, {
            "comune": "Roccacasale",
            "provincia": "AQ"
        }, {
            "comune": "Rocca di Botte",
            "provincia": "AQ"
        }, {
            "comune": "Rocca di Cambio",
            "provincia": "AQ"
        }, {
            "comune": "Rocca di Mezzo",
            "provincia": "AQ"
        }, {
            "comune": "Rocca Pia",
            "provincia": "AQ"
        }, {
            "comune": "Roccaraso",
            "provincia": "AQ"
        }, {
            "comune": "San Benedetto dei Marsi",
            "provincia": "AQ"
        }, {
            "comune": "San Benedetto in Perillis",
            "provincia": "AQ"
        }, {
            "comune": "San Demetrio ne' Vestini",
            "provincia": "AQ"
        }, {
            "comune": "San Pio delle Camere",
            "provincia": "AQ"
        }, {
            "comune": "Sante Marie",
            "provincia": "AQ"
        }, {
            "comune": "Sant'Eusanio Forconese",
            "provincia": "AQ"
        }, {
            "comune": "Santo Stefano di Sessanio",
            "provincia": "AQ"
        }, {
            "comune": "San Vincenzo Valle Roveto",
            "provincia": "AQ"
        }, {
            "comune": "Scanno",
            "provincia": "AQ"
        }, {
            "comune": "Scontrone",
            "provincia": "AQ"
        }, {
            "comune": "Scoppito",
            "provincia": "AQ"
        }, {
            "comune": "Scurcola Marsicana",
            "provincia": "AQ"
        }, {
            "comune": "Secinaro",
            "provincia": "AQ"
        }, {
            "comune": "Sulmona",
            "provincia": "AQ"
        }, {
            "comune": "Tagliacozzo",
            "provincia": "AQ"
        }, {
            "comune": "Tione degli Abruzzi",
            "provincia": "AQ"
        }, {
            "comune": "Tornimparte",
            "provincia": "AQ"
        }, {
            "comune": "Trasacco",
            "provincia": "AQ"
        }, {
            "comune": "Villalago",
            "provincia": "AQ"
        }, {
            "comune": "Villa Santa Lucia degli Abruzzi",
            "provincia": "AQ"
        }, {
            "comune": "Villa Sant'Angelo",
            "provincia": "AQ"
        }, {
            "comune": "Villavallelonga",
            "provincia": "AQ"
        }, {
            "comune": "Villetta Barrea",
            "provincia": "AQ"
        }, {
            "comune": "Vittorito",
            "provincia": "AQ"
        }, {
            "comune": "Alba Adriatica",
            "provincia": "TE"
        }, {
            "comune": "Ancarano",
            "provincia": "TE"
        }, {
            "comune": "Arsita",
            "provincia": "TE"
        }, {
            "comune": "Atri",
            "provincia": "TE"
        }, {
            "comune": "Basciano",
            "provincia": "TE"
        }, {
            "comune": "Bellante",
            "provincia": "TE"
        }, {
            "comune": "Bisenti",
            "provincia": "TE"
        }, {
            "comune": "Campli",
            "provincia": "TE"
        }, {
            "comune": "Canzano",
            "provincia": "TE"
        }, {
            "comune": "Castel Castagna",
            "provincia": "TE"
        }, {
            "comune": "Castellalto",
            "provincia": "TE"
        }, {
            "comune": "Castelli",
            "provincia": "TE"
        }, {
            "comune": "Castiglione Messer Raimondo",
            "provincia": "TE"
        }, {
            "comune": "Castilenti",
            "provincia": "TE"
        }, {
            "comune": "Cellino Attanasio",
            "provincia": "TE"
        }, {
            "comune": "Cermignano",
            "provincia": "TE"
        }, {
            "comune": "Civitella del Tronto",
            "provincia": "TE"
        }, {
            "comune": "Colledara",
            "provincia": "TE"
        }, {
            "comune": "Colonnella",
            "provincia": "TE"
        }, {
            "comune": "Controguerra",
            "provincia": "TE"
        }, {
            "comune": "Corropoli",
            "provincia": "TE"
        }, {
            "comune": "Cortino",
            "provincia": "TE"
        }, {
            "comune": "Crognaleto",
            "provincia": "TE"
        }, {
            "comune": "Fano Adriano",
            "provincia": "TE"
        }, {
            "comune": "Giulianova",
            "provincia": "TE"
        }, {
            "comune": "Isola del Gran Sasso d'Italia",
            "provincia": "TE"
        }, {
            "comune": "Montefino",
            "provincia": "TE"
        }, {
            "comune": "Montorio al Vomano",
            "provincia": "TE"
        }, {
            "comune": "Morro d'Oro",
            "provincia": "TE"
        }, {
            "comune": "Mosciano Sant'Angelo",
            "provincia": "TE"
        }, {
            "comune": "Nereto",
            "provincia": "TE"
        }, {
            "comune": "Notaresco",
            "provincia": "TE"
        }, {
            "comune": "Penna Sant'Andrea",
            "provincia": "TE"
        }, {
            "comune": "Pietracamela",
            "provincia": "TE"
        }, {
            "comune": "Pineto",
            "provincia": "TE"
        }, {
            "comune": "Rocca Santa Maria",
            "provincia": "TE"
        }, {
            "comune": "Roseto degli Abruzzi",
            "provincia": "TE"
        }, {
            "comune": "Sant'Egidio alla Vibrata",
            "provincia": "TE"
        }, {
            "comune": "Sant'Omero",
            "provincia": "TE"
        }, {
            "comune": "Silvi",
            "provincia": "TE"
        }, {
            "comune": "Teramo",
            "provincia": "TE"
        }, {
            "comune": "Torano Nuovo",
            "provincia": "TE"
        }, {
            "comune": "Torricella Sicura",
            "provincia": "TE"
        }, {
            "comune": "Tortoreto",
            "provincia": "TE"
        }, {
            "comune": "Tossicia",
            "provincia": "TE"
        }, {
            "comune": "Valle Castellana",
            "provincia": "TE"
        }, {
            "comune": "Martinsicuro",
            "provincia": "TE"
        }, {
            "comune": "Abbateggio",
            "provincia": "PE"
        }, {
            "comune": "Alanno",
            "provincia": "PE"
        }, {
            "comune": "Bolognano",
            "provincia": "PE"
        }, {
            "comune": "Brittoli",
            "provincia": "PE"
        }, {
            "comune": "Bussi sul Tirino",
            "provincia": "PE"
        }, {
            "comune": "Cappelle sul Tavo",
            "provincia": "PE"
        }, {
            "comune": "Caramanico Terme",
            "provincia": "PE"
        }, {
            "comune": "Carpineto della Nora",
            "provincia": "PE"
        }, {
            "comune": "Castiglione a Casauria",
            "provincia": "PE"
        }, {
            "comune": "Catignano",
            "provincia": "PE"
        }, {
            "comune": "Cepagatti",
            "provincia": "PE"
        }, {
            "comune": "Città Sant'Angelo",
            "provincia": "PE"
        }, {
            "comune": "Civitaquana",
            "provincia": "PE"
        }, {
            "comune": "Civitella Casanova",
            "provincia": "PE"
        }, {
            "comune": "Collecorvino",
            "provincia": "PE"
        }, {
            "comune": "Corvara",
            "provincia": "PE"
        }, {
            "comune": "Cugnoli",
            "provincia": "PE"
        }, {
            "comune": "Elice",
            "provincia": "PE"
        }, {
            "comune": "Farindola",
            "provincia": "PE"
        }, {
            "comune": "Lettomanoppello",
            "provincia": "PE"
        }, {
            "comune": "Loreto Aprutino",
            "provincia": "PE"
        }, {
            "comune": "Manoppello",
            "provincia": "PE"
        }, {
            "comune": "Montebello di Bertona",
            "provincia": "PE"
        }, {
            "comune": "Montesilvano",
            "provincia": "PE"
        }, {
            "comune": "Moscufo",
            "provincia": "PE"
        }, {
            "comune": "Nocciano",
            "provincia": "PE"
        }, {
            "comune": "Penne",
            "provincia": "PE"
        }, {
            "comune": "Pescara",
            "provincia": "PE"
        }, {
            "comune": "Pescosansonesco",
            "provincia": "PE"
        }, {
            "comune": "Pianella",
            "provincia": "PE"
        }, {
            "comune": "Picciano",
            "provincia": "PE"
        }, {
            "comune": "Pietranico",
            "provincia": "PE"
        }, {
            "comune": "Popoli",
            "provincia": "PE"
        }, {
            "comune": "Roccamorice",
            "provincia": "PE"
        }, {
            "comune": "Rosciano",
            "provincia": "PE"
        }, {
            "comune": "Salle",
            "provincia": "PE"
        }, {
            "comune": "Sant'Eufemia a Maiella",
            "provincia": "PE"
        }, {
            "comune": "San Valentino in Abruzzo Citeriore",
            "provincia": "PE"
        }, {
            "comune": "Scafa",
            "provincia": "PE"
        }, {
            "comune": "Serramonacesca",
            "provincia": "PE"
        }, {
            "comune": "Spoltore",
            "provincia": "PE"
        }, {
            "comune": "Tocco da Casauria",
            "provincia": "PE"
        }, {
            "comune": "Torre De' Passeri",
            "provincia": "PE"
        }, {
            "comune": "Turrivalignani",
            "provincia": "PE"
        }, {
            "comune": "Vicoli",
            "provincia": "PE"
        }, {
            "comune": "Villa Celiera",
            "provincia": "PE"
        }, {
            "comune": "Altino",
            "provincia": "CH"
        }, {
            "comune": "Archi",
            "provincia": "CH"
        }, {
            "comune": "Ari",
            "provincia": "CH"
        }, {
            "comune": "Arielli",
            "provincia": "CH"
        }, {
            "comune": "Atessa",
            "provincia": "CH"
        }, {
            "comune": "Bomba",
            "provincia": "CH"
        }, {
            "comune": "Borrello",
            "provincia": "CH"
        }, {
            "comune": "Bucchianico",
            "provincia": "CH"
        }, {
            "comune": "Montebello sul Sangro",
            "provincia": "CH"
        }, {
            "comune": "Canosa Sannita",
            "provincia": "CH"
        }, {
            "comune": "Carpineto Sinello",
            "provincia": "CH"
        }, {
            "comune": "Carunchio",
            "provincia": "CH"
        }, {
            "comune": "Casacanditella",
            "provincia": "CH"
        }, {
            "comune": "Casalanguida",
            "provincia": "CH"
        }, {
            "comune": "Casalbordino",
            "provincia": "CH"
        }, {
            "comune": "Casalincontrada",
            "provincia": "CH"
        }, {
            "comune": "Casoli",
            "provincia": "CH"
        }, {
            "comune": "Castel Frentano",
            "provincia": "CH"
        }, {
            "comune": "Castelguidone",
            "provincia": "CH"
        }, {
            "comune": "Castiglione Messer Marino",
            "provincia": "CH"
        }, {
            "comune": "Celenza sul Trigno",
            "provincia": "CH"
        }, {
            "comune": "Chieti",
            "provincia": "CH"
        }, {
            "comune": "Civitaluparella",
            "provincia": "CH"
        }, {
            "comune": "Civitella Messer Raimondo",
            "provincia": "CH"
        }, {
            "comune": "Colledimacine",
            "provincia": "CH"
        }, {
            "comune": "Colledimezzo",
            "provincia": "CH"
        }, {
            "comune": "Crecchio",
            "provincia": "CH"
        }, {
            "comune": "Cupello",
            "provincia": "CH"
        }, {
            "comune": "Dogliola",
            "provincia": "CH"
        }, {
            "comune": "Fara Filiorum Petri",
            "provincia": "CH"
        }, {
            "comune": "Fara San Martino",
            "provincia": "CH"
        }, {
            "comune": "Filetto",
            "provincia": "CH"
        }, {
            "comune": "Fossacesia",
            "provincia": "CH"
        }, {
            "comune": "Fraine",
            "provincia": "CH"
        }, {
            "comune": "Francavilla al Mare",
            "provincia": "CH"
        }, {
            "comune": "Fresagrandinaria",
            "provincia": "CH"
        }, {
            "comune": "Frisa",
            "provincia": "CH"
        }, {
            "comune": "Furci",
            "provincia": "CH"
        }, {
            "comune": "Gamberale",
            "provincia": "CH"
        }, {
            "comune": "Gessopalena",
            "provincia": "CH"
        }, {
            "comune": "Gissi",
            "provincia": "CH"
        }, {
            "comune": "Giuliano Teatino",
            "provincia": "CH"
        }, {
            "comune": "Guardiagrele",
            "provincia": "CH"
        }, {
            "comune": "Guilmi",
            "provincia": "CH"
        }, {
            "comune": "Lama dei Peligni",
            "provincia": "CH"
        }, {
            "comune": "Lanciano",
            "provincia": "CH"
        }, {
            "comune": "Lentella",
            "provincia": "CH"
        }, {
            "comune": "Lettopalena",
            "provincia": "CH"
        }, {
            "comune": "Liscia",
            "provincia": "CH"
        }, {
            "comune": "Miglianico",
            "provincia": "CH"
        }, {
            "comune": "Montazzoli",
            "provincia": "CH"
        }, {
            "comune": "Monteferrante",
            "provincia": "CH"
        }, {
            "comune": "Montelapiano",
            "provincia": "CH"
        }, {
            "comune": "Montenerodomo",
            "provincia": "CH"
        }, {
            "comune": "Monteodorisio",
            "provincia": "CH"
        }, {
            "comune": "Mozzagrogna",
            "provincia": "CH"
        }, {
            "comune": "Orsogna",
            "provincia": "CH"
        }, {
            "comune": "Ortona",
            "provincia": "CH"
        }, {
            "comune": "Paglieta",
            "provincia": "CH"
        }, {
            "comune": "Palena",
            "provincia": "CH"
        }, {
            "comune": "Palmoli",
            "provincia": "CH"
        }, {
            "comune": "Palombaro",
            "provincia": "CH"
        }, {
            "comune": "Pennadomo",
            "provincia": "CH"
        }, {
            "comune": "Pennapiedimonte",
            "provincia": "CH"
        }, {
            "comune": "Perano",
            "provincia": "CH"
        }, {
            "comune": "Pizzoferrato",
            "provincia": "CH"
        }, {
            "comune": "Poggiofiorito",
            "provincia": "CH"
        }, {
            "comune": "Pollutri",
            "provincia": "CH"
        }, {
            "comune": "Pretoro",
            "provincia": "CH"
        }, {
            "comune": "Quadri",
            "provincia": "CH"
        }, {
            "comune": "Rapino",
            "provincia": "CH"
        }, {
            "comune": "Ripa Teatina",
            "provincia": "CH"
        }, {
            "comune": "Roccamontepiano",
            "provincia": "CH"
        }, {
            "comune": "Rocca San Giovanni",
            "provincia": "CH"
        }, {
            "comune": "Roccascalegna",
            "provincia": "CH"
        }, {
            "comune": "Roccaspinalveti",
            "provincia": "CH"
        }, {
            "comune": "Roio del Sangro",
            "provincia": "CH"
        }, {
            "comune": "Rosello",
            "provincia": "CH"
        }, {
            "comune": "San Buono",
            "provincia": "CH"
        }, {
            "comune": "San Giovanni Lipioni",
            "provincia": "CH"
        }, {
            "comune": "San Giovanni Teatino",
            "provincia": "CH"
        }, {
            "comune": "San Martino sulla Marrucina",
            "provincia": "CH"
        }, {
            "comune": "San Salvo",
            "provincia": "CH"
        }, {
            "comune": "Santa Maria Imbaro",
            "provincia": "CH"
        }, {
            "comune": "Sant'Eusanio del Sangro",
            "provincia": "CH"
        }, {
            "comune": "San Vito Chietino",
            "provincia": "CH"
        }, {
            "comune": "Scerni",
            "provincia": "CH"
        }, {
            "comune": "Schiavi di Abruzzo",
            "provincia": "CH"
        }, {
            "comune": "Taranta Peligna",
            "provincia": "CH"
        }, {
            "comune": "Tollo",
            "provincia": "CH"
        }, {
            "comune": "Torino di Sangro",
            "provincia": "CH"
        }, {
            "comune": "Tornareccio",
            "provincia": "CH"
        }, {
            "comune": "Torrebruna",
            "provincia": "CH"
        }, {
            "comune": "Torrevecchia Teatina",
            "provincia": "CH"
        }, {
            "comune": "Torricella Peligna",
            "provincia": "CH"
        }, {
            "comune": "Treglio",
            "provincia": "CH"
        }, {
            "comune": "Tufillo",
            "provincia": "CH"
        }, {
            "comune": "Vacri",
            "provincia": "CH"
        }, {
            "comune": "Vasto",
            "provincia": "CH"
        }, {
            "comune": "Villalfonsina",
            "provincia": "CH"
        }, {
            "comune": "Villamagna",
            "provincia": "CH"
        }, {
            "comune": "Villa Santa Maria",
            "provincia": "CH"
        }, {
            "comune": "Pietraferrazzana",
            "provincia": "CH"
        }, {
            "comune": "Fallo",
            "provincia": "CH"
        }, {
            "comune": "Acquaviva Collecroce",
            "provincia": "CB"
        }, {
            "comune": "Baranello",
            "provincia": "CB"
        }, {
            "comune": "Bojano",
            "provincia": "CB"
        }, {
            "comune": "Bonefro",
            "provincia": "CB"
        }, {
            "comune": "Busso",
            "provincia": "CB"
        }, {
            "comune": "Campobasso",
            "provincia": "CB"
        }, {
            "comune": "Campochiaro",
            "provincia": "CB"
        }, {
            "comune": "Campodipietra",
            "provincia": "CB"
        }, {
            "comune": "Campolieto",
            "provincia": "CB"
        }, {
            "comune": "Campomarino",
            "provincia": "CB"
        }, {
            "comune": "Casacalenda",
            "provincia": "CB"
        }, {
            "comune": "Casalciprano",
            "provincia": "CB"
        }, {
            "comune": "Castelbottaccio",
            "provincia": "CB"
        }, {
            "comune": "Castellino del Biferno",
            "provincia": "CB"
        }, {
            "comune": "Castelmauro",
            "provincia": "CB"
        }, {
            "comune": "Castropignano",
            "provincia": "CB"
        }, {
            "comune": "Cercemaggiore",
            "provincia": "CB"
        }, {
            "comune": "Cercepiccola",
            "provincia": "CB"
        }, {
            "comune": "Civitacampomarano",
            "provincia": "CB"
        }, {
            "comune": "Colle d'Anchise",
            "provincia": "CB"
        }, {
            "comune": "Colletorto",
            "provincia": "CB"
        }, {
            "comune": "Duronia",
            "provincia": "CB"
        }, {
            "comune": "Ferrazzano",
            "provincia": "CB"
        }, {
            "comune": "Fossalto",
            "provincia": "CB"
        }, {
            "comune": "Gambatesa",
            "provincia": "CB"
        }, {
            "comune": "Gildone",
            "provincia": "CB"
        }, {
            "comune": "Guardialfiera",
            "provincia": "CB"
        }, {
            "comune": "Guardiaregia",
            "provincia": "CB"
        }, {
            "comune": "Guglionesi",
            "provincia": "CB"
        }, {
            "comune": "Jelsi",
            "provincia": "CB"
        }, {
            "comune": "Larino",
            "provincia": "CB"
        }, {
            "comune": "Limosano",
            "provincia": "CB"
        }, {
            "comune": "Lucito",
            "provincia": "CB"
        }, {
            "comune": "Lupara",
            "provincia": "CB"
        }, {
            "comune": "Macchia Valfortore",
            "provincia": "CB"
        }, {
            "comune": "Mafalda",
            "provincia": "CB"
        }, {
            "comune": "Matrice",
            "provincia": "CB"
        }, {
            "comune": "Mirabello Sannitico",
            "provincia": "CB"
        }, {
            "comune": "Molise",
            "provincia": "CB"
        }, {
            "comune": "Monacilioni",
            "provincia": "CB"
        }, {
            "comune": "Montagano",
            "provincia": "CB"
        }, {
            "comune": "Montecilfone",
            "provincia": "CB"
        }, {
            "comune": "Montefalcone nel Sannio",
            "provincia": "CB"
        }, {
            "comune": "Montelongo",
            "provincia": "CB"
        }, {
            "comune": "Montemitro",
            "provincia": "CB"
        }, {
            "comune": "Montenero di Bisaccia",
            "provincia": "CB"
        }, {
            "comune": "Montorio nei Frentani",
            "provincia": "CB"
        }, {
            "comune": "Morrone del Sannio",
            "provincia": "CB"
        }, {
            "comune": "Oratino",
            "provincia": "CB"
        }, {
            "comune": "Palata",
            "provincia": "CB"
        }, {
            "comune": "Petacciato",
            "provincia": "CB"
        }, {
            "comune": "Petrella Tifernina",
            "provincia": "CB"
        }, {
            "comune": "Pietracatella",
            "provincia": "CB"
        }, {
            "comune": "Pietracupa",
            "provincia": "CB"
        }, {
            "comune": "Portocannone",
            "provincia": "CB"
        }, {
            "comune": "Provvidenti",
            "provincia": "CB"
        }, {
            "comune": "Riccia",
            "provincia": "CB"
        }, {
            "comune": "Ripabottoni",
            "provincia": "CB"
        }, {
            "comune": "Ripalimosani",
            "provincia": "CB"
        }, {
            "comune": "Roccavivara",
            "provincia": "CB"
        }, {
            "comune": "Rotello",
            "provincia": "CB"
        }, {
            "comune": "Salcito",
            "provincia": "CB"
        }, {
            "comune": "San Biase",
            "provincia": "CB"
        }, {
            "comune": "San Felice del Molise",
            "provincia": "CB"
        }, {
            "comune": "San Giacomo degli Schiavoni",
            "provincia": "CB"
        }, {
            "comune": "San Giovanni in Galdo",
            "provincia": "CB"
        }, {
            "comune": "San Giuliano del Sannio",
            "provincia": "CB"
        }, {
            "comune": "San Giuliano di Puglia",
            "provincia": "CB"
        }, {
            "comune": "San Martino in Pensilis",
            "provincia": "CB"
        }, {
            "comune": "San Massimo",
            "provincia": "CB"
        }, {
            "comune": "San Polo Matese",
            "provincia": "CB"
        }, {
            "comune": "Santa Croce di Magliano",
            "provincia": "CB"
        }, {
            "comune": "Sant'Angelo Limosano",
            "provincia": "CB"
        }, {
            "comune": "Sant'Elia a Pianisi",
            "provincia": "CB"
        }, {
            "comune": "Sepino",
            "provincia": "CB"
        }, {
            "comune": "Spinete",
            "provincia": "CB"
        }, {
            "comune": "Tavenna",
            "provincia": "CB"
        }, {
            "comune": "Termoli",
            "provincia": "CB"
        }, {
            "comune": "Torella del Sannio",
            "provincia": "CB"
        }, {
            "comune": "Toro",
            "provincia": "CB"
        }, {
            "comune": "Trivento",
            "provincia": "CB"
        }, {
            "comune": "Tufara",
            "provincia": "CB"
        }, {
            "comune": "Ururi",
            "provincia": "CB"
        }, {
            "comune": "Vinchiaturo",
            "provincia": "CB"
        }, {
            "comune": "Accadia",
            "provincia": "FG"
        }, {
            "comune": "Alberona",
            "provincia": "FG"
        }, {
            "comune": "Anzano di Puglia",
            "provincia": "FG"
        }, {
            "comune": "Apricena",
            "provincia": "FG"
        }, {
            "comune": "Ascoli Satriano",
            "provincia": "FG"
        }, {
            "comune": "Biccari",
            "provincia": "FG"
        }, {
            "comune": "Bovino",
            "provincia": "FG"
        }, {
            "comune": "Cagnano Varano",
            "provincia": "FG"
        }, {
            "comune": "Candela",
            "provincia": "FG"
        }, {
            "comune": "Carapelle",
            "provincia": "FG"
        }, {
            "comune": "Carlantino",
            "provincia": "FG"
        }, {
            "comune": "Carpino",
            "provincia": "FG"
        }, {
            "comune": "Casalnuovo Monterotaro",
            "provincia": "FG"
        }, {
            "comune": "Casalvecchio di Puglia",
            "provincia": "FG"
        }, {
            "comune": "Castelluccio dei Sauri",
            "provincia": "FG"
        }, {
            "comune": "Castelluccio Valmaggiore",
            "provincia": "FG"
        }, {
            "comune": "Castelnuovo della Daunia",
            "provincia": "FG"
        }, {
            "comune": "Celenza Valfortore",
            "provincia": "FG"
        }, {
            "comune": "Celle di San Vito",
            "provincia": "FG"
        }, {
            "comune": "Cerignola",
            "provincia": "FG"
        }, {
            "comune": "Chieuti",
            "provincia": "FG"
        }, {
            "comune": "Deliceto",
            "provincia": "FG"
        }, {
            "comune": "Faeto",
            "provincia": "FG"
        }, {
            "comune": "Foggia",
            "provincia": "FG"
        }, {
            "comune": "Ischitella",
            "provincia": "FG"
        }, {
            "comune": "Isole Tremiti",
            "provincia": "FG"
        }, {
            "comune": "Lesina",
            "provincia": "FG"
        }, {
            "comune": "Lucera",
            "provincia": "FG"
        }, {
            "comune": "Manfredonia",
            "provincia": "FG"
        }, {
            "comune": "Mattinata",
            "provincia": "FG"
        }, {
            "comune": "Monteleone di Puglia",
            "provincia": "FG"
        }, {
            "comune": "Monte Sant'Angelo",
            "provincia": "FG"
        }, {
            "comune": "Motta Montecorvino",
            "provincia": "FG"
        }, {
            "comune": "Orsara di Puglia",
            "provincia": "FG"
        }, {
            "comune": "Orta Nova",
            "provincia": "FG"
        }, {
            "comune": "Panni",
            "provincia": "FG"
        }, {
            "comune": "Peschici",
            "provincia": "FG"
        }, {
            "comune": "Pietramontecorvino",
            "provincia": "FG"
        }, {
            "comune": "Poggio Imperiale",
            "provincia": "FG"
        }, {
            "comune": "Rignano Garganico",
            "provincia": "FG"
        }, {
            "comune": "Rocchetta Sant'Antonio",
            "provincia": "FG"
        }, {
            "comune": "Rodi Garganico",
            "provincia": "FG"
        }, {
            "comune": "Roseto Valfortore",
            "provincia": "FG"
        }, {
            "comune": "San Giovanni Rotondo",
            "provincia": "FG"
        }, {
            "comune": "San Marco in Lamis",
            "provincia": "FG"
        }, {
            "comune": "San Marco la Catola",
            "provincia": "FG"
        }, {
            "comune": "San Nicandro Garganico",
            "provincia": "FG"
        }, {
            "comune": "San Paolo di Civitate",
            "provincia": "FG"
        }, {
            "comune": "San Severo",
            "provincia": "FG"
        }, {
            "comune": "Sant'Agata di Puglia",
            "provincia": "FG"
        }, {
            "comune": "Serracapriola",
            "provincia": "FG"
        }, {
            "comune": "Stornara",
            "provincia": "FG"
        }, {
            "comune": "Stornarella",
            "provincia": "FG"
        }, {
            "comune": "Torremaggiore",
            "provincia": "FG"
        }, {
            "comune": "Troia",
            "provincia": "FG"
        }, {
            "comune": "Vico del Gargano",
            "provincia": "FG"
        }, {
            "comune": "Vieste",
            "provincia": "FG"
        }, {
            "comune": "Volturara Appula",
            "provincia": "FG"
        }, {
            "comune": "Volturino",
            "provincia": "FG"
        }, {
            "comune": "Ordona",
            "provincia": "FG"
        }, {
            "comune": "Zapponeta",
            "provincia": "FG"
        }, {
            "comune": "Acquaviva delle Fonti",
            "provincia": "BA"
        }, {
            "comune": "Adelfia",
            "provincia": "BA"
        }, {
            "comune": "Alberobello",
            "provincia": "BA"
        }, {
            "comune": "Altamura",
            "provincia": "BA"
        }, {
            "comune": "Bari",
            "provincia": "BA"
        }, {
            "comune": "Binetto",
            "provincia": "BA"
        }, {
            "comune": "Bitetto",
            "provincia": "BA"
        }, {
            "comune": "Bitonto",
            "provincia": "BA"
        }, {
            "comune": "Bitritto",
            "provincia": "BA"
        }, {
            "comune": "Capurso",
            "provincia": "BA"
        }, {
            "comune": "Casamassima",
            "provincia": "BA"
        }, {
            "comune": "Cassano delle Murge",
            "provincia": "BA"
        }, {
            "comune": "Castellana Grotte",
            "provincia": "BA"
        }, {
            "comune": "Cellamare",
            "provincia": "BA"
        }, {
            "comune": "Conversano",
            "provincia": "BA"
        }, {
            "comune": "Corato",
            "provincia": "BA"
        }, {
            "comune": "Gioia del Colle",
            "provincia": "BA"
        }, {
            "comune": "Giovinazzo",
            "provincia": "BA"
        }, {
            "comune": "Gravina in Puglia",
            "provincia": "BA"
        }, {
            "comune": "Grumo Appula",
            "provincia": "BA"
        }, {
            "comune": "Locorotondo",
            "provincia": "BA"
        }, {
            "comune": "Modugno",
            "provincia": "BA"
        }, {
            "comune": "Mola di Bari",
            "provincia": "BA"
        }, {
            "comune": "Molfetta",
            "provincia": "BA"
        }, {
            "comune": "Monopoli",
            "provincia": "BA"
        }, {
            "comune": "Noci",
            "provincia": "BA"
        }, {
            "comune": "Noicàttaro",
            "provincia": "BA"
        }, {
            "comune": "Palo del Colle",
            "provincia": "BA"
        }, {
            "comune": "Poggiorsini",
            "provincia": "BA"
        }, {
            "comune": "Polignano a Mare",
            "provincia": "BA"
        }, {
            "comune": "Putignano",
            "provincia": "BA"
        }, {
            "comune": "Rutigliano",
            "provincia": "BA"
        }, {
            "comune": "Ruvo di Puglia",
            "provincia": "BA"
        }, {
            "comune": "Sammichele di Bari",
            "provincia": "BA"
        }, {
            "comune": "Sannicandro di Bari",
            "provincia": "BA"
        }, {
            "comune": "Santeramo in Colle",
            "provincia": "BA"
        }, {
            "comune": "Terlizzi",
            "provincia": "BA"
        }, {
            "comune": "Toritto",
            "provincia": "BA"
        }, {
            "comune": "Triggiano",
            "provincia": "BA"
        }, {
            "comune": "Turi",
            "provincia": "BA"
        }, {
            "comune": "Valenzano",
            "provincia": "BA"
        }, {
            "comune": "Avetrana",
            "provincia": "TA"
        }, {
            "comune": "Carosino",
            "provincia": "TA"
        }, {
            "comune": "Castellaneta",
            "provincia": "TA"
        }, {
            "comune": "Crispiano",
            "provincia": "TA"
        }, {
            "comune": "Faggiano",
            "provincia": "TA"
        }, {
            "comune": "Fragagnano",
            "provincia": "TA"
        }, {
            "comune": "Ginosa",
            "provincia": "TA"
        }, {
            "comune": "Grottaglie",
            "provincia": "TA"
        }, {
            "comune": "Laterza",
            "provincia": "TA"
        }, {
            "comune": "Leporano",
            "provincia": "TA"
        }, {
            "comune": "Lizzano",
            "provincia": "TA"
        }, {
            "comune": "Manduria",
            "provincia": "TA"
        }, {
            "comune": "Martina Franca",
            "provincia": "TA"
        }, {
            "comune": "Maruggio",
            "provincia": "TA"
        }, {
            "comune": "Massafra",
            "provincia": "TA"
        }, {
            "comune": "Monteiasi",
            "provincia": "TA"
        }, {
            "comune": "Montemesola",
            "provincia": "TA"
        }, {
            "comune": "Monteparano",
            "provincia": "TA"
        }, {
            "comune": "Mottola",
            "provincia": "TA"
        }, {
            "comune": "Palagianello",
            "provincia": "TA"
        }, {
            "comune": "Palagiano",
            "provincia": "TA"
        }, {
            "comune": "Pulsano",
            "provincia": "TA"
        }, {
            "comune": "Roccaforzata",
            "provincia": "TA"
        }, {
            "comune": "San Giorgio Ionico",
            "provincia": "TA"
        }, {
            "comune": "San Marzano di San Giuseppe",
            "provincia": "TA"
        }, {
            "comune": "Sava",
            "provincia": "TA"
        }, {
            "comune": "Taranto",
            "provincia": "TA"
        }, {
            "comune": "Torricella",
            "provincia": "TA"
        }, {
            "comune": "Statte",
            "provincia": "TA"
        }, {
            "comune": "Brindisi",
            "provincia": "BR"
        }, {
            "comune": "Carovigno",
            "provincia": "BR"
        }, {
            "comune": "Ceglie Messapica",
            "provincia": "BR"
        }, {
            "comune": "Cellino San Marco",
            "provincia": "BR"
        }, {
            "comune": "Cisternino",
            "provincia": "BR"
        }, {
            "comune": "Erchie",
            "provincia": "BR"
        }, {
            "comune": "Fasano",
            "provincia": "BR"
        }, {
            "comune": "Francavilla Fontana",
            "provincia": "BR"
        }, {
            "comune": "Latiano",
            "provincia": "BR"
        }, {
            "comune": "Mesagne",
            "provincia": "BR"
        }, {
            "comune": "Oria",
            "provincia": "BR"
        }, {
            "comune": "Ostuni",
            "provincia": "BR"
        }, {
            "comune": "San Donaci",
            "provincia": "BR"
        }, {
            "comune": "San Michele Salentino",
            "provincia": "BR"
        }, {
            "comune": "San Pancrazio Salentino",
            "provincia": "BR"
        }, {
            "comune": "San Pietro Vernotico",
            "provincia": "BR"
        }, {
            "comune": "San Vito dei Normanni",
            "provincia": "BR"
        }, {
            "comune": "Torchiarolo",
            "provincia": "BR"
        }, {
            "comune": "Torre Santa Susanna",
            "provincia": "BR"
        }, {
            "comune": "Villa Castelli",
            "provincia": "BR"
        }, {
            "comune": "Acquarica del Capo",
            "provincia": "LE"
        }, {
            "comune": "Alessano",
            "provincia": "LE"
        }, {
            "comune": "Alezio",
            "provincia": "LE"
        }, {
            "comune": "Alliste",
            "provincia": "LE"
        }, {
            "comune": "Andrano",
            "provincia": "LE"
        }, {
            "comune": "Aradeo",
            "provincia": "LE"
        }, {
            "comune": "Arnesano",
            "provincia": "LE"
        }, {
            "comune": "Bagnolo del Salento",
            "provincia": "LE"
        }, {
            "comune": "Botrugno",
            "provincia": "LE"
        }, {
            "comune": "Calimera",
            "provincia": "LE"
        }, {
            "comune": "Campi Salentina",
            "provincia": "LE"
        }, {
            "comune": "Cannole",
            "provincia": "LE"
        }, {
            "comune": "Caprarica di Lecce",
            "provincia": "LE"
        }, {
            "comune": "Carmiano",
            "provincia": "LE"
        }, {
            "comune": "Carpignano Salentino",
            "provincia": "LE"
        }, {
            "comune": "Casarano",
            "provincia": "LE"
        }, {
            "comune": "Castri di Lecce",
            "provincia": "LE"
        }, {
            "comune": "Castrignano de' Greci",
            "provincia": "LE"
        }, {
            "comune": "Castrignano del Capo",
            "provincia": "LE"
        }, {
            "comune": "Cavallino",
            "provincia": "LE"
        }, {
            "comune": "Collepasso",
            "provincia": "LE"
        }, {
            "comune": "Copertino",
            "provincia": "LE"
        }, {
            "comune": "Corigliano d'Otranto",
            "provincia": "LE"
        }, {
            "comune": "Corsano",
            "provincia": "LE"
        }, {
            "comune": "Cursi",
            "provincia": "LE"
        }, {
            "comune": "Cutrofiano",
            "provincia": "LE"
        }, {
            "comune": "Diso",
            "provincia": "LE"
        }, {
            "comune": "Gagliano del Capo",
            "provincia": "LE"
        }, {
            "comune": "Galatina",
            "provincia": "LE"
        }, {
            "comune": "Galatone",
            "provincia": "LE"
        }, {
            "comune": "Gallipoli",
            "provincia": "LE"
        }, {
            "comune": "Giuggianello",
            "provincia": "LE"
        }, {
            "comune": "Giurdignano",
            "provincia": "LE"
        }, {
            "comune": "Guagnano",
            "provincia": "LE"
        }, {
            "comune": "Lecce",
            "provincia": "LE"
        }, {
            "comune": "Lequile",
            "provincia": "LE"
        }, {
            "comune": "Leverano",
            "provincia": "LE"
        }, {
            "comune": "Lizzanello",
            "provincia": "LE"
        }, {
            "comune": "Maglie",
            "provincia": "LE"
        }, {
            "comune": "Martano",
            "provincia": "LE"
        }, {
            "comune": "Martignano",
            "provincia": "LE"
        }, {
            "comune": "Matino",
            "provincia": "LE"
        }, {
            "comune": "Melendugno",
            "provincia": "LE"
        }, {
            "comune": "Melissano",
            "provincia": "LE"
        }, {
            "comune": "Melpignano",
            "provincia": "LE"
        }, {
            "comune": "Miggiano",
            "provincia": "LE"
        }, {
            "comune": "Minervino di Lecce",
            "provincia": "LE"
        }, {
            "comune": "Monteroni di Lecce",
            "provincia": "LE"
        }, {
            "comune": "Montesano Salentino",
            "provincia": "LE"
        }, {
            "comune": "Morciano di Leuca",
            "provincia": "LE"
        }, {
            "comune": "Muro Leccese",
            "provincia": "LE"
        }, {
            "comune": "Nardò",
            "provincia": "LE"
        }, {
            "comune": "Neviano",
            "provincia": "LE"
        }, {
            "comune": "Nociglia",
            "provincia": "LE"
        }, {
            "comune": "Novoli",
            "provincia": "LE"
        }, {
            "comune": "Ortelle",
            "provincia": "LE"
        }, {
            "comune": "Otranto",
            "provincia": "LE"
        }, {
            "comune": "Palmariggi",
            "provincia": "LE"
        }, {
            "comune": "Parabita",
            "provincia": "LE"
        }, {
            "comune": "Patù",
            "provincia": "LE"
        }, {
            "comune": "Poggiardo",
            "provincia": "LE"
        }, {
            "comune": "Presicce",
            "provincia": "LE"
        }, {
            "comune": "Racale",
            "provincia": "LE"
        }, {
            "comune": "Ruffano",
            "provincia": "LE"
        }, {
            "comune": "Salice Salentino",
            "provincia": "LE"
        }, {
            "comune": "Salve",
            "provincia": "LE"
        }, {
            "comune": "Sanarica",
            "provincia": "LE"
        }, {
            "comune": "San Cesario di Lecce",
            "provincia": "LE"
        }, {
            "comune": "San Donato di Lecce",
            "provincia": "LE"
        }, {
            "comune": "Sannicola",
            "provincia": "LE"
        }, {
            "comune": "San Pietro in Lama",
            "provincia": "LE"
        }, {
            "comune": "Santa Cesarea Terme",
            "provincia": "LE"
        }, {
            "comune": "Scorrano",
            "provincia": "LE"
        }, {
            "comune": "Seclì",
            "provincia": "LE"
        }, {
            "comune": "Sogliano Cavour",
            "provincia": "LE"
        }, {
            "comune": "Soleto",
            "provincia": "LE"
        }, {
            "comune": "Specchia",
            "provincia": "LE"
        }, {
            "comune": "Spongano",
            "provincia": "LE"
        }, {
            "comune": "Squinzano",
            "provincia": "LE"
        }, {
            "comune": "Sternatia",
            "provincia": "LE"
        }, {
            "comune": "Surano",
            "provincia": "LE"
        }, {
            "comune": "Surbo",
            "provincia": "LE"
        }, {
            "comune": "Taurisano",
            "provincia": "LE"
        }, {
            "comune": "Taviano",
            "provincia": "LE"
        }, {
            "comune": "Tiggiano",
            "provincia": "LE"
        }, {
            "comune": "Trepuzzi",
            "provincia": "LE"
        }, {
            "comune": "Tricase",
            "provincia": "LE"
        }, {
            "comune": "Tuglie",
            "provincia": "LE"
        }, {
            "comune": "Ugento",
            "provincia": "LE"
        }, {
            "comune": "Uggiano La Chiesa",
            "provincia": "LE"
        }, {
            "comune": "Veglie",
            "provincia": "LE"
        }, {
            "comune": "Vernole",
            "provincia": "LE"
        }, {
            "comune": "Zollino",
            "provincia": "LE"
        }, {
            "comune": "San Cassiano",
            "provincia": "LE"
        }, {
            "comune": "Castro",
            "provincia": "LE"
        }, {
            "comune": "Porto Cesareo",
            "provincia": "LE"
        }, {
            "comune": "Abriola",
            "provincia": "PZ"
        }, {
            "comune": "Acerenza",
            "provincia": "PZ"
        }, {
            "comune": "Albano di Lucania",
            "provincia": "PZ"
        }, {
            "comune": "Anzi",
            "provincia": "PZ"
        }, {
            "comune": "Armento",
            "provincia": "PZ"
        }, {
            "comune": "Atella",
            "provincia": "PZ"
        }, {
            "comune": "Avigliano",
            "provincia": "PZ"
        }, {
            "comune": "Balvano",
            "provincia": "PZ"
        }, {
            "comune": "Banzi",
            "provincia": "PZ"
        }, {
            "comune": "Baragiano",
            "provincia": "PZ"
        }, {
            "comune": "Barile",
            "provincia": "PZ"
        }, {
            "comune": "Bella",
            "provincia": "PZ"
        }, {
            "comune": "Brienza",
            "provincia": "PZ"
        }, {
            "comune": "Brindisi Montagna",
            "provincia": "PZ"
        }, {
            "comune": "Calvello",
            "provincia": "PZ"
        }, {
            "comune": "Calvera",
            "provincia": "PZ"
        }, {
            "comune": "Campomaggiore",
            "provincia": "PZ"
        }, {
            "comune": "Cancellara",
            "provincia": "PZ"
        }, {
            "comune": "Carbone",
            "provincia": "PZ"
        }, {
            "comune": "San Paolo Albanese",
            "provincia": "PZ"
        }, {
            "comune": "Castelgrande",
            "provincia": "PZ"
        }, {
            "comune": "Castelluccio Inferiore",
            "provincia": "PZ"
        }, {
            "comune": "Castelmezzano",
            "provincia": "PZ"
        }, {
            "comune": "Castelsaraceno",
            "provincia": "PZ"
        }, {
            "comune": "Castronuovo di Sant'Andrea",
            "provincia": "PZ"
        }, {
            "comune": "Cersosimo",
            "provincia": "PZ"
        }, {
            "comune": "Chiaromonte",
            "provincia": "PZ"
        }, {
            "comune": "Corleto Perticara",
            "provincia": "PZ"
        }, {
            "comune": "Episcopia",
            "provincia": "PZ"
        }, {
            "comune": "Fardella",
            "provincia": "PZ"
        }, {
            "comune": "Filiano",
            "provincia": "PZ"
        }, {
            "comune": "Forenza",
            "provincia": "PZ"
        }, {
            "comune": "Francavilla in Sinni",
            "provincia": "PZ"
        }, {
            "comune": "Gallicchio",
            "provincia": "PZ"
        }, {
            "comune": "Genzano di Lucania",
            "provincia": "PZ"
        }, {
            "comune": "Grumento Nova",
            "provincia": "PZ"
        }, {
            "comune": "Guardia Perticara",
            "provincia": "PZ"
        }, {
            "comune": "Lagonegro",
            "provincia": "PZ"
        }, {
            "comune": "Latronico",
            "provincia": "PZ"
        }, {
            "comune": "Laurenzana",
            "provincia": "PZ"
        }, {
            "comune": "Lauria",
            "provincia": "PZ"
        }, {
            "comune": "Lavello",
            "provincia": "PZ"
        }, {
            "comune": "Maratea",
            "provincia": "PZ"
        }, {
            "comune": "Marsico Nuovo",
            "provincia": "PZ"
        }, {
            "comune": "Marsicovetere",
            "provincia": "PZ"
        }, {
            "comune": "Maschito",
            "provincia": "PZ"
        }, {
            "comune": "Melfi",
            "provincia": "PZ"
        }, {
            "comune": "Missanello",
            "provincia": "PZ"
        }, {
            "comune": "Moliterno",
            "provincia": "PZ"
        }, {
            "comune": "Montemilone",
            "provincia": "PZ"
        }, {
            "comune": "Montemurro",
            "provincia": "PZ"
        }, {
            "comune": "Muro Lucano",
            "provincia": "PZ"
        }, {
            "comune": "Nemoli",
            "provincia": "PZ"
        }, {
            "comune": "Noepoli",
            "provincia": "PZ"
        }, {
            "comune": "Oppido Lucano",
            "provincia": "PZ"
        }, {
            "comune": "Palazzo San Gervasio",
            "provincia": "PZ"
        }, {
            "comune": "Pescopagano",
            "provincia": "PZ"
        }, {
            "comune": "Picerno",
            "provincia": "PZ"
        }, {
            "comune": "Pietragalla",
            "provincia": "PZ"
        }, {
            "comune": "Pietrapertosa",
            "provincia": "PZ"
        }, {
            "comune": "Pignola",
            "provincia": "PZ"
        }, {
            "comune": "Potenza",
            "provincia": "PZ"
        }, {
            "comune": "Rapolla",
            "provincia": "PZ"
        }, {
            "comune": "Rapone",
            "provincia": "PZ"
        }, {
            "comune": "Rionero in Vulture",
            "provincia": "PZ"
        }, {
            "comune": "Ripacandida",
            "provincia": "PZ"
        }, {
            "comune": "Rivello",
            "provincia": "PZ"
        }, {
            "comune": "Roccanova",
            "provincia": "PZ"
        }, {
            "comune": "Rotonda",
            "provincia": "PZ"
        }, {
            "comune": "Ruoti",
            "provincia": "PZ"
        }, {
            "comune": "Ruvo del Monte",
            "provincia": "PZ"
        }, {
            "comune": "San Chirico Nuovo",
            "provincia": "PZ"
        }, {
            "comune": "San Chirico Raparo",
            "provincia": "PZ"
        }, {
            "comune": "San Costantino Albanese",
            "provincia": "PZ"
        }, {
            "comune": "San Fele",
            "provincia": "PZ"
        }, {
            "comune": "San Martino d'Agri",
            "provincia": "PZ"
        }, {
            "comune": "San Severino Lucano",
            "provincia": "PZ"
        }, {
            "comune": "Sant'Angelo Le Fratte",
            "provincia": "PZ"
        }, {
            "comune": "Sant'Arcangelo",
            "provincia": "PZ"
        }, {
            "comune": "Sarconi",
            "provincia": "PZ"
        }, {
            "comune": "Sasso di Castalda",
            "provincia": "PZ"
        }, {
            "comune": "Satriano di Lucania",
            "provincia": "PZ"
        }, {
            "comune": "Savoia di Lucania",
            "provincia": "PZ"
        }, {
            "comune": "Senise",
            "provincia": "PZ"
        }, {
            "comune": "Spinoso",
            "provincia": "PZ"
        }, {
            "comune": "Teana",
            "provincia": "PZ"
        }, {
            "comune": "Terranova di Pollino",
            "provincia": "PZ"
        }, {
            "comune": "Tito",
            "provincia": "PZ"
        }, {
            "comune": "Tolve",
            "provincia": "PZ"
        }, {
            "comune": "Tramutola",
            "provincia": "PZ"
        }, {
            "comune": "Trecchina",
            "provincia": "PZ"
        }, {
            "comune": "Trivigno",
            "provincia": "PZ"
        }, {
            "comune": "Vaglio Basilicata",
            "provincia": "PZ"
        }, {
            "comune": "Venosa",
            "provincia": "PZ"
        }, {
            "comune": "Vietri di Potenza",
            "provincia": "PZ"
        }, {
            "comune": "Viggianello",
            "provincia": "PZ"
        }, {
            "comune": "Viggiano",
            "provincia": "PZ"
        }, {
            "comune": "Ginestra",
            "provincia": "PZ"
        }, {
            "comune": "Paterno",
            "provincia": "PZ"
        }, {
            "comune": "Accettura",
            "provincia": "MT"
        }, {
            "comune": "Aliano",
            "provincia": "MT"
        }, {
            "comune": "Bernalda",
            "provincia": "MT"
        }, {
            "comune": "Calciano",
            "provincia": "MT"
        }, {
            "comune": "Cirigliano",
            "provincia": "MT"
        }, {
            "comune": "Colobraro",
            "provincia": "MT"
        }, {
            "comune": "Craco",
            "provincia": "MT"
        }, {
            "comune": "Ferrandina",
            "provincia": "MT"
        }, {
            "comune": "Garaguso",
            "provincia": "MT"
        }, {
            "comune": "Gorgoglione",
            "provincia": "MT"
        }, {
            "comune": "Grassano",
            "provincia": "MT"
        }, {
            "comune": "Grottole",
            "provincia": "MT"
        }, {
            "comune": "Irsina",
            "provincia": "MT"
        }, {
            "comune": "Matera",
            "provincia": "MT"
        }, {
            "comune": "Miglionico",
            "provincia": "MT"
        }, {
            "comune": "Montalbano Jonico",
            "provincia": "MT"
        }, {
            "comune": "Montescaglioso",
            "provincia": "MT"
        }, {
            "comune": "Nova Siri",
            "provincia": "MT"
        }, {
            "comune": "Oliveto Lucano",
            "provincia": "MT"
        }, {
            "comune": "Pisticci",
            "provincia": "MT"
        }, {
            "comune": "Policoro",
            "provincia": "MT"
        }, {
            "comune": "Pomarico",
            "provincia": "MT"
        }, {
            "comune": "Rotondella",
            "provincia": "MT"
        }, {
            "comune": "Salandra",
            "provincia": "MT"
        }, {
            "comune": "San Giorgio Lucano",
            "provincia": "MT"
        }, {
            "comune": "San Mauro Forte",
            "provincia": "MT"
        }, {
            "comune": "Stigliano",
            "provincia": "MT"
        }, {
            "comune": "Tricarico",
            "provincia": "MT"
        }, {
            "comune": "Tursi",
            "provincia": "MT"
        }, {
            "comune": "Valsinni",
            "provincia": "MT"
        }, {
            "comune": "Scanzano Jonico",
            "provincia": "MT"
        }, {
            "comune": "Acquaformosa",
            "provincia": "CS"
        }, {
            "comune": "Acquappesa",
            "provincia": "CS"
        }, {
            "comune": "Acri",
            "provincia": "CS"
        }, {
            "comune": "Aiello Calabro",
            "provincia": "CS"
        }, {
            "comune": "Aieta",
            "provincia": "CS"
        }, {
            "comune": "Albidona",
            "provincia": "CS"
        }, {
            "comune": "Alessandria del Carretto",
            "provincia": "CS"
        }, {
            "comune": "Altilia",
            "provincia": "CS"
        }, {
            "comune": "Altomonte",
            "provincia": "CS"
        }, {
            "comune": "Amantea",
            "provincia": "CS"
        }, {
            "comune": "Amendolara",
            "provincia": "CS"
        }, {
            "comune": "Aprigliano",
            "provincia": "CS"
        }, {
            "comune": "Belmonte Calabro",
            "provincia": "CS"
        }, {
            "comune": "Belsito",
            "provincia": "CS"
        }, {
            "comune": "Belvedere Marittimo",
            "provincia": "CS"
        }, {
            "comune": "Bianchi",
            "provincia": "CS"
        }, {
            "comune": "Bisignano",
            "provincia": "CS"
        }, {
            "comune": "Bocchigliero",
            "provincia": "CS"
        }, {
            "comune": "Bonifati",
            "provincia": "CS"
        }, {
            "comune": "Buonvicino",
            "provincia": "CS"
        }, {
            "comune": "Calopezzati",
            "provincia": "CS"
        }, {
            "comune": "Caloveto",
            "provincia": "CS"
        }, {
            "comune": "Campana",
            "provincia": "CS"
        }, {
            "comune": "Canna",
            "provincia": "CS"
        }, {
            "comune": "Cariati",
            "provincia": "CS"
        }, {
            "comune": "Carolei",
            "provincia": "CS"
        }, {
            "comune": "Carpanzano",
            "provincia": "CS"
        }, {
            "comune": "Cassano all'Ionio",
            "provincia": "CS"
        }, {
            "comune": "Castiglione Cosentino",
            "provincia": "CS"
        }, {
            "comune": "Castrolibero",
            "provincia": "CS"
        }, {
            "comune": "Castroregio",
            "provincia": "CS"
        }, {
            "comune": "Castrovillari",
            "provincia": "CS"
        }, {
            "comune": "Celico",
            "provincia": "CS"
        }, {
            "comune": "Cellara",
            "provincia": "CS"
        }, {
            "comune": "Cerchiara di Calabria",
            "provincia": "CS"
        }, {
            "comune": "Cerisano",
            "provincia": "CS"
        }, {
            "comune": "Cervicati",
            "provincia": "CS"
        }, {
            "comune": "Cerzeto",
            "provincia": "CS"
        }, {
            "comune": "Cetraro",
            "provincia": "CS"
        }, {
            "comune": "Civita",
            "provincia": "CS"
        }, {
            "comune": "Cleto",
            "provincia": "CS"
        }, {
            "comune": "Colosimi",
            "provincia": "CS"
        }, {
            "comune": "Corigliano Calabro",
            "provincia": "CS"
        }, {
            "comune": "Cosenza",
            "provincia": "CS"
        }, {
            "comune": "Cropalati",
            "provincia": "CS"
        }, {
            "comune": "Crosia",
            "provincia": "CS"
        }, {
            "comune": "Diamante",
            "provincia": "CS"
        }, {
            "comune": "Dipignano",
            "provincia": "CS"
        }, {
            "comune": "Domanico",
            "provincia": "CS"
        }, {
            "comune": "Fagnano Castello",
            "provincia": "CS"
        }, {
            "comune": "Falconara Albanese",
            "provincia": "CS"
        }, {
            "comune": "Figline Vegliaturo",
            "provincia": "CS"
        }, {
            "comune": "Firmo",
            "provincia": "CS"
        }, {
            "comune": "Fiumefreddo Bruzio",
            "provincia": "CS"
        }, {
            "comune": "Francavilla Marittima",
            "provincia": "CS"
        }, {
            "comune": "Frascineto",
            "provincia": "CS"
        }, {
            "comune": "Fuscaldo",
            "provincia": "CS"
        }, {
            "comune": "Grimaldi",
            "provincia": "CS"
        }, {
            "comune": "Grisolia",
            "provincia": "CS"
        }, {
            "comune": "Guardia Piemontese",
            "provincia": "CS"
        }, {
            "comune": "Lago",
            "provincia": "CS"
        }, {
            "comune": "Laino Borgo",
            "provincia": "CS"
        }, {
            "comune": "Laino Castello",
            "provincia": "CS"
        }, {
            "comune": "Lappano",
            "provincia": "CS"
        }, {
            "comune": "Lattarico",
            "provincia": "CS"
        }, {
            "comune": "Longobardi",
            "provincia": "CS"
        }, {
            "comune": "Longobucco",
            "provincia": "CS"
        }, {
            "comune": "Lungro",
            "provincia": "CS"
        }, {
            "comune": "Luzzi",
            "provincia": "CS"
        }, {
            "comune": "Maierà",
            "provincia": "CS"
        }, {
            "comune": "Malito",
            "provincia": "CS"
        }, {
            "comune": "Malvito",
            "provincia": "CS"
        }, {
            "comune": "Mandatoriccio",
            "provincia": "CS"
        }, {
            "comune": "Mangone",
            "provincia": "CS"
        }, {
            "comune": "Marano Marchesato",
            "provincia": "CS"
        }, {
            "comune": "Marano Principato",
            "provincia": "CS"
        }, {
            "comune": "Marzi",
            "provincia": "CS"
        }, {
            "comune": "Mendicino",
            "provincia": "CS"
        }, {
            "comune": "Mongrassano",
            "provincia": "CS"
        }, {
            "comune": "Montalto Uffugo",
            "provincia": "CS"
        }, {
            "comune": "Montegiordano",
            "provincia": "CS"
        }, {
            "comune": "Morano Calabro",
            "provincia": "CS"
        }, {
            "comune": "Mormanno",
            "provincia": "CS"
        }, {
            "comune": "Mottafollone",
            "provincia": "CS"
        }, {
            "comune": "Nocara",
            "provincia": "CS"
        }, {
            "comune": "Oriolo",
            "provincia": "CS"
        }, {
            "comune": "Orsomarso",
            "provincia": "CS"
        }, {
            "comune": "Paludi",
            "provincia": "CS"
        }, {
            "comune": "Panettieri",
            "provincia": "CS"
        }, {
            "comune": "Paola",
            "provincia": "CS"
        }, {
            "comune": "Papasidero",
            "provincia": "CS"
        }, {
            "comune": "Parenti",
            "provincia": "CS"
        }, {
            "comune": "Paterno Calabro",
            "provincia": "CS"
        }, {
            "comune": "Pedivigliano",
            "provincia": "CS"
        }, {
            "comune": "Piane Crati",
            "provincia": "CS"
        }, {
            "comune": "Pietrafitta",
            "provincia": "CS"
        }, {
            "comune": "Pietrapaola",
            "provincia": "CS"
        }, {
            "comune": "Plataci",
            "provincia": "CS"
        }, {
            "comune": "Praia a Mare",
            "provincia": "CS"
        }, {
            "comune": "Rende",
            "provincia": "CS"
        }, {
            "comune": "Rocca Imperiale",
            "provincia": "CS"
        }, {
            "comune": "Roggiano Gravina",
            "provincia": "CS"
        }, {
            "comune": "Rogliano",
            "provincia": "CS"
        }, {
            "comune": "Rose",
            "provincia": "CS"
        }, {
            "comune": "Roseto Capo Spulico",
            "provincia": "CS"
        }, {
            "comune": "Rossano",
            "provincia": "CS"
        }, {
            "comune": "Rota Greca",
            "provincia": "CS"
        }, {
            "comune": "Rovito",
            "provincia": "CS"
        }, {
            "comune": "San Basile",
            "provincia": "CS"
        }, {
            "comune": "San Benedetto Ullano",
            "provincia": "CS"
        }, {
            "comune": "San Cosmo Albanese",
            "provincia": "CS"
        }, {
            "comune": "San Demetrio Corone",
            "provincia": "CS"
        }, {
            "comune": "San Donato di Ninea",
            "provincia": "CS"
        }, {
            "comune": "San Fili",
            "provincia": "CS"
        }, {
            "comune": "Sangineto",
            "provincia": "CS"
        }, {
            "comune": "San Giorgio Albanese",
            "provincia": "CS"
        }, {
            "comune": "San Giovanni in Fiore",
            "provincia": "CS"
        }, {
            "comune": "San Lorenzo Bellizzi",
            "provincia": "CS"
        }, {
            "comune": "San Lorenzo del Vallo",
            "provincia": "CS"
        }, {
            "comune": "San Lucido",
            "provincia": "CS"
        }, {
            "comune": "San Marco Argentano",
            "provincia": "CS"
        }, {
            "comune": "San Martino di Finita",
            "provincia": "CS"
        }, {
            "comune": "San Nicola Arcella",
            "provincia": "CS"
        }, {
            "comune": "San Pietro in Amantea",
            "provincia": "CS"
        }, {
            "comune": "San Pietro in Guarano",
            "provincia": "CS"
        }, {
            "comune": "San Sosti",
            "provincia": "CS"
        }, {
            "comune": "Santa Caterina Albanese",
            "provincia": "CS"
        }, {
            "comune": "Santa Domenica Talao",
            "provincia": "CS"
        }, {
            "comune": "Sant'Agata di Esaro",
            "provincia": "CS"
        }, {
            "comune": "Santa Maria del Cedro",
            "provincia": "CS"
        }, {
            "comune": "Santa Sofia D'Epiro",
            "provincia": "CS"
        }, {
            "comune": "Santo Stefano di Rogliano",
            "provincia": "CS"
        }, {
            "comune": "San Vincenzo la Costa",
            "provincia": "CS"
        }, {
            "comune": "Saracena",
            "provincia": "CS"
        }, {
            "comune": "Scala Coeli",
            "provincia": "CS"
        }, {
            "comune": "Scalea",
            "provincia": "CS"
        }, {
            "comune": "Scigliano",
            "provincia": "CS"
        }, {
            "comune": "Serra d'Aiello",
            "provincia": "CS"
        }, {
            "comune": "Spezzano Albanese",
            "provincia": "CS"
        }, {
            "comune": "Spezzano della Sila",
            "provincia": "CS"
        }, {
            "comune": "Tarsia",
            "provincia": "CS"
        }, {
            "comune": "Terranova da Sibari",
            "provincia": "CS"
        }, {
            "comune": "Terravecchia",
            "provincia": "CS"
        }, {
            "comune": "Torano Castello",
            "provincia": "CS"
        }, {
            "comune": "Tortora",
            "provincia": "CS"
        }, {
            "comune": "Trebisacce",
            "provincia": "CS"
        }, {
            "comune": "Vaccarizzo Albanese",
            "provincia": "CS"
        }, {
            "comune": "Verbicaro",
            "provincia": "CS"
        }, {
            "comune": "Villapiana",
            "provincia": "CS"
        }, {
            "comune": "Zumpano",
            "provincia": "CS"
        }, {
            "comune": "Casali del Manco",
            "provincia": "CS"
        }, {
            "comune": "Albi",
            "provincia": "CZ"
        }, {
            "comune": "Amaroni",
            "provincia": "CZ"
        }, {
            "comune": "Amato",
            "provincia": "CZ"
        }, {
            "comune": "Andali",
            "provincia": "CZ"
        }, {
            "comune": "Argusto",
            "provincia": "CZ"
        }, {
            "comune": "Badolato",
            "provincia": "CZ"
        }, {
            "comune": "Belcastro",
            "provincia": "CZ"
        }, {
            "comune": "Borgia",
            "provincia": "CZ"
        }, {
            "comune": "Botricello",
            "provincia": "CZ"
        }, {
            "comune": "Caraffa di Catanzaro",
            "provincia": "CZ"
        }, {
            "comune": "Cardinale",
            "provincia": "CZ"
        }, {
            "comune": "Carlopoli",
            "provincia": "CZ"
        }, {
            "comune": "Catanzaro",
            "provincia": "CZ"
        }, {
            "comune": "Cenadi",
            "provincia": "CZ"
        }, {
            "comune": "Centrache",
            "provincia": "CZ"
        }, {
            "comune": "Cerva",
            "provincia": "CZ"
        }, {
            "comune": "Chiaravalle Centrale",
            "provincia": "CZ"
        }, {
            "comune": "Cicala",
            "provincia": "CZ"
        }, {
            "comune": "Conflenti",
            "provincia": "CZ"
        }, {
            "comune": "Cortale",
            "provincia": "CZ"
        }, {
            "comune": "Cropani",
            "provincia": "CZ"
        }, {
            "comune": "Curinga",
            "provincia": "CZ"
        }, {
            "comune": "Davoli",
            "provincia": "CZ"
        }, {
            "comune": "Decollatura",
            "provincia": "CZ"
        }, {
            "comune": "Falerna",
            "provincia": "CZ"
        }, {
            "comune": "Feroleto Antico",
            "provincia": "CZ"
        }, {
            "comune": "Fossato Serralta",
            "provincia": "CZ"
        }, {
            "comune": "Gagliato",
            "provincia": "CZ"
        }, {
            "comune": "Gasperina",
            "provincia": "CZ"
        }, {
            "comune": "Gimigliano",
            "provincia": "CZ"
        }, {
            "comune": "Girifalco",
            "provincia": "CZ"
        }, {
            "comune": "Gizzeria",
            "provincia": "CZ"
        }, {
            "comune": "Guardavalle",
            "provincia": "CZ"
        }, {
            "comune": "Isca sullo Ionio",
            "provincia": "CZ"
        }, {
            "comune": "Jacurso",
            "provincia": "CZ"
        }, {
            "comune": "Magisano",
            "provincia": "CZ"
        }, {
            "comune": "Maida",
            "provincia": "CZ"
        }, {
            "comune": "Marcedusa",
            "provincia": "CZ"
        }, {
            "comune": "Marcellinara",
            "provincia": "CZ"
        }, {
            "comune": "Martirano",
            "provincia": "CZ"
        }, {
            "comune": "Martirano Lombardo",
            "provincia": "CZ"
        }, {
            "comune": "Miglierina",
            "provincia": "CZ"
        }, {
            "comune": "Montauro",
            "provincia": "CZ"
        }, {
            "comune": "Montepaone",
            "provincia": "CZ"
        }, {
            "comune": "Motta Santa Lucia",
            "provincia": "CZ"
        }, {
            "comune": "Nocera Terinese",
            "provincia": "CZ"
        }, {
            "comune": "Olivadi",
            "provincia": "CZ"
        }, {
            "comune": "Palermiti",
            "provincia": "CZ"
        }, {
            "comune": "Pentone",
            "provincia": "CZ"
        }, {
            "comune": "Petrizzi",
            "provincia": "CZ"
        }, {
            "comune": "Petronà",
            "provincia": "CZ"
        }, {
            "comune": "Pianopoli",
            "provincia": "CZ"
        }, {
            "comune": "Platania",
            "provincia": "CZ"
        }, {
            "comune": "San Floro",
            "provincia": "CZ"
        }, {
            "comune": "San Mango d'Aquino",
            "provincia": "CZ"
        }, {
            "comune": "San Pietro a Maida",
            "provincia": "CZ"
        }, {
            "comune": "San Pietro Apostolo",
            "provincia": "CZ"
        }, {
            "comune": "San Sostene",
            "provincia": "CZ"
        }, {
            "comune": "Santa Caterina dello Ionio",
            "provincia": "CZ"
        }, {
            "comune": "Sant'Andrea Apostolo dello Ionio",
            "provincia": "CZ"
        }, {
            "comune": "San Vito sullo Ionio",
            "provincia": "CZ"
        }, {
            "comune": "Satriano",
            "provincia": "CZ"
        }, {
            "comune": "Sellia",
            "provincia": "CZ"
        }, {
            "comune": "Sellia Marina",
            "provincia": "CZ"
        }, {
            "comune": "Serrastretta",
            "provincia": "CZ"
        }, {
            "comune": "Sersale",
            "provincia": "CZ"
        }, {
            "comune": "Settingiano",
            "provincia": "CZ"
        }, {
            "comune": "Simeri Crichi",
            "provincia": "CZ"
        }, {
            "comune": "Sorbo San Basile",
            "provincia": "CZ"
        }, {
            "comune": "Soverato",
            "provincia": "CZ"
        }, {
            "comune": "Soveria Mannelli",
            "provincia": "CZ"
        }, {
            "comune": "Soveria Simeri",
            "provincia": "CZ"
        }, {
            "comune": "Squillace",
            "provincia": "CZ"
        }, {
            "comune": "Stalettì",
            "provincia": "CZ"
        }, {
            "comune": "Taverna",
            "provincia": "CZ"
        }, {
            "comune": "Tiriolo",
            "provincia": "CZ"
        }, {
            "comune": "Torre di Ruggiero",
            "provincia": "CZ"
        }, {
            "comune": "Vallefiorita",
            "provincia": "CZ"
        }, {
            "comune": "Zagarise",
            "provincia": "CZ"
        }, {
            "comune": "Lamezia Terme",
            "provincia": "CZ"
        }, {
            "comune": "Africo",
            "provincia": "RC"
        }, {
            "comune": "Agnana Calabra",
            "provincia": "RC"
        }, {
            "comune": "Anoia",
            "provincia": "RC"
        }, {
            "comune": "Antonimina",
            "provincia": "RC"
        }, {
            "comune": "Ardore",
            "provincia": "RC"
        }, {
            "comune": "Bagaladi",
            "provincia": "RC"
        }, {
            "comune": "Bagnara Calabra",
            "provincia": "RC"
        }, {
            "comune": "Benestare",
            "provincia": "RC"
        }, {
            "comune": "Bianco",
            "provincia": "RC"
        }, {
            "comune": "Bivongi",
            "provincia": "RC"
        }, {
            "comune": "Bova",
            "provincia": "RC"
        }, {
            "comune": "Bovalino",
            "provincia": "RC"
        }, {
            "comune": "Bova Marina",
            "provincia": "RC"
        }, {
            "comune": "Brancaleone",
            "provincia": "RC"
        }, {
            "comune": "Bruzzano Zeffirio",
            "provincia": "RC"
        }, {
            "comune": "Calanna",
            "provincia": "RC"
        }, {
            "comune": "Camini",
            "provincia": "RC"
        }, {
            "comune": "Campo Calabro",
            "provincia": "RC"
        }, {
            "comune": "Candidoni",
            "provincia": "RC"
        }, {
            "comune": "Canolo",
            "provincia": "RC"
        }, {
            "comune": "Caraffa del Bianco",
            "provincia": "RC"
        }, {
            "comune": "Cardeto",
            "provincia": "RC"
        }, {
            "comune": "Careri",
            "provincia": "RC"
        }, {
            "comune": "Casignana",
            "provincia": "RC"
        }, {
            "comune": "Caulonia",
            "provincia": "RC"
        }, {
            "comune": "Ciminà",
            "provincia": "RC"
        }, {
            "comune": "Cinquefrondi",
            "provincia": "RC"
        }, {
            "comune": "Cittanova",
            "provincia": "RC"
        }, {
            "comune": "Condofuri",
            "provincia": "RC"
        }, {
            "comune": "Cosoleto",
            "provincia": "RC"
        }, {
            "comune": "Delianuova",
            "provincia": "RC"
        }, {
            "comune": "Feroleto della Chiesa",
            "provincia": "RC"
        }, {
            "comune": "Ferruzzano",
            "provincia": "RC"
        }, {
            "comune": "Fiumara",
            "provincia": "RC"
        }, {
            "comune": "Galatro",
            "provincia": "RC"
        }, {
            "comune": "Gerace",
            "provincia": "RC"
        }, {
            "comune": "Giffone",
            "provincia": "RC"
        }, {
            "comune": "Gioia Tauro",
            "provincia": "RC"
        }, {
            "comune": "Gioiosa Ionica",
            "provincia": "RC"
        }, {
            "comune": "Grotteria",
            "provincia": "RC"
        }, {
            "comune": "Laganadi",
            "provincia": "RC"
        }, {
            "comune": "Laureana di Borrello",
            "provincia": "RC"
        }, {
            "comune": "Locri",
            "provincia": "RC"
        }, {
            "comune": "Mammola",
            "provincia": "RC"
        }, {
            "comune": "Marina di Gioiosa Ionica",
            "provincia": "RC"
        }, {
            "comune": "Maropati",
            "provincia": "RC"
        }, {
            "comune": "Martone",
            "provincia": "RC"
        }, {
            "comune": "Melicuccà",
            "provincia": "RC"
        }, {
            "comune": "Melicucco",
            "provincia": "RC"
        }, {
            "comune": "Melito di Porto Salvo",
            "provincia": "RC"
        }, {
            "comune": "Molochio",
            "provincia": "RC"
        }, {
            "comune": "Monasterace",
            "provincia": "RC"
        }, {
            "comune": "Montebello Ionico",
            "provincia": "RC"
        }, {
            "comune": "Motta San Giovanni",
            "provincia": "RC"
        }, {
            "comune": "Oppido Mamertina",
            "provincia": "RC"
        }, {
            "comune": "Palizzi",
            "provincia": "RC"
        }, {
            "comune": "Palmi",
            "provincia": "RC"
        }, {
            "comune": "Pazzano",
            "provincia": "RC"
        }, {
            "comune": "Placanica",
            "provincia": "RC"
        }, {
            "comune": "Platì",
            "provincia": "RC"
        }, {
            "comune": "Polistena",
            "provincia": "RC"
        }, {
            "comune": "Portigliola",
            "provincia": "RC"
        }, {
            "comune": "Reggio di Calabria",
            "provincia": "RC"
        }, {
            "comune": "Riace",
            "provincia": "RC"
        }, {
            "comune": "Rizziconi",
            "provincia": "RC"
        }, {
            "comune": "Roccaforte del Greco",
            "provincia": "RC"
        }, {
            "comune": "Roccella Ionica",
            "provincia": "RC"
        }, {
            "comune": "Roghudi",
            "provincia": "RC"
        }, {
            "comune": "Rosarno",
            "provincia": "RC"
        }, {
            "comune": "Samo",
            "provincia": "RC"
        }, {
            "comune": "San Giorgio Morgeto",
            "provincia": "RC"
        }, {
            "comune": "San Giovanni di Gerace",
            "provincia": "RC"
        }, {
            "comune": "San Lorenzo",
            "provincia": "RC"
        }, {
            "comune": "San Luca",
            "provincia": "RC"
        }, {
            "comune": "San Pietro di Caridà",
            "provincia": "RC"
        }, {
            "comune": "San Procopio",
            "provincia": "RC"
        }, {
            "comune": "San Roberto",
            "provincia": "RC"
        }, {
            "comune": "Santa Cristina d'Aspromonte",
            "provincia": "RC"
        }, {
            "comune": "Sant'Agata del Bianco",
            "provincia": "RC"
        }, {
            "comune": "Sant'Alessio in Aspromonte",
            "provincia": "RC"
        }, {
            "comune": "Sant'Eufemia d'Aspromonte",
            "provincia": "RC"
        }, {
            "comune": "Sant'Ilario dello Ionio",
            "provincia": "RC"
        }, {
            "comune": "Santo Stefano in Aspromonte",
            "provincia": "RC"
        }, {
            "comune": "Scido",
            "provincia": "RC"
        }, {
            "comune": "Scilla",
            "provincia": "RC"
        }, {
            "comune": "Seminara",
            "provincia": "RC"
        }, {
            "comune": "Serrata",
            "provincia": "RC"
        }, {
            "comune": "Siderno",
            "provincia": "RC"
        }, {
            "comune": "Sinopoli",
            "provincia": "RC"
        }, {
            "comune": "Staiti",
            "provincia": "RC"
        }, {
            "comune": "Stignano",
            "provincia": "RC"
        }, {
            "comune": "Stilo",
            "provincia": "RC"
        }, {
            "comune": "Taurianova",
            "provincia": "RC"
        }, {
            "comune": "Terranova Sappo Minulio",
            "provincia": "RC"
        }, {
            "comune": "Varapodio",
            "provincia": "RC"
        }, {
            "comune": "Villa San Giovanni",
            "provincia": "RC"
        }, {
            "comune": "San Ferdinando",
            "provincia": "RC"
        }, {
            "comune": "Alcamo",
            "provincia": "TP"
        }, {
            "comune": "Buseto Palizzolo",
            "provincia": "TP"
        }, {
            "comune": "Calatafimi-Segesta",
            "provincia": "TP"
        }, {
            "comune": "Campobello di Mazara",
            "provincia": "TP"
        }, {
            "comune": "Castellammare del Golfo",
            "provincia": "TP"
        }, {
            "comune": "Castelvetrano",
            "provincia": "TP"
        }, {
            "comune": "Custonaci",
            "provincia": "TP"
        }, {
            "comune": "Erice",
            "provincia": "TP"
        }, {
            "comune": "Favignana",
            "provincia": "TP"
        }, {
            "comune": "Gibellina",
            "provincia": "TP"
        }, {
            "comune": "Marsala",
            "provincia": "TP"
        }, {
            "comune": "Mazara del Vallo",
            "provincia": "TP"
        }, {
            "comune": "Paceco",
            "provincia": "TP"
        }, {
            "comune": "Pantelleria",
            "provincia": "TP"
        }, {
            "comune": "Partanna",
            "provincia": "TP"
        }, {
            "comune": "Poggioreale",
            "provincia": "TP"
        }, {
            "comune": "Salaparuta",
            "provincia": "TP"
        }, {
            "comune": "Salemi",
            "provincia": "TP"
        }, {
            "comune": "Santa Ninfa",
            "provincia": "TP"
        }, {
            "comune": "San Vito Lo Capo",
            "provincia": "TP"
        }, {
            "comune": "Trapani",
            "provincia": "TP"
        }, {
            "comune": "Valderice",
            "provincia": "TP"
        }, {
            "comune": "Vita",
            "provincia": "TP"
        }, {
            "comune": "Petrosino",
            "provincia": "TP"
        }, {
            "comune": "Alia",
            "provincia": "PA"
        }, {
            "comune": "Alimena",
            "provincia": "PA"
        }, {
            "comune": "Aliminusa",
            "provincia": "PA"
        }, {
            "comune": "Altavilla Milicia",
            "provincia": "PA"
        }, {
            "comune": "Altofonte",
            "provincia": "PA"
        }, {
            "comune": "Bagheria",
            "provincia": "PA"
        }, {
            "comune": "Balestrate",
            "provincia": "PA"
        }, {
            "comune": "Baucina",
            "provincia": "PA"
        }, {
            "comune": "Belmonte Mezzagno",
            "provincia": "PA"
        }, {
            "comune": "Bisacquino",
            "provincia": "PA"
        }, {
            "comune": "Bolognetta",
            "provincia": "PA"
        }, {
            "comune": "Bompietro",
            "provincia": "PA"
        }, {
            "comune": "Borgetto",
            "provincia": "PA"
        }, {
            "comune": "Caccamo",
            "provincia": "PA"
        }, {
            "comune": "Caltavuturo",
            "provincia": "PA"
        }, {
            "comune": "Campofelice di Fitalia",
            "provincia": "PA"
        }, {
            "comune": "Campofelice di Roccella",
            "provincia": "PA"
        }, {
            "comune": "Campofiorito",
            "provincia": "PA"
        }, {
            "comune": "Camporeale",
            "provincia": "PA"
        }, {
            "comune": "Capaci",
            "provincia": "PA"
        }, {
            "comune": "Carini",
            "provincia": "PA"
        }, {
            "comune": "Castelbuono",
            "provincia": "PA"
        }, {
            "comune": "Casteldaccia",
            "provincia": "PA"
        }, {
            "comune": "Castellana Sicula",
            "provincia": "PA"
        }, {
            "comune": "Castronovo di Sicilia",
            "provincia": "PA"
        }, {
            "comune": "Cefalà Diana",
            "provincia": "PA"
        }, {
            "comune": "Cefalù",
            "provincia": "PA"
        }, {
            "comune": "Cerda",
            "provincia": "PA"
        }, {
            "comune": "Chiusa Sclafani",
            "provincia": "PA"
        }, {
            "comune": "Ciminna",
            "provincia": "PA"
        }, {
            "comune": "Cinisi",
            "provincia": "PA"
        }, {
            "comune": "Collesano",
            "provincia": "PA"
        }, {
            "comune": "Contessa Entellina",
            "provincia": "PA"
        }, {
            "comune": "Corleone",
            "provincia": "PA"
        }, {
            "comune": "Ficarazzi",
            "provincia": "PA"
        }, {
            "comune": "Gangi",
            "provincia": "PA"
        }, {
            "comune": "Geraci Siculo",
            "provincia": "PA"
        }, {
            "comune": "Giardinello",
            "provincia": "PA"
        }, {
            "comune": "Giuliana",
            "provincia": "PA"
        }, {
            "comune": "Godrano",
            "provincia": "PA"
        }, {
            "comune": "Gratteri",
            "provincia": "PA"
        }, {
            "comune": "Isnello",
            "provincia": "PA"
        }, {
            "comune": "Isola delle Femmine",
            "provincia": "PA"
        }, {
            "comune": "Lascari",
            "provincia": "PA"
        }, {
            "comune": "Lercara Friddi",
            "provincia": "PA"
        }, {
            "comune": "Marineo",
            "provincia": "PA"
        }, {
            "comune": "Mezzojuso",
            "provincia": "PA"
        }, {
            "comune": "Misilmeri",
            "provincia": "PA"
        }, {
            "comune": "Monreale",
            "provincia": "PA"
        }, {
            "comune": "Montelepre",
            "provincia": "PA"
        }, {
            "comune": "Montemaggiore Belsito",
            "provincia": "PA"
        }, {
            "comune": "Palazzo Adriano",
            "provincia": "PA"
        }, {
            "comune": "Palermo",
            "provincia": "PA"
        }, {
            "comune": "Partinico",
            "provincia": "PA"
        }, {
            "comune": "Petralia Soprana",
            "provincia": "PA"
        }, {
            "comune": "Petralia Sottana",
            "provincia": "PA"
        }, {
            "comune": "Piana degli Albanesi",
            "provincia": "PA"
        }, {
            "comune": "Polizzi Generosa",
            "provincia": "PA"
        }, {
            "comune": "Pollina",
            "provincia": "PA"
        }, {
            "comune": "Prizzi",
            "provincia": "PA"
        }, {
            "comune": "Roccamena",
            "provincia": "PA"
        }, {
            "comune": "Roccapalumba",
            "provincia": "PA"
        }, {
            "comune": "San Cipirello",
            "provincia": "PA"
        }, {
            "comune": "San Giuseppe Jato",
            "provincia": "PA"
        }, {
            "comune": "San Mauro Castelverde",
            "provincia": "PA"
        }, {
            "comune": "Santa Cristina Gela",
            "provincia": "PA"
        }, {
            "comune": "Santa Flavia",
            "provincia": "PA"
        }, {
            "comune": "Sciara",
            "provincia": "PA"
        }, {
            "comune": "Sclafani Bagni",
            "provincia": "PA"
        }, {
            "comune": "Termini Imerese",
            "provincia": "PA"
        }, {
            "comune": "Terrasini",
            "provincia": "PA"
        }, {
            "comune": "Torretta",
            "provincia": "PA"
        }, {
            "comune": "Trabia",
            "provincia": "PA"
        }, {
            "comune": "Trappeto",
            "provincia": "PA"
        }, {
            "comune": "Ustica",
            "provincia": "PA"
        }, {
            "comune": "Valledolmo",
            "provincia": "PA"
        }, {
            "comune": "Ventimiglia di Sicilia",
            "provincia": "PA"
        }, {
            "comune": "Vicari",
            "provincia": "PA"
        }, {
            "comune": "Villabate",
            "provincia": "PA"
        }, {
            "comune": "Villafrati",
            "provincia": "PA"
        }, {
            "comune": "Scillato",
            "provincia": "PA"
        }, {
            "comune": "Blufi",
            "provincia": "PA"
        }, {
            "comune": "Alcara Li Fusi",
            "provincia": "ME"
        }, {
            "comune": "Alì",
            "provincia": "ME"
        }, {
            "comune": "Alì Terme",
            "provincia": "ME"
        }, {
            "comune": "Antillo",
            "provincia": "ME"
        }, {
            "comune": "Barcellona Pozzo di Gotto",
            "provincia": "ME"
        }, {
            "comune": "Basicò",
            "provincia": "ME"
        }, {
            "comune": "Brolo",
            "provincia": "ME"
        }, {
            "comune": "Capizzi",
            "provincia": "ME"
        }, {
            "comune": "Capo d'Orlando",
            "provincia": "ME"
        }, {
            "comune": "Capri Leone",
            "provincia": "ME"
        }, {
            "comune": "Caronia",
            "provincia": "ME"
        }, {
            "comune": "Casalvecchio Siculo",
            "provincia": "ME"
        }, {
            "comune": "Castel di Lucio",
            "provincia": "ME"
        }, {
            "comune": "Castell'Umberto",
            "provincia": "ME"
        }, {
            "comune": "Castelmola",
            "provincia": "ME"
        }, {
            "comune": "Castroreale",
            "provincia": "ME"
        }, {
            "comune": "Cesarò",
            "provincia": "ME"
        }, {
            "comune": "Condrò",
            "provincia": "ME"
        }, {
            "comune": "Falcone",
            "provincia": "ME"
        }, {
            "comune": "Ficarra",
            "provincia": "ME"
        }, {
            "comune": "Fiumedinisi",
            "provincia": "ME"
        }, {
            "comune": "Floresta",
            "provincia": "ME"
        }, {
            "comune": "Fondachelli-Fantina",
            "provincia": "ME"
        }, {
            "comune": "Forza d'Agrò",
            "provincia": "ME"
        }, {
            "comune": "Francavilla di Sicilia",
            "provincia": "ME"
        }, {
            "comune": "Frazzanò",
            "provincia": "ME"
        }, {
            "comune": "Furci Siculo",
            "provincia": "ME"
        }, {
            "comune": "Furnari",
            "provincia": "ME"
        }, {
            "comune": "Gaggi",
            "provincia": "ME"
        }, {
            "comune": "Galati Mamertino",
            "provincia": "ME"
        }, {
            "comune": "Gallodoro",
            "provincia": "ME"
        }, {
            "comune": "Giardini-Naxos",
            "provincia": "ME"
        }, {
            "comune": "Gioiosa Marea",
            "provincia": "ME"
        }, {
            "comune": "Graniti",
            "provincia": "ME"
        }, {
            "comune": "Gualtieri Sicaminò",
            "provincia": "ME"
        }, {
            "comune": "Itala",
            "provincia": "ME"
        }, {
            "comune": "Leni",
            "provincia": "ME"
        }, {
            "comune": "Letojanni",
            "provincia": "ME"
        }, {
            "comune": "Librizzi",
            "provincia": "ME"
        }, {
            "comune": "Limina",
            "provincia": "ME"
        }, {
            "comune": "Lipari",
            "provincia": "ME"
        }, {
            "comune": "Longi",
            "provincia": "ME"
        }, {
            "comune": "Malfa",
            "provincia": "ME"
        }, {
            "comune": "Malvagna",
            "provincia": "ME"
        }, {
            "comune": "Mandanici",
            "provincia": "ME"
        }, {
            "comune": "Mazzarrà Sant'Andrea",
            "provincia": "ME"
        }, {
            "comune": "Merì",
            "provincia": "ME"
        }, {
            "comune": "Messina",
            "provincia": "ME"
        }, {
            "comune": "Milazzo",
            "provincia": "ME"
        }, {
            "comune": "Militello Rosmarino",
            "provincia": "ME"
        }, {
            "comune": "Mirto",
            "provincia": "ME"
        }, {
            "comune": "Mistretta",
            "provincia": "ME"
        }, {
            "comune": "Moio Alcantara",
            "provincia": "ME"
        }, {
            "comune": "Monforte San Giorgio",
            "provincia": "ME"
        }, {
            "comune": "Mongiuffi Melia",
            "provincia": "ME"
        }, {
            "comune": "Montagnareale",
            "provincia": "ME"
        }, {
            "comune": "Montalbano Elicona",
            "provincia": "ME"
        }, {
            "comune": "Motta Camastra",
            "provincia": "ME"
        }, {
            "comune": "Motta d'Affermo",
            "provincia": "ME"
        }, {
            "comune": "Naso",
            "provincia": "ME"
        }, {
            "comune": "Nizza di Sicilia",
            "provincia": "ME"
        }, {
            "comune": "Novara di Sicilia",
            "provincia": "ME"
        }, {
            "comune": "Oliveri",
            "provincia": "ME"
        }, {
            "comune": "Pace del Mela",
            "provincia": "ME"
        }, {
            "comune": "Pagliara",
            "provincia": "ME"
        }, {
            "comune": "Patti",
            "provincia": "ME"
        }, {
            "comune": "Pettineo",
            "provincia": "ME"
        }, {
            "comune": "Piraino",
            "provincia": "ME"
        }, {
            "comune": "Raccuja",
            "provincia": "ME"
        }, {
            "comune": "Reitano",
            "provincia": "ME"
        }, {
            "comune": "Roccafiorita",
            "provincia": "ME"
        }, {
            "comune": "Roccalumera",
            "provincia": "ME"
        }, {
            "comune": "Roccavaldina",
            "provincia": "ME"
        }, {
            "comune": "Roccella Valdemone",
            "provincia": "ME"
        }, {
            "comune": "Rodì Milici",
            "provincia": "ME"
        }, {
            "comune": "Rometta",
            "provincia": "ME"
        }, {
            "comune": "San Filippo del Mela",
            "provincia": "ME"
        }, {
            "comune": "San Fratello",
            "provincia": "ME"
        }, {
            "comune": "San Marco D'Alunzio",
            "provincia": "ME"
        }, {
            "comune": "San Pier Niceto",
            "provincia": "ME"
        }, {
            "comune": "San Piero Patti",
            "provincia": "ME"
        }, {
            "comune": "San Salvatore di Fitalia",
            "provincia": "ME"
        }, {
            "comune": "Santa Domenica Vittoria",
            "provincia": "ME"
        }, {
            "comune": "Sant'Agata di Militello",
            "provincia": "ME"
        }, {
            "comune": "Sant'Alessio Siculo",
            "provincia": "ME"
        }, {
            "comune": "Santa Lucia del Mela",
            "provincia": "ME"
        }, {
            "comune": "Santa Marina Salina",
            "provincia": "ME"
        }, {
            "comune": "Sant'Angelo di Brolo",
            "provincia": "ME"
        }, {
            "comune": "Santa Teresa di Riva",
            "provincia": "ME"
        }, {
            "comune": "San Teodoro",
            "provincia": "ME"
        }, {
            "comune": "Santo Stefano di Camastra",
            "provincia": "ME"
        }, {
            "comune": "Saponara",
            "provincia": "ME"
        }, {
            "comune": "Savoca",
            "provincia": "ME"
        }, {
            "comune": "Scaletta Zanclea",
            "provincia": "ME"
        }, {
            "comune": "Sinagra",
            "provincia": "ME"
        }, {
            "comune": "Spadafora",
            "provincia": "ME"
        }, {
            "comune": "Taormina",
            "provincia": "ME"
        }, {
            "comune": "Torregrotta",
            "provincia": "ME"
        }, {
            "comune": "Tortorici",
            "provincia": "ME"
        }, {
            "comune": "Tripi",
            "provincia": "ME"
        }, {
            "comune": "Tusa",
            "provincia": "ME"
        }, {
            "comune": "Ucria",
            "provincia": "ME"
        }, {
            "comune": "Valdina",
            "provincia": "ME"
        }, {
            "comune": "Venetico",
            "provincia": "ME"
        }, {
            "comune": "Villafranca Tirrena",
            "provincia": "ME"
        }, {
            "comune": "Terme Vigliatore",
            "provincia": "ME"
        }, {
            "comune": "Acquedolci",
            "provincia": "ME"
        }, {
            "comune": "Torrenova",
            "provincia": "ME"
        }, {
            "comune": "Agrigento",
            "provincia": "AG"
        }, {
            "comune": "Alessandria della Rocca",
            "provincia": "AG"
        }, {
            "comune": "Aragona",
            "provincia": "AG"
        }, {
            "comune": "Bivona",
            "provincia": "AG"
        }, {
            "comune": "Burgio",
            "provincia": "AG"
        }, {
            "comune": "Calamonaci",
            "provincia": "AG"
        }, {
            "comune": "Caltabellotta",
            "provincia": "AG"
        }, {
            "comune": "Camastra",
            "provincia": "AG"
        }, {
            "comune": "Cammarata",
            "provincia": "AG"
        }, {
            "comune": "Campobello di Licata",
            "provincia": "AG"
        }, {
            "comune": "Canicattì",
            "provincia": "AG"
        }, {
            "comune": "Casteltermini",
            "provincia": "AG"
        }, {
            "comune": "Castrofilippo",
            "provincia": "AG"
        }, {
            "comune": "Cattolica Eraclea",
            "provincia": "AG"
        }, {
            "comune": "Cianciana",
            "provincia": "AG"
        }, {
            "comune": "Comitini",
            "provincia": "AG"
        }, {
            "comune": "Favara",
            "provincia": "AG"
        }, {
            "comune": "Grotte",
            "provincia": "AG"
        }, {
            "comune": "Joppolo Giancaxio",
            "provincia": "AG"
        }, {
            "comune": "Lampedusa e Linosa",
            "provincia": "AG"
        }, {
            "comune": "Licata",
            "provincia": "AG"
        }, {
            "comune": "Lucca Sicula",
            "provincia": "AG"
        }, {
            "comune": "Menfi",
            "provincia": "AG"
        }, {
            "comune": "Montallegro",
            "provincia": "AG"
        }, {
            "comune": "Montevago",
            "provincia": "AG"
        }, {
            "comune": "Naro",
            "provincia": "AG"
        }, {
            "comune": "Palma di Montechiaro",
            "provincia": "AG"
        }, {
            "comune": "Porto Empedocle",
            "provincia": "AG"
        }, {
            "comune": "Racalmuto",
            "provincia": "AG"
        }, {
            "comune": "Raffadali",
            "provincia": "AG"
        }, {
            "comune": "Ravanusa",
            "provincia": "AG"
        }, {
            "comune": "Realmonte",
            "provincia": "AG"
        }, {
            "comune": "Ribera",
            "provincia": "AG"
        }, {
            "comune": "Sambuca di Sicilia",
            "provincia": "AG"
        }, {
            "comune": "San Biagio Platani",
            "provincia": "AG"
        }, {
            "comune": "San Giovanni Gemini",
            "provincia": "AG"
        }, {
            "comune": "Santa Elisabetta",
            "provincia": "AG"
        }, {
            "comune": "Santa Margherita di Belice",
            "provincia": "AG"
        }, {
            "comune": "Sant'Angelo Muxaro",
            "provincia": "AG"
        }, {
            "comune": "Santo Stefano Quisquina",
            "provincia": "AG"
        }, {
            "comune": "Sciacca",
            "provincia": "AG"
        }, {
            "comune": "Siculiana",
            "provincia": "AG"
        }, {
            "comune": "Villafranca Sicula",
            "provincia": "AG"
        }, {
            "comune": "Acquaviva Platani",
            "provincia": "CL"
        }, {
            "comune": "Bompensiere",
            "provincia": "CL"
        }, {
            "comune": "Butera",
            "provincia": "CL"
        }, {
            "comune": "Caltanissetta",
            "provincia": "CL"
        }, {
            "comune": "Campofranco",
            "provincia": "CL"
        }, {
            "comune": "Delia",
            "provincia": "CL"
        }, {
            "comune": "Gela",
            "provincia": "CL"
        }, {
            "comune": "Marianopoli",
            "provincia": "CL"
        }, {
            "comune": "Mazzarino",
            "provincia": "CL"
        }, {
            "comune": "Milena",
            "provincia": "CL"
        }, {
            "comune": "Montedoro",
            "provincia": "CL"
        }, {
            "comune": "Mussomeli",
            "provincia": "CL"
        }, {
            "comune": "Niscemi",
            "provincia": "CL"
        }, {
            "comune": "Resuttano",
            "provincia": "CL"
        }, {
            "comune": "Riesi",
            "provincia": "CL"
        }, {
            "comune": "San Cataldo",
            "provincia": "CL"
        }, {
            "comune": "Santa Caterina Villarmosa",
            "provincia": "CL"
        }, {
            "comune": "Serradifalco",
            "provincia": "CL"
        }, {
            "comune": "Sommatino",
            "provincia": "CL"
        }, {
            "comune": "Sutera",
            "provincia": "CL"
        }, {
            "comune": "Vallelunga Pratameno",
            "provincia": "CL"
        }, {
            "comune": "Villalba",
            "provincia": "CL"
        }, {
            "comune": "Agira",
            "provincia": "EN"
        }, {
            "comune": "Aidone",
            "provincia": "EN"
        }, {
            "comune": "Assoro",
            "provincia": "EN"
        }, {
            "comune": "Barrafranca",
            "provincia": "EN"
        }, {
            "comune": "Calascibetta",
            "provincia": "EN"
        }, {
            "comune": "Catenanuova",
            "provincia": "EN"
        }, {
            "comune": "Centuripe",
            "provincia": "EN"
        }, {
            "comune": "Cerami",
            "provincia": "EN"
        }, {
            "comune": "Enna",
            "provincia": "EN"
        }, {
            "comune": "Gagliano Castelferrato",
            "provincia": "EN"
        }, {
            "comune": "Leonforte",
            "provincia": "EN"
        }, {
            "comune": "Nicosia",
            "provincia": "EN"
        }, {
            "comune": "Nissoria",
            "provincia": "EN"
        }, {
            "comune": "Piazza Armerina",
            "provincia": "EN"
        }, {
            "comune": "Pietraperzia",
            "provincia": "EN"
        }, {
            "comune": "Regalbuto",
            "provincia": "EN"
        }, {
            "comune": "Sperlinga",
            "provincia": "EN"
        }, {
            "comune": "Troina",
            "provincia": "EN"
        }, {
            "comune": "Valguarnera Caropepe",
            "provincia": "EN"
        }, {
            "comune": "Villarosa",
            "provincia": "EN"
        }, {
            "comune": "Aci Bonaccorsi",
            "provincia": "CT"
        }, {
            "comune": "Aci Castello",
            "provincia": "CT"
        }, {
            "comune": "Aci Catena",
            "provincia": "CT"
        }, {
            "comune": "Acireale",
            "provincia": "CT"
        }, {
            "comune": "Aci Sant'Antonio",
            "provincia": "CT"
        }, {
            "comune": "Adrano",
            "provincia": "CT"
        }, {
            "comune": "Belpasso",
            "provincia": "CT"
        }, {
            "comune": "Biancavilla",
            "provincia": "CT"
        }, {
            "comune": "Bronte",
            "provincia": "CT"
        }, {
            "comune": "Calatabiano",
            "provincia": "CT"
        }, {
            "comune": "Caltagirone",
            "provincia": "CT"
        }, {
            "comune": "Camporotondo Etneo",
            "provincia": "CT"
        }, {
            "comune": "Castel di Iudica",
            "provincia": "CT"
        }, {
            "comune": "Castiglione di Sicilia",
            "provincia": "CT"
        }, {
            "comune": "Catania",
            "provincia": "CT"
        }, {
            "comune": "Fiumefreddo di Sicilia",
            "provincia": "CT"
        }, {
            "comune": "Giarre",
            "provincia": "CT"
        }, {
            "comune": "Grammichele",
            "provincia": "CT"
        }, {
            "comune": "Gravina di Catania",
            "provincia": "CT"
        }, {
            "comune": "Licodia Eubea",
            "provincia": "CT"
        }, {
            "comune": "Linguaglossa",
            "provincia": "CT"
        }, {
            "comune": "Maletto",
            "provincia": "CT"
        }, {
            "comune": "Mascali",
            "provincia": "CT"
        }, {
            "comune": "Mascalucia",
            "provincia": "CT"
        }, {
            "comune": "Militello in Val di Catania",
            "provincia": "CT"
        }, {
            "comune": "Milo",
            "provincia": "CT"
        }, {
            "comune": "Mineo",
            "provincia": "CT"
        }, {
            "comune": "Mirabella Imbaccari",
            "provincia": "CT"
        }, {
            "comune": "Misterbianco",
            "provincia": "CT"
        }, {
            "comune": "Motta Sant'Anastasia",
            "provincia": "CT"
        }, {
            "comune": "Nicolosi",
            "provincia": "CT"
        }, {
            "comune": "Palagonia",
            "provincia": "CT"
        }, {
            "comune": "Paternò",
            "provincia": "CT"
        }, {
            "comune": "Pedara",
            "provincia": "CT"
        }, {
            "comune": "Piedimonte Etneo",
            "provincia": "CT"
        }, {
            "comune": "Raddusa",
            "provincia": "CT"
        }, {
            "comune": "Ramacca",
            "provincia": "CT"
        }, {
            "comune": "Randazzo",
            "provincia": "CT"
        }, {
            "comune": "Riposto",
            "provincia": "CT"
        }, {
            "comune": "San Cono",
            "provincia": "CT"
        }, {
            "comune": "San Giovanni la Punta",
            "provincia": "CT"
        }, {
            "comune": "San Gregorio di Catania",
            "provincia": "CT"
        }, {
            "comune": "San Michele di Ganzaria",
            "provincia": "CT"
        }, {
            "comune": "San Pietro Clarenza",
            "provincia": "CT"
        }, {
            "comune": "Sant'Agata Li Battiati",
            "provincia": "CT"
        }, {
            "comune": "Sant'Alfio",
            "provincia": "CT"
        }, {
            "comune": "Santa Maria di Licodia",
            "provincia": "CT"
        }, {
            "comune": "Santa Venerina",
            "provincia": "CT"
        }, {
            "comune": "Scordia",
            "provincia": "CT"
        }, {
            "comune": "Trecastagni",
            "provincia": "CT"
        }, {
            "comune": "Tremestieri Etneo",
            "provincia": "CT"
        }, {
            "comune": "Valverde",
            "provincia": "CT"
        }, {
            "comune": "Viagrande",
            "provincia": "CT"
        }, {
            "comune": "Vizzini",
            "provincia": "CT"
        }, {
            "comune": "Zafferana Etnea",
            "provincia": "CT"
        }, {
            "comune": "Mazzarrone",
            "provincia": "CT"
        }, {
            "comune": "Maniace",
            "provincia": "CT"
        }, {
            "comune": "Ragalna",
            "provincia": "CT"
        }, {
            "comune": "Acate",
            "provincia": "RG"
        }, {
            "comune": "Chiaramonte Gulfi",
            "provincia": "RG"
        }, {
            "comune": "Comiso",
            "provincia": "RG"
        }, {
            "comune": "Giarratana",
            "provincia": "RG"
        }, {
            "comune": "Ispica",
            "provincia": "RG"
        }, {
            "comune": "Modica",
            "provincia": "RG"
        }, {
            "comune": "Monterosso Almo",
            "provincia": "RG"
        }, {
            "comune": "Pozzallo",
            "provincia": "RG"
        }, {
            "comune": "Ragusa",
            "provincia": "RG"
        }, {
            "comune": "Santa Croce Camerina",
            "provincia": "RG"
        }, {
            "comune": "Scicli",
            "provincia": "RG"
        }, {
            "comune": "Vittoria",
            "provincia": "RG"
        }, {
            "comune": "Augusta",
            "provincia": "SR"
        }, {
            "comune": "Avola",
            "provincia": "SR"
        }, {
            "comune": "Buccheri",
            "provincia": "SR"
        }, {
            "comune": "Buscemi",
            "provincia": "SR"
        }, {
            "comune": "Canicattini Bagni",
            "provincia": "SR"
        }, {
            "comune": "Carlentini",
            "provincia": "SR"
        }, {
            "comune": "Cassaro",
            "provincia": "SR"
        }, {
            "comune": "Ferla",
            "provincia": "SR"
        }, {
            "comune": "Floridia",
            "provincia": "SR"
        }, {
            "comune": "Francofonte",
            "provincia": "SR"
        }, {
            "comune": "Lentini",
            "provincia": "SR"
        }, {
            "comune": "Melilli",
            "provincia": "SR"
        }, {
            "comune": "Noto",
            "provincia": "SR"
        }, {
            "comune": "Pachino",
            "provincia": "SR"
        }, {
            "comune": "Palazzolo Acreide",
            "provincia": "SR"
        }, {
            "comune": "Rosolini",
            "provincia": "SR"
        }, {
            "comune": "Siracusa",
            "provincia": "SR"
        }, {
            "comune": "Solarino",
            "provincia": "SR"
        }, {
            "comune": "Sortino",
            "provincia": "SR"
        }, {
            "comune": "Portopalo di Capo Passero",
            "provincia": "SR"
        }, {
            "comune": "Priolo Gargallo",
            "provincia": "SR"
        }, {
            "comune": "Aggius",
            "provincia": "SS"
        }, {
            "comune": "Alà dei Sardi",
            "provincia": "SS"
        }, {
            "comune": "Alghero",
            "provincia": "SS"
        }, {
            "comune": "Anela",
            "provincia": "SS"
        }, {
            "comune": "Ardara",
            "provincia": "SS"
        }, {
            "comune": "Arzachena",
            "provincia": "SS"
        }, {
            "comune": "Banari",
            "provincia": "SS"
        }, {
            "comune": "Benetutti",
            "provincia": "SS"
        }, {
            "comune": "Berchidda",
            "provincia": "SS"
        }, {
            "comune": "Bessude",
            "provincia": "SS"
        }, {
            "comune": "Bonnanaro",
            "provincia": "SS"
        }, {
            "comune": "Bono",
            "provincia": "SS"
        }, {
            "comune": "Bonorva",
            "provincia": "SS"
        }, {
            "comune": "Bortigiadas",
            "provincia": "SS"
        }, {
            "comune": "Borutta",
            "provincia": "SS"
        }, {
            "comune": "Bottidda",
            "provincia": "SS"
        }, {
            "comune": "Buddusò",
            "provincia": "SS"
        }, {
            "comune": "Bultei",
            "provincia": "SS"
        }, {
            "comune": "Bulzi",
            "provincia": "SS"
        }, {
            "comune": "Burgos",
            "provincia": "SS"
        }, {
            "comune": "Calangianus",
            "provincia": "SS"
        }, {
            "comune": "Cargeghe",
            "provincia": "SS"
        }, {
            "comune": "Castelsardo",
            "provincia": "SS"
        }, {
            "comune": "Cheremule",
            "provincia": "SS"
        }, {
            "comune": "Chiaramonti",
            "provincia": "SS"
        }, {
            "comune": "Codrongianos",
            "provincia": "SS"
        }, {
            "comune": "Cossoine",
            "provincia": "SS"
        }, {
            "comune": "Esporlatu",
            "provincia": "SS"
        }, {
            "comune": "Florinas",
            "provincia": "SS"
        }, {
            "comune": "Giave",
            "provincia": "SS"
        }, {
            "comune": "Illorai",
            "provincia": "SS"
        }, {
            "comune": "Ittireddu",
            "provincia": "SS"
        }, {
            "comune": "Ittiri",
            "provincia": "SS"
        }, {
            "comune": "Laerru",
            "provincia": "SS"
        }, {
            "comune": "La Maddalena",
            "provincia": "SS"
        }, {
            "comune": "Luogosanto",
            "provincia": "SS"
        }, {
            "comune": "Luras",
            "provincia": "SS"
        }, {
            "comune": "Mara",
            "provincia": "SS"
        }, {
            "comune": "Martis",
            "provincia": "SS"
        }, {
            "comune": "Monteleone Rocca Doria",
            "provincia": "SS"
        }, {
            "comune": "Monti",
            "provincia": "SS"
        }, {
            "comune": "Mores",
            "provincia": "SS"
        }, {
            "comune": "Muros",
            "provincia": "SS"
        }, {
            "comune": "Nughedu San Nicolò",
            "provincia": "SS"
        }, {
            "comune": "Nule",
            "provincia": "SS"
        }, {
            "comune": "Nulvi",
            "provincia": "SS"
        }, {
            "comune": "Olbia",
            "provincia": "SS"
        }, {
            "comune": "Olmedo",
            "provincia": "SS"
        }, {
            "comune": "Oschiri",
            "provincia": "SS"
        }, {
            "comune": "Osilo",
            "provincia": "SS"
        }, {
            "comune": "Ossi",
            "provincia": "SS"
        }, {
            "comune": "Ozieri",
            "provincia": "SS"
        }, {
            "comune": "Padria",
            "provincia": "SS"
        }, {
            "comune": "Palau",
            "provincia": "SS"
        }, {
            "comune": "Pattada",
            "provincia": "SS"
        }, {
            "comune": "Perfugas",
            "provincia": "SS"
        }, {
            "comune": "Ploaghe",
            "provincia": "SS"
        }, {
            "comune": "Porto Torres",
            "provincia": "SS"
        }, {
            "comune": "Pozzomaggiore",
            "provincia": "SS"
        }, {
            "comune": "Putifigari",
            "provincia": "SS"
        }, {
            "comune": "Romana",
            "provincia": "SS"
        }, {
            "comune": "Aglientu",
            "provincia": "SS"
        }, {
            "comune": "Santa Teresa Gallura",
            "provincia": "SS"
        }, {
            "comune": "Sassari",
            "provincia": "SS"
        }, {
            "comune": "Sedini",
            "provincia": "SS"
        }, {
            "comune": "Semestene",
            "provincia": "SS"
        }, {
            "comune": "Sennori",
            "provincia": "SS"
        }, {
            "comune": "Siligo",
            "provincia": "SS"
        }, {
            "comune": "Sorso",
            "provincia": "SS"
        }, {
            "comune": "Tempio Pausania",
            "provincia": "SS"
        }, {
            "comune": "Thiesi",
            "provincia": "SS"
        }, {
            "comune": "Tissi",
            "provincia": "SS"
        }, {
            "comune": "Torralba",
            "provincia": "SS"
        }, {
            "comune": "Trinità d'Agultu e Vignola",
            "provincia": "SS"
        }, {
            "comune": "Tula",
            "provincia": "SS"
        }, {
            "comune": "Uri",
            "provincia": "SS"
        }, {
            "comune": "Usini",
            "provincia": "SS"
        }, {
            "comune": "Villanova Monteleone",
            "provincia": "SS"
        }, {
            "comune": "Valledoria",
            "provincia": "SS"
        }, {
            "comune": "Telti",
            "provincia": "SS"
        }, {
            "comune": "Badesi",
            "provincia": "SS"
        }, {
            "comune": "Viddalba",
            "provincia": "SS"
        }, {
            "comune": "Golfo Aranci",
            "provincia": "SS"
        }, {
            "comune": "Loiri Porto San Paolo",
            "provincia": "SS"
        }, {
            "comune": "Sant'Antonio di Gallura",
            "provincia": "SS"
        }, {
            "comune": "Tergu",
            "provincia": "SS"
        }, {
            "comune": "Santa Maria Coghinas",
            "provincia": "SS"
        }, {
            "comune": "Erula",
            "provincia": "SS"
        }, {
            "comune": "Stintino",
            "provincia": "SS"
        }, {
            "comune": "Padru",
            "provincia": "SS"
        }, {
            "comune": "Budoni",
            "provincia": "SS"
        }, {
            "comune": "San Teodoro",
            "provincia": "SS"
        }, {
            "comune": "Aritzo",
            "provincia": "NU"
        }, {
            "comune": "Arzana",
            "provincia": "NU"
        }, {
            "comune": "Atzara",
            "provincia": "NU"
        }, {
            "comune": "Austis",
            "provincia": "NU"
        }, {
            "comune": "Bari Sardo",
            "provincia": "NU"
        }, {
            "comune": "Baunei",
            "provincia": "NU"
        }, {
            "comune": "Belvì",
            "provincia": "NU"
        }, {
            "comune": "Birori",
            "provincia": "NU"
        }, {
            "comune": "Bitti",
            "provincia": "NU"
        }, {
            "comune": "Bolotana",
            "provincia": "NU"
        }, {
            "comune": "Borore",
            "provincia": "NU"
        }, {
            "comune": "Bortigali",
            "provincia": "NU"
        }, {
            "comune": "Desulo",
            "provincia": "NU"
        }, {
            "comune": "Dorgali",
            "provincia": "NU"
        }, {
            "comune": "Dualchi",
            "provincia": "NU"
        }, {
            "comune": "Elini",
            "provincia": "NU"
        }, {
            "comune": "Fonni",
            "provincia": "NU"
        }, {
            "comune": "Gadoni",
            "provincia": "NU"
        }, {
            "comune": "Gairo",
            "provincia": "NU"
        }, {
            "comune": "Galtellì",
            "provincia": "NU"
        }, {
            "comune": "Gavoi",
            "provincia": "NU"
        }, {
            "comune": "Girasole",
            "provincia": "NU"
        }, {
            "comune": "Ilbono",
            "provincia": "NU"
        }, {
            "comune": "Irgoli",
            "provincia": "NU"
        }, {
            "comune": "Jerzu",
            "provincia": "NU"
        }, {
            "comune": "Lanusei",
            "provincia": "NU"
        }, {
            "comune": "Lei",
            "provincia": "NU"
        }, {
            "comune": "Loceri",
            "provincia": "NU"
        }, {
            "comune": "Loculi",
            "provincia": "NU"
        }, {
            "comune": "Lodè",
            "provincia": "NU"
        }, {
            "comune": "Lotzorai",
            "provincia": "NU"
        }, {
            "comune": "Lula",
            "provincia": "NU"
        }, {
            "comune": "Macomer",
            "provincia": "NU"
        }, {
            "comune": "Mamoiada",
            "provincia": "NU"
        }, {
            "comune": "Meana Sardo",
            "provincia": "NU"
        }, {
            "comune": "Noragugume",
            "provincia": "NU"
        }, {
            "comune": "Nuoro",
            "provincia": "NU"
        }, {
            "comune": "Oliena",
            "provincia": "NU"
        }, {
            "comune": "Ollolai",
            "provincia": "NU"
        }, {
            "comune": "Olzai",
            "provincia": "NU"
        }, {
            "comune": "Onanì",
            "provincia": "NU"
        }, {
            "comune": "Onifai",
            "provincia": "NU"
        }, {
            "comune": "Oniferi",
            "provincia": "NU"
        }, {
            "comune": "Orani",
            "provincia": "NU"
        }, {
            "comune": "Orgosolo",
            "provincia": "NU"
        }, {
            "comune": "Orosei",
            "provincia": "NU"
        }, {
            "comune": "Orotelli",
            "provincia": "NU"
        }, {
            "comune": "Ortueri",
            "provincia": "NU"
        }, {
            "comune": "Orune",
            "provincia": "NU"
        }, {
            "comune": "Osidda",
            "provincia": "NU"
        }, {
            "comune": "Osini",
            "provincia": "NU"
        }, {
            "comune": "Ottana",
            "provincia": "NU"
        }, {
            "comune": "Ovodda",
            "provincia": "NU"
        }, {
            "comune": "Perdasdefogu",
            "provincia": "NU"
        }, {
            "comune": "Posada",
            "provincia": "NU"
        }, {
            "comune": "Sarule",
            "provincia": "NU"
        }, {
            "comune": "Silanus",
            "provincia": "NU"
        }, {
            "comune": "Sindia",
            "provincia": "NU"
        }, {
            "comune": "Siniscola",
            "provincia": "NU"
        }, {
            "comune": "Sorgono",
            "provincia": "NU"
        }, {
            "comune": "Talana",
            "provincia": "NU"
        }, {
            "comune": "Tertenia",
            "provincia": "NU"
        }, {
            "comune": "Teti",
            "provincia": "NU"
        }, {
            "comune": "Tiana",
            "provincia": "NU"
        }, {
            "comune": "Tonara",
            "provincia": "NU"
        }, {
            "comune": "Torpè",
            "provincia": "NU"
        }, {
            "comune": "Tortolì",
            "provincia": "NU"
        }, {
            "comune": "Triei",
            "provincia": "NU"
        }, {
            "comune": "Ulassai",
            "provincia": "NU"
        }, {
            "comune": "Urzulei",
            "provincia": "NU"
        }, {
            "comune": "Ussassai",
            "provincia": "NU"
        }, {
            "comune": "Villagrande Strisaili",
            "provincia": "NU"
        }, {
            "comune": "Cardedu",
            "provincia": "NU"
        }, {
            "comune": "Lodine",
            "provincia": "NU"
        }, {
            "comune": "Assemini",
            "provincia": "CA"
        }, {
            "comune": "Cagliari",
            "provincia": "CA"
        }, {
            "comune": "Capoterra",
            "provincia": "CA"
        }, {
            "comune": "Decimomannu",
            "provincia": "CA"
        }, {
            "comune": "Maracalagonis",
            "provincia": "CA"
        }, {
            "comune": "Pula",
            "provincia": "CA"
        }, {
            "comune": "Quartu Sant'Elena",
            "provincia": "CA"
        }, {
            "comune": "Sarroch",
            "provincia": "CA"
        }, {
            "comune": "Selargius",
            "provincia": "CA"
        }, {
            "comune": "Sestu",
            "provincia": "CA"
        }, {
            "comune": "Settimo San Pietro",
            "provincia": "CA"
        }, {
            "comune": "Sinnai",
            "provincia": "CA"
        }, {
            "comune": "Uta",
            "provincia": "CA"
        }, {
            "comune": "Villa San Pietro",
            "provincia": "CA"
        }, {
            "comune": "Quartucciu",
            "provincia": "CA"
        }, {
            "comune": "Elmas",
            "provincia": "CA"
        }, {
            "comune": "Monserrato",
            "provincia": "CA"
        }, {
            "comune": "Andreis",
            "provincia": "PN"
        }, {
            "comune": "Arba",
            "provincia": "PN"
        }, {
            "comune": "Aviano",
            "provincia": "PN"
        }, {
            "comune": "Azzano Decimo",
            "provincia": "PN"
        }, {
            "comune": "Barcis",
            "provincia": "PN"
        }, {
            "comune": "Brugnera",
            "provincia": "PN"
        }, {
            "comune": "Budoia",
            "provincia": "PN"
        }, {
            "comune": "Caneva",
            "provincia": "PN"
        }, {
            "comune": "Casarsa della Delizia",
            "provincia": "PN"
        }, {
            "comune": "Castelnovo del Friuli",
            "provincia": "PN"
        }, {
            "comune": "Cavasso Nuovo",
            "provincia": "PN"
        }, {
            "comune": "Chions",
            "provincia": "PN"
        }, {
            "comune": "Cimolais",
            "provincia": "PN"
        }, {
            "comune": "Claut",
            "provincia": "PN"
        }, {
            "comune": "Clauzetto",
            "provincia": "PN"
        }, {
            "comune": "Cordenons",
            "provincia": "PN"
        }, {
            "comune": "Cordovado",
            "provincia": "PN"
        }, {
            "comune": "Erto e Casso",
            "provincia": "PN"
        }, {
            "comune": "Fanna",
            "provincia": "PN"
        }, {
            "comune": "Fiume Veneto",
            "provincia": "PN"
        }, {
            "comune": "Fontanafredda",
            "provincia": "PN"
        }, {
            "comune": "Frisanco",
            "provincia": "PN"
        }, {
            "comune": "Maniago",
            "provincia": "PN"
        }, {
            "comune": "Meduno",
            "provincia": "PN"
        }, {
            "comune": "Montereale Valcellina",
            "provincia": "PN"
        }, {
            "comune": "Morsano al Tagliamento",
            "provincia": "PN"
        }, {
            "comune": "Pasiano di Pordenone",
            "provincia": "PN"
        }, {
            "comune": "Pinzano al Tagliamento",
            "provincia": "PN"
        }, {
            "comune": "Polcenigo",
            "provincia": "PN"
        }, {
            "comune": "Porcia",
            "provincia": "PN"
        }, {
            "comune": "Pordenone",
            "provincia": "PN"
        }, {
            "comune": "Prata di Pordenone",
            "provincia": "PN"
        }, {
            "comune": "Pravisdomini",
            "provincia": "PN"
        }, {
            "comune": "Roveredo in Piano",
            "provincia": "PN"
        }, {
            "comune": "Sacile",
            "provincia": "PN"
        }, {
            "comune": "San Giorgio della Richinvelda",
            "provincia": "PN"
        }, {
            "comune": "San Martino al Tagliamento",
            "provincia": "PN"
        }, {
            "comune": "San Quirino",
            "provincia": "PN"
        }, {
            "comune": "San Vito al Tagliamento",
            "provincia": "PN"
        }, {
            "comune": "Sequals",
            "provincia": "PN"
        }, {
            "comune": "Sesto al Reghena",
            "provincia": "PN"
        }, {
            "comune": "Spilimbergo",
            "provincia": "PN"
        }, {
            "comune": "Tramonti di Sopra",
            "provincia": "PN"
        }, {
            "comune": "Tramonti di Sotto",
            "provincia": "PN"
        }, {
            "comune": "Travesio",
            "provincia": "PN"
        }, {
            "comune": "Vito d'Asio",
            "provincia": "PN"
        }, {
            "comune": "Vivaro",
            "provincia": "PN"
        }, {
            "comune": "Zoppola",
            "provincia": "PN"
        }, {
            "comune": "Vajont",
            "provincia": "PN"
        }, {
            "comune": "Valvasone Arzene",
            "provincia": "PN"
        }, {
            "comune": "Acquaviva d'Isernia",
            "provincia": "IS"
        }, {
            "comune": "Agnone",
            "provincia": "IS"
        }, {
            "comune": "Bagnoli del Trigno",
            "provincia": "IS"
        }, {
            "comune": "Belmonte del Sannio",
            "provincia": "IS"
        }, {
            "comune": "Cantalupo nel Sannio",
            "provincia": "IS"
        }, {
            "comune": "Capracotta",
            "provincia": "IS"
        }, {
            "comune": "Carovilli",
            "provincia": "IS"
        }, {
            "comune": "Carpinone",
            "provincia": "IS"
        }, {
            "comune": "Castel del Giudice",
            "provincia": "IS"
        }, {
            "comune": "Castelpetroso",
            "provincia": "IS"
        }, {
            "comune": "Castelpizzuto",
            "provincia": "IS"
        }, {
            "comune": "Castel San Vincenzo",
            "provincia": "IS"
        }, {
            "comune": "Castelverrino",
            "provincia": "IS"
        }, {
            "comune": "Cerro al Volturno",
            "provincia": "IS"
        }, {
            "comune": "Chiauci",
            "provincia": "IS"
        }, {
            "comune": "Civitanova del Sannio",
            "provincia": "IS"
        }, {
            "comune": "Colli a Volturno",
            "provincia": "IS"
        }, {
            "comune": "Conca Casale",
            "provincia": "IS"
        }, {
            "comune": "Filignano",
            "provincia": "IS"
        }, {
            "comune": "Forlì del Sannio",
            "provincia": "IS"
        }, {
            "comune": "Fornelli",
            "provincia": "IS"
        }, {
            "comune": "Frosolone",
            "provincia": "IS"
        }, {
            "comune": "Isernia",
            "provincia": "IS"
        }, {
            "comune": "Longano",
            "provincia": "IS"
        }, {
            "comune": "Macchia d'Isernia",
            "provincia": "IS"
        }, {
            "comune": "Macchiagodena",
            "provincia": "IS"
        }, {
            "comune": "Miranda",
            "provincia": "IS"
        }, {
            "comune": "Montaquila",
            "provincia": "IS"
        }, {
            "comune": "Montenero Val Cocchiara",
            "provincia": "IS"
        }, {
            "comune": "Monteroduni",
            "provincia": "IS"
        }, {
            "comune": "Pesche",
            "provincia": "IS"
        }, {
            "comune": "Pescolanciano",
            "provincia": "IS"
        }, {
            "comune": "Pescopennataro",
            "provincia": "IS"
        }, {
            "comune": "Pettoranello del Molise",
            "provincia": "IS"
        }, {
            "comune": "Pietrabbondante",
            "provincia": "IS"
        }, {
            "comune": "Pizzone",
            "provincia": "IS"
        }, {
            "comune": "Poggio Sannita",
            "provincia": "IS"
        }, {
            "comune": "Pozzilli",
            "provincia": "IS"
        }, {
            "comune": "Rionero Sannitico",
            "provincia": "IS"
        }, {
            "comune": "Roccamandolfi",
            "provincia": "IS"
        }, {
            "comune": "Roccasicura",
            "provincia": "IS"
        }, {
            "comune": "Rocchetta a Volturno",
            "provincia": "IS"
        }, {
            "comune": "San Pietro Avellana",
            "provincia": "IS"
        }, {
            "comune": "Sant'Agapito",
            "provincia": "IS"
        }, {
            "comune": "Santa Maria del Molise",
            "provincia": "IS"
        }, {
            "comune": "Sant'Angelo del Pesco",
            "provincia": "IS"
        }, {
            "comune": "Sant'Elena Sannita",
            "provincia": "IS"
        }, {
            "comune": "Scapoli",
            "provincia": "IS"
        }, {
            "comune": "Sessano del Molise",
            "provincia": "IS"
        }, {
            "comune": "Sesto Campano",
            "provincia": "IS"
        }, {
            "comune": "Vastogirardi",
            "provincia": "IS"
        }, {
            "comune": "Venafro",
            "provincia": "IS"
        }, {
            "comune": "Abbasanta",
            "provincia": "OR"
        }, {
            "comune": "Aidomaggiore",
            "provincia": "OR"
        }, {
            "comune": "Albagiara",
            "provincia": "OR"
        }, {
            "comune": "Ales",
            "provincia": "OR"
        }, {
            "comune": "Allai",
            "provincia": "OR"
        }, {
            "comune": "Arborea",
            "provincia": "OR"
        }, {
            "comune": "Ardauli",
            "provincia": "OR"
        }, {
            "comune": "Assolo",
            "provincia": "OR"
        }, {
            "comune": "Asuni",
            "provincia": "OR"
        }, {
            "comune": "Baradili",
            "provincia": "OR"
        }, {
            "comune": "Baratili San Pietro",
            "provincia": "OR"
        }, {
            "comune": "Baressa",
            "provincia": "OR"
        }, {
            "comune": "Bauladu",
            "provincia": "OR"
        }, {
            "comune": "Bidonì",
            "provincia": "OR"
        }, {
            "comune": "Bonarcado",
            "provincia": "OR"
        }, {
            "comune": "Boroneddu",
            "provincia": "OR"
        }, {
            "comune": "Busachi",
            "provincia": "OR"
        }, {
            "comune": "Cabras",
            "provincia": "OR"
        }, {
            "comune": "Cuglieri",
            "provincia": "OR"
        }, {
            "comune": "Fordongianus",
            "provincia": "OR"
        }, {
            "comune": "Ghilarza",
            "provincia": "OR"
        }, {
            "comune": "Gonnoscodina",
            "provincia": "OR"
        }, {
            "comune": "Gonnosnò",
            "provincia": "OR"
        }, {
            "comune": "Gonnostramatza",
            "provincia": "OR"
        }, {
            "comune": "Marrubiu",
            "provincia": "OR"
        }, {
            "comune": "Masullas",
            "provincia": "OR"
        }, {
            "comune": "Milis",
            "provincia": "OR"
        }, {
            "comune": "Mogorella",
            "provincia": "OR"
        }, {
            "comune": "Mogoro",
            "provincia": "OR"
        }, {
            "comune": "Morgongiori",
            "provincia": "OR"
        }, {
            "comune": "Narbolia",
            "provincia": "OR"
        }, {
            "comune": "Neoneli",
            "provincia": "OR"
        }, {
            "comune": "Norbello",
            "provincia": "OR"
        }, {
            "comune": "Nughedu Santa Vittoria",
            "provincia": "OR"
        }, {
            "comune": "Nurachi",
            "provincia": "OR"
        }, {
            "comune": "Nureci",
            "provincia": "OR"
        }, {
            "comune": "Ollastra",
            "provincia": "OR"
        }, {
            "comune": "Oristano",
            "provincia": "OR"
        }, {
            "comune": "Palmas Arborea",
            "provincia": "OR"
        }, {
            "comune": "Pau",
            "provincia": "OR"
        }, {
            "comune": "Paulilatino",
            "provincia": "OR"
        }, {
            "comune": "Pompu",
            "provincia": "OR"
        }, {
            "comune": "Riola Sardo",
            "provincia": "OR"
        }, {
            "comune": "Ruinas",
            "provincia": "OR"
        }, {
            "comune": "Samugheo",
            "provincia": "OR"
        }, {
            "comune": "San Nicolò d'Arcidano",
            "provincia": "OR"
        }, {
            "comune": "Santa Giusta",
            "provincia": "OR"
        }, {
            "comune": "Villa Sant'Antonio",
            "provincia": "OR"
        }, {
            "comune": "Santu Lussurgiu",
            "provincia": "OR"
        }, {
            "comune": "San Vero Milis",
            "provincia": "OR"
        }, {
            "comune": "Scano di Montiferro",
            "provincia": "OR"
        }, {
            "comune": "Sedilo",
            "provincia": "OR"
        }, {
            "comune": "Seneghe",
            "provincia": "OR"
        }, {
            "comune": "Senis",
            "provincia": "OR"
        }, {
            "comune": "Sennariolo",
            "provincia": "OR"
        }, {
            "comune": "Siamaggiore",
            "provincia": "OR"
        }, {
            "comune": "Siamanna",
            "provincia": "OR"
        }, {
            "comune": "Simala",
            "provincia": "OR"
        }, {
            "comune": "Simaxis",
            "provincia": "OR"
        }, {
            "comune": "Sini",
            "provincia": "OR"
        }, {
            "comune": "Siris",
            "provincia": "OR"
        }, {
            "comune": "Solarussa",
            "provincia": "OR"
        }, {
            "comune": "Sorradile",
            "provincia": "OR"
        }, {
            "comune": "Tadasuni",
            "provincia": "OR"
        }, {
            "comune": "Terralba",
            "provincia": "OR"
        }, {
            "comune": "Tramatza",
            "provincia": "OR"
        }, {
            "comune": "Tresnuraghes",
            "provincia": "OR"
        }, {
            "comune": "Ulà Tirso",
            "provincia": "OR"
        }, {
            "comune": "Uras",
            "provincia": "OR"
        }, {
            "comune": "Usellus",
            "provincia": "OR"
        }, {
            "comune": "Villanova Truschedu",
            "provincia": "OR"
        }, {
            "comune": "Villaurbana",
            "provincia": "OR"
        }, {
            "comune": "Villa Verde",
            "provincia": "OR"
        }, {
            "comune": "Zeddiani",
            "provincia": "OR"
        }, {
            "comune": "Zerfaliu",
            "provincia": "OR"
        }, {
            "comune": "Siapiccia",
            "provincia": "OR"
        }, {
            "comune": "Curcuris",
            "provincia": "OR"
        }, {
            "comune": "Soddì",
            "provincia": "OR"
        }, {
            "comune": "Bosa",
            "provincia": "OR"
        }, {
            "comune": "Flussio",
            "provincia": "OR"
        }, {
            "comune": "Laconi",
            "provincia": "OR"
        }, {
            "comune": "Magomadas",
            "provincia": "OR"
        }, {
            "comune": "Modolo",
            "provincia": "OR"
        }, {
            "comune": "Montresta",
            "provincia": "OR"
        }, {
            "comune": "Sagama",
            "provincia": "OR"
        }, {
            "comune": "Suni",
            "provincia": "OR"
        }, {
            "comune": "Tinnura",
            "provincia": "OR"
        }, {
            "comune": "Ailoche",
            "provincia": "BI"
        }, {
            "comune": "Andorno Micca",
            "provincia": "BI"
        }, {
            "comune": "Benna",
            "provincia": "BI"
        }, {
            "comune": "Biella",
            "provincia": "BI"
        }, {
            "comune": "Bioglio",
            "provincia": "BI"
        }, {
            "comune": "Borriana",
            "provincia": "BI"
        }, {
            "comune": "Brusnengo",
            "provincia": "BI"
        }, {
            "comune": "Callabiana",
            "provincia": "BI"
        }, {
            "comune": "Camandona",
            "provincia": "BI"
        }, {
            "comune": "Camburzano",
            "provincia": "BI"
        }, {
            "comune": "Candelo",
            "provincia": "BI"
        }, {
            "comune": "Caprile",
            "provincia": "BI"
        }, {
            "comune": "Casapinta",
            "provincia": "BI"
        }, {
            "comune": "Castelletto Cervo",
            "provincia": "BI"
        }, {
            "comune": "Cavaglià",
            "provincia": "BI"
        }, {
            "comune": "Cerreto Castello",
            "provincia": "BI"
        }, {
            "comune": "Cerrione",
            "provincia": "BI"
        }, {
            "comune": "Coggiola",
            "provincia": "BI"
        }, {
            "comune": "Cossato",
            "provincia": "BI"
        }, {
            "comune": "Crevacuore",
            "provincia": "BI"
        }, {
            "comune": "Curino",
            "provincia": "BI"
        }, {
            "comune": "Donato",
            "provincia": "BI"
        }, {
            "comune": "Dorzano",
            "provincia": "BI"
        }, {
            "comune": "Gaglianico",
            "provincia": "BI"
        }, {
            "comune": "Gifflenga",
            "provincia": "BI"
        }, {
            "comune": "Graglia",
            "provincia": "BI"
        }, {
            "comune": "Magnano",
            "provincia": "BI"
        }, {
            "comune": "Massazza",
            "provincia": "BI"
        }, {
            "comune": "Masserano",
            "provincia": "BI"
        }, {
            "comune": "Mezzana Mortigliengo",
            "provincia": "BI"
        }, {
            "comune": "Miagliano",
            "provincia": "BI"
        }, {
            "comune": "Mongrando",
            "provincia": "BI"
        }, {
            "comune": "Mottalciata",
            "provincia": "BI"
        }, {
            "comune": "Muzzano",
            "provincia": "BI"
        }, {
            "comune": "Netro",
            "provincia": "BI"
        }, {
            "comune": "Occhieppo Inferiore",
            "provincia": "BI"
        }, {
            "comune": "Pettinengo",
            "provincia": "BI"
        }, {
            "comune": "Piatto",
            "provincia": "BI"
        }, {
            "comune": "Piedicavallo",
            "provincia": "BI"
        }, {
            "comune": "Pollone",
            "provincia": "BI"
        }, {
            "comune": "Ponderano",
            "provincia": "BI"
        }, {
            "comune": "Portula",
            "provincia": "BI"
        }, {
            "comune": "Pralungo",
            "provincia": "BI"
        }, {
            "comune": "Pray",
            "provincia": "BI"
        }, {
            "comune": "Quaregna",
            "provincia": "BI"
        }, {
            "comune": "Ronco Biellese",
            "provincia": "BI"
        }, {
            "comune": "Roppolo",
            "provincia": "BI"
        }, {
            "comune": "Rosazza",
            "provincia": "BI"
        }, {
            "comune": "Sagliano Micca",
            "provincia": "BI"
        }, {
            "comune": "Sala Biellese",
            "provincia": "BI"
        }, {
            "comune": "Salussola",
            "provincia": "BI"
        }, {
            "comune": "Sandigliano",
            "provincia": "BI"
        }, {
            "comune": "Soprana",
            "provincia": "BI"
        }, {
            "comune": "Sordevolo",
            "provincia": "BI"
        }, {
            "comune": "Sostegno",
            "provincia": "BI"
        }, {
            "comune": "Strona",
            "provincia": "BI"
        }, {
            "comune": "Tavigliano",
            "provincia": "BI"
        }, {
            "comune": "Ternengo",
            "provincia": "BI"
        }, {
            "comune": "Tollegno",
            "provincia": "BI"
        }, {
            "comune": "Torrazzo",
            "provincia": "BI"
        }, {
            "comune": "Trivero",
            "provincia": "BI"
        }, {
            "comune": "Valdengo",
            "provincia": "BI"
        }, {
            "comune": "Vallanzengo",
            "provincia": "BI"
        }, {
            "comune": "Valle Mosso",
            "provincia": "BI"
        }, {
            "comune": "Valle San Nicolao",
            "provincia": "BI"
        }, {
            "comune": "Veglio",
            "provincia": "BI"
        }, {
            "comune": "Verrone",
            "provincia": "BI"
        }, {
            "comune": "Vigliano Biellese",
            "provincia": "BI"
        }, {
            "comune": "Villa del Bosco",
            "provincia": "BI"
        }, {
            "comune": "Villanova Biellese",
            "provincia": "BI"
        }, {
            "comune": "Viverone",
            "provincia": "BI"
        }, {
            "comune": "Zimone",
            "provincia": "BI"
        }, {
            "comune": "Zubiena",
            "provincia": "BI"
        }, {
            "comune": "Zumaglia",
            "provincia": "BI"
        }, {
            "comune": "Mosso",
            "provincia": "BI"
        }, {
            "comune": "Lessona",
            "provincia": "BI"
        }, {
            "comune": "Campiglia Cervo",
            "provincia": "BI"
        }, {
            "comune": "Abbadia Lariana",
            "provincia": "LC"
        }, {
            "comune": "Airuno",
            "provincia": "LC"
        }, {
            "comune": "Annone di Brianza",
            "provincia": "LC"
        }, {
            "comune": "Ballabio",
            "provincia": "LC"
        }, {
            "comune": "Barzago",
            "provincia": "LC"
        }, {
            "comune": "Barzanò",
            "provincia": "LC"
        }, {
            "comune": "Barzio",
            "provincia": "LC"
        }, {
            "comune": "Bellano",
            "provincia": "LC"
        }, {
            "comune": "Bosisio Parini",
            "provincia": "LC"
        }, {
            "comune": "Brivio",
            "provincia": "LC"
        }, {
            "comune": "Bulciago",
            "provincia": "LC"
        }, {
            "comune": "Calco",
            "provincia": "LC"
        }, {
            "comune": "Calolziocorte",
            "provincia": "LC"
        }, {
            "comune": "Carenno",
            "provincia": "LC"
        }, {
            "comune": "Casargo",
            "provincia": "LC"
        }, {
            "comune": "Casatenovo",
            "provincia": "LC"
        }, {
            "comune": "Cassago Brianza",
            "provincia": "LC"
        }, {
            "comune": "Cassina Valsassina",
            "provincia": "LC"
        }, {
            "comune": "Castello di Brianza",
            "provincia": "LC"
        }, {
            "comune": "Cernusco Lombardone",
            "provincia": "LC"
        }, {
            "comune": "Cesana Brianza",
            "provincia": "LC"
        }, {
            "comune": "Civate",
            "provincia": "LC"
        }, {
            "comune": "Colico",
            "provincia": "LC"
        }, {
            "comune": "Colle Brianza",
            "provincia": "LC"
        }, {
            "comune": "Cortenova",
            "provincia": "LC"
        }, {
            "comune": "Costa Masnaga",
            "provincia": "LC"
        }, {
            "comune": "Crandola Valsassina",
            "provincia": "LC"
        }, {
            "comune": "Cremella",
            "provincia": "LC"
        }, {
            "comune": "Cremeno",
            "provincia": "LC"
        }, {
            "comune": "Dervio",
            "provincia": "LC"
        }, {
            "comune": "Dolzago",
            "provincia": "LC"
        }, {
            "comune": "Dorio",
            "provincia": "LC"
        }, {
            "comune": "Ello",
            "provincia": "LC"
        }, {
            "comune": "Erve",
            "provincia": "LC"
        }, {
            "comune": "Esino Lario",
            "provincia": "LC"
        }, {
            "comune": "Galbiate",
            "provincia": "LC"
        }, {
            "comune": "Garbagnate Monastero",
            "provincia": "LC"
        }, {
            "comune": "Garlate",
            "provincia": "LC"
        }, {
            "comune": "Imbersago",
            "provincia": "LC"
        }, {
            "comune": "Introbio",
            "provincia": "LC"
        }, {
            "comune": "Introzzo",
            "provincia": "LC"
        }, {
            "comune": "Lecco",
            "provincia": "LC"
        }, {
            "comune": "Lierna",
            "provincia": "LC"
        }, {
            "comune": "Lomagna",
            "provincia": "LC"
        }, {
            "comune": "Malgrate",
            "provincia": "LC"
        }, {
            "comune": "Mandello del Lario",
            "provincia": "LC"
        }, {
            "comune": "Margno",
            "provincia": "LC"
        }, {
            "comune": "Merate",
            "provincia": "LC"
        }, {
            "comune": "Missaglia",
            "provincia": "LC"
        }, {
            "comune": "Moggio",
            "provincia": "LC"
        }, {
            "comune": "Molteno",
            "provincia": "LC"
        }, {
            "comune": "Monte Marenzo",
            "provincia": "LC"
        }, {
            "comune": "Montevecchia",
            "provincia": "LC"
        }, {
            "comune": "Monticello Brianza",
            "provincia": "LC"
        }, {
            "comune": "Morterone",
            "provincia": "LC"
        }, {
            "comune": "Nibionno",
            "provincia": "LC"
        }, {
            "comune": "Oggiono",
            "provincia": "LC"
        }, {
            "comune": "Olgiate Molgora",
            "provincia": "LC"
        }, {
            "comune": "Olginate",
            "provincia": "LC"
        }, {
            "comune": "Oliveto Lario",
            "provincia": "LC"
        }, {
            "comune": "Osnago",
            "provincia": "LC"
        }, {
            "comune": "Paderno d'Adda",
            "provincia": "LC"
        }, {
            "comune": "Pagnona",
            "provincia": "LC"
        }, {
            "comune": "Parlasco",
            "provincia": "LC"
        }, {
            "comune": "Pasturo",
            "provincia": "LC"
        }, {
            "comune": "Perledo",
            "provincia": "LC"
        }, {
            "comune": "Pescate",
            "provincia": "LC"
        }, {
            "comune": "Premana",
            "provincia": "LC"
        }, {
            "comune": "Primaluna",
            "provincia": "LC"
        }, {
            "comune": "Robbiate",
            "provincia": "LC"
        }, {
            "comune": "Rogeno",
            "provincia": "LC"
        }, {
            "comune": "Santa Maria Hoè",
            "provincia": "LC"
        }, {
            "comune": "Sirone",
            "provincia": "LC"
        }, {
            "comune": "Sirtori",
            "provincia": "LC"
        }, {
            "comune": "Sueglio",
            "provincia": "LC"
        }, {
            "comune": "Suello",
            "provincia": "LC"
        }, {
            "comune": "Taceno",
            "provincia": "LC"
        }, {
            "comune": "Torre de' Busi",
            "provincia": "LC"
        }, {
            "comune": "Tremenico",
            "provincia": "LC"
        }, {
            "comune": "Valgreghentino",
            "provincia": "LC"
        }, {
            "comune": "Valmadrera",
            "provincia": "LC"
        }, {
            "comune": "Varenna",
            "provincia": "LC"
        }, {
            "comune": "Vendrogno",
            "provincia": "LC"
        }, {
            "comune": "Vercurago",
            "provincia": "LC"
        }, {
            "comune": "Vestreno",
            "provincia": "LC"
        }, {
            "comune": "Viganò",
            "provincia": "LC"
        }, {
            "comune": "Verderio",
            "provincia": "LC"
        }, {
            "comune": "La Valletta Brianza",
            "provincia": "LC"
        }, {
            "comune": "Abbadia Cerreto",
            "provincia": "LO"
        }, {
            "comune": "Bertonico",
            "provincia": "LO"
        }, {
            "comune": "Boffalora d'Adda",
            "provincia": "LO"
        }, {
            "comune": "Borghetto Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Borgo San Giovanni",
            "provincia": "LO"
        }, {
            "comune": "Brembio",
            "provincia": "LO"
        }, {
            "comune": "Camairago",
            "provincia": "LO"
        }, {
            "comune": "Casaletto Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Casalmaiocco",
            "provincia": "LO"
        }, {
            "comune": "Casalpusterlengo",
            "provincia": "LO"
        }, {
            "comune": "Caselle Landi",
            "provincia": "LO"
        }, {
            "comune": "Caselle Lurani",
            "provincia": "LO"
        }, {
            "comune": "Castelnuovo Bocca d'Adda",
            "provincia": "LO"
        }, {
            "comune": "Castiglione d'Adda",
            "provincia": "LO"
        }, {
            "comune": "Castiraga Vidardo",
            "provincia": "LO"
        }, {
            "comune": "Cavacurta",
            "provincia": "LO"
        }, {
            "comune": "Cavenago d'Adda",
            "provincia": "LO"
        }, {
            "comune": "Cervignano d'Adda",
            "provincia": "LO"
        }, {
            "comune": "Codogno",
            "provincia": "LO"
        }, {
            "comune": "Comazzo",
            "provincia": "LO"
        }, {
            "comune": "Cornegliano Laudense",
            "provincia": "LO"
        }, {
            "comune": "Corno Giovine",
            "provincia": "LO"
        }, {
            "comune": "Cornovecchio",
            "provincia": "LO"
        }, {
            "comune": "Corte Palasio",
            "provincia": "LO"
        }, {
            "comune": "Crespiatica",
            "provincia": "LO"
        }, {
            "comune": "Fombio",
            "provincia": "LO"
        }, {
            "comune": "Galgagnano",
            "provincia": "LO"
        }, {
            "comune": "Graffignana",
            "provincia": "LO"
        }, {
            "comune": "Guardamiglio",
            "provincia": "LO"
        }, {
            "comune": "Livraga",
            "provincia": "LO"
        }, {
            "comune": "Lodi",
            "provincia": "LO"
        }, {
            "comune": "Lodi Vecchio",
            "provincia": "LO"
        }, {
            "comune": "Maccastorna",
            "provincia": "LO"
        }, {
            "comune": "Mairago",
            "provincia": "LO"
        }, {
            "comune": "Maleo",
            "provincia": "LO"
        }, {
            "comune": "Marudo",
            "provincia": "LO"
        }, {
            "comune": "Massalengo",
            "provincia": "LO"
        }, {
            "comune": "Meleti",
            "provincia": "LO"
        }, {
            "comune": "Merlino",
            "provincia": "LO"
        }, {
            "comune": "Montanaso Lombardo",
            "provincia": "LO"
        }, {
            "comune": "Mulazzano",
            "provincia": "LO"
        }, {
            "comune": "Orio Litta",
            "provincia": "LO"
        }, {
            "comune": "Ospedaletto Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Ossago Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Pieve Fissiraga",
            "provincia": "LO"
        }, {
            "comune": "Salerano sul Lambro",
            "provincia": "LO"
        }, {
            "comune": "San Fiorano",
            "provincia": "LO"
        }, {
            "comune": "San Martino in Strada",
            "provincia": "LO"
        }, {
            "comune": "San Rocco al Porto",
            "provincia": "LO"
        }, {
            "comune": "Sant'Angelo Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Santo Stefano Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Secugnago",
            "provincia": "LO"
        }, {
            "comune": "Senna Lodigiana",
            "provincia": "LO"
        }, {
            "comune": "Somaglia",
            "provincia": "LO"
        }, {
            "comune": "Sordio",
            "provincia": "LO"
        }, {
            "comune": "Tavazzano con Villavesco",
            "provincia": "LO"
        }, {
            "comune": "Terranova dei Passerini",
            "provincia": "LO"
        }, {
            "comune": "Turano Lodigiano",
            "provincia": "LO"
        }, {
            "comune": "Valera Fratta",
            "provincia": "LO"
        }, {
            "comune": "Villanova del Sillaro",
            "provincia": "LO"
        }, {
            "comune": "Zelo Buon Persico",
            "provincia": "LO"
        }, {
            "comune": "Bellaria-Igea Marina",
            "provincia": "RN"
        }, {
            "comune": "Cattolica",
            "provincia": "RN"
        }, {
            "comune": "Coriano",
            "provincia": "RN"
        }, {
            "comune": "Gemmano",
            "provincia": "RN"
        }, {
            "comune": "Misano Adriatico",
            "provincia": "RN"
        }, {
            "comune": "Mondaino",
            "provincia": "RN"
        }, {
            "comune": "Montefiore Conca",
            "provincia": "RN"
        }, {
            "comune": "Montegridolfo",
            "provincia": "RN"
        }, {
            "comune": "Morciano di Romagna",
            "provincia": "RN"
        }, {
            "comune": "Riccione",
            "provincia": "RN"
        }, {
            "comune": "Rimini",
            "provincia": "RN"
        }, {
            "comune": "Saludecio",
            "provincia": "RN"
        }, {
            "comune": "San Clemente",
            "provincia": "RN"
        }, {
            "comune": "San Giovanni in Marignano",
            "provincia": "RN"
        }, {
            "comune": "Santarcangelo di Romagna",
            "provincia": "RN"
        }, {
            "comune": "Verucchio",
            "provincia": "RN"
        }, {
            "comune": "Casteldelci",
            "provincia": "RN"
        }, {
            "comune": "Maiolo",
            "provincia": "RN"
        }, {
            "comune": "Novafeltria",
            "provincia": "RN"
        }, {
            "comune": "Pennabilli",
            "provincia": "RN"
        }, {
            "comune": "San Leo",
            "provincia": "RN"
        }, {
            "comune": "Sant'Agata Feltria",
            "provincia": "RN"
        }, {
            "comune": "Talamello",
            "provincia": "RN"
        }, {
            "comune": "Poggio Torriana",
            "provincia": "RN"
        }, {
            "comune": "Montescudo - Monte Colombo",
            "provincia": "RN"
        }, {
            "comune": "Cantagallo",
            "provincia": "PO"
        }, {
            "comune": "Carmignano",
            "provincia": "PO"
        }, {
            "comune": "Montemurlo",
            "provincia": "PO"
        }, {
            "comune": "Poggio a Caiano",
            "provincia": "PO"
        }, {
            "comune": "Prato",
            "provincia": "PO"
        }, {
            "comune": "Vaiano",
            "provincia": "PO"
        }, {
            "comune": "Vernio",
            "provincia": "PO"
        }, {
            "comune": "Belvedere di Spinello",
            "provincia": "KR"
        }, {
            "comune": "Caccuri",
            "provincia": "KR"
        }, {
            "comune": "Carfizzi",
            "provincia": "KR"
        }, {
            "comune": "Casabona",
            "provincia": "KR"
        }, {
            "comune": "Castelsilano",
            "provincia": "KR"
        }, {
            "comune": "Cerenzia",
            "provincia": "KR"
        }, {
            "comune": "Cirò",
            "provincia": "KR"
        }, {
            "comune": "Cirò Marina",
            "provincia": "KR"
        }, {
            "comune": "Cotronei",
            "provincia": "KR"
        }, {
            "comune": "Crotone",
            "provincia": "KR"
        }, {
            "comune": "Crucoli",
            "provincia": "KR"
        }, {
            "comune": "Cutro",
            "provincia": "KR"
        }, {
            "comune": "Isola di Capo Rizzuto",
            "provincia": "KR"
        }, {
            "comune": "Melissa",
            "provincia": "KR"
        }, {
            "comune": "Mesoraca",
            "provincia": "KR"
        }, {
            "comune": "Pallagorio",
            "provincia": "KR"
        }, {
            "comune": "Petilia Policastro",
            "provincia": "KR"
        }, {
            "comune": "Roccabernarda",
            "provincia": "KR"
        }, {
            "comune": "Rocca di Neto",
            "provincia": "KR"
        }, {
            "comune": "San Mauro Marchesato",
            "provincia": "KR"
        }, {
            "comune": "San Nicola dell'Alto",
            "provincia": "KR"
        }, {
            "comune": "Santa Severina",
            "provincia": "KR"
        }, {
            "comune": "Savelli",
            "provincia": "KR"
        }, {
            "comune": "Scandale",
            "provincia": "KR"
        }, {
            "comune": "Strongoli",
            "provincia": "KR"
        }, {
            "comune": "Umbriatico",
            "provincia": "KR"
        }, {
            "comune": "Verzino",
            "provincia": "KR"
        }, {
            "comune": "Acquaro",
            "provincia": "VV"
        }, {
            "comune": "Arena",
            "provincia": "VV"
        }, {
            "comune": "Briatico",
            "provincia": "VV"
        }, {
            "comune": "Brognaturo",
            "provincia": "VV"
        }, {
            "comune": "Capistrano",
            "provincia": "VV"
        }, {
            "comune": "Cessaniti",
            "provincia": "VV"
        }, {
            "comune": "Dasà",
            "provincia": "VV"
        }, {
            "comune": "Dinami",
            "provincia": "VV"
        }, {
            "comune": "Drapia",
            "provincia": "VV"
        }, {
            "comune": "Fabrizia",
            "provincia": "VV"
        }, {
            "comune": "Filadelfia",
            "provincia": "VV"
        }, {
            "comune": "Filandari",
            "provincia": "VV"
        }, {
            "comune": "Filogaso",
            "provincia": "VV"
        }, {
            "comune": "Francavilla Angitola",
            "provincia": "VV"
        }, {
            "comune": "Francica",
            "provincia": "VV"
        }, {
            "comune": "Gerocarne",
            "provincia": "VV"
        }, {
            "comune": "Ionadi",
            "provincia": "VV"
        }, {
            "comune": "Joppolo",
            "provincia": "VV"
        }, {
            "comune": "Limbadi",
            "provincia": "VV"
        }, {
            "comune": "Maierato",
            "provincia": "VV"
        }, {
            "comune": "Mileto",
            "provincia": "VV"
        }, {
            "comune": "Mongiana",
            "provincia": "VV"
        }, {
            "comune": "Monterosso Calabro",
            "provincia": "VV"
        }, {
            "comune": "Nardodipace",
            "provincia": "VV"
        }, {
            "comune": "Nicotera",
            "provincia": "VV"
        }, {
            "comune": "Parghelia",
            "provincia": "VV"
        }, {
            "comune": "Pizzo",
            "provincia": "VV"
        }, {
            "comune": "Pizzoni",
            "provincia": "VV"
        }, {
            "comune": "Polia",
            "provincia": "VV"
        }, {
            "comune": "Ricadi",
            "provincia": "VV"
        }, {
            "comune": "Rombiolo",
            "provincia": "VV"
        }, {
            "comune": "San Calogero",
            "provincia": "VV"
        }, {
            "comune": "San Costantino Calabro",
            "provincia": "VV"
        }, {
            "comune": "San Gregorio d'Ippona",
            "provincia": "VV"
        }, {
            "comune": "San Nicola da Crissa",
            "provincia": "VV"
        }, {
            "comune": "Sant'Onofrio",
            "provincia": "VV"
        }, {
            "comune": "Serra San Bruno",
            "provincia": "VV"
        }, {
            "comune": "Simbario",
            "provincia": "VV"
        }, {
            "comune": "Sorianello",
            "provincia": "VV"
        }, {
            "comune": "Soriano Calabro",
            "provincia": "VV"
        }, {
            "comune": "Spadola",
            "provincia": "VV"
        }, {
            "comune": "Spilinga",
            "provincia": "VV"
        }, {
            "comune": "Stefanaconi",
            "provincia": "VV"
        }, {
            "comune": "Tropea",
            "provincia": "VV"
        }, {
            "comune": "Vallelonga",
            "provincia": "VV"
        }, {
            "comune": "Vazzano",
            "provincia": "VV"
        }, {
            "comune": "Vibo Valentia",
            "provincia": "VV"
        }, {
            "comune": "Zaccanopoli",
            "provincia": "VV"
        }, {
            "comune": "Zambrone",
            "provincia": "VV"
        }, {
            "comune": "Zungri",
            "provincia": "VV"
        }, {
            "comune": "Antrona Schieranco",
            "provincia": "VB"
        }, {
            "comune": "Anzola d'Ossola",
            "provincia": "VB"
        }, {
            "comune": "Arizzano",
            "provincia": "VB"
        }, {
            "comune": "Arola",
            "provincia": "VB"
        }, {
            "comune": "Aurano",
            "provincia": "VB"
        }, {
            "comune": "Baceno",
            "provincia": "VB"
        }, {
            "comune": "Bannio Anzino",
            "provincia": "VB"
        }, {
            "comune": "Baveno",
            "provincia": "VB"
        }, {
            "comune": "Bee",
            "provincia": "VB"
        }, {
            "comune": "Belgirate",
            "provincia": "VB"
        }, {
            "comune": "Beura-Cardezza",
            "provincia": "VB"
        }, {
            "comune": "Bognanco",
            "provincia": "VB"
        }, {
            "comune": "Brovello-Carpugnino",
            "provincia": "VB"
        }, {
            "comune": "Calasca-Castiglione",
            "provincia": "VB"
        }, {
            "comune": "Cambiasca",
            "provincia": "VB"
        }, {
            "comune": "Cannero Riviera",
            "provincia": "VB"
        }, {
            "comune": "Cannobio",
            "provincia": "VB"
        }, {
            "comune": "Caprezzo",
            "provincia": "VB"
        }, {
            "comune": "Casale Corte Cerro",
            "provincia": "VB"
        }, {
            "comune": "Cavaglio-Spoccia",
            "provincia": "VB"
        }, {
            "comune": "Ceppo Morelli",
            "provincia": "VB"
        }, {
            "comune": "Cesara",
            "provincia": "VB"
        }, {
            "comune": "Cossogno",
            "provincia": "VB"
        }, {
            "comune": "Craveggia",
            "provincia": "VB"
        }, {
            "comune": "Crevoladossola",
            "provincia": "VB"
        }, {
            "comune": "Crodo",
            "provincia": "VB"
        }, {
            "comune": "Cursolo-Orasso",
            "provincia": "VB"
        }, {
            "comune": "Domodossola",
            "provincia": "VB"
        }, {
            "comune": "Druogno",
            "provincia": "VB"
        }, {
            "comune": "Falmenta",
            "provincia": "VB"
        }, {
            "comune": "Formazza",
            "provincia": "VB"
        }, {
            "comune": "Germagno",
            "provincia": "VB"
        }, {
            "comune": "Ghiffa",
            "provincia": "VB"
        }, {
            "comune": "Gignese",
            "provincia": "VB"
        }, {
            "comune": "Gravellona Toce",
            "provincia": "VB"
        }, {
            "comune": "Gurro",
            "provincia": "VB"
        }, {
            "comune": "Intragna",
            "provincia": "VB"
        }, {
            "comune": "Loreglia",
            "provincia": "VB"
        }, {
            "comune": "Macugnaga",
            "provincia": "VB"
        }, {
            "comune": "Madonna del Sasso",
            "provincia": "VB"
        }, {
            "comune": "Malesco",
            "provincia": "VB"
        }, {
            "comune": "Masera",
            "provincia": "VB"
        }, {
            "comune": "Massiola",
            "provincia": "VB"
        }, {
            "comune": "Mergozzo",
            "provincia": "VB"
        }, {
            "comune": "Miazzina",
            "provincia": "VB"
        }, {
            "comune": "Montecrestese",
            "provincia": "VB"
        }, {
            "comune": "Montescheno",
            "provincia": "VB"
        }, {
            "comune": "Nonio",
            "provincia": "VB"
        }, {
            "comune": "Oggebbio",
            "provincia": "VB"
        }, {
            "comune": "Omegna",
            "provincia": "VB"
        }, {
            "comune": "Ornavasso",
            "provincia": "VB"
        }, {
            "comune": "Pallanzeno",
            "provincia": "VB"
        }, {
            "comune": "Piedimulera",
            "provincia": "VB"
        }, {
            "comune": "Pieve Vergonte",
            "provincia": "VB"
        }, {
            "comune": "Premeno",
            "provincia": "VB"
        }, {
            "comune": "Premia",
            "provincia": "VB"
        }, {
            "comune": "Premosello-Chiovenda",
            "provincia": "VB"
        }, {
            "comune": "Quarna Sopra",
            "provincia": "VB"
        }, {
            "comune": "Quarna Sotto",
            "provincia": "VB"
        }, {
            "comune": "Re",
            "provincia": "VB"
        }, {
            "comune": "San Bernardino Verbano",
            "provincia": "VB"
        }, {
            "comune": "Santa Maria Maggiore",
            "provincia": "VB"
        }, {
            "comune": "Stresa",
            "provincia": "VB"
        }, {
            "comune": "Toceno",
            "provincia": "VB"
        }, {
            "comune": "Trarego Viggiona",
            "provincia": "VB"
        }, {
            "comune": "Trasquera",
            "provincia": "VB"
        }, {
            "comune": "Trontano",
            "provincia": "VB"
        }, {
            "comune": "Valstrona",
            "provincia": "VB"
        }, {
            "comune": "Vanzone con San Carlo",
            "provincia": "VB"
        }, {
            "comune": "Varzo",
            "provincia": "VB"
        }, {
            "comune": "Verbania",
            "provincia": "VB"
        }, {
            "comune": "Vignone",
            "provincia": "VB"
        }, {
            "comune": "Villadossola",
            "provincia": "VB"
        }, {
            "comune": "Villette",
            "provincia": "VB"
        }, {
            "comune": "Vogogna",
            "provincia": "VB"
        }, {
            "comune": "Borgomezzavalle",
            "provincia": "VB"
        }, {
            "comune": "Agrate Brianza",
            "provincia": "MB"
        }, {
            "comune": "Aicurzio",
            "provincia": "MB"
        }, {
            "comune": "Albiate",
            "provincia": "MB"
        }, {
            "comune": "Arcore",
            "provincia": "MB"
        }, {
            "comune": "Barlassina",
            "provincia": "MB"
        }, {
            "comune": "Bellusco",
            "provincia": "MB"
        }, {
            "comune": "Bernareggio",
            "provincia": "MB"
        }, {
            "comune": "Besana in Brianza",
            "provincia": "MB"
        }, {
            "comune": "Biassono",
            "provincia": "MB"
        }, {
            "comune": "Bovisio-Masciago",
            "provincia": "MB"
        }, {
            "comune": "Briosco",
            "provincia": "MB"
        }, {
            "comune": "Brugherio",
            "provincia": "MB"
        }, {
            "comune": "Burago di Molgora",
            "provincia": "MB"
        }, {
            "comune": "Camparada",
            "provincia": "MB"
        }, {
            "comune": "Carate Brianza",
            "provincia": "MB"
        }, {
            "comune": "Carnate",
            "provincia": "MB"
        }, {
            "comune": "Cavenago di Brianza",
            "provincia": "MB"
        }, {
            "comune": "Ceriano Laghetto",
            "provincia": "MB"
        }, {
            "comune": "Cesano Maderno",
            "provincia": "MB"
        }, {
            "comune": "Cogliate",
            "provincia": "MB"
        }, {
            "comune": "Concorezzo",
            "provincia": "MB"
        }, {
            "comune": "Correzzana",
            "provincia": "MB"
        }, {
            "comune": "Desio",
            "provincia": "MB"
        }, {
            "comune": "Giussano",
            "provincia": "MB"
        }, {
            "comune": "Lazzate",
            "provincia": "MB"
        }, {
            "comune": "Lesmo",
            "provincia": "MB"
        }, {
            "comune": "Limbiate",
            "provincia": "MB"
        }, {
            "comune": "Lissone",
            "provincia": "MB"
        }, {
            "comune": "Macherio",
            "provincia": "MB"
        }, {
            "comune": "Meda",
            "provincia": "MB"
        }, {
            "comune": "Mezzago",
            "provincia": "MB"
        }, {
            "comune": "Misinto",
            "provincia": "MB"
        }, {
            "comune": "Monza",
            "provincia": "MB"
        }, {
            "comune": "Muggiò",
            "provincia": "MB"
        }, {
            "comune": "Nova Milanese",
            "provincia": "MB"
        }, {
            "comune": "Ornago",
            "provincia": "MB"
        }, {
            "comune": "Renate",
            "provincia": "MB"
        }, {
            "comune": "Ronco Briantino",
            "provincia": "MB"
        }, {
            "comune": "Seregno",
            "provincia": "MB"
        }, {
            "comune": "Seveso",
            "provincia": "MB"
        }, {
            "comune": "Sovico",
            "provincia": "MB"
        }, {
            "comune": "Sulbiate",
            "provincia": "MB"
        }, {
            "comune": "Triuggio",
            "provincia": "MB"
        }, {
            "comune": "Usmate Velate",
            "provincia": "MB"
        }, {
            "comune": "Varedo",
            "provincia": "MB"
        }, {
            "comune": "Vedano al Lambro",
            "provincia": "MB"
        }, {
            "comune": "Veduggio con Colzano",
            "provincia": "MB"
        }, {
            "comune": "Verano Brianza",
            "provincia": "MB"
        }, {
            "comune": "Villasanta",
            "provincia": "MB"
        }, {
            "comune": "Vimercate",
            "provincia": "MB"
        }, {
            "comune": "Busnago",
            "provincia": "MB"
        }, {
            "comune": "Caponago",
            "provincia": "MB"
        }, {
            "comune": "Cornate d'Adda",
            "provincia": "MB"
        }, {
            "comune": "Lentate sul Seveso",
            "provincia": "MB"
        }, {
            "comune": "Roncello",
            "provincia": "MB"
        }, {
            "comune": "Altidona",
            "provincia": "FM"
        }, {
            "comune": "Amandola",
            "provincia": "FM"
        }, {
            "comune": "Belmonte Piceno",
            "provincia": "FM"
        }, {
            "comune": "Campofilone",
            "provincia": "FM"
        }, {
            "comune": "Falerone",
            "provincia": "FM"
        }, {
            "comune": "Fermo",
            "provincia": "FM"
        }, {
            "comune": "Francavilla d'Ete",
            "provincia": "FM"
        }, {
            "comune": "Grottazzolina",
            "provincia": "FM"
        }, {
            "comune": "Lapedona",
            "provincia": "FM"
        }, {
            "comune": "Magliano di Tenna",
            "provincia": "FM"
        }, {
            "comune": "Massa Fermana",
            "provincia": "FM"
        }, {
            "comune": "Monsampietro Morico",
            "provincia": "FM"
        }, {
            "comune": "Montappone",
            "provincia": "FM"
        }, {
            "comune": "Montefalcone Appennino",
            "provincia": "FM"
        }, {
            "comune": "Montefortino",
            "provincia": "FM"
        }, {
            "comune": "Monte Giberto",
            "provincia": "FM"
        }, {
            "comune": "Montegiorgio",
            "provincia": "FM"
        }, {
            "comune": "Montegranaro",
            "provincia": "FM"
        }, {
            "comune": "Monteleone di Fermo",
            "provincia": "FM"
        }, {
            "comune": "Montelparo",
            "provincia": "FM"
        }, {
            "comune": "Monte Rinaldo",
            "provincia": "FM"
        }, {
            "comune": "Monterubbiano",
            "provincia": "FM"
        }, {
            "comune": "Monte San Pietrangeli",
            "provincia": "FM"
        }, {
            "comune": "Monte Urano",
            "provincia": "FM"
        }, {
            "comune": "Monte Vidon Combatte",
            "provincia": "FM"
        }, {
            "comune": "Monte Vidon Corrado",
            "provincia": "FM"
        }, {
            "comune": "Montottone",
            "provincia": "FM"
        }, {
            "comune": "Moresco",
            "provincia": "FM"
        }, {
            "comune": "Ortezzano",
            "provincia": "FM"
        }, {
            "comune": "Pedaso",
            "provincia": "FM"
        }, {
            "comune": "Petritoli",
            "provincia": "FM"
        }, {
            "comune": "Ponzano di Fermo",
            "provincia": "FM"
        }, {
            "comune": "Porto San Giorgio",
            "provincia": "FM"
        }, {
            "comune": "Porto Sant'Elpidio",
            "provincia": "FM"
        }, {
            "comune": "Rapagnano",
            "provincia": "FM"
        }, {
            "comune": "Santa Vittoria in Matenano",
            "provincia": "FM"
        }, {
            "comune": "Sant'Elpidio a Mare",
            "provincia": "FM"
        }, {
            "comune": "Servigliano",
            "provincia": "FM"
        }, {
            "comune": "Smerillo",
            "provincia": "FM"
        }, {
            "comune": "Torre San Patrizio",
            "provincia": "FM"
        }, {
            "comune": "Andria",
            "provincia": "BT"
        }, {
            "comune": "Barletta",
            "provincia": "BT"
        }, {
            "comune": "Bisceglie",
            "provincia": "BT"
        }, {
            "comune": "Canosa di Puglia",
            "provincia": "BT"
        }, {
            "comune": "Margherita di Savoia",
            "provincia": "BT"
        }, {
            "comune": "Minervino Murge",
            "provincia": "BT"
        }, {
            "comune": "San Ferdinando di Puglia",
            "provincia": "BT"
        }, {
            "comune": "Spinazzola",
            "provincia": "BT"
        }, {
            "comune": "Trani",
            "provincia": "BT"
        }, {
            "comune": "Trinitapoli",
            "provincia": "BT"
        }, {
            "comune": "Arbus",
            "provincia": "SU"
        }, {
            "comune": "Armungia",
            "provincia": "SU"
        }, {
            "comune": "Ballao",
            "provincia": "SU"
        }, {
            "comune": "Barrali",
            "provincia": "SU"
        }, {
            "comune": "Barumini",
            "provincia": "SU"
        }, {
            "comune": "Buggerru",
            "provincia": "SU"
        }, {
            "comune": "Burcei",
            "provincia": "SU"
        }, {
            "comune": "Calasetta",
            "provincia": "SU"
        }, {
            "comune": "Carbonia",
            "provincia": "SU"
        }, {
            "comune": "Carloforte",
            "provincia": "SU"
        }, {
            "comune": "Castiadas",
            "provincia": "SU"
        }, {
            "comune": "Collinas",
            "provincia": "SU"
        }, {
            "comune": "Decimoputzu",
            "provincia": "SU"
        }, {
            "comune": "Dolianova",
            "provincia": "SU"
        }, {
            "comune": "Domus De Maria",
            "provincia": "SU"
        }, {
            "comune": "Domusnovas",
            "provincia": "SU"
        }, {
            "comune": "Donori",
            "provincia": "SU"
        }, {
            "comune": "Escalaplano",
            "provincia": "SU"
        }, {
            "comune": "Escolca",
            "provincia": "SU"
        }, {
            "comune": "Esterzili",
            "provincia": "SU"
        }, {
            "comune": "Fluminimaggiore",
            "provincia": "SU"
        }, {
            "comune": "Furtei",
            "provincia": "SU"
        }, {
            "comune": "Genoni",
            "provincia": "SU"
        }, {
            "comune": "Genuri",
            "provincia": "SU"
        }, {
            "comune": "Gergei",
            "provincia": "SU"
        }, {
            "comune": "Gesico",
            "provincia": "SU"
        }, {
            "comune": "Gesturi",
            "provincia": "SU"
        }, {
            "comune": "Giba",
            "provincia": "SU"
        }, {
            "comune": "Goni",
            "provincia": "SU"
        }, {
            "comune": "Gonnesa",
            "provincia": "SU"
        }, {
            "comune": "Gonnosfanadiga",
            "provincia": "SU"
        }, {
            "comune": "Guamaggiore",
            "provincia": "SU"
        }, {
            "comune": "Guasila",
            "provincia": "SU"
        }, {
            "comune": "Guspini",
            "provincia": "SU"
        }, {
            "comune": "Iglesias",
            "provincia": "SU"
        }, {
            "comune": "Isili",
            "provincia": "SU"
        }, {
            "comune": "Las Plassas",
            "provincia": "SU"
        }, {
            "comune": "Lunamatrona",
            "provincia": "SU"
        }, {
            "comune": "Mandas",
            "provincia": "SU"
        }, {
            "comune": "Masainas",
            "provincia": "SU"
        }, {
            "comune": "Monastir",
            "provincia": "SU"
        }, {
            "comune": "Muravera",
            "provincia": "SU"
        }, {
            "comune": "Musei",
            "provincia": "SU"
        }, {
            "comune": "Narcao",
            "provincia": "SU"
        }, {
            "comune": "Nuragus",
            "provincia": "SU"
        }, {
            "comune": "Nurallao",
            "provincia": "SU"
        }, {
            "comune": "Nuraminis",
            "provincia": "SU"
        }, {
            "comune": "Nurri",
            "provincia": "SU"
        }, {
            "comune": "Nuxis",
            "provincia": "SU"
        }, {
            "comune": "Orroli",
            "provincia": "SU"
        }, {
            "comune": "Ortacesus",
            "provincia": "SU"
        }, {
            "comune": "Pabillonis",
            "provincia": "SU"
        }, {
            "comune": "Pauli Arbarei",
            "provincia": "SU"
        }, {
            "comune": "Perdaxius",
            "provincia": "SU"
        }, {
            "comune": "Pimentel",
            "provincia": "SU"
        }, {
            "comune": "Piscinas",
            "provincia": "SU"
        }, {
            "comune": "Portoscuso",
            "provincia": "SU"
        }, {
            "comune": "Sadali",
            "provincia": "SU"
        }, {
            "comune": "Samassi",
            "provincia": "SU"
        }, {
            "comune": "Samatzai",
            "provincia": "SU"
        }, {
            "comune": "San Basilio",
            "provincia": "SU"
        }, {
            "comune": "San Gavino Monreale",
            "provincia": "SU"
        }, {
            "comune": "San Giovanni Suergiu",
            "provincia": "SU"
        }, {
            "comune": "San Nicolò Gerrei",
            "provincia": "SU"
        }, {
            "comune": "San Sperate",
            "provincia": "SU"
        }, {
            "comune": "San Vito",
            "provincia": "SU"
        }, {
            "comune": "Sanluri",
            "provincia": "SU"
        }, {
            "comune": "Santadi",
            "provincia": "SU"
        }, {
            "comune": "Sant'Andrea Frius",
            "provincia": "SU"
        }, {
            "comune": "Sant'Anna Arresi",
            "provincia": "SU"
        }, {
            "comune": "Sant'Antioco",
            "provincia": "SU"
        }, {
            "comune": "Sardara",
            "provincia": "SU"
        }, {
            "comune": "Segariu",
            "provincia": "SU"
        }, {
            "comune": "Selegas",
            "provincia": "SU"
        }, {
            "comune": "Senorbì",
            "provincia": "SU"
        }, {
            "comune": "Serdiana",
            "provincia": "SU"
        }, {
            "comune": "Serramanna",
            "provincia": "SU"
        }, {
            "comune": "Serrenti",
            "provincia": "SU"
        }, {
            "comune": "Serri",
            "provincia": "SU"
        }, {
            "comune": "Setzu",
            "provincia": "SU"
        }, {
            "comune": "Seui",
            "provincia": "SU"
        }, {
            "comune": "Seulo",
            "provincia": "SU"
        }, {
            "comune": "Siddi",
            "provincia": "SU"
        }, {
            "comune": "Siliqua",
            "provincia": "SU"
        }, {
            "comune": "Silius",
            "provincia": "SU"
        }, {
            "comune": "Siurgus Donigala",
            "provincia": "SU"
        }, {
            "comune": "Soleminis",
            "provincia": "SU"
        }, {
            "comune": "Suelli",
            "provincia": "SU"
        }, {
            "comune": "Teulada",
            "provincia": "SU"
        }, {
            "comune": "Tratalias",
            "provincia": "SU"
        }, {
            "comune": "Tuili",
            "provincia": "SU"
        }, {
            "comune": "Turri",
            "provincia": "SU"
        }, {
            "comune": "Ussana",
            "provincia": "SU"
        }, {
            "comune": "Ussaramanna",
            "provincia": "SU"
        }, {
            "comune": "Vallermosa",
            "provincia": "SU"
        }, {
            "comune": "Villacidro",
            "provincia": "SU"
        }, {
            "comune": "Villamar",
            "provincia": "SU"
        }, {
            "comune": "Villamassargia",
            "provincia": "SU"
        }, {
            "comune": "Villanova Tulo",
            "provincia": "SU"
        }, {
            "comune": "Villanovaforru",
            "provincia": "SU"
        }, {
            "comune": "Villanovafranca",
            "provincia": "SU"
        }, {
            "comune": "Villaperuccio",
            "provincia": "SU"
        }, {
            "comune": "Villaputzu",
            "provincia": "SU"
        }, {
            "comune": "Villasalto",
            "provincia": "SU"
        }, {
            "comune": "Villasimius",
            "provincia": "SU"
        }, {
            "comune": "Villasor",
            "provincia": "SU"
        }, {
            "comune": "Villaspeciosa",
            "provincia": "SU"
        }
    ];
    comuniPerProv.forEach(element => {
        if (element.provincia === province) {
            comuni += "<option>" + element.comune + "</option>";
        }
    });
    document.getElementById("comune").innerHTML = comuni;
    if (!initializerP) {
        $(`#comune option:contains(${comune})`).attr('selected', 'selected');
        initializerP = true;
    }
}