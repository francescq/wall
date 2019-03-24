import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import ConnectedApp, { App } from '../../src/components/App';
import Header from '../../src/components/Header';
import ItemDetail from '../../src/components/items/ItemDetail';
import ItemsList from '../../src/components/ItemsList';

let props = {};
let app;

describe('<App />', () => {
    beforeEach(() => {
        props = {
            getFavourites: jest.fn(),
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
});
