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
 * @fileoverview openCV contour blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_contour');  // Deprecated
goog.provide('Blockly.Constants.opencv_contour');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // cv2.findContour()
  {
    "type": "find_contour",
    //"message0": "Find all contour lines on image:  %1 mode: %2 %3 method:  %4 save to  %5",
    "message0": "%{BKY_CV_FIND_CONTOUR}",
    "args0": [
      {
        "type": "input_value",
        "name": "image"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            //"external line only",
            "%{BKY_CV_FIND_CONTOUR_EX_LINE}",
            "cv2.RETR_EXTERNAL"
          ],
          [
            //"all lines(no hierachy)",
            "%{BKY_CV_FIND_CONTOUR_ALL_LINE}",
            "cv2.RETR_LIST"
          ],
          [
            //"all lines(2 hierachy)",
            "%{BKY_CV_FIND_CONTOUR_ALL_1H}",
            "cv2.RETR_CCOMP"
          ],
          [
            //"all lines(all hierachy)",
            "%{BKY_CV_FIND_CONTOUR_ALL_AH}",
            "cv2.RETR_TREE"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "method",
        "options": [
          [
            //"save all contours points",
            "%{BKY_CV_FIND_CONTOUR_APP_NONE}",
            "cv2.CHAIN_APPROX_NONE"
          ],
          [
            //"save only effective points",
            "%{BKY_CV_FIND_CONTOUR_APP_SIMPLE}",
            "cv2.CHAIN_APPROX_SIMPLE"
          ],
          [
            //"using TC89_l1 algorithm",
            "%{BKY_CV_FIND_CONTOUR_APP_TC89L1}",
            "cv2.CHAIN_APPROX_TC89_L1"
          ],
          [
            //"using TC89_KC05 algorithm",
            "%{BKY_CV_FIND_CONTOUR_APP_TC89KC05}",
            "cv2.CHAIN_APPROX_TC89_KC05"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "CONTOUR",
        "variable": "cont_list"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_CONT_HUE}",
    "tooltip": "%{BKY_CV_FIND_CONTOUR_TOOLTIP}",
    "helpUrl": "%{BKY_CV_FIND_CONTOUR_HELPURL}"
  },
  // cv2.drawContour()
  {
    "type": "draw_contour",
    //"message0": " Draw contour line of index %3 nn image: %1 from contour list %2 color: %4 thick: %5 save to %6",
    "message0": "%{BKY_CV_DRAW_CONTOUR}",
    "args0": [
      {
        "type": "input_value",
        "name": "image"
      },
      {
        "type": "input_value",
        "name": "contour"
      },
      {
        "type": "field_number",
        "name": "index",
        "value": -1,
        "min": -1,
        "precision": 1
      },
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ff0000"
      },
      {
        "type": "field_number",
        "name": "thick",
        "value": 1,
        "min": 1,
        "max": 10,
        "precision": 1
      },
      {
        "type": "field_variable",
        "name": "IMG_CONT",
        "variable": "img_cont"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_CONT_HUE}",
    "tooltip": "%{BKY_CV_DRAW_CONTOUR_TOOLTIP}",
    "helpUrl": "%{BKY_CV_DRAW_CONTOUR_HELPURL}"
  },
 
]);  // END JSON EXTRACT (Do not delete this comment.)