import logo from './logo.svg';
import './App.css';
// import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video 
       autoPlay 
       loop
       playsInLine
       className="video-background" 
       muted
       src="/open_v02_loop.webm"
     />
        {/* <Player
          autoPlay
          playsInline
          // poster="/assets/poster.png"
          src="/open_v02_loop.webm"
        /> */}
        {/* <video controls="" autoplay="" name="media" src="/open_v02_loop.webm" type="video/webm"></video> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
