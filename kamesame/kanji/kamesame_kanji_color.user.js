// ==UserScript==
// @name         Kanji color change
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change kanji background color to a color that doesn't hurt my eyes
// @author       @gabtemp
// @match        https://www.kamesame.com/*
// @icon         https://www.google.com/s2/favicons?domain=kamesame.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.documentElement.style.setProperty('--kanji', '#8c0758');
})();
