
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
  <>
    <Navbar title = 'Ronak' />
    <div className="container my-3">
      <TextForm heading = 'Enter Your feedbacks'/> 
    </div>
  </>
  );
}

export default App;
