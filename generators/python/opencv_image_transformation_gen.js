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
 * @fileoverview Generating Python for openCV image transformation blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_image_transformation_gen');
//goog.require('Blockly.Python');


Blockly.Python['flip_image'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
  var dir = 0;
  if(dropdown_direction == 'HORIZONTAL'){
    dir = 1;
  }else if(dropdown_direction == 'VERTICAL'){
    dir = 0;
  }
  var code = variable_image+" = cv2.flip("+value_image+", "+dir+")\r\n";
  return code;
};

Blockly.Python['resize_image'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
  var interpol = 'cv2.INTER_CUBIC';
  if((number_y < 1) || (number_x <1)){
    interpol = 'cv2.INTER_AREA';
  }
  var code = variable_image+" = cv2.resize("+value_image+", None, fx="+number_x+", fy="+number_y+", interpolation="+interpol+")\r\n";
  return code;
};

Blockly.Python['move_image'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
  var code = "rows, cols = "+value_image+".shape[:2]\r\n"+
              "M = np.float32([[1,0,"+number_x+"],[0,1,"+number_y+"]])\r\n"+
              variable_image+" = cv2.warpAffine("+value_image+", M, (cols, rows))\r\n";
  return code;
};

Blockly.Python['rotate_image'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var number_angle = block.getFieldValue('ANGLE');
  var number_scale = block.getFieldValue('SCALING');
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
  var code ="rows, cols = "+value_image+".shape[:2]\r\n"+ 
            "M = cv2.getRotationMatrix2D((cols/2, rows/2),"+number_angle+", "+number_scale+")\r\n"+
            variable_image+" = cv2.warpAffine("+value_image+", M,(cols, rows))\r\n"
  return code;
};


