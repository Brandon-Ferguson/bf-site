import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Projects from './components/shared/Projects';
import Contacts from './components/contacts/Contacts';

const App = () => (
  <> 
    <HNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  
  </>

)


export default App;
