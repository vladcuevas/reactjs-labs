
import React, { useState } from 'react';

export default function Login(params)
{
        return (
        <>
            <button onClick={handleLoginClick}>
                Login
            </button>
        </>
    )
}

/// convention: It must always start with handle
function handleLoginClick() {
    console.log("Logging ... ")
}