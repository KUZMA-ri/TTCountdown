import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal';
import Arrow from '../../images/arrow.svg';
import styles from './form.module.scss';

const Form = () => {
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [emailError, setEmailError] = useState("Field must not be empty");
    const [validForm, setValidForm] = useState(false);
    const [sendStatus, setSendStatus] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    console.log(modalActive);
    
    useEffect(() => {
        if(emailError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    });

    const blurHandler = (e) => {                        // при покидании курсора с поля ввода
        setEmailInvalid(true)
    }

    const emailHandler = ((e) => {                      // валидация
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

    const sendEmail = (e) => {                                          // отправка email                                              
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

                if(statusData >= 200 && statusData < 300) {             // получаем статус отправления
                    setModalActive(true);
                    console.log('ok');
                } else {
                    setModalActive(false);
                }

                setSendStatus(statusData);
            })
            .catch((error) => {
                console.log(error);
            });

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