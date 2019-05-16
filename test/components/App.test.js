import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../src/components/App';
import Header from '../../src/components/Header';
import ItemsList from '../../src/components/ItemsList';

let props = {};
let app;

describe('<App />', () => {
    beforeEach(() => {
        props = {
            getFavourites: jest.fn(),
            searchItem: jest.fn(),
        };
        app = shallow(<App {...props} />);
    });

    test('renders the component', () => {
        expect(app.find(Header)).toHaveLength(1);
    });

    it('renders three <ItemList /> components', () => {
        expect(app.find(ItemsList)).toHaveLength(1);
    });

    it('should load favourites', () => {
        expect(props.getFavourites).toBeCalledTimes(1);
    });

    it('should show all items after initial load', () => {
        expect(props.searchItem).toBeCalledTimes(1);
    });
});
