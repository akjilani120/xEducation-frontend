
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <ToastContainer />
    </div>
  );
}

export default App;
