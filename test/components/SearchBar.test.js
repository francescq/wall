import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../../src/components/SearchBar';

let wrapper;

const props = {
    onSubmit: jest.fn(),
    term: 'mySearchTerm',
};
const fakeEvent = {
    preventDefault: () => {},
};

describe('<SearchBar />', () => {
    beforeEach(() => {
        wrapper = shallow(<SearchBar {...props} />);
    });
    it('should contain the injected searchTerm', () => {
        const field = wrapper.find('#search');

        expect(field).toHaveLength(1);

        expect(field.props().value).toEqual('mySearchTerm');
    });

    it('should not call onSubmit after submit with no changes on term', () => {
        wrapper.find('#search-form').simulate('submit', fakeEvent);

        expect(props.onSubmit).toBeCalledTimes(0);
    });

    it('should call onSubmit after term change submit', () => {
        wrapper
            .find('#search')
            .simulate('change', { target: { value: 'myNewTerm' } });

        wrapper.find('#search-form').simulate('submit', fakeEvent);

        expect(props.onSubmit).toBeCalledTimes(2);
        expect(props.onSubmit).toHaveBeenCalledWith('myNewTerm');
    });

    it('should call onSubmit after icon click', () => {
        const searchIcon = wrapper.find('#search-icon');
        searchIcon.simulate('change', { target: { value: 'myNewTerm' } });

        wrapper.find('#search-form').simulate('submit', fakeEvent);

        expect(props.onSubmit).toBeCalledTimes(2);
        expect(props.onSubmit).toHaveBeenCalledWith('myNewTerm');
    });
});
