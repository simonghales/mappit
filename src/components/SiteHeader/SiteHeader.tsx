import * as React from 'react';

export default class SiteHeader extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <header className='siteHeader'>
                <div className="siteHeader__content">
                    <div className='siteHeader__leftSide'>
                        <div className='siteHeader__option'></div>
                        <div className='siteHeader__option'></div>
                    </div>
                    <h1 className='siteHeader__logo'>mappit</h1>
                    <div className='siteHeader__rightSide'>
                        <div className='siteHeader__option'></div>
                        <div className='siteHeader__option'></div>
                    </div>
                </div>
            </header>
        );
    }
}
