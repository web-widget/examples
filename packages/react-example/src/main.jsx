import { App, styles } from './App';
import { createContext } from 'react';
import ReactDOM from 'react-dom';

export default () => {
  let rdom;
  let appElement;
  let appStyle;
  return {
    async mount(props) {
      const { Provider } = createContext();

      appElement = document.createElement('div');
      appStyle = document.createElement('style');
      props.container.appendChild(appElement);
      props.container.appendChild(appStyle);

      appStyle.textContent = styles.join('\n');
      rdom = ReactDOM.render(
        <Provider value={props}>
          <App />
        </Provider>,
        appElement,
      );
    },

    async unmount(props) {
      if (rdom && rdom.unmount) {
        // React >= 18
        rdom.unmount();
      } else {
        // React < 18
        ReactDOM.unmountComponentAtNode(appElement);
      }

      props.container.innerHTML = '';
      rdom = appElement = appStyle = null;
    },
  };
};