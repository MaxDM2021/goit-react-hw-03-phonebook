import React, { Component } from 'react';
import './ContactFormStyles.scss';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="FormEditor" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            className="FormEditorName"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeName}
            id={this.nameInputId}
            placeholder="Name Surname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            className="FormEditorNumber"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChangeNumber}
            id={this.numberInputId}
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-  .\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className="FormEditor__button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
