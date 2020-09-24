import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './components/tab';
import store from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}>
      <Tab/>
  </Provider>
, document.getElementById("root"));

