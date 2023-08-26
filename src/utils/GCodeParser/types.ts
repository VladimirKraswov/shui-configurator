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
