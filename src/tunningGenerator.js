
const labelizeNote = (n) => {
  if (!n) return n;
  const label = n.length > 1 && (n[1] === 'b' || n[1] === '#')
    ? `${n[0].toUpperCase()}${String.fromCharCode(n[1] === 'b' ? 9837 : 9839)}${n.substring(2)}`
    : `${n[0].toUpperCase()}${n.substring(1)}`;
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

const RICHTER_POSITION_ORDER = ['c', 'g', 'd', 'a', 'e', 'b', 'f#', 'db', 'ab', 'eb', 'bb', 'f'];

const richterPositions = root => [0, 1, 2, 3].map((v, i) => `${circularGet(root, i, RICHTER_POSITION_ORDER)}${i >= 2 ? 'm' : ''}`);
const harmonicMinorPositions = root => [0, 1, 2, 3].map((v, i) => `${circularGet(root, i, RICHTER_POSITION_ORDER)}${i >= 3 || i <= 0 ? 'm' : ''}`);
const naturalMinorPositions = root => [0, 1, 2, 3].map((v, i) => `${circularGet(root, i, RICHTER_POSITION_ORDER)}${i <= 1 ? 'm' : ''}`);

const TUNNING_TO_POSITIONS = {
  Richter: richterPositions,
  'Paddy Richter': richterPositions,
  Country: richterPositions,
  'Melody Maker': richterPositions,
  'Natural Minor': naturalMinorPositions,
  'Harmonic Minor': harmonicMinorPositions,
};

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

const melodyMakerGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, null, 3, null, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 4, 9, 0, 4, 7, 0, 4, 7, 0],
    draw: [2, 7, 11, 2, 6, 9, 11, 2, 6, 9],
    halfDrawBend: [1, 6, 10, 1, 5, 8, null, null, null, null],
    wholeDrawBend: [null, 5, null, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, null, null, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const harmonicMinorGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, null, null, 6, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 3, 7, 0, 3, 7, 0, 3, 7, 0],
    draw: [2, 7, 11, 2, 5, 8, 11, 2, 5, 8],
    halfDrawBend: [1, 6, 10, 1, 4, null, null, null, null, 9],
    wholeDrawBend: [null, 5, 9, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, 4, 8, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const naturalMinorGenerator = key => augment(
  {
    halfBlowBend: [null, null, null, null, null, null, 11, null, 6, 11],
    wholeBlowBend: [null, null, null, null, null, null, null, null, null, 10],
    blow: [0, 3, 7, 0, 3, 7, 0, 3, 7, 0],
    draw: [2, 7, 10, 2, 5, 9, 10, 2, 5, 9],
    halfDrawBend: [1, 6, 9, 1, 4, 8, null, null, null, null],
    wholeDrawBend: [null, 5, 8, null, null, null, null, null, null, null],
    wholeHalfDrawBend: [null, 4, null, null, null, null, null, null, null, null],
  },
  key,
  SCALE_ACCIDENTAL[key],
);

const TUNNING_TO_GENERATOR = {
  Richter: richterGenerator,
  'Paddy Richter': paddyRichterGenerator,
  Country: countryGenerator,
  'Melody Maker': melodyMakerGenerator,
  'Natural Minor': naturalMinorGenerator,
  'Harmonic Minor': harmonicMinorGenerator,
};

const noOp = () => {};
export default noOp;
export {
  ALL_NOTES,
  TUNNING_TO_GENERATOR,
  TUNNING_TO_POSITIONS,
  labelizeNote,
};
