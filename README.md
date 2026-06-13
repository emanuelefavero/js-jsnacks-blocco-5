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

## Soluzioni

### Snack 1

Scelta tecnica: ho usato `forEach` perché non serve creare un nuovo array o filtrare dati; l'obiettivo è solo eseguire un'azione per ogni stringa della lista.

### Snack 2

Stampare in console il nome di ogni persona presente nell'array `people`.

Scelta tecnica: ho usato `forEach` perché devo solo leggere ogni oggetto e stampare una proprietà, senza trasformare l'array originale.

### Snack 3

Creare un nuovo array con tutti i numeri incrementati di `1`.

Scelta tecnica: ho usato `map` perché ogni elemento dell'array originale viene trasformato in un nuovo valore, mantenendo la stessa lunghezza della lista.

### Snack 4

Creare un nuovo array contenente solo i nomi degli autori dei post.

Scelta tecnica: ho usato `map` perché devo estrarre una proprietà da ogni oggetto e ottenere un nuovo array più semplice.

### Snack 5

Creare un nuovo array contenente solo i numeri pari.

Scelta tecnica: ho usato `filter` perché stiamo facendo filtraggio.

### Snack 6

Dividere le zucchine in due array: quelle lunghe almeno `15cm` e le restanti.

Scelta tecnica: ho usato `reduce` per ottenere entrambi gli array con una sola scansione. Ho lasciato come nota anche una soluzione alternativa con due `filter`, più leggibile ma meno efficiente.

### Snack 7

Recuperare i dati dello studente con `id` uguale a `2`.

Scelta tecnica: ho usato `find` perché serve recuperare un singolo oggetto che corrisponde a una condizione specifica.

### Snack 8

Recuperare la classe dello studente `Marco Lanci`.

Scelta tecnica: ho usato `find` per individuare lo studente corretto e poi ho letto la proprietà `class`, separando i passaggi per rendere il codice più leggibile.

## Struttura del progetto

```txt
js-jsnacks-blocco-5/
├── index.html
├── snack-1/
│   ├── index.html
│   └── script.js
├── ...
└── snack-8/
    ├── index.html
    └── script.js
```
