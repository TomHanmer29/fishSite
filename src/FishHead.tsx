import head from "./man.gif";
import fastHead from "./fastman.gif"
import React from "react";

const FishHead = (props: { type: string;}) => {
    return (
        <>
        {props.type==="standard"&&(
            <div className="Fish">
            <img src={head} className="FishHead" alt="a fish" />
            </div>
        )}
        {props.type==="weird" && (
            <div className="Fish">
            <img src={fastHead} className="FishDead" alt="a fish" />
            </div>
        )}
        {props.type==="zoinks" && (
            <div className="Fish">
                <img src={fastHead} className="FishHead" alt="a fish" />
            </div>
        )}
        </>
    )
}

export default FishHead