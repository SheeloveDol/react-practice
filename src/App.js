
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
    <div>
      <h1>{greetings}</h1>
      <h3>Comments: ({comments.length})</h3>
      <ul>
        {
          comments.map((comment, index) => (
            <li>{comment.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
