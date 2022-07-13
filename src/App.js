import Header from './components/header/Header.component';
import './App.css';


// creating a component
const greetings = 'Hello to you all';

const comments = [
  {title: 'One', text: 'I am comment 1'},
  {title: 'Two', text: 'I am comment 2'},
  {title: 'Three', text: 'I am comment 3'},

]

function App() {
  return (

    <fragment>
      <Header text = "Revision"/>
      <div>
        <h1>{greetings}</h1>
      </div>
    </fragment>
  )
}

export default App;
