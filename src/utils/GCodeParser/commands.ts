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
      text: 'Отключите высоковольтный источник питания. Если плата не питается от другого источника, это также может привести к отключению электроники.',
      url: 'https://marlinfw.org/docs/gcode/M081.html',
    },
    params: [
      {
        name: 'C',
        label: 'Взять параметры',
        description: '',
        hint: 'Взять параметры из настроек модуля управления питанием',
        value: false,
      },
      {
        name: 'D',
        label: 'Задержка выключения',
        description: '',
        hint: '(delay) задержка выключения [0..255] секунд',
        value: 0,
        min: 0,
        max: 255,
      },
      {
        name: 'T',
        label: 'Ожидание охлаждения хотэнда',
        description: '',
        hint: '(temperature) - ожидание охлаждения хотэнда',
        value: false,
      },
      {
        name: 'F',
        label: 'Вентилятор включен',
        description: '',
        hint: '(fan) - включение вентилятора при ожидании охлаждения',
        value: false,
      },
    ],
  },
  {
    id: '3',
    name: 'M851',
    description: 'Смещение датчика XYZ',
    details: {
      text: 'Установите расстояние XYZ от сопла до точки срабатывания датчика. Эти смещения необходимы для того, чтобы прошивка знала, как измерять слой и где находятся измеряемые точки по отношению к соплу, и наоборот.',
      url: 'https://marlinfw.org/docs/gcode/M851.html',
    },
    params: [
      {
        name: 'X',
        label: 'X',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'Y',
        label: 'Y',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'Z',
        label: 'Z',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'C',
        label: 'Clearance (shui)',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'L',
        label: 'Z probe low point (shui)',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'N',
        label: 'Number of failed probes (shui)',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'B',
        label: 'Bltouch (0/1) (shui)',
        description: '',
        hint: '',
        value: 0,
      },
      {
        name: 'I',
        label: 'Inaccuracy (shui)',
        description: '',
        hint: '',
        value: 0,
      },
    ],
  },
  {
    id: 'G21',
    name: 'G21',
    description: 'Millimeter Units',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M092.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M281',
    name: 'M281',
    description: 'Edit Servo Angles',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M281.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M301',
    name: 'M301',
    description: 'Set Hotend PID',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M301.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M304',
    name: 'M304',
    description: 'Set Bed PID',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M304.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M603',
    name: 'M603',
    description: 'Configure Filament Change',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M603.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M302',
    name: 'M302',
    description: 'Cold Extrude',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M302.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M852',
    name: 'M852',
    description: 'Bed Skew Compensation',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M852.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M425',
    name: 'M425',
    description: 'Backlash compensation',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M425.html',
    },
    params: [],
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
      url: 'https://marlinfw.org/docs/gcode/M420.html',
    },
    params: [],
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
      url: 'https://marlinfw.org/docs/gcode/G000-G001.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G2-G3',
    name: 'G2-G3',
    description: 'Arc or Circle Move',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G002-G003.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G4',
    name: 'G4',
    description: 'Dwell',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G004.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G5',
    name: 'G5',
    description: 'Bézier cubic spline',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G005.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G6',
    name: 'G6',
    description: 'Direct Stepper Move',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G006.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G10',
    name: 'G10',
    description: 'Retract',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G010.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G11',
    name: 'G11',
    description: '',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/G012.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G17-G19',
    name: 'G17-G19',
    description: 'CNC Workspace Planes',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/G026.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G27',
    name: 'G27',
    description: 'Park toolhead',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G027.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G28',
    name: 'G28',
    description: 'Auto Home',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G028.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G29',
    name: 'G29',
    description: 'Bed Leveling (Unified)',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G029-ubl.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G30',
    name: 'G30',
    description: 'Single Z-Probe',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G030.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G31',
    name: 'G31',
    description: 'Dock Sled',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/G033.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G34',
    name: 'G34',
    description: 'Mechanical Gantry Calibration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G034-mgc.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G35',
    name: 'G35',
    description: 'Tramming Assistant',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G035.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G38.2-G38.5',
    name: 'G38.2-G38.5',
    description: 'Probe target',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G038.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G42',
    name: 'G42',
    description: 'Move to mesh coordinate',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G042.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G53',
    name: 'G53',
    description: 'Move in Machine Coordinates',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/G060.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G61',
    name: 'G61',
    description: 'Return to Saved Position',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G061.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G76',
    name: 'G76',
    description: 'Probe temperature calibration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G076.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G80',
    name: 'G80',
    description: 'Cancel Current Motion Mode',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/G092.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'G425',
    name: 'G425',
    description: 'Backlash Calibration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/G425.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M0-M1',
    name: 'M0-M1',
    description: 'Unconditional stop',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M000-M001.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M3',
    name: 'M3',
    description: 'Spindle CW / Laser On',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M003.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M4',
    name: 'M4',
    description: 'Spindle CCW / Laser On',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M004.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M5',
    name: 'M5',
    description: 'Spindle / Laser Off',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M016.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M17',
    name: 'M17',
    description: 'Enable Steppers',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M017.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M18, M84',
    name: 'M18, M84',
    description: 'Disable steppers',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M018.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M20',
    name: 'M20',
    description: 'List SD Card',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M020.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M21',
    name: 'M21',
    description: 'Init SD card',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M023.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M24',
    name: 'M24',
    description: 'Start or Resume SD print',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M024.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M25',
    name: 'M25',
    description: 'Pause SD print',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M026.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M27',
    name: 'M27',
    description: 'Report SD print status',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M027.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M28',
    name: 'M28',
    description: 'Start SD write',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M028.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M29',
    name: 'M29',
    description: 'Stop SD write',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M030.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M31',
    name: 'M31',
    description: 'Print time',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M032.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M33',
    name: 'M33',
    description: 'Get Long Path',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M033.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M34',
    name: 'M34',
    description: 'SDCard Sorting',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M034.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M42',
    name: 'M42',
    description: 'Set Pin State',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M042.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M43',
    name: 'M43',
    description: 'Debug Pins',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M043.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M43 T',
    name: 'M43 T',
    description: 'Toggle Pins',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M043-T.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M48',
    name: 'M48',
    description: 'Probe Repeatability Test',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M048.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M73',
    name: 'M73',
    description: 'Set Print Progress',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M073.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M75',
    name: 'M75',
    description: 'Start Print Job Timer',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M075.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M76',
    name: 'M76',
    description: 'Pause Print Job Timer',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M080.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M82',
    name: 'M82',
    description: 'E Absolute',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M085.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M86',
    name: 'M86',
    description: 'Hotend Idle Timeout',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M086.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M87',
    name: 'M87',
    description: 'Disable Hotend Idle Timeout',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M100.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M102',
    name: 'M102',
    description: 'Configure Bed Distance Sensor',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M102.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M104',
    name: 'M104',
    description: 'Set Hotend Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M104.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M105',
    name: 'M105',
    description: 'Report Temperatures',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M105.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M106',
    name: 'M106',
    description: 'Set Fan Speed',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M106.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M108',
    name: 'M108',
    description: 'Break and Continue',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M110.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M112',
    name: 'M112',
    description: 'Full Shutdown',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M114.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M117',
    name: 'M117',
    description: 'Set LCD Message',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M117.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M119',
    name: 'M119',
    description: 'Endstop States',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M125.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M127',
    name: 'M127',
    description: 'Baricuda 1 Close',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M141.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M145',
    name: 'M145',
    description: 'Set Material Preset',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M145.html',
    },
    params: [
      {
        name: 'S',
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
        name: 'F',
        description: '',
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
      url: 'https://marlinfw.org/docs/gcode/M150.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M155',
    name: 'M155',
    description: 'Temperature Auto-Report',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M155.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M164',
    name: 'M164',
    description: 'Save Mix',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M164.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M166',
    name: 'M166',
    description: 'Gradient Mix',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M166.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M192',
    name: 'M192',
    description: 'Wait for Probe temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M192.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M201',
    name: 'M201',
    description: 'Print / Travel Move Limits',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M201.html',
    },
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
    id: 'M207',
    name: 'M207',
    description: 'Set Firmware Retraction',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M207.html',
    },
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'F',
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
    id: 'M208',
    name: 'M208',
    description: '',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M208.html',
    },
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'F',
        description: '',
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
      url: 'https://marlinfw.org/docs/gcode/M209.html',
    },
    params: [
      {
        name: 'S',
        description: '',
        value: 0,
      },
      {
        name: 'I',
        description: '',
        value: 0,
      },
      {
        name: 'A',
        description: '',
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
      url: 'https://marlinfw.org/docs/gcode/M211.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M217',
    name: 'M217',
    description: 'Filament swap parameters',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M217.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M218',
    name: 'M218',
    description: 'Set Hotend Offset',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M218.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M220',
    name: 'M220',
    description: 'Set Feedrate Percentage',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M220.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M221',
    name: 'M221',
    description: 'Set Flow Percentage',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M221.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M226',
    name: 'M226',
    description: 'Wait for Pin State',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M226.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M240',
    name: 'M240',
    description: 'Trigger Camera',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M240.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M250',
    name: 'M250',
    description: 'LCD Contrast',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M250.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M255',
    name: 'M255',
    description: 'LCD Sleep/Backlight Timeout',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M255.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M256',
    name: 'M256',
    description: 'LCD Brightness',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M256.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M260',
    name: 'M260',
    description: 'I2C Send',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M260.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M261',
    name: 'M261',
    description: 'I2C Request',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M261.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M280',
    name: 'M280',
    description: 'Servo Position',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M280.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M282',
    name: 'M282',
    description: 'Detach Servo',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M282.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M290',
    name: 'M290',
    description: 'Babystep',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M290.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M300',
    name: 'M300',
    description: 'Play Tone',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M300.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M303',
    name: 'M303',
    description: 'PID autotune',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M303.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M305',
    name: 'M305',
    description: 'User Thermistor Parameters',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M305.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M306',
    name: 'M306',
    description: 'Model predictive temperature control',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M306.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M350',
    name: 'M350',
    description: 'Set micro-stepping',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M350.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M351',
    name: 'M351',
    description: 'Set Microstep Pins',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M351.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M355',
    name: 'M355',
    description: 'Case Light Control',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M355.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M360',
    name: 'M360',
    description: 'SCARA Theta A',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M380.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M381',
    name: 'M381',
    description: 'Deactivate Solenoids',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M381.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M400',
    name: 'M400',
    description: 'Finish Moves',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M401.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M402',
    name: 'M402',
    description: 'Stow Probe',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M403.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M404',
    name: 'M404',
    description: 'Set Filament Diameter',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M404.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M405',
    name: 'M405',
    description: 'Filament Width Sensor On',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M405.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M406',
    name: 'M406',
    description: 'Filament Width Sensor Off',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M412.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M413',
    name: 'M413',
    description: 'Power-loss Recovery',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M413.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M421',
    name: 'M421',
    description: 'Set Mesh Value',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M421.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M422',
    name: 'M422',
    description: 'Set Z Motor XY',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M422.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M423',
    name: 'M423',
    description: 'X Twist Compensation',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M423.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M428',
    name: 'M428',
    description: 'Home Offsets Here',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M430.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M486',
    name: 'M486',
    description: 'Cancel Objects',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M486.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M493',
    name: 'M493',
    description: 'Fixed-Time Motion',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M493.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M500',
    name: 'M500',
    description: 'Save Settings',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M503.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M504',
    name: 'M504',
    description: 'Validate EEPROM contents',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M511.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M512',
    name: 'M512',
    description: 'Set Passcode',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M512.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M524',
    name: 'M524',
    description: 'Abort SD print',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M540.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M569',
    name: 'M569',
    description: 'Set TMC stepping mode',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M569.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M575',
    name: 'M575',
    description: 'Serial baud rate',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M575.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M593',
    name: 'M593',
    description: 'Input Shaping',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M593.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M600',
    name: 'M600',
    description: 'Filament Change',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M600.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M605',
    name: 'M605',
    description: 'Multi Nozzle Mode',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M605.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M665',
    name: 'M665',
    description: 'SCARA Configuration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M665-scara.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M666',
    name: 'M666',
    description: 'Set dual endstop offsets',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M666-dual.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M672',
    name: 'M672',
    description: 'Duet Smart Effector sensitivity',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M672.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M701',
    name: 'M701',
    description: 'Load filament',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M701.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M702',
    name: 'M702',
    description: 'Unload filament',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M702.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M710',
    name: 'M710',
    description: 'Controller Fan settings',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M710.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M808',
    name: 'M808',
    description: 'Repeat Marker',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M808.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M810-M819',
    name: 'M810-M819',
    description: 'G-code macros',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M810-M819.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M860-M869',
    name: 'M860-M869',
    description: 'I2C Position Encoders',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M860-M869.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M871',
    name: 'M871',
    description: 'Настройка температуры датчика',
    details: {
      text: 'Считывание/запись значений температурной компенсации датчика. Значения для слоя и/или датчика могут быть откалиброваны с помощью команды G76.',
      url: 'https://marlinfw.org/docs/gcode/M871.html',
    },
    params: [
      {
        name: 'B',
        label: 'B',
        description: 'Сохраните значение V как поправку Z в индексе I для стола.',
        hint: 'Сохраните значение V как поправку Z в индексе I для стола.',
        value: false,
      },
      {
        name: 'E',
        label: 'E',
        description: 'Сохраните значение V как настройку Z в индексе I для экструдера.',
        hint: 'Сохраните значение V как настройку Z в индексе I для экструдера.',
        value: false,
      },
      {
        name: 'I',
        label: 'I',
        description: 'Индекс, в котором сохраняется заданное значение регулировки Z.',
        hint: 'Индекс, в котором сохраняется заданное значение регулировки Z.',
        value: 0,
      },
      {
        name: 'P',
        label: 'P',
        description: 'Сохраните значение V как регулировку Z под индексом I для зонда.',
        hint: 'Сохраните значение V как регулировку Z под индексом I для зонда.',
        value: false,
      },
      {
        name: 'R',
        label: 'R',
        description: 'Сбросьте все значения регулировки Z до заводских значений по умолчанию (ноль).',
        hint: 'Сбросьте все значения регулировки Z до заводских значений по умолчанию (ноль).',
        value: false,
      },
      {
        name: 'V',
        label: 'V',
        description: 'Значение регулировки Z, в микрометрах.',
        hint: 'Значение регулировки Z, в микрометрах.',
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
      url: 'https://marlinfw.org/docs/gcode/M876.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M900',
    name: 'M900',
    description: 'Linear Advance Factor',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M900.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M906',
    name: 'M906',
    description: 'Stepper Motor Current',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M906.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M907',
    name: 'M907',
    description: 'Set Motor Current',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M907.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M908',
    name: 'M908',
    description: 'Set Trimpot Pins',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M908.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M909',
    name: 'M909',
    description: 'DAC Print Values',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M912.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M913',
    name: 'M913',
    description: 'Set Hybrid Threshold Speed',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M913.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M914',
    name: 'M914',
    description: 'TMC Bump Sensitivity',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M914.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M915',
    name: 'M915',
    description: 'TMC Z axis calibration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M915.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M916',
    name: 'M916',
    description: 'L6474 Thermal Warning Test',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M916.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M917',
    name: 'M917',
    description: 'L6474 Overcurrent Warning Test',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M917.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M918',
    name: 'M918',
    description: 'L6474 Speed Warning Test',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M918.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M919',
    name: 'M919',
    description: 'TMC Chopper Timing',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M919.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M928',
    name: 'M928',
    description: 'Start SD Logging',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M928.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M951',
    name: 'M951',
    description: 'Magnetic Parking Extruder',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M951.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M993-M994',
    name: 'M993-M994',
    description: 'SD / SPI Flash',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M999.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M7219',
    name: 'M7219',
    description: 'MAX7219 Control',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M7219.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'T0-T6',
    name: 'T0-T6',
    description: 'Select Tool',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M107.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M109',
    name: 'M109',
    description: 'Wait for Hotend Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M109.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M111',
    name: 'M111',
    description: 'Debug Level',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M111.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M113',
    name: 'M113',
    description: 'Host Keepalive',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M113.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M115',
    name: 'M115',
    description: 'Firmware Info',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M118.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M120',
    name: 'M120',
    description: 'Enable Endstops',
    details: {
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
      url: 'https://marlinfw.org/docs/gcode/M122.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M126',
    name: 'M126',
    description: 'Baricuda 1 Open',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M126.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M128',
    name: 'M128',
    description: 'Baricuda 2 Open',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M128.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M140',
    name: 'M140',
    description: 'Set Bed Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M140.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M143',
    name: 'M143',
    description: 'Set Laser Cooler Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M143.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M149',
    name: 'M149',
    description: 'Set Temperature Units',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M149.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M154',
    name: 'M154',
    description: 'Position Auto-Report',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M154.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M163',
    name: 'M163',
    description: 'Set Mix Factor',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M163.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M165',
    name: 'M165',
    description: 'Set Mix',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M165.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M190',
    name: 'M190',
    description: 'Wait for Bed Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M190.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M191',
    name: 'M191',
    description: 'Wait for Chamber Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M191.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M193',
    name: 'M193',
    description: 'Set Laser Cooler Temperature',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M193.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M200',
    name: 'M200',
    description: 'Set Filament Diameter',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M200.html',
    },
    params: [],
    isNotDuplicate: true,
  },
  {
    id: 'M203',
    name: 'M203',
    description: 'Set Max Feedrate',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M203.html',
    },
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
    id: 'M204',
    name: 'M204',
    description: 'Set Starting Acceleration',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M204.html',
    },
    params: [
      {
        name: 'P',
        description: '',
        value: 0,
      },
      {
        name: 'R',
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
    id: 'M205',
    name: 'M205',
    description: 'Set Advanced Settings',
    details: {
      url: 'https://marlinfw.org/docs/gcode/M205.html',
    },
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
        name: 'T',
        description: '',
        value: 0,
      },
      {
        name: 'J',
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
        name: 'E',
        description: '',
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
      url: 'https://marlinfw.org/docs/gcode/M206.html',
    },
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
]
