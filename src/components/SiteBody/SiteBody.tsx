import * as React from 'react';
import Project from '../Project/Project';

export default class SiteBody extends React.Component<{}, {}> {
    render() {
        return (
            <div className='SiteBody'>
                <div className='SiteBody__content'>
                    <Project/>
                </div>
            </div>
        );
    }
}
