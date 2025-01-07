import { useState } from 'react'
import './App.css'
import validator from 'validator';

function App() {

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1,
            minSymbols: 1
        })) {
            setSuccessMsg('Password is strong');
        } else {
            setErrorMsg('Password is weak');
            setSuccessMsg('');
        }
    }

    return (
        <>
            <div className="passvalid-div">
                <h1>Check Password Strength in reactJs</h1>
                <label htmlFor="password-text">Enter Password: </label>
                <input type="text" name="password-text" className='password-text' onChange={e => validate(e.target.value)} />
                {successMsg === '' && <span className='msg'>{errorMsg}</span>}
                {successMsg !== '' && <span className='success-msg'>{successMsg}</span>}
            </div>
        </>
    )
}

export default App
