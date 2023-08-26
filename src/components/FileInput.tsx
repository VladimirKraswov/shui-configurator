import React, {forwardRef, useImperativeHandle, useRef} from 'react'

export interface IFileInputRef {
  open: () => void
}

interface IProps {
  onFileChange: (content: string) => void
}

// eslint-disable-next-line react/display-name
export const FileInput = forwardRef<IFileInputRef, IProps>(({onFileChange}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        onFileChange(content)
      }
      reader.readAsText(file)
    }
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      inputRef.current?.click()
    },
  }))

  return <input ref={inputRef} type="file" onChange={handleFileChange} />
})
