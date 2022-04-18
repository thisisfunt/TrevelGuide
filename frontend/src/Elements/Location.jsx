import axios from "axios";
import React from "react";
import { useState } from "react";


function Location() {
    const urlParams = new URLSearchParams(window.location.search);
    const [IsDataReceived, setIsDataReceived] = useState(false);
    const [Data, setData] = useState({"fields": {
        "name": "",
        "image": ""
    }});
    if (!IsDataReceived){
        axios.get('http://127.0.0.1:8000/location/getlocationsbyid?id='+urlParams.get('id'))
        .then(function (response) {
            let json = JSON.parse(response.data);
            if (typeof json['error'] !== "undefined") {
                window.location= "/";
            } else {
                setData(json[0]);
                setIsDataReceived(true);
            }
        });
    }
    return (
        <div id="screen">
            <div className="locationStat">
                <h1>{Data.fields.name}</h1>
                <img src={"http://127.0.0.1:8000/"+Data.fields.image} alt="" />
                <p>{Data.fields.description}</p>
            </div>
        </div>
    )
}

export default Location;