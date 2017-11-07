import React from 'react';

/* title={title} subTitle={subTitle} === this.props */
/* options={options} === this.props */

const Header = (props) => (
        <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
        </div>
    );

Header.defaultProps = { // it passes default property to the Header and not needed to add any value up there
    title: 'Indecision'
}

export default Header;