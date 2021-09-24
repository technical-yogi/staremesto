import './App.css';
import HumanResourceSecurity from './SOA/HumanResourceSecurity';
import { Provider } from "react-redux";
import store from './store'
function App() {
  return (
    <Provider store={store}>
     <HumanResourceSecurity/>
     </Provider>
  );
}
export default App;
