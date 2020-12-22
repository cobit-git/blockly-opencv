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
 * @fileoverview Generating Python for big cobit car self driving.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.self_driving_gen');
//goog.require('Blockly.Python');

Blockly.Python['get_cv_detector'] = function(block) {
    Blockly.Python.definitions_['cobit_opencv_lane_detect'] = 'from cobit_opencv_lane_detect import CobitOpencvLaneDetect';
    var value_detector = Blockly.Python.valueToCode(block, 'DETECTOR', Blockly.Python.ORDER_ATOMIC);
    var code = value_detector+" = CobitOpencvLaneDetect()\r\n";
    return code;
};

Blockly.Python['get_lane'] = function(block) {
    Blockly.Python.definitions_['cobit_opencv_lane_detect'] = 'from cobit_opencv_lane_detect import CobitOpencvLaneDetect';
    var value_img_org = Blockly.Python.valueToCode(block, 'IMG_ORG', Blockly.Python.ORDER_ATOMIC);
    var value_detector = Blockly.Python.valueToCode(block, 'DETECTOR', Blockly.Python.ORDER_ATOMIC);
    var variable_lanes = Blockly.Python.variableDB_.getName(block.getFieldValue('LANES'), Blockly.Variables.NAME_TYPE);
    var variable_img_lane = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_LANE'), Blockly.Variables.NAME_TYPE);
    var code = variable_lanes+", "+variable_img_lane+" = "+value_detector+".get_lane("+value_img_org+")\r\n";
    return code;
};

Blockly.Python['get_angle'] = function(block) {
    Blockly.Python.definitions_['cobit_opencv_lane_detect'] = 'from cobit_opencv_lane_detect import CobitOpencvLaneDetect';
    var value_detector = Blockly.Python.valueToCode(block, 'DETECTOR', Blockly.Python.ORDER_ATOMIC);
    var value_img_lane = Blockly.Python.valueToCode(block, 'IMG_LANE', Blockly.Python.ORDER_ATOMIC);
    var value_lanes = Blockly.Python.valueToCode(block, 'LANES', Blockly.Python.ORDER_ATOMIC);
    var variable_angle = Blockly.Python.variableDB_.getName(block.getFieldValue('ANGLE'), Blockly.Variables.NAME_TYPE);
    var variable_img_angle = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_ANGLE'), Blockly.Variables.NAME_TYPE);
    var code = variable_angle+", "+variable_img_angle+" = "+value_detector+".get_steering_angle("+value_img_lane+", "+value_lanes+")\r\n";
    return code;
};

Blockly.Python['save_angle_image'] = function(block) {
    Blockly.Python.definitions_['save_angle_lane_index'] = '\r\nindex = 0';
    var value_img_org = Blockly.Python.valueToCode(block, 'IMG_ORG', Blockly.Python.ORDER_ATOMIC);
    var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
    var text_model = block.getFieldValue('STORE');
    var code = "cv2.imwrite(\"%s_%03d_%03d.png\" % (\""+text_model+"\lane_image\", index, "+value_angle+"), "+value_img_org+")\r\n"+"index += 1\r\n";
    return code;
};

Blockly.Python['follow_lane'] = function(block) {
    var value_detector = Blockly.Python.valueToCode(block, 'DETECTOR', Blockly.Python.ORDER_ATOMIC);
    var value_img_org = Blockly.Python.valueToCode(block, 'IMG_ORG', Blockly.Python.ORDER_ATOMIC);
    var variable_angle = Blockly.Python.variableDB_.getName(block.getFieldValue('ANGLE'), Blockly.Variables.NAME_TYPE);
    var variable_img_angle = Blockly.Python.variableDB_.getName(block.getFieldValue('IMG_ANGLE'), Blockly.Variables.NAME_TYPE);
    var code = variable_angle+", "+variable_img_angle+" = "+value_detector+".get_steering_angle("+value_img_org+")\r\n";
    return code;
};

Blockly.Python['get_ml_detector'] = function(block) {
    Blockly.Python.definitions_['cobit_deep_lane_detect'] = 'from cobit_deep_lane_detect import CobitDeepLaneDetect';
    var text_model = block.getFieldValue('MODEL');
    var value_detector = Blockly.Python.valueToCode(block, 'DETECTOR', Blockly.Python.ORDER_ATOMIC);
    var code = value_detector+" = CobitDeepLaneDetect(\""+text_model+"\")\r\n";
    return code;
};