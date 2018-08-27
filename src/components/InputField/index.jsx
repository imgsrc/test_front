import React, { Component } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '../../components/Button';
import TextField from '@material-ui/core/TextField';

export default class InputField extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = event => {
    let title = event.target.value;

    this.setState({ title });
  };

  createInputProps = () => {
    let { icon, text, start, end } = this.props;
    if ( icon && start ) {
      return (
          {
            startAdornment: (
                <InputAdornment position='start'>
                  <Button className={ `${icon} icon` } icon={ icon }/>
                </InputAdornment>
            )
          }
      );
    } else if ( icon && end ) {
      return (
          {
            endAdornment: (
                <InputAdornment position='end'>
                  <Button className={ `${icon} icon` } icon={ icon }/>
                </InputAdornment>
            )
          }
      );
    } else if ( text && start ) {
      return (
          {
            startAdornment: (
                <InputAdornment position='start'>
                  <i className="material-icons">{ text }</i>
                </InputAdornment>
            )
          }
      );
    } else if ( text && end ) {
      return (
          {
            endAdornment: (
                <InputAdornment position='end'>
                  <i className="material-icons">{ text }</i>
                </InputAdornment>
            )
          }
      );
    }
  };

  render() {
    const { label, icon, start, end } = this.props;

    return (
        <FormControl fullWidth>
          <label>{ label }</label>
          <TextField
              InputProps={ this.createInputProps({ icon }) }
          />
        </FormControl>
    );
  }
}