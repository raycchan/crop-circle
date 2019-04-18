import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ImageGrid from './components/ImageGrid'

let urls = [
  'https://www.duluthnewstribune.com/sites/default/files/styles/16x9_620/public/1j2y4fnT6xWqJ8rHgHmdQYgq5RVYK1_s6.jpg',
  'https://media.mercola.com/assets/images/foodfacts/bok-choy-nutrition-facts.jpg',
  'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_1.0,e_replace_color:fcf9f3:100:ffffff,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_334/20225_sil-basil-bunch-01'
];

ReactDOM.render(<ImageGrid imageUrls={urls} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
