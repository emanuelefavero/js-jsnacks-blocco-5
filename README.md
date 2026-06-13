# JS Snacks Blocco 5

Esercizi sui metodi degli array in JavaScript dal mio corso Web Dev.

## Consegna

Usa la cartella in allegato per creare la repo su Github.
Successivamente risolvi gli snack che troverai all'interno usando i metodi degli array che ritieni più appropriati.

## Come eseguire gli esercizi

Aprire `index.html` nel browser e controllare il risultato in console.

In alternativa, eseguire uno snack specifico con Node:

```bash
node snack-1/script.js
```

## Scelte tecniche

- SNACK 1: ho usato `forEach` perché non serve creare un nuovo array o filtrare dati; l'obiettivo è solo eseguire un'azione per ogni stringa della lista.

- SNACK 2: ho usato `forEach` perché devo solo leggere ogni oggetto e stampare una proprietà, senza trasformare l'array originale.

- SNACK 3: ho usato `map` perché ogni elemento dell'array originale viene trasformato in un nuovo valore, mantenendo la stessa lunghezza della lista.

- SNACK 4: ho usato `map` perché devo estrarre una proprietà da ogni oggetto e ottenere un nuovo array più semplice.

- SNACK 5: ho usato `filter` perché stiamo facendo filtraggio.

- SNACK 6: ho usato `reduce` per ottenere entrambi gli array con una sola scansione. Ho lasciato come nota anche una soluzione alternativa con due `filter`, più leggibile ma meno efficiente.

- SNACK 7: ho usato `find` perché serve recuperare un singolo oggetto che corrisponde a una condizione specifica.

- SNACK 8: ho usato `find` per individuare lo studente corretto e poi ho letto la proprietà `class`, separando i passaggi per rendere il codice più leggibile.
