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
 * @fileoverview openCV color space converting blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_image_processing');  // Deprecated
goog.provide('Blockly.Constants.opencv_image_processing');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // cv2.cvtColor()
  {
    "type": "cvt_color",
    //"message0": "Convert color space of %1 image:  %2 with option %3 %4 and save to  %5",
    "message0": "%{BKY_CV_CVT_COLOR}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "field_dropdown",
        "name": "OPTION",
        "options": [
          [
            "BGR -> gray",
            "cv2.COLOR_BGR2GRAY"
          ],
          [
            "gray -> BGR",
            "cv2.COLOR_GRAY2BGR"
          ],
          [
            "BGR -> HSV",
            "cv2.COLOR_BGR2HSV"
          ],
          [
            "HSV -> BGR",
            "cv2.COLOR_HSV2BGR"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_variable",
        "name": "IMG_CVT",
        "variable": "img_cvt"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_PRO_HUE}",
    "tooltip": "%{BKY_CV_CVT_COLOR_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CVT_COLOR_HELPURL}"
  },
  //cv2.inRange()
  {
    "type": "in_range",
    //"message0": "Get filtered HSV image from  image %1 HSV low limit: %2 HSV upper limit: %3 and save to  %3",
    "message0": "%{BKY_CV_IN_RANGE}",
    "args0": [
      {
        "type": "input_value",
        "name": "image"
      },
      {
        "type": "input_value",
        "name": "low_limit"
      },
      {
        "type": "input_value",
        "name": "up_limit"
      },
      {
        "type": "field_variable",
        "name": "IMG_MASK",
        "variable": "img_mask"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_PRO_HUE}",
    "tooltip": "%{BKY_CV_IN_RANGE}",
    "helpUrl": "%{BKY_CV_IN_RANGE}"
  },
  // Upper limit for cv2.inRange()
  {
    "type": "hsv_color_upper_limit",
    //"message0": "HSV color upper limit %1 H: %2 S: %3 V: %4",
    "message0": "%{BKY_CV_UPPER_LIMIT}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "H",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "S",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "V",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      }
    ],
    "output": null,
    "colour": "%{BKY_CV_IMAGE_PRO_HUE}",
    "tooltip": "%{BKY_CV_UPPER_LIMIT_TOOLTIP}",
    "helpUrl": "%{BKY_CV_UPPER_LIMIT_HELPURL}"
  }, 
   // Lower limit for cv2.inRange()
  {
    "type": "hsv_color_lower_limit",
    //"message0": "HSV color lower limit %1 H: %2 S: %3 V: %4",
    "message0": "%{BKY_CV_LOWER_LIMIT}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "H",
        "value": 0,
        "min": -255,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "S",
        "value": 0,
        "min": -255,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "V",
        "value": 0,
        "min": -255,
        "max": 255,
        "precision": 1
      }
    ],
    "output": null,
    "colour": "%{BKY_CV_IMAGE_PRO_HUE}",
    "tooltip": "%{BKY_CV_LOWER_LIMIT_TOOLTIP}",
    "helpUrl": "%{BKY_CV_LOWER_LIMIT_HELPURL}"
  },
  {
    "type": "get_hue_value",
    //"message0": "Get hue value for R %1 G %2 B %3 %4 and save to  %5",
    "message0": "%{BKY_CV_GET_HUE_VALUE}",
    "args0": [
      {
        "type": "field_number",
        "name": "RED",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "GREEN",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "BLUE",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "HUE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_IMAGE_PRO_HUE}",
    "tooltip": "%{BKY_CV_GET_HUE_VALUE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_GET_HUE_VALUE_HELPURL}"
  }
 
]);  // END JSON EXTRACT (Do not delete this comment.)