import React, {useRef, useEffect} from 'react'
import Editor, {DiffEditor, useMonaco, loader, BeforeMount, OnMount} from '@monaco-editor/react'
import {editor} from 'monaco-editor'

interface IProps {
  code: string
  language: string
  onChange: (value: string) => void
}

const MonacoEditor: React.FC<IProps> = ({code, language, onChange}) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleEditorWillMount: BeforeMount = (monaco) => {
    // here is the monaco instance

    monaco.languages.register({id: 'mySpecialLanguage'})

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('mySpecialLanguage', {
      tokenizer: {
        root: [
          [/\[error.*/, 'custom-error'],
          [/\[notice.*/, 'custom-notice'],
          [/\[info.*/, 'custom-info'],
          [/\[[a-zA-Z 0-9:]+\]/, 'custom-date'],
        ],
      },
    })

    monaco.editor.defineTheme('myCoolTheme', {
      base: 'vs',
      inherit: false,
      rules: [
        {token: 'custom-info', foreground: '808080'},
        {token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold'},
        {token: 'custom-notice', foreground: 'FFA500'},
        {token: 'custom-date', foreground: '008800'},
      ],
      colors: {
        'editor.foreground': '#000000',
      },
    })

    // Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider('mySpecialLanguage', {
      provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        const suggestions = [
          {
            label: 'simpleText',
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'simpleText',
            range: range,
          },
          {
            label: 'testing',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'testing(${1:condition})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range,
          },
          {
            label: 'ifelse',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If-Else Statement',
            range: range,
          },
        ]
        return {suggestions: suggestions}
      },
    })

    // monaco.editor.create(document.getElementById('container'), {
    //   theme: 'myCoolTheme',
    //   value: getCode(),
    //   language: 'mySpecialLanguage',
    // })
  }

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
  }

  function showValue() {
    alert(editorRef.current?.getValue())
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="mySpecialLanguage"
      defaultValue={code}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
    />
  )
}

export default MonacoEditor
