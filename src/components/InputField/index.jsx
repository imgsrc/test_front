import React from 'react';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default class InputField extends React.Component {
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

  render() {
    const { label } = this.props;

    return (
        <TextField
            id="full-width"
            label={ label }
            InputLabelProps={ {
              shrink: true,
            } }
            fullWidth
            margin="normal"
        />
    );
  }
}