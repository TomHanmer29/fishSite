import React, {useEffect, useState} from 'react';
import logo from './jon.gif'
import nogo from './plastic.gif';
import './App.scss';
import FishHead from "./FishHead";
import randomColor from "randomcolor";
import PoemDisplay from "./PoemDisplay";

interface RandomColorOptionsSingle {
    hue?: number | string | undefined;
    luminosity?: "bright" | "light" | "dark" | "random" | undefined;
    seed?: number | string | undefined;
    format?: "hsvArray" | "hslArray" | "hsl" | "hsla" | "rgbArray" | "rgb" | "rgba" | "hex" | undefined;
    alpha?: number | undefined;
}

const App = () => {
    const [backgroundGood, setBackgroundGood] = useState(false);
    const textX = Math.floor(window.innerWidth/120)
    const textY = Math.floor(window.innerHeight/50)
    const colours: RandomColorOptionsSingle[] = [{hue:"pink",luminosity:"bright"},{hue:"green",luminosity:"bright"},{hue:"blue",luminosity:"bright"},{hue:"red",luminosity:"bright"}]

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    onmousemove = function(e){
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    const getRandomColour = () => {
        return colours[Math.floor(Math.random()*colours.length)]
    }

    useEffect(() => {
        console.log(mouseX, mouseY)
    }, [mouseX,mouseY]);

    return (
        <div className="App">
            <div className={"AppBody"}>
                {backgroundGood && (
                    <div className={"fishDeathContainer"}>
                        {[...Array(textY)].map((_e,i)=><div className="fishDeathText" key={i}>
                            {[...Array(textX)].map((_e,i)=><div className="singleFishText" style={{color:randomColor(getRandomColour())}}><p>FISH&nbsp;</p>
                            </div>)}
                        </div>)}
                    </div>
                )}
                <header className="App-header">
                    <div className="contentsContainer">
                        <button
                          className="App-link"
                          onClick={() => setBackgroundGood(true)}
                          style={{display:backgroundGood?"none":"block"}}
                        >
                          Learn to FISH
                        </button>
                    </div>
                    <div className={"fishHeadBox"}>
                        {backgroundGood && (
                            <>
                                <FishHead type={"zoinks"}/>
                                <PoemDisplay/>
                            </>
                        )}
                    </div>
                    <div className={"fishDeathContainer"}>
                        <img src={backgroundGood?nogo:logo} className="App-logo" alt="logo" style={{display:backgroundGood?"none":"block"}}/>
                        <img src={backgroundGood?nogo:logo} className="App-logo" alt="logo" style={{display:backgroundGood?"block":"none"}}/>
                        <img src={backgroundGood?nogo:logo} className="App-logo" alt="logo" style={{display:backgroundGood?"block":"none"}}/>
                        <img src={backgroundGood?nogo:logo} className="App-logo" alt="logo" style={{display:backgroundGood?"block":"none"}}/>
                        <img src={backgroundGood?nogo:logo} className="App-logo" alt="logo" style={{display:backgroundGood?"block":"none"}}/>
                    </div>
                    <div className={"cursorBox"} style={{transform:`translate(${mouseX-(window.innerWidth/2)+62}px,${mouseY-(window.innerHeight*1.425)}px)`}}>

                    </div>
                </header>
            </div>
        </div>
    );
}

export default App;
