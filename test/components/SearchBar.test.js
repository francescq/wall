import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, renderInput } from '../../src/components/SearchBar';
import { Field } from 'redux-form';

let wrapper;

const onSubmit = jest.fn();

const props = {
    initialValues: {
        term: 'mySearchTerm',
    },
    onClick: onSubmit,
    handleSubmit: () => onSubmit,
    fields: {
        search: {
            value: 'mySearchTerm',
        },
    },
};

describe('<SearchBar />', () => {
    beforeEach(() => {
        wrapper = shallow(<SearchBar {...props} />);
    });
    it('should contain a Field', () => {
        const field = wrapper.find(Field);

        expect(field).toHaveLength(1);
    });

    it('should call onSubmit after submit', () => {
        wrapper.find('#search-form').simulate('submit');

        expect(props.onClick).toBeCalledTimes(1);
    });

    it('should call onSubmit after icon click', () => {
        const searchIcon = wrapper.find('#search-icon');

        searchIcon.prop('onClick')();

        expect(props.onClick).toBeCalledTimes(2);
    });
});
