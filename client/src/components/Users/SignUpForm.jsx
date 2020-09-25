import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/Auth';

const SignupForm = ({ handleSignupSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
        <form onSubmit={(evt) => handleSignupSubmit(evt, { username, password, email, name })}>
            <h1>Sign up</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)} />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)} />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)} />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(evt) => setName(evt.target.value)} />

            <input type="submit" value="Sign up" />
            {Auth.isUserAuthenticated() && <Redirect push to="/profile" />}
        </form>
    )
}

export default SignupForm