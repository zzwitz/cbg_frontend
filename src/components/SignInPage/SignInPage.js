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
        },
        {
          inputName: 'userType',
          inputId: '__',
          inputTitleBr: 'User Type',
          inputTitle: 'Artist',
          inputValue: 'Artist',
          inputType: 'radio',
        },
        {
          inputName: 'userType',
          inputId: '__',
          inputTitle: 'Venue',
          inputValue: 'Venue',
          inputType: 'radio',
        }]

        function handleChange(newValue) {
          alert(newValue)
        }

        return(
        <div>
          <div class ='signInContainer'>
          </div>
          <div class ='signInContainer'>
            <StandardForm formId = '1' handleSubmit = {() => alert('signed in')} header = {'Sign In'} inputList = {inputList}/>
          </div>
        </div>)
    }
  }

export default SignInPage
