export interface ICommand {
  id: string
  name: string
  description?: string
  params?: {
    S?: number // параметр S - определяет язык. 0 - en, 1 - ru, 2 - ua, 3 - nl
  }
  details?: string
  url?: string
  example?: string
  isNotDuplicate?: boolean // Запрет повторений команды
}

// Переопределенная стандартная команда выбора языка интерфейса
export interface IM414 {
  id: string
  name: string
  description?: string
  params?: {
    S?: number // параметр S - определяет язык. 0 - en, 1 - ru, 2 - ua, 3 - nl
  }
  details?: string
  url?: string
  example?: string
  isNotDuplicate?: boolean // Запрет повторений команды
}

// Дополнительные параметры:
export interface IM81 {
  id: string
  name: string
  description?: string
  params?: {
    С?: boolean // взять параметры из настроек модуля управления питанием
    D?: number // (delay) задержка выключения [0..255] секунд
    T?: number // (temperature) - ожидание охлаждения хотэнда
    F?: boolean // (fan) - включение вентилятора при ожидании охлаждения
  }
  details?: string
  url?: string
}

// Добавлена в backup
export interface IM851 {
  id: string
  name: string
  description?: string
  params?: {
    X?: number
    Y?: number
    Z?: number
    C?: number // clearance
    L?: number // z probe low point
    N?: number // number of failed probes
    B?: number // bltouch (0/1)
    I?: number // inaccuracy
  }
  details?: string
  url?: string
}

export type TCommand = IM414 | IM81 | IM851

export const commands: TCommand[] = [
  {
    id: 'c1',
    name: 'M414',
    description: 'Выбор языка интерфейса',
    details: 'Переопределенная стандартная команда выбора языка интерфейса',
    isNotDuplicate: true,
  },
  {
    id: 'c2',
    name: 'M81',
    description: 'Отключить питание',
    details:
      'Отключите высоковольтный источник питания. Если плата не питается от другого источника, это также может привести к отключению электроники.',
    url: 'https://marlinfw.org/docs/gcode/M081.html',
    example: 'M81 ; power off',
  },
  {
    id: 'c3',
    name: 'M851',
    description: 'Смещение датчика XYZ',
    details:
      'Установите расстояние XYZ от сопла до точки срабатывания датчика. Эти смещения необходимы для того, чтобы прошивка знала, как измерять слой и где находятся измеряемые точки по отношению к соплу, и наоборот.',
    url: 'https://marlinfw.org/docs/gcode/M851.html',
  },
]
