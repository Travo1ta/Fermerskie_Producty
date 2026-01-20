import React from "react";
import './style.css';
import { TitleSize } from './constants';

function Title({ children, size = TitleSize.DEFAULT }) {
    const Tag = size === TitleSize.BIG ? 'h1' : 
                size === TitleSize.SMALL ? 'h3' : 'h2';
    
    return (
        <Tag className={`title title--${size}`}>
            {children}
        </Tag>
    );
}

export default Title;