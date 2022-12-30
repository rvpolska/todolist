
import './App.css';
import image from './todolist2.jpg';
import imageTwo from './todolist1.jpg'
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className='app' >
      <img src= { image } width='400px' alt='image1'/>
      <div className='container'>
      <h1>To do list !</h1>
      </div>
      <ToDoList />
      <img src= { imageTwo } width='400px' alt='image2'/>
    </div>
  );
}

export default App;
