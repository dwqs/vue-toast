/**
 * Created by pomy on 11/23/16.
 */

'use strict';

import Toast from '../src/index.js';

let info = document.getElementById('info');
let time = document.getElementById('custom-time');
let longText = document.getElementById('long');
let warn = document.getElementById('warn');
let success = document.getElementById('success');
let error = document.getElementById('error');
let loading = document.getElementById('loading');

info.addEventListener('click', () => {
    Toast.info('default type is info');
});

time.addEventListener('click', () => {
    Toast.info({
        message: 'toast 3s后消失',
        duration: 3000
    });
});

longText.addEventListener('click', () => {
    Toast.info('这是一段很长的文本这是一段很长的文本这是一段很长的文本');
});

warn.addEventListener('click', () => {
    Toast.warn('这是一段警告');
});

success.addEventListener('click', () => {
    Toast.success('提交成功');
});

error.addEventListener('click', () => {
    Toast.error('提交失败');
});

loading.addEventListener('click', () => {
    Toast.loading('正在加载....');
});