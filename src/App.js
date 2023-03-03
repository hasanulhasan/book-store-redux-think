import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
