import React from 'react';
import * as Enzyme from 'enzyme';
import {Dropdown, IDropdownProps} from './Dropdown';
import {NavigationTabs, NavigationTabsInfo} from '../../../utils/utils';

describe('Dropdown', () => {
    const setup = (_props?: Partial<IDropdownProps>) => {
        const props: IDropdownProps = Object.assign({}, {
            options: []
        }, _props);

        const wrapper = Enzyme.mount(
            <Dropdown {...props} />
        );

        return {
            wrapper,
            props
        };
    };

    it('renders without crashing', () => {
        const wrapper = setup();
    });

    it('should render as many navigation tab dropdown list rows as there is options passed', () => {
        let {wrapper, props} = setup({
            options: NavigationTabsInfo[NavigationTabs.Portfolio].options
        });
        expect(wrapper.find('[data-qa="dropdown-row"]').length).toBe(props.options.length);
    });
})