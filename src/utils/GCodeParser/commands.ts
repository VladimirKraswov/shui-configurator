import {ICommand} from './types'

export const commands: ICommand[] = [
  {
    id: 'M414',
    name: 'M414',
    description: 'Выбор языка интерфейса',
    details: {
      text: 'Переопределенная стандартная команда выбора языка интерфейса',
    },
    params: [
      {
        name: 'S',
        description: 'Выбор языка интерфейса',
        hint: 'Выберете язык',
        label: 'Язык интерфейса',
        value: 0,
        selectableValues: [
          {
            label: 'English',
            value: 0,
          },
          {
            label: 'Русский',
            value: 1,
          },
          {
            label: 'Український',
            value: 2,
          },
          {
            label: 'Nederlands',
            value: 3,
          },
        ],
        isActive: true,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: '2',
    name: 'M81',
    description: 'Отключить питание',
    details: {
      description:
        'Turn off the high-voltage power supply. If the board is not powered from another source, this may also shut down the electronics. ',
      notes:
        'A PS_ON_PIN is also required. Check your board’s pins file for the default. For Marlin 1.1.9 and earlier this feature is enabled by POWER_SUPPLY. ',
      url: 'https://marlinfw.org/docs/gcode/M081.html',
    },
    params: [],
  },
  {
    id: '3',
    name: 'M851',
    description: 'Смещение датчика XYZ',
    details: {
      description:
        'Set the XYZ distance from the nozzle to the probe trigger-point. These offsets are required for the firmware to know how to probe the bed and where probed points are in relation to the nozzle, and vice-versa. The easiest way to get the Z offset value (assuming your homed Z = 0.0) is to:  Home the Z axis. Raise Z and deploy the probe. Move Z down slowly until the probe triggers. Take the current Z position (as reported by M119) and negate it. (5.2 => -5.2) Set with M851 Z-5.2 and save it with M500. Configure with #define Z_PROBE_OFFSET_FROM_EXTRUDER -5.2.  For the X and Y offsets you have to measure the distance with a ruler or caliper. For LCDs that support MarlinUI you can enable PROBE_OFFSET_WIZARD and follow a guided process to set the probe Z offset. ',
      notes:
        'The default (factory) values are set by  (version 1.x)  X_PROBE_OFFSET_FROM_EXTRUDER Y_PROBE_OFFSET_FROM_EXTRUDER Z_PROBE_OFFSET_FROM_EXTRUDER  Where the X and Y offsets must be integers.  (version 2.x)  NOZZLE_TO_PROBE_OFFSET    Positions:  X offset: -left +right [of the nozzle] Y offset: -front +behind [the nozzle] Z offset: -below +above [the nozzle]       +-- BACK ---+\n     |           |\n   L |    (+) P  | R <-- probe (20,20)\n   E |           | I\n   F | (-) N (+) | G <-- nozzle (10,10)\n   T |           | H\n     |    (-)    | T\n     |           |\n     O-- FRONT --+\n   (0,0)\n ',
      url: 'https://marlinfw.org/docs/gcode/M851.html',
    },
    params: [
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'Z probe X offset',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Z probe Y offset',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Z probe Z offset',
        value: 0,
      },
    ],
  },
  {
    id: 'G21',
    name: 'G21',
    description: 'Millimeter Units',
    details: {
      description:
        'Set units to millimeters. In this mode, all positions, offsets, rates, accelerations, etc., specified in G-code parameters are interpreted as millimeters. ',
      url: 'https://marlinfw.org/docs/gcode/G021.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M2000.0',
    name: 'M2000.0',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2000.1',
    name: 'M2000.1',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M92',
    name: 'M92',
    description: 'Set Axis Steps-per-unit',
    details: {
      description:
        'Use M92 to set the steps-per-unit for one or more axes. This setting affects how many steps will be done for each unit of movement. Units will usually be set in steps-per-millimeter unless:  The firmware has INCH_MODE_SUPPORT enabled and has been set to Inches Mode by G20 or by having inches as the default unit. The machine is a SCARA in which case the A and B axes are configured in steps-per-degree, not steps-per-distance.  ',
      notes:
        ' Get the current steps-per-unit settings using M92 with no parameters or M503 on older versions of Marlin.  With EEPROM_SETTINGS enabled:  This setting for all axes is saved with M500 and loaded with M501.  M502 resets steps-per-unit for all axes to the values from DEFAULT_AXIS_STEPS_PER_UNIT.  ',
      url: 'https://marlinfw.org/docs/gcode/M092.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<steps>]',
        hint: 'E steps per unit',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder (Requires DISTINCT_E_FACTORS)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<steps>]',
        hint: 'X steps per unit',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<steps>]',
        hint: 'Y steps per unit',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<steps>]',
        hint: 'Z steps per unit',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M281',
    name: 'M281',
    description: 'Edit Servo Angles',
    details: {
      description: 'Set or get the position of a servo. Without L or U the current values will be reported. ',
      url: 'https://marlinfw.org/docs/gcode/M281.html',
    },
    params: [
      {
        name: 'L',
        label: '[L<degrees>]',
        hint: 'Deploy angle in degrees.',
        value: 0,
      },
      {
        name: '<',
        label: 'P<index>',
        hint: 'Servo index to update / report.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<degrees>]',
        hint: 'Stow angle in degrees.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M301',
    name: 'M301',
    description: 'Set Hotend PID',
    details: {
      description: 'Set the values that control the PID loop for a hotend. ',
      notes:
        'Requires PIDTEMP. View current PID values with M503. If EEPROM_SETTINGS is enabled, all hotend PID values are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M301.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<value>]',
        hint: 'C term (requires PID_EXTRUSION_SCALING)',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<value>]',
        hint: 'Derivative value',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<index>]',
        hint: 'Extruder index to set. Default 0.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<value>]',
        hint: 'F term (requires PID_FAN_SCALING)',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<value>]',
        hint: 'Integral value',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<value>]',
        hint: 'Extrusion scaling queue length (requires PID_EXTRUSION_SCALING)',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<value>]',
        hint: 'Proportional value',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M304',
    name: 'M304',
    description: 'Set Bed PID',
    details: {
      description: 'Set the values that control the PID loop for the heated bed. ',
      notes:
        'Requires PIDTEMPBED. View current bed PID values with M503 If EEPROM_SETTINGS is enabled, bed PID values are saved with M500, loaded with M501, and reset with M502 ',
      url: 'https://marlinfw.org/docs/gcode/M304.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<value>]',
        hint: 'Derivative value',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<value>]',
        hint: 'Integral value',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<value>]',
        hint: 'Proportional value',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M603',
    name: 'M603',
    description: 'Configure Filament Change',
    details: {
      description: 'The M603 command configures automatic filament change parameters. ',
      notes: 'Requires ADVANCED_PAUSE_FEATURE. ',
      url: 'https://marlinfw.org/docs/gcode/M603.html',
    },
    params: [
      {
        name: 'L',
        label: '[L<pos>]',
        hint: 'Load length, longer for bowden (negative)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<pos>]',
        hint: 'Amount of retraction for unload (negative)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M302',
    name: 'M302',
    description: 'Cold Extrude',
    details: {
      description:
        'Set the minimum extrusion temperature, potentially allowing E movement at temperatures below the melting point of the material. ',
      notes: 'Requires PREVENT_COLD_EXTRUSION. ',
      url: 'https://marlinfw.org/docs/gcode/M302.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<flag>]',
        hint: 'Flag to allow extrusion at any temperature',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Minimum temperature for safe extrusion',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M852',
    name: 'M852',
    description: 'Bed Skew Compensation',
    details: {
      description:
        'Bed Skew Compensation corrects for misalignment in the XY, XZ, and ZY axes through the use of correction factors. ',
      notes:
        'Correction factors have a range of -1 to 1. See Bed Skew Compensation section in the configuration file for more information on calculating the correction factors. ',
      url: 'https://marlinfw.org/docs/gcode/M852.html',
    },
    params: [
      {
        name: 'I',
        label: '[I]',
        hint: 'Skew correction factor for XY axis.  ',
        value: 0,
      },
      {
        name: 'J',
        label: '[J]',
        hint: 'Skew correction factor for XZ axis  ',
        value: 0,
      },
      {
        name: 'K',
        label: '[K]',
        hint: 'Skew correction factor for YZ axis  ',
        value: 0,
      },
      {
        name: 'S',
        label: '[S]',
        hint: 'Alias for I when only XY skew correction is enabled  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M425',
    name: 'M425',
    description: 'Backlash compensation',
    details: {
      description:
        'Backlash compensation will add extra steps to one or more segments whenever a motor reverses direction. By default, steps are added to the first segment after a direction change. This gives the best dimensional accuracy but may cause marks to appear in the print. Smoothing spreads the added steps over multiple consecutive segments to prevent blemishes in the print, at the expense of dimensional accuracy. Backlash compensation can be configured at either compile-time or run-time. Enable BACKLASH_GCODE to turn on M425 and a “Backlash” menu item. Backlash can be measured automatically on all axes with G425 or on Z only with G29 when MEASURE_BACKLASH_WHEN_PROBING is enabled. ',
      notes:
        'Requires BACKLASH_COMPENSATION, BACKLASH_GCODE and the following parameters:   BACKLASH_DISTANCE_MM specifies the default backlash on the X, Y and Z axis.  BACKLASH_CORRECTION specifies the default backlash correction (0.0 = none; 1.0 = 100%).  BACKLASH_SMOOTHING_MM enables backlash smoothing over a specified distance.  BACKLASH_GCODE enables M425 for run-time tuning of backlash.  MEASURE_BACKLASH_WHEN_PROBING turns on Z backlash measurement when probing with G29. Use BACKLASH_MEASUREMENT_LIMIT, BACKLASH_MEASUREMENT_RESOLUTION and BACKLASH_MEASUREMENT_FEEDRATE to configure G29 backlash measurement.  ',
      url: 'https://marlinfw.org/docs/gcode/M425.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<value>]',
        hint: 'Enable or disables backlash correction, or sets an intermediate fade-out (0.0 = none; 1.0 = 100%)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<linear>]',
        hint: 'Distance over which backlash correction is spread',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'Set the backlash distance on X (mm; 0 to disable)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Set the backlash distance on Y (mm; 0 to disable)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Set the backlash distance on Z (mm; 0 to disable)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'When MEASURE_BACKLASH_WHEN_PROBING is enabled, loads the measured backlash into the backlash distance parameter  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2013',
    name: 'M2013',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'V',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2013.1',
    name: 'M2013.1',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2013.2',
    name: 'M2013.2',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'U',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2013.3',
    name: 'M2013.3',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2008',
    name: 'M2008',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2001',
    name: 'M2001',
    description: 'Кинематика, инверсия, свап моторов, отключение',
    details: {},
    params: [
      {
        name: 'X',
        label: 'Инвертировать ось X',
        description: '',
        min: 0,
        max: 1,
        value: 0,
      },
      {
        name: 'Y',
        label: 'Инвертировать ось Y',
        description: '',
        min: 0,
        max: 1,
        value: 0,
      },
      {
        name: 'Z',
        label: 'Инвертировать ось Z',
        description: '',
        min: 0,
        max: 1,
        value: 0,
      },
      {
        name: 'I',
        label: 'Inactive timeout',
        description:
          'inactive timeout - время в секундах, по истечении которого моторы переходят в отключенное состояние, если не использовались, 0 - не отключать моторы',
        hint: 'inactive timeout - время в секундах, по истечении которого моторы переходят в отключенное состояние, если не использовались, 0 - не отключать моторы',
        min: 0,
        value: 0,
      },
      {
        name: 'W',
        label: 'Swap моторов AB',
        description: 'swap моторов AB - кинематика 0 - CoreXY, MarkforgedXY, 1 - CoreYX, MarkforgedYX',
        hint: 'swap моторов AB - кинематика 0 - CoreXY, MarkforgedXY, 1 - CoreYX, MarkforgedYX',
        min: 0,
        max: 1,
        value: 0,
      },
      {
        name: 'T',
        label: 'Какой экструдер инвертировать',
        description:
          'Если включена инверсия экструдера то этот параметр определяет 0 Инвертировать первый экструдер, 1 второй',
        min: 0,
        max: 1,
        hint: 'Если включена инверсия экструдера то этот параметр определяет 0 Инвертировать первый экструдер, 1 второй',
        value: 0,
      },
      {
        name: 'E',
        label: 'Инвертировать Extruder',
        description: '',
        min: 0,
        max: 1,
        value: 0,
      },
      {
        name: 'K',
        label: 'Вид кинематики',
        description: '',
        value: 0,
        selectableValues: [
          {
            label: 'XYZ',
            value: 0,
          },
          {
            label: 'CoreXY',
            value: 1,
          },
          {
            label: 'Markforged',
            value: 2,
          },
          {
            label: 'Markforged M',
            value: 3,
          },
          {
            label: 'CoreXZ',
            value: 4,
          },
        ],
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2002',
    name: 'M2002',
    details: {},
    params: [
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2002.1',
    name: 'M2002.1',
    details: {},
    params: [
      {
        name: 'X',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'Z',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2002.2',
    name: 'M2002.2',
    details: {},
    params: [
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2003',
    name: 'M2003',
    details: {},
    params: [
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'Q',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M420',
    name: 'M420',
    description: 'Bed Leveling State',
    details: {
      description:
        'Get and/or set bed leveling state. For mesh-based leveling systems use Z parameter to set the Z Fade Height. With AUTO_BED_LEVELING_UBL you can use L to load a mesh from EEPROM. ',
      notes:
        '  G28 disables bed leveling. Follow with M420 S to turn leveling on, or use RESTORE_LEVELING_AFTER_G28 to automatically keep leveling on after G28. The “current position” may change in response to M420 Sn.  ',
      url: 'https://marlinfw.org/docs/gcode/M420.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<bool>]',
        hint: 'Center the mesh on the mean of the lowest and highest points',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<int>]',
        hint: 'Load mesh from EEPROM index (Requires AUTO_BED_LEVELING_UBL and EEPROM_SETTINGS)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Set enabled or disabled. A valid mesh is required to enable bed leveling. If the mesh is invalid / incomplete leveling will not be enabled.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<0|1|4>]',
        hint: 'Format to print the mesh data   T0: Human readable   T1: CSV   T4: Compact',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<bool>]',
        hint: 'Verbose: Print the stored mesh / matrix data',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Set Z fade height (Requires ENABLE_LEVELING_FADE_HEIGHT)  With Fade enabled, bed leveling correction is gradually reduced as the nozzle gets closer to the Fade height. Above the Fade height no bed leveling compensation is applied at all, so movement is machine true. Set to 0 to disable fade, and leveling compensation will be fully applied to all layers of the print.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2004',
    name: 'M2004',
    details: {},
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2004.1',
    name: 'M2004.1',
    details: {},
    params: [
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'U',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009.1',
    name: 'M2009.1',
    details: {},
    params: [
      {
        name: 'C',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009.2',
    name: 'M2009.2',
    details: {},
    params: [
      {
        name: 'C',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009',
    name: 'M2009',
    details: {},
    params: [
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009.3',
    name: 'M2009.3',
    details: {},
    params: [
      {
        name: 'C',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009.4',
    name: 'M2009.4',
    details: {},
    params: [
      {
        name: 'K',
        description: '',
        value: 0,
      },
      {
        name: 'K',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2009.5',
    name: 'M2009.5',
    details: {},
    params: [
      {
        name: 'H',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2016',
    name: 'M2016',
    details: {},
    params: [
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'W',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'O',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'U',
        description: '',
        value: 0,
      },
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'W',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'O',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'U',
        description: '',
        value: 0,
      },
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'Y',
        description: '',
        value: 0,
      },
      {
        name: 'W',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'O',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'U',
        description: '',
        value: 0,
      },
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2016.1',
    name: 'M2016.1',
    details: {},
    params: [
      {
        name: 'O',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2030',
    name: 'M2030',
    details: {},
    params: [
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2020',
    name: 'M2020',
    details: {},
    params: [
      {
        name: 'W',
        description: '',
        value: 0,
      },
      {
        name: 'K',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2020.1',
    name: 'M2020.1',
    details: {},
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2023',
    name: 'M2023',
    details: {},
    params: [
      {
        name: 'Z',
        description: '',
        value: 0,
      },
      {
        name: 'K',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2014',
    name: 'M2014',
    description: 'Установка, сброс флагов',
    details: {
      text: "F - flag - номер флага\nS - set (0/1) - включено/выключено\n\n  Флаги:\n      1 - Ноль на калькуляторе\n      2 - Логгирование\n      3 - Короткие имена файлов\n      4 - Управление концевиками\n      6 - Сброс частных настроек после печати\n      7 - Наличие второго экструдера\n      8 - Robin nano 1.1\n      9 - Вентилятор вместо второго хотэнда (флаг 7 должен быть сброшен)\n      10 - Всегда запускать печать при получении файла по сети\n      11 - Поддержка esp32\n      12 - Сообщения в Telegram (общий флаг), включение/выключение telegramm\n      13 - Инспектор файлов, показать скрытые\n      14 - Инспектор файлов, показать только G-код\n      15 - Переворот дисплея на 180 градусов\n      16 - Два мотора по оси Z (флаг 7 должен быть сброшен)\n      17 - Циклоп (флаг 7 должен быть установлен, 16 сброшен)\n      18 - телеметрия\n      19 - E1<=>E2 назначить набор портов E1 для E2 и наоборот\n\n      20 - Стол передвигается по Z или Y\n      21 - Двунаправленная кнопка выбора пресетов\n      22 - beeper\n      23 - Отобразить значение сенсора температуры T2 в статусной строке\n      24 - Расширенный стартовый виджет\n      25 - Температуры на стартовом виджете\n      26 - Диалоговая кнопка пресетов\n      27 - Trinamic detector\n      28 - Игнорировать ошибку bltouch\n      29 - *AdS\n      30 - Датчик тока\n      31 - Низкая частота sd\n      32 - Soft PWM Fan\n      33 - Z триггер по номеру слоя\n      34 - S-curve\n      35 - Async Z2\n      36 - Swap Z1 Z2\n      37 - Use lock\n      38 - Lin advance\n      39 - Touch feedback\n      40 - Управление холодным филаментом\n      41 - ЧБ\n      42 - Первичный носитель\n      43 - G28->G28+G29 умолчание\n      44 - Блокировка незапаркованных осей\n      45 - M412S defalut\n      46 - gcode motion mode\n      47 - For small moves with >135° junction (octagon) find speed for approximate arc\n      48 - Skew enable/disable\n      49 - Инверсия Z2 от Z1\n\n      50 - автовыключение\n      51 - ожидание охлаждения\n      52 - использование вентилятора\n      53 - активный уровень удержания\n\n      60 - Classic Jark on/off\n      61 - Junction deviation on/off\n\n      62 - Уровень сигнала включения подсветки 1\n      63 - Уровень сигнала включения подсветки 2\n      64 - Уровень сигнала включения подсветки 3\n\n      65 - backlash on/off\n      66 - Размер сетки по модели\n      67 - Оптимизация замера сетки\n\n      68 - Input shaping ON/OFF'\n      ",
    },
    params: [
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2017',
    name: 'M2017',
    details: {},
    params: [
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'K',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'B',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2034',
    name: 'M2034',
    details: {},
    params: [
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'E',
        description: '',
        value: 0,
      },
      {
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'W',
        description: '',
        value: 0,
      },
      {
        name: 'L',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2025',
    name: 'M2025',
    details: {},
    params: [
      {
        name: 'F',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
        value: false,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2019.1',
    name: 'M2019.1',
    details: {},
    params: [
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'M',
        description: '',
        value: 0,
      },
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'C',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2019.2',
    name: 'M2019.2',
    details: {},
    params: [
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'N',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
      {
        name: 'H',
        description: '',
        value: 0,
      },
      {
        name: 'D',
        description: '',
        value: 0,
      },
      {
        name: 'P',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M2019',
    name: 'M2019',
    details: {},
    params: [
      {
        name: 'T',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M500S',
    name: 'M500S',
    details: {},
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M2005',
    name: 'M2005',
    details: {},
    params: [
      {
        name: 'E',
        description: '',
        value: false,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M0',
    name: 'M0',
    details: {},
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'R',
        description: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G0-G1',
    name: 'G0-G1',
    description: 'Linear Move',
    details: {
      description:
        'The G0 and G1 commands add a linear move to the queue to be performed after all previous moves are completed. These commands yield control back to the command parser as soon as the move is queued, but they may delay the command parser while awaiting a slot in the queue. A linear move traces a straight line from one point to another, ensuring that the specified axes will arrive simultaneously at the given coordinates (by linear interpolation). The speed may change over time following an acceleration curve, according to the acceleration and jerk settings of the given axes. A command like G1 F1000 sets the feedrate for all subsequent moves. By convention, most G-code generators use G0 for non-extrusion movements (those without the E axis) and G1 for moves that include extrusion. This is meant to allow a kinematic system to, optionally, do a more rapid uninterpolated movement requiring much less calculation. For Cartesians and Deltas the G0 (rapid linear movement) command is (and must be) a direct alias for G1 (rapid movement). On SCARA machines G0 does a fast non-linear move. Marlin 2.0 introduces an option to maintain a separate default feedrate for G0. Note: Slicers tend to override firmware feedrates! ',
      notes:
        ' Coordinates are given in millimeters by default. Units may be set to inches by G20. In Relative Mode (G91) all coordinates are interpreted as relative, adding onto the previous position. In Extruder Relative Mode (M83) the E coordinate is interpreted as relative, adding onto the previous E position. A single linear move may generate several smaller moves to the planner due to kinematics and bed leveling compensation. Printing performance can be tuned by adjusting segments-per-second.  ',
      url: 'https://marlinfw.org/docs/gcode/G000-G001.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<pos>]',
        hint: 'An absolute or relative coordinate on the E (extruder) axis (in current units). The E axis describes the position of the filament in terms of input to the extruder feeder.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<power>]',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'An absolute or relative coordinate on the X axis (in current units).',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'An absolute or relative coordinate on the Y axis (in current units).',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'An absolute or relative coordinate on the Z axis (in current units).',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G2-G3',
    name: 'G2-G3',
    description: 'Arc or Circle Move',
    details: {
      description:
        'G2 adds a clockwise arc move to the planner; G3 adds a counter-clockwise arc. An arc move starts at the current position and ends at the given XYZ, pivoting around a center-point offset given by I and J or R. CNC_WORKSPACE_PLANES allows G2/G3 to operate in the selected XY, ZX, or YZ workspace plane. This command has two forms: I J Form   I specifies an X offset. J specifies a Y offset. At least one of the I J parameters is required.  X and Y can be omitted to do a complete circle. The given X Y is not error-checked. The arc ends based on the angle of the destination. Mixing I or J with R will throw an error.  R Form   R specifies the radius. X or Y is required. Omitting both X and Y will throw an error.  X or Y must differ from the current XY position. Mixing R with I or J will throw an error.  Arc moves actually generate several short straight-line moves, the length of which are determined by the configuration option MM_PER_ARC_SEGMENT (default 1mm). Any change in the Z position is linearly interpolated over the whole arc. ‘ARC_P_CIRCLES’ enables the use of the ‘P’ parameter to specify complete circles ',
      url: 'https://marlinfw.org/docs/gcode/G002-G003.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<pos>]',
        hint: 'The amount to extrude between the start point and end point',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'The maximum rate of the move between the start and end point',
        value: 0,
      },
      {
        name: '<',
        label: 'I<offset>',
        hint: 'An offset from the current X position to use as the arc center',
        value: 0,
      },
      {
        name: '<',
        label: 'J<offset>',
        hint: 'An offset from the current Y position to use as the arc center',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<count>]',
        hint: 'Specify complete circles. (Requires ARC_P_CIRCLES)',
        value: 0,
      },
      {
        name: '<',
        label: 'R<radius>',
        hint: 'A radius from the current XY position to use as the arc center',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<power>]',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'A coordinate on the X axis',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'A coordinate on the Y axis',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'A coordinate on the Z axis',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G4',
    name: 'G4',
    description: 'Dwell',
    details: {
      description: 'Dwell pauses the command queue and waits for a period of time. ',
      notes:
        'If both S and P are included, S takes precedence. M0/M1 provides an interruptible “dwell” (Marlin 1.1.0 and up). G4 with no arguments is effectively the same as M400. ',
      url: 'https://marlinfw.org/docs/gcode/G004.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<time(ms)>]',
        hint: 'Amount of time to dwell',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<time(sec)>]',
        hint: 'Amount of time to dwell',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G5',
    name: 'G5',
    description: 'Bézier cubic spline',
    details: {
      description:
        'G5 creates a cubic B-spline in the XY plane with the X and Y axes only. P and Q parameters are required. I and J are required for the first G5 command in a series. For subsequent G5 commands, either both I and J must be specified, or neither. If I and J are unspecified, the starting direction of the cubic will automatically match the ending direction of the previous cubic (as if I and J are the negation of the previous P and Q). See This interactive demo to understand how Bézier control points work. ',
      notes:
        'It is an error if an axis other than X or Y is specified. The first control point is the current position of the head. XY is the destination (the last control point of the spline). The next control-points are the current position plus IJ and the current position plus PQ. I and J can be omitted, which results in these offsets being zero. This produces a 3-point spline (try the interactive demo). However, P and Q are required (otherwise you just get a linear movement). ',
      url: 'https://marlinfw.org/docs/gcode/G005.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<pos>]',
        hint: 'The length of filament to feed into the extruder between the start and end point',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'The maximum feedrate of the move between the start and end point (in current units per second). This value applies to all subsequent moves.',
        value: 0,
      },
      {
        name: '<',
        label: 'I<pos>',
        hint: 'Offset from the X start point to first control point',
        value: 0,
      },
      {
        name: '<',
        label: 'J<pos>',
        hint: 'Offset from the Y start point to first control point',
        value: 0,
      },
      {
        name: '<',
        label: 'P<pos>',
        hint: 'Offset from the X end point to second control point',
        value: 0,
      },
      {
        name: '<',
        label: 'Q<pos>',
        hint: 'Offset from the Y end point to the second control point',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<power>]',
        hint: '',
        value: 0,
      },
      {
        name: '<',
        label: 'X<pos>',
        hint: 'A destination coordinate on the X axis',
        value: 0,
      },
      {
        name: '<',
        label: 'Y<pos>',
        hint: 'A destination coordinate on the Y axis',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G6',
    name: 'G6',
    description: 'Direct Stepper Move',
    details: {
      description:
        'Direct Stepping allows a host device to issue direct stepper movements in binary format, pre-written by the host device to a page in the device RAM. A “page manager” mechanism is provided to load the binary data onto the device. The page manager provided here uses a parallel protocol over the USB serial connection to write pages to the device RAM, and is decoupled from the normal serial G-code pipeline. This allows the host device to preload pages as fast as possible without waiting on the G-code pipeline. Once a page is written by the device, it can be triggered using the G6 G-code which references the page index that should be used for that move. Depending on the page format, direction arguments may need to be provided in the G6 code.  Requires Step Daemon by @ColinRGodsey. Visit RepRap Wiki for more details.  ',
      notes:
        'Requires DIRECT_STEPPING. Position sync in step-daemon is not entirely finished and movements made with the control panel may be lost. At this moment, homing is required to sync step daemon and the device. Always home before issuing movement commands. Use with extra caution. ',
      url: 'https://marlinfw.org/docs/gcode/G006.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<direction>]',
        hint: '1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]',
        hint: 'Set page index',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<rate>]',
        hint: 'Step rate per second. Last value is cached for future invocations.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<rate>]',
        hint: 'Number of steps to take. Defaults to max steps.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<direction>]',
        hint: '1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<direction>]',
        hint: '1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<direction>]',
        hint: '1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G10',
    name: 'G10',
    description: 'Retract',
    details: {
      description:
        'Retract the filament according to settings of M207. Firmware retraction allows you to tune retraction at the machine level and can significantly reduce the size of G-code files. Multiple consecutive G10 or G10 S1 commands without a corresponding G11 or G11 S1 will be ignored. Performs two moves: a retract move at the retract feedrate/acceleration, and an optional Z lift at the maximum Z feedrate (travel acceleration). ',
      notes: 'Requires FWRETRACT. See related codes G11, M207, M208, and M209. ',
      url: 'https://marlinfw.org/docs/gcode/G010.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Use G10 S1 to do a swap retraction, before changing extruders. The subsequent G11 (after tool change) will do a swap recover. (Requires EXTRUDERS > 1)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G11',
    name: 'G11',
    description: '',
    details: {
      description:
        'Unretract (i.e., recover, prime) the filament according to settings of M208. Multiple consecutive G11 or G11 S1 commands without a corresponding G10 or G10 S1 will be ignored. “Performs two moves: An optional Z lower at the maximum Z feedrate (travel acceleration), and a recovery move at the recover feedrate (retract acceleration).” ',
      notes: 'Requires FWRETRACT. See related codes G10, M207, M208, and M209. ',
      url: 'https://marlinfw.org/docs/gcode/G011.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G12',
    name: 'G12',
    description: 'Clean the Nozzle',
    details: {
      description:
        'Start the nozzle cleaning process. Three types of cleaning patterns are supported: straight strokes, zigzags and circles. This feature requires a dedicated cleaning area on or outside the bed, but within reach of the nozzle. The pattern may be repeated as many times as desired. ',
      notes:
        'Default behavior is defined by NOZZLE_CLEAN_STROKES, NOZZLE_CLEAN_START_POINT, NOZZLE_CLEAN_END_POINT, NOZZLE_CLEAN_TRIANGLES, NOZZLE_CLEAN_CIRCLE_MIDDLE, NOZZLE_CLEAN_CIRCLE_RADIUS and NOZZLE_CLEAN_GOBACK. With NOZZLE_CLEAN_GOBACK enabled, the nozzle automatically returns to the XYZ position before G12. ',
      url: 'https://marlinfw.org/docs/gcode/G012.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<0|1|2>]',
        hint: 'Pattern style selection   P0: Linear move back and forth   P1: Move in a zigzag pattern   P2: Move in a circular pattern',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<radius>]',
        hint: 'Radius of nozzle cleaning circle',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<count>]',
        hint: 'Number of repetitions of the pattern',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<count>]',
        hint: 'Number of triangles in the zigzag pattern',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Include X motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Include Y motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Include Z motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G17-G19',
    name: 'G17-G19',
    description: 'CNC Workspace Planes',
    details: {
      description:
        'Select workspace plane XY, ZX, or YZ. Allows G2/G3 and G5 to operate in the selected plane when CNC_WORKSPACE_PLANES is enabled. ',
      notes: 'Requires CNC_WORKSPACE_PLANES. ',
      url: 'https://marlinfw.org/docs/gcode/G017-G019.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G20',
    name: 'G20',
    description: 'Inch Units',
    details: {
      description:
        'Set units to inches. In this mode, all positions, offsets, rates, accelerations, etc., specified in G-code parameters are interpreted as inches. ',
      url: 'https://marlinfw.org/docs/gcode/G020.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G26',
    name: 'G26',
    description: 'Mesh Validation Pattern',
    details: {
      description:
        'G26 Mesh Validation Pattern is designed to be used in conjunction with mesh-based leveling to test the accuracy of the probed mesh. The G26 command prints a single-layer pattern over the entire print bed, giving a clear indication of how accurately every mesh point is defined. G26 can be used to determine which areas of the mesh are less-than-perfect and how much to adjust each mesh point. ',
      notes:
        ' Before 1.1.6 it only works with AUTO_BED_LEVELING_UBL. Since 1.1.7 it also works with MESH_BED_LEVELING and AUTO_BED_LEVELING_BILINEAR.  ',
      url: 'https://marlinfw.org/docs/gcode/G026.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<temp>]',
        hint: 'Bed temperature (otherwise 60°C) to use for the test print.',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<bool>]',
        hint: 'Continue with the closest point (otherwise, don’t)',
        value: 0,
      },
      {
        name: 'D',
        label: '[D]',
        hint: 'Disable leveling compensation (otherwise, enable)',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<linear>]',
        hint: 'Filament diameter (otherwise 1.75mm)',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<linear>]',
        hint: 'Hot end temperature (otherwise 205°C) to use for the test print.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]',
        hint: '',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<bool>]',
        hint: 'Keep heaters on when done',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<linear>]',
        hint: 'Layer height to use for the test',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<linear>]',
        hint: 'Ooze amount (otherwise 0.3mm). Emitted at the start of the test.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<linear>]',
        hint: 'Prime Length',
        value: 0,
      },
      {
        name: 'Q',
        label: '[Q<float>]',
        hint: 'Retraction multiplier. G26 retract and recover are 1.0mm and 1.2mm respectively. Both retract and recover are multiplied by this value.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<int>]',
        hint: 'Number of G26 Repetitions (otherwise 999)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<float>]',
        hint: 'Nozzle size (otherwise 0.4mm)',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<linear>]',
        hint: 'Random deviation. (U with no value, 50).',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X position (otherwise, current X position)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Y position (otherwise, current Y position)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G27',
    name: 'G27',
    description: 'Park toolhead',
    details: {
      description: 'Park the nozzle at a predefined XYZ position. ',
      notes: 'Requires NOZZLE_PARK_FEATURE. The park position is defined by NOZZLE_PARK_POINT. ',
      url: 'https://marlinfw.org/docs/gcode/G027.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<0|1|2>]',
        hint: 'Z axis action   P0: If current Z-pos is lower than Z-park then the nozzle will be raised to reach Z-park height   P1: No matter the current Z-pos, the nozzle will be raised/lowered to reach Z-park height   P2: The nozzle height will be raised by Z-park amount but never going over the machine’s limit of Z_MAX_POS',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G28',
    name: 'G28',
    description: 'Auto Home',
    details: {
      description:
        'When you first start up your machine it has no idea where the toolhead is positioned, so Marlin needs to use a procedure called “homing” to establish a known position. To do this it moves each axis towards one end of its track until it triggers a switch, commonly called an “endstop.” Marlin knows where the endstops are, so once all the endstops have been triggered the position is known. The G28 command is used to home one or more axes. The default behavior with no parameters is to home all axes. In order to improve positional accuracy, the homing procedure can re-bump at a slower speed according to the [XYZ]_HOME_BUMP_MM and HOMING_BUMP_DIVISOR settings. The position is easy to lose when the steppers are turned off, so homing may be required or advised after the machine has been sitting idle for a period of time. See the Configuration files for all homing options. ',
      notes:
        'Homing is required before G29, M48, and some other procedures. If homing is needed the LCD will blink the X Y Z indicators. By default G28 disables bed leveling. Follow with M420 S to turn leveling on.  With ENABLE_LEVELING_AFTER_G28 leveling will always be enabled after G28. With RESTORE_LEVELING_AFTER_G28 leveling is restored to whatever state it was in before G28.  ',
      url: 'https://marlinfw.org/docs/gcode/G028.html',
    },
    params: [
      {
        name: 'L',
        label: '[L]',
        hint: 'Flag to restore bed leveling state after homing. (default true)  ',
        value: 0,
      },
      {
        name: 'O',
        label: '[O]',
        value: 0,
      },
      {
        name: 'R',
        label: '[R]',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Flag to home the X axis  ',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Flag to home the Y axis  ',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Flag to home the Z axis  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G29',
    name: 'G29',
    description: 'Bed Leveling (Unified)',
    details: {
      description:
        'The Unified Bed Leveling System (UBL) provides a comprehensive set of resources to produce the best bed leveling results possible. See the full Unified Bed Leveling documentation for more details. ',
      notes:
        ' Requires AUTO_BED_LEVELING_UBL.  G28 disables bed leveling. Follow with G29 A to turn leveling on, or use RESTORE_LEVELING_AFTER_G28 to automatically keep leveling on after G28.  M420 S1 can be used to turn leveling on, but requires a valid (complete) mesh. See M420 for more details.  Release Notes:   UBL builds on Edward Patel’s “Mesh Bed Leveling” system (also included).   UBL does not replace 3-Point or Planar leveling. These use a 3D matrix to tilt the whole model. UBL’s 3-point and Planar operations only apply to the mesh, not to the whole model.   It is highly recommended to enable EEPROM. Without EEPROM storage enabled, UBL is limited to 3-Point or Grid Leveling (G29 P0 T or G29 P0 G) and can’t save meshes for later use.   For the initial G28 and G29 P1 that automatically populates the mesh, UBL probes the mesh points in a growing spiral starting from the center of the bed. This pattern is better for Deltabots, allowing the center of the Mesh to be populated (and edited) more quickly so you can do test printing early in the process.   You don’t need to populate the entire mesh to use it. This saves time if you need to adjust settings and probe again.   UBL gathers the points closest the nozzle unless you specify an (X,Y) coordinate pair.   Use G29 P3 to automatically fill in unpopulated mesh points. You can also use an LCD controller with G29 P2 to move the nozzle to each unpopulated point and manually adjust the height. See the P2 and P3 parameters for usage info.   We know it takes a lot of effort to create good working Mesh data, so UBL stores its mesh data in a separate location where it won’t be affected by EEPROM errors or version changes.   ',
      url: 'https://marlinfw.org/docs/gcode/G029-ubl.html',
    },
    params: [
      {
        name: 'A',
        label: '[A]',
        hint: 'Activate Unified Bed Leveling (i.e., M420 S1)',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<mm/flag>]',
        hint: 'Business Card mode (P2 only)  Use the ‘Business Card’ mode of the Manual Probe subsystem with P2. A value may be given, or else it will be measured. In this mode of G29 P2, use a shim that the nozzle can grab onto as it is lowered. In principle, the nozzle-bed distance is the same when the same resistance is felt in the shim. You can omit the numerical value on first invocation of G29 P2 B to measure shim thickness. Subsequent use of B will apply the previously-measured thickness by default. Note: A non-compressible Spark Gap feeler gauge is recommended over a business card.',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<bool/float>]',
        hint: '  G29 P1 C Continue: Continues the generation of a partially-constructed Mesh without invalidating previous measurements.  G29 P2 C Constant: specifies a Constant and tells the Manual Probe subsystem to use the current location in its search for the closest unmeasured Mesh Point.  G29 P3 C Constant: specifies the Constant for the fill. Otherwise, uses a “reasonable” value.  G29 Z C Current: Use the Current location (instead of bed center or nearest edge).',
        value: 0,
      },
      {
        name: 'D',
        label: '[D]',
        hint: 'Disable Unified Bed Leveling (i.e., M420 S0).',
        value: 0,
      },
      {
        name: 'E',
        label: '[E]',
        hint: 'Stow probe after probing Each point (P1 only).',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<linear>]',
        hint: 'Fade height. (UBL only! For others use M420 Z) Fade the amount of Mesh Based Compensation over a specified height. At the specified height, no correction is applied and natural printer kinematics take over. If no number is specified for the command, 10mm is assumed to be reasonable.',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<linear>]',
        hint: 'Height:   G29 P2 H: Height for Manual Probe raise (P2 only). Specify the Height to raise the nozzle after each manual probe of the bed. If omitted, the nozzle will raise by Z_CLEARANCE_BETWEEN_PROBES.  G29 P4 H : Offset above the mesh height to place the nozzle. If omitted, Z_CLEARANCE_BETWEEN_PROBES will be used.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<int>]',
        hint: 'Invalidate a number of mesh points (default 1).  Invalidate Mesh Points near the given X Y (Default: nozzle position) If no I value is given, only the point nearest to the given position is invalidated. Use T to produce a map afterward. This command is useful to invalidate a portion of the Mesh so it can be adjusted using other UBL tools. When attempting to invalidate an isolated bad mesh point, the T option shows the nozzle position in the Mesh with (#). You can move the nozzle around and use this feature to select the center of the area (or cell) to invalidate.',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<int>]',
        hint: 'Grid (or 3-Point) leveling:  These options calculate a plane and adjust the existing mesh to the bed tilt. If a value is provided, probe a grid with the given number of points, squared. With no value, probe 3 points to find the plane of the bed.',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<index>]',
        hint: '',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<index>]',
        hint: 'Load a mesh. If no index is given, load the previously-activated mesh. The given mesh index will be used for subsequent Load and Store operations.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<0|1|2|3|4|5|6>]',
        hint: 'Phase: The Phase commands are used for the bulk of the work to setup a Mesh. In general, you’ll start by initializing with a G29 P0 or a G29 P1 then do further refinement with additional Phases.   P0: Zero Mesh Data and turn off the Mesh Compensation System. This reverts the machine to the same state it was in before UBL Compensation was enabled. Setting the entire Mesh to Zero is a special case to allow a subsequent G or T leveling operation for backward-compatibility.   P1: Automatic Probing invalidates the mesh and continues automatic probing using the probe.  In most cases the probe can’t reach all areas that the nozzle can due to the offsets specified by X_PROBE_OFFSET_FROM_EXTRUDER and Y_PROBE_OFFSET_FROM_EXTRUDER. Deltabots can only probe within the area where DELTA_PROBEABLE_RADIUS and DELTA_PRINTABLE_RADIUS overlap. Unreachable points can be filled in later with the P2 and P3 phases. Use C to leave the previous mesh intact and automatically probe needed points. This allows you to invalidate parts of the mesh but still use Automatic Probing. The X and Y parameters prioritize where to try and measure points. If omitted, the current probe position is used. Use T (Topology) in this phase to report the probing results.  P1 will suspend mesh generation if the controller button is held down. Note that you may need to press and hold the switch for several seconds if moves are underway.',
        value: 0,
      },
      {
        name: 'Q',
        label: '[Q<index>]',
        hint: 'Test Pattern. Load the specified Test Pattern to check for correct operation. This command is intended for developers and is not required for everyday bed leveling.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<int>]',
        hint: 'Repeat count. (Default GRID_MAX_POINTS_X * GRID_MAX_POINTS_Y).   P3 Example: G29 P3 R4 C0 will set the 4 points closest to the nozzle to 0.  P4 Example: G29 P4 R3 X80 Y80 will allow you to adjust the 3 points closest to X80 Y80. This parameter does not apply to Phase 1! P1 will always attempt to probe the full grid.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<slot>]',
        hint: 'Save the mesh to EEPROM in the given slot.  If no slot number is given, save to the last-activated slot. Use S-1 for G-code output that can be used to restore the mesh anytime. Note that this command also saves the current UBL state (enabled or disabled).',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<0|1>]',
        hint: 'Topology: Include a Topology Map in the output.  This parameter can be used alone (G29 T) or in combination with most of the other commands. This option works with all Phase commands (e.g., G29 P4 R 5 T X 50 Y100 C-0.1 O) A map type can also be specified:   T0: Human-readable (the default)  T1: Delimited. Suitable to paste into a spreadsheet to obtain a 3D graph of the mesh.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U]',
        hint: 'Unlevel: Probe the outer perimeter to assist bed tramming. (Use with G29 P1 O)  Only used with G29 P1 T U. This speeds up the probing of the edge of the bed. This option is useful when the entire bed doesn’t need to be probed because it will be physically adjusted (tramming).',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<0|1|2|3|4>]',
        hint: 'Verbosity Level (0-4)',
        value: 0,
      },
      {
        name: 'W',
        label: '[W]',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X position for all phases and commands (Default: current X)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Y position for all phases and commands (Default: current Y)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G30',
    name: 'G30',
    description: 'Single Z-Probe',
    details: {
      description: 'Do a single Z probe at a specified position. By default probe in the current position. ',
      notes: 'Use SERIAL_FLOAT_PRECISION to set the number of decimal places in the output. ',
      url: 'https://marlinfw.org/docs/gcode/G030.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<bool>]',
        hint: 'Probe with temperature compensation enabled (PTC_PROBE, PTC_BED, PTC_HOTEND)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<bool>]',
        hint: 'Engage the probe for each point',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'X probe position',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'Y probe position',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G31',
    name: 'G31',
    description: 'Dock Sled',
    details: {
      description: 'Dock the Z probe sled. ',
      notes: 'Requires Z_PROBE_SLED. ',
      url: 'https://marlinfw.org/docs/gcode/G031.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G32',
    name: 'G32',
    description: 'Undock Sled',
    details: {
      description: 'Undock the Z probe sled. ',
      url: 'https://marlinfw.org/docs/gcode/G032.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G33',
    name: 'G33',
    description: 'Delta Auto Calibration',
    details: {
      description:
        'With the G33 command you can:  Probe a circular grid of points, Calibrate Delta Height, Calibrate endstops, Calibrate Delta Radius, and Calibrate Tower Angles.  ',
      url: 'https://marlinfw.org/docs/gcode/G033.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<float>]',
        hint: 'If omitted iterations stop at best achievable precision. If set iterations will stop at the set precision.',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<bool>]',
        hint: 'Engage the probe for each point.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<1-30>]',
        hint: 'Run (“force”) this number of iterations and take the best result.',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<bool>]',
        hint: '',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<|0|1|2|3|4-10>]',
        hint: 'Number of probe points. If not specified, uses DELTA_CALIBRATION_DEFAULT_POINTS   P0: Normalize end-stops and tower angle corrections only (no probing).   P1: Probe center and set height only.   P2: Probe center and towers. Set height, endstops, and delta radius.   P3: Probe all positions - center, towers and opposite towers. Set all.   P4-10: Probe all positions with intermediate locations, averaging them.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<float>]',
        hint: '',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<bool>]',
        hint: 'Disable tower angle corrections calibration (P3-P7)',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<|0|1|2|3|>]',
        hint: 'Set the verbose level   V0: Dry run, no calibration   V1: Report settings   V2: Report settings and probe results   V3: Report settings, probe results, and calibration results',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G34',
    name: 'G34',
    description: 'Mechanical Gantry Calibration',
    details: {
      description:
        'This command is used to align the ends of the X gantry. See the video demonstration below.  The carriage moves to GANTRY_CALIBRATION_SAFE_POSITION, also called the “pounce” position. If possible, the Z stepper current is reduced to the value specified by S (or GANTRY_CALIBRATION_CURRENT) to prevent damage to steppers and other parts. The reduced current should be just high enough to move the Z axis when not blocked.  The Z axis is jogged past the Z limit, only as far as the specified Z distance (or GANTRY_CALIBRATION_EXTRA_HEIGHT) at the GANTRY_CALIBRATION_FEEDRATE. The Z axis is moved back to the working area (also at GANTRY_CALIBRATION_FEEDRATE). Stepper current is restored back to normal. Finally the machine is re-homed, according to GANTRY_CALIBRATION_COMMANDS_POST.  ',
      notes: 'Requires MECHANICAL_GANTRY_CALIBRATION. ',
      url: 'https://marlinfw.org/docs/gcode/G034-mgc.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<mA>]',
        hint: 'Current value to use for the raise move. (Default: GANTRY_CALIBRATION_CURRENT)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Extra distance past Z_MAX_POS to move the Z axis. (Default: GANTRY_CALIBRATION_EXTRA_HEIGHT)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G35',
    name: 'G35',
    description: 'Tramming Assistant',
    details: {
      description:
        'This command runs an interactive procedure to help you adjust the bed corners so that the bed is as true to the machine frame as possible. This is an important step in calibrating your printer and getting the best first layer results. ',
      notes: 'Requires ASSISTED_TRAMMING. ',
      url: 'https://marlinfw.org/docs/gcode/G035.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<30|31|40|41|50|51>]',
        hint: 'Screw thread type   S30: M3 clockwise   S31: M3 counter-clockwise   S40: M4 clockwise   S41: M4 counter-clockwise   S50: M5 clockwise   S51: M5 counter-clockwise',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G38.2-G38.5',
    name: 'G38.2-G38.5',
    description: 'Probe target',
    details: {
      description:
        'The Probe Target commands are used to probe towards (or away from) a workpiece to determine its precise position. You might, for example, use a grounded metal workpiece, with a metal probe spliced into the bed probe circuit.   G38.2 probes towards a target and stops on contact, signaling an error if it reaches the target position without triggering the probe.  G38.3 probes towards a target and stops on contact. No error is given if it fails to trigger the probe.  G38.4 probes away from a target and stops on contact break. An error is signaled if the target position is reached without triggering the probe.  G38.5 probes away from a target and stops on contact break. No error is given if it fails to trigger the probe.  These commands use the current homing feedrate, by default. ',
      notes:
        'These commands require G38_PROBE_TARGET and a defined probe. G38.4 and G38.5 are only available with the G38_PROBE_AWAY option. ',
      url: 'https://marlinfw.org/docs/gcode/G038.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'Feedrate for the move',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'Target X',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'Target Y',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'Target Z',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G42',
    name: 'G42',
    description: 'Move to mesh coordinate',
    details: {
      description:
        'The G42 command moves the nozzle to the location corresponding to a specific coordinate in the bed leveling mesh. It operates similarly to the G0 and G1 commands except that the provided coordinates are a mesh row and column instead of an absolute or relative position on the bed. The G42 command will determine the bed position that corresponds to the provided mesh row and column and move the nozzle to that position. ',
      url: 'https://marlinfw.org/docs/gcode/G042.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<pos>]',
        hint: 'The column of the mesh coordinate',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<pos>]',
        hint: 'The row of the mesh coordinate',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G53',
    name: 'G53',
    description: 'Move in Machine Coordinates',
    details: {
      description:
        'G53 applies native workspace to the current move. See G54-G59.3 for workspace coordinate system. In CNC G-code G53 is a modifier. It precedes a movement command (or other modifiers) on the same line. Marlin also accepts G53 on a line by itself as the command to return to the native workspace. ',
      notes: 'Requires CNC_COORDINATE_SYSTEMS. ',
      url: 'https://marlinfw.org/docs/gcode/G053.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G54-G59.3',
    name: 'G54-G59.3',
    description: 'Workspace Coordinate System',
    details: {
      description:
        'A workspace is an XYZ offset to the native machine space. All workspaces default to 0,0,0 at start, or with EEPROM support they may be restored from a previous session. See G53 for native space.  ”G92 is used to set the current workspace’s offset.” “G54 - use coordinate system 1” “G55 - use coordinate system 2” “G56 - use coordinate system 3” “G57 - use coordinate system 4” “G58 - use coordinate system 5” “G59 - use coordinate system 6” “G59.1 - use coordinate system 7” “G59.2 - use coordinate system 8” “G59.3 - use coordinate system 9”  ',
      notes: 'Requires CNC_COORDINATE_SYSTEMS. ',
      url: 'https://marlinfw.org/docs/gcode/G054-G059.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G60',
    name: 'G60',
    description: 'Save Current Position',
    details: {
      description: 'Save the current position of all axes in an SRAM buffer for later recall with G61. ',
      notes:
        ' The total number of slots is configured with the SAVED_POSITIONS option. All slots are initially set to 0, 0, 0.  ',
      url: 'https://marlinfw.org/docs/gcode/G060.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<slot>]',
        hint: 'Memory slot. If omitted, the first slot (0) is used.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G61',
    name: 'G61',
    description: 'Return to Saved Position',
    details: {
      description:
        'Use this command to move to a saved position. To limit the move to only some axes, include one or more axis letters. Otherwise all axes will be included. ',
      url: 'https://marlinfw.org/docs/gcode/G061.html',
    },
    params: [
      {
        name: 'E',
        label: '[E]',
        hint: 'Flag to restore the E axis',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<rate>]',
        hint: 'Move feedrate',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<slot>]',
        hint: 'Memory slot (0 if omitted)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Flag to restore the X axis',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Flag to restore the Y axis',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Flag to restore the Z axis',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G76',
    name: 'G76',
    description: 'Probe temperature calibration',
    details: {
      description:
        'Calibrate temperature compensation offsets for bed and/or probe temperatures. Temperature compensation values are added to probe measurements when running G29 mesh bed leveling. Currently, calibration only heats up the bed, not the hotend. The probe is heated up by bringing it close to the heated bed and cooled down by moving it away. See Probe Temperature Compensation for a more detailed explanation of the process. ',
      notes:
        'Requires PTC_PROBE and PTC_BED. This process can take a very long time. The timeout is currently set to 15min to allow the parts to fully heat up and cool down. Use M500 to save the result to EEPROM. ',
      url: 'https://marlinfw.org/docs/gcode/G076.html',
    },
    params: [
      {
        name: 'B',
        label: '[B]',
        hint: 'Calibrate bed only  ',
        value: 0,
      },
      {
        name: 'P',
        label: '[P]',
        hint: 'Calibrate probe only  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G80',
    name: 'G80',
    description: 'Cancel Current Motion Mode',
    details: {
      description:
        'Cancels the current motion mode (G0 G1 G2 G3 G5 G38.X). With GCODE_MOTION_MODES enabled, Marlin will remember the last used motion mode which can then be canceled with G80. ',
      notes: 'Requires GCODE_MOTION_MODES. ',
      url: 'https://marlinfw.org/docs/gcode/G080.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G90',
    name: 'G90',
    description: 'Absolute Positioning',
    details: {
      description:
        'In absolute mode all coordinates given in G-code are interpreted as positions in the logical coordinate space. This includes the extruder position unless overridden by M83. ',
      notes: 'Absolute positioning is the default. ',
      url: 'https://marlinfw.org/docs/gcode/G090.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G91',
    name: 'G91',
    description: 'Relative Positioning',
    details: {
      description:
        'Set relative position mode. In this mode all coordinates are interpreted as relative to the last position. This includes the extruder position unless overridden by M82. ',
      url: 'https://marlinfw.org/docs/gcode/G091.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G92',
    name: 'G92',
    description: 'Set Position',
    details: {
      description:
        'Set the current position to the values specified. In Marlin 1.1.0 and up, the software endstops are adjusted to preserve the physical movement limits. Thus you could use G92 to set the middle of the bed to 0,0 and then run .gcode that was sliced for a Deltabot. The CNC_COORDINATE_SYSTEMS option enables use of G92.1 to reset the selected workspace to native machine space. See G54-G59 and G53. ',
      notes:
        'In earlier versions of Marlin G92 doesn’t update the software endstops, so it was unsupported to set coordinates outside these boundaries. In Marlin 1.1.0 and up, the physical boundaries are maintained. This means you can no longer use G92 to move below the bed, for example. ',
      url: 'https://marlinfw.org/docs/gcode/G092.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<pos>]',
        hint: 'New extruder position',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'New X axis position',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'New Y axis position',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'New Z axis position',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'G425',
    name: 'G425',
    description: 'Backlash Calibration',
    details: {
      description:
        'This command performs an automatic calibration of backlash, positional errors, and nozzle offset by touching the nozzle to the sides of a bed-mounted, electrically-conductive object (e.g., a cube, washer or bolt). This command measures backlash but doesn’t enable backlash correction. Use M425 to enable backlash correction. ',
      notes:
        'Requires CALIBRATION_GCODE and the following parameters:   CALIBRATION_MEASUREMENT_RESOLUTION determines the increments taken in mm when performing measurements.  CALIBRATION_FEEDRATE_SLOW, CALIBRATION_FEEDRATE_FAST and CALIBRATION_FEEDRATE_TRAVEL determine the speed of motion during the calibration.  CALIBRATION_NOZZLE_TIP_HEIGHT and CALIBRATION_NOZZLE_OUTER_DIAMETER refer to the conical part of the nozzle tip.  CALIBRATION_REPORTING enables G425 V for reporting of measurements.  CALIBRATION_OBJECT_CENTER and CALIBRATION_OBJECT_DIMENSIONS define the true location and dimensions of a cube/bolt/washer mounted on the bed.  CALIBRATION_MEASURE_RIGHT, CALIBRATION_MEASURE_FRONT, CALIBRATION_MEASURE_LEFT and CALIBRATION_MEASURE_BACK define the usable touch points. Comment out any sides which are unreachable by the probe. For best results, all four sides should be reachable.  CALIBRATION_PIN, CALIBRATION_PIN_INVERTING, CALIBRATION_PIN_PULLDOWN and CALIBRATION_PIN_PULLUP configure the pin used for calibration. For example, if the nozzle is grounded, the calibation cube would be connected to a digital input pin with a pull-up enabled.  ',
      url: 'https://marlinfw.org/docs/gcode/G425.html',
    },
    params: [
      {
        name: 'B',
        label: '[B]',
        hint: 'Perform calibration of backlash only.  ',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Perform calibration of one toolhead only.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<linear>]',
        hint: 'Uncertainty: how far to start probe away from the cube (mm)',
        value: 0,
      },
      {
        name: 'V',
        label: '[V]',
        hint: 'Probe cube and print position, error, backlash and hotend offset. (Requires CALIBRATION_REPORTING)  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M0-M1',
    name: 'M0-M1',
    description: 'Unconditional stop',
    details: {
      description:
        'The M0 and M1 commands pause after the last movement and wait for the user to continue. M1 is a deprecated alias for M0. ',
      notes:
        'If both S and P are included, S takes precedence. Without an LCD controller or EMERGENCY_PARSER this command is ignored. With EMERGENCY_PARSER enabled the M108 command can be used to continue. ',
      url: 'https://marlinfw.org/docs/gcode/M000-M001.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<ms>]',
        hint: 'Expire time, in milliseconds',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<sec>]',
        hint: 'Expire time, in seconds',
        value: 0,
      },
      {
        name: 's',
        label: '[string]',
        hint: 'An optional message to display on the LCD  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M3',
    name: 'M3',
    description: 'Spindle CW / Laser On',
    details: {
      description: 'Wait for moves to complete, then set the spindle speed (clockwise) or laser power. ',
      notes:
        'S is interpeted as the configured value range: PWM (default), Percentage, or RPM. (See CUTTER_POWER_UNIT) M3 and M4 aren’t needed with LASER_POWER_INLINE and LASER_MOVE_POWER enabled. Power is set directly in G1…G5 ',
      url: 'https://marlinfw.org/docs/gcode/M003.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<mode>]',
        hint: 'Inline mode ON / OFF.',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<power>]',
        hint: 'Spindle speed or laser power in PWM 0-255 value range',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<power>]',
        hint: 'Spindle speed or laser power in the configured value range (see CUTTER_POWER_DISPLAY). (PWM 0-255 by default)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M4',
    name: 'M4',
    description: 'Spindle CCW / Laser On',
    details: {
      description: 'Wait for moves to complete, then set the spindle speed (counter-clockwise) or laser power. ',
      notes:
        'S is interpeted as the configured value range: PWM (default), Percentage, or RPM. (See CUTTER_POWER_UNIT) M3 and M4 aren’t needed with LASER_POWER_INLINE and LASER_MOVE_POWER enabled. Power is set directly in G1…G5 ',
      url: 'https://marlinfw.org/docs/gcode/M004.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<mode>]',
        hint: 'Inline mode ON / OFF.',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<power>]',
        hint: 'Spindle speed or laser power in PWM 0-255 value range',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<power>]',
        hint: 'Spindle speed or laser power in the configured value range (see CUTTER_POWER_UNIT). (PWM 0-255 by default)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M5',
    name: 'M5',
    description: 'Spindle / Laser Off',
    details: {
      description: 'Wait for moves to complete, then turn off the spindle / laser power and PWM. ',
      notes: 'G0 and G28 will also turn the laser off ',
      url: 'https://marlinfw.org/docs/gcode/M005.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M7-M9',
    name: 'M7-M9',
    description: 'Coolant Controls',
    details: {
      description: 'This command pertains to a CNC machine with a liquid cooling system or a laser with air assist. ',
      url: 'https://marlinfw.org/docs/gcode/M007-M009.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M10-M11',
    name: 'M10-M11',
    description: 'Vacuum / Blower Control',
    details: {
      description: 'Immediately turn the cutter’s vacuum or laser’s blower motor on or off. ',
      notes: 'These G-codes can only be enabled for use with a spindle or laser setup. ',
      url: 'https://marlinfw.org/docs/gcode/M010-M011.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M16',
    name: 'M16',
    description: 'Expected Printer Check',
    details: {
      description:
        'Do a case-sensitive comparison between the string argument and the configured MACHINE_NAME. If the machine name doesn’t match, halt the printer so that a reset is required. This safety feature is meant to prevent G-code sliced for a specific machine from being used on any other machine. ',
      url: 'https://marlinfw.org/docs/gcode/M016.html',
    },
    params: [
      {
        name: 't',
        label: 'string',
        hint: 'The string to compare to MACHINE_NAME.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M17',
    name: 'M17',
    description: 'Enable Steppers',
    details: {
      description:
        'This command can be used to enable one or more steppers (X,Y,Z,E). If no steppers are specified, this command enables all steppers immediately. If one or more axes are specified, this command enables the specified steppers immediately. ',
      url: 'https://marlinfw.org/docs/gcode/M017.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<flag>]',
        hint: 'E Enable',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<flag>]',
        hint: 'X Enable',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<flag>]',
        hint: 'Y Enable',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<flag>]',
        hint: 'Z Enable',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M18, M84',
    name: 'M18, M84',
    description: 'Disable steppers',
    details: {
      description:
        'This command can be used to set the stepper inactivity timeout (S) or to disable one or more steppers (X,Y,Z,E). If a timeout is given with S, this command just sets the stepper inactivity timeout. If no steppers are specified, this command disables all steppers immediately. If one or more axes are specified, this command disables the specified steppers immediately. ',
      url: 'https://marlinfw.org/docs/gcode/M018.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<flag>]',
        hint: 'E Disable',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Inactivity Timeout. If none specified, disable now.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<flag>]',
        hint: 'X Disable',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<flag>]',
        hint: 'Y Disable',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<flag>]',
        hint: 'Z Disable',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M20',
    name: 'M20',
    description: 'List SD Card',
    details: {
      description:
        'List all printable files on the SD card back to the requesting serial port in compact DOS 8.3 format. Only files with .gcode, .gco, and .g extensions will be listed. Hidden files (beginning with .) will not be listed. Hosts or serial controllers should send M20 to get a DOS 8.3 file listing of the active media device that includes file sizes. The file size is included in the output since Marlin 1.1.0. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M020.html',
    },
    params: [
      {
        name: 'F',
        label: '[F]2.0.9.4CUSTOM_FIRMWARE_UPLOADOnlylistBINfiles.Usedbyhostpluginstofacilitatefirmwareupload.',
        hint: '',
        value: 0,
      },
      {
        name: 'L',
        label: '[L]2.0.9LONG_FILENAME_HOST_SUPPORT',
        hint: 'Include the long filename in the listing.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T]2.1.2M20_TIMESTAMP_SUPPORTIncludethefiletimestampinthelisting.',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M21',
    name: 'M21',
    description: 'Init SD card',
    details: {
      description: 'Use this command to mount the last-selected SD card or thumb drive. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M021.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M22',
    name: 'M22',
    description: 'Release SD card',
    details: {
      description:
        'If Marlin gets confused about the state of the SD card, this command can be used to simulate an ejection of the SD card. Re-insert the SD card or use M21 to enable the SD card following M22. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M022.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M23',
    name: 'M23',
    description: 'Select SD file',
    details: {
      description: 'Select an SD file for printing or processing. Follow with M24 to run the selected file. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M023.html',
    },
    params: [
      {
        name: 'i',
        label: 'filename',
        hint: 'The filename of the file to open.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M24',
    name: 'M24',
    description: 'Start or Resume SD print',
    details: {
      description:
        'Start an SD print or resume the paused SD print. If PARK_HEAD_ON_PAUSE is enabled, unpark the nozzle. If POWER_LOSS_RECOVERY is enabled M24 accepts parameters which allow resuming the print from a specific point in the file. These parameters are usually only used in this scenario. ',
      notes: 'Requires SDSUPPORT Since Marlin 2.0.0, SD printing can be aborted with M524. ',
      url: 'https://marlinfw.org/docs/gcode/M024.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<pos>]',
        hint: 'Position in file to resume from (requires POWER_LOSS_RECOVERY)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<time>]',
        hint: 'Elapsed time since start of print (requires POWER_LOSS_RECOVERY)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M25',
    name: 'M25',
    description: 'Pause SD print',
    details: {
      description: 'Pause the SD print in progress. If PARK_HEAD_ON_PAUSE is enabled, park the nozzle. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M025.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M26',
    name: 'M26',
    description: 'Set SD position',
    details: {
      description: 'Set the next read position in the open SD file. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M026.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<pos>]',
        hint: 'Next file read position to set',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M27',
    name: 'M27',
    description: 'Report SD print status',
    details: {
      description:
        'With no parameter, report the current SD read position in the form “SD printing byte 123/12345.” If no file is open the response is “Not SD printing.” With S<seconds>, set the SD status auto-report interval. (Requires AUTO_REPORT_SD_STATUS) With C, get the currently open file’s name (and long filename if possible). Print “(no file)” if no file is open. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M027.html',
    },
    params: [
      {
        name: 'C',
        label: '[C]',
        hint: 'Report the filename and long filename of the current file  ',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Interval between auto-reports. S0 to disable (requires AUTO_REPORT_SD_STATUS)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M28',
    name: 'M28',
    description: 'Start SD write',
    details: {
      description:
        'This command starts a file write. All commands received by Marlin are written to the file and are not executed until M29 closes the file. With ‘B1’, set an optimized binary file transfer mode. (Requires BINARY_FILE_TRANSFER) ',
      notes: 'Requires SDSUPPORT Use M928 to log commands to a file during printing. ',
      url: 'https://marlinfw.org/docs/gcode/M028.html',
    },
    params: [
      {
        name: 'B',
        label: '[B1]',
        hint: 'Set an optimized binary file transfer mode. (Requires BINARY_FILE_TRANSFER)  ',
        value: 0,
      },
      {
        name: 'i',
        label: 'filename',
        hint: 'File name to write  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M29',
    name: 'M29',
    description: 'Stop SD write',
    details: {
      description: 'Stop writing to a file that was begun with M28 or M928. Logging is disabled. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M029.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M30',
    name: 'M30',
    description: 'Delete SD file',
    details: {
      description: 'Delete a file from the SD card. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M030.html',
    },
    params: [
      {
        name: 'i',
        label: 'filename',
        hint: 'The filename of the file to delete.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M31',
    name: 'M31',
    description: 'Print time',
    details: {
      description:
        'This command reports the time elapsed since the start of the current print job to the host. When printing from SD card, the print job timer starts as soon as SD printing starts. If PRINTJOB_TIMER_AUTOSTART is enabled then the first M109 or M190 command received from the host will also start the print job timer. For manual control from the host, use M75, M76, and M77 to start, pause, and stop the print job timer. ',
      url: 'https://marlinfw.org/docs/gcode/M031.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M32',
    name: 'M32',
    description: 'Select and Start',
    details: {
      description:
        'The M32 command exists to allow G-code to load other G-code files and run them as sub-programs. This can be useful to change the start / end G-code for a batch of files without having to edit them all. For legacy reasons M32 uses ‘!’ (and ‘#’) to delimit the filepath parameter. The filepath must be the last parameter. ',
      notes: 'Requires SDSUPPORT This is a seldom-used beta feature that needs more testing and use-cases. ',
      url: 'https://marlinfw.org/docs/gcode/M032.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<flag>]',
        hint: 'Sub-Program flag',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<filepos>]',
        hint: 'Starting file offset',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M33',
    name: 'M33',
    description: 'Get Long Path',
    details: {
      description: 'Get the long name for a file based on the DOS 8.3 path. ',
      notes: 'Requires SDSUPPORT and LONG_FILENAME_HOST_SUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M033.html',
    },
    params: [
      {
        name: 'a',
        label: 'path',
        hint: 'DOS 8.3 path to a file or folder  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M34',
    name: 'M34',
    description: 'SDCard Sorting',
    details: {
      description:
        'Marlin now contains support for SDCard alphabetical file sorting in the LCD menus. This feature uses free SRAM to create a sorting index for up to the first 256 files in the current folder, and (if you have lots of SRAM) can optionally cache file listings for a more responsive UI. Buffering only occurs during file browsing. Otherwise the SRAM is freed. ',
      notes: 'Requires SDSUPPORT and SDCARD_SORT_ALPHA. ',
      url: 'https://marlinfw.org/docs/gcode/M034.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<-1|0|1>]',
        hint: 'Folder Sorting   F-1: Folders before files   F0: No folder sorting   F1: Folders after files',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Sorting on/off',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M42',
    name: 'M42',
    description: 'Set Pin State',
    details: {
      description:
        'For custom hardware not officially supported in Marlin, you can often just connect up an unused pin and use M42 to control it. ',
      url: 'https://marlinfw.org/docs/gcode/M042.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<bool>]1.1.9.1IgnoreprotectiononpinsthatMarlinisusing.',
        hint: '',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<pin>]',
        hint: 'A digital pin number (even for analog pins) to write to. (LED_PIN if omitted)',
        value: 0,
      },
      {
        name: '<',
        label: 'S<state>',
        hint: 'The state to set. PWM pins may be set from 0-255.',
        value: 0,
      },
      {
        name: 'T',
        label:
          '[T<0|1|2|3>]2.0.5.2Setthepinmode.PriortoMarlin2.0.9.4thisissetwiththeMparameter.T0:INPUTT1:OUTPUTT2:INPUT_PULLUPT3:INPUT_PULLDOWN',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M43',
    name: 'M43',
    description: 'Debug Pins',
    details: {
      description:
        'When setting up or debugging a machine it’s useful to know how pins are assigned to functions by the firmware, and to be able to find pins for use with new functions. M43 provides these tools. M43 by itself reports all pin assignments. Use P to specify a single pin. Use I to report the values on pins that are protected. Use W to watch the specified pin, or all pins. Use the E option to monitor endstops. Use S option to test a BLTouch type servo probe. Use T option to toggle pins. The W watch mode option continues looping, blocking all further commands, until the board is reset. If EMERGENCY_PARSER is enabled, M108 may also be used to exit the watch loop without needing to reset the board. See M43 T for Pins Debugging toggle options. ',
      notes: 'Requires PINS_DEBUGGING. This feature should be disabled for production use. ',
      url: 'https://marlinfw.org/docs/gcode/M043.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<bool>]',
        hint: 'Watch endstops',
        value: 0,
      },
      {
        name: 'I',
        label: '[I]',
        hint: 'Ignore protection when reporting values  ',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<pin>]',
        hint: 'Digital Pin Number',
        value: 0,
      },
      {
        name: 'S',
        label: '[S]',
        hint: 'Test BLTouch type servo probes. Use P to specify servo index (0-3). Defaults to 0 if P omitted  ',
        value: 0,
      },
      {
        name: 'T',
        label: '[T]',
        hint: 'Toggle pins - see M43 T for options  ',
        value: 0,
      },
      {
        name: 'W',
        label: '[W]',
        hint: 'Watch pins  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M43 T',
    name: 'M43 T',
    description: 'Toggle Pins',
    details: {
      description: 'The M43 T command toggles one or more pins. ',
      notes:
        'Requires PINS_DEBUGGING. This feature should be disabled for production use. See M43 for other pins debug options. ',
      url: 'https://marlinfw.org/docs/gcode/M043-T.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<bool>]',
        hint: 'Flag to ignore Marlin’s pin protection. Use with caution!!!!',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<pin>]',
        hint: 'End Pin number. If not given, will default to last pin defined for this board',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<count>]',
        hint: 'Repeat pulses on each pin this number of times before continuing to next pin. If not given will default to 1.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<pin>]',
        hint: 'Start Pin number. If not given, will default to 0',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<time>]',
        hint: 'Wait time (in milliseconds) transitions. If not given will default to 500.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M48',
    name: 'M48',
    description: 'Probe Repeatability Test',
    details: {
      description:
        'Probes come in many flavors and as such have varying levels of accuracy, reliability, and repeatability, depending on several factors. This command tests the probe for repeatability (precision) and produces a standard deviation based on two or more probes of the same XY position. ',
      notes: 'Requires Z_MIN_PROBE_REPEATABILITY_TEST. ',
      url: 'https://marlinfw.org/docs/gcode/M048.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<bool>]',
        hint: 'Probe with temperature compensation enabled (PTC_PROBE, PTC_BED, PTC_HOTEND)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<engage>]',
        hint: 'Engage for each probe',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<legs>]',
        hint: 'Number of legs to probe',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<count>]',
        hint: 'Number of probes to do',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<0|1>]',
        hint: 'Star/Schizoid probe. By default this will do 7 points. Override with L.   S0: Circular pattern   S1: Star-like pattern',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<level>]',
        hint: 'Verbose Level (0-4, default=1)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'X Position',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'Y Position',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M73',
    name: 'M73',
    description: 'Set Print Progress',
    details: {
      description: 'Set current print progress percentage and/or remaining time for display on the LCD. ',
      url: 'https://marlinfw.org/docs/gcode/M073.html',
    },
    params: [
      {
        name: '<',
        label: 'P<percent>',
        hint: 'Current print progress percentage',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<minutes>]2.0.0USE_M73_REMAINING_TIMESetremainingtime.',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M75',
    name: 'M75',
    description: 'Start Print Job Timer',
    details: {
      description: 'Start the print job timer. ',
      notes:
        'Marlin considers a print job to be in progress whenever the print job timer is running, so it should be included in your starting G-code in your slicer settings. When PRINTJOB_TIMER_AUTOSTART is enabled the print job timer will be started in response to turning on heaters. ',
      url: 'https://marlinfw.org/docs/gcode/M075.html',
    },
    params: [
      {
        name: 's',
        label: '[string]',
        hint: 'A string to display in the LCD heading. (Requires DWIN_CREALITY_LCD_ENHANCED)  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M76',
    name: 'M76',
    description: 'Pause Print Job Timer',
    details: {
      description: 'Pause the print job timer. ',
      url: 'https://marlinfw.org/docs/gcode/M076.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M77',
    name: 'M77',
    description: 'Stop Print Job Timer',
    details: {
      description: 'Stop the print job timer. ',
      notes:
        'Marlin considers a print job to be in progress whenever the print job timer is running, so M77 should be included in your ending G-code in your slicer settings. When PRINTJOB_TIMER_AUTOSTART is enabled the print job timer will be stopped in response to the heaters being turned off. ',
      url: 'https://marlinfw.org/docs/gcode/M077.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M78',
    name: 'M78',
    description: 'Print Job Stats',
    details: {
      description: '',
      url: 'https://marlinfw.org/docs/gcode/M078.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M80',
    name: 'M80',
    description: 'Power On',
    details: {
      description:
        'Turn on the high-voltage power supply. Requires a board that’s powered from USB or another 5V source. ',
      notes:
        'A PS_ON_PIN is also required. Check your board’s pins file for the default. For Marlin 1.1.9 and earlier this feature is enabled by POWER_SUPPLY. Some octoprint plugins filter out M80/M81. If M80 does not work, use a plain serial terminal first prior reporting a bug. ',
      url: 'https://marlinfw.org/docs/gcode/M080.html',
    },
    params: [
      {
        name: 'S',
        label: '[S]',
        hint: 'Report Power Supply state  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M82',
    name: 'M82',
    description: 'E Absolute',
    details: {
      description:
        'This command is used to override G91 and put the E axis into absolute mode independent of the other axes. ',
      notes: 'G90 and G91 clear this mode. ',
      url: 'https://marlinfw.org/docs/gcode/M082.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M83',
    name: 'M83',
    description: 'E Relative',
    details: {
      description:
        'This command is used to override G90 and put the E axis into relative mode independent of the other axes. ',
      notes: 'G90 and G91 clear this mode. ',
      url: 'https://marlinfw.org/docs/gcode/M083.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M85',
    name: 'M85',
    description: 'Inactivity Shutdown',
    details: {
      description:
        'Use this command to set a maximum period of time for the machine to be inactive (with no moves). If the machine is idle for longer than the set period, the firmware will shut everything down and halt the machine. ',
      url: 'https://marlinfw.org/docs/gcode/M085.html',
    },
    params: [
      {
        name: '<',
        label: 'S<seconds>',
        hint: 'Max inactive seconds',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M86',
    name: 'M86',
    description: 'Hotend Idle Timeout',
    details: {
      description:
        'Use this command to set a maximum period of time for the machine to be idle with heaters on. If the extruder temperature is above the trigger value and the machine is idle for longer than the set period, the firmware will set the temperature of all hotends and the heated bed to the configured temperatures. Send M86 with no parameters to report the current settings. ',
      url: 'https://marlinfw.org/docs/gcode/M086.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<temp>]',
        hint: 'Bed idle temperature. The bed is set to this temperature on timeout. (Requires a heated bed.)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<temp>]',
        hint: 'Extruder idle temperature. The hotend is set to this temperature on timeout.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Timeout period. Temperatures are reduced if the machine is idle for this period.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<temp>]',
        hint: 'Temperature trigger. Timeout only applies above this temperature.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M87',
    name: 'M87',
    description: 'Disable Hotend Idle Timeout',
    details: {
      description: 'Use this command to disable the Hotend Idle Timer. Equivalent to M86 S0. ',
      url: 'https://marlinfw.org/docs/gcode/M087.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M100',
    name: 'M100',
    description: 'Free Memory',
    details: {
      description:
        'Use M100 for development purposes to observe how much memory (particularly stack) is being used by code. Proper AVR code should avoid use of new, malloc, etc., and instead use either pre-allocated static variables or stack. ',
      notes: 'Requires M100_FREE_MEMORY_WATCHER. ',
      url: 'https://marlinfw.org/docs/gcode/M100.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<n>]',
        hint: 'Corrupt ‘n’ locations in the free memory pool and report the locations of the corruption. This is useful to check the correctness of the M100 D and M100 F commands',
        value: 0,
      },
      {
        name: 'D',
        label: '[D]',
        hint: 'Dump the free memory block from __brkval to the stack pointer  ',
        value: 0,
      },
      {
        name: 'F',
        label: '[F]',
        hint: 'Return the number of free bytes in the memory pool along with other vital statistics that define the memory pool  ',
        value: 0,
      },
      {
        name: 'I',
        label: '[I]',
        hint: 'Initialize the free memory pool so it can be watched and print vital statistics that define the free memory pool  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M102',
    name: 'M102',
    description: 'Configure Bed Distance Sensor',
    details: {
      description: '',
      notes: 'Requires BD_SENSOR. ',
      url: 'https://marlinfw.org/docs/gcode/M102.html',
    },
    params: [
      {
        name: '<',
        label: 'S<-6|-5|-1|0|>0>',
        hint: 'Set the Bed Distance Sensor state and trigger distance.   S-6: Start Calibration   S-5: Read raw Calibration data   S-1: Read sensor information   S0: Disable Adjustable Z Height   S>0: Set Adjustable Z Height in 0.1mm units (e.g., M102 S4 enables adjusting for Z <= 0.4mm.)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M104',
    name: 'M104',
    description: 'Set Hotend Temperature',
    details: {
      description:
        'Set a new target hot end temperature and continue without waiting. The firmware will continue to try to reach and hold the temperature in the background. Use M109 to wait for the hot end to reach the target temperature. ',
      notes:
        ' With PRINTJOB_TIMER_AUTOSTART this command will stop the print job timer if the temperature is set at or below half of EXTRUDE_MINTEMP.  ',
      url: 'https://marlinfw.org/docs/gcode/M104.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<temp>]',
        hint: 'AUTOTEMP: The max auto-temperature.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<flag>]',
        hint: 'AUTOTEMP: Autotemp flag. Omit to disable autotemp.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]2.0.6Materialpresetindex.OverridesS.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature.AUTOTEMP: the min auto-temperature.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Hotend index. If omitted, the currently active hotend will be used.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M105',
    name: 'M105',
    description: 'Report Temperatures',
    details: {
      description: 'Request a temperature report to be sent to the host as soon as possible. ',
      notes:
        'Some hosts may hide the reply from M105. A better way for hosts to get regular temperature updates is to use M155 (requires AUTO_REPORT_TEMPERATURES and EXTENDED_CAPABILITIES_REPORT). Hosts then no longer need to run an extra process or use up slots in the command buffer to receive temperatures. ',
      url: 'https://marlinfw.org/docs/gcode/M105.html',
    },
    params: [
      {
        name: 'R',
        label: '[R]',
        hint: 'Include the Redundant temperature sensor (if any)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Hotend index',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M106',
    name: 'M106',
    description: 'Set Fan Speed',
    details: {
      description:
        'Turn on one of the fans and set its speed. If no fan index is given, the print cooling fan is selected. The fan speed applies to the next block added to the planner, so it will not take effect until previous moves in the planner are done. Under manual control with an idle machine, M106 will change the fan speed immediately. ',
      notes: 'M106 with no speed sets the fan to full speed. Turn off fans with M107. ',
      url: 'https://marlinfw.org/docs/gcode/M106.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<index>]2.0.6Materialpresetindex.OverridesS.',
        hint: '',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<index>]',
        hint: 'Fan index',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<speed>]',
        hint: 'Speed, from 0 to 255. S255 provides 100% duty cycle; S128 produces 50%.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<secondary>]',
        hint: 'Secondary speed. Added in Marlin 1.1.7. (Requires EXTRA_FAN_SPEED)   M106 P<fan> T3-255 sets a secondary speed for <fan>.  M106 P<fan> T2 uses the set secondary speed.  M106 P<fan> T1 restores the previous fan speed.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M108',
    name: 'M108',
    description: 'Break and Continue',
    details: {
      description:
        'The M108 command requires EMERGENCY_PARSER for full effectiveness. (Otherwise a full queue blocks the parser.) Some G-code commands cause Marlin to go into a closed loop, waiting indefinitely for a certain state or event. For example, M109 waits for the target temperature to be reached, and M0 waits for an LCD click. In the case of M109, the M108 command stops waiting for the target temperature and continues processing G-code. This may result in “cold extrude” messages. For a full stop use M112. In the case of M0 the M108 command acts like the LCD button, breaking out of M0 and continuing to process the G-code queue. ',
      notes:
        'With both EMERGENCY_PARSER and HOST_KEEPALIVE_FEATURE enabled, hosts will be able to prompt for continuation or cancellation, confirming with M108 and cancelling with M112. ',
      url: 'https://marlinfw.org/docs/gcode/M108.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M110',
    name: 'M110',
    description: 'Set Line Number',
    details: {
      description:
        'Hosts can use M110 to set the current line number in a print job. Each line number sent by a host must be one higher than the previous line number, or the firmware will ignore the line and send an error requesting a resend of the missing line. This is one technique Marlin uses to keep in sync with hosts. ',
      notes: 'All these are valid: N100 M110, M110 N100, N101 M110 N100. ',
      url: 'https://marlinfw.org/docs/gcode/M110.html',
    },
    params: [
      {
        name: '<',
        label: 'N<line>',
        hint: 'Line number',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M112',
    name: 'M112',
    description: 'Full Shutdown',
    details: {
      description:
        'Used for immediate halt, M112 shuts down the machine, turns off all the steppers and heaters, and if possible, turns off the power supply. A reset is required to return to operational mode. M112 is NOT a safety-rated “Emergency Stop” in the formal sense and is not guaranteed to meet the requirements of any safety category or required performance level (PLr). This is functionally a control stop. Machine builders should perform their own risk-assessment and implement suitable safety stop devices. ',
      notes:
        'M112 is the fastest way to shut down the machine using a host, but it may need to wait for a space to open up in the command queue. Enable EMERGENCY_PARSER for an instantaneous M112 command. ',
      url: 'https://marlinfw.org/docs/gcode/M112.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M114',
    name: 'M114',
    description: 'Get Current Position',
    details: {
      description:
        'Get the “current position” of the active tool. Stepper values are included. If M114_LEGACY is enabled the planner will be synchronized before reporting so that the reported position is not be ahead of the actual planner position. Normally M114 reports the “projected position” which is the last position Marlin was instructed to move to. With the M114_REALTIME option you can send R to get the “real” current position at the moment that the request was processed. This position comes directly from the steppers in the midst of motion, so when the printer is moving you can consider this the “recent position.” For debugging it can be useful to enable M114_DETAIL which adds D and E parameters to get extra details. ',
      notes:
        'Hosts should respond to the output of M114 by updating their current position. G-code M154 can be used to to auto-report positions to the host, reducing serial traffic. ',
      url: 'https://marlinfw.org/docs/gcode/M114.html',
    },
    params: [
      {
        name: 'D',
        label: '[D]',
        hint: 'Detailed information (requires M114_DETAIL)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E]',
        hint: 'Report E stepper position (requires M114_DETAIL)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R]',
        hint: 'Real position information (requires M114_REALTIME)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M117',
    name: 'M117',
    description: 'Set LCD Message',
    details: {
      description: 'Set the status line message on the LCD. ',
      notes: 'Requires an LCD controller. The message should appear immediately, but it will depend on LCD settings. ',
      url: 'https://marlinfw.org/docs/gcode/M117.html',
    },
    params: [
      {
        name: 's',
        label: '[string]',
        hint: 'LCD status message  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M119',
    name: 'M119',
    description: 'Endstop States',
    details: {
      description:
        'Use this command to get the current state of all endstops, useful for setup and troubleshooting. Endstops are reported as either “open” or “TRIGGERED”. The state of the Z probe and filament runout sensors are also reported with this command. ',
      notes:
        'The BLTOUCH probe only sends a brief pulse, so “TRIGGERED” indicates the probe is in error state. Similarly, Trinamic’s Sensorless Homing only sends a short pulse, so for these “TRIGGERED” is unusual. ',
      url: 'https://marlinfw.org/docs/gcode/M119.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M121',
    name: 'M121',
    description: 'Disable Endstops',
    details: {
      description: 'Disable endstops. ',
      notes:
        'After this command endstops will be kept disabled when not homing. This may have side-effects if using SD_ABORT_ON_ENDSTOP_HIT. ',
      url: 'https://marlinfw.org/docs/gcode/M121.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M123',
    name: 'M123',
    description: 'Fan Tachometers',
    details: {
      description:
        'If your machine has fans with tachometers this command will report their current speed readings in RPM. Marlin can also auto-report the fan speeds at regular intervals, as set by M123 S. ',
      url: 'https://marlinfw.org/docs/gcode/M123.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M125',
    name: 'M125',
    description: 'Park Head',
    details: {
      description: 'Save the current nozzle position and move to the configured park position. ',
      notes: 'Requires PARK_HEAD_ON_PAUSE. ',
      url: 'https://marlinfw.org/docs/gcode/M125.html',
    },
    params: [
      {
        name: 'L',
        label: '[L<linear>]',
        hint: 'Retract length (otherwise FILAMENT_CHANGE_RETRACT_LENGTH)',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<bool>]',
        hint: 'Always show a prompt and await a response (With an LCD menu)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X position to park at (otherwise FILAMENT_CHANGE_X_POS)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Y position to park at (otherwise FILAMENT_CHANGE_Y_POS)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Z raise before park (otherwise FILAMENT_CHANGE_Z_ADD)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M127',
    name: 'M127',
    description: 'Baricuda 1 Close',
    details: {
      description: 'Close the valve for Baricuda paste extruder 1. ',
      notes: 'Requires BARICUDA. ',
      url: 'https://marlinfw.org/docs/gcode/M127.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M129',
    name: 'M129',
    description: 'Baricuda 2 Close',
    details: {
      description: 'Close the valve for Baricuda paste extruder 2. ',
      notes: 'Requires BARICUDA. ',
      url: 'https://marlinfw.org/docs/gcode/M129.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M141',
    name: 'M141',
    description: 'Set Chamber Temperature',
    details: {
      description:
        'Set a new target heated chamber temperature and continue without waiting. The firmware will continue to try to reach and hold the temperature in the background. ',
      url: 'https://marlinfw.org/docs/gcode/M141.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature.AUTOTEMP: the min auto-temperature.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M145',
    name: 'M145',
    description: 'Set Material Preset',
    details: {
      description: 'Set the preheating presets for materials in the LCD menu. ',
      notes:
        'Requires an LCD controller. View the current settings with M503. If EEPROM_SETTINGS is enabled, these settings are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M145.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<temp>]',
        hint: 'Bed temperature',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<speed>]',
        hint: 'Fan speed',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<temp>]',
        hint: 'Hotend temperature',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<index>]',
        hint: 'Material index',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M150',
    name: 'M150',
    description: 'Set RGB(W) Color',
    details: {
      description:
        'If you have an RGB(W) light, either as part of a controller or installed separately, the M150 command can be used to set its color. ',
      notes: 'Requires BLINKM, RGB_LED, RGBW_LED, NEOPIXEL_LED or PCA9632. ',
      url: 'https://marlinfw.org/docs/gcode/M150.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<intensity>]',
        hint: 'Blue component from 0 to 255',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<pixel>]2.0.6NEOPIXEL_LEDNeoPixelpixelindex(0..pixels-1)(RequiresNEOPIXEL_LED)',
        hint: '',
        value: 0,
      },
      {
        name: 'K',
        label: '[K]NEOPIXEL_LEDKeepallunspecifiedvaluesunchanged(RequiresNEOPIXEL_LED)',
        hint: '',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<intensity>]NEOPIXEL_LEDBrightnessfrom0to255(RequiresNEOPIXEL_LED)',
        hint: '',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<intensity>]',
        hint: 'Red component from 0 to 255',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<strip>]2.0.6.1NEOPIXEL2_SEPARATENeoPixelstripindex(0or1)(RequiresNEOPIXEL2_SEPARATE)',
        hint: '',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<intensity>]',
        hint: 'Green component from 0 to 255',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<intensity>]',
        hint: 'White component from 0 to 255 (RGBW_LED or NEOPIXEL_LED only)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M155',
    name: 'M155',
    description: 'Temperature Auto-Report',
    details: {
      description:
        'It can be useful for host software to track temperatures, display and graph them over time, but polling with M105 is less than optimal. With M155 hosts simply set an interval and Marlin will keep sending data automatically. This method is preferred over polling with M105. ',
      notes:
        'Requires AUTO_REPORT_TEMPERATURES. Also enable EXTENDED_CAPABILITIES_REPORT to notify hosts about this capability. ',
      url: 'https://marlinfw.org/docs/gcode/M155.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Interval in seconds between auto-reports. S0 to disable.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M164',
    name: 'M164',
    description: 'Save Mix',
    details: {
      description: '',
      notes: 'Requires MIXING_EXTRUDER and MIXING_VIRTUAL_TOOLS. ',
      url: 'https://marlinfw.org/docs/gcode/M164.html',
    },
    params: [
      {
        name: '<',
        label: 'S<index>',
        hint: 'Tool index (active virtual tool if omitted)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M166',
    name: 'M166',
    description: 'Gradient Mix',
    details: {
      description:
        'Use M166 to set a gradient that will be automatically updated as the Z position changes during a print. The gradient smoothly transitions from one virtual tool to another between the given starting and ending Z heights. Below the starting height the starting virtual tool fully applies, and above the ending height the ending virtual tool fully applies. ',
      notes: 'Requires MIXING_EXTRUDER and GRADIENT_MIX. ',
      url: 'https://marlinfw.org/docs/gcode/M166.html',
    },
    params: [
      {
        name: '<',
        label: 'A<linear>',
        hint: 'Starting Z Height. (Use Z to set the Ending Z Height.)',
        value: 0,
      },
      {
        name: '<',
        label: 'I<index>',
        hint: 'Starting Virtual Tool. The Gradient begins with this tool-mix. Below the Starting Z Height the Starting Virtual Tool fully applies.',
        value: 0,
      },
      {
        name: '<',
        label: 'J<index>',
        hint: 'Ending Virtual Tool. The Gradient transitions to this tool-mix as Z approaches the Ending Z Height. Above the Ending Z Height the Ending Virtual Tool fully applies.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<enable>]',
        hint: 'Enable / disable the gradient in manual mode. When using the tool index alias, tool-change commands determine whether or not the gradient is enabled.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'A tool index to reassign to the gradient. If no index is given, cancel the tool assignment.',
        value: 0,
      },
      {
        name: '<',
        label: 'Z<linear>',
        hint: 'Ending Z Height. (Use A to set the Starting Z Height.)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M192',
    name: 'M192',
    description: 'Wait for Probe temperature',
    details: {
      description: 'Use this command to dwell until the probe reaches a given target temperature. ',
      url: 'https://marlinfw.org/docs/gcode/M192.html',
    },
    params: [
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Temperature to wait for, whether heating or cooling.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'A minimum temperature to wait for. No wait if already higher.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M201',
    name: 'M201',
    description: 'Print / Travel Move Limits',
    details: {
      description:
        'Set the max acceleration for one or more axes (in current units-per-second per-second). The acceleration limit for extruder(s) only applies for print moves where at least one other axis is also in motion. To set the acceleration limit for retract / recover in which only the E axis is moving use M204 R instead. With XY_FREQUENCY_LIMIT you can also set the XY frequency limits, described below. ',
      notes:
        'View the current setting with M503. If EEPROM_SETTINGS is enabled, these are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M201.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<accel>]',
        hint: 'E axis max acceleration',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<Hz>]',
        hint: 'Planner frequency limit (Requires XY_FREQUENCY_LIMIT). This value determines the maximum frequency of direction changes for the X and Y axes.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<percent>]',
        hint: 'Planner XY frequency minimum speed percentage (Requires XY_FREQUENCY_LIMIT). This value determines the minimum speed reduction that will be applied in response to exceeding the frequency limit.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder (Requires DISTINCT_E_FACTORS)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<accel>]',
        hint: 'X axis max acceleration',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<accel>]',
        hint: 'Y axis max acceleration',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<accel>]',
        hint: 'Z axis max acceleration',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M207',
    name: 'M207',
    description: 'Set Firmware Retraction',
    details: {
      description: 'Set lengths, feedrate, and Z lift for firmware-based retraction. See parameters below. ',
      notes: 'Requires FWRETRACT. See related codes G10, G11, M208, and M209. ',
      url: 'https://marlinfw.org/docs/gcode/M207.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<feedrate>]',
        hint: 'Retract feedrate (units/min)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<length>]',
        hint: 'Retract length',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<length>]',
        hint: 'Retract swap length (multi-extruder)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<length>]',
        hint: 'Z lift on retraction',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M208',
    name: 'M208',
    description: '',
    details: {
      description:
        'Set the added lengths and feedrates for firmware-based retract recovery. The lengths set by M208 are applied in addition to the lengths set by M207 when un-retracting (aka “recovering”) the filament. The new values will apply to all subsequent G11 commands. The “swap” values apply to firmware-based recover moves after a tool-change. ',
      notes: 'Requires FWRETRACT. See related codes G10, G11, M207, and M209. ',
      url: 'https://marlinfw.org/docs/gcode/M208.html',
    },
    params: [
      {
        name: 'F',
        label: '[F<feedrate>]',
        hint: 'Recover feedrate (units/min)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<feedrate>]',
        hint: 'Swap recover feedrate (units/min)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<length>]',
        hint: 'Additional recover length. Can be negative to reduce recover length.',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<length>]',
        hint: 'Additional recover swap length. Can be negative to reduce the length.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M209',
    name: 'M209',
    description: 'Set Auto Retract',
    details: {
      description:
        'Enable or disable automatic retraction. This option is meant to help slicers that don’t support G10/G11. But it can be used to override retraction in any G-code. When auto-retract is enabled, all reversed E-only moves are treated as retraction. (Recover moves are also automatically overridden.) When disabled, E retraction derives from G-code. ',
      notes:
        'Requires FWRETRACT. Most slicers today can generate G10/G11. But this option is useful for older G-code. Though not currently very popular, both volumetric extrusion and firmware-based retraction (and/or M209) make G-code more immune to changes from one machine to another, and permit changing the hardware without needing to re-slice. See related codes G10, G11, M207, and M208. ',
      url: 'https://marlinfw.org/docs/gcode/M209.html',
    },
    params: [
      {
        name: '<',
        label: 'S<flag>',
        hint: 'Set Auto-Retract on/off',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M211',
    name: 'M211',
    description: 'Software Endstops',
    details: {
      description:
        'Optionally enable/disable software endstops, then report the current state. With software endstops enabled, moves will be clipped to the physical boundaries from [XYZ]_MIN_POS to [XYZ]_MAX_POS. ',
      notes: 'Requires either MIN_SOFTWARE_ENDSTOPS or MAX_SOFTWARE_ENDSTOPS for the enable option. ',
      url: 'https://marlinfw.org/docs/gcode/M211.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<flag>]',
        hint: 'Software endstops state (S1=enable S0=disable)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M217',
    name: 'M217',
    description: 'Filament swap parameters',
    details: {
      description:
        'When changing tools on some setups, one filament may be retracted before the other is primed. This command sets the length and feedrates used for the filament swap retract and prime. If no parameters are given this command reports the current filament swap parameters. ',
      notes: 'These values are stored in EEPROM. ',
      url: 'https://marlinfw.org/docs/gcode/M217.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<linear>]',
        hint: 'Migration Auto Mode. Requires TOOLCHANGE_MIGRATION_FEATURE.',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<linear>]',
        hint: 'Extra resume',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<linear>]',
        hint: 'Extra Prime Length',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<linear>]',
        hint: 'Fan speed (0-255)',
        value: 0,
      },
      {
        name: 'G',
        label: '[G<linear>]',
        hint: 'Fan Time (seconds)',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<linear>]',
        hint: 'Last Migration. Requires TOOLCHANGE_MIGRATION_FEATURE.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<feedrate>]',
        hint: 'Prime feedrate',
        value: 0,
      },
      {
        name: 'Q',
        label: '[Q]',
        hint: 'Prime active tool using TOOLCHANGE_FILAMENT_SWAP settings  ',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<feedrate>]',
        hint: 'Retract feedrate',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<linear>]',
        hint: 'Swap length',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<linear>]',
        hint: 'Unretract feedrate',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<linear>]',
        hint: 'Enable First Prime on uninitialized Nozzles. Requires TOOLCHANGE_FS_PRIME_FIRST_USED.',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<linear>]',
        hint: 'Enable Park Feature. Requires TOOLCHANGE_PARK - was SINGLENOZZLE_SWAP_PARK.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'Park X position. Requires TOOLCHANGE_PARK - was SINGLENOZZLE_SWAP_PARK.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Park Y position. Requires TOOLCHANGE_PARK - was SINGLENOZZLE_SWAP_PARK.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<feedrate>]',
        hint: 'Z Raise.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M218',
    name: 'M218',
    description: 'Set Hotend Offset',
    details: {
      description:
        'To keep nozzles aligned to the work area between tool-changes, the firmware needs to know how they relate to each other. ',
      notes:
        ' Requires 2 or more nozzles. The default hotend offsets are set with HOTEND_OFFSET_[XYZ]. Z hotend offset only available with DUAL_X_CARRIAGE or SWITCHING_NOZZLE. View current hotend offsets with M503. If EEPROM_SETTINGS is enabled, these offsets are saved with M500, loaded with M501, and reset with M502.  ',
      url: 'https://marlinfw.org/docs/gcode/M218.html',
    },
    params: [
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Hotend index. Active extruder by default.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<offset>]',
        hint: 'Hotend X offset',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<offset>]',
        hint: 'Hotend Y offset',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<offset>]',
        hint: 'Hotend Z offset. Requires DUAL_X_CARRIAGE or SWITCHING_NOZZLE.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M220',
    name: 'M220',
    description: 'Set Feedrate Percentage',
    details: {
      description:
        'Set speed percentage factor, aka “Feed Rate” which applies to all G-code-based moves in all (X, Y, Z, and E) axes. Report the current speed percentage factor if no parameter is specified. ',
      url: 'https://marlinfw.org/docs/gcode/M220.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<flag>]',
        hint: 'Back up current factor',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<flag>]',
        hint: 'Restore the last-saved factor',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<percent>]',
        hint: 'Feedrate percentage',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M221',
    name: 'M221',
    description: 'Set Flow Percentage',
    details: {
      description: 'Set the flow percentage, which applies to all E moves added to the planner. ',
      url: 'https://marlinfw.org/docs/gcode/M221.html',
    },
    params: [
      {
        name: '<',
        label: 'S<percent>',
        hint: 'Feedrate percentage',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder (requires multi-extruder). Default is the active extruder.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M226',
    name: 'M226',
    description: 'Wait for Pin State',
    details: {
      description: 'Wait for a pin to have a certain value or state. ',
      url: 'https://marlinfw.org/docs/gcode/M226.html',
    },
    params: [
      {
        name: '<',
        label: 'P<pin>',
        hint: 'Pin number',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<state>]',
        hint: 'State 0 or 1. Default -1 for inverted.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M240',
    name: 'M240',
    description: 'Trigger Camera',
    details: {
      description: 'Trigger a camera shutter using a digital pin or by bumping a physical switch. ',
      notes:
        'CHDK_PIN or PHOTOGRAPH_PIN is required prior to Marlin 2.0.0. To use the CHDK_PIN or PHOTOGRAPH_PIN option with a digital camera see this article. To use an endstop or contact switch as a shutter switch for your smartphone’s camera, see this video. ',
      url: 'https://marlinfw.org/docs/gcode/M240.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<offset>]',
        hint: 'Offset to the X return position. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<offset>]',
        hint: 'Offset to the Y return position. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<ms>]',
        hint: 'Duration to hold down the shutter switch. (Requires PHOTO_SWITCH_POSITION and PHOTO_SWITCH_MS)',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<feedrate>]',
        hint: 'Feedrate for the main photo moves. If omitted, the homing feedrate will be used. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<pos>]',
        hint: 'Shutter switch X position. If omitted, the photo move X position applies. (Requires PHOTO_SWITCH_POSITION)',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<pos>]',
        hint: 'Shutter switch Y position. If omitted, the photo move Y position applies. (Requires PHOTO_SWITCH_POSITION)',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<ms>]',
        hint: 'Delay after pressing the shutter switch. (Requires PHOTO_SWITCH_POSITION and PHOTO_SWITCH_MS)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<length>]',
        hint: 'Retract/recover length. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<feedrate>]',
        hint: 'Retract/recover feedrate. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'Main photo move X position. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'Main photo move Y position. (Requires PHOTO_POSITION)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<length>]',
        hint: 'Main photo move Z raise. (Requires PHOTO_POSITION)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M250',
    name: 'M250',
    description: 'LCD Contrast',
    details: {
      description: 'Set and/or get the LCD contrast. The value is constrained based on the LCD. ',
      notes: 'Requires an LCD controller with software-controlled contrast. ',
      url: 'https://marlinfw.org/docs/gcode/M250.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<contrast>]',
        hint: 'Contrast value',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M255',
    name: 'M255',
    description: 'LCD Sleep/Backlight Timeout',
    details: {
      description:
        'Set and/or get the LCD sleep / backlight timeout, in minutes. The display will go blank to save energy after your specified period has elapsed with no activity. The screen will wake up if it needs to display an important message. ',
      notes: 'Requires an LCD controller with a software controlled backlight or sleep function. ',
      url: 'https://marlinfw.org/docs/gcode/M255.html',
    },
    params: [
      {
        name: '<',
        label: 'S<minutes>',
        hint: 'Timeout delay in minutes.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M256',
    name: 'M256',
    description: 'LCD Brightness',
    details: {
      description:
        'Set and/or get the LCD brightness. The value is constrained based on the LCD, but typically a value of 0 is the dimmest and 255 is the brightest. ',
      notes:
        'Requires an LCD controller with software-controlled brightness. This may be extended in the future to work with a NeoPixel or RGB LED backlight. ',
      url: 'https://marlinfw.org/docs/gcode/M256.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<brightness>]',
        hint: 'Brightness value (0 - 255)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M260',
    name: 'M260',
    description: 'I2C Send',
    details: {
      description: 'Utility to send data over the I2C bus. ',
      notes: 'Requires EXPERIMENTAL_I2CBUS. ',
      url: 'https://marlinfw.org/docs/gcode/M260.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<addr>]',
        hint: 'The bus address to send to',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<byte>]',
        hint: 'The byte to add to the buffer',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<flag>]',
        hint: 'Reset and rewind the I2C buffer',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<flag>]',
        hint: 'Send flag. Flush the buffer to the bus.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M261',
    name: 'M261',
    description: 'I2C Request',
    details: {
      description:
        'Request bytes from the I2C bus and echo them to the host. To find out how to do more useful things with I2C see the I2C master / slave article. ',
      notes: 'Requires EXPERIMENTAL_I2CBUS. ',
      url: 'https://marlinfw.org/docs/gcode/M261.html',
    },
    params: [
      {
        name: '<',
        label: 'A<addr>',
        hint: 'The bus address to request bytes from',
        value: 0,
      },
      {
        name: '<',
        label: 'B<count>',
        hint: 'The number of bytes to request',
        value: 0,
      },
      {
        name: 'S',
        label:
          '[S<0|1|2|3>]2.0.9.3Outputstyle.Defaultis0(rawecho)ifnothingelseisgiven.S0:RawechoS1:Bytes(hex)S2:1or2bytevalue(decimal)S3:Bytes(decimal)',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M280',
    name: 'M280',
    description: 'Servo Position',
    details: {
      description: 'Set or get the position of a servo. ',
      notes: 'Requires NUM_SERVOS of 1 or more. ',
      url: 'https://marlinfw.org/docs/gcode/M280.html',
    },
    params: [
      {
        name: '<',
        label: 'P<index>',
        hint: 'Servo index to set or get',
        value: 0,
      },
      {
        name: '<',
        label: 'S<pos>',
        hint: 'Servo position to set. Omit to read the current position.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M282',
    name: 'M282',
    description: 'Detach Servo',
    details: {
      description:
        'Detach a servo, which turns off its power. The servo will be attached (powered up) before its next move. ',
      url: 'https://marlinfw.org/docs/gcode/M282.html',
    },
    params: [
      {
        name: '<',
        label: 'P<index>',
        hint: 'Index of the servo to detach.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M290',
    name: 'M290',
    description: 'Babystep',
    details: {
      description:
        'Apply babysteps to one or more axes using current units. Offsets applied with M290 aren’t added to the current coordinates, but are intended for making small adjustments, especially in the Z axis, at the start of a print. Note that when BABYSTEP_ZPROBE_OFFSET is enabled, M290 also modifies the Probe Z Offset (with no immediate effects). The new Z offset applies to successive probing operations, and can be saved with M500. This behavior is means to coincide with the LCD Menu replacing “Z Babystepping” with “Babystep Z Probe Offset.” To avoid this side-effect, use M290 P0 or leave BABYSTEP_ZPROBE_OFFSET disabled. ',
      notes: 'Requires BABYSTEP_XY for babystepping on the XY axes. ',
      url: 'https://marlinfw.org/docs/gcode/M290.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<bool>]',
        hint: 'Use P0 to leave the Probe Z Offset unaffected. (Requires BABYSTEP_ZPROBE_OFFSET)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<pos>]',
        hint: 'Alias for Z',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'A distance on the X axis',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'A distance on the Y axis',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'A distance on the Z axis',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M300',
    name: 'M300',
    description: 'Play Tone',
    details: {
      description: 'Add a tone to the tone queue. ',
      notes:
        'Requires SPEAKER to play tones (not just beeps). In Marlin 1.0.2, playing tones block the command queue. Marlin 1.1.0 uses a tone queue and background tone player to keep the command buffer from being blocked by playing tones. ',
      url: 'https://marlinfw.org/docs/gcode/M300.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<ms>]',
        hint: 'Duration (1ms)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<Hz>]',
        hint: 'Frequency (260Hz)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M303',
    name: 'M303',
    description: 'PID autotune',
    details: {
      description:
        'This command initiates a process of heating and cooling to determine the proper PID values for the specified hotend or the heated bed. ',
      notes:
        'Requires PIDTEMP or PIDTEMPBED. View current PID values with M503. If EEPROM_SETTINGS is enabled, all PID values are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M303.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<count>]',
        hint: 'Cycles. At least 3 cycles are required. Default 5.',
        value: 0,
      },
      {
        name: 'D',
        label: '[D]',
        hint: 'Toggle PID debug output on / off (and take no further action). (Requires PID_DEBUG)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<index>]',
        hint: 'Hotend index (-1 for heated bed). Default 0.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<bool>]',
        hint: 'Use PID result. (Otherwise just print it out.)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M305',
    name: 'M305',
    description: 'User Thermistor Parameters',
    details: {
      description: 'Allows for custom temperature sensor. ',
      notes: 'Must specify temperature sensor 1000 ',
      url: 'https://marlinfw.org/docs/gcode/M305.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<beta>]',
        hint: 'Thermistor “beta” value',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<coeff>]',
        hint: 'Steinhart-Hart Coefficient ‘C’',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<index>]',
        hint: 'Thermistor table index',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<ohm>]',
        hint: 'Pullup resistor value',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<ohms>]',
        hint: 'Resistance at 25C',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M306',
    name: 'M306',
    description: 'Model predictive temperature control',
    details: {
      description: '',
      notes:
        'Requires MPCTEMP. View current values with M306 and no parameters. If EEPROM_SETTINGS is enabled, all calibration values are saved with M500, loaded with M501, and reset with M502. Heater Power (P) is related to the heater cartridge in the hotend. Most printers have 30 or 40 watt heaters. M306 T will move your hotend to 1mm above the bed for optimal calibration. You should ensure your hotend and print bed are free from debris before running an auto-tune. See the Marlin MPC documentation for more information about MPC parameters. ',
      url: 'https://marlinfw.org/docs/gcode/M306.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<value>]',
        hint: 'Ambient heat transfer coefficient (no fan).',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<value>]',
        hint: 'Heatblock Capacity (joules/kelvin)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<index>]',
        hint: 'Extruder index. If omitted, the command applies to the active extruder.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<value>]',
        hint: 'Ambient heat transfer coefficient (fan on full).',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<value>]',
        hint: 'Filament Heat Capacity (joules/kelvin/mm)',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<value>]',
        hint: 'Heater power in watts',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<value>]',
        hint: 'Sensor responsiveness (= transfer coefficient / heat capacity).',
        value: 0,
      },
      {
        name: 'T',
        label: '[T]',
        hint: 'Autotune the selected extruder.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M350',
    name: 'M350',
    description: 'Set micro-stepping',
    details: {
      description:
        'If your board has digital micro-stepping pins (X_MS1, Y_MS1, etc.), use this command to set the micro-steps. ',
      url: 'https://marlinfw.org/docs/gcode/M350.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<1|2|4|8|16>]',
        hint: 'Set micro-stepping for the 5th stepper driver.',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<1|2|4|8|16>]',
        hint: 'Set micro-stepping for the E0 stepper driver.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<1|2|4|8|16>]',
        hint: 'Set micro-stepping for all 5 stepper drivers.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<1|2|4|8|16>]',
        hint: 'Set micro-stepping for the X stepper driver.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<1|2|4|8|16>]',
        hint: 'Set micro-stepping for the Y stepper driver.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<1|2|4|8|16>]',
        hint: 'Set micro-stepping for the Z stepper driver.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M351',
    name: 'M351',
    description: 'Set Microstep Pins',
    details: {
      description:
        'If your board has digital micro-stepping pins (X_MS1, Y_MS1, etc.), use this command to set the micro-steps. At the time of this writing, the only boards which have digital micro-stepping pins are:  MINIRAMBO RAMBO SCOOVO_X9H MKS_BASE_common ALLIGATOR_R2 ARCHIM1 PRINTRBOARD_G2 5DPRINT  ',
      url: 'https://marlinfw.org/docs/gcode/M351.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<0|1>]',
        hint: 'Set the MS1/2 pin for the 5th stepper driver.',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<0|1>]',
        hint: 'Set the MS1/2 pin for the E stepper driver.',
        value: 0,
      },
      {
        name: '<',
        label: 'S<1|2>',
        hint: 'Select the pin to set for all specified axes.   S1: Select pin MS1 for all axes being set.   S2: Select pin MS2 for all axes being set.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<0|1>]',
        hint: 'Set the MS1/2 pin for the X stepper driver.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<0|1>]',
        hint: 'Set the MS1/2 pin for the Y stepper driver.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<0|1>]',
        hint: 'Set the MS1/2 pin for the Z stepper driver.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M355',
    name: 'M355',
    description: 'Case Light Control',
    details: {
      description: 'Set the case light power state and/or brightness. ',
      notes:
        'Requires a CASE_LIGHT_PIN to control the on/off or PWM state of the case light. The pin will need to be a 12V MOSFET pin with PWM control, or a signal pin connected to a MOSFET or relay to control the higher current required for the light. ',
      url: 'https://marlinfw.org/docs/gcode/M355.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<byte>]',
        hint: 'Set the brightness factor from 0 to 255.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Turn the case light on or off.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M360',
    name: 'M360',
    description: 'SCARA Theta A',
    details: {
      description:
        'Move the nozzle to SCARA calibration position Theta 0 (A0 B120) for calibration of “zero degrees.” ',
      url: 'https://marlinfw.org/docs/gcode/M360.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M361',
    name: 'M361',
    description: 'SCARA Theta-B',
    details: {
      description:
        'Move the nozzle to SCARA Theta-B calibration position Theta 90 (A90 B130) for calibration of “90 degrees steps-per-degree.” ',
      url: 'https://marlinfw.org/docs/gcode/M361.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M362',
    name: 'M362',
    description: 'SCARA Psi-A',
    details: {
      description:
        'Move the nozzle to SCARA Psi-A calibration position Psi 0 (A60 B180) for calibration of “zero degrees.” ',
      url: 'https://marlinfw.org/docs/gcode/M362.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M363',
    name: 'M363',
    description: 'SCARA Psi-B',
    details: {
      description:
        'Move the nozzle to SCARA Psi-B calibration position Psi 90 (A50 B90) for calibration of “90 degrees steps-per-degree.” ',
      url: 'https://marlinfw.org/docs/gcode/M363.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M364',
    name: 'M364',
    description: 'SCARA Psi-C',
    details: {
      description:
        'Move the nozzle to SCARA Psi-C calibration position Theta-Psi 90 (A45 B135) for calibration of “90 degrees to Theta.” ',
      url: 'https://marlinfw.org/docs/gcode/M364.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M380',
    name: 'M380',
    description: 'Activate Solenoid',
    details: {
      description: 'Activate the solenoid on the active extruder. ',
      url: 'https://marlinfw.org/docs/gcode/M380.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<index>]2.0.0MANUAL_SOLENOID_CONTROLSolenoidindex(RequiresMANUAL_SOLENOID_CONTROL)',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M381',
    name: 'M381',
    description: 'Deactivate Solenoids',
    details: {
      description: 'Deactivate all solenoids on all extruders. ',
      url: 'https://marlinfw.org/docs/gcode/M381.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<index>]2.0.0MANUAL_SOLENOID_CONTROLSolenoidindex(RequiresMANUAL_SOLENOID_CONTROL)',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M400',
    name: 'M400',
    description: 'Finish Moves',
    details: {
      description:
        'This command causes G-code processing to pause and wait in a loop until all moves in the planner are completed. ',
      url: 'https://marlinfw.org/docs/gcode/M400.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M401',
    name: 'M401',
    description: 'Deploy Probe',
    details: {
      description: 'Deploy the bed probe. The Z axis may raise up to make room for the probe to deploy. ',
      notes:
        'Requires some kind of bed probe. This command has no visible effect for probes that don’t move. They are just activated. ',
      url: 'https://marlinfw.org/docs/gcode/M401.html',
    },
    params: [
      {
        name: 'H',
        label: '[H]2.0.9.4BLTOUCH_HS_MODEReportthecurrentBLTouchHighSpeed(HS)Modestateandexit.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]2.0.9.3BLTOUCH_HS_MODESettheBLTouchHighSpeed(HS)Modestateandexitwithoutdeploy.',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M402',
    name: 'M402',
    description: 'Stow Probe',
    details: {
      description: 'Stow the bed probe. The Z axis may raise up to make room for the probe to stow. ',
      notes:
        'Requires some kind of bed probe. This command has no visible effect for probes that don’t move. They are just deactivated. ',
      url: 'https://marlinfw.org/docs/gcode/M402.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M403',
    name: 'M403',
    description: 'MMU2 Filament Type',
    details: {
      description: 'Set the filament type for a Průša MMU2 (or compatible) material slot. ',
      notes: 'Requires a Průša Multi-Material Unit v2.0. Requires PRUSA_MMU2 ',
      url: 'https://marlinfw.org/docs/gcode/M403.html',
    },
    params: [
      {
        name: '<',
        label: 'E<index>',
        hint: 'The MMU2 slot [0..4] to set the material type for',
        value: 0,
      },
      {
        name: '<',
        label: 'F<0|1|2>',
        hint: 'The filament type.   F0: Default (PLA, PETG, …)   F1: Flexible filament   F2: PVA',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M404',
    name: 'M404',
    description: 'Set Filament Diameter',
    details: {
      description:
        'Report or set the nominal filament width, such as 1.75 or 3.00. This value is used to determine the percentage difference when auto-adjusting flow in response to the measured filament width, and should match the value used for filament width in your slicer settings. ',
      notes: 'Requires FILAMENT_WIDTH_SENSOR. ',
      url: 'https://marlinfw.org/docs/gcode/M404.html',
    },
    params: [
      {
        name: 'W',
        label: '[W<linear>]',
        hint: 'The new nominal width value',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M405',
    name: 'M405',
    description: 'Filament Width Sensor On',
    details: {
      description:
        'Turn on the filament width sensor and start using it to do flow control. Initially, the filament between the sensor and the hot-end will be treated as the nominal width. ',
      notes: 'Requires FILAMENT_WIDTH_SENSOR. ',
      url: 'https://marlinfw.org/docs/gcode/M405.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<cm>]',
        hint: 'Distance from measurement point to hot end. If not given, the previous value will be used. The default startup value is set by MEASUREMENT_DELAY_CM.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M406',
    name: 'M406',
    description: 'Filament Width Sensor Off',
    details: {
      description: 'Turn off the filament width sensor and stop using it to do flow control. ',
      notes: 'Requires FILAMENT_WIDTH_SENSOR. ',
      url: 'https://marlinfw.org/docs/gcode/M406.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M407',
    name: 'M407',
    description: 'Filament Width',
    details: {
      description: 'Report the current measured filament width to the host. ',
      notes: 'Requires FILAMENT_WIDTH_SENSOR. ',
      url: 'https://marlinfw.org/docs/gcode/M407.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M410',
    name: 'M410',
    description: 'Quickstop',
    details: {
      description:
        'Stop all steppers instantly. Since there will be no deceleration, steppers are expected to be out of position after this command. ',
      notes:
        'This command is intended only for emergency situations. If EMERGENCY_PARSER is not enabled, this will be delayed. ',
      url: 'https://marlinfw.org/docs/gcode/M410.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M412',
    name: 'M412',
    description: 'Filament Runout',
    details: {
      description:
        'Get or set filament runout status and distance. Omit all parameters to get a report of the current stats. Enable or disable filament runout detection with S and set distance with D. When filament sensors are enabled, Marlin will respond to a filament runout by running the configured G-code (usually M600 Filament Change). When filament runout detection is disabled, Marlin will take no action for filament runout. ',
      notes:
        'Requires FILAMENT_RUNOUT_SENSOR. Parameter D requires FILAMENT_RUNOUT_DISTANCE_MM. Parameter H requires HOST_ACTION_COMMANDS. ',
      url: 'https://marlinfw.org/docs/gcode/M412.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<linear>]',
        hint: 'Set the filament runout distance.',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<bool>]',
        hint: 'Flag to enable or disable host handling of a filament runout.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<bool>]',
        hint: 'Flag to reset the filament runout sensor. Not needed with S.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Flag to enable or disable Filament Runout Detection. If omitted, the current enabled state will be reported.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M413',
    name: 'M413',
    description: 'Power-loss Recovery',
    details: {
      description:
        'M413 is used to turn the Power-loss Recovery feature on and off. When Power-loss Recovery is enabled and Marlin is running a print job from the SD Card or Flash Drive, it periodically saves the print job state to the SD Card / Flash Drive. If the machine crashes or a power outage occurs, Marlin presents the option to resume the interrupted print job. This feature is able to operate without a power-loss detection circuit by writing the recovery file periodically (e.g., once per layer). However, with a POWER_LOSS_PIN Marlin only writes the recovery info when a power-loss is actually detected. This method is preferred because the print will be resumed exactly where it was interrupted (rather than repeating the last layer), and the SD card or Flash Drive will incur much less wear. ',
      notes:
        'Requires POWER_LOSS_RECOVERY and an LCD controller. Requires printing from the SD Card or Flash Drive. A future implementation may use the EEPROM instead of the attached media. ',
      url: 'https://marlinfw.org/docs/gcode/M413.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Flag to enable or disable Power-loss Recovery. If omitted, the current enabled state will be reported.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M421',
    name: 'M421',
    description: 'Set Mesh Value',
    details: {
      description:
        'This command is used to set a single Z value for a mesh point in the stored bed leveling data. Allowed forms are M421 In Jn Zn, M421 Xn Yn Zn (MESH_BED_LEVELING only) or M421 C Zn (AUTO_BED_LEVELING_UBL only). ',
      url: 'https://marlinfw.org/docs/gcode/M421.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<bool>]',
        hint: 'Set the mesh point closest to the current nozzle position (AUTO_BED_LEVELING_UBL only)',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<int>]',
        hint: 'X index into the mesh array',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<int>]',
        hint: 'Y index into the mesh array',
        value: 0,
      },
      {
        name: 'N',
        label: '[N<bool>]',
        hint: 'Set the mesh point to undefined (AUTO_BED_LEVELING_UBL only)',
        value: 0,
      },
      {
        name: 'Q',
        label: '[Q<linear>]',
        hint: 'A value to add to the existing Z value',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X position (which should be very close to a grid line) (MESH_BED_LEVELING only)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Y position (which should be very close to a grid line) (MESH_BED_LEVELING only)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'The new Z value to set',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M422',
    name: 'M422',
    description: 'Set Z Motor XY',
    details: {
      description:
        'Set an XY probe or known position for a given Z Stepper. Either the S or W parameter must be given, along with X and Y positions. The W parameter exists only when Z_STEPPER_ALIGN_STEPPER_XY is defined, providing known stepper positions. ',
      notes:
        'See G34 for further details about Z-Stepper automatic alignment. Requires Z_STEPPER_AUTO_ALIGN. M422 W requires Z_STEPPER_ALIGN_STEPPER_XY. ',
      url: 'https://marlinfw.org/docs/gcode/M422.html',
    },
    params: [
      {
        name: 'R',
        label: '[R]',
        hint: 'Reset alignment and known points to the defaults. This will also be done by M502.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<index>]',
        hint: 'One-based index of a Z-Stepper whose probing-point will be set.',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<index>]Z_STEPPER_ALIGN_STEPPER_XYOne-basedindexofaZ-Stepperwhoseknownpositionwillbeset.',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X position',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<linear>]',
        hint: 'Y position',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M423',
    name: 'M423',
    description: 'X Twist Compensation',
    details: {
      description:
        'Use M423 to reset, modify, or report X-Twist Compensation data. X-Twist Compensation is applied to the mesh on G29) to correct for a twisted X gantry. Meaningful X-Twist Compensation data is generated using a guided procedure in the LCD menu that compares measurements taken by the bed probe to readings taken manually at the nozzle. Since manual measurements are prone to inaccuracy, a metal feeler gauge is recommended over a paper test. If the first layer is still imperfect, M423 can then be used to correct for small errors. ',
      url: 'https://marlinfw.org/docs/gcode/M423.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<linear>]',
        hint: 'Set the X-Axis Twist Compensation starting X position.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<linear>]',
        hint: 'Set the X-Axis Twist Compensation X-spacing.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R]',
        hint: 'Reset the Twist Compensation array to the configured default values.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<index>]',
        hint: 'Zero-based index into the Twist Compensation array. Requires a Z value.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<index>]',
        hint: 'A Z-offset value to set in the Twist Compensation array. Requires an X index.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M428',
    name: 'M428',
    description: 'Home Offsets Here',
    details: {
      description:
        'Use M428 to set a persistent offset to the native home position and coordinate space by assigning the current position as the native home position. See the example below.  The current position must be within 2cm from 0 or an endstop. The current position is set to the native home position. Any previous position shift from G92 is cleared. The home offset is persistent — added to the current position until changed. Some uses include fine adjustment of Z position (without moving endstops) and shifting the coordinate space to print on a different part of the bed.  ',
      notes:
        ' Only the Z offset can be altered on DELTA. This G-code can be disabled with NO_WORKSPACE_OFFSETS to optimize movement. Changing the home offsets will not invalidate bed leveling or other saved data. If EEPROM_SETTINGS is enabled, the home offsets are saved with M500, loaded with M501, and reset with M502. Use M206 to set the home offsets directly.  ',
      url: 'https://marlinfw.org/docs/gcode/M428.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M430',
    name: 'M430',
    description: 'Power Monitor',
    details: {
      description:
        'Enable/disable power monitor on LCD display. Report current/amps (A), voltage (V) and watts (W) if no parameters. ',
      notes: 'Requires either POWER_MONITOR_CURRENT or POWER_MONITOR_VOLTAGE ',
      url: 'https://marlinfw.org/docs/gcode/M430.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<bool>]',
        hint: 'display current (A) on LCD',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<bool>]',
        hint: 'toggle display voltage (V) on LCD',
        value: 0,
      },
      {
        name: 'W',
        label: '[W<bool>]',
        hint: 'display power/watts (W) on LCD',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M486',
    name: 'M486',
    description: 'Cancel Objects',
    details: {
      description:
        'Use M486 to identify and cancel objects during a multi-object print job. This command was originally developed for SD card printing but it works fine when host printing too. Of course, since hosts can skip objects more efficiently, host plugins are the better choice in that scenario. ',
      notes:
        'This G-code may not be widely supported by slicers for a while, but they do include helpful comments in the G-code output that includes the current object. So for now you can use a post-processing script to convert these comments into M486 commands. Slicer post-processing scripts:   M486 for Průša Slicer by Paul Paukstelis.  M486 for Cura by Aapo Saaristo.  ',
      url: 'https://marlinfw.org/docs/gcode/M486.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<flag>]',
        hint: 'Cancel the current object.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<index>]',
        hint: 'Cancel the object with the given index.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<index>]',
        hint: 'Set the index of the current object. If the object with the given index has been canceled, this will cause the firmware to skip to the next object. The value -1 is used to indicate something that isn’t an object and shouldn’t be skipped.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<count>]',
        hint: 'Reset the state and set the number of objects.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<index>]',
        hint: 'Un-cancel the object with the given index. This command will be ignored if the object has already been skipped.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M493',
    name: 'M493',
    description: 'Fixed-Time Motion',
    details: {
      description:
        'The Fixed-Time Motion Planner is an additional motion planning system provided by Ulendo.io as an add-on to Marlin Firmware. It currently supports Cartesian and Core kinematics. It may be extended for Delta in the future. The FT_MOTION feature can be enabled at the same time as Marlin’s integrated ZV Input Shaper, but these features do not share settings. It has its own implementation of Linear Advance (aka Pressure Advance) with its own gain parameter separate from M900. One interesting feature of this add-on is that it can be enabled and disabled while the machine is running (and maybe even within a single print job). So if you prefer the integrated ZV Input Shaper for some prints and 2HEI Input Shaping for others you don’t need to re-flash the firmware. G-code M493 allows you to enable or disable Fixed-Time Motion, change the current Input Shaper mode, and set parameters for its own Linear Advance and Input Shaping. Input Shaper Tuning It’s not always easy to attach an accelerometer to most printer boards, so Marlin doesn’t provide accelerator-based tuning. If you have that information you can use it. But the easiest way to tune Input Shaping is to print a ringing tower that goes through a range of frequencies, then examine the appearance of the ringing tower to choose the best frequencies for each axis. Get the Test Model Download the Ringing Tower STL which you will slice and use for the print test. For a CoreXY printer you should rotate the model 45 degrees, which isolates the A and B components of the motion system. Prepare the Slicer Use a slicer that provides custom G-code macros for layer change. For example you can open Kiri:Moto or download Prusa Slicer. If you use Cura you may need to install the Post Processing Plugin from the Cura Marketplace if it is not already installed.  In the the Starting G-code enable Fixed-Time Motion with something like:  M493 S11 D0 ; Enable ZVD Input Shaping\n    In Kiri:Moto enable Infill > Fill Type > Vase. Then add the following under Setup > Machine > Gcode Macros > Layer to run a test range of 15Hz to 60Hz:  M493 A{(layer < 2 ? 0 : 15 + 45.0 * (layer - 2) / 297)} ; (Hz) X Input Shaping Test\nM493 B{(layer < 2 ? 0 : 15 + 45.0 * (layer - 2) / 297)} ; (Hz) Y Input Shaping Test\n    In Prusa Slicer you’ll enable Spiral vase. Then add the following to your Printer Settings > After layer change G-code to run a test range of 15Hz to 60Hz:  M493 A{(layer_num < 2 ? 0 : 15 + 45.0 * (layer_num - 2) / 297)} ; (Hz) X Input Shaping Test\nM493 B{(layer_num < 2 ? 0 : 15 + 45.0 * (layer_num - 2) / 297)} ; (Hz) Y Input Shaping Test\n   In Cura, you’ll first need to add the .py file in this repository to your Cura “scripts” folder. Reopen Cura, enable Spiralize Outer Contour and set Minimum Layer Time to 0. Then go to Extensions > Post Processing > Modify G-Code. Click Add a script in the window that opens and use the dropdown menu to find Input Shaping. Make sure the Motion planning type dropdown is set to M493. The default frequency settings will let you test a range of 15Hz to 60Hz.  Slice and Print Slice and print the tower using 0.2mm layer height using the highest reasonable speed. When you examine the results it should be obvious where ringing is reduced the most on each axis. To get the Hz value for a given Z height, use the formula 15 + 45 * (z / 0.2 - 2) / 297. Analyze the Result Measure the height of the best looking layer, divide by the layer height, subtracting two layers. For example:  The least X ringing appears at height 20mm. So we calculate 15 + 45 * (20 / 0.2 - 2) / 297 and get a result of 29.84Hz. Send the command M493 A29.84 to apply the frequency to X motion. (For Y you would use M493 B29.84.)  More Resources TH3D Studio has created an Input Shaper Calculator that you can use to get the Slicer G-code you need and calculate the Hz value based on the best-looking layers. Dynamic Shaping Once you have the basic Input Shaping tuned, you may want to do further testing to see how the resonance changes as the Z height increases. Z height can affect the machine resonance whether the bed or the gantry moves in Z due to changes in the center of mass. Tuning according to the changing Z-height is more complicated than just printing a test model, and is best done with an accelerometer. Machine vendors should consider tuning at the factory and provide tuned profile settings for the popular slicers. ',
      url: 'https://marlinfw.org/docs/gcode/M493.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<Hz>]',
        hint: 'Set the Base Frequency for Input Shaping on the X axis.',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<Hz>]',
        hint: 'Set the Base Frequency for Input Shaping on the Y axis.',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<0|1|2>]',
        hint: 'Set the Dynamic Frequency mode.   D0: Disabled   D1: Z-based   D2: Mass-based',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<scale>]',
        hint: 'Set the Frequency Scaling factor for Input Shaping on the X axis.',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<scale>]',
        hint: 'Set the Frequency Scaling factor for Input Shaping on the Y axis.',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<gain>]',
        hint: 'Set the gain for Linear Advance.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<state>]',
        hint: 'Enable / disable Linear Advance.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<0|1|10|11|12|13|14|15>]',
        hint: 'Set the current motion mode and/or Input Shaper.   S0: Standard Motion   S1: Fixed-Time Motion   S10: ZV Input Shaping   S11: ZVD Input Shaping   S12: EI Input Shaping   S13: 2HEI Input Shaping   S14: 3HEI Input Shaping   S15: MZV Input Shaping',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M500',
    name: 'M500',
    description: 'Save Settings',
    details: {
      description: 'Save all configurable settings to EEPROM. ',
      notes: 'Requires EEPROM_SETTINGS. Since Marlin 1.1.0 only changed bytes are written to prolong EEPROM life. ',
      url: 'https://marlinfw.org/docs/gcode/M500.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M501',
    name: 'M501',
    description: 'Restore Settings',
    details: {
      description: 'Load all saved settings from EEPROM. ',
      notes: 'Requires EEPROM_SETTINGS. ',
      url: 'https://marlinfw.org/docs/gcode/M501.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M502',
    name: 'M502',
    description: 'Factory Reset',
    details: {
      description:
        'Reset all configurable settings to their factory defaults. To also reset settings in EEPROM, follow with M500. ',
      notes: 'This command can be used even if EEPROM_SETTINGS is disabled. ',
      url: 'https://marlinfw.org/docs/gcode/M502.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M503',
    name: 'M503',
    description: 'Report Settings',
    details: {
      description:
        'Print a concise report of all runtime-configurable settings (in SRAM) to the host console. This command reports the active settings which may or may not be the same as those stored in the EEPROM. ',
      notes: 'Does not require EEPROM_SETTINGS. ',
      url: 'https://marlinfw.org/docs/gcode/M503.html',
    },
    params: [
      {
        name: 'C',
        label: '[C]2.0.9.3CONFIGURATION_EMBEDDINGSavetheembeddedconfigurationZIPfiletotheSDCardorFlashDrive.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S]',
        hint: 'Detailed output flag. (true if omitted.)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M504',
    name: 'M504',
    description: 'Validate EEPROM contents',
    details: {
      description: 'Validate the contents of the EEPROM. ',
      notes: 'Requires EEPROM_SETTINGS. ',
      url: 'https://marlinfw.org/docs/gcode/M504.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M510',
    name: 'M510',
    description: 'Lock Machine',
    details: {
      description:
        'Lock the machine. When the machine is locked a passcode is required to unlock it. Use M511 P with your passcode to unlock the machine.option. ',
      notes: 'Requires PASSWORD_FEATURE. ',
      url: 'https://marlinfw.org/docs/gcode/M510.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M511',
    name: 'M511',
    description: 'Unlock Machine',
    details: {
      description:
        'Check the given passcode and unlock the machine if it is correct. Otherwise, delay for a period of time before allowing another attempt. ',
      notes: 'Requires PASSWORD_FEATURE. ',
      url: 'https://marlinfw.org/docs/gcode/M511.html',
    },
    params: [
      {
        name: '<',
        label: 'P<passcode>',
        hint: 'The passcode to try.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M512',
    name: 'M512',
    description: 'Set Passcode',
    details: {
      description:
        'Check the passcode given with P and if it is correct clear the passcode. If a new passcode is given with S then set a new passcode. ',
      notes: 'Requires PASSWORD_FEATURE. Use PASSWORD_LENGTH to configure the length, up to 9 digits. ',
      url: 'https://marlinfw.org/docs/gcode/M512.html',
    },
    params: [
      {
        name: '<',
        label: 'P<password>',
        hint: 'Current passcode. This must be correct to clear or change the passcode.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<password>]',
        hint: 'If S is included the new passcode will be set to this value.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M524',
    name: 'M524',
    description: 'Abort SD print',
    details: {
      description: 'Abort an SD print in progress and turn off all heaters. ',
      notes: 'Requires SDSUPPORT ',
      url: 'https://marlinfw.org/docs/gcode/M524.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M540',
    name: 'M540',
    description: 'Endstops Abort SD',
    details: {
      description:
        'Set whether SD printing should abort in the event of any endstop being triggered. This provides a fast way to abort a print in the event of mechanical failure such as loose couplings, lost steps, diverted axes, binding, etc., which lead to axes being very far out of position. ',
      notes:
        'Requires SDSUPPORT and SD_ABORT_ON_ENDSTOP_HIT. Use ENDSTOPS_ALWAYS_ON_DEFAULT or M120 to ensure that endstops are enabled. ',
      url: 'https://marlinfw.org/docs/gcode/M540.html',
    },
    params: [
      {
        name: '<',
        label: 'S<flag>',
        hint: 'Whether (1) or not (0) to abort SD printing on endstop hit.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M569',
    name: 'M569',
    description: 'Set TMC stepping mode',
    details: {
      description: 'Toggle between stealthChop and spreadCycle on supporting TMC drivers. ',
      notes: 'Requires at least one stealthChop capable TMC driver, such as TMC2130, TMC2208, or TMC2209. ',
      url: 'https://marlinfw.org/docs/gcode/M569.html',
    },
    params: [
      {
        name: 'E',
        label: '[E]',
        hint: 'Stepping mode for the E0 stepper  ',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]',
        hint: 'Index for multiple steppers. Use I1 for X2, Y2, and/or Z2, and I2 for Z3.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Index (tool) number for the E axis. If not specified, the E0 extruder.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Stepping mode for the X stepper  ',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Stepping mode for the Y stepper  ',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Stepping mode for the Z stepper  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M575',
    name: 'M575',
    description: 'Serial baud rate',
    details: {
      description:
        'Change the baud rate of one serial port or all serial ports. This command will interrupt serial communication to the host and may reset the firmware when the host reconnects at the new baud rate. ',
      notes:
        'Only specified baud rates are allowed. Shorthand baud rates (shown below in parentheses) were added in 2.0.6.1. ',
      url: 'https://marlinfw.org/docs/gcode/M575.html',
    },
    params: [
      {
        name: '<',
        label: 'B<baud>',
        hint: 'The baud rate to set. Permitted values are:  2400 (24) 9600 (96) 19200 (19, 192) 38400 (38, 384) 57600 (57, 576) 115200 (115, 1152) 250000 (250) 500000 (500) 1000000',
        value: 0,
      },
      {
        name: 'P',
        label: '[P]',
        hint: 'Serial Port index. Omit for all serial ports.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M593',
    name: 'M593',
    description: 'Input Shaping',
    details: {
      description:
        '      This G-code pertains to Marlin’s integrated ZV Input Shaper. For the Fixed-Time Motion Planner Input Shaper see M493.    Set the Input Shaping damping factor and/or frequency (in Hertz) for axes that support it. Use M593 with no parameters to report the current settings. Input Shaper Tuning It’s not always easy to attach an accelerometer to most printer boards, so Marlin doesn’t provide accelerator-based tuning. If you have that information you can use it. But the easiest way to tune Input Shaping is to print a ringing tower that goes through a range of frequencies, then examine the appearance of the ringing tower to choose the best frequencies for each axis. Get the Test Model Download the Ringing Tower STL which you will slice and use for the print test. For a CoreXY printer you should rotate the model 45 degrees, which isolates the A and B components of the motion system. Prepare the Slicer Use a slicer that provides custom G-code macros for layer change. For example you can open Kiri:Moto or download Prusa Slicer. If you use Cura you may need to install the Post Processing Plugin from the Cura Marketplace if it is not already installed.  In Kiri:Moto enable Infill > Fill Type > Vase. Then add the following under Setup > Machine > Gcode Macros > Layer to run a test range of 15Hz to 60Hz:  M593 F{(layer < 2 ? 0 : 15 + 45.0 * (layer - 2) / 297)} ; Hz Input Shaping Test\n   In Prusa Slicer you’ll enable Spiral vase. Then add the following to your Printer Settings > After layer change G-code to run a test range of 15Hz to 60Hz:  M593 F{(layer_num < 2 ? 0 : 15 + 45.0 * (layer_num - 2) / 297)} ; Hz Input Shaping Test\n   In Cura, you’ll first need to add the .py file in this repository to your Cura “scripts” folder. Reopen Cura, enable Spiralize Outer Contour and set Minimum Layer Time to 0. Then go to Extensions > Post Processing > Modify G-Code. Click Add a script in the window that opens and use the dropdown menu to find Input Shaping. Make sure the Motion planning type dropdown is set to M593. The default frequency settings will let you test a range of 15Hz to 60Hz.  Slice and Print Slice and print the tower using 0.2mm layer height using the highest reasonable speed. When you examine the results it should be obvious where ringing is reduced the most on each axis. To get the Hz value for a given Z height, use the formula 15 + 45 * (z / 0.2 - 2) / 297. Analyze the Result Measure the height of the best looking layer, divide by the layer height, subtracting two layers. For example:  The least X ringing appears at height 20mm. So we calculate 15 + 45 * (20 / 0.2 - 2) / 297 and get a result of 29.84Hz. Set this value with M593 X F29.84 then save with M500 and it will apply to all motion from now on.  More Resources TH3D Studio has created an Input Shaper Calculator that you can use to get the Slicer G-code you need and calculate the Hz value based on the best-looking layers. ',
      url: 'https://marlinfw.org/docs/gcode/M593.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<zeta>]',
        hint: 'Set the zeta/damping factor for the specified axes. If X and Y are omitted, both will be set.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<hertz>]',
        hint: 'Set the damping frequency for the specified axes. If X and Y are omitted, both will be set.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Flag to set the X axis value. If X and Y are omitted, both will be set.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Flag to set the Y axis value. If X and Y are omitted, both will be set.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M600',
    name: 'M600',
    description: 'Filament Change',
    details: {
      description:
        'The M600 command initiates the filament change procedure. The basic procedure will move the print head away from the print, eject the filament, wait for new filament to be inserted and the user to confirm, load and prime the filament, and continue with the print. M600 may be initiated automatically if a filament runout sensor is installed. ',
      notes:
        'Requires ADVANCED_PAUSE_FEATURE. The settings for this command can be found in Configuration_adv.h. At this time M600 requires an LCD controller. ',
      url: 'https://marlinfw.org/docs/gcode/M600.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<beeps>]',
        hint: 'Number of beeps to alert user of filament change (default FILAMENT_CHANGE_ALERT_BEEPS)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<pos>]',
        hint: 'Retract before moving to change position (negative, default PAUSE_PARK_RETRACT_LENGTH)',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<pos>]',
        hint: 'Load length, longer for bowden (negative)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Resume temperature. (AUTOTEMP: the min auto-temperature.)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<pos>]',
        hint: 'Amount of retraction for unload (negative)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<pos>]',
        hint: 'X position for filament change',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<pos>]',
        hint: 'Y position for filament change',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<pos>]',
        hint: 'Z relative lift for filament change position',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M605',
    name: 'M605',
    description: 'Multi Nozzle Mode',
    details: {
      description:
        'Set the behavior mode for multiple fixed nozzles such as a Dual Extruder or DUAL_X_CARRIAGE machine. This command behaves differently for DUAL_X_CARRIAGE vs. MULTI_NOZZLE_DUPLICATION:  For MULTI_NOZZLE_DUPLICATION the S2 parameter enables duplication mode. Any other value disables it. For DUAL_X_CARRIAGE, this command sets the Dual X mode. See theof S below. For Mirrored Mode: M605 S2 R0 X<distance> and M605 S3.  ',
      url: 'https://marlinfw.org/docs/gcode/M605.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<index>]',
        hint: 'Last nozzle index to include in the duplication set. 0 disables duplication. (Requires MULTI_NOZZLE_DUPLICATION)',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<mask>]',
        hint: 'Bit-mask of nozzles to include in the duplication set. 0 disables duplication. Bit 1 is E0, Bit 2 is E1 … Bit n is E(n-1). (Requires MULTI_NOZZLE_DUPLICATION)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Temperature difference to apply to E1. (Requires DUAL_X_CARRIAGE)',
        value: 0,
      },
      {
        name: '<',
        label: 'S<0|1|2|3>',
        hint: 'Select the pin to set for all specified axes.   S0: Full control mode. Both carriages are free to move, constrained by safe distance. (Requires DUAL_X_CARRIAGE)   S1: Auto-park mode. One carriage parks while the other moves. (Requires DUAL_X_CARRIAGE)   S2: Duplication mode. Carriages and extruders move in unison.   S3: Mirrored mode. The second extruder duplicates the motions of the first, but reversed in the X axis.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<linear>]',
        hint: 'X distance between dual X carriages. (Requires DUAL_X_CARRIAGE)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M665',
    name: 'M665',
    description: 'SCARA Configuration',
    details: {
      description: 'Configure SCARA geometry values ',
      url: 'https://marlinfw.org/docs/gcode/M665-scara.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<theta-pi-offset>]',
        hint: 'Theta-Psi offset, alias for P',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<theta-offset>]',
        hint: 'Theta offset, alias for T',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<theta-pi-offset>]',
        hint: 'Theta-Psi offset, added to the shoulder (A/X) angle',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<segments-per-second>]',
        hint: 'Segments per second',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<theta-offset>]',
        hint: 'Theta offset, added to the elbow (B/Y) angle',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<theta-pi-offset>]',
        hint: 'Theta-Psi offset, alias for P',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<theta-offset>]',
        hint: 'Theta offset, alias for T',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M666',
    name: 'M666',
    description: 'Set dual endstop offsets',
    details: {
      description: 'Use the M666 command to adjust the offsets for dual (or multiple) endstops. ',
      url: 'https://marlinfw.org/docs/gcode/M666-dual.html',
    },
    params: [
      {
        name: 'X',
        label: '[X<adj>]',
        hint: 'Offset for the X axis endstops',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<adj>]',
        hint: 'Offset for the Y axis endstops',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<adj>]',
        hint: 'Offset for the Z axis endstops',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M672',
    name: 'M672',
    description: 'Duet Smart Effector sensitivity',
    details: {
      description: 'Set or reset Duet Smart Effector sensitivity. ',
      notes:
        'In addition to the DUET_SMART_EFFECTOR option, a defined SMART_EFFECTOR_MOD_PIN is also required. The format of M672 in Marlin differs from Duet Smart Effector documentation. Use only one of the two parameters (S or R). ',
      url: 'https://marlinfw.org/docs/gcode/M672.html',
    },
    params: [
      {
        name: 'R',
        label: '[R<bool>]',
        hint: 'Revert sensitivity to factory settings',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<sensitivity>]',
        hint: 'Set sensitivity (0-255)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M701',
    name: 'M701',
    description: 'Load filament',
    details: {
      description:
        'Load filament into the active extruder. By default this will use the configured ADVANCED_PAUSE_FEATURE settings. ',
      notes:
        'Enabled using FILAMENT_LOAD_UNLOAD_GCODES. Uses the minimum temperature for safe extrusion as set by M302. ',
      url: 'https://marlinfw.org/docs/gcode/M701.html',
    },
    params: [
      {
        name: '<',
        label: 'L<distance>',
        hint: 'Extrude distance for insertion (positive value) (manual reload)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<extruder>]',
        hint: 'Optional extruder index. Current extruder if omitted.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<distance>]',
        hint: 'Move the Z axis by this distance',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M702',
    name: 'M702',
    description: 'Unload filament',
    details: {
      description: 'Unload filament. By default this command will use the configured ADVANCED_PAUSE_FEATURE settings. ',
      notes:
        'Enabled using FILAMENT_LOAD_UNLOAD_GCODES. Uses the minimum temperature for safe extrusion as set by M302. ',
      url: 'https://marlinfw.org/docs/gcode/M702.html',
    },
    params: [
      {
        name: 'T',
        label: '[T<extruder>]',
        hint: 'Optional extruder number. If omitted, current extruder (or ALL extruders with FILAMENT_UNLOAD_ALL_EXTRUDERS).',
        value: 0,
      },
      {
        name: '<',
        label: 'U<distance>',
        hint: 'Retract distance for removal (manual reload)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<distance>]',
        hint: 'Move the Z axis by this distance',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M710',
    name: 'M710',
    description: 'Controller Fan settings',
    details: {
      description: 'Set one or more Controller Fan options. Without any parameters report the current settings. ',
      url: 'https://marlinfw.org/docs/gcode/M710.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<bool>]',
        hint: 'Set whether the fan speed is set automatically. When turned off the controller fan speed will remain where it is.',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<seconds>]',
        hint: 'Set the extra duration to keep the fan speed high after motors are turned off.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<speed>]',
        hint: 'Set the speed of the controller fan when motors are off.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<bool>]',
        hint: 'Reset all settings to defaults. Other parameters can be included to override.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<speed>]',
        hint: 'Set the speed of the controller fan when motors are active.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M808',
    name: 'M808',
    description: 'Repeat Marker',
    details: {
      description:
        'The Repeat Marker command is used to define regions of a G-code file that will be repeated during SD printing. A marker is first set with M808 L[count], and later in the file a plain M808 command is used count down and loop. (By default up to 10 start markers can be nested.) In slicer software put M808 L to the “Start G-code” and M808 to the “End G-code.” But this command is not the only requirement. Before starting each whole object it’s important to actually clear the print area of obstacles and to reset the coordinate system with G92 or G28, so this command is best used with belt printers or other systems with automatic print removal. ',
      notes: 'At this time repeat markers only apply during SD printing. ',
      url: 'https://marlinfw.org/docs/gcode/M808.html',
    },
    params: [
      {
        name: 'L',
        label: '[L<count>]',
        hint: 'Loop counter. Use L or L0 for an infinite loop.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M810-M819',
    name: 'M810-M819',
    description: 'G-code macros',
    details: {
      description:
        'Use the M810-M819 commands to set and execute 10 distinct G-code “macros.” Put anything after the command to define its macro. To run the macro just send M810-M819 by itself. Multiple commands in one macro are separated by the pipe character (‘|’). ',
      notes: 'Requires GCODE_MACROS. ',
      url: 'https://marlinfw.org/docs/gcode/M810-M819.html',
    },
    params: [
      {
        name: 's',
        label: '[string]',
        hint: 'Set Macro to the given commands, separated by the pipe character.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M860-M869',
    name: 'M860-M869',
    description: 'I2C Position Encoders',
    details: {
      description:
        ' M860 - Report the position(s) of position encoder module(s). M861 - Report the status of position encoder modules. M862 - Perform an axis continuity test for position encoder modules. M863 - Perform steps-per-mm calibration for position encoder modules. M864 - Change position encoder module I2C address. M865 - Check position encoder module firmware version. M866 - Report or reset position encoder module error count. M867 - Enable/disable or toggle error correction for position encoder modules. M868 - Report or set position encoder module error correction threshold. M869 - Report position encoder module error.  I2C position encoders for closed loop control. Developed by Chris Barr at Aus3D. Wiki: https://wiki.aus3d.com.au/Magnetic_Encoder Github: https://github.com/Aus3D/MagneticEncoder ',
      notes: 'Requires I2C_POSITION_ENCODERS. See this wiki article for more info. ',
      url: 'https://marlinfw.org/docs/gcode/M860-M869.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<axis>]',
        hint: 'Report on E axis encoder if present. (If A or I not specified)',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]',
        hint: 'Module index. [0, I2CPE_ENCODER_CNT - 1]',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<bool>]',
        hint: 'Include homed zero-offset in returned position',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<int>]',
        hint: 'Number of rePeats/iterations. (for M863 only)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<bool>]',
        hint: 'Reset error counter. (for M866 only)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<addr>]',
        hint: 'Module new I2C address. [30, 200]. (for M864 only)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<bool>]',
        hint: 'Enable/disable error correction. 1 enables, 0 disables. If not supplied, toggle. (for M867 only)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<float>]',
        hint: 'New error correction threshold. (for M868 only)',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<bool>]',
        hint: 'Units in mm or raw step count. (for M860 only)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<axis>]',
        hint: 'Report on X axis encoder if present. (If A or I not specified)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<axis>]',
        hint: 'Report on Y axis encoder if present. (If A or I not specified)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<axis>]',
        hint: 'Report on Z axis encoder if present. (If A or I not specified)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M871',
    name: 'M871',
    description: 'Настройка температуры датчика',
    details: {
      description:
        'Read/write probe temperature compensation values. Values for bed and/or probe can be calibrated using the G76 command. ',
      notes:
        'Requires PROBE_TEMP_COMPENSATION. Values at index zero are constant (zero). Compensation values are stored in µm (micrometers). Use M500 to save the values to EEPROM. ',
      url: 'https://marlinfw.org/docs/gcode/M871.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<flag>]',
        hint: 'Store the value V as the Z adjustment at index I for the Bed.',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<flag>]',
        hint: 'Store the value V as the Z adjustment at index I for the Extruder.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<flag>]',
        hint: 'Index at which to store the given Z adjustment value.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<flag>]',
        hint: 'Store the value V as the Z adjustment at index I for the Probe.',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<flag>]',
        hint: 'Reset all Z adjustment values to factory defaults (zero).',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<µm>]',
        hint: 'Z adjustment value, in micrometers.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M876',
    name: 'M876',
    description: 'Handle Prompt Response',
    details: {
      description:
        'Handle responses from the host, such as:  Filament runout responses: Purge More, Continue General “Continue” response Resume Print response Dismissal of info  ',
      notes: 'When EMERGENCY_PARSER is enabled the M876 command is handled as soon as the command arrives. ',
      url: 'https://marlinfw.org/docs/gcode/M876.html',
    },
    params: [
      {
        name: '<',
        label: 'S<response>',
        hint: 'Response to prompt',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M900',
    name: 'M900',
    description: 'Linear Advance Factor',
    details: {
      description:
        'This command sets and/or reports the Linear Advance K factors. Setting the K factor to 0 disables Linear Advance. With the EXTRA_LIN_ADVANCE_K option Marlin maintains two slots for each extruder. The first slot is set with K and the second slot is set with L, then select the first using S0 and the second using S1. ',
      notes: 'See Linear Advance for details on how to determine the K factor and a link to our calibration tool. ',
      url: 'https://marlinfw.org/docs/gcode/M900.html',
    },
    params: [
      {
        name: 'K',
        label: '[K<kfactor>]',
        hint: 'The K factor to set for the specified extruder. Unchanged if omitted. Set this value higher for more flexible filament or a longer filament path. With EXTRA_LIN_ADVANCE_K this sets the primary K factor. Note that this factor may be inactive and won’t take effect until the next M900 S0.',
        value: 0,
      },
      {
        name: 'L',
        label:
          '[L<kfactor>]2.0.0SetthesecondKfactorforthespecifiedextruder.RequiresEXTRA_LIN_ADVANCE_K.Notethatthisfactormaybeinactiveandwon’ttakeeffectuntilthenextM900S1.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<slot>]2.0.0Selectslotandactivatethelaststoredvalue.RequiresEXTRA_LIN_ADVANCE_K.',
        hint: '',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]2.0.0ExtrudertowhichK,L,andSwillapply.RequiresEXTRA_LIN_ADVANCE_K.',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M906',
    name: 'M906',
    description: 'Stepper Motor Current',
    details: {
      description: 'Set stepper motor currents in milliamps units. ',
      notes: 'Requires one or more compatible Trinamic or L64xx stepper drivers. ',
      url: 'https://marlinfw.org/docs/gcode/M906.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<mA>]',
        hint: 'Current for the E0 stepper',
        value: 0,
      },
      {
        name: '<',
        label: 'I<index>1.1.9Indexformultiplesteppers.(i.e.,I1forX2,Y2,Z2;I2forZ3;I3forZ4).',
        hint: '',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]1.1.9Index(tool)numberfortheEaxis.Ifnotspecified,theE0extruder.',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<mA>]',
        hint: 'Current for the X stepper',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<mA>]',
        hint: 'Current for the Y stepper',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<mA>]',
        hint: 'Current for the Z stepper',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M907',
    name: 'M907',
    description: 'Set Motor Current',
    details: {
      description:
        'Set digital trimpot motor current using axis codes X, Y, Z, E, plus B and S. The unit used for current depends on the type of stepper driver. ',
      url: 'https://marlinfw.org/docs/gcode/M907.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<current>]',
        hint: 'Current for the E1 stepper (Requires DIGIPOTSS_PIN or DIGIPOT_I2C)',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<current>]',
        hint: 'Current for the E2 stepper (Requires DIGIPOT_I2C)',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<current>]',
        hint: 'Current for the E3 stepper (Requires DIGIPOT_I2C)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<current>]',
        hint: 'Current for the E0 stepper',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<current>]',
        hint: 'Set this current on all steppers (Requires DIGIPOTSS_PIN or DAC_STEPPER_CURRENT)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<current>]',
        hint: 'Current for the X stepper (and the Y stepper with MOTOR_CURRENT_PWM_XY)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<current>]',
        hint: 'Current for the Y stepper (Use X with MOTOR_CURRENT_PWM_XY)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<current>]',
        hint: 'Current for the Z stepper',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M908',
    name: 'M908',
    description: 'Set Trimpot Pins',
    details: {
      description:
        'Set the digital trimpot current directly by address/channel/pin index. DAC_STEPPER_CURRENT pertains to the MCP4728. ',
      notes: 'Requires DAC_STEPPER_CURRENT or DIGIPOTSS_PIN. ',
      url: 'https://marlinfw.org/docs/gcode/M908.html',
    },
    params: [
      {
        name: '<',
        label: 'P<address>',
        hint: 'Pin (i.e., Address, Channel)',
        value: 0,
      },
      {
        name: '<',
        label: 'S<current>',
        hint: 'Current value',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M909',
    name: 'M909',
    description: 'DAC Print Values',
    details: {
      description: 'Print the DAC stepper current values in the format “% (Amps)”. ',
      notes: 'Requires DAC_STEPPER_CURRENT. ',
      url: 'https://marlinfw.org/docs/gcode/M909.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M910',
    name: 'M910',
    description: 'Commit DAC to EEPROM',
    details: {
      description: 'Commit digipot/DAC value to external EEPROM via I2C. ',
      notes: 'Requires DAC_STEPPER_CURRENT. ',
      url: 'https://marlinfw.org/docs/gcode/M910.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M911',
    name: 'M911',
    description: 'TMC OT Pre-Warn Condition',
    details: {
      description: 'Report the TMC stepper driver overtemperature pre-warn condition to the host. ',
      notes: 'Requires one or more TMC stepper drivers. ',
      url: 'https://marlinfw.org/docs/gcode/M911.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M912',
    name: 'M912',
    description: 'Clear TMC OT Pre-Warn',
    details: {
      description: 'Clear the stepper driver overtemperature pre-warn condition flag. ',
      notes: 'Requires one or more TMC stepper drivers. ',
      url: 'https://marlinfw.org/docs/gcode/M912.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<-|0-4>]',
        hint: 'Clear all or one E stepper driver Over Temperature Pre-warn flag.   E-: All E.   E0-4: E index.',
        value: 0,
      },
      {
        name: 'I',
        label:
          '[I<0|1|2|3>]1.1.9Steppernumbertoset.Ifomitted,allspecifiedaxes.I0:Both.I1:Base(X,Y,Z)steppers.I2:Second(X2,Y2,Z2)steppers.I3:Third(Z3)steppers.',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Clear X and/or X2 stepper driver Over Temperature Pre-warn flag.  ',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Clear Y and/or Y2 stepper driver Over Temperature Pre-warn flag.  ',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Clear Z and/or Z2 and/or Z3 stepper driver Over Temperature Pre-warn flag.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M913',
    name: 'M913',
    description: 'Set Hybrid Threshold Speed',
    details: {
      description:
        'When HYBRID_THRESHOLD is enabled, the TMC driver is switched from the quieter StealthChop to spreadCycle when the feed rate for a given stepper motor is over its _HYBRID_THRESHOLD. ',
      notes:
        'At least one parameter must be used. Setting X, Y, Z, or E will set the hybrid threshold for all motors that fall under that category that have the _IS_TRINAMIC flag set. See examples below. ',
      url: 'https://marlinfw.org/docs/gcode/M913.html',
    },
    params: [
      {
        name: 'E',
        label: '[E]',
        hint: 'Set Hybrid Threshold for E to the given value.  ',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]1.1.9Indexformultiplesteppers.(i.e.,I1forX2,Y2,Z2;I2forZ3;I3forZ4).',
        hint: '',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]1.1.9Index(tool)numberfortheEaxis.Ifnotspecified,theE0extruder.',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Set Hybrid Threshold for X to the given value.  ',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Set Hybrid Threshold for Y to the given value.  ',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Set Hybrid Threshold for Z to the given value.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M914',
    name: 'M914',
    description: 'TMC Bump Sensitivity',
    details: {
      description:
        'Some TMC stepper drivers can detect when they bump into something that causes them to stop moving. This feature is so sensitive that it can actually take the place of traditional endstops. Use this command to set the bump sensitivity for the X, Y, and Z stepper drivers. ',
      notes:
        'Set all *_HOME_BUMP_MM values to 0 for best results. Set the default stall thresholds with *_STALL_SENSITIVITY. Compatible with TMC2130 and TMC2209.    Sensitivity TMC2209 Others     LOWEST 0 +63   HIGHEST 255 -64    High sensitivity may produce false positives. Low sensitivity may fail to trigger. ',
      url: 'https://marlinfw.org/docs/gcode/M914.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<index>]1.1.9Indexformultiplesteppers.(i.e.,I1forX2,Y2,Z2;I2forZ3;I3forZ4).',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<int>]',
        hint: 'Sensitivity of the X stepper driver.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<int>]',
        hint: 'Sensitivity of the Y stepper driver.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<int>]',
        hint: 'Sensitivity of the Z stepper driver.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M915',
    name: 'M915',
    description: 'TMC Z axis calibration',
    details: {
      description:
        'The command aims to align the ends of the X gantry (for a Průša i3-style printer). See the video demonstration below. Using the given current, Marlin will move the Z axis (at homing speed) to the top plus a given extra distance. Since this intentionally stalls the Z steppers, you should use the minimum current required to move the axis. Z is then re-homed to correct the position. ',
      notes:
        'This command is deprecated. Use G34 (Z_STEPPER_AUTO_ALIGN or MECHANICAL_GANTRY_CALIBRATION) instead. Requires TMC_Z_CALIBRATION and at least one TMC driver for Z axis. If Z_DUAL_STEPPER_DRIVERS is used, both should be TMC drivers. ',
      url: 'https://marlinfw.org/docs/gcode/M915.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<mA>]',
        hint: 'Current value to use for the raise move. (Default: CALIBRATION_CURRENT)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<linear>]',
        hint: 'Extra distance past Z_MAX_POS to move the Z axis. (Default: CALIBRATION_EXTRA_HEIGHT)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M916',
    name: 'M916',
    description: 'L6474 Thermal Warning Test',
    details: {
      description:
        'M916: increase KVAL_HOLD until thermal warning. This routine is also useful for determining the approximate KVAL_HOLD where the stepper stops losing steps. The sound will get noticeably quieter as it stops losing steps. ',
      notes:
        'Requires MONITOR_L6470_DRIVER_STATUS. All tests assume each axis uses matching driver chips. On the L6474 the TVAL is used instead of KVAL. ',
      url: 'https://marlinfw.org/docs/gcode/M916.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<second>]',
        hint: 'Time (in seconds) to run each setting of KVAL_HOLD/TVAL. (Default zero, to run each setting once.)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<mm>]',
        hint: 'Monitor E with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<feedrate>]',
        hint: 'Feedrate for the moves. (Default max feedrate if unspecified.)',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<0|1|2|3|4|5|6|7>]',
        hint: 'Select which driver(s) to monitor on multi-driver axis   J0: (default) Monitor all drivers on the axis   J1: Monitor only X, Y, Z, E1   J2: Monitor only X2, Y2, Z2, E2   J3: Monitor only Z3, E3   J4: Monitor only Z4, E4   J5: Monitor only Z5, E5   J6: Monitor only Z6, E6   J7: Monitor only Z7, E7',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<Kvalue>]',
        hint: 'Value for KVAL_HOLD (0 - 255) (ignored for L6474). If unspecified, report current value from driver.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<current>]',
        hint: 'Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. If unspecified, report current value from driver.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<mm>]',
        hint: 'Monitor X with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<mm>]',
        hint: 'Monitor Y with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<mm>]',
        hint: 'Monitor Z with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M917',
    name: 'M917',
    description: 'L6474 Overcurrent Warning Test',
    details: {
      description:
        'The M917 command runs a test procedure to find the minimum stepper current thresholds.  Decrease OCD current until overcurrent error Increase OCD until overcurrent error goes away Decrease stall threshold until stall (not done on L6474) Increase stall until stall error goes away (not done on L6474)  ',
      notes: 'Requires MONITOR_L6470_DRIVER_STATUS. All tests assume each axis uses matching driver chips. ',
      url: 'https://marlinfw.org/docs/gcode/M917.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<mm>]',
        hint: 'Monitor E with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<feedrate>]',
        hint: 'Feedrate for the moves. If unspecified, uses the max feedrate.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<current>]',
        hint: 'Starting overcurrent threshold. Report current value from driver if not specified. If there are multiple drivers on the axis then all will be set the same.',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<0|1|2|3|4|5|6|7>]',
        hint: 'Select which driver(s) to monitor on multi-driver axis.   J0: (default) Monitor all drivers on the axis or E0.   J1: Monitor only X, Y, Z, E1.   J2: Monitor only X2, Y2, Z2, E2.   J3: Monitor only Z3, E3   J4: Monitor only Z4, E4   J5: Monitor only Z5, E5   J6: Monitor only Z6, E6   J7: Monitor only Z7, E7',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<Kvalue>]',
        hint: 'Value for KVAL_HOLD (0 - 255) (ignored for L6474). Report current value from driver if not specified',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<current>]',
        hint: 'Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. Report current value from driver if not specified.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<mm>]',
        hint: 'Monitor X with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<mm>]',
        hint: 'Monitor Y with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<mm>]',
        hint: 'Monitor Z with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M918',
    name: 'M918',
    description: 'L6474 Speed Warning Test',
    details: {
      description: 'M918: Increase speed until error or max feedrate achieved. ',
      notes: 'Requires MONITOR_L6470_DRIVER_STATUS. All tests assume each axis uses matching driver chips. ',
      url: 'https://marlinfw.org/docs/gcode/M918.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<mm>]',
        hint: 'Monitor E with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<current>]',
        hint: 'Overcurrent threshold. Report current value from driver if not specified.',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<0|1|2|3|4|5|6|7>]',
        hint: 'Select which driver(s) to monitor on a multi-driver axis.   J0: (default) Monitor all drivers on the axis or E0   J1: Monitor only X, Y, Z, E1   J2: Monitor only X2, Y2, Z2, E2   J3: Monitor only Z3, E3   J4: Monitor only Z4, E4   J5: Monitor only Z5, E5   J6: Monitor only Z6, E6   J7: Monitor only Z7, E7',
        value: 0,
      },
      {
        name: 'K',
        label: '[K<Kvalue>]',
        hint: 'Value for KVAL_HOLD (0 - 255) (ignored for L6474). Report current value from driver if not specified.',
        value: 0,
      },
      {
        name: 'M',
        label: '[M<microsteps>]',
        hint: 'Value for microsteps (1 - 128). Report current value from driver if not specified.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<current>]',
        hint: 'Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. Report current value from driver if not specified.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<mm>]',
        hint: 'Monitor X with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<mm>]',
        hint: 'Monitor Y with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<mm>]',
        hint: 'Monitor Z with the given displacement (1 - 255mm) on either side of the current position.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M919',
    name: 'M919',
    description: 'TMC Chopper Timing',
    details: {
      description: 'Set / report the TMC Chopper Timing values for one or more stepper drivers. ',
      notes: 'Requires one or more TMC stepper drivers supporting stealthChop™ mode. ',
      url: 'https://marlinfw.org/docs/gcode/M919.html',
    },
    params: [
      {
        name: 'A',
        label: '[A]I_DRIVER_TYPEApplythegivenchoppertimingtotheAstepper.(Requires4ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'B',
        label: '[B]J_DRIVER_TYPEApplythegivenchoppertimingtotheBstepper.(Requires5ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'C',
        label: '[C]K_DRIVER_TYPEApplythegivenchoppertimingtotheCstepper.(Requires6ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]',
        hint: 'Index for multiple steppers. (i.e., I1 for X2, Y2, Z2; I2 for Z3; I3 for Z4). If omitted, all steppers for the selected axes.',
        value: 0,
      },
      {
        name: 'O',
        label: '[O<int>]',
        hint: 'Time-Off value (1..15). If omitted, use configured defaults for the axes.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<int>]',
        hint: 'Hysteresis End value (-3..12). If omitted, use configured defaults for the axes.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<int>]',
        hint: 'Hysteresis Start value (1..8). If omitted, use configured defaults for the axes.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Index (tool) number for the E axis. If omitted, all extruders.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U]2.1U_DRIVER_TYPEApplythegivenchoppertimingtotheUstepper.(Requires7ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'V',
        label: '[V]2.1V_DRIVER_TYPEApplythegivenchoppertimingtotheVstepper.(Requires8ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'W',
        label: '[W]2.1W_DRIVER_TYPEApplythegivenchoppertimingtotheWstepper.(Requires9axes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Apply the given chopper timing to the X stepper(s).',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]Y_DRIVER_TYPEApplythegivenchoppertimingtotheYstepper(s).(Requires2ormoreaxes.)',
        hint: '',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]Z_DRIVER_TYPEApplythegivenchoppertimingtotheZstepper(s).(Requires3ormoreaxes.)',
        hint: '',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M928',
    name: 'M928',
    description: 'Start SD Logging',
    details: {
      description:
        'Use this command to start logging all console and host input to an SD file while still operating the machine. ',
      notes: 'Stop logging with M29. ',
      url: 'https://marlinfw.org/docs/gcode/M928.html',
    },
    params: [
      {
        name: 'i',
        label: 'filename',
        hint: 'File name of log file  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M951',
    name: 'M951',
    description: 'Magnetic Parking Extruder',
    details: {
      description: 'Set MAGNETIC_PARKING_EXTRUDER settings. With no parameters, report the current settings. ',
      notes: 'Requires MAGNETIC_PARKING_EXTRUDER. ',
      url: 'https://marlinfw.org/docs/gcode/M951.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<float>]',
        hint: 'Set compensation factor. (Default MPE_COMPENSATION)',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<linear>]',
        hint: 'Set travel feedrate. (Default MPE_TRAVEL_DISTANCE)',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<linear>]',
        hint: 'Set fast feedrate. (Default MPE_FAST_SPEED)',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<linear>]',
        hint: 'Set grab distance. (Default PARKING_EXTRUDER_GRAB_DISTANCE)',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<linear>]',
        hint: 'Set slow feedrate. (Default MPE_SLOW_SPEED)',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<linear>]',
        hint: 'Set X[0] position. (Default PARKING_EXTRUDER_PARKING_X)',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<linear>]',
        hint: 'Set X[1] position. (Default PARKING_EXTRUDER_PARKING_X)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M993-M994',
    name: 'M993-M994',
    description: 'SD / SPI Flash',
    details: {
      description: 'M993: backup SPI Flash to SD M994: load a backup from SD to SPI Flash ',
      notes: 'Requires HAS_SPI_FLASH, SDSUPPORT, and MARLIN_DEV_MODE. ',
      url: 'https://marlinfw.org/docs/gcode/M993.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M995',
    name: 'M995',
    description: 'Touch Screen Calibration',
    details: {
      description: 'Trigger touch screen calibration menu on display ',
      notes: 'Requires touch screen display and TOUCH_SCREEN_CALIBRATION ',
      url: 'https://marlinfw.org/docs/gcode/M995.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M997',
    name: 'M997',
    description: 'Firmware update',
    details: {
      description:
        'Can be used to trigger a firmware update from the SD card after the firmware binary has been uploaded remotely. ',
      notes:
        'M997 is not supported by all platforms! The following platforms will restart to trigger the update via bootloader:  LPC176x STM32 STM32F1  ',
      url: 'https://marlinfw.org/docs/gcode/M997.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M999',
    name: 'M999',
    description: 'STOP Restart',
    details: {
      description:
        'If a STOP occurs you can use M999 to restart the “stopped” machine after resolving the issue. Marlin will call STOP if any error occurs that would make continuing the current process problematic. For example, if the probe fails to deploy, it will abort probing and STOP. Note that this disables all heaters. ',
      url: 'https://marlinfw.org/docs/gcode/M999.html',
    },
    params: [
      {
        name: '<',
        label: 'S<bool>',
        hint: 'Resume without flushing the command buffer. The default behavior is to flush the serial buffer and request a resend to the host starting on the last N line received.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M7219',
    name: 'M7219',
    description: 'MAX7219 Control',
    details: {
      description: 'Set the state of one or more Max7219 matrix displays or 7-segment digital displays. ',
      notes: 'Requires MAX7219_DEBUG. ',
      url: 'https://marlinfw.org/docs/gcode/M7219.html',
    },
    params: [
      {
        name: 'C',
        label: '[C<column>]',
        hint: 'Set the column specified by C to bit pattern V.',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<row>]',
        hint: 'Directly set a Max7219 native row (on the unit specified by U) to the 8-bit pattern V.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F]',
        hint: 'Fill the matrix by turning on all LEDs.  ',
        value: 0,
      },
      {
        name: 'I',
        label: '[I]',
        hint: 'Initialize (clear) all matrixes.  ',
        value: 0,
      },
      {
        name: 'P',
        label: '[P]',
        hint: 'Print the LED array state for debugging.  ',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<row>]',
        hint: 'Set the row specified by R to bit pattern V.',
        value: 0,
      },
      {
        name: 'U',
        label: '[U<index>]',
        hint: 'Used with D to specify which matrix unit to set.',
        value: 0,
      },
      {
        name: 'V',
        label: '[V<bits>]',
        hint: 'Value to apply when using the C, R, or X/Y parameters.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<index>]',
        hint: 'Set a matrix LED at the given X position to the V value. If no V is given, toggle the LED state.',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<index>]',
        hint: 'Set a matrix LED at the given Y position to the V value. If no V is given, toggle the LED state.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'T0-T6',
    name: 'T0-T6',
    description: 'Select Tool',
    details: {
      description:
        'T0, T1, etc. switches to the respective physical/virtual tool head. See Universal Tool Change Settings in Configuration_adv.h for more details. ',
      url: 'https://marlinfw.org/docs/gcode/T001-T002.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M107',
    name: 'M107',
    description: 'Fan Off',
    details: {
      description: 'Turn off one of the fans. If no fan index is given, the print cooling fan. ',
      notes: 'Turn on fans with M106. ',
      url: 'https://marlinfw.org/docs/gcode/M107.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<index>]',
        hint: 'Fan index',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M109',
    name: 'M109',
    description: 'Wait for Hotend Temperature',
    details: {
      description:
        'This command optionally sets a new target hot end temperature and waits for the target temperature to be reached before proceeding. If the temperature is set with S then M109 waits only when heating. If the temperature is set with R then M109 will also wait for the temperature to go down. ',
      notes:
        'With PRINTJOB_TIMER_AUTOSTART this command will start the print job if heating, and stop the print job timer if the temperature is set at or below half of EXTRUDE_MINTEMP. This command (as well as M190) can block new commands from the host, preventing remote shutdown. However, if EMERGENCY_PARSER is enabled, a host can send M108 to break out of the wait loop. To set the hot end temperature and proceed without waiting, use M104. ',
      url: 'https://marlinfw.org/docs/gcode/M109.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<temp>]',
        hint: 'With AUTOTEMP, the max auto-temperature.',
        value: 0,
      },
      {
        name: 'F',
        label: '[F<flag>]',
        hint: 'Autotemp flag. Omit to disable autotemp.',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<index>]2.0.6Materialpresetindex.OverridesS.',
        hint: '',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Target temperature (wait for cooling or heating).',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature (wait only when heating). Also AUTOTEMP: The min auto-temperature.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Hotend index. If omitted, the currently active hotend will be used.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M111',
    name: 'M111',
    description: 'Debug Level',
    details: {
      description:
        'Marlin has several debug bits that can be set, in combination, to help configure, troubleshoot, and debug the firmware. Add up the debug bits you need:    Mask Name  1 ECHO Echo all commands sent to the parser.   2 INFO Print extra informational messages.   4 ERRORS Print extra error messages.   8 DRYRUN Don’t extrude, don’t save leveling data, etc.   16 COMMUNICATION Not currently used.   32 LEVELING Detailed messages for homing, probing, and leveling. (Requires DEBUG_LEVELING_FEATURE.)   64 Reserved Reserved for future usage   128 Reserved Reserved for future usage    ',
      url: 'https://marlinfw.org/docs/gcode/M111.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<flags>]',
        hint: 'Debug flag bits',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M113',
    name: 'M113',
    description: 'Host Keepalive',
    details: {
      description:
        'During some lengthy processes, such as G29, Marlin may appear to the host to have “gone away.” The “host keepalive” feature will send messages to the host when Marlin is busy or waiting for user response so the host won’t try to reconnect. Send M113 with no S parameter to get the current setting. ',
      notes: 'Requires HOST_KEEPALIVE_FEATURE. ',
      url: 'https://marlinfw.org/docs/gcode/M113.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Keepalive interval (0-60).',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M115',
    name: 'M115',
    description: 'Firmware Info',
    details: {
      description:
        'This command causes Marlin to output a string like this: FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff\n When EXTENDED_CAPABILITIES_REPORT is enabled, Marlin also reports its capabilities: Cap:EEPROM:1\nCap:AUTOREPORT_TEMP:1\nCap:PROGRESS:0\nCap:AUTOLEVEL:1\nCap:Z_PROBE:1\nCap:SOFTWARE_POWER:0\nCap:TOGGLE_LIGHTS:0\nCap:EMERGENCY_PARSER:1\n Hosts use this information to improve interoperability, so it’s a good feature to enable. With EXTENDED_CAPABILITIES_REPORT and M115_GEOMETRY_REPORT enabled, Marlin will also report detailed printer geometry: area:{full:{min:{x:0,y:0,z:0,i:0,j:0,k:0,u:0,v:0,w:0},max:{x:200,y:200,z:200,i:0,j:0,k:0,u:0,v:0,w:0}},work:{min:{x:0,y:0,z:0,i:0,j:0,k:0},max:{x:200,y:200,z:200,i:0,j:0,k:0,u:0,v:0,w:0}}}\n Coordinates are only reported for declared linear axes. So for a classic cartesian printer, the geometry report will look like: area:{full:{min:{x:0,y:0,z:0},max:{x:200,y:200,z:200}},work:{min:{x:0,y:0,z:0},max:{x:200,y:200,z:200}}}\n ',
      url: 'https://marlinfw.org/docs/gcode/M115.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M118',
    name: 'M118',
    description: 'Serial print',
    details: {
      description: 'Send a message to the connected host for display in the host console or to perform a host action. ',
      notes: 'The E, A, and P parameters must precede the message. Can also send message to serial port. ',
      url: 'https://marlinfw.org/docs/gcode/M118.html',
    },
    params: [
      {
        name: 'A',
        label: '[A1]',
        hint: 'Prepend //  to denote a comment or action command. Hosts like OctoPrint can interpret such commands to perform special actions. See your host’s documentation.  ',
        value: 0,
      },
      {
        name: 'E',
        label: '[E1]',
        hint: 'Prepend echo: to the message. Some hosts will display echo messages differently when preceded by echo:.  ',
        value: 0,
      },
      {
        name: 'P',
        label: '[Pn<0|1|2>]',
        hint: 'Send message to host serial port (1-9).   Pn0: Send message to all ports.   Pn1: Send message to main host serial port.   Pn2: Send message to secondary host serial port. Requires SERIAL_PORT_2.',
        value: 0,
      },
      {
        name: 's',
        label: '[string]',
        hint: 'Message string. If omitted, a blank line will be sent.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M120',
    name: 'M120',
    description: 'Enable Endstops',
    details: {
      description: 'Enable endstops. ',
      notes:
        'After this command endstops will be kept enabled when not homing. This may have side-effects if using SD_ABORT_ON_ENDSTOP_HIT. ',
      url: 'https://marlinfw.org/docs/gcode/M120.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M122',
    name: 'M122',
    description: 'TMC Debugging',
    details: {
      description:
        'Do a communication check for configured TMC drivers. Trinamic drivers that support this feature are TMC2130, TMC2160, TMC2208, TMC2209, TMC2660, TMC5130, and TMC5160.  With no parameters, this command returns the current settings for all installed and supported Trinamic stepper drivers. Send M122 I to re-initialize drivers after a late power-on. Use S[0|1] to enable/disable continuous debugging output.  ',
      notes:
        'TMC_DEBUG is no longer required to enable this G-code in Marlin 2.x, but enabling it produces an extended report. Responses of all LOW (00:00:00:00) or all HIGH (FF:FF:FF:FF) are signs of a communication problem. See TMC Troubleshooting for further information. ',
      url: 'https://marlinfw.org/docs/gcode/M122.html',
    },
    params: [
      {
        name: 'E',
        label: '[E]',
        hint: 'Target E driver(s) only.  ',
        value: 0,
      },
      {
        name: 'I',
        label: '[I]2.0.6Flagtore-initializestepperdriverswithcurrentsettings.',
        value: 0,
      },
      {
        name: 'P',
        label: '[P<ms>]TMC_DEBUGMONITOR_DRIVER_STATUSIntervalbetweencontinuousdebugreports,inmilliseconds.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S]TMC_DEBUGMONITOR_DRIVER_STATUSFlagtoenable/disablecontinuousdebugreporting.',
        value: 0,
      },
      {
        name: 'V',
        label: '[V]TMC_DEBUGReportrawregisterdata.Refertothedatasheettodecipherthereport.',
        value: 0,
      },
      {
        name: 'X',
        label: '[X]',
        hint: 'Target X driver(s) only.  ',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y]',
        hint: 'Target Y driver(s) only.  ',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z]',
        hint: 'Target Z driver(s) only.  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M126',
    name: 'M126',
    description: 'Baricuda 1 Open',
    details: {
      description: 'Open the valve for Baricuda paste extruder 1. ',
      notes: 'Requires BARICUDA. ',
      url: 'https://marlinfw.org/docs/gcode/M126.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<pressure>]',
        hint: 'Valve pressure',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M128',
    name: 'M128',
    description: 'Baricuda 2 Open',
    details: {
      description: 'Open the valve for Baricuda paste extruder 2. ',
      notes: 'Requires BARICUDA. ',
      url: 'https://marlinfw.org/docs/gcode/M128.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<pressure>]',
        hint: 'Valve pressure',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M140',
    name: 'M140',
    description: 'Set Bed Temperature',
    details: {
      description:
        'Set a new target temperature for the heated bed and continue without waiting. The firmware manages heating in the background. Use M190 to wait for the bed to reach the target temperature. ',
      url: 'https://marlinfw.org/docs/gcode/M140.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<index>]2.0.6Materialpresetindex.OverridesS.',
        hint: '',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M143',
    name: 'M143',
    description: 'Set Laser Cooler Temperature',
    details: {
      description:
        'Set a cooler target temperature and continue without waiting. The firmware manages cooling in the background. Any value greater than the COOLER_MAXTEMP (set in Configuratin_adv.h) will be set to the COOLER_MAXTEMP value. Use M193 if you want to wait for the cooler to reach the target temperature. ',
      notes:
        'Configuration settings. COOLER_MINTEMP Provides a low end safe operating temperature, cannot be lower than 1°C. CO2 lasers tubes can be damaged with values less than 15°C. COOLER_MAXTEMP Provides a high end safe operating temperature, when breached the system will shutdown if THERMAL_PROTECTION_COOLER is defined. CO2 laser tube life degrades exponentially at temperatures above 24°C. COOLER_DEFAULT_TEMP LCD menu default value is 16°C. TEMP_COOLER_HYSTERESIS The accepatble temperature variance + or - to the target. COOLER_PIN Cooler on/off pin used to control power to the cooling element. COOLER_INVERTING Inverts the on value to 0. TEMP_COOLER_PIN Laser/Cooler temperature sensor pin. COOLER_FAN Enables a fan on the cooler. COOLER_FAN_INDEX Defines which fan to use 0,1,2 etc. COOLER_FAN_BASE Base cooler fan PWM (0-255); on when the cooler is enabled. COOLER_FAN_FACTOR PWM increase per °C above target. THERMAL_PROTECTION_COOLER Enables thermal shutdown protection. THERMAL_PROTECTION_COOLER_PERIOD Thermal protection check interval in seconds. THERMAL_PROTECTION_COOLER_HYSTERESIS Thermal variance +- limits check interval. WATCH_COOLER_TEMP_PERIOD Check interval in seconds before runaway condition shutdown. WATCH_COOLER_TEMP_INCREASE Allowable increase during check interval. ',
      url: 'https://marlinfw.org/docs/gcode/M143.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target laser coolant temperature.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M149',
    name: 'M149',
    description: 'Set Temperature Units',
    details: {
      description: 'Set temperature units to Celsius, Fahrenheit, or Kelvin. Celsius is the default. ',
      url: 'https://marlinfw.org/docs/gcode/M149.html',
    },
    params: [
      {
        name: 'C',
        label: '[C]',
        hint: 'Celsius  ',
        value: 0,
      },
      {
        name: 'F',
        label: '[F]',
        hint: 'Fahrenheit  ',
        value: 0,
      },
      {
        name: 'K',
        label: '[K]',
        hint: 'Kelvin  ',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M154',
    name: 'M154',
    description: 'Position Auto-Report',
    details: {
      description:
        'Some host software and serial controllers use M114 to get the current position, but polling with M114 is less than optimal, and in older versions of Marlin it would cause print stuttering. With M154 hosts can simply set an interval and Marlin will keep sending reports automatically. This method is preferred over polling with M114. ',
      notes:
        'Requires AUTO_REPORT_POSITION. Also enable EXTENDED_CAPABILITIES_REPORT to notify hosts about this capability. ',
      url: 'https://marlinfw.org/docs/gcode/M154.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<seconds>]',
        hint: 'Interval in seconds between auto-reports. S0 to disable.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M163',
    name: 'M163',
    description: 'Set Mix Factor',
    details: {
      description:
        'Set a single mix factor (in proportion to the sum total of all mix factors). The mix must be committed to a virtual tool by M164 before it takes effect. ',
      notes: 'Requires MIXING_EXTRUDER. ',
      url: 'https://marlinfw.org/docs/gcode/M163.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<factor>]',
        hint: 'Mix factor',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<index>]',
        hint: 'Component index',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M165',
    name: 'M165',
    description: 'Set Mix',
    details: {
      description:
        'Set the mix for the active virtual extruder all at once. Any factors left out are set to 0.0. This is based on a reference implementation by Pìa Taubert. ',
      notes: 'Requires MIXING_EXTRUDER and DIRECT_MIXING_IN_G1. ',
      url: 'https://marlinfw.org/docs/gcode/M165.html',
    },
    params: [
      {
        name: 'A',
        label: '[A<factor>]',
        hint: 'Mix factor 1',
        value: 0,
      },
      {
        name: 'B',
        label: '[B<factor>]',
        hint: 'Mix factor 2',
        value: 0,
      },
      {
        name: 'C',
        label: '[C<factor>]',
        hint: 'Mix factor 3',
        value: 0,
      },
      {
        name: 'D',
        label: '[D<factor>]',
        hint: 'Mix factor 4',
        value: 0,
      },
      {
        name: 'H',
        label: '[H<factor>]',
        hint: 'Mix factor 5',
        value: 0,
      },
      {
        name: 'I',
        label: '[I<factor>]',
        hint: 'Mix factor 6',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M190',
    name: 'M190',
    description: 'Wait for Bed Temperature',
    details: {
      description:
        'This command optionally sets a new target temperature for the heated bed and waits for the target temperature to be reached before proceeding. If the temperature is set with S then it waits only when heating. ',
      notes:
        'This command may block the command queue. Enable EMERGENCY_PARSER so that hosts can break in using M108. Use M140 to set the bed temperature and proceed without waiting. Requires one (1) of the parameters listed below. ',
      url: 'https://marlinfw.org/docs/gcode/M190.html',
    },
    params: [
      {
        name: 'I',
        label: '[I<index>]2.0.6Materialpresetindex.OverridesS.',
        hint: '',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Target temperature (wait for cooling or heating).',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature (wait only when heating).',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M191',
    name: 'M191',
    description: 'Wait for Chamber Temperature',
    details: {
      description:
        'This command optionally sets a new target chamber temperature and waits for the target temperature to be reached before proceeding. If the temperature is set with S then it waits only when heating. ',
      notes:
        'This command (as well as M109 and M190) can block new commands from the host. To break out of wait for temperature using M108 from the host, enable EMERGENCY_PARSER. Use M141 to set the chamber temperature and proceed without waiting. ',
      url: 'https://marlinfw.org/docs/gcode/M191.html',
    },
    params: [
      {
        name: 'R',
        label: '[R<temp>]',
        hint: 'Target temperature (wait for cooling or heating).',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target temperature (wait only when heating).',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M193',
    name: 'M193',
    description: 'Set Laser Cooler Temperature',
    details: {
      description:
        'M193 optionally sets the cooler target temperature and dwells until the cooler temperature is equal to or below the target. Any value greater than the COOLER_MAXTEMP (set in Configuratin_adv.h) will be set to the COOLER_MAXTEMP value. Use M143 if you want to set the target temperature without waiting or to turn the cooler off. ',
      notes:
        'This command may block the command queue. Enable EMERGENCY_PARSER so that hosts can break in using M108. Use M143 to set the cooler temperature and proceed without waiting. Configuration settings. COOLER_MINTEMP Provides a low end safe operating temperature, cannot be lower than 1°C. CO2 lasers tubes can be damaged with values less than 15°C. COOLER_MAXTEMP Provides a high end safe operating temperature, when breached the system will shutdown if THERMAL_PROTECTION_COOLER is defined. CO2 laser tube life degrades exponentially at temperatures above 24°C. COOLER_DEFAULT_TEMP LCD menu default value is 16°C. TEMP_COOLER_HYSTERESIS The accepatble temperature variance + or - to the target. COOLER_PIN Cooler on/off pin used to control power to the cooling element. COOLER_INVERTING Inverts the on value to 0. TEMP_COOLER_PIN Laser/Cooler temperature sensor pin. COOLER_FAN Enables a fan on the cooler. COOLER_FAN_INDEX Defines which fan to use 0,1,2 etc. COOLER_FAN_BASE Base cooler fan PWM (0-255); on when the cooler is enabled. COOLER_FAN_FACTOR PWM increase per °C above target. THERMAL_PROTECTION_COOLER Enables thermal shutdown protection. THERMAL_PROTECTION_COOLER_PERIOD Thermal protection check interval in seconds. THERMAL_PROTECTION_COOLER_HYSTERESIS Thermal variance +- limits check interval. WATCH_COOLER_TEMP_PERIOD Check interval in seconds before runaway condition shutdown. WATCH_COOLER_TEMP_INCREASE Allowable increase during check interval. ',
      url: 'https://marlinfw.org/docs/gcode/M193.html',
    },
    params: [
      {
        name: 'S',
        label: '[S<temp>]',
        hint: 'Target laser coolant temperature.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M200',
    name: 'M200',
    description: 'Set Filament Diameter',
    details: {
      description:
        'Set the filament’s current diameter and enable volumetric extrusion. In volumetric extrusion mode the E axis specifies cubic mm instead of linear mm, and the firmware calculates how much length to extrude for the given volume based on the filament diameter. ',
      url: 'https://marlinfw.org/docs/gcode/M200.html',
    },
    params: [
      {
        name: 'D',
        label: '[D<diameter>]',
        hint: 'Filament diameter',
        value: 0,
      },
      {
        name: 'L',
        label: '[L<volume>]',
        hint: 'Set volumetric extruder limit (in mm3/sec). L0 disables the limit. (Requires VOLUMETRIC_EXTRUDER_LIMIT.)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<flag>]',
        hint: '0 to disable volumetric extrusion mode, otherwise volumetric is enabled.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Extruder index. If omitted, the currently active extruder will be used.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M203',
    name: 'M203',
    description: 'Set Max Feedrate',
    details: {
      description: 'Set the max feedrate for one or more axes (in current units-per-second). ',
      notes:
        'View the current setting with M503. If EEPROM_SETTINGS is enabled, these are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M203.html',
    },
    params: [
      {
        name: 'E',
        label: '[E<units/s>]',
        hint: 'E axis max feedrate',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<index>]',
        hint: 'Target extruder (Requires DISTINCT_E_FACTORS)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<units/s>]',
        hint: 'X axis max feedrate',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<units/s>]',
        hint: 'Y axis max feedrate',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<units/s>]',
        hint: 'Z axis max feedrate',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M204',
    name: 'M204',
    description: 'Set Starting Acceleration',
    details: {
      description:
        'Set the preferred starting acceleration (in units/s/s) for moves of different types. Send M204 with no parameters to get current settings. ',
      notes:
        'View the current setting with M503. If EEPROM_SETTINGS is enabled, these are saved with M500, loaded with M501, and reset with M502. Legacy M204 S<accel> is deprecated. Use separate paremeters M204 P<accel> T<accel> instead. ',
      url: 'https://marlinfw.org/docs/gcode/M204.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<accel>]',
        hint: 'Printing acceleration. Used for moves that include extrusion (i.e., which employ the current tool).',
        value: 0,
      },
      {
        name: 'R',
        label: '[R<accel>]',
        hint: 'Retract acceleration. Used for extruder retract / recover moves.',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<accel>]',
        hint: 'Legacy parameter for move acceleration. Set both printing and travel acceleration.',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<accel>]',
        hint: 'Travel acceleration. Used for moves that include no extrusion.',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M205',
    name: 'M205',
    description: 'Set Advanced Settings',
    details: {
      description: 'Set various motion settings. See parameters for details. ',
      notes:
        'View the current setting with M503. If EEPROM_SETTINGS is enabled, these are saved with M500, loaded with M501, and reset with M502. ',
      url: 'https://marlinfw.org/docs/gcode/M205.html',
    },
    params: [
      {
        name: 'B',
        label: '[B<µs>]',
        hint: 'Minimum segment time (µs)',
        value: 0,
      },
      {
        name: 'E',
        label: '[E<jerk>]',
        hint: 'E max jerk (units/s)',
        value: 0,
      },
      {
        name: 'J',
        label: '[J<deviation>]',
        hint: 'Junction deviation (requires JUNCTION_DEVIATION)',
        value: 0,
      },
      {
        name: 'S',
        label: '[S<units/s>]',
        hint: 'Minimum feedrate for print moves (units/s)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<units/s>]',
        hint: 'Minimum feedrate for travel moves (units/s)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<jerk>]',
        hint: 'X max jerk (units/s)',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<jerk>]',
        hint: 'Y max jerk (units/s)',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<jerk>]',
        hint: 'Z max jerk (units/s)',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
  {
    id: 'M206',
    name: 'M206',
    description: 'Set Home Offsets',
    details: {
      description:
        'Use M206 to apply a persistent offset to the native home position and coordinate space. This effectively shifts the coordinate space in the negative direction. See examples below.  The current position is adjusted to align to the new home offset values. The home offset is persistent — added to the current position until changed. Some uses include fine adjustment of Z position (without moving endstops) and shifting the coordinate space to print on a different part of the bed.  ',
      notes:
        ' This command isn’t available on DELTA. (For delta use M665 H.) This G-code can be disabled with NO_WORKSPACE_OFFSETS to optimize movement. Changing the home offsets will not invalidate bed leveling or other saved data. View the current offsets with M503. If EEPROM_SETTINGS is enabled, the home offsets are saved with M500, loaded with M501, and reset with M502.  M428 sets home offsets so the current position aligns to the native home position.  ',
      url: 'https://marlinfw.org/docs/gcode/M206.html',
    },
    params: [
      {
        name: 'P',
        label: '[P<offset>]',
        hint: 'SCARA Psi offset (Requires MORGAN_SCARA)',
        value: 0,
      },
      {
        name: 'T',
        label: '[T<offset>]',
        hint: 'SCARA Theta offset (Requires MORGAN_SCARA)',
        value: 0,
      },
      {
        name: 'X',
        label: '[X<offset>]',
        hint: 'X home offset',
        value: 0,
      },
      {
        name: 'Y',
        label: '[Y<offset>]',
        hint: 'Y home offset',
        value: 0,
      },
      {
        name: 'Z',
        label: '[Z<offset>]',
        hint: 'Z home offset',
        value: 0,
      },
    ],
    isNotDuplicate: true,
  },
]
