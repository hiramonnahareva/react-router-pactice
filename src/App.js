import './App.css';
import Home from './conponent/Home/Home';
// import About from './conponent/About/About';
// import Friends from './conponent/Friends/Friends';
import { Route, Routes } from 'react-router-dom';
import Friends from './conponent/Friends/Friends';
import About from './conponent/About/About';
import Header from './conponent/Header/Header';
import NotFound from './conponent/NotFound/NotFound';
import FriendDetail from './conponent/FriendDetail/FriendDetail';
import Posts from './conponent/Posts/Posts';
import POstDetail from './conponent/PostDetail/POstDetail';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/friends" element={<Friends></Friends>}></Route>
       <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
       <Route path="/posts" element={<Posts></Posts>}>
         <Route path=':postId' element={<POstDetail></POstDetail>}></Route>
       </Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="*" element= {<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
