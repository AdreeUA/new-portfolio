import { Component } from 'helpers-js';

export class Hamburger extends Component{
    constructor(block) {
        super(block, 'hamburger', function () {
            this.opened = false;

            this.block.addEventListener('click', () => {
                this.toggle();
            })
        })
    }

    open() {
        if (this.opened) return;
        this.opened = true;

        this.block.classList.add('hamburger_open');

        const Event = new CustomEvent('open', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(Event), 10)
    }

    close() {
        if (!this.opened) return;
        this.opened = false;

        this.block.classList.remove('hamburger_open');

        const Event = new CustomEvent('close', {
            bubbles: true
        });
        setTimeout(() => this.block.dispatchEvent(Event), 10)
    }

    toggle() {
        if(!this.opened) {
            this.open()
        } else {
            this.close()
        }
    }
}
