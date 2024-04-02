/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali tipi di datatype sono 5:
    numerici: che ha un valore numerico
    stringhe: che sono un insieme di numeri(non a valore numerico) e parole
    booleani: che danno un risultato di vero o falso in base ai dati che stanno controllando
    undefined: che non hanno nessun tipo di valore e quindi e effettivamente vuota
    null: reppresenta uno spazio vuoto o non ha ancora un valore assegnato ed è diverso da una zona vuota(ovvero undefined) o uno 0 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var myName  = 'Antonio' ;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = 7;
var numero2 = 8;
var somma = numero1 + numero2 ;
console.log('la somma è: ' + somma) ;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12 ;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'Gantolea' ;
/* const ETA = '22' ;
 ETA = '18' ;
 messo nel commento per non farmi dare l'errore dato che non si può modifirare una const. e continuare l'esercizio
*/
console.log('il mio nome è: ' + myName) ;
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var sottrazione = x - 4 ;
console.log('risultato sottrazione: ' + sottrazione) ;
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = 'john' ; 
var name2 = 'John' ;
var ugualianza = name1 == name2 ;
console.log('ugualianza tra nomi :', ugualianza) ;
var name1Minuscolo = name1.toLowerCase() ;  
var name2Minuscolo2 = name2.toLowerCase() ;
var ugualianza2 = name1Minuscolo == name2Minuscolo2 ; 
console.log('ugualianza tra nomi cambiati :', ugualianza2) ;
xza