import React from "react";
import { useState } from "react";

function MainElement() {
    
    const [CitySearch, setCitySearch] = useState("");
    const [IsCitySearchListShow, setIsCitySearchListShow] = useState(false);
    const [CityId, setCityId] = useState(null)
    
    function ChangeCityField(e){
        
        setCitySearch(e.target.value)
    }

    function ClickOnCityVatiable(id){
        setCityId(id);
        console.log(id);
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
                        <ResultLine name="city 1" id="1"/>
                        <ResultLine name="city 2" id="2"/>
                        <ResultLine name="city 3" id="3"/>
                    </div>
                    }
            </div>

            <div id="locations">
                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h1>location 1</h1>
                    </a>
                </div>

                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h1>location 2</h1>
                    </a>
                </div>

                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h1>location 3</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MainElement;