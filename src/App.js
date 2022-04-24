
import {Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Error from './Component/Error';
import Header from './Component/Header';

import Footer from './Component/Footer';
import Body from './Component/Body';
//import All from './Component/All';
import Ajax from './Component/Ajax';
import Post from './Component/Post';
import Post2 from './Component/Post2';
function App() {
  
  return (
   <>
   
   <Header/>
   
  
   
  
   <Routes>
   <Route  path='/' element={<Home/>} />
   <Route path="/*" element={<Error/>}/>
   <Route path="/Body" component={Body}/>
   <Route path="/Ajax" element={<Ajax/>}/>
   <Route path="/Post" element={<Post/>}/>
   <Route path="/Post2" element={<Post2/>}/>
   
   </Routes>
   
   <Footer/>
   
   </>
  );
}

export default App;
