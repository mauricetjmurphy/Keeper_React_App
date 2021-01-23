import React from 'react';
import Header from './Components/header/header.component';
import Footer from './Components/footer/footer.component';
import NoticeBoard from './Components/notice board/notice-board.component';
import './App.css';

function App() {
 return (
  <div className='App'>
   <Header brandName='Keeper' />
   <NoticeBoard />
   <Footer />
  </div>
 );
}

export default App;
