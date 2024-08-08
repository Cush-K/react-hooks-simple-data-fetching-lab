import React, { useState, useEffect } from "react";

function App(){

    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setImage(data.message))
    }, [])

    if(!image){
        return <p>Loading ... </p>
    }

    return (
        <div>
            <p>Here's a lovely dog for you</p>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App;