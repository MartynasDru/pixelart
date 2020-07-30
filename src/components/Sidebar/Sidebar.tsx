import * as React from 'react';
import './Sidebar.scss';
import {useState} from 'react';
import {Button} from '../common/Button/Button';
import {Checkbox} from '../common/Checkbox/Checkbox';

interface IFormInfo {
    email: string;
    password: string;
    rememberMe: boolean
}

export const Sidebar: React.FunctionComponent = () => {
    const [formInformation, setFormInformation] = useState<IFormInfo>({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleFormSubmit = () => console.log(formInformation);

    const handleEmailInputOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        formInfoCopy.email = e.target.value;
        setFormInformation(formInfoCopy);
    }

    const handlePasswordInputOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formInfoCopy = Object.assign({}, formInformation, {});
        formInfoCopy.password = e.target.value;
        setFormInformation(formInfoCopy);
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
                <form>
                    <div className='login-box__inputs-wrapper'>
                        <div
                            className='login-box__field-wrapper'
                        >
                            <label
                                className='login-box__input-label'
                            >
                                Email
                            </label>
                            <input
                                type='text'
                                className='login-box__input'
                                placeholder='your@email.here'
                                name='email'
                                required
                                onBlur={handleEmailInputOnBlur}
                            />
                        </div>
                        <div
                            className='login-box__field-wrapper'
                        >
                            <label
                                className='login-box__input-label'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                className='login-box__input'
                                placeholder='********'
                                name='psw'
                                required
                                onBlur={handlePasswordInputOnBlur}
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
                        onClick={handleFormSubmit}
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