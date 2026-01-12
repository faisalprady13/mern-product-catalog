import Note from '../models/notes.js';

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error('getAllNotes error!', error);
    res.status(500).json({ message: 'error fetching notes' });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: 'note created' });
  } catch (error) {
    console.error('createNote error!', error);
    res.status(500).json({ message: 'error creating note' });
  }
};

const updateNote = (req, res) => {
  res.status(200).json({ message: 'note updated' });
};

export { getAllNotes, updateNote, createNote };
