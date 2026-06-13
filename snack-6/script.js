const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
const result = zucchine.reduce(
  (acc, zucchina) => {
    {
      if (zucchina.length >= 15) acc.long.push(zucchina);
      else acc.short.push(zucchina);
      return acc;
    }
  },
  { long: [], short: [] },
);

const { long: longZucchine, short: shortZucchine } = result;
console.log(longZucchine); // Risultato: zucchine >= 15
console.log(shortZucchine); // Risultato: zucchine < 15

// ---

// Soluzione con 2 filter methods. Meno efficiente (scansiona l'array due volte), ma più leggibile.
const longZucchine2 = zucchine.filter((zucchina) => zucchina.length >= 15);
const shortZucchine2 = zucchine.filter((zucchina) => zucchina.length < 15);
console.log(longZucchine2); // Risultato: zucchine >= 15
console.log(shortZucchine2); // Risultato: zucchine < 15
