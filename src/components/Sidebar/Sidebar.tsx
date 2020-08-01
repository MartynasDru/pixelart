import * as React from 'react';
import './Sidebar.scss';
import {useRef, useState} from 'react';
import {Button} from '../common/Button/Button';
import {Checkbox} from '../common/Checkbox/Checkbox';
import {joinTruthy} from '../../utils/utils';

interface IFormInfo {
    email: {
        email: string,
        error: string
    };
    password: {
        password: string,
        error: string
    };
    rememberMe: boolean;
}

export const Sidebar: React.FunctionComponent = () => {
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const passwordInputRef = useRef<HTMLInputElement | null>(null);
    const [formInformation, setFormInformation] = useState<IFormInfo>({
        email: {
            email: '',
            error: ''
        },
        password: {
            password: '',
            error: ''
        },
        rememberMe: false
    });

    const checkIsEmailValid = () => {
        const emailPattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const formInfoCopy = Object.assign({}, formInformation, {});
        let isValid = true;

        if (emailInputRef.current) {
            formInfoCopy.email.email = emailInputRef.current?.value
        }

        if (!formInformation.email.email) {
            isValid = false;
            formInfoCopy.email.error = 'Please enter your email.';
        } else {
            if (!emailPattern.test(formInfoCopy.email.email)) {
                isValid = false;
                formInfoCopy.email.error = 'Please enter valid email address.';
            } else {
                formInfoCopy.email.error = '';
            }
        }

        setFormInformation(formInfoCopy);
        return isValid;
    }

    const checkIsPasswordValid = () => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        let isValid = true;

        if (passwordInputRef.current) {
            formInfoCopy.password.password = passwordInputRef.current.value;
        }

        if (!formInfoCopy.password.password) {
            isValid = false;
            formInfoCopy.password.error = 'Please enter your password.';
        } else {
            if (formInfoCopy.password.password.length < 6) {
                isValid = false;
                formInfoCopy.password.error = 'Your password must contain at least 6 symbols.';
            } else {
                formInfoCopy.password.error = '';
            }
        }

        setFormInformation(formInfoCopy);
        return isValid;
    }

    const validateForm = () => {
        const isEmailValid = checkIsEmailValid();
        const isPasswordValid = checkIsPasswordValid();

        return isEmailValid && isPasswordValid;
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted!')
        }
    };

    const handleEmailInputOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        formInfoCopy.email.email = e.target.value;
        setFormInformation(formInfoCopy);
        checkIsEmailValid();
    }

    const handlePasswordInputOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        formInfoCopy.password.password = e.target.value;
        setFormInformation(formInfoCopy);
        checkIsPasswordValid();
    }

    const handleRememberMeInputOnChange = () => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        formInfoCopy.rememberMe = !formInfoCopy.rememberMe;
        setFormInformation(formInfoCopy);
    }

    return (
        <aside className='sidebar'>
            <div
                className='login-box'
            >
                <h3 className='login-box__title'>Client zone</h3>
                <form
                    onSubmit={handleFormSubmit}
                    autoComplete='on'
                >
                    <div className='login-box__inputs-wrapper'>
                        <div
                            className='login-box__field-wrapper'
                        >
                            <div>
                                <label
                                    className='login-box__input-label'
                                >
                                    Email
                                </label>
                                {
                                    formInformation.email.error &&
                                    <span className='login-box__input-error-text'>
                                        {formInformation.email.error}
                                    </span>
                                }
                            </div>
                            <input
                                ref={emailInputRef}
                                type='text'
                                className={joinTruthy([
                                    'login-box__input',
                                    formInformation.email.error && 'error'
                                ])}
                                placeholder='your@email.here'
                                name='email'
                                onBlur={handleEmailInputOnBlur}
                                autoComplete='username'
                            />
                        </div>
                        <div
                            className='login-box__field-wrapper'
                        >
                            <div>
                                <label
                                    className='login-box__input-label'
                                >
                                    Password
                                </label>
                                {
                                    formInformation.password.error &&
                                    <span className='login-box__input-error-text'>
                                        {formInformation.password.error}
                                    </span>
                                }
                            </div>
                            <input
                                ref={passwordInputRef}
                                type='password'
                                className={joinTruthy([
                                    'login-box__input',
                                    formInformation.password.error && 'error'
                                ])}
                                placeholder='********'
                                name='psw'
                                onBlur={handlePasswordInputOnBlur}
                                autoComplete='current-password'
                            />
                        </div>
                        <div
                            className='login-box__field-wrapper'
                        >
                            <Checkbox
                                checked={formInformation.rememberMe}
                                onChange={handleRememberMeInputOnChange}
                                labelText='Remember me'
                            />
                        </div>
                    </div>
                    <Button
                        type='submit'
                        className='login-box__submit-button'
                    >
                        Login
                    </Button>
                </form>
                <div className='login-box__register-link-wrapper'>
                    <a
                        href='/register'
                        className='login-box__register-link'
                    >
                        Register
                    </a>
                </div>
            </div>
        </aside>
    )
};