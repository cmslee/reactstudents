import './App.css';

import {studentData} from './data/StudentData';
import Student from './components/Student';


function App() {
 
  return (
    <div className="App">
      <h1>Students</h1>
      {studentData.map ((student) => 
        <Student student={student}/>
      )}
    </div>
  );
}

export default App;
