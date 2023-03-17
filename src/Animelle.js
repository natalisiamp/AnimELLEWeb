import React, { useState, useCallback } from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

import './Animelle.css';

import logo from './Assets/logo0309.svg';
import instruct from './Assets/instructions1 (1).png';
import tito from './Assets/tito.png';


import a from './Assets/akey.svg';
import e from './Assets/ekey.svg';
import p from './Assets/pkey.svg';
import q from './Assets/qkey.svg';
import keys from './Assets/keyboard.png';
import cursor from './Assets/mouse.svg';
// import space from './Assets/space.svg';




function Animelle() {


  const { unityProvider } = useUnityContext({
    loaderUrl: "/webgl/Build/animelle0227.loader.js",
    dataUrl: "/webgl/Build/animelle0227.data",
    frameworkUrl: "/webgl/Build/animelle0227.framework.js",
    codeUrl: "/webgl/Build/animelle0227.wasm",

  });
  const { requestFullscreen } = useUnityContext({
    loaderUrl: "/webgl/Build/animelle0227.loader.js",
    dataUrl: "/webgl/Build/animelle0227.data",
    frameworkUrl: "/webgl/Build/animelle0227.framework.js",
    codeUrl: "/webgl/Build/animelle0227.wasm",

  });


  //fullscreen
  function handleClick() {
    console.log("pressing button");
    requestFullscreen(true);
  }


  // We'll use a state to store the device pixel ratio.
  // const [devicePixelRatio, setDevicePixelRatio] = useState(
  //   window.devicePixelRatio
  // );

  // const handleChangePixelRatio = useCallback(
  //   function () {
  //     // A function which will update the device pixel ratio of the Unity
  //     // Application to match the device pixel ratio of the browser.
  //     const updateDevicePixelRatio = function () {
  //       setDevicePixelRatio(window.devicePixelRatio);
  //     };
  //     // A media matcher which watches for changes in the device pixel ratio.
  //     const mediaMatcher = window.matchMedia(
  //       `screen and (resolution: ${devicePixelRatio}dppx)`
  //     );
  //     // Adding an event listener to the media matcher which will update the
  //     // device pixel ratio of the Unity Application when the device pixel
  //     // ratio changes.
  //     mediaMatcher.addEventListener("change", updateDevicePixelRatio);
  //     return function () {
  //       // Removing the event listener when the component unmounts.
  //       mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
  //     };
  //   },
  //   [devicePixelRatio]
  // );


  return (

    <div className='container'>

      <div className='gameContainer'>

        <Unity unityProvider={unityProvider}
          style={{
            height: 900,
            width: 900,

            background: "transparent"
          }} devicePixelRatio={devicePixelRatio} />

        <div className="btn">
          <button type="button" class="btn btn-light" onClick={handleClick}>Fullscreen</button>
        </div>


      </div>


      <div className='divContainer'>

        <div className='instruct-filler'>
          <h4>Listen to Tito!</h4>
          <img src={tito} className='tito' alt="tito" />
        </div>

        <div className='logoContainer'>


          <div className='imgContainer'>
            <img src={logo} className='logo' alt="game logo" />
            <h3 className='credits'>Credits:</h3>
          </div>




          <div className="row">

            <div className="column">
              <p className='names'>Tam Nguyen </p>
              <p className='names'>Justin Reeves</p>
              <p className='names'>Natali Siam-Pollo</p>
            </div>

            <div className="column">
              <p className='names'>Derek Dyer</p>
              <p className='names'>Trevor Larson</p>
            </div>

          </div>  {/*<!--row--> */}

        </div> {/*<!--logo--> */}

        <div className='instruct-actual'>

          <img src={instruct} className='instruct' alt="game logo" />

          <div className="keyContainer">
            <img src={keys} className='keys' alt="keys" />
            <p className='instructions'> - Moving the Player </p><br></br>
          </div>

          <div className="keyContainer">
            <img src={cursor} className='keys' alt="keys" />
            <p className='instructions'>- Hovering Tooltips, Button Selection</p><br></br>
          </div>

          <div className="keyContainer">
            <img src={e} className='keys' alt="keys" />
            <p className='instructions'>- For interacting with objects/NPCs with Emotes, Continue Dialogue</p><br></br>
          </div>

          <div className="keyContainer">
            <img src={q} className='keys' alt="keys" /><br></br><br></br>
            <p className='instructions'>- Opening Fast Travel Menu</p><br></br>
          </div>

          <div className="keyContainer">
            <img src={p} className='keys' alt="keys" /><br></br><br></br>
            <p className='instructions'>- Opening Pause Menu</p><br></br>
          </div>

          <div className="keyContainer">
            <img src={a} className='keys' alt="keys" /><br></br><br></br>
            <p className='instructions'>- Opening "Ask Tito" Menu</p><br></br>
          </div>

          <br></br>
          <br></br>
          <p className='instructions'>-Scavenger Hunt:<br></br><br></br>"Spacebar" - For picking up Scavenger Hunt items, Continue Dialogue</p><br></br>

          <br></br>




          {/* CONTROLS FOR ANIMELLE CROSSING:

- General:
* Arrow Keys - Moving the Player
* Mouse - Hovering Tooltips, Button Selection
* "E" Key - For interacting with objects/NPCs with Emotes, Continue Dialogue
* "Q" - Opening Fast Travel Menu
* "P" - Opening Pause Menu
* "A" - Opening "Ask Tito" Menu


-Scavenger Hunt:
* W/A/S/D - Moving the Player
* Mouse -  Button Selection
* "E" Key - For interacting with NPCs with Emotes
* "Spacebar" - For picking up Scavenger Hunt items, Continue Dialogue 

- Matching Game, Fill-In-The-Blank, Multiple Choice
* Mouse -  Button Selection */}
        </div>


      </div> {/*<!--divContainer--> */}


    </div>



  );
}

export default Animelle;
