import React from "react";
import './Header.css'
const Header=({changeLoc})=>{
    function getLocation(){
        var place=document.getElementById('search').value
        changeLoc(place)
    }
    return (
        <div className="container-fluid bg-dark text-center text-white border border-rounded pt-4 pb-3" id="header"> 
            <div className="row">
                <div className="col-3">
                    <h2>Wheather services ltd</h2>
                </div>
                <div className="col-6 text-end">
                    <input type="text" className="form-control" name="search" id="search" required placeholder="search for a relavent place">
                    </input>
                </div>
                <div className="col-3 text-start">
                <button className="btn btn-success" onClick={getLocation}>Get Wheather</button>
                </div>
            </div>
        </div>
    )
}


export default Header