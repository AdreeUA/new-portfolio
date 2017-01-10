'use strict';

import polyfills from './libraries/polyfills';
// import { Component } from './helpers-js';
// import { Hamburger } from 'components/hamburger/hamburger';
// import { Header } from 'components/header/header';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    // Component.init('.hamburger', Hamburger);
    // Component.init('.header', Header)
});
