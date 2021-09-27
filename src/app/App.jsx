/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Main from './scenes/Main'
import 'semantic-ui-css/semantic.min.css'
import { Global } from '@emotion/react'



const App = ({ store }) => (
  <Provider store={store}>
    <Global styles={css`
      #app {
        height: 100vh;
        width: 100vw;
      }
    `} />
      <Main />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
