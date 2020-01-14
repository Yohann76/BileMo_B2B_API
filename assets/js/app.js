/*
 * Welcome to your app's main JavaScript file!
 */
import '../css/app.scss';
// Jquery environment
import $ from 'jquery';
import 'bootstrap'; // adds functionss to Jquery
// phone.js
import React from 'react';
import { render } from 'react-dom';
import RepPhoneApp from './RepPhone/RepPhoneApp';
import PhoneApp from "./phone/PhoneApp";

render(
    /*
    <RepPhoneApp withHeart={shouldShowHeart} />,
    document.getElementById('lift-stuff-app'),

     */

    <PhoneApp/>,
    document.getElementById('phone-app')
);
