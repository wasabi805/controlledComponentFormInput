import React, {Component} from 'react';
import {FormInput} from '../common/form-input'

class Form01 extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: "",
            lastName : "",
            email: "",
            phone: ""
        }
    }

    handleInputChange = e =>{
        this.setState(
            {
                [e.target.name] : e.target.value // <---- name field :  input value from user
            })
    };

    render() {
        console.log(this.state);

        return(

            <React.Fragment>
                <form id={'form-one'}>

                    <FormInput placeholder={'First Name:'}
                               name={'firstName'}               // <---- make sure this is a string corresponding to the key in state
                               value={this.state.firstName}     // <---- (Controlled) : set the value to state .
                               onChange={this.handleInputChange // <---- make a function to handle change
                               }/>

                    <FormInput placeholder={'Last Name:'}  name={'lastName'} value={this.state.lastName} onChange={this.handleInputChange}/>
                    <FormInput placeholder={'Email:'} name={'email'} value={this.state.email} onChange={this.handleInputChange} />
                    <FormInput placeholder={'Phone:'} name={'phone'} value={this.state.phone} onChange={this.handleInputChange}/>
                </form>

                <section className={'results'}>
                    <p>First Name: {this.state.firstName} </p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Email: {this.state.email} </p>
                    <p>Phone : {this.state.phone} </p>
                </section>
            </React.Fragment>
        )
    }
}

export default Form01