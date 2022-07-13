import './App.css';
// import Hello from './components/Hello'
// import Paid from './components/useStateDemo2'
// import Counter from './components/useReducerDemo'
// import { UserContextProvider } from "./components/useContext/UserContext";
// import Header from "./components/useContext/Header";
// import { ThemeContextProvider } from './components/useContext/ThemeContext';
// import Container from './components/useContext/Container';
import LimitDemo from './components/limitProps/Demo'
function App() {
  return (
    <div className="App">
      {/* <Hello name='hello' />
      <Paid /> */}
      {/* <Counter /> */}
      {/* <UserContextProvider>
        <Header />
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Container />
      </ThemeContextProvider> */}
      <LimitDemo
        name="Boeing 767"
        speed={4000}
        maxHeight={10000}
      // displacement={29999}
      />
    </div>
  );
}

export default App;
