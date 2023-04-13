import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(json => {
      setData(json);
      setAuthor(json[1])
    }
    );
  },[])

  function rendomAuthor(data) {
    return(data[Math.floor(Math.random() * 100)]);
  }

  function clickOnNewQuote() {
    setAuthor(rendomAuthor(data))
  }


  return (
    <div className="App">
      <p className='heading'>Project 3: Quote Generator</p>
      <div className='authordata'>
        <div className='inner_box'>
          <button onClick={clickOnNewQuote}>New Quote</button>
          <p className='text' >“{author?.text}</p>
          <p className='author_name'>– {author?.author}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
