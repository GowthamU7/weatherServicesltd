import Main from "./Weather/main"
import { useState } from "react"
const Body=({data})=>{
    let [loc,updateLoc]=useState('')
    return (
        <div className="container text-center">
            <div className='row'>
                <h2>Relavant Locations</h2>
                <div className='col'>
                    {
                        data.map((ele)=>{
                            return (
                                <div className='row pt-4 pb-2 border'>
                                    <div className='col-8'>
                                        <p>{ele.place_name}</p>
                                    </div>
                                    <div className='col'>
                                        <button className='btn-sm btn-info' onClick={()=>{updateLoc(ele.place_name)}}>find weather</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Main loc={loc}/>
        </div>
    )
}



export default Body