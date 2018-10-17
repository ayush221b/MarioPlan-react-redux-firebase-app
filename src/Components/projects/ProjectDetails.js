import React from 'react'

function ProjectDetails( props ) {

    const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">
                    Project Title - {id}
                </span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error rerum minima praesentium a esse iste, reiciendis, quibusdam, culpa architecto saepe reprehenderit porro autem. Dolores, odit? Adipisci fugit iste voluptate commodi?
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Ayush Shekhar</div>
                <div>6th August, 2am</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
