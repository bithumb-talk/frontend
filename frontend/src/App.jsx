import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './router/Router';
import { Footer } from './components/index';

function App() {
  return (
    <>
      <Router />
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
