import htmlentities from 'html-entities';
import React from 'react';
import { withRouteData, Link } from 'react-static';
import tipograph from 'tipograph';
import NoteCards from './NoteCards';

function toTitleCase(str) {
  var result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default withRouteData(({ children_notes, note }) => {
  let typeset = tipograph()
  const entities = new htmlentities.AllHtmlEntities();
  let contents = entities.decode(note.contents)
  let parent_path = "/" + note.parent
  let parent = parent_path.split("/").pop()
  parent = toTitleCase(parent)
  if (parent_path == "/home") {
    parent_path = "/"
  }
  console.log(note)
  if (note.type == "essay") {
    return (<div>
      <div className="header--secondary header--secondary--essay">
        <div className="container">
          <h1>{note.name}</h1>
          <h2>{note.subtitle}</h2>
        </div>
      </div>
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 essay-titlecap" dangerouslySetInnerHTML={{ __html: contents }} />
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <div>
      <div className="header--secondary">
        <div className="container">
          <h2 className="back-button"><Link to={parent_path}>{parent} <i className="mdi mdi-subdirectory-arrow-left back-icon" /></Link></h2>
          <h1>{note.name}</h1>
        </div>
      </div>
      <div className="container">
        <NoteCards notes={children_notes} />
      </div>
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2" dangerouslySetInnerHTML={{ __html: contents }} />
          </div>
        </div>
      </div>
    </div>
  )
})