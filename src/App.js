//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Content from './Components/Content';
import locationData from './data';

function App() {
  const page = locationData.map((element, key)=>{
    return <Content key={key}
              element={element}/>
  })
  return (
    <div className="App">
      <NavBar />
      <div className='page'>
        {page}
      </div>
    </div>
  );
}

export default App;
