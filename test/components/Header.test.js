import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../src/components/Header';
import SearchBar from '../../src/components/SearchBar';
import SideAction from '../../src/components/SideAction';

let props = {};
let wrapper;

describe('<Header />', () => {
    beforeEach(() => {
        props = {
            setTerm: 'setTerm',
            term: 'mySearchTerm',
        };
        wrapper = shallow(<Header {...props} />);
    });

    test('renders the SearchBar', () => {
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    });

    test('renders the SideAction', () => {
        expect(wrapper.find(SideAction)).toHaveLength(1);
    });

    describe('<SearchBar />', () => {
        test('should inject term of state on SearchBar', () => {
            const searchProps = wrapper.find(SearchBar).props();

            expect(searchProps.term).toEqual('mySearchTerm');
        });

        test('should inject onSubmit on SearchBar', () => {
            const searchProps = wrapper.find(SearchBar).props();

            expect(searchProps.onSubmit).toEqual('setTerm');
        });
    });
});
