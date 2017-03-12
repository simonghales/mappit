import * as React from 'react';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectColumn from '../ProjectColumn/ProjectColumn';

export default class Project extends React.Component<{}, {}> {
    render() {
        return (
            <div className='Project'>
                <ProjectHeader />
                <div>
                    <ProjectColumn/>
                    <ProjectColumn/>
                    <ProjectColumn/>
                    <ProjectColumn/>
                </div>
            </div>
        );
    }
}
