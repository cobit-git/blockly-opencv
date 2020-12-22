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
 * @fileoverview openCV video blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_video');  // Deprecated
goog.provide('Blockly.Constants.opencv_video');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // block for cv2.videocapture() for camera 
  {
    "type": "create_video_capture_camera",
    //"message0": "Create videocapture %1 for camera %2",
    "message0": "%{BKY_CV_CREATE_CAPTURE_CAM}",
    "args0": [
      {
        "type": "input_value",
        "name": "CAPTURE"
      },
      {
        "type": "field_number",
        "name": "CAMERA",
        "value": 0,
        "min": 0,
        "max": 10,
        "precision": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_VIDEO_HUE}",
    "tooltip": "%{BKY_CV_CREATE_CAPTURE_CAM_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CREATE_CAPTURE_CAM_HELPURL}"
  },
  // blocks for cv2.videocapture() for file 
  {
    "type": "create_video_capture_file",
    //"message0": "Create video capture %1 for file %2",
    "message0": "%{BKY_CV_CREATE_CAPTURE_FILE}",
    "args0": [
      {
        "type": "input_value",
        "name": "CAPTURE"
      },
      {
        "type": "field_input",
        "name": "VIDEO",
        "text": "video.avi"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_VIDEO_HUE}",
    "tooltip": "%{BKY_CV_CREATE_CAPTURE_FILE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CREATE_CAPTURE_FILE_HELPURL}"
  },
      // block for openCV read image from capture 
      {
        "type": "read_video_from_capture",
        //"message0": "Read video image: %1 %2 video capture %3 %4 %5",
        "message0": "%{BKY_CV_VIDEO_CAPTURE_CAM}",
        "args0": [
          {
            "type": "field_variable",
            "name": "IMG",
            "variable": "img"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "CAPTURE"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "video_cap"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_CV_VIDEO_HUE}",
        "tooltip": "%{BKY_CV_VIDEO_CAPTURE_CAM_TOOLTIP}",
        "helpUrl": "%{BKY_CV_VIDEO_CAPTURE_CAM_HELPURL}"
      },
     
      // Block for opneCV cap.set() width height
      {
        "type": "video_set",
        //"message0": "set %1 as %2 %3 from video capture: %4",
        "message0": "%{BKY_CV_SET_WID_HEI}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "attribute",
            "options": [
              [
                "video width",
                "cv2.CAP_PROP_FRAME_WIDTH"
              ],
              [
                "video height",
                "cv2.CAP_PROP_FRAME_HEIGHT"
              ]
            ]
          },
          {
            "type": "field_number",
            "name": "video_value",
            "value": 0,
            "min": 0,
            "max": 10000,
            "precision": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "CAPTURE"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_CV_VIDEO_HUE}",
        "tooltip": "%{BKY_CV_SET_WID_HEI_TOOLTIP}",
        "helpUrl": "%{BKY_CV_SET_WID_HEI_HELPURL}"
    },
    // block for openCV cv2.VideoWriter()
    {
      "type": "create_video_recoder",
      //"message0": "Create video recoder: %1 file name: %2 resolution W: %3 H: %4",
      "message0": "%{BKY_CV_VIDEO_WRITER}",
      "args0": [
        {
          "type": "input_value",
          "name": "WRITER"
        },
        {
          "type": "field_input",
          "name": "FILE",
          "text": "video.avi"
        },
        {
          "type": "field_number",
          "name": "WIDTH",
          "value": 320,
          "min": 0,
          "max": 8000,
          "precision": 1
        },
        {
          "type": "field_number",
          "name": "HEIGHT",
          "value": 240,
          "min": 0,
          "max": 8000,
          "precision": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_CV_VIDEO_HUE}",
      "tooltip": "%{BKY_CV_VIDEO_WRITER_TOOLTIP}",
      "helpUrl": "%{BKY_CV_VIDEO_WRITER_HELPURL}"
    },
    // block for videowriter.write()
    {
      "type": "record_video_image",
      //"message0": "Record video image %1 uisng video writer: %2",
      "message0": "%{BKY_CV_VIDEO_WRITER_WR}",
      "args0": [
        {
          "type": "input_value",
          "name": "IMAGE"
        },
        {
          "type": "input_value",
          "name": "WRITER"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_CV_VIDEO_HUE}",
      "tooltip": "%{BKY_CV_VIDEO_WRITER_WR_TOOLTIP}",
      "helpUrl": "%{BKY_CV_VIDEO_WRITER_WR_HELPURL}"
    }

  
  
]);  // END JSON EXTRACT (Do not delete this comment.)