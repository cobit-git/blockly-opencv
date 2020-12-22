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
 * @fileoverview Generating Python for openCV morphing blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_morph_gen');
//goog.require('Blockly.Python');

Blockly.Python['erode'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);
    var number_iteration = block.getFieldValue('iteration');
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var code =  "kernel = cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))\r\n"+
                variable_image+" = cv2.erode("+value_source+", kernel, iterations = "+number_iteration+")\n" 
    return code;
};

Blockly.Python['dilation'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);
    var number_count = block.getFieldValue('count');
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var code =  "kernel = cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))\r\n"+
                variable_image+" = cv2.dilate("+value_source+", kernel, iterations = "+number_count+")\n" 
    return code;
};

Blockly.Python['erode_dilation'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var dropdown_op = block.getFieldValue('OP');
    var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE);
    var code =  "kernel = cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))\r\n"+
                variable_image+" = cv2.morphologyEx("+value_image+", "+dropdown_op+", kernel)\r\n";
    return code;
};
