import { Component } from 'helpers-js';
import { Hamburger } from 'components/hamburger/hamburger'

export class Header extends Component {
    constructor(block) {
        super(block, 'header', function () {

            this.init()
        })
    }

    init() {
        const hamburger = this.block.querySelector('.hamburger'),
            nav = this.block.querySelector('.nav');

        if (hamburger) {
            this.hamburger = new Hamburger(hamburger);

            this.hamburger.block.addEventListener('open', () => nav.classList.add('nav_open'));
            this.hamburger.block.addEventListener('close', () => nav.classList.remove('nav_open'));
        }

    }
}
