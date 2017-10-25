import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import store from './store';
import App from './App'

const Root = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent('middlewareDemo', () => Root);
