import manga from './manga.jpg';
import './App.css';
import CharactersList from './Containers/CharactersList'

function App (){
  
  return (
    <div className="App">
      <img src={manga} alt='manga'/>
      <CharactersList />
    </div>
  );

}

export default App;
