import { render } from 'react-dom';

// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import css from '../public/stylus/main.styl';

// Router
import { userRouter } from './router';

render(userRouter, document.querySelector('#root'));
