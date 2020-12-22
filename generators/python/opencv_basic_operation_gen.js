/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for openCV basic operation blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_video_gen');
//goog.require('Blockly.Python');

Blockly.Python['get_pixel_info'] = function(block) {
  var value_pixel = Blockly.Python.valueToCode(block, 'PIXEL', Blockly.Python.ORDER_ATOMIC);
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var variable_blue = Blockly.Python.variableDB_.getName(block.getFieldValue('BLUE'), Blockly.Variables.NAME_TYPE);
  var variable_green = Blockly.Python.variableDB_.getName(block.getFieldValue('GREEN'), Blockly.Variables.NAME_TYPE);
  var variable_red = Blockly.Python.variableDB_.getName(block.getFieldValue('RED'), Blockly.Variables.NAME_TYPE);
  var code = variable_blue+", "+variable_green+", "+variable_red+" = "+value_pixel+"["+number_x+", "+number_y+"]\r\n";
  return code;
};


Blockly.Python['change_pixel_value'] = function(block) {
  var value_pixel = Blockly.Python.valueToCode(block, 'PIXEL', Blockly.Python.ORDER_ATOMIC);
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var value_rgb = Blockly.Python.valueToCode(block, 'RGB', Blockly.Python.ORDER_NONE);
  var code = value_pixel+"["+number_x+", "+number_y+"] = "+value_rgb+"\r\n";
  return code;
};

Blockly.Python['get_image_size'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var variable_img_size = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_SIZE'), Blockly.Variables.NAME_TYPE);
  var code = variable_img_size+" = "+value_image+".size\r\n";
  return code;
};

Blockly.Python['get_roi_image'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_NONE);
  var value_end = Blockly.Python.valueToCode(block, 'END', Blockly.Python.ORDER_NONE);
  var variable_img_roi = Blockly.Python.variableDB_.getName(block.getFieldValue('ARRAY_ROI'), Blockly.Variables.NAME_TYPE);
  var code = variable_img_roi+" = "+value_image+"["+value_start+", "+value_end+"]\r\n";
  return code;
};

Blockly.Python['start_roi'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var code = number_x+":"+number_y;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['end_roi'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var code = number_x+":"+number_y;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rgb_value'] = function(block) {
  var number_r = block.getFieldValue('R');
  var number_g = block.getFieldValue('G');
  var number_b = block.getFieldValue('B');
  var code = "["+number_r+", "+number_b+", "+number_g+"]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['copy_roi_image'] = function(block) {
  var value_roi = Blockly.Python.valueToCode(block, 'ROI', Blockly.Python.ORDER_ATOMIC);
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_NONE);
  var value_end = Blockly.Python.valueToCode(block, 'END', Blockly.Python.ORDER_NONE);
  var code = value_image+"["+value_start+","+value_end+"] = "+value_roi+"\r\n";
  return code;
};

