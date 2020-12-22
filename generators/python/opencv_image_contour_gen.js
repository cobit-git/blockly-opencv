
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
 * @fileoverview Generating Python for openCV contour blocks.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Python.opencv_contour_gen');
goog.require('Blockly.Python');

Blockly.Python['find_contour'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    var dropdown_method = block.getFieldValue('method');
    var variable_cont_list = Blockly.Python.variableDB_.getName(block.getFieldValue('CONTOUR'), Blockly.Variables.NAME_TYPE);
    var code = variable_cont_list+", hierachy = cv2.findContours("+value_image+", "+dropdown_mode+", "+dropdown_method+")\n"; 
    return code;
};

Blockly.Python['draw_contour'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
    var number_index = block.getFieldValue('index');
    var colour_color = block.getFieldValue('color');
    var number_thick = block.getFieldValue('thick');
    var rgb = hex2num(colour_color);
    var variable_img_cont = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_CONT'), Blockly.Variables.NAME_TYPE);
    var code = variable_img_cont+" = cv2.drawContours("+value_image+", "+value_contour+", "+number_index+", ("+rgb+"), "+number_thick+")\n";
    return code;
};

function hex2num(hex) {
    if(hex.charAt(0) == "#") hex = hex.slice(1); //Remove the '#' char - if there is one.
    hex = hex.toUpperCase();
    var hex_alphabets = "0123456789ABCDEF";
    var value = new Array(3);
    var k = 0;
    var int1,int2;
    for(var i=0;i<6;i+=2) {
      int1 = hex_alphabets.indexOf(hex.charAt(i));
      int2 = hex_alphabets.indexOf(hex.charAt(i+1)); 
      value[k] = (int1 * 16) + int2;
      k++;
    }
    var temp1 = value[2];
    var temp2 = value[0];
    value[0] = temp1;
    value[2] = temp2;
    return(value);
};
