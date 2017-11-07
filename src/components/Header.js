import React from 'react';

/* title={title} subTitle={subTitle} === this.props */
/* options={options} === this.props */

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = { // it passes default property to the Header and not needed to add any value up there
    title: 'Indecision'
}

export default Header;