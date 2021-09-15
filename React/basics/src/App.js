
import './App.css';
import ClassDemo from './ClassComponent/ClassDemo';
import Test from './components/Test';
import TestAgain from './components/TestAgain';
function App() {
  return (
    <div className="App">
      <h1>React Basics</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, exercitationem officia. Earum voluptatibus vero consequuntur neque dicta? Blanditiis, ad odit.xz</p>
      <Test/>
      <TestAgain/>

      <ClassDemo/>
    </div>
  );
}

export default App;
