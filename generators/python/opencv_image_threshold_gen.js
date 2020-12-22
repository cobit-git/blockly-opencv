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
 * @fileoverview Generating Python for openCV image threshold blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_image_threshold_gen');
//goog.require('Blockly.Python');

Blockly.Python['threshold'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var number_threshold = block.getFieldValue('THRESHOLD');
  var dropdown_options = block.getFieldValue('OPTIONS');
  var variable_thresh = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_THRESH'), Blockly.Variables.NAME_TYPE);
  var code = "ret, "+variable_thresh+" = cv2.threshold("+value_image+", "+number_threshold+", 255, "+dropdown_options+")\r\n";
  return code;
};