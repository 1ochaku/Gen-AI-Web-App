import { useState } from 'react';
import './App.css'

function App() {
  // to handle the input given by users
  // we use useState element: need to be imported
  const [query, setQuery] = useState("");
  const [noOfQ, setNoOfQ] = useState(4);
  const [difficulty, setDifficulty] = useState("easy");

  const handleQueryInputChange = (e) => {
    setQuery(e.target.value);
  }
  
  const handleNoOfQChange = (e) => {
    setNoOfQ(e.target.value);
  }
  
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    console.log(noOfQ);
    console.log(difficulty);
  }

  return (
    <div className='main-container'>
      <h1>Gen-AI-Web-App</h1>
      <div className='form-container'>
        <div>
          <label>Query</label>
          <input
            className='query-input'
            type='text'
            placeholder='Enter your query'
            onChange={handleQueryInputChange}
          ></input>
        </div>
        <div>
          <label>Number of Questions: { noOfQ }</label>
          <input
            className='questions-input'
            type='range'
            min={1}
            max={10}
            value={noOfQ}
            onChange={handleNoOfQChange}
          ></input>
        </div>
        <div>
          <label>Difficulty Level</label>
          <select
            className='difficulty-level'
            onChange={handleDifficultyChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          className='submit-btn'
          onClick={handleSubmit}
        >
          Generate Questions
        </button>
      </div>
    </div>
  )
}

export default App
