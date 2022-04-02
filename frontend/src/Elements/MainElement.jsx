import React from "react";
import { useState } from "react";
import axios from 'axios';


function Location(props){
    return (
        <div className="location">
            <a href={props.href}>
                <img src={props.img} alt="" />
                <h1>{props.name}</h1>
            </a>
        </div>
    );
}

function MainElement() {
    
    const [CitySearch, setCitySearch] = useState("");
    const [IsCitySearchListShow, setIsCitySearchListShow] = useState(false);
    const [CityId, setCityId] = useState(null)
    const [CitySearchList, setCitySearchList] = useState([])
    
    function ChangeCityField(e){
        setCitySearch(e.target.value);
        if (e.target.value.length > 0){
            axios.get('http://127.0.0.1:8000/location/searchvitiesbypart?format=json&string='+e.target.value)
            .then(function (response) {
                let json = JSON.parse(response.data);
                setCitySearchList(json);
            });
        } else {
            setCitySearchList([]);
        }
    }

    function ClickOnCityVatiable(id){
        setCityId(id);
        setIsCitySearchListShow(false);
    }

    function ResultLine(props) {
        return (
            <div className="result" onClick={e => ClickOnCityVatiable(props.id)}>{props.name}</div>
        )
    }

    return (
        <div id="screen">
            <div className="search">
                <input type="input" autoComplete="off" placeholder="City" name="name" value={CitySearch} onInput={e => ChangeCityField(e)} onFocus={e => setIsCitySearchListShow(true)}/>
                {IsCitySearchListShow &&
                    <div className="results" >
                        {CitySearchList && CitySearchList.map((element, index) =>
                            <ResultLine name={element.fields.name} id={element.pk}/>
                        )}
                    </div>
                }
            </div>

            <div id="locations">
                <Location name="location 1" href="google.com" img="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg"/>
                <Location name="location 2" href="google.com" img="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg"/>
                <Location name="location 3" href="google.com" img="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg"/>
            </div>
        </div>
    );
}

export default MainElement;