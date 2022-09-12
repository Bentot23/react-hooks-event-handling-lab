// Code Keypad Component Here
import React from 'react';

function Keypad (){
    return (
        <div>
            <form>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    onChange={() => console.log("Entering password...")}
                />
            </form>
        </div>
    )
}

export default Keypad;