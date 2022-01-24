import { useState } from 'react';
import './App.css';
import { ListOfCharacters } from './components/ListOfCharacter';


function App() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage( page + 1);
  }

  const prevPage = () => {
    setPage( page - 1);
  }

  return (
    <div>
      <h1 className="center">Personajes de Rick & Morty</h1>
      <div className='pagination'>
        <button onClick={prevPage} className={page === 1 ? 'disable' : null}> - </button>
          <span>{page}</span>
        <button onClick={nextPage} className={page === 42 ? 'disable' : null}> + </button>
      </div>
      <div className="App">
        <ListOfCharacters page={page}/>
      </div>
      <div className='pagination'>
        <button onClick={prevPage} className={page === 1 ? 'disable' : null}> - </button>
          <span>{page}</span>
        <button onClick={nextPage} className={page === 42 ? 'disable' : null}> + </button>
      </div>
    </div>
  );
}

export default App;
