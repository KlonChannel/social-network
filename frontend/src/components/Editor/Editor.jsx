import React, { useEffect, useState } from 'react';

import FormControl from '../common/FormControl/FormControl';

import style from './Editor.module.css';

const Registration = (props) => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [vk, setVk] = useState('');
    const [telegram, setTelegram] = useState('');
    const [about, setAbout] = useState('');
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameError, setSurnameError] = useState('Surname cannot be empty');
    const [nameError, setNameError] = useState('Name cannot be empty');
    const [cityError, setCityError] = useState('');
    const [professionError, setProfessionError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [vkError, setVkError] = useState('');
    const [telegramError, setTelegramError] = useState('');
    const [aboutError, setAboutError] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
            if (surnameError || nameError || cityError || professionError || emailError || vkError || telegramError || aboutError) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }
    }, [surname, name]);

    const surnameHandler = (e) => {
        setSurname(e.target.value);
        
        const validation = /^[a-zA-Z]{1,31}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length < 1 || e.target.value.length > 31) {
                setSurnameError('The surname must be between 1 and 31 characters long');
            } else {
                setSurnameError('Invalid surname format');
            }
        } else {
            setSurnameError('');
        }
    };

    const nameHandler = (e) => {
        setName(e.target.value);
        
        const validation = /^[a-zA-Z]{1,31}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length < 1 || e.target.value.length > 31) {
               setNameError('The name must be between 1 and 31 characters long');
            } else {
                setNameError('Invalid name format');
            }
        } else {
            setNameError('');
        }
    };

    const cityHandler = (e) => {
        setCity(e.target.value);
        
        const validation = /^[a-zA-Z-]{1,31}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length > 31) {
               setCityError('The city must be less than 31 characters long');
            } else {
                setCityError('Invalid city format');
            }
        } else {
            setCityError('');
        }
    };

    const professionHandler = (e) => {
        setProfession(e.target.value);
        
        const validation = /^[a-zA-Z-]{1,31}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length > 31) {
               setProfessionError('The profession must be less than 31 characters long');
            } else {
                setProfessionError('Invalid profession format');
            }
        } else {
            setProfessionError('');
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        
        const validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length > 127) {
               setEmailError('The email must be less than 127 characters long');
            } else {
                setEmailError('Invalid email format');
            }
        } else {
            setEmailError('');
        }
    };

    const vkHandler = (e) => {
        setVk(e.target.value);
        
        const validation = /^https?:\/\/(?:www\.)?vk\.com(?::\d+)?(?:\/[^\s]*)?$/i;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length > 255) {
               setVkError('The VK URL must be less than 255 characters long');
            } else {
                setVkError('Invalid VK URL format');
            }
        } else {
            setVkError('');
        }
    };

    const telegramHandler = (e) => {
        setTelegram(e.target.value);
        
        const validation = /^https?:\/\/(?:www\.)?t\.me(?::\d+)?(?:\/[^\s]*)?$/i;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length > 255) {
               setTelegramError('The Telegram URL must be less than 255 characters long');
            } else {
                setTelegramError('Invalid Telegram URL format');
            }
        } else {
            setTelegramError('');
        }
    };

    const aboutHandler = (e) => {
        setAbout(e.target.value);
        
        const validation = /^[a-zA-Z0-9\s.,!?'"№#+=%\-:;()]+$/;

        if (!validation.test(String(e.target.value))) {
            setAboutError('Invalid about format');
        } else {
            setAboutError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'surname':
                setSurnameDirty(true);
                break;
            case 'name':
                setNameDirty(true);
                break;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (formValid) {
            props.updateUserInfo(props.id, surname, name, city, profession, email, vk, telegram, about);
        }
    };
    
    return (
        <div className={style.editWindow}>
            <div className={style.editBlock}>
                <h2 className={style.h2}>Edit profile</h2>

                <form className={style.editForm} onSubmit={e => submitHandler(e)}>
                    <input onChange={e => surnameHandler(e)} value={surname} onBlur={e => blurHandler(e)} name='surname' placeholder='Surname' />
                    {(surnameDirty && surnameError) && <FormControl errorText={surnameError} />}
                    
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' placeholder='Name' />
                    {(nameDirty && nameError) && <FormControl errorText={nameError} />}

                    <input onChange={e => cityHandler(e)} value={city} name='city' placeholder='City' />
                    {(cityError && city !== '') && <FormControl errorText={cityError} />}

                    <input onChange={e => professionHandler(e)} value={profession} name='profession' placeholder='Profession' />
                    {(professionError && profession !== '') && <FormControl errorText={professionError} />}

                    <input onChange={e => emailHandler(e)} value={email} name='email' placeholder='Email' />
                    {(emailError && email !== '') && <FormControl errorText={emailError} />}

                    <input onChange={e => vkHandler(e)} value={vk} name='vk' placeholder='VK URL' />
                    {(vkError && vk !== '') && <FormControl errorText={vkError} />}

                    <input onChange={e => telegramHandler(e)} value={telegram} name='telegram' placeholder='Telegram URL' />
                    {(telegramError && telegram !== '') && <FormControl errorText={telegramError} />}

                    <textarea onChange={e => aboutHandler(e)} value={about} name='about' placeholder='About you' maxLength={1000} />
                    {(aboutError && about !== '') && <FormControl errorText={aboutError} />}

                    <button className={style.button}>Confirm</button>
                </form>
            </div>
        </div >
    )
}

export default Registration;