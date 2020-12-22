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
 * @fileoverview Generating Python for openCV video blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_video_gen');
//goog.require('Blockly.Python');

Blockly.Python['create_video_capture_camera'] = function(block) {
    var value_capture = Blockly.Python.valueToCode(block, 'CAPTURE', Blockly.Python.ORDER_ATOMIC);
    var number_camera = block.getFieldValue('CAMERA');
    var code = value_capture+" = cv2.VideoCapture("+number_camera+")\r\n";
    return code;
};

Blockly.Python['create_video_capture_file'] = function(block) {
    var value_capture = Blockly.Python.valueToCode(block, 'CAPTURE', Blockly.Python.ORDER_ATOMIC);
    var text_video = block.getFieldValue('VIDEO');
    var code = value_capture+" = cv2.VideoCapture('"+text_video+"')\r\n";
    return code;
};

Blockly.Python['read_video_from_capture'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var variable_img = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG'), Blockly.Variables.NAME_TYPE);
    var value_capture = Blockly.Python.valueToCode(block, 'CAPTURE', Blockly.Python.ORDER_ATOMIC);
    var statements_video_cap = Blockly.Python.statementToCode(block, 'video_cap');
    var code = "while ("+value_capture+".isOpened()):\r\n"+
               "  ret,"+variable_img+" = "+value_capture+".read()\r\n"+
               statements_video_cap+
               "  if cv2.waitKey(1) & 0xFF == ord('q'):\r\n"+
               "    break\r\n"+
               value_capture+".release()\r\n"+
               "cv2.destroyAllWindows()\r\n";
    return code;
};

Blockly.Python['video_set'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var dropdown_attribute = block.getFieldValue('attribute');
    var number_video_value = block.getFieldValue('video_value');
    var value_capture = Blockly.Python.valueToCode(block, 'CAPTURE', Blockly.Python.ORDER_ATOMIC);
    var code = value_capture+".set("+dropdown_attribute+","+number_video_value+")\n";
    return code;
};

Blockly.Python['create_video_recoder'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_writer = Blockly.Python.valueToCode(block, 'WRITER', Blockly.Python.ORDER_ATOMIC);
    var text_file = block.getFieldValue('FILE');
    var number_width = block.getFieldValue('WIDTH');
    var number_height = block.getFieldValue('HEIGHT');
    var code = "fourcc = cv2.VideoWriter_fourcc(*'DIVX')\r\n"+
               value_writer+" = cv2.VideoWriter('"+text_file+ "', fourcc, 25.0, ("+number_width+", "+number_height+"))\r\n";
    return code;
};

Blockly.Python['record_video_image'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var value_writer = Blockly.Python.valueToCode(block, 'WRITER', Blockly.Python.ORDER_ATOMIC);
    var code = value_writer+".write("+value_image+")\r\n";
    return code;
};
