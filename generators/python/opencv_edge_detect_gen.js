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
 * @fileoverview Generating Python for openCV edge detect blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_edge_detect_gen');
//goog.require('Blockly.Python');

Blockly.Python['canny_edge_detect'] = function(block) {
    Blockly.Python.definitions_['import_cv2'] = 'import cv2';
    var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
    var number_hys_min = block.getFieldValue('HYS_MIN');
    var number_hys_max = block.getFieldValue('HYS_MAX');
    var variable_img_canny = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_CANNY'), Blockly.Variables.NAME_TYPE);
    var code = variable_img_canny+" = cv2.Canny("+value_image+", "+number_hys_min+", "+number_hys_max+")\r\n";
    return code;
};