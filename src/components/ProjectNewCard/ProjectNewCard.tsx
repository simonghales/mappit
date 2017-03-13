import * as React from 'react';

export default class ProjectNewCard extends React.Component<{}, {}> {
    render() {
        return (
            <div className='ProjectNewCard'>
                <button className='ProjectNewCard__addButton'>
                    Add card
                </button>
            </div>
        );
    }
}
