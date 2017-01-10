import shortid from 'shortid';

import { forEach } from 'helpers-js';

const cache = {};

export class Component {

    constructor(block, className, callback) {
        if (!block) return false;
        if (!block.classList.contains(className)) {
            throw new Error(`Элемент не является блоком ${className}`);
        }

        if (!cache[className]) cache[className] = {};

        const id = block.getAttribute('data-id') || shortid.generate();

        if (cache[className][id]) return cache[className][id];

        this.block = block;
        this._className = className;
        block.setAttribute('data-id', id);
        cache[className][id] = this;

        if (typeof callback === 'function') {
            callback.bind(this)();
        }
    }

    delete() {
        delete cache[this._className][this.block.getAttribute('data-id')];
    }

}

Component.init = (blocks, Class) => {
    if (typeof blocks === 'string') {
        blocks = document.querySelectorAll(blocks);
    }

    if (blocks instanceof HTMLElement) {
        return new Class(blocks);
    }

    if (blocks instanceof NodeList) {
        forEach(blocks, (block) => {
            new Class(block);
        });
    }
}
