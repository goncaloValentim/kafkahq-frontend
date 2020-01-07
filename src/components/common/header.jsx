import React from 'react';

function Header({title}) {
    return (
        <div className="title">
            <h1>
                {title}
            </h1>
        </div>
    );
}

export default Header;