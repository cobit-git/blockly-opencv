'use strict';

goog.provide('Blockly.Blocks.iot_giga');  // Deprecated
goog.provide('Blockly.Constants.iot_giga');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // block for cv2.videocapture() for camera 
    {
        "type": "get_temp",
        "message0": "현재 온도 가져오기   온도센서 %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TEMP",
            "options": [
              [
                "1",
                "TEMP1"
              ],
              [
                "2",
                "TEMP2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_humid",
        "message0": "현재 습도 가져오기   습도센서 %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TEMP",
            "options": [
              [
                "1",
                "TEMP1"
              ],
              [
                "2",
                "TEMP2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_pir",
        "message0": "움직임이 감지되면 %1 실행 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "PIR"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_touch",
        "message0": "터치가 감지되면 %1 실행 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "PIR"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_mise",
        "message0": "미세먼지 값 가져오기 ",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "set_mise",
        "message0": "미세먼지 값이  %1 이상이 되면 알람 주기",
        "args0": [
          {
            "type": "field_number",
            "name": "NAME",
            "value": 0
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "mise_alarm",
        "message0": "미세먼지 센서 알람이 오면  %1 실행 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "ALARM"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "run_motor",
        "message0": "모터를  %1 퍼센트로 %2 방향으로 돌리기",
        "args0": [
          {
            "type": "field_number",
            "name": "MOTOR",
            "value": 0,
            "min": 0,
            "max": 100,
            "precision": 1
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "오른쪽",
                "RIGHT"
              ],
              [
                "왼쪽",
                "LEFT"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "run_servo",
        "message0": "서보모터를  %1 각도로 돌리기",
        "args0": [
          {
            "type": "field_number",
            "name": "MOTOR",
            "value": 0,
            "min": 0,
            "max": 180,
            "precision": 1
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_limit",
        "message0": "현재 리미트 스위치 값을 읽어오기",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "get_ultra",
        "message0": "초음파 센서로 거리 값을 읽어오기",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
     
]);  // END JSON EXTRACT (Do not delete this comment.)



