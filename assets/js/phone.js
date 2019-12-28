import React from 'react';
import { render } from 'react-dom';
import RepPhoneApp from './RepPhone/RepPhoneApp';

const shouldShowHeart = true;

render(
        <RepPhoneApp withHeart={shouldShowHeart} />,
        /*<RepPhoneApp withHeart={false} />, */

    document.getElementById('lift-stuff-app')
);
