import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  props.note.published != false ? <div className="col-md-4">
    <Link className="card-container" to={"/" + props.note.path}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: props.note.name + (props.note.folder > 0 ? " <div class='size-indicator text-muted'>" + props.note.folder + "</div>" : "") }} />
          {props.note.tags ? <div>{props.note.tags.map((tag) => <div className="tag" id={"tag-" + tag}>{tag}</div>)}</div> : null}
        </div>
      </div>
    </Link>
  </div> : null
)
