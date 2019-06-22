
const labelizeNote = (n) => {
  if (!n) return n;
  const label = n.length > 1 && (n[1] === 'b' || n[1] === '#')
    ? `${n[0].toUpperCase()}${String.fromCharCode(n[1] === 'b' ? 9837 : 9839)}`
    : n.toUpperCase();
  return label;
};
const ALL_NOTES = ['c', 'db', 'd', 'eb', 'e', 'f', 'f#', 'g', 'ab', 'a', 'bb', 'b'];
const ALL_NOTES_FLAT = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
const ALL_NOTES_SHARP = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const SCALE_ACCIDENTAL = {
  c: ALL_NOTES_FLAT,
  db: ALL_NOTES_FLAT,
  d: ALL_NOTES_SHARP,
  eb: ALL_NOTES_FLAT,
  e: ALL_NOTES_SHARP,
  f: ALL_NOTES_FLAT,
  'f#': ALL_NOTES_SHARP,
  g: ALL_NOTES_SHARP,
  ab: ALL_NOTES_FLAT,
  a: ALL_NOTES_SHARP,
  bb: ALL_NOTES_FLAT,
  b: ALL_NOTES_SHARP,
};

const circularGet = (root, offset, notes) => (
  offset === null
    ? offset
    : notes[(notes.indexOf(root) + offset) % notes.length]
);
const augment = (tunning, key, notes) => Object.keys(tunning).reduce(
  (acc, i) => ({ ...acc, [i]: tunning[i].map(h => circularGet(key, h, notes)) }),
  {},
);

/* eslint-disable-next-line no-unused-vars */
const EMPTY_TUNNING = {
  halfBlowBend: new Array(10).fill(null),
  wholeBlowBend: new Array(10).fill(null),
  blow: new Array(10).fill(null),
  draw: new Array(10).fill(null),
  halfDrawBend: new Array(10).fill(null),
  wholeDrawBend: new Array(10).fill(null),
  wholeHalfDrawBend: new Array(10).fill(null),
};

const richterGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, null, 3, 6, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 4, 7, 0, 4, 7, 0, 4, 7, 0],
    draw: [2, 7, 11, 2, 5, 9, 11, 2, 5, 9],
    halfDrawBend: [1, 6, 10, 1, null, 8, null, null, null, null],
    wholeDrawBend: [null, 5, 9, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, null, 8, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const countryGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, null, 3, 6, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 4, 7, 0, 4, 7, 0, 4, 7, 0],
    draw: [2, 7, 11, 2, 6, 9, 11, 2, 5, 9],
    halfDrawBend: [1, 6, 10, 1, 5, 8, null, null, null, null],
    wholeDrawBend: [null, 5, 9, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, null, 8, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const paddyRichterGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, null, 3, 6, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 4, 9, 0, 4, 7, 0, 4, 7, 0],
    draw: [2, 7, 11, 2, 5, 9, 11, 2, 5, 9],
    halfDrawBend: [1, 6, 10, 1, null, 8, null, null, null, null],
    wholeDrawBend: [null, 5, 9, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, null, 8, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const TUNNING_TO_GENERATOR = {
  Richter: richterGenerator,
  'Paddy Richter': paddyRichterGenerator,
  Country: countryGenerator,
};

const noOp = () => {};
export default noOp;
export {
  ALL_NOTES,
  TUNNING_TO_GENERATOR,
  labelizeNote,
};
