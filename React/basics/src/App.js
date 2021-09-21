
import './App.css';
import ClassDemo from './ClassComponent/ClassDemo';
import Test from './components/Test';
import TestAgain from './components/TestAgain';
import LoginMsg from './Conditional Rendering/LoginMsg';
import LoginMsgternary from './Conditional Rendering/LoginMsgternary';
import ProductDemo from './Props/ProductDemo';
import ProductTable from './Props/ProductTable';
import PropsDemo from './Props/PropsDemo';
import DisplayMessage from './State/DisplayMessage';
import HandleLogin from './State/HandleLogin';
import ReadMore from './State/ReadMore';
function App() {
  let username= "abc"
  let isLoggedIn=false
  return (
    <div className="App">
      {/* <h1>React Basics</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, exercitationem officia. Earum voluptatibus vero consequuntur neque dicta? Blanditiis, ad odit.xz</p>
      <Test/>
      <TestAgain/>

      <ClassDemo/> */}

      {/* <PropsDemo user={["abc","xyz"]} isActive="active" />

      <ProductDemo/> */}


      {/* State */}
      {/* <DisplayMessage/> */}
      {/* <LoginMsg loginstatus={isLoggedIn}/> */}

      {/* <LoginMsgternary loginstatus={isLoggedIn}/> */}

      {/* <HandleLogin/> */}

      <ReadMore/>
    </div>
  );
}

export default App;
