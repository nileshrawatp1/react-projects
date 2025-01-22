import React, { useState } from 'react'
import validator from 'validator';

const CardValidate = () => {

    const [errorMsg, setErrormsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')

    const validateCard = (val) => {
        if (val == '') {
            setSuccessMsg('');
            setErrormsg('');
        } else if (validator.isCreditCard(val)) {
            setErrormsg('');
            setSuccessMsg('CreditCard is Correct')
        } else {
            setSuccessMsg('');
            setErrormsg('Entered Card is invalid');
        }
    }

    return (
        <div className='container'>
            <h1>Enter to validate Credit Card</h1>
            <div className="input-container">
                <input type="text" name="credit-Card" id="" placeholder=' ' onChange={e => validateCard(e.target.value)} />
                <label htmlFor="credit-Card">Enter Card Number</label>
                {errorMsg && <p className='msg errorMsg'>{errorMsg}</p>}
                {successMsg && <p className='msg successMsg'>{successMsg}</p>}
            </div>
        </div>
    )
}

export default CardValidate
