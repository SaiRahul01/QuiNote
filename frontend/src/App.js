
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainHome from './screens/MainHome';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MyNotes from './screens/Notes/MyNotes';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import CreateNote from './screens/Notes/CreateNote';
import UpdateNote from './screens/Notes/UpdateNote';
import { useState } from 'react';
import Profile from './screens/Profile/Profile';

function App() {

    const [search, setsearch] = useState('')

    console.log(search);
  return (
    
    <BrowserRouter>
      
    <Header setsearch={setsearch}/>
    

      <main>
      <Routes>
      <Route exact path="/" element={<MainHome/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/mynotes" element={<MyNotes search={search}/>}/>
      <Route exact path="mynotes/createnote" element={<CreateNote/>}/>
      <Route exact path="note/:id" element={<UpdateNote/>}/>
      </Routes>
      </main>
      <Footer/>
      

     
    </BrowserRouter>
  );
}

export default App;
