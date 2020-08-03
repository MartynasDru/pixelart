import * as React from 'react';
import './Sidebar.scss';
import {Dispatch, SetStateAction, useRef, useState} from 'react';
import {Button} from '../common/Button/Button';
import {Checkbox} from '../common/Checkbox/Checkbox';
import {joinTruthy} from '../../utils/utils';

export interface IFormInfo {
    email: {
        email: string,
        isError: boolean
    };
    password: {
        password: string,
        isError: boolean
    };
    rememberMe: boolean;
}

const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

export const checkIsFieldFilled = (
    value: string,
    inputType: string,
    formInformation: IFormInfo,
    setFormInformation: Dispatch<SetStateAction<IFormInfo>>
) => {
    const formInfoCopy = Object.assign({}, formInformation, {});
    switch (inputType) {
        case 'email':
            formInfoCopy.email.email = value;
            const isEmailPatternValid = new RegExp(emailPattern).test(formInfoCopy.email.email);
            (!formInfoCopy.email.email || !isEmailPatternValid) ? formInfoCopy.email.isError = true : formInfoCopy.email.isError = false;
            break;
        case 'password': {
            formInfoCopy.password.password = value;
            !formInfoCopy.password.password ? formInfoCopy.password.isError = true : formInfoCopy.password.isError = false;
            break;
        }
        case 'checkbox': {
            formInfoCopy.rememberMe = !formInformation.rememberMe;
        }
    }
    setFormInformation(formInfoCopy);
};

export const Sidebar: React.FunctionComponent = () => {
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const passwordInputRef = useRef<HTMLInputElement | null>(null);
    const [formInformation, setFormInformation] = useState<IFormInfo>({
        email: {
            email: '',
            isError: false
        },
        password: {
            password: '',
            isError: false
        },
        rememberMe: false
    });

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailInput = emailInputRef.current;
        const passwordInput = passwordInputRef.current;
        emailInput && checkIsFieldFilled(emailInput.value, emailInput.type, formInformation, setFormInformation);
        passwordInput && checkIsFieldFilled(passwordInput.value, passwordInput.type, formInformation, setFormInformation);
    };

    const handleFormOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => checkIsFieldFilled(
        e.target.value,
        e.target.type,
        formInformation,
        setFormInformation
    );

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
                        <div className='login-box__field-wrapper'>
                            <div>
                                <label
                                    className='login-box__input-label'
                                >
                                    Email
                                </label>
                            </div>
                            <input
                                ref={emailInputRef}
                                type='email'
                                className={joinTruthy([
                                    'login-box__input',
                                    formInformation.email.isError && 'error'
                                ])}
                                placeholder='your@email.here'
                                name='email'
                                onChange={handleFormOnInputChange}
                                autoComplete='username'
                                value={formInformation.email.email}
                                pattern={emailPattern}
                            />
                        </div>
                        <div className='login-box__field-wrapper'>
                            <div>
                                <label
                                    className='login-box__input-label'
                                >
                                    Password
                                </label>
                            </div>
                            <input
                                ref={passwordInputRef}
                                type='password'
                                className={joinTruthy([
                                    'login-box__input',
                                    formInformation.password.isError && 'error'
                                ])}
                                placeholder='********'
                                name='psw'
                                onChange={handleFormOnInputChange}
                                autoComplete='current-password'
                                value={formInformation.password.password}
                            />
                        </div>
                        <div className='login-box__field-wrapper'>
                            <Checkbox
                                checked={formInformation.rememberMe}
                                onChange={handleFormOnInputChange}
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