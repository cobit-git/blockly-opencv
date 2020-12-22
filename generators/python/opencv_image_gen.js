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
 * @fileoverview Generating Python for openCV image blocks.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Python.opencv_image_gen');
goog.require('Blockly.Python');


Blockly.Python['imread'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var text_image_file = block.getFieldValue('IMAGE_FILE');
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var dropdown_attribute = block.getFieldValue('ATTRIBUTE');
    var code = variable_image+" = cv2.imread(\""+text_image_file+"\","+dropdown_attribute+")\n";
    return code;
  };

Blockly.Python['imshow'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = "cv2.imshow('" + text_name + "',"+ value_name +")\r\n";
    return code;
};

Blockly.Python['waitkey'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var number_milisec = block.getFieldValue('MILISEC');
    var variable_key = Blockly.Python.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE);
    var code = variable_key+" = cv2.waitKey("+number_milisec+")&0xff\n";
    return code;
};

Blockly.Python['waitkey_noret'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var number_time = block.getFieldValue('time');
    var code = "cv2.waitKey("+number_time+")\n";
    return code;
};

Blockly.Python['destroyallwindow'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var code = "cv2.destroyAllWindows()\n";
    return code;
};

Blockly.Python['imwrite'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_name = Blockly.Python.valueToCode(block, 'IMG_NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('FILE_NAME');
    var code = "cv2.imwrite('"+text_name+"',"+value_name+")\n";
    return code;
};

Blockly.Python['image_shape'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_name = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var variable_rows = Blockly.Python.variableDB_.getName(block.getFieldValue('rows'), Blockly.Variables.NAME_TYPE);
    var variable_cols = Blockly.Python.variableDB_.getName(block.getFieldValue('cols'), Blockly.Variables.NAME_TYPE);
    var variable_chann = Blockly.Python.variableDB_.getName(block.getFieldValue('chann'), Blockly.Variables.NAME_TYPE);
    var code = variable_rows+", "+variable_cols+", "+variable_chann+" = "+value_name+".shape\n";
    return code;
};
