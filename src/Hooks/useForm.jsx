import React from 'react'

const validation = {
    email: {
        regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: 'Preencha com um email válido'
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 caractere especial. Com no mínimo 8 caracteres'
    }
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