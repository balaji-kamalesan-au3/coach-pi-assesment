import React from 'react';
import { Input,Button,Divider,Icon,Image } from 'semantic-ui-react'
import './Login.css'


export default class Login extends React.Component {

    render(){
        return(
            <div className="LoginCol">
                <div className="LoginDetails">
                    <Image src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' className="loginInput instalogo" />
                    <Input placeholder="Phone number, username or email address" className="loginInput"/>
                    <Input placeholder="Password" className="loginInput" />
                    <Button primary className="loginInput">Login</Button>
                    <Divider horizontal className="loginInput">Or</Divider>
                    <div horizontal className="loginInput">
                        <Icon color='blue' name='facebook' />
                        Log in with Facebook
                    </div>
                    <div horizontal className="loginInput">
                        Forgotten your Password?
                    </div>
                </div>
                <div className="LoginDetails" style ={{margin: "1%"}}>
                   <span className="instaSignup"> Don't have an Account? Sign up </span>
                </div>
                Get the App
                <div className="AppLogin" style ={{margin: "1%"}}>
                    <Image src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
                    <Image src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
                </div>
            </div>
        )
    }


}