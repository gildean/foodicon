'use strict';

var fs = require('fs');
var path = require('path');
var serveFavicon = require('serve-favicon');
var dir = path.join(__dirname, 'favicons');

function iconlist() {
    return fs.readdirSync(dir).filter(function filterNonIcons(file) { return /\.ico$/.test(file); });
}

function randomIcon() {
    var icons = iconlist();
    return path.join(dir, icons[Math.floor(Math.random() * icons.length)]);
}

function favicon(iconpath) {
    return serveFavicon(iconpath || randomIcon());
}

module.exports = favicon;
