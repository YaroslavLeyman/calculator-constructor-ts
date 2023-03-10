import {useEffect, useState} from "react";
import {getResult} from "../helpers/getResult";
import {useAppSelector} from "./useAppSelector";


export const useCalculator = () => {

  const mode = useAppSelector(state => state.app.mode)
  const [inputValue, setInputValue] = useState<string>('0')
  const [rememberedValue, setRememberedValue] = useState<string>('')
  const [operation, setOperation] = useState<string>('')

  const addInputValue = (title: string) => {
    if (inputValue === '0') {
      setInputValue(title)
    } else {
      setInputValue(`${inputValue}${title}`)
    }
  }

  const setValue = (title: string) => {
    if (operation === '=') {
      setOperation('')
      setRememberedValue(inputValue)
      setInputValue(title)
    } else if (inputValue.toString().length < 11) {
      addInputValue(title)
    }
  }

  const saveOperation = (title: string) => {
    setOperation(title)
    setRememberedValue(inputValue)
    setInputValue('0')
  }

  const setResult = (title: string) => {
    let result = getResult(operation, rememberedValue, inputValue).toString()
    if (result.length > 11) {
    if (result.split('.')[0].length > 11) {
      result = 'не определено'
    } else {
      result = Number(result).toFixed(11 - result.split('.')[0].length).toString()
    }
    }
    if (result === '0') {
      setInputValue('0')
    } else {
      setInputValue(result.replace(/0*$/,""))
    }
    setOperation(title)
  }

  useEffect(() => {
    if (mode === 'constructor') setInputValue('0')
  }, [mode])

  return {
    setValue, inputValue, saveOperation, setResult
  }

}