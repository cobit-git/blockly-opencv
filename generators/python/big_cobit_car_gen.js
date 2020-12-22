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
 * @fileoverview Generating Python for big cobit car motor control.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.big_cobit_car_gen');
//goog.require('Blockly.Python');

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

Blockly.Python['setup_servo'] = function(block) {
    Blockly.Python.definitions_['servo_kit'] = 'from adafruit_servokit import ServoKit';
    var value_servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC);
    var code = value_servo+" = ServoKit(channels=16)\r\n";
    return code;
};

Blockly.Python['move_servo'] = function(block) {
    Blockly.Python.definitions_['servo_kit'] = 'from adafruit_servokit import ServoKit';
    var value_servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC);
    var number_servo_no = block.getFieldValue('SERVO_NO');
    var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
    var code = value_servo+".servo["+(number_servo_no-1)+"].angle = "+value_angle+"\r\n";
    return code;
  };

Blockly.Python['setup_motor'] = function(block) {
    Blockly.Python.definitions_['dc_motor_l9110'] = 'from cobit_car_motor_l9110 import CobitCarMotorL9110';
    var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
    var code = value_motor+" = CobitCarMotorL9110()\r\n";
    return code;
};



Blockly.Python['start_motor'] = function(block) {
    Blockly.Python.definitions_['dc_motor_l9110'] = 'from cobit_car_motor_l9110 import CobitCarMotorL9110';
    var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
    var dropdown_motor_sel = block.getFieldValue('MOTOR_SEL');
    var number_speed = block.getFieldValue('SPEED');
    if(dropdown_motor_sel == 1){
        var code = value_motor+".motor_right_start("+number_speed+")\r\n";
    }else{
        var code = value_motor+".motor_left_start("+number_speed+")\r\n";
    }
    return code;
};

Blockly.Python['start_all_motor'] = function(block) {
    Blockly.Python.definitions_['dc_motor_l9110'] = 'from cobit_car_motor_l9110 import CobitCarMotorL9110';
    var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
    var number_speed = block.getFieldValue('SPEED');
    var code = value_motor+".motor_all_start("+number_speed+")\r\n";
    return code;
};

Blockly.Python['stop_all_motor'] = function(block) {
    Blockly.Python.definitions_['dc_motor_l9110'] = 'from cobit_car_motor_l9110 import CobitCarMotorL9110';
    var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
    var code = value_motor+".motor_all_stop()\r\n";
    return code;
};

Blockly.Python['stop_motor'] = function(block) {
    Blockly.Python.definitions_['dc_motor_l9110'] = 'from cobit_car_motor_l9110 import CobitCarMotorL9110';
    var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
    var dropdown_motor_sel = block.getFieldValue('MOTOR_SEL');
    if(dropdown_motor_sel == 1){
        var code = value_motor+".motor_right_stop()\r\n";
    }else{
        var code = value_motor+".motor_left_stop()\r\n";
    }
    return code;
};

Blockly.Python['wait_seconds'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var number_seconds = block.getFieldValue('SECONDS');
    var code = "time.sleep("+number_seconds+")\r\n";
    return code;
};
