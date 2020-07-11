import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
import './RegisterForm.css'

  export class RegisterForm extends Component {
      constructor(props)  {
          super(props);
          this.state = {
              'email': '',
              'password': '',
              'password2': '',
              validate: {
                  emailState: '',
                  password2State: '',
              },
          }
          this.handleChange = this.handleChange.bind(this);
      }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    validatePassword2(e) {
        const { validate, password } = this.state
        if (password === e.target.value) {
            validate.password2State = 'has-success'
        } else {
            validate.password2State = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const{ name } = target;
        await this.setState({
            [ name ]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
    }

    render() {
        const { email, password, password2 } = this.state;
        return (
            <Container className="App">
                <h2>Register</h2>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value={ email }
                            valid={ this.state.validate.emailState === 'has-success' }
                            invalid={ this.state.validate.emailState === 'has-danger' }
                            onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                                }
                            }
                        />
                        <FormFeedback valid>
                            Your email looks good.
                        </FormFeedback>
                        <FormFeedback>
                            Looks like there's something wrong with your email.
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            value={ password }
                            onChange={ (e) => this.handleChange(e)}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Re-enter Password</Label>
                        <Input
                            type="password"
                            name="password2"
                            id="examplePassword2"
                            placeholder="********"
                            value={ password2 }
                            valid={ this.state.validate.password2State === 'has-success' }
                            invalid={ this.state.validate.password2State === 'has-danger' }
                            onChange={ (e) => {
                                this.validatePassword2(e)
                                this.handleChange(e)
                                }
                            }
                        />
                    </FormGroup>
                    <FormFeedback valid>
                        Your passwords match.
                    </FormFeedback>
                    <FormFeedback>
                        Looks like your passwords don't match.
                    </FormFeedback>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
        );
    }
}

export default RegisterForm;