import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homePage';
import DetailPage from './components/detailPage';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">


      <Provider store={store}>
        <Header />
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route path='/detailPage/:name' component={DetailPage} />
        </Router>
        <Footer />
      </Provider>


    </div>
  );
}

export default App;
