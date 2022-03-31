import React from "react";


function MainElement() {
    
    return (
        <div id="screen">
            <div className="search">
                <input type="text" />
            </div>

            <div id="locations">
                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h2>location 1</h2>
                    </a>
                </div>

                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h2>location 2</h2>
                    </a>
                </div>

                <div className="location">
                    <a href="">
                        <img src="https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg" alt="" />
                        <h2>location 3</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MainElement;