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
 * @fileoverview openCV image transformation blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_image_trasnformation');  // Deprecated
goog.provide('Blockly.Constants.opencv_image_transformation');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // cv2.flip() 0 vertical 1 horizontal 
  {
    "type": "flip_image",
    //"message0": "Flip image %1 direction %2 save to %3",
    "message0": "%{BKY_CV_TRANS_FLIP}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          [
            //"horizontal",
            "%{BKY_CV_TRANS_FLIP_HORIZON}",
            "HORIZONTAL"
          ],
          [
            //"vertical",
            "%{BKY_CV_TRANS_FLIP_VERTICAL}",
            "VERTICAL"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_flip"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_TRAN_HUE}",
    "tooltip": "%{BKY_CV_TRANS_FLIP_TOOLTIP}",
    "helpUrl": "%{BKY_CV_TRANS_FLIP_HELPURL}"
  },
 
  // cv2.resize()
  {
    "type": "resize_image",
    //"message0": "Resize image  %1 with  X scale: %2 Y scale: %3 save to  %4",
    "message0": "%{BKY_CV_TRANS_RESIZE}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_number",
        "name": "X",
        "value": 1,
        "min": 0.1,
        "max": 10,
        "precision": 0.1
      },
      {
        "type": "field_number",
        "name": "Y",
        "value": 1,
        "min": 0.1,
        "max": 10,
        "precision": 0.1
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_RESIZE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_TRAN_HUE}",
    "tooltip": "%{BKY_CV_TRANS_RESIZE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_TRANS_RESIZE_HELPURL}"
  },
  // cv2.warpAffine() with 2D move matrix 
  {
    "type": "move_image",
    //"message0": "Move image %1 with X: %2 Y: %3 save to %4",
    "message0": "%{BKY_CV_TRANS_MOVE_IMG}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_number",
        "name": "X",
        "value": 0,
        "min": -8000,
        "max": 8000,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "Y",
        "value": 0,
        "min": -8000,
        "max": 8000,
        "precision": 1
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_MOVE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_TRAN_HUE}",
    "tooltip": "%{BKY_CV_TRANS_MOVE_IMG_TOOLTIP}",
    "helpUrl": "%{BKY_CV_TRANS_MOVE_IMG_HELPURL}"
  },
  // cv2.warpAffie() cv2.getRotationMatrix2D()
  {
    "type": "rotate_image",
    //"message0": "Rotate image %1 by angle %2 scaling %3 save to %4",
    "message0": "%{BKY_CV_TRANS_ROT_IMG}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_number",
        "name": "ANGLE",
        "value": 0,
        "min": -360,
        "max": 360,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "SCALING",
        "value": 1,
        "min": 0,
        "max": 10,
        "precision": 0.1
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_ROTATE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_TRAN_HUE}",
    "tooltip": "%{BKY_CV_TRANS_ROT_IMG_TOOLTIP}",
    "helpUrl": "%{BKY_CV_TRANS_ROT_IMG_HELPURL}"
  }
  
]);