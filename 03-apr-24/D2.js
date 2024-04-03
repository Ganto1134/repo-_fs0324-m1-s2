/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 2;
let numero2 = 6; 
  if (numero1 > numero2) { 
      console.log (numero1 + " è maggiore");
  } else if (numero2 > numero1) { 
      console.log (numero2 + " è maggiore");
  } else { 
      console.log ("I numeri sono uguali");
  } ;



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 8;

  if (num !== 5) { 
    console.log("not equal");
  } ;


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  if (num % 5 === 0) {
      console.log(num + " è divisibile per 5");
  } else {
      console.log(num + " non è divisibile per 5");
  }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  if (numero1 === 8 | numero2 === 8 | numero1 + numero2 === 8 | numero1 - numero2 === 8) {
      console.log("uno dei numeri o la loro sottrazione o addizione è uguale a 8");
  } else {
      console.log("nessuno dei numeri e nessuna loro sottrazione o addizione è uguale a 8");
  }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60 ;

  const costoSpedizione = totalShoppingCart > 50 ? 0 : 10;
  console.log (totalShoppingCart + costoSpedizione);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totaleScontato = totalShoppingCart * 0.8;

console.log (totaleScontato);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 54;
let n2 = 87;
let n3 = 24;
if (n1 > n2 && n1 > n3) { 
  console.log ("ordine decrescente: ", n1, ",", n2, "," , n3) ;
} else if (n1 > n3 && n1 > n2) { 
  console.log ("ordine decrescente: ", n1, ",", n3, "," , n2) ;
} else if (n2 > n1 && n2 > n3) { 
  console.log ("ordine decrescente: ", n2, ",", n1, "," , n3) ;
} else if (n2 > n3 && n2 > n1) { 
  console.log ("ordine decrescente: ", n2, ",", n3, "," , n1) ;
} else if (n3 > n1 && n3> n2) { 
  console.log ("ordine decrescente: ", n3, ",", n1, "," , n2) ;
} else if (n3 > n2 && n3 > n1) { 
  console.log ("ordine decrescente: ", n3, ",", n2, "," , n1) ;
} else { console.log("non funge");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = "fodda";
  if (typeof valore === 'number') {
      console.log("è un numero") ;
  } else {
      console.log ("non è un numero");
  }

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = 89 ;
if (x%2 == 0) {
  console.log (x + " è pari");
} else {
  console.log ( x + " è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto" ;

console.log (me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log (me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log (me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeriArray =  [];

for (let n = 1; n <= 10; n++) {
  numeriArray.push(n);
}
console.log(numeriArray)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numeriArray[9] = 100;
console.log(numeriArray)