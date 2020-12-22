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
 * @fileoverview openCV image threshold blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_image_threshold');  // Deprecated
goog.provide('Blockly.Constants.opencv_image_threshold');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

  {
    "type": "threshold",
    //"message0": "Get threshold-filtered image from  image %1 threshold value: %2 option %3 save to %4",
    "message0": "%{BKY_CV_IMAGE_THRESHOLD}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_number",
        "name": "THRESHOLD",
        "value": 127,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_dropdown",
        "name": "OPTIONS",
        "options": [
          [
            //"BINARY",
            "%{BKY_CV_IMAGE_THRESH_ATTR_BINARY}",
            "cv2.THRESH_BINARY"
          ],
          [
            //"BINARY_INV",
            "%{BKY_CV_IMAGE_THRESH_ATTR_BINARY_INV}",
            "cv2.THRESH_BINARY_INV"
          ],
          [
            //"TRUNC",
            "%{BKY_CV_IMAGE_THRESH_ATTR_TRUNC}",
            "cv2.THRESH_TRUNC"
          ],
          [
            //"TOZERO",
            "%{BKY_CV_IMAGE_THRESH_ATTR_TOZERO}",
            "cv2.THRESH_TOZERO"
          ],
          [
            //"TOZERO_INV",
            "%{BKY_CV_IMAGE_THRESH_ATTR_TOZERO_INV}",
            "cv2.THRESH_TOZERO_INV"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "IMG_THRESH",
        "variable": "img_thresh"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_THRE_HUE}",
    "tooltip": "%{BKY_CV_IMAGE_THRESH_TOOLTIP}",
    "helpUrl": "%{BKY_CV_IMAGE_THRESH_HELPURL}"
  }
]);