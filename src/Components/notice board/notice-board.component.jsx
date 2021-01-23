import React, { useState } from 'react';
import Note from '../note/note.component';
import './notice-board.css';
import AddNote from '../add note/add-note.component';

function NoticeBoard() {
 const [notes, setNotes] = useState([]);

 function addNotes(newNote) {
  setNotes((e) => {
   return [...e, newNote];
  });
 }

 function deleteNote(id) {
  setNotes((e) => {
   return e.filter((e, i, arr) => {
    return i !== id;
   });
  });
 }

 return (
  <div>
   <div>
    <AddNote onAdd={addNotes} />
   </div>
   <div className='notice-board'>
    {notes.map((e, i) => {
     return (
      <Note
       key={i}
       id={i}
       title={e.title}
       content={e.content}
       onDelete={deleteNote}
      />
     );
    })}
   </div>
  </div>
 );
}

export default NoticeBoard;
