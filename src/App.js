
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
  <>
    <Navbar title = 'Ronak' />
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
  </>
  );
}

export default App;
