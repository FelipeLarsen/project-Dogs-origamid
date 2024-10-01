import React from 'react'

const validation = {
    email: {
        regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: 'Preencha com um email válido'
    },
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if(type === false) return true
        if(value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if(validation[type] && !validation[type].regex.test(value)) {
            setError(validation[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value)
        setValue(target.value)
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm