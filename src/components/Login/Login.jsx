import React, { Component } from 'react'
import { Button, Input,Card, Form, Grid, Header, Image, Message, Segment, Divider, Icon, Checkbox} from 'semantic-ui-react'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/logo.gif'
import background from '../assets/backgroundimg.jpg'
import NavBar from '../NavBar/NavBar.jsx'
import Home from '../Home/Home.jsx'
import Choices from '../Home/Choices.jsx'
import login from './login.scss'




class Login extends Component {
      constructor(props){
        super(props);

        this.state ={
            user:{
                username:'',
                password:'',
                email:''
            },
            isLoggedin:false,
            message:'',
            redirect:false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this)

      }

      onSubmit(event){
        event.preventDefault();
        // create HTTP body message
        const name = encodeURIComponent(this.state.user.username);
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `UserName=${name}&Email=${email}&Password=${password}`;


      }

      onChangePassword(event){
        const user = this.state.user;
        user.password = event.target.value;
        this.setState({
          user
        })
      }

      onChangeUserName(event){
        const user = this.state.user;
        user.username = event.target.value;
        this.setState({
          user
        })
      }

      render() {
        console.log("render")
        if(this.state.redirect){
            return(
              <Redirect to = {
                {
                  pathname:'/profile',
                  state:{isLoggedIn:false}
                }
              }/>
            )
        } else{
            return (
              <div>
                    <NavBar isLoggedIn = {false}/>
                    <img className = "loginBackgroundimg" src = {background}/>
                    <div className = "logInBox">
                            <Header as='h2' textAlign='center' color = 'black'>
                            <Icon name = 'sign in'/>Login Your Account!
                            </Header>
                            <Form size='large' onSubmit={this.onSubmit}>
                                <Form.Field>
                                  <label>Username</label>
                                  <input placeholder='Your Username' onChange={this.onChangeUserName} />
                                </Form.Field>
                                <Form.Field>
                                  <label>Password</label>
                                  <input placeholder='Password' onChange={this.onChangePassword} />
                                </Form.Field>
                                <Button color = 'black' fluid size='large' type='submit'>Log in</Button>
                            </Form>
                            <Message> Don't have an account? <Link to="/register">Sign up now!</Link> </Message>
                            <Message> Forget your password? <Link to="/register">Reset here!</Link> </Message>
                    </div>
              </div>
            )
        }

      }

}

export default Login
