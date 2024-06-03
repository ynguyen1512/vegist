import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app-container">
        {/* <ScaleLoader color="#008001" loading={statusLoading} cssOverride={override} /> */}
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="app-content">
            <Outlet />
          </div>
        </div>
        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
