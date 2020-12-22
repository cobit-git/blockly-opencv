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
 * @fileoverview openCV video blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.robot_arm_mk1');  // Deprecated
goog.provide('Blockly.Constants.robot_arm_mk1');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "init_serial",
    "message0": "Initialize serial: %1",
    "args0": [
      {
        "type": "field_input",
        "name": "serial",
        "text": "ex: COM1 or /dev/ttyUSB0"
      }
    ],
    "output": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "robot_home",
    "message0": "Reset robot postion %1 Serial: %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "serial"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "move_robot_xyz",
    "message0": "Move robot to x: %1 y: %2 z: %3 gripper: %4 %5 serial: %6",
    "args0": [
      {
        "type": "field_number",
        "name": "x",
        "value": 0.1,
        "min": 0,
        "max": 0.3,
        "precision": 0.01
      },
      {
        "type": "field_number",
        "name": "y",
        "value": 0.1,
        "min": 0,
        "max": 0.3,
        "precision": 0.01
      },
      {
        "type": "field_number",
        "name": "z",
        "value": 0.1,
        "min": 0,
        "max": 0.3,
        "precision": 0.01
      },
      {
        "type": "field_number",
        "name": "gri",
        "value": 90,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "serial"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "move_robot_6_link",
    "message0": "Move robot  to %1 base: %2 shoulder: %3 elbow: %4 %5 wrist up/down %6 wrist turn %7 gripper %8 %9 serial: %10",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "base",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "shl",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "elbo",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "wri",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "wro",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "grip",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "serial"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "move_robot_1_link",
    "message0": "Move robot arm servo: %1 angle:  %2 %3 serial: %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "servo",
        "options": [
          [
            "base",
            "BASE"
          ],
          [
            "shoulder",
            "SHOULDER"
          ],
          [
            "elbow",
            "ELBOW"
          ],
          [
            "wrist up/down",
            "WRIST_UD"
          ],
          [
            "wrist turn",
            "WRIST_TURN"
          ],
          [
            "gripper",
            "GRIPPER"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "angle",
        "value": 0,
        "min": -90,
        "max": 90,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "serial"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "run_robot",
    "message0": "Run robot through saved position",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)