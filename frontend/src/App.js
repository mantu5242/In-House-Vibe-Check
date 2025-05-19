import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import LandingPage from './Pages/LandingPage';
import QuizPage from './Pages/QuizPage';
import ResultPage from './Pages/ResultPage';
import BackgroundStyle from './Components/BackgroundStyle';

  function App() {
    return (
      <>
      <BackgroundStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/' element = {<LandingPage/>}/>
          <Route path ='/quiz' element= {<QuizPage/>}/>
          <Route path='/quiz/result' element = {<ResultPage/>} />
        </Routes>
      </BrowserRouter>
      </>
    );
  }

export default App;
