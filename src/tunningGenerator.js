
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

const circularGet = (root, offset, notes) => notes[(notes.indexOf(root) + offset) % notes.length];

const ALL_TUNNINGS = ['richter', 'country'];

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

const richterGenerator = (key) => {
  const notes = SCALE_ACCIDENTAL[key];
  return {
    halfBlowBend: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      circularGet(key, 3, notes),
      circularGet(key, 6, notes),
      circularGet(key, 11, notes),
    ],
    wholeBlowBend: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      circularGet(key, 10, notes),
    ],
    blow: [
      circularGet(key, 0, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 0, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 12, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 12, notes),
    ],
    draw: [
      circularGet(key, 2, notes),
      circularGet(key, 7, notes),
      circularGet(key, 11, notes),
      circularGet(key, 2, notes),
      circularGet(key, 5, notes),
      circularGet(key, 9, notes),
      circularGet(key, 11, notes),
      circularGet(key, 2, notes),
      circularGet(key, 5, notes),
      circularGet(key, 9, notes),
    ],
    halfDrawBend: [
      circularGet(key, 1, notes),
      circularGet(key, 6, notes),
      circularGet(key, 10, notes),
      circularGet(key, 1, notes),
      null,
      circularGet(key, 8, notes),
      null,
      null,
      null,
      null,
    ],
    wholeDrawBend: [
      null,
      circularGet(key, 5, notes),
      circularGet(key, 9, notes),
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    wholeHalfDrawBend: [
      null,
      null,
      circularGet(key, 8, notes),
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  };
};

const countryGenerator = (key) => {
  const notes = SCALE_ACCIDENTAL[key];
  return {
    halfBlowBend: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      circularGet(key, 3, notes),
      circularGet(key, 6, notes),
      circularGet(key, 11, notes),
    ],
    wholeBlowBend: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      circularGet(key, 10, notes),
    ],
    blow: [
      circularGet(key, 0, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 0, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 12, notes),
      circularGet(key, 4, notes),
      circularGet(key, 7, notes),
      circularGet(key, 12, notes),
    ],
    draw: [
      circularGet(key, 2, notes),
      circularGet(key, 7, notes),
      circularGet(key, 11, notes),
      circularGet(key, 2, notes),
      circularGet(key, 6, notes),
      circularGet(key, 9, notes),
      circularGet(key, 11, notes),
      circularGet(key, 2, notes),
      circularGet(key, 5, notes),
      circularGet(key, 9, notes),
    ],
    halfDrawBend: [
      circularGet(key, 1, notes),
      circularGet(key, 6, notes),
      circularGet(key, 10, notes),
      circularGet(key, 1, notes),
      null,
      circularGet(key, 8, notes),
      null,
      null,
      null,
      null,
    ],
    wholeDrawBend: [
      null,
      circularGet(key, 5, notes),
      circularGet(key, 9, notes),
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    wholeHalfDrawBend: [
      null,
      null,
      circularGet(key, 8, notes),
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  };
};
const TUNNING_TO_GENERATOR = {
  richter: richterGenerator,
  country: countryGenerator,
};

const noOp = () => {};
export default noOp;
export {
  ALL_NOTES,
  ALL_TUNNINGS,
  TUNNING_TO_GENERATOR,
  labelizeNote,
};

