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
 * @fileoverview self driving blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.self_driving');  // Deprecated
goog.provide('Blockly.Constants.self_driving');

//goog.require('Blockly.Blocks');
//goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // get CV detector 
    {
        "type": "get_cv_detector",
        "message0": "Create OpenCV lane detector %1",
        "args0": [
          {
            "type": "input_value",
            "name": "DETECTOR"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "",
        "helpUrl": ""
    },
    // get lane from image
    {
      "type": "get_lane",
      "message0": "Using detector %1 get lanes from  image  %2 -> lanes %3, %4 lanes image %5",
      "args0": [
        {
          "type": "input_value",
          "name": "DETECTOR"
        },
         {
          "type": "input_value",
          "name": "IMG_ORG"
        },
        {
          "type": "field_variable",
          "name": "LANES",
          "variable": "lanes"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "IMG_LANE",
          "variable": "img_lane"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    },
    // get angle from lane
   
    {
      "type": "get_angle",
      "message0": "Using detector %1 get  steering angle from image %2  & lanes %3  -> angle %4,  %5 angle image %6",
      "args0": [
        {
          "type": "input_value",
          "name": "DETECTOR"
        },
        {
          "type": "input_value",
          "name": "IMG_LANE"
        },
        {
          "type": "input_value",
          "name": "LANES"
        },
        {
          "type": "field_variable",
          "name": "ANGLE",
          "variable": "angle"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "IMG_ANGLE",
          "variable": "img_angle"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    },
    // save angle image
    {
      "type": "save_angle_image",
      "message0": "Save train data at %1 with image %2 & angle %3",
      "args0": [
        {
          "type": "field_input",
          "name": "STORE",
          "text": "./data/"
        },
        {
          "type": "input_value",
          "name": "IMG_ORG"
        },
        {
          "type": "input_value",
          "name": "ANGLE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    },
    // follow lane
    {
      "type": "follow_lane",
      "message0": "Using detector %1 get steering angle from image %2 -> angle %3 %4 , angle image %5",
      "args0": [
        {
          "type": "input_value",
          "name": "DETECTOR"
        },
        {
          "type": "input_value",
          "name": "IMG_ORG"
        },
        {
          "type": "field_variable",
          "name": "ANGLE",
          "variable": "angle_deep"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_variable",
          "name": "IMG_ANGLE",
          "variable": "img_angle_deep"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    },
    // Create deep learning lane detector
    {
      "type": "get_ml_detector",
      "message0": "Create deep learning lane detector %1 model file %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DETECTOR"
        },
        {
            "type": "field_input",
            "name": "MODEL",
            "text": "./models/lane_navigation_final.h5"
        }
       
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "",
      "helpUrl": ""
    }


]);  // END JSON EXTRACT (Do not delete this comment.)