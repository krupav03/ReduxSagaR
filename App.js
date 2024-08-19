import React from "react";
import { Provider } from "react-redux";
import CounterRedux from "./src/CounterRedux";
import store from "./Redux/store";

function App () {
  return(
    <Provider store={store}>
      <CounterRedux/>
    </Provider>
  )
}

export default App;