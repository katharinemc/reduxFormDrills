import React from 'react';
import {reduxForm, Field, focus, handleSubmit} from 'redux-form';
import  { required, nonEmpty, lengthCheck, isNumber} from '../validators.js'
import Input from './Input.js';

const  { DOM: { textarea } } = React;


export class Form extends React.Component {
onSubmit(values) {
console.log('button submitting', values)
let obj = {
   trackingNumber: values.trackingNumber,
}
return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
    method: 'POST',
    body:JSON.stringify(obj),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then (response => console.log(response))
.catch ();


};

render () {
    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }

    return (
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            {errorMessage}
            
            <label htmlFor="trackingNumber">Label for trackingNumber</label>
            <Field
                    id="trackingNumber"
                    name="trackingNumber"
                    type="text"
                    component={Input}
                    label="trackingNumber"
                    validate={[required, nonEmpty]}
                />    
<br />
<label htmlFor="optionalDetails"> Label for optionalDetails</label>
            <Field
                    id="optionalDetails"
                    name="optionalDetails"
                    type="number"
                    component="textarea"
                    label="optionalDetails"
                />    
<br />
                      <button type="submit">Send message</button>
        </form>
            )
}
     } 
     export default reduxForm({
        form: 'complain'
    })(Form);