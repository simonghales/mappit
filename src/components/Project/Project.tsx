import * as React from 'react';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectColumn from '../ProjectColumn/ProjectColumn';

export const PROJECT_VIEW_DATA: string = 'data';
export const PROJECT_VIEW_VISUAL: string = 'visual';

interface I_Project_State {
    selectedView?: string
}

export default class Project extends React.Component<{}, I_Project_State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            selectedView: PROJECT_VIEW_DATA
        };
        this.selectDataView = this.selectDataView.bind(this);
        this.selectVisualView = this.selectVisualView.bind(this);
    }

    selectDataView(): void {
        this.setState({
            selectedView: PROJECT_VIEW_DATA
        });
    }

    selectVisualView(): void {
        this.setState({
            selectedView: PROJECT_VIEW_VISUAL
        });
    }

    render() {
        const selectedView = this.state.selectedView;
        return (
            <div className='Project'>
                <ProjectHeader selectedView={selectedView} selectDataView={this.selectDataView}
                               selectVisualView={this.selectVisualView}/>
                <div className='Project__columns'>
                    <ProjectColumn/>
                    <ProjectColumn/>
                    <ProjectColumn/>
                    <ProjectColumn/>
                </div>
            </div>
        );
    }
}
