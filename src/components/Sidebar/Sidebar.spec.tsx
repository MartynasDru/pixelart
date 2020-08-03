import React from 'react';
import * as Enzyme from 'enzyme';
import {checkIsFieldFilled, IFormInfo, Sidebar} from './Sidebar';

describe('Sidebar', () => {
    it('renders without crashing', () => {
        Enzyme.mount(<Sidebar />)
    });

    describe('checkIsFieldFilled', () => {
        let args = {
            formInformation: {
                email: {
                    email: '',
                    isError: false
                },
                password: {
                    password: '',
                    isError: false
                },
                rememberMe: false
            },
            setFormInformation: jest.fn()
        };

        beforeEach(() => {
            args = {
                formInformation: {
                    email: {
                        email: '',
                        isError: false
                    },
                    password: {
                        password: '',
                        isError: false
                    },
                    rememberMe: false
                },
                setFormInformation: jest.fn()
            }
        });

        it('should not detect email error if valid type input is entered', () => {
            const expectedFormInformation = JSON.parse(JSON.stringify(args.formInformation));
            expectedFormInformation.email.isError = false;
            expectedFormInformation.email.email = 'e@gmail.com';

            checkIsFieldFilled(
                expectedFormInformation.email.email,
                'email',
                args.formInformation,
                args.setFormInformation
            );

            expect(args.setFormInformation).toHaveBeenCalledWith(expectedFormInformation);
        });

        it('should not detect password error if there is at least 1 charactered typed into input', () => {
            const expectedFormInformation = JSON.parse(JSON.stringify(args.formInformation));
            expectedFormInformation.password.isError = false;
            expectedFormInformation.password.password = 'e';

            checkIsFieldFilled(
                expectedFormInformation.password.password,
                'password',
                args.formInformation,
                args.setFormInformation
            );

            expect(args.setFormInformation).toHaveBeenCalledWith(expectedFormInformation);
        });

        it('should set email error if it is not filled', () => {
            const expectedFormInformation = JSON.parse(JSON.stringify(args.formInformation));
            expectedFormInformation.email.isError = true;

            checkIsFieldFilled(
                '',
                'email',
                args.formInformation,
                args.setFormInformation
            );
            expect(args.setFormInformation).toBeCalledWith(expectedFormInformation);
        });

        it('should set password error if it is not filled', () => {
            const expectedFormInformation = JSON.parse(JSON.stringify(args.formInformation));
            expectedFormInformation.password.isError = true;

            checkIsFieldFilled(
                '',
                'password',
                args.formInformation,
                args.setFormInformation
            );
            expect(args.setFormInformation).toBeCalledWith(expectedFormInformation);
        });

        it('should toggle remember me when input type checkbox is passed', () => {
            const expectedFormInformation = JSON.parse(JSON.stringify(args.formInformation));
            expectedFormInformation.rememberMe = true;

            checkIsFieldFilled(
                '',
                'checkbox',
                args.formInformation,
                args.setFormInformation
            );

            expect(args.setFormInformation).toBeCalledWith(expectedFormInformation);
        })
    })
})