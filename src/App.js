import Header from './components/header/Header.component';
import './App.css';


// creating a component
const greetings = 'Hello to you all';
const goodbye = 'Ok bye for now!'


function App() {
  return (

    <fragment>
      <Header text = "First Prop" another = "Yet another prop" greet = {greetings} />
      <div>
        
      </div>
    </fragment>
  )
}

export default App;
