import React, { useState } from 'react';
import {
    MailOutlined,
    LockOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { openNotificationWithIcon } from '../common/notification';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

    const logIn = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'email': email,
                'password': password
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.errors) {
                    openNotificationWithIcon({ type: 'error', title: 'Error', description: 'The email or password is incorrect.' })
                } else {
                    history.push('/posts/all-posts')
                }
            })
    }

    const onInputChange = (e) => {
        const target = e.target;
        if (target.type === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }

    }

    return (<div className={"login"}>
        <div className={"first-div"}>
            <div><img src={require('../../assets/PNG/logo.png')} alt={""} /></div>
            <div><p>{"Log into admin dashboard"}</p></div>
        </div>
        <div className={"last-div"}>
            <div className={"form"}>
                <div><label><span className={"label-span"}><MailOutlined /></span>{"Email address"}</label><input value={email} onChange={onInputChange} type={"email"} /></div>
                <div><label><span className={"label-span"}><LockOutlined /></span>{"Password"}</label><input value={password} onChange={onInputChange} type={"password"} /></div>
            </div>
            <div>
                <p>{"Forgot password?"}</p><p onClick={logIn}>{"Sign in"}</p>
            </div>
        </div>
    </div>);
}

export default Login;