import logo from "./logo.svg";
import "./App.css";
// import { Player } from 'video-react';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";

function App() {
  // const [errorMessage, setErrorMessage] = useState(null);
  const [wallet_address, setWallet_address] = useState(null);

  // const [balance, setBalance] = useState(null);
  const [step, setStep] = useState(1);
  const [stepBG, setBG] = useState(true);

  const [giftData, setGgiftData] = useState({});

  //   const giftData = {
  //   title: "魂—須A佐",
  //   discription:
  //     "只是想弄個夕陽配上我最愛的海，突然想到要搭上主題，所以加了一點時間",
  //   creater: "Zaza#3476",
  // };

  useEffect(() => {
    setWallet_address("0x0F7bd47c73a072341d6A4107Ffdc52A8F6f5C00F");
  }, []);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    if (wallet_address !== null) {
      fetch(
        "https://script.google.com/macros/s/AKfycbxtegeeTq2dErMLqVICe5_LNFi1NfSK0HBmQpHrYRWqyC4jy3uZ1tgOWdVXkGg1Ri_vYQ/exec"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data[wallet_address]);
          setGgiftData(data[wallet_address]);
        });
    }

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [setWallet_address]);

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>MetaMask not available :(</div>;

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
          <button className="Connect-btn" onClick={connect}>
            Connect to MetaMask
          </button>
        </header>
      </div>
    );

  if (status === "connecting")
    return <div className="Connecting">Connecting...</div>;

  if (status === "connected")
    // return <div>Connected account {account} on chain ID {chainId}</div>

    return (
      <div className="App">
        {/* <div>Connected account {account} on chain ID {chainId}</div> */}
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {step == 1 && (
            <video
              onClick={() => {
                alert("開盒");
                ///這裡要Call Api 取得禮物資訊
                setStep(2);
              }}
              autoPlay
              loop
              playsInLine
              className="video-loop .box_video"
              muted
              src="/open_v02_loop.webm"
            />
          )}

          {step == 2 && (
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
          )}
          {step == 3 && (
            <div className="card">
              <img src={giftData.img_url} className="card_img" />
              <div className="card-info">
                {/* <h3 className="card-creater">Zaza#3476</h3> */}
                <h3 className="card-title">{giftData.name}</h3>
                <h3 className="card-discription">{giftData.discription}</h3>
              </div>
              <div className="card-creater">
                <h3 className="creater">禮物來自</h3>
                <h3 className="creater-name">{giftData.dcid}</h3>
              </div>
              {/* <img src="/1973_01.png" className="card_img" /> */}
              {/* <img src="/1973_02.png" className="card_img" /> */}
            </div>
          )}
        </header>
      </div>
    );
}

export default App;
