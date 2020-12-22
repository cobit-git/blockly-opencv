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
 * @fileoverview openCV image operation blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_image_operation');  // Deprecated
goog.provide('Blockly.Constants.opencv_image_operation');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // cv2.add()
  {
    "type": "add_image",
    //"message0": "Add 2 images image1 %1 and image2 %2 save to %3",
    "message0": "%{BKY_CV_ADD_IMAGE}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE1"
      },
      {
        "type": "input_value",
        "name": "IMAGE2"
      },
      {
        "type": "input_value",
        "name": "IMAGE_ADD"
      }
    ],
    "inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_OP_HUE}",
    "tooltip": "%{BKY_CV_ADD_IMAGE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_ADD_IMAGE_HELPURL}"
  },  
  // cv2.bitwise_not()
  {
    "type": "bitwise_not",
    //"message0": "Do bitwise NOT operation to image %1",
    "message0": "%{BKY_CV_BITWISE_NOT}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "input_value",
        "name": "IMAGE_ADD"
      }
    ],
    "inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_OP_HUE}",
    "tooltip": "%{BKY_CV_BITWISE_NOT_TOOLTIP}",
    "helpUrl": "%{BKY_CV_BITWISE_NOT_HELPURL}"
  },
  // cv2.bitwise_and()
  {
    "type": "bitwise_and",
    //"message0": "Do bitwise AND image1  %1 and image2 %2",
    "message0": "%{BKY_CV_BITWISE_AND}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE1"
      },
      {
        "type": "input_value",
        "name": "IMAGE2"
      },
      {
        "type": "input_value",
        "name": "IMAGE_ADD"
      }
    ],
    "inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_OP_HUE}",
    "tooltip": "%{BKY_CV_BITWISE_AND_TOOLTIP}",
    "helpUrl": "%{BKY_CV_BITWISE_AND_HELPURL}"
  },
  // cv2,bitwise_or()
  {
    "type": "bitwise_or",
    //"message0": "Do bitwise OR operation image1 %1 and image2 %2",
    "message0": "%{BKY_CV_BITWISE_OR}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE1"
      },
      {
        "type": "input_value",
        "name": "IMAGE2"
      },
      {
        "type": "input_value",
        "name": "IMAGE_ADD"
      }
    ],
    "inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_OP_HUE}",
    "tooltip": "%{BKY_CV_BITWISE_OR_TOOLTIP}",
    "helpUrl": "%{BKY_CV_BITWISE_OR_HELPURL}"
  }
  
]);