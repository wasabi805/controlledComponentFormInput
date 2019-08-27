import React from 'react';


export const FormInput = (props)=>{

    return(
        <input className={'form-01-input'} type={'text'} name={props.name} value={props.value}  onChange={props.onChange} placeholder={props.placeholder}  />
    )
};