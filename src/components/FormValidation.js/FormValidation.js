import { useCallback, useState } from "react"

export function useFormValidation() {
    const [isValid, setIsValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({})

    const handleChangeValues = (e) => {
      const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
      const target = e.target
      const name = target.name
      const value = target.value
      
      setValues({ ...values, [name]: value })
      setErrors({ ...errors, [name]: target.validationMessage })
      setIsValid(target.closest('form').checkValidity())
      if (regex.test(values.email)) {
        setIsEmailValid(true)
      } else {
        setIsEmailValid(false)
      }
    }

    const resetFormValues = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues)
        setErrors(newErrors)
        setIsValid(newIsValid)
      },
      [setValues, setErrors, setIsValid]
    )
    return { values, errors, isValid, isEmailValid, setValues, resetFormValues, handleChangeValues }
}