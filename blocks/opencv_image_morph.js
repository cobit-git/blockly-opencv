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
 * @fileoverview openCV imagemorphing blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_morph');  // Deprecated
goog.provide('Blockly.Constants.opencv_morph');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // cv2.dilate()
    {
        "type": "dilation",
        //"message0": "Dilation of image: %1 fill up count: %2 save to %3",
        "message0": "%{BKY_CV_MORPH_DILATION}",
        "args0": [
          {
            "type": "input_value",
            "name": "source"
          },
          {
            "type": "field_number",
            "name": "count",
            "value": 1,
            "min": 1,
            "max": 5,
            "precision": 1
          },
          {
            "type": "field_variable",
            "name": "IMAGE",
            "variable": "img_dilate"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_CV_IMAGE_MORP_HUE}",
        "tooltip": "%{BKY_CV_MORPH_DILATION_TOOLTIP}",
        "helpUrl": "%{BKY_CV_MORPH_DILATION_HELPURL}"
    },
    // cv2.erode
    {
      "type": "erode",
      //"message0": "erode the image: %1 run count: %2 save to %3",
      "message0": "%{BKY_CV_MORPH_ERODE}",
      "args0": [
        {
          "type": "input_value",
          "name": "source"
        },
        {
          "type": "field_number",
          "name": "iteration",
          "value": 1,
          "min": 1,
          "max": 5,
          "precision": 1
        },
        {
          "type": "field_variable",
          "name": "IMAGE",
          "variable": "img_erode"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_CV_IMAGE_MORP_HUE}",
      "tooltip": "%{BKY_CV_MORPH_ERODE_TOOLTIP}",
      "helpUrl": "%{BKY_CV_MORPH_ERODE_HELPURL}"
    },
    // cv2.morphologyEx()
    {
      "type": "erode_dilation",
      //"message0": "Erode and do dilation of image: %1 with OP %2 save to %3",
      "message0": "%{BKY_CV_MORPH_MORPHEX}",
      "args0": [
        {
          "type": "input_value",
          "name": "IMAGE"
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            [
              //"MORP_OPEN",
              "%{BKY_CV_MORPH_MORPHEX_OPEN}",
              "cv2.MORPH_OPEN"
            ],
            [
              //"MORPH_CLOSE",
              "%{BKY_CV_MORPH_MORPHEX_CLOSE}",
              "cv2.MORPH_CLOSE"
            ],
            [
              //"MORPH_GRADIENT",
              "%{BKY_CV_MORPH_MORPHEX_GRAD}",
              "cv2.MORPH_GRADIENT"
            ],
            [
              //"MORPH_TOPHAT",
              "%{BKY_CV_MORPH_MORPHEX_TOPHAT}",
              "cv2.MORPH_TOPHAT"
            ],
            [
              //"MORPH_BLACKHAT",
              "%{BKY_CV_MORPH_MORPHEX_BLACK}",
              "cv2.MORPH_BLACKHAT"
            ]
          ]
        },
        {
          "type": "field_variable",
          "name": "IMAGE",
          "variable": "img_morph"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_CV_IMAGE_MORP_HUE}",
      "tooltip": "%{BKY_CV_MORPH_MORPHEX_TOOLTIP}",
      "helpUrl": "%{BKY_CV_MORPH_MORPHEX_HELPURL}"
    }
]);