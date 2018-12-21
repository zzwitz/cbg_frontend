import React from 'react';
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'
import {bindActionCreators} from 'redux'
import {dispatch} from 'react-redux';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './StandardForm.css'
import { Field, reduxForm } from 'redux-form'



let StandardForm = props => {
  const { handleSubmit, inputList, header, file, description } = props
  console.log('FORM PROPS', props)


  function renderDesc() {
      if (description) {
        return(<h5 class = 'description'>
          {description}
        </h5>)
      }
    }


  let renderInputObj = inputObj => {
    if (inputObj.double){
      return(this.renderDouble(inputObj))
    }
    else {return(this.renderSingle(inputObj))}
  }

  let renderInputList = inputList => {
    console.log('standarddddd',
      inputList.map(inputObj => (
          <div> {inputObj.inputValue} </div>))
    );
    return(
    inputList.map(inputObj => (
        <div> {inputObj.inputValue} </div>
    )))
  }

  function handleFile(fieldName, event) {
    event.preventDefault();
    // convert files to an array
    const files = [ ...event.target.files ];
    console.log('FILES', files)
    ;}

  function renderFile(fileBool) {
    if (fileBool) {
      return(<input name = 'art_photo' type='file' onChange={handleFile.bind(this, 'art_photo')} accept = {'image/*'} />)
    }
  }

  return (
    <div class = 'StandardForm'>
      <h1> {header}</h1>
      {renderDesc()}
      <div class = 'FormContainer'>
        <form onSubmit={handleSubmit}>
          {renderInputList(inputList)}
          {inputList.map(inputObj => (
            <div> <span>{inputObj.inputTitle}</span>
            <Field
              name = {inputObj.inputName}
              component = 'input'
              class = 'StandardFormInput'
              placeholder = {inputObj.inputPlaceholder}
              value = {inputObj.inputValue}
              type = {inputObj.inputType}
              />
            </div>
          ))}
          {renderFile(file)}
          <br/><br/>
          <button class = 'SubmitButton' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

StandardForm = reduxForm({
  // a unique name for the form
  form: 'StandardForm',
  destroyOnUnmount: false,
})(StandardForm)

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps)(StandardForm);
// ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactForm)
