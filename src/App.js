import Header from './components/header/Header.component';
import './App.css';


// creating a component
const greetings = 'Hello to you all';


function App() {
  return (

    <fragment>
      <Header text = "Revision" another = "Of React" greet = {greetings} />
      <div>
        <h1>{greetings}</h1>
      </div>
    </fragment>
  )
}

export default App;
