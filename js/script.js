
window.onscroll = () => {
  let topButton = document.getElementById("topButton")
  if (window.scrollY >= 100 && topButton.classList.contains("hide")) {
    topButton.classList.remove("hide");
  } else if (window.scrollY < 100 && !(topButton.classList.contains("hide"))) {
    topButton.classList.add("hide");
  }
}

const today = new Date();
const todayString = today.getDate().toString().padStart(2, '0') + "/" +
                   (today.getMonth() + 1).toString().padStart(2, '0') + "/" +
                   today.getFullYear();
document.getElementByID('data').value = todayString;

function checkForm() {

  if (document.getElementById("ita").classList.contains("selected")) {
    eng = false;
  } else {
    eng = true;
  }

  console.log(eng);
  

  check = true;

  // Controllo nome
  if (!(document.getElementById("name").value.length > 0)) {
    if (eng) {
      document.getElementById("nameError").innerHTML = "Please enter a name";
    } else {
      document.getElementById("nameError").innerHTML = "Deve inserire un nome";
    }
    check = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  // Controllo cognome
  if (!(document.getElementById("surname").value.length > 0)) {
    if (eng) {
      document.getElementById("surnameError").innerHTML = "Please enter a surname";
    } else {
      document.getElementById("surnameError").innerHTML = "Deve inserire un cognome";
    }
    check = false;
  } else {
    document.getElementById("surnameError").innerHTML = "";
  }

  // Controllo mail
  if (!document.getElementById("mail").value.includes("@") || document.getElementById("mail").value.length < 5) {
    if (eng) {
    document.getElementById("mailError").innerHTML = "Please enter a valid email";

    } else {
    document.getElementById("mailError").innerHTML = "Deve inserire una Email valida";

    }
    check = false;
  } else {
    document.getElementById("mailError").innerHTML = "";
  }

  // Controllo numero telefono
  if (!(document.getElementById("number").value.length > 6)) {
    if (eng) {
    document.getElementById("numberError").innerHTML = "Please enter a valid phone number";

    } else {
    document.getElementById("numberError").innerHTML = "Deve inserire un numero di telefono valido";

    }
    check = false;
  } else {
    document.getElementById("numberError").innerHTML = "";
  }

  // Controllo giorno  
  if (!(document.getElementById("data").value)) {
    if (eng) {
    document.getElementById("dateError").innerHTML = "Please enter a valid date";

    } else {
    document.getElementById("dateError").innerHTML = "Deve inserire una data valida";

    }
    check = false;
  } else if (giornoSettimana(document.getElementById("data").value) == 0) {
    if (eng) {
    document.getElementById("dateError").innerHTML = "Sorry but bookings are not available on Sundays";

    } else {
    document.getElementById("dateError").innerHTML = "Domenica non si accettano prenotazioni";

    }
    check = false;
  } else {
    document.getElementById("dateError").innerHTML = "";
  }

  // Controllo ora
  if (!(document.getElementById("orario").value)) {
    if (eng) {
    document.getElementById("timeError").innerHTML = "Please enter a valid hour";

    } else {
    document.getElementById("timeError").innerHTML = "Deve inserire un'ora valida";

    }
    check = false;
  } else if (!(checkTime(document.getElementById("orario").value))) {
    if (eng) {
    document.getElementById("timeError").innerHTML = "Please select a time between 8:30 AM and 6:30 PM, in 30-minute intervals";
    } else {
    document.getElementById("timeError").innerHTML = "L'orario deve essere tra le 8:30 e le 18:30 in fasce di mezz'ora";

    }
    check = false;
  } else {
    document.getElementById("timeError").innerHTML = "";
  }



  // Controllo privacy
  if (!(document.getElementById("privacy").checked)) {
    if (eng) {
    document.getElementById("privacyError").innerHTML = "Please confirm your consent to data processing in order to proceed with your booking";

    } else {
    document.getElementById("privacyError").innerHTML = "Per fare la prenotazione abbiamo bisogno del tuo consenso per il trattamento dati";

    }
    check = false;
  } else {
    document.getElementById("privacyError").innerHTML = "";
  }

  if (check == true) {
    document.getElementById("subject").value = "Nuova richiesta da " + document.getElementById('name').value + " " + document.getElementById("surname").value;
    document.getElementById("prenotazioneForm").submit();

  }

}

function changeLang(lang) {
  if (!(document.getElementById(lang).classList.contains('selected'))) {
    document.getElementById('ita').classList.toggle("selected");
    document.getElementById('eng').classList.toggle("selected");
    language(lang);
    console.log('lingua cambiata');

  } else {
    console.log('lingua già selezionata');

  }
};

function language(lang) {
  if (lang === 'eng') {
    document.getElementById('whatsapp-translate').innerHTML = "You can also find us on WhatsApp!!!";
    document.getElementById('sottotitolo').innerHTML = "Your vehicle, like new.";
    document.getElementById('servizio').innerHTML = "<h1 class='contentTitle'>Our Services</h1><p class='text' id='testoServizio'>We offer a wide selection of car cleaning treatments tailored to suit your needs.</p><section class='cards'><div class='card'><p class='title'>EXTERIOR WASH</p><p class='cardText'>A fast refresh for your car’s bodywork.</p><p class='cardText'>15€</p><p class='cardText'>15 minutes</p><a class='button' href='#form' onclick='reservation(" + '"' + "EXTERIOR WASH" + '"' + ")'>BOOK NOW</a></div><div class='card'><p class='title'>EXTERIOR HAND WASH</p><p class='cardText'>A deep clean with an artisanal touch.</p><p class='cardText'>20€</p><p class='cardText'>30 minutes</p><a class='button' href='#form' onclick='reservation(" + '"' + 'EXTERIOR HAND WASH' + '"' + ")'>BOOK NOW</a></div><div class='card'><p class='title'>FULL EXTERIOR + INTERIOR CLEANING</p><p class='cardText'>A complete service for a spotless and fresh ride.</p><p class='cardText'>35€</p><p class='cardText'>60 minutes</p><a class='button' href='#form' onclick='reservation(" + '"' + "FULL EXTERIOR + INTERIOR CLEANING" + '"' + ")'>BOOK NOW</a></div><div class='card'><p class='title'>PREMIUM WASH</p><p class='cardText'>Our top-tier treatment for showroom-level results.</p><p class='cardText'>45€</p><p class='cardText'>60 minutes</p><a class='button' href='#form' onclick='reservation(" + '"' + "PREMIUM WASH" + '"' + ")'>BOOK NOW</a></div></section>";
    document.getElementById('presentazione').innerHTML = "<h1 class='contentTitle'>About Us</h1><p class='text'>Welcome to La Corso Bardolino – your trusted car wash. Here, your vehicle doesn’t just get cleaned; it receives care, attention, and a premium treatment. Whether you're looking for a quick wash, a hand-polished finish, or a complete interior and exterior service, we’re here to make it shine. Based in Bardolino, we offer quality, professionalism, and a friendly smile – all with eco-friendly products and modern technology. Your vehicle, like new – every time.</p>"
    document.getElementById('where').innerHTML = "<h1 class='contentTitle'>Where to Find Us</h1><p class='text'>Our car wash is located in Bardolino, in a convenient and easily accessible spot — right across from the ENI station. It’s ideal for anyone looking for quick, professional service while on the move.</p><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.234028009696!2d10.71994622600295!3d45.54561752107543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eda6141a3611%3A0x33cd9eba0deb8725!2sLA%20CORSO%20SRLS%20LAVAGGIO!5e0!3m2!1sit!2sit!4v1752541382793!5m2!1sit!2sit' height='400px' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    document.getElementById('work').innerHTML = "<h1 class='contentTitle'>Our Commitment</h1><p class='text'>At La Corso Bardolino, every car receives the care it deserves. Our mission is to elevate the appearance of each vehicle through expert treatments that bring out its brilliance and ensure it looks its best — inside and out.</p><div class='images'><img src='./img/eni1.jpg' alt='' srcset=''><img src='./img/eni2.jpg' alt='' srcset=''><img src='./img/eni3.jpg' alt='' srcset=''><img src='./img/eni4.jpg' alt='' srcset=''><img src='./img/eni5.jpg' alt='' srcset=''><img src='./img/eni6.jpg' alt='' srcset=''><img src='./img/eni7.jpg' alt='' srcset=''><img src='./img/eni8.jpg' alt='' srcset=''><img src='./img/eni9.jpg' alt='' srcset=''><img src='./img/eni10.jpg' alt='' srcset=''><img src='./img/eni11.jpg' alt='' srcset=''><img src='./img/eni12.jpg' alt='' srcset=''><img src='./img/eni13.jpg' alt='' srcset=''><img src='./img/eni14.jpg' alt='' srcset=''><img src='./img/eni15.jpg' alt='' srcset=''><img src='./img/eni16.jpg' alt='' srcset=''><img src='./img/eni17.jpg' alt='' srcset=''><img src='./img/eni18.jpg' alt='' srcset=''><img src='./img/eni19.jpg' alt='' srcset=''><img src='./img/eni20.jpg' alt='' srcset=''></div>";



    document.getElementById('form').innerHTML = "<h1 class='contentTitle'>Visit Us</h1>" +
      "<p class='text'>Fill out the form to request an exclusive car wash. Our team will carefully review your request and, if approved, you’ll receive a confirmation via email. Services are available Monday to Saturday, with continuous hours from 8:30 AM to 6:30 PM. Bookings are managed in 30-minute slots. For same-day washes, we invite you to contact us directly by phone or WhatsApp. If the request is made by a partner hotel on behalf of a guest, please indicate the hotel name followed by the city in the 'Hotel' field, and provide the hotel's email address instead of the guest’s.</p>"
      + "<form id='prenotazioneForm' action='https://formsubmit.co/leonkleinvr@gmail.com' method='POST'>"
      + "<input class='input' type='text' name='Name' id='name' placeholder='Name' required>"
      + '<span class="error" id="nameError"></span>'

      + "<input class='input' type='text' name='Lastname' id='surname' placeholder='Lastname' required>"
      + '<span class="error" id="surnameError"></span>'

      + "<input class='input' type='email' name='Email' id='mail' placeholder='Email' required>"
      + '<span class="error" id="mailError"></span>'

      + "<input class='input' type='number' name='Phone_number' id='number' placeholder='Phone Number' required>"
      + '<span class="error" id="numberError"></span>'

      + "<input class='input' value='" + todayString + "' type='date' id='data' name='Date' id='data' required>"
      + '<span class="error" id="dateError"></span>'

      + "<input class='input' type='time' value='8:30' name='Time' min='08:30' max='18:30' step='1800' id='orario' required>"
      + '<span class="error" id="timeError"></span>'

      + "<select name='Wash_Type' id='type'>"
      + "<option value='EXTERIOR WASH'>EXTERIOR WASH</option>"
      + "<option value='EXTERIOR HAND WASH'>EXTERIOR HAND WASH</option>"
      + "<option value='FULL EXTERIOR + INTERIOR CLEANING'>FULL EXTERIOR + INTERIOR CLEANING</option>"
      + "<option value='PREMIUM WASH'>PREMIUM WASH</option>"
      + "</select>"
      + '<span class="error" id="lavaggioError"></span>'

      + "<input class='input' type='text' name='Hotel' placeholder='Hotel, city (optional)'>"
      + "<div class='check'><label for='privacy'><input type='checkbox' id='privacy' name='Privacy' value='Confirmed' required> I consent to the processing of my personal <a style='color: var(--blue); font-weight: bold;' target='_blank' href='src/engTrattamentoDati.txt'>data</a></label></div>"
      + '<span class="error" id="privacyError"></span>'
      
      + "<p onclick='checkForm()' id='submit'>Send request</button>"
      + "<input type='hidden' name='_captcha' value='false'>"
      + "<input type='hidden' name='_next' value='http://localhost/eni/index.html'>"
      + '<input type="hidden" id="subject" name="_subject" value="New submission!">'
      + "</form>"


  } else {
    document.getElementById('whatsapp-translate').innerHTML = "Ci puoi trovare anche su whatsapp!!!";
    document.getElementById('sottotitolo').innerHTML = "Il tuo veicolo, come nuovo.";
    document.getElementById('servizio').innerHTML = "<h1 class='contentTitle'>I nostri servizi</h1><p class='text' id='testoServizio'>Offriamo una vasta scelta di servizi per accontentare al meglio le vostre esigenze.</p><section class='cards'><div class='card'><p class='title'>LAVAGGIO ESTERNO</p><p class='cardText'>Pulizia rapida della carrozzeria per un look fresco e ordinato.</p><p class='cardText'>15€</p><p class='cardText'>15 minuti</p><a class='button' href='#form' onclick='reservation(" + '"' + "LAVAGGIO ESTERNO" + '"' + ")'>PRENOTA</a></div><div class='card'><p class='title'>LAVAGGIO ESTERNO A MANO</p><p class='cardText'>Brillantezza profonda, tocco artigianale.</p><p class='cardText'>20€</p><p class='cardText'>30 minuti</p><a class='button' href='#form' onclick='reservation(" + '"' + 'LAVAGGIO ESTERNO A MANO' + '"' + ")'>PRENOTA</a></div><div class='card'><p class='title'>LAVAGGIO COMPLETO ESTERNO + INTERNO</p><p class='cardText'>Pulizia accurata dentro e fuori, per un'auto fresca e impeccabile.</p><p class='cardText'>35€</p><p class='cardText'>60 minuti</p><a class='button' href='#form' onclick='reservation(" + '"' + "LAVAGGIO COMPLETO ESTERNO + INTERNO" + '"' + ")'>PRENOTA</a></div><div class='card'><p class='title'>LAVAGGIO PREMIUM</p><p class='cardText'>Trattamento completo con risultati da showroom.</p><p class='cardText'>45€</p><p class='cardText'>60 minuti</p><a class='button' href='#form' onclick='reservation(" + '"' + "LAVAGGIO PREMIUM" + '"' + ")'>PRENOTA</a></div></section>";
    document.getElementById('presentazione').innerHTML = "<h1 class='contentTitle'>Chi siamo</h1><p class='text'>Benvenuti a La Corso Bardolino – il tuo autolavaggio di fiducia. Da noi la tua auto non riceve solo una pulizia: riceve attenzione, cura e un trattamento premium. Che tu voglia un lavaggio veloce, una rifinitura a mano o un servizio completo interno ed esterno, siamo qui per farla brillare. Siamo a Bardolino per offrire qualità, professionalità e un sorriso, il tutto con prodotti ecologici e tecnologie moderne. Il tuo veicolo, come nuovo – sempre.</p>"
    document.getElementById('where').innerHTML = "<h1 class='contentTitle'>Dove ci troviamo</h1><p class='text'>Il nostro autolavaggio si trova a Bardolino, in una posizione comoda e facilmente raggiungibile, di fronte alla stazione ENI. Ideale per chi cerca un servizio rapido e professionale durante i propri spostamenti.</p><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.234028009696!2d10.71994622600295!3d45.54561752107543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eda6141a3611%3A0x33cd9eba0deb8725!2sLA%20CORSO%20SRLS%20LAVAGGIO!5e0!3m2!1sit!2sit!4v1752541382793!5m2!1sit!2sit' height='400px' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    document.getElementById('work').innerHTML = "<h1 class='contentTitle'>Il nostro operato</h1><p class='text'>Presso La Corso Bardolino, ogni auto riceve le attenzioni che merita. La nostra missione è valorizzare l’aspetto di ogni veicolo attraverso trattamenti esperti che ne esaltano la brillantezza e garantiscono un aspetto impeccabile — dentro e fuori.</p><div class='images'><img src='./img/eni1.jpg' alt='' srcset=''><img src='./img/eni2.jpg' alt='' srcset=''><img src='./img/eni3.jpg' alt='' srcset=''><img src='./img/eni4.jpg' alt='' srcset=''><img src='./img/eni5.jpg' alt='' srcset=''><img src='./img/eni6.jpg' alt='' srcset=''><img src='./img/eni7.jpg' alt='' srcset=''><img src='./img/eni8.jpg' alt='' srcset=''><img src='./img/eni9.jpg' alt='' srcset=''><img src='./img/eni10.jpg' alt='' srcset=''><img src='./img/eni11.jpg' alt='' srcset=''><img src='./img/eni12.jpg' alt='' srcset=''><img src='./img/eni13.jpg' alt='' srcset=''><img src='./img/eni14.jpg' alt='' srcset=''><img src='./img/eni15.jpg' alt='' srcset=''><img src='./img/eni16.jpg' alt='' srcset=''><img src='./img/eni17.jpg' alt='' srcset=''><img src='./img/eni18.jpg' alt='' srcset=''><img src='./img/eni19.jpg' alt='' srcset=''><img src='./img/eni20.jpg' alt='' srcset=''></div>";


    document.getElementById('form').innerHTML = "<h1 class='contentTitle'>Vieni a trovarci</h1>" +
      "<p class='text'>Compila il modulo per richiedere un lavaggio esclusivo. Il nostro team esaminerà con attenzione la tua richiesta e, se approvata, riceverai una conferma tramite e‑mail. I servizi sono disponibili dal lunedì al sabato, con orario continuato dalle 8:30 alle 18:30. Le prenotazioni sono gestite in fasce di mezz’ora. Per lavaggi in giornata, ti invitiamo a contattarci direttamente via telefono o WhatsApp. Se la richiesta proviene da un albergo convenzionato per conto di un cliente, ti preghiamo di indicare nel campo “Albergo” il nome della struttura seguito dalla città, e di fornire l’e‑mail dell’albergo anziché quella del cliente.</p>"
      + "<form id='prenotazioneForm' action='https://formsubmit.co/leonkleinvr@gmail.com' method='POST'>"
      + "<input class='input' type='text' name='Nome' id='name' placeholder='Nome' required>"
      + '<span class="error" id="nameError"></span>'
      + "<input class='input' type='text' name='Cognome' id='surname' placeholder='Cognome' required>"
      + '<span class="error" id="surnameError"></span>'
      + "<input class='input' type='email' name='Email' id='mail' placeholder='Email' required>"
      + '<span class="error" id="mailError"></span>'
      + "<input class='input' type='number' name='Numero' id='number' placeholder='Numero di telefono' required>"
      + '<span class="error" id="numberError"></span>'
      + "<input class='input' type='date'  value='" + todayString + "'  id='data' name='Data' required>"
      + '<span class="error" id="dateError"></span>'
      + "<input class='input' id='orario' value='8:30' type='time' name='Ora' placeholder='Numero di telefono' min='08:30' max='18:30' step='1800' required>"
      + '<span class="error" id="timeError"></span>'
      + "<select name='Lavaggio' id='type'>"
      + "<option value='LAVAGGIO ESTERNO'>LAVAGGIO ESTERNO</option>"
      + "<option value='LAVAGGIO ESTERNO A MANO'>LAVAGGIO ESTERNO A MANO</option>"
      + "<option value='LAVAGGIO COMPLETO ESTERNO + INTERNO'>LAVAGGIO COMPLETO ESTERNO + INTERNO</option>"
      + "<option value='LAVAGGIO PREMIUM'>LAVAGGIO PREMIUM</option>"
      + "</select>"
      + '<span class="error" id="lavaggioError"></span>'
      + "<input class='input' type='text' name='Albergo' placeholder='Albergo, città (opzionale)'>"
      + "<div class='check'><label for='privacy'><input type='checkbox' id='privacy' name='Privacy' value='Acconsento' required> Accetto il trattamento dei miei <a style='color: var(--blue); font-weight: bold;' target='_blank' href='src/itaTrattamentoDati.txt'>dati</a></label></div>"
      + '<span class="error" id="privacyError"></span>'
      + "<p onclick='checkForm()' id='submit'>Invia richiesta</p>"
      + "<input type='hidden' name='_captcha' value='false'>"
      + "<input type='hidden' name='_next' value='http://localhost/eni/index.html'>"
      + '<input type="hidden" id="subject" name="_subject" value="New submission!">'
      + "</form>"


    console.log('ita');

  }
}


function reservation(a) {
  document.getElementById('type').value = a;
}

setTimeout(function () {
  document.getElementById("whatsapp-text").classList.add("hide");
}, 7000); // 15000 millisecondi = 15 secondi

window.onload = function () {
  const oggi = new Date();
  oggi.setDate(oggi.getDate() + 1); // aggiunge 1 giorno

  const anno = oggi.getFullYear();
  const mese = String(oggi.getMonth() + 1).padStart(2, '0');
  const giorno = String(oggi.getDate()).padStart(2, '0');

  const domani = `${anno}-${mese}-${giorno}`;
  const inputData = document.getElementById("data");
  inputData.setAttribute("min", domani);

}

function giornoSettimana(dataStringa) {

  const data = new Date(dataStringa);

  const giorno = data.getDay(); // 0 = Domenica, 1 = Lunedì, ..., 6 = Sabato

  return giorno;
}

function checkTime(orarioStringa) {
  if (!orarioStringa || !orarioStringa.includes(":")) return false;

  const [oreStr, minutiStr] = orarioStringa.split(":");
  const ore = parseInt(oreStr, 10);
  const minuti = parseInt(minutiStr, 10);

  if (isNaN(ore) || isNaN(minuti)) return false;

  const minutiTotali = ore * 60 + minuti;
  const inizio = 8 * 60 + 30;   // 08:30 = 510
  const fine = 18 * 60 + 30;    // 18:30 = 1110

  const minutiValidi = (minuti === 0 || minuti === 30);

  return (minutiTotali >= inizio && minutiTotali <= fine && minutiValidi);
}
