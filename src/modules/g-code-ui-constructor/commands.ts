export type TParamType = string | number | boolean

export interface ISelectableValues {
  label: string
  value: any
}

export interface IParam {
  name: string
  value: TParamType
  description?: string
  hint?: string
  min?: number
  max?: number
  label?: string
  selectableValues?: ISelectableValues[]
  isActive?: boolean
}

export interface ICommand {
  id: string
  name: string
  description: string
  details?: {
    text: string
    url?: string
  }
  params?: IParam[]
  isNotDuplicate?: boolean
}

export const commands: ICommand[] = [
  {
    id: '1',
    name: 'M414',
    description: 'Выбор языка интерфейса',
    details: {
      text: 'Переопределенная стандартная команда выбора языка интерфейса',
    },
    params: [
      {
        name: 'S',
        description: 'Выбор языка интерфейса',
        label: 'Язык интерфейса',
        value: 0,
        selectableValues: [
          {label: 'English', value: 0},
          {label: 'Русский', value: 1},
          {label: 'Український', value: 2},
          {label: 'Nederlands', value: 3},
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
        value: 0,
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
      {name: 'X', label: '', description: '', hint: '', value: 0},
      {name: 'Y', label: '', description: '', hint: '', value: 0},
      {name: 'Z', label: '', description: '', hint: '', value: 0},
      {name: 'C', label: '', description: '', hint: '', value: 0},
      {name: 'L', label: '', description: '', hint: '', value: 0},
      {name: 'N', label: '', description: '', hint: '', value: 0},
      {name: 'B', label: '', description: '', hint: '', value: 0},
      {name: 'I', label: '', description: '', hint: '', value: 0},
    ],
  },
]
