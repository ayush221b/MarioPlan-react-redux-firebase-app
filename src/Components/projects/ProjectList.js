import React from 'react'
import ProjectSummary from './ProjectSummary'

class ProjectList extends React.Component{
    render(){
        return(
            <div className="project-list section">

                <ProjectSummary/>
                <ProjectSummary/>
                <ProjectSummary/>
                <ProjectSummary/>

            </div>
        )
    }
}

export default ProjectList