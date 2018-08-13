import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'
import { IntlProvider } from 'react-intl';

import DataLoader from './DataLoader'
import configureStore from './store'

const store = configureStore(window.__INITIAL_STATE__)

if (__DEV__) {
  ReactDOM.render(
    <IntlProvider locale="en-GB">
      <AppContainer>
        <Provider store={ store }>
          <BrowserRouter>
            <DataLoader />
          </BrowserRouter>
        </Provider>
      </AppContainer>
    </IntlProvider>,
    document.getElementById('app')
  )
  // Hot reloading on the client
  if (module.hot) {
    module.hot.accept()
  }
} else {
  ReactDOM.render(
    <IntlProvider locale="en-GB">
      <Provider store={ store }>
        <BrowserRouter>
          <DataLoader />
        </BrowserRouter>
      </Provider>
    </IntlProvider>,
    document.getElementById('app')
  )
}
