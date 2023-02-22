import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Arrow from '../../images/arrow.svg';
import styles from './form.module.scss';

const Form = ({setModalActive, sendStatus, setSendStatus, setSuccessModal}) => {
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [emailError, setEmailError] = useState("Field must not be empty");
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if(emailError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
        
        if((sendStatus >= 200) && (sendStatus < 300)) {
            setSuccessModal(true);
        } else {
            setSuccessModal(false);
        }
    }, [emailError, sendStatus]);

    
    const blurHandler = (e) => {                        
        setEmailInvalid(true)
    }


    const emailHandler = ((e) => {                      
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ((e.target.value).length === 0) {
            setEmailError('Field must not be empty');

        } else if ((e.target.value).length > 0 && !re.test(e.target.value)) {
            setEmailError('Invalid email')

        } else {
            setEmailError('');
        }

        setEmail(e.target.value);
    })
    

    const sendEmail = (e) => {                                                                                   
        e.preventDefault();
        const randomID = Math.floor(Math.random() * 1000);

        axios({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            data: {
                userId: randomID, 
                id: randomID,
                title: 'email', 
                body: email,
            }, 
        })
            .then((response) => {
                const data = response.data;
                const statusData = response.status;
                setSendStatus(statusData);
            })
            .catch((error) => {
                console.log(error);
            })

        setModalActive(true);
        setEmail('');
    }


    return (
            <form className={styles.form}>
                <input 
                    className={styles.form__email} 
                    name="email"
                    type="text" 
                    value={email}
                    placeholder="Enter your Email and get notified" 
                    onChange={(e) => emailHandler(e)}
                    onBlur={((e) => blurHandler(e))}
                />

                <button 
                    className={styles.form__btn}
                    type='submit'
                    disabled={!validForm}
                    onClick={((e) => sendEmail(e))}
                    >
                    <img src={Arrow} alt="arrow" />
                </button>

                {(emailInvalid && emailError) && (
                    <p className={styles.form__errorMessage}>{emailError}</p>
                )}
            </form>
    )
}

export default Form;