
import './App.css';
import ClassDemo from './ClassComponent/ClassDemo';
import Test from './components/Test';
import TestAgain from './components/TestAgain';
import ProductDemo from './Props/ProductDemo';
import ProductTable from './Props/ProductTable';
import PropsDemo from './Props/PropsDemo';
function App() {
  let username= "abc"
  return (
    <div className="App">
      {/* <h1>React Basics</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, exercitationem officia. Earum voluptatibus vero consequuntur neque dicta? Blanditiis, ad odit.xz</p>
      <Test/>
      <TestAgain/>

      <ClassDemo/> */}

      <PropsDemo user={["abc","xyz"]} isActive="active" />

      <ProductDemo/>
    </div>
  );
}

export default App;
