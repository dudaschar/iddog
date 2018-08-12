import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './authForm.css'

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      emailValid: false,
      isButtonDisabled: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value },
    () => {
      this.validateField()
    })
  }

  validateField() {
    let emailValid = this.state.emailValid
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>() \[\]\\.,;: \s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if ((regexEmail).test(this.state.email)) {
      this.setState({
        emailValid: true,
      }, this.setState({ isButtonDisabled: false }))
    } else {
      this.setState({
        emailValid: false,
      }, this.setState({ isButtonDisabled: true }))
    }
  }

  handleSubmit(event) {
    fetch("https://api-iddog.idwall.co/signup", {
    body: `{ \"email\": "${this.state.email}" }`,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
    }).then(response => response.json())
    .then(response => {
      sessionStorage.setItem("token", response.user.token)
      let token = sessionStorage.getItem("token")
    })
    .then( () => {
      
    }
      
    )
  }

  redirectFeed() {
    return <Redirect to='/feed' />
  }


  render() {
    return (
      <div className="auth-form">
        <input
          className="auth-form__input"
          placeholder="your email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          type="text"
        />
        <button
          className="auth-form__button"
          onClick={this.handleSubmit}
          disabled={this.state.isButtonDisabled}
        >
          go
        </button>       
      </div>
    )
  }
}

export default AuthForm
