/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview openCV basic operation blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_basic_operation');  // Deprecated
goog.provide('Blockly.Constants.opencv_basic_operation');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // get pixel RGB info (e.g. pixel = img[100, 200])
	{
		"type": "get_pixel_info",
		//"message0": "Get pixel info from image %1 X: %2 Y: %3 %4 blue %5 green %6 red %7",
		"message0": "%{BKY_CV_BASIC_GET_PINFO}",
		"args0": [
			{
				"type": "input_value",
				"name": "PIXEL"
			},
			{
				"type": "field_number",
				"name": "X",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "Y",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "field_variable",
				"name": "BLUE",
				"variable": "blue"
			},
			{
				"type": "field_variable",
				"name": "GREEN",
				"variable": "green"
			},
			{
				"type": "field_variable",
				"name": "RED",
				"variable": "red"
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_GET_PINFO_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_GET_PINFO_HELPURL}"
	},
	// change pixel value e.g.: img[100, 230] = [255, 255, 255]
	{
		"type": "change_pixel_value",
		//"message0": "Change pixel value from image %1 X: %2 Y: %3 %4 as %5",
		"message0": "%{BKY_CV_BASIC_CHG_PIXEL}",
		"args0": [
			{
				"type": "input_value",
				"name": "PIXEL"
			},
			{
				"type": "field_number",
				"name": "X",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "Y",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "input_value",
				"name": "RGB"
			},
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_CHG_PIXEL_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_CHG_PIXEL_HELPURL}"
	},

	// Get image size e.g.: img.size
	{
		"type": "get_image_size",
		//"message0": "Get size of image %1 size: %2",
		"message0": "%{BKY_CV_BASIC_GET_SIZE}",
		"args0": [
			{
				"type": "input_value",
				"name": "IMAGE"
			},
			{
				"type": "field_variable",
				"name": "IMG_SIZE",
				"variable": "img_size"
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_GET_SIZE_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_GET_SIZE_HELPURL}"
	},
	// Get ROI(region of interest) e.g.: roi_img = img[start_x:end_x, start_y:end_y]
	{
		"type": "get_roi_image",
		//"message0": "Get ROI(region of interest) from image: %1 with start %2 end %3 ROI image: %4",
		"message0": "%{BKY_CV_BASIC_GET_ROI}",
		"args0": [
			{
				"type": "input_value",
				"name": "IMAGE"
			},
			{
				"type": "input_value",
				"name": "START"
			},
			{
				"type": "input_value",
				"name": "END"
			},
			{
				"type": "field_variable",
				"name": "ARRAY_ROI",
				"variable": "array_ROI"
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_GET_ROI_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_GET_ROI_HELPURL}"
	},
	// Start point (tuple) of ROI
	{
		"type": "start_roi",
		//"message0": "X from %1 to %2",
		"message0": "%{BKY_CV_BASIC_START_ROI}",
		"args0": [
			{
				"type": "field_number",
				"name": "x",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "y",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			}
		],
		"output": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_START_ROI_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_START_ROI_HELPURL}"
	},
	
	// End point (tuple) of ROI
	{
		"type": "end_roi",
		//"message0": "Y from %1 to %2",
		"message0": "%{BKY_CV_BASIC_END_ROI}",
		"args0": [
			{
				"type": "field_number",
				"name": "x",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "y",
				"value": 0,
				"min": 0,
				"max": 8000,
				"precision": 1
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_END_ROI_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_END_ROI_HELPURL}"
	},

	// RGB value 
	{
		"type": "rgb_value",
		//"message0": "end: %1 , %2, %3",
		"message0": "%{BKY_CV_BASIC_RGB}",
		"args0": [
			{
				"type": "field_number",
				"name": "R",
				"value": 0,
				"min": 0,
				"max": 255,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "G",
				"value": 0,
				"min": 0,
				"max": 255,
				"precision": 1
			},
			{
				"type": "field_number",
				"name": "B",
				"value": 0,
				"min": 0,
				"max": 255,
				"precision": 1
			}
		],
		"inputsInline": true,
		"output": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_RGB_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_RGB_HELPURL}"
	},
	// Copy ROI 
	{
		"type": "copy_roi_image",
		//"message0": "Copy ROI %1 to image %2 start: %3 end: %4",
		"message0": "%{BKY_CV_BASIC_COPY_ROI}",
		"args0": [
			{
				"type": "input_value",
				"name": "ROI"
			},
			{
				"type": "input_value",
				"name": "IMAGE"
			},
			{
				"type": "input_value",
				"name": "START"
			},
			{
				"type": "input_value",
				"name": "END"
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "%{BKY_CV_FIGURE_HUE}",
		"tooltip": "%{BKY_CV_BASIC_COPY_ROI_TOOLTIP}",
		"helpUrl": "%{BKY_CV_BASIC_COPY_ROI_HELPURL}"
	}

]);
