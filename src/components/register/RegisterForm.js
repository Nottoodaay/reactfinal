import React from 'react'
import { Button, FormContainer, Input } from '../atoms'
import { useForm } from '../../hooks'
import { generateRegisterFormValues } from './generateRegisterFormValues'
import { useUser } from '../../hooks/useUser'

export const RegisterForm = () => {

    const {formValues: registerFormValues, onInputChange, } = useForm({defaultFormValues: generateRegisterFormValues() })

    const {authenticateUser} = useUser()

    const onRegister = () =>{
      const firstName = registerFormValues.firstName.value 
      const lastName = registerFormValues.lastName.value
      const email = registerFormValues.email.value
      const password = registerFormValues.password.value
      authenticateUser({
        formValues:{firstName,lastName,email,password}, 
        isLogin: false
      })
    }
  return (
    //add loading wrapper
    <FormContainer>
        <Input 
        name="firstName" 
        label="firstName"
        value={registerFormValues.firstName.value} 
        onChange={onInputChange} 
        error={registerFormValues.firstName.error}/>
        <Input 
        name="lastName" 
        label="lastName"
        value={registerFormValues.lastName.value} 
        onChange={onInputChange} 
        error={registerFormValues.lastName.error}/>
        <Input
        name="email"
        label="email"
        value={registerFormValues.email.value} 
        onChange={onInputChange} 
        error={registerFormValues.email.error}/>
        <Input 
        name="password" 
        label="password"
        type='password'
        value={registerFormValues.password.value} 
        onChange={onInputChange} 
        error={registerFormValues.password.error}/>
      
      <Button onClick={onRegister}>Register</Button>
    </FormContainer>
  )
}
