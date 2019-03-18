import React from 'react';
import {Component} from 'react';
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'
import {bindActionCreators} from 'redux'
import {dispatch} from 'react-redux';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './StandardForm.css'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label} aslkdjf</label>
    <div>
      <input {...input} placeholder={'asdlkfjlkjsd'} type={type}/>
    </div>
  </div>
)

export class FieldFileInput extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
       />
     </div>
     </div>
    )
}};


let StandardForm = props => {
  const { handleSubmit, inputList, header, file, description } = props


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

function renderInputTitleBr(inputTitleBr) {
  if (inputTitleBr) {
    return(<div><br/><strong> {inputTitleBr}</strong> <br/></div>)
  }
}

  function renderFile(fileBool) {
    if (fileBool) {
      return(<Field component = {FieldFileInput}/>)
    }
  }


// <input name = 'art_photo' type='file' onChange={handleFile.bind(this, 'art_photo')} accept = {'image/*'} />
  return (
    <div class = 'StandardForm'>
      <h1> {header}</h1>
      {renderDesc()}
      <div class = 'FormContainer'>
        <form onSubmit={handleSubmit}>
          {inputList.map(inputObj => (
            <div> {renderInputTitleBr(inputObj.inputTitleBr)}
             <span>{inputObj.inputTitle}</span>
            <Field
              label = {inputObj.inputLabel}
              name = {inputObj.inputName}
              component = 'input'
              class = 'StandardFormInput'
              placeholder = {inputObj.inputPlaceholder}
              value = {inputObj.inputValue}
              type = {inputObj.inputType}
              validate={[required]}
              />
            </div>
          ))}
          {renderFile(file)}
          <br/>
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
