import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [musicTool, setMusicTool] = useState(0);
  const { id, tool, description, image } = data[musicTool];

  const previosMusicTool = () => {
    setMusicTool((musicTool) => {
      musicTool--;
      if (musicTool < 0) {
        return data.length - 1;
      }
      return musicTool;
    });
  }

  const nextMusicTool = () => {
    setMusicTool((musicTool) => {
      musicTool++;
      if (musicTool > data.length - 1) {
        musicTool = 0;
      }
      return musicTool;
    });
  }

  const removeMusic = (idToRemove) => {
    const newData = data.filter((musicItem) => musicItem.id !== idToRemove);
    setMusicTool(0);
    data.splice(0, data.length, ...newData);
  };

  return (
    <div>
      <div className='container'>
        <img src={image} alt={tool} width="300px" />
      </div>
      <div className='container'>
        <h1>{id} - {tool} </h1>
      </div>
      <div className='container'>
        <h3>{description}</h3>
      </div>
      <div className="btn container">
        <button onClick={previosMusicTool}>Previos</button>
        <button onClick={() => removeMusic(id)}>Remove</button>
        <button onClick={nextMusicTool}>Next</button>
      </div>
    </div>
  );
}

export default App;