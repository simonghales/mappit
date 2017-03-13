import * as React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectNewCard from '../ProjectNewCard/ProjectNewCard';

export default class ProjectColumn extends React.Component<{}, {}> {
    render() {
        return (
            <div className='ProjectColumn'>
                <h3 className='ProjectColumn__title'>Column Title</h3>
                <div className='ProjectColumn__body'>
                    <div className='ProjectColumn__cards'>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <ProjectNewCard/>
                </div>
            </div>
        );
    }
}
