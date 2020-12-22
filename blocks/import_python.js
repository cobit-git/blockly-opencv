/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview importing python module blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.importing_python');  // Deprecated
goog.provide('Blockly.Constants.importing_python');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "import_cv2",
        "message0": "import openCV module",
        //"previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
    },
    {
        "type": "import_numpy",
        "message0": "import numpy as np",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": "http://cobit.kr"
    },
    {
        "type": "import_time",
        "message0": "import time",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "import_robot_control",
        "message0": "import robot control as rc",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "import_socket",
        "message0": "import socket",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "import_urllib",
        "message0": "import urllib.request",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)