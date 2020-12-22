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
 * @fileoverview openCV contour feature blocks for Blockly.
 *
 * co:bit write this file under license from Google. 
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author conner.jeong@gmail.com
 */

'use strict';

goog.provide('Blockly.Blocks.opencv_contour_feature');  // Deprecated
goog.provide('Blockly.Constants.opencv_contour_feature');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // get contour center e.g.:  >>>cx = int(M['m10']/M['m00'])
  {
    "type": "get_contour_center",
    //"message0": "Get center of contour line %1 center X: %2 Y: %3",
    "message0": "%{BKY_CV_CON_FEATURE_CENTER}",
    "args0": [
      {
        "type": "input_value",
        "name": "contour"
      },
      {
        "type": "field_variable",
        "name": "X",
        "variable": "point_x"
      },
      {
        "type": "field_variable",
        "name": "Y",
        "variable": "point_y"
      },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_CENTER_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_CENTER_HELPURL}"
  },
  // cv2.contourArea()
  {
    "type": "get_contour_area",
    //"message0": "Get area of contour %1 save to %2",
    "message0": "%{BKY_CV_CON_FEATURE_AREA}",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "AREA",
        "variable": "num_area"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_AREA_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_AREA_HELPURL}"
  },
  // cv2.arcLength()
  {
    "type": "get_contour_perimeter",
    //"message0": "Get perimeter of contour %1 with %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_PERI}",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_dropdown",
        "name": "OPTION",
        "options": [
          [
            //"closed curve",
            "%{BKY_CV_CON_FEATURE_PERI_CLOSED}",
            "True"
          ],
          [
            //"non-closed curve",
            "%{BKY_CV_CON_FEATURE_PERI_OPEN}",
            "False"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "PERIMETER",
        "variable": "num_perimeter"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_PERI_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_PERI_HELPURL}"
  },
  // cv2.approxPolyDP()
  {
    "type": "get_contour_approx",
    //"message0": "Get approximate curve of contour %1 with %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_APPROX}",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_dropdown",
        "name": "OPTION",
        "options": [
          [
            //"closed curve",
            "%{BKY_CV_CON_FEATURE_APPROX_CLOSED}",
            "True"
          ],
          [
            //"non-closed curve",
            "%{BKY_CV_CON_FEATURE_APPROX_OPEN}",
            "False"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "APP_POLY",
        "variable": "curve_approx"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_APPROX_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_APPROX_HELPURL}"
  },
  // cv2.convexHull()
  {
    "type": "get_convexhull_curve",
    //"message0": "Get convex hull curve from contour %1 save to %2",
    "message0": "%{BKY_CV_CON_FEATURE_CONHULL}",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "CONVEX_CURVE",
        "variable": "curve_convex"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_CONHULL_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_CONHULL_HELPURL}"
  },
  //  cv2. boundingRect() cv2.rectagle()
  {
    "type": "draw_bounding_rect",
    //"message0": "Draw rectangle to image %1 bounding the contour  %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_BOUNDING}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_bound_rect"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_BOUNDING_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_BOUNDING_HELPURL}"
  },
  //  cv2.minAreaRect cv2.boxPoints, cv2.drawContour()
  {
    "type": "draw_min_area_rect",
    //"message0": "Draw minimum area rectangle to image %1 for contour  %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_MIN_RECT}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_min_rect"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_MIN_RECT_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_MIN_RECT_HELPURL}"
  },
  //  cv2.minEnclosingCircle() cv2.circle
  {
    "type": "draw_min_enclose_circle",
    //"message0": "Draw minimum enclosing circle to image %1 for contour  %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_MIN_CIRCLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_min_circle"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_MIN_CIRCLE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_MIN_CIRCLE_HELPURL}"
  },
  //  cv2.fillEllipse cv2.ellipse()
  {
    "type": "draw_fitting_ellipse",
    //"message0": "Draw ellipse curve to image %1 fitted for contour %2 save to %3",
    "message0": "%{BKY_CV_CON_FEATURE_FIT_ELLIPSE}",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "IMAGE",
        "variable": "img_fit_ellip"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_FIT_ELLIPSE_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_FIT_ELLIPSE_HELPURL}"
  },
  // Get extream points e,g,: leftmost = tuple(cnt[cnt[:,:,0].argmin()][0])
  {
    "type": "get_extream_points",
    //"message0": "Get 4 extream points for contour %1 left %2 right %3 top %4 bottom %5",
    "message0": "%{BKY_CV_CON_FEATURE_EX_POINT}",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTOUR"
      },
      {
        "type": "field_variable",
        "name": "LEFT",
        "variable": "left"
      },
      {
        "type": "field_variable",
        "name": "RIGHT",
        "variable": "right"
      },
      {
        "type": "field_variable",
        "name": "TOP",
        "variable": "top"
      },
      {
        "type": "field_variable",
        "name": "BOTTOM",
        "variable": "bottom"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CV_CONTOUR_FIT_HUE}",
    "tooltip": "%{BKY_CV_CON_FEATURE_EX_POINT_TOOLTIP}",
    "helpUrl": "%{BKY_CV_CON_FEATURE_EX_POINT_HELPURL}"
  }

]);  // END JSON EXTRACT (Do not delete this comment.)