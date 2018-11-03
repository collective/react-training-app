import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Faq from "./components/Faq";

import "./App.css";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Faq />
      </Provider>
    );
  }
}

export default App;
