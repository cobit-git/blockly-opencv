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
 * @fileoverview Generating Python for robot arm control blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.robot_arm_mk1_gen');
//goog.require('Blockly.Python');

Blockly.Python['init_serial'] = function(block) {
    var text_serial = block.getFieldValue('serial');
    var code = "rc.initialize_serial(\""+text_serial+"\")\n";
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['robot_home'] = function(block) {
    var value_serial = Blockly.Python.valueToCode(block, 'serial', Blockly.Python.ORDER_ATOMIC);
    var code = "rc.reset_robot_position("+value_serial+")\n";
    return code;
};

Blockly.Python['move_robot_xyz'] = function(block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    var number_gri = block.getFieldValue('gri');
    var value_serial = Blockly.Python.valueToCode(block, 'serial', Blockly.Python.ORDER_ATOMIC);
    var code = "rc.move_robot_xyz("+value_serial+","+number_x+","+number_y+","+number_z+","+number_gri+")\n";
    return code;
  };

  Blockly.Python['move_robot_6_link'] = function(block) {
    var number_base = block.getFieldValue('base');
    var number_shl = block.getFieldValue('shl');
    var number_elbo = block.getFieldValue('elbo');
    var number_wrud = block.getFieldValue('wri');
    var number_wrturn = block.getFieldValue('wro');
    var number_grip = block.getFieldValue('grip');
    var value_serial = Blockly.Python.valueToCode(block, 'serial', Blockly.Python.ORDER_ATOMIC);
    var code = "rc.move_robot_6_link("+value_serial+", "+number_base+", "+number_shl+", "+number_elbo+", "+number_wrud+", "+number_wrturn+", "+number_grip+")\n";
    return code;
  };

Blockly.Python['move_robot_1_link'] = function(block) {
    var dropdown_servo = block.getFieldValue('servo');
    var number_angle = block.getFieldValue('angle');
    var value_serial = Blockly.Python.valueToCode(block, 'serial', Blockly.Python.ORDER_ATOMIC);
    var code = "rc.move_robot_1_link("+value_serial+", "+dropdown_servo+","+number_angle+")\n";
    return code;
};

Blockly.Python['run_robot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};