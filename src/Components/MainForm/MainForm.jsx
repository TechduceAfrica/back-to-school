import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'

export default function MainForm({ formTemplate }) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { title, fields } = formTemplate;

  // const onSubmit = data => console.log(data);

  const renderFields = (fields) => {
    return fields.map(field => {
      let { title, type, name, id, placeholder, value1, value2, value3, value4 } = field;

      switch (name) {
        case 'fname':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} autoComplete='name' {...register( 'fname', { required: true })} />
                <div className='form__input__error__wrapper'>
                  { errors.fname && <span className='form__input__error__message'>Name is required</span> }
                </div>
            </div>
          )
        case 'telephone':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} autoComplete='tel' {...register('telephone', { required: true, maxLength: 11, pattern:/[0]{1}[7-9]{1}[0-1]{1}[0-9]{4}[0-9]{4}/ })} />
                <div className='form__input__error__wrapper'>
                  { errors.telephone && <span className='form__input__error__message'>Invalid phone number</span> }
                </div>
            </div>
          )
        case 'email':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} autoComplete='email' {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$/i })} />
                <div className='form__input__error__wrapper'>
                  { errors.email && <span className='form__input__error__message'>Invalid email address</span> }
                </div>
            </div>
          )
        case 'location':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} autoComplete='address' {...register('location', { required: true })} />
                <div className='form__input__error__wrapper'>
                  { errors.location && <span className='form__input__error__message'>This field is required</span> }
                </div>
            </div>
          )
          case 'amount':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} min='1000' step="500" {...register('amount', { required: true })} />
                <div className='form__input__error__wrapper'>
                  { errors.amount && <span className='form__input__error__message'>This field is required</span> }
                </div>
            </div>
          )
          case 'agerange':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <select name={name} id={id} placeholder={placeholder} {...register('agerange', { required: true })}>
                  <option value={value1}>{value1}</option>
                  <option value={value2}>{value2}</option>
                  <option value={value3}>{value3}</option>
                  <option value={value4}>{value4}</option>
                </select>
                <div className='form__input__error__wrapper'>
                  { errors.agerange && <span className='form__input__error__message'>This field is required</span> }
                </div>
            </div>
          )
          case 'additionalinfo':
          return (
            <div key={name}>
                <label htmlFor={name}>{title}</label>
                <textarea name={name} id={id} placeholder={placeholder} row='5' {...register('additionalinfo', { required: false })}>
                </textarea>
                <div className='form__input__error__wrapper'>
                  { errors.additionalinfo && <span className='form__input__error__message'>This field is required</span> }
                </div>
            </div>
          )
        default:
          return(
            <div key={name}>
              <span>Invalid input field</span>
            </div>
          )
      }

    })
  };

  function onSubmit(values) {
    console.log('main-form');
    console.log(values)
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='back__to__school__form'>
          <h4>{title}</h4>
          <div className='back__to__school__form__wrapper'>
            { renderFields(fields)} 
          </div>
          <br />
          <button type="submit">Submit</button>
      </form>
  )
}


