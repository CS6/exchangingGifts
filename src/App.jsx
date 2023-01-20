import logo from './logo.svg';
import './App.css';
// import { Player } from 'video-react';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";


function App() {

  // const [errorMessage, setErrorMessage] = useState(null);
  // const [account, setAccount] = useState(null);
  // const [balance, setBalance] = useState(null);
  const [step, setStep] = useState(1);
  const [stepBG, setBG] = useState(true);


  const { status, connect, account, chainId, ethereum } = useMetaMask();
  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>

  if (status === "unavailable") return <div>MetaMask not available :(</div>

  if (status === "notConnected")
    // return <button onClick={connect}>Connect to MetaMask</button>
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <video
            autoPlay
            loop
            playsInLine
            className="video-Connect .Connect_video"
            muted
            src="/assembly.mp4"
          />
          <button className="Connect-btn"
            onClick={connect}>Connect to MetaMask</button>
        </header>

      </div>)

  if (status === "connecting") 
  
  return <div className="Connecting">Connecting...</div>

  if (status === "connected")
    // return <div>Connected account {account} on chain ID {chainId}</div>

    return (
      <div className="App">
        {/* <div>Connected account {account} on chain ID {chainId}</div> */}
        <header className="App-header" >
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {step == 1 && <video
            onClick={
              () => {
                alert("click");
                setStep(2);
              }
            }
            autoPlay
            loop
            playsInLine
            className="video-loop .box_video"
            muted
            src="/open_v02_loop.webm"
          />}

          {step == 2 &&
            <>
              <video
                autoPlay
                playsInLine
                className="video-box .box_video"
                muted
                src="/open_v02_mix.webm"
                onEnded={() => setStep(3)}
              />
              {/* <video
                autoPlay
                playsInLine
                className="video-mask"
                muted
                src="/open_v02_mask.mp4"
              /> */}
            </>
          }
          {step == 3 && <div className="card">
            <img src="https://github.com/sddivid/ES-gift-img/blob/119ed4525fc507e6b145d1d917825a1697eab62d/imgs/0001_01.gif?raw=true" className="card_img" />
            <div className="card-info">
              {/* <h3 className="card-creater">Zaza#3476</h3> */}
              <h3 className="card-title">魂—須佐</h3>
              <h3 className="card-discription">只是想弄個夕陽配上我最愛的海，突然想到要搭上主題，所以加了一點時間</h3>
            </div>
            <div className="card-creater">
              <h3 className="creater">禮物來自</h3>
              <h3 className="creater-name">Zaza#3476</h3>
            </div>
            {/* <img src="/1973_01.png" className="card_img" /> */}
            {/* <img src="/1973_02.png" className="card_img" /> */}
          </div>}
        </header>
      </div>
    );
}

export default App;
