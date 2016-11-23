/**
 * Created by pomy on 11/23/16.
 */

'use strict';

import Toast from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
    Toast.show('this is a example');
});