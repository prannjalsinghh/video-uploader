import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';
import SearchPage from './components/SearchPage'
import ContactModal from './components/ContactModal';
import { Modal } from '@mui/material';
import VideoRecorder from './components/VideoRecorder';
import {Routes, Route } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'
import Profile from './components/Profile';
import Player from './components/Player';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchPage/>}></Route>
        <Route path='/contacts' element={<ContactModal/>}></Route>
        <Route path='/recorder' element={<VideoRecorder/> }></Route>
        <Route path='/loading' element={<LoadingPage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/player' element={<Player/>}></Route>
      </Routes>    
    </div>
  );
}

export default App;
