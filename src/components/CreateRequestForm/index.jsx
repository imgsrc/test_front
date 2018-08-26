import React from 'react'

import InputField from '../../components/InputField'

import './index.css'

export default function CreateRequestForm({ onSubmit }) {
  return (
      <form className="mdc-form-field" onSubmit={ onSubmit }>
        <InputField label="Price" type="text"/>
        <InputField label="Passengers" type="text"/>
        <InputField label="From/Until" type="text"/>
        <button type="submit" className="mdc-button">Create</button>
      </form>
  );
}