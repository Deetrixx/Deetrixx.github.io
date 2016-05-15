window.whatInput = (function () {

            'use strict';

            /*
              ---------------
              variables
              ---------------
            */

            // array of actively pressed keys
            var activeKeys = [];

            // cache document.body
            var body;

            // boolean: true if touch buffer timer is running
            var buffer = false;

            // the last used input type
            var currentInput = null;

            // `input` types that don't accept text
            var nonTypingInputs = [
    'button'
    , 'checkbox'
    , 'file'
    , 'image'
    , 'radio'
    , 'reset'
    , 'submit'
  ];
