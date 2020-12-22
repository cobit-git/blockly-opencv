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
 * @fileoverview Generating Python for openCV contour feature blocks.
 * @author conner.jeong@gmail.com
 */

//'use strict';

//goog.provide('Blockly.Python.opencv_contour_feature_gen');
//goog.require('Blockly.Python');

Blockly.Python['get_contour_center'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  var value_contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "M = cv2.moments(cnt)\n"+
              variable_x+" = int(M['m10']/M['m00'])\n"+ 
              variable_y+" = int(M['m01']/M['m00'])\n"
  return code;  
};

Blockly.Python['get_contour_area'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var variable_area = Blockly.Python.variableDB_.getName(block.getFieldValue('AREA'), Blockly.Variables.NAME_TYPE);
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              variable_area+" = cv2.contourArea(cnt)";
  return code;
};

Blockly.Python['get_contour_perimeter'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('OPTION');
  var variable_area = Blockly.Python.variableDB_.getName(block.getFieldValue('PERIMETER'), Blockly.Variables.NAME_TYPE);
  var code =  "con = "+value_contour+"[0]\r\n"+
              variable_area+" = cv2.arcLength(con, "+dropdown_option+")\r\n";
  return code;
};

Blockly.Python['get_contour_approx'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('OPTION');
  var variable_area = Blockly.Python.variableDB_.getName(block.getFieldValue('APP_POLY'), Blockly.Variables.NAME_TYPE); 
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "epsilon = 0.1*cv2.arcLength(cnt, True)\r\n"+
              variable_area+" = cv2.approxPolyDP(cnt, epsilon, "+dropdown_option+")\r\n";
  return code;
};

Blockly.Python['get_convexhull_curve'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var variable_area = Blockly.Python.variableDB_.getName(block.getFieldValue('CONVEX_CURVE'), Blockly.Variables.NAME_TYPE); 
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              variable_area+" = cv2.convexHull(cnt)\r\n";
  return code;
};

Blockly.Python['draw_bounding_rect'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var variable_area = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE); 
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "x,y,w,h = cv2.boundingRect(cnt)\r\n"+
              variable_area+" = cv2.rectangle("+value_image+",(x,y),(x+w,y+h),(0,255,0),2)\r\n";
  return code;
};

Blockly.Python['draw_min_area_rect'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE); 
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "rect = cv2.minAreaRect(cnt)\r\n"+
              "box = cv2.boxPoints(rect)\r\n"+
              "box = np.int0(box)\r\n"+
              variable_image+" = cv2.drawContours("+value_image+",[box],0,(0,0,255),2)\r\n";
  return code;
};


Blockly.Python['draw_min_enclose_circle'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE); 
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "(x,y),radius = cv2.minEnclosingCircle(cnt)\r\n"+
              "center = (int(x),int(y))\r\n"+
              "radius = int(radius)\r\n"+
              variable_image+" = cv2.circle("+value_image+",center,radius,(0,255,0),2)\r\n";
  return code;
};

Blockly.Python['draw_fitting_ellipse'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var variable_image = Blockly.Python.variableDB_.getName(block.getFieldValue('IMAGE'), Blockly.Variables.NAME_TYPE); 
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              "ellipse = cv2.fitEllipse(cnt)\r\n"+
              variable_image+" = cv2.ellipse("+value_image+",ellipse,(0,255,0),2)\r\n";
  return code;
};

Blockly.Python['get_extream_points'] = function(block) {
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  var value_contour = Blockly.Python.valueToCode(block, 'CONTOUR', Blockly.Python.ORDER_ATOMIC);
  var variable_left = Blockly.Python.variableDB_.getName(block.getFieldValue('LEFT'), Blockly.Variables.NAME_TYPE);
  var variable_right = Blockly.Python.variableDB_.getName(block.getFieldValue('RIGHT'), Blockly.Variables.NAME_TYPE);
  var variable_top = Blockly.Python.variableDB_.getName(block.getFieldValue('TOP'), Blockly.Variables.NAME_TYPE);
  var variable_bottom = Blockly.Python.variableDB_.getName(block.getFieldValue('BOTTOM'), Blockly.Variables.NAME_TYPE);
  var code =  "cnt = "+value_contour+"[0]\r\n"+
              variable_left+" = tuple(cnt[cnt[:,:,0].argmin()][0])\r\n"+
              variable_right+" = tuple(cnt[cnt[:,:,0].argmax()][0])\r\n"+
              variable_top+" = tuple(cnt[cnt[:,:,1].argmin()][0])\r\n"+
              variable_bottom+" = tuple(cnt[cnt[:,:,1].argmax()][0])\r\n";
  return code;
};
