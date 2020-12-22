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
 * @fileoverview Generating Python for openCV image operation blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_image_operation_gen');
//goog.require('Blockly.Python');

Blockly.Python['add_image'] = function(block) {
  var value_image1 = Blockly.Python.valueToCode(block, 'IMAGE1', Blockly.Python.ORDER_ATOMIC);
  var value_image2 = Blockly.Python.valueToCode(block, 'IMAGE2', Blockly.Python.ORDER_ATOMIC);
  var value_image_add = Blockly.Python.valueToCode(block, 'IMAGE_ADD', Blockly.Python.ORDER_ATOMIC);
  var code = value_image_add+" = cv2.add("+value_image1+", "+value_image2+")\r\n";
  return code
};

Blockly.Python['bitwise_not'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var value_image_add = Blockly.Python.valueToCode(block, 'IMAGE_ADD', Blockly.Python.ORDER_ATOMIC);
  var code = value_image_add+" = cv2.bitwise_not("+value_image+")\r\n";
  return code;
};

Blockly.Python['bitwise_and'] = function(block) {
  var value_image1 = Blockly.Python.valueToCode(block, 'IMAGE1', Blockly.Python.ORDER_ATOMIC);
  var value_image2 = Blockly.Python.valueToCode(block, 'IMAGE2', Blockly.Python.ORDER_ATOMIC); 
  var value_image_add = Blockly.Python.valueToCode(block, 'IMAGE_ADD', Blockly.Python.ORDER_ATOMIC);
  var code = value_image_add+" = cv2.bitwise_and("+value_image1+", "+value_image2+")\r\n";
  return code;
};

Blockly.Python['bitwise_or'] = function(block) {
  var value_image1 = Blockly.Python.valueToCode(block, 'IMAGE1', Blockly.Python.ORDER_ATOMIC);
  var value_image2 = Blockly.Python.valueToCode(block, 'IMAGE2', Blockly.Python.ORDER_ATOMIC);
  var value_image_add = Blockly.Python.valueToCode(block, 'IMAGE_ADD', Blockly.Python.ORDER_ATOMIC);
  var code = value_image_add+" = cv2.bitwise_or("+value_image1+", "+value_image2+")\r\n";
  return code;
};