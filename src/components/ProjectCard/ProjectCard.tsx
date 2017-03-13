import * as React from 'react';

export default class ProjectCard extends React.Component<{}, {}> {
    render() {
        return (
            <div className='ProjectCard'>
                <div className='ProjectCard__title'>Card Title</div>
                <div className='ProjectCard__description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cupiditate deserunt ducimus.
                </div>
            </div>
        );
    }
}
