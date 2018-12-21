import React from 'react';
import {bindActionCreators} from 'redux'
import {dispatch} from 'react-redux';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {pickUserType} from '../../action_creators/actionCreators.js'
import StandardForm from '../StandardForm/StandardForm'
import './RegisterPage.css'

class RegisterPage extends React.Component {
    render() {
      const inputListVenue = [
        {
          inputName: 'email',
          inputPlaceholder: 'Email',
          inputId: '__',
          inputType: 'email',
        },
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
          inputName: 'repeatPassword',
          inputPlaceholder: 'Repeat Password',
          inputId: '__',
          inputType: 'password',
        },
        {
          inputName: 'venueName',
          inputPlaceholder: 'Venue Name',
          inputId: '__',
          inputType: 'text',
        },
        {
          inputName: 'address',
          inputPlaceholder: 'Address',
          inputId: '__',
          inputType: 'text',
        },
        {
          inputName: 'agreement',
          inputTitle: <span> I agree to the terms and conditions </span>,
          inputPlaceholder: 'Agreement',
          inputId: '__',
          inputType: 'checkbox',
          inputValidate: ['Required']
        },

      ]

        const inputListArtist = [
          {
            inputName: 'email',
            inputPlaceholder: 'Email',
            inputId: '__',
            inputType: 'email',
          },
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
            inputName: 'repeatPassword',
            inputPlaceholder: 'Repeat Password',
            inputId: '__',
            inputType: 'password',
          },
          {
            inputName: 'firstName',
            inputPlaceholder: 'First Name',
            inputId: '__',
            inputType: 'text',
          },
          {
            inputName: 'lastName',
            inputPlaceholder: 'Last Name',
            inputId: '__',
            inputType: 'text',
          },
          {
            inputName: 'zipCode',
            inputPlaceholder: 'Zip Code',
            inputId: '__',
            inputType: 'text',
          },
          {
            inputName: 'agreement',
            inputTitle: <span> I agree to the terms and conditions </span>,
            inputPlaceholder: 'Agreement',
            inputId: '__',
            inputType: 'checkbox',
            inputValidate: ['Required']
          },

        ]

        function renderForm(userType) {
          if (userType == 'artist') {
            return(<StandardForm formId = '1' handleSubmit = {() => alert('signed in')} description = {'Welcome!'} header = {'Welcome to City Block Gallery'} inputList = {inputListArtist}/>)
          }
          if (userType == 'venue') {
            return(<StandardForm formId = '1' handleSubmit = {() => alert('signed in')} description = {'Welcome!'} header = {'Welcome to City Block Gallery'} inputList = {inputListVenue}/>)
          }
        }

        return(
        <div class ='signInContainer'>
          <div class = 'user-options-container'>
            <div class = 'options-row'>
            Are you a...<br/>
                <div onClick = {() => this.props.pickUserType('venue')} class = {this.props.register.venueButtonsStyle}>
                Cafe
                </div>
                <div onClick = {() => this.props.pickUserType('artist')} class = {this.props.register.artistButtonsStyle}>
                Artist
                </div>
            </div>
          </div>
                      {renderForm(this.props.register.userType)}
        </div>)
    }
  }

  function mapStateToProps(state) {
    return {
      register: state.register,
      user: state.user
    };
  }


  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      pickUserType
    }, dispatch);
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage))
