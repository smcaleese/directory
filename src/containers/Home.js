import React from 'react';
import { withRouteData } from 'react-static';
import NoteCards from './NoteCards';

export default withRouteData(({ children_notes}) => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <h1>Directory</h1>
        </div>
      </div>
      <div className="container container-padded">
        <NoteCards notes={children_notes} />
      </div>
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
	      <p>Directory is an open-source collection of my ideas, thoughts and knowledge. Reuse whatever you want, no attribution is required.</p>
	      <p><a href="https://github.com/smcaleese/directory/issues">Create an issue</a> if you would like to comment on anything.</p>
	    </div>
          </div>
        </div>
      </div>
    </div>
  )
})
