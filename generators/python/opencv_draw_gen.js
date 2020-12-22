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
 * @fileoverview Generating Python for openCV draw blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_draw_gen');
//goog.require('Blockly.Python');

Blockly.Python['draw_line'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
    var value_end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);
    var colour_color = block.getFieldValue('color');
    var rgb = hex2num(colour_color);
    var number_thick = block.getFieldValue('thick');
    var code = "cv2.line("+value_image+", "+value_start+", "+value_end+", ("+rgb+"), "+number_thick+" )\n";
    return code;
};

Blockly.Python['draw_rect'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
    var value_end = Blockly.Python.valueToCode(block, 'end:', Blockly.Python.ORDER_ATOMIC);
    var colour_color = block.getFieldValue('color');
    var rgb = hex2num(colour_color);
    var number_thick = block.getFieldValue('thick');
    var code = "cv2.rectangle("+value_image+" ,"+value_start+" ,"+value_end+", ("+rgb+"), "+number_thick+" )\n";
    return code;
};

Blockly.Python['draw_circle'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
    var value_center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
    var number_radian = block.getFieldValue('radian');
    var colour_color = block.getFieldValue('color');
    var number_thick = block.getFieldValue('thick');
    var rgb = hex2num(colour_color);
    var code = "cv2.circle("+value_image+", "+value_center+", "+number_radian+", ("+rgb+"), "+number_thick+" )\n";
    return code;
};

Blockly.Python['start'] = function(block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = number_x+", "+number_y;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['end'] = function(block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = number_x+", "+number_y;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['center'] = function(block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = number_x+", "+number_y;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['put_text'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var text_text = block.getFieldValue('text');
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_origin = Blockly.Python.valueToCode(block, 'origin', Blockly.Python.ORDER_ATOMIC);
    var number_scale = block.getFieldValue('scale');
    var colour_colour = block.getFieldValue('colour');
    var rgb = hex2num(colour_colour);
    var code = "cv2.putText("+value_text+" , '"+text_text+"', "+value_origin+" , cv2.FONT_HERSHEY_SIMPLEX, "+number_scale+", ("+rgb+"))\n";
    return code;
};

Blockly.Python['origin'] = function(block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = number_x+", "+number_y;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['make_empty_image'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var number_x_size = block.getFieldValue('X_SIZE');
    var number_y_size = block.getFieldValue('Y_SIZE');
    var code = value_image+" = np.zeros(("+number_x_size+", "+number_y_size+", 3), np.uint8)\r\n";
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
}