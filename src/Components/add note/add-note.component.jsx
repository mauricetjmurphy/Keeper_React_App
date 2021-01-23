import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './add-note.css';
import Fab from '@material-ui/core/Fab';

function AddNote(props) {
 const [note, setNote] = useState({
  title: '',
  content: '',
 });

 function handleChange(e) {
  const { name, value } = e.target;

  setNote((e) => ({ ...e, [name]: value }));
 }

 function submitNote(e) {
  props.onAdd(note);
  setNote({
   title: '',
   content: '',
  });
  e.preventDefault();
 }

 return (
  <div className='add-note-container'>
   <input
    required
    maxlength='20'
    className='add-note-input'
    onChange={handleChange}
    name='title'
    value={note.title}
    type='text'
    placeholder='Title'
   />
   <textarea
    required
    rows='3'
    wrap='soft'
    className='add-note-input'
    onChange={handleChange}
    name='content'
    value={note.content}
    type='text'
    placeholder='Take a note..'
   />
   <Fab className='add-btn' onClick={submitNote}>
    <AddIcon />
   </Fab>
  </div>
 );
}

export default AddNote;
