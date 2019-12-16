/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.scss in this case)
import '../css/app.scss';
import getPhone from './components/get_phone';

// Jquery environment
import $ from 'jquery';
import 'bootstrap'; // adds functionss to Jquery

// uncomment to support legacy code
// global.$ = $ ;


console.log(getPhone(5));

// test Jquery
$('.phone').css('color','yellow');