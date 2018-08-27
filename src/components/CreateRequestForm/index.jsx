import React from 'react'

import InputField from '../../components/InputField'
import Button from '../../components/Button'

import './index.css'

export default function CreateRequestForm({ onSubmit }) {
  return (
      <form className="mdc-form-field" onSubmit={ onSubmit }>
        <InputField label="Price" start text="$" type="text"/>
        <InputField label="Passengers" type="text"/>
        <InputField label="From/Until" icon="date_range" end type="text"/>
        <Button type="submit" className="mdc-button">Create</Button>
      </form>
  );
}