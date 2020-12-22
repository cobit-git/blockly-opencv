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
 * @fileoverview big-cobit-car blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.big_cobit_car');  // Deprecated
goog.provide('Blockly.Constants.big_cobit_car');

//goog.require('Blockly.Blocks');
//goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  
    // set up servo motor 
    {
        "type": "setup_servo",
        "message0": "Set up servo motor %1",
        "args0": [
          {
            "type": "input_value",
            "name": "SERVO"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    },
    // Move servo 
    {
      "type": "move_servo",
      "message0": "Move servo  %1 servo number %2 %3 angle  %4",
      "args0": [
        {
          "type": "input_value",
          "name": "SERVO"
        },
        {
          "type": "field_number",
          "name": "SERVO_NO",
          "value": 0,
          "min": 1,
          "max": 4,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "ANGLE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Set up motor 
    {
      "type": "setup_motor",
      "message0": "Set up DC motor  %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Start motor 
    {
      "type": "start_motor",
      "message0": "Start motor  %1 right/reft %2 with speed %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_dropdown",
          "name": "MOTOR_SEL",
          "options": [
            [
              "right",
              "1"
            ],
            [
              "left",
              "2"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "SPEED",
          "value": 0,
          "min": 0,
          "max": 100,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Start all motor 
    {
      "type": "start_all_motor",
      "message0": "Start all motor %1 speed %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_number",
          "name": "SPEED",
          "value": 0,
          "min": 0,
          "max": 100,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Stop all motors
    {
      "type": "stop_all_motor",
      "message0": "Stop all motors %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Stop motor
    {
      "type": "stop_motor",
      "message0": "Stop motor %1 left/right %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_dropdown",
          "name": "MOTOR_SEL",
          "options": [
            [
              "right",
              "1"
            ],
            [
              "left",
              "2"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Wait seconds 
    {
      "type": "wait_seconds",
      "message0": "Wait seconds %1",
      "args0": [
        {
          "type": "field_number",
          "name": "SECONDS",
          "value": 1,
          "min": 0,
          "precision": 0.1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  


]);  // END JSON EXTRACT (Do not delete this comment.)