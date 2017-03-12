import * as React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

export default class ProjectColumn extends React.Component<{}, {}> {
    render() {
        return (
            <div className='ProjectColumn'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        );
    }
}
