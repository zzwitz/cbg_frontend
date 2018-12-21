import React from 'react';
import StandardForm from '../StandardForm/StandardForm'
import './SignInPage.css'

class SignInPage extends React.Component {
    render() {
      const inputList = [
        {
          inputName: 'username',
          inputPlaceholder: 'Username',
          inputId: '__',
          inputType: 'text',
        },
        {
          inputName: 'password',
          inputPlaceholder: 'Password',
          inputId: '__',
          inputType: 'password',
        }]

        return(
        <div class ='signInContainer'>
          <StandardForm formId = '1' handleSubmit = {() => alert('signed in')} header = {'Sign In'} inputList = {inputList}/>
        </div>)
    }
  }

export default SignInPage
