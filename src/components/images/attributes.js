/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var annAttrs = require('../annotations/attributes');
// var scatterAttrs = require('../../traces/scatter/attributes');
var extendFlat = require('../../lib/extend').extendFlat;

// var scatterLineAttrs = scatterAttrs.line;

module.exports = {
    _isLinkedToArray: true,

    source: {
        valType: 'string',
        role: 'info',
        description: [
            'Specifies the URL of the image to be used.',
            'The URL must be accessible from the domain where the',
            'plot code is run, and can be either relative or absolute.'

        ].join(' ')
    },

    layer: {
        valType: 'enumerated',
        values: ['below', 'above'],
        dflt: 'above',
        role: 'info',
        description: 'Specifies whether images are drawn below or above traces.'
    },

    width: {
        valType: 'number',
        role: 'info',
        description: [
            'Sets the image width in normalized coordinate space.',
            'The value must be between 0 and 1.',
            'If only width is set, the image\'s aspect ratio will be preserved.'
        ].join(' ')
    },

    height: {
        valType: 'number',
        role: 'info',
        description: [
            'Sets the image width in normalized coordinate space.',
            'The value must be between 0 and 1.',
            'If only height is set, the image\'s aspect ratio will be preserved.'
        ].join(' ')
    },

    x: {
        valType: 'number',
        role: 'info',
        description: [
            'Sets the image\'s x position in normalized coordinate space.',
            'The value must be between 0 and 1.'
        ].join(' ')
    },

    y: {
        valType: 'number',
        role: 'info',
        description: [
            'Sets the image\'s y position in normalized coordinate space.',
            'The value must be between 0 and 1.'
        ].join(' ')
    },

    yref: extendFlat({}, annAttrs.yref, {
        description: [
            'Sets the images\'s y coordinate axis.',
            'If set to a y axis id (e.g. *y* or *y2*), the `y` position',
            'refers to an y coordinate',
            'If set to *paper*, the `y` position refers to the distance from',
            'the bottom of the plotting area in normalized coordinates',
            'where *0* (*1*) corresponds to the bottom (top).'
        ].join(' ')
    }),

    xref: extendFlat({}, annAttrs.xref, {
        description: [
            'Sets the shape\'s x coordinate axis.',
            'If set to an x axis id (e.g. *x* or *x2*), the `x` position',
            'refers to an x coordinate',
            'If set to *paper*, the `x` position refers to the distance from',
            'the left side of the plotting area in normalized coordinates',
            'where *0* (*1*) corresponds to the left (right) side.'
        ].join(' ')
    }),

    opacity: {
        valType: 'number',
        min: 0,
        max: 1,
        dflt: 1,
        role: 'info',
        description: 'Sets the opacity of the image.'
    }
};
