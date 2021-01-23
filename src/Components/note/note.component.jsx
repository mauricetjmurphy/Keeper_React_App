import React from 'react';
import '../note/note.css';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

function Note(props) {
 function handleClick() {
  props.onDelete(props.id);
  console.log('clicked');
 }

 return (
  <div className='note-container'>
   <h1 className='note-title'>{props.title}</h1>
   <p className='note-content'>{props.content}</p>
   <button className='del-btn' onClick={handleClick}>
    <DeleteForeverRoundedIcon className='del-icon' />
   </button>
  </div>
 );
}

export default Note;
