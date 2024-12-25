
import { useDispatch } from 'react-redux';
import './App.css';
import Routing  from "./pages/routing/Routing"
import { useEffect,useState } from 'react';
import { getCurrentUser } from './store/slices/authSlice';
import Loader from './components/loader/Loader';
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    dispatch(getCurrentUser(setLoading));
  },[])
  return (
    <div className="App">
    {loading ? <Loader/> : <Routing />}
  </div>
  );
}

export default App;
