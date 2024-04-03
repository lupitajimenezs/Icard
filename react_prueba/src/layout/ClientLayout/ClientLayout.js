import React from 'react'
import './ClientLayout.scss';

export function ClientLayout(props) {
    //children = Contenido que tiene nuestro layout
    const {children} = props;
    return (
        <div>
            <p>ClientLayout</p>
            {children}
        </div>
    )
}
