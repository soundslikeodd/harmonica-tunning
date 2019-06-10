
const labelizeNote = n => n.length > 1 ? ( n[1] === 'b' || n[1] === '#' ? `${n[0]}${String.fromCharCode(n[1] === 'b' ? 9837 : 9839)}` : n ) : n;
const ALL_NOTES = ['c', 'db', 'd', 'eb', 'e', 'f', 'f#', 'g', 'ab', 'a', 'bb', 'b', ];
const ALL_NOTES_FLAT = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b', ];
const ALL_NOTES_SHARP = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', ];
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
}

const circularGet = (root, offset, notes) => notes[(notes.indexOf(root) + offset) % notes.length];

const richterGenerator = (key) => {
    const notes = SCALE_ACCIDENTAL[key];
    return {
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
        ]
    };
}

export default ALL_NOTES;
export {
    richterGenerator,
    labelizeNote
};
