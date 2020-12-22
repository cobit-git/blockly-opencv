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
 * @fileoverview Generating Python for openCV image processing blocks.
 * @author conner.jeong@gmail.com
 */
'use strict';

goog.provide('Blockly.Python.opencv_image_processing_gen');
goog.require('Blockly.Python');


Blockly.Python['cvt_color'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('OPTION');
  var variable_img_cvt = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_CVT'), Blockly.Variables.NAME_TYPE);
  var code = variable_img_cvt+" =  cv2.cvtColor( "+value_image+", "+dropdown_option+")\n";
  return code;
};

Blockly.Python['in_range'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_low_limit = Blockly.Python.valueToCode(block, 'low_limit', Blockly.Python.ORDER_ATOMIC);
  var variable_img_mask = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_MASK'), Blockly.Variables.NAME_TYPE);
  var value_up_limit = Blockly.Python.valueToCode(block, 'up_limit', Blockly.Python.ORDER_ATOMIC);
  var code = variable_img_mask+" = cv2.inRange( "+value_image+", "+value_low_limit+", "+value_up_limit+")\n";
  return code;
};

Blockly.Python['hsv_color_upper_limit'] = function(block) {
    var number_b = block.getFieldValue('H');
    var number_g = block.getFieldValue('S');
    var number_r = block.getFieldValue('V');
    var code = "np.array([ "+number_b+", "+number_g+", "+number_r+"])";
    return [code, Blockly.Python.ORDER_NONE];
  };

Blockly.Python['hsv_color_lower_limit'] = function(block) {
    var number_b = block.getFieldValue('H');
    var number_g = block.getFieldValue('S');
    var number_r = block.getFieldValue('V');
    var code = "np.array([ "+number_b+", "+number_g+", "+number_r+"])";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_hue_value'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var number_red = block.getFieldValue('RED');
  var number_green = block.getFieldValue('GREEN');
  var number_blue = block.getFieldValue('BLUE');
  var value_hue = Blockly.Python.valueToCode(block, 'HUE', Blockly.Python.ORDER_ATOMIC);
  var code = "color = np.uint8([[["+number_blue+", "+number_green+", "+number_red+"]]])\r\n"+
             "hsv_color = cv2.cvtColor(color, cv2.COLOR_BGR2HSV)\r\n"+
             value_hue+" = hsv_color[0][0][0]\r\n"+
             "print(\"Lower bound is :\")\r\n"+
             "print(\"[\" + str(hue-10) + \", 100, 100]\\n\")\r\n"+ 
             "print(\"Upper bound is :\")\r\n"+
             "print(\"[\" + str(hue+10) + \", 255, 255]\\n\")\r\n";
  return code;
};
