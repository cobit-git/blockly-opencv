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
 * @fileoverview openCV edge detection blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_edge_detect');  // Deprecated
goog.provide('Blockly.Constants.opencv_edge_detect');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // cv2.Canny()
  {
    "type": "canny_edge_detect",
    //"message0": "Detect edge of image %1 uisng Canny by hysteresis min %2 hysteresis max %3 save to %4",
    "message0": "%{BKY_CV_EDGE_CANNY}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_number",
        "name": "HYS_MIN",
        "value": 0,
        "min": 0,
        "max": 250,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "HYS_MAX",
        "value": 0,
        "min": 0,
        "max": 250,
        "precision": 1
      },
      {
        "type": "field_variable",
        "name": "IMG_CANNY",
        "variable": "img_canny"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_EDGE_DETECT_HUE}",
    "tooltip": "%{BKY_CV_EDGE_CANNY_TOOLTIP}",
    "helpUrl": "%{BKY_CV_EDGE_CANNY_HELPURL}"
  },

]);