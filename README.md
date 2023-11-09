# VITE BOOLANDO

## Modal

- Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento “show” verso il componente padre
  - creo un elemento contentente un icona "info"
  - aggancio ad esso l'evento "click"
  - tra le virgolette invoco una funzione
    - la funzione dovrà emmettere a sua volta un evento
 
- Nel componente padre ascoltiamo l’evento
  - dichiariamo una direttiva v-on all'ascolto dell'evento custom emesso dall'emit tramite l'elemento figlio
  - all'evento ci agganciamo una funzione
 
- all'invocazione della funzione verrà mostrata una modale che racchiude tutte le informazioni testuali del prodotto 

- Nella modale è presente una X (o un pulsante) per chiuderla