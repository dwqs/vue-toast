/**
 * Created by pomy on 11/23/16.
 */

'use strict';

import Vue from 'vue';
import Toast from './toast.vue';

const ToastConstructor = Vue.extend(Toast);

ToastConstructor.prototype.close = function() {
    this.shown = false;
    removeDom(this.$el);
};

let processProps = (props) => {
    if (typeof props === 'string') {
        props = {
            message: props
        }
    }
    return props || {};
};

let getAnInstance = () => {
    return new ToastConstructor({
        el: document.createElement('div')
    });
};

let removeDom = el => {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};


const show = (props) => {
    props = processProps(props);
    let instance = getAnInstance();

    clearTimeout(instance.timer);
    instance.message = props.message || '';
    instance.duration = props.duration || 1500;
    instance.type = props.type || 'info';

    document.body.appendChild(instance.$el);

    Vue.nextTick(function() {
        instance.shown = true;
        // instance.timer = setTimeout(function() {
        //     instance.close();
        //     instance = null;
        // }, instance.duration);
    });
    //return instance;
};

export default {
    show
}