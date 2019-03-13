import React from 'react';
import NoteCard from './NoteCard';

export default (props) => (
  <div class="row">
    {props.notes.map(note => <NoteCard note={note} />)}
  </div>
)
