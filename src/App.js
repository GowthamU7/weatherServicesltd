import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { useState,useEffect } from 'react';
function App() {
  let [loc,changeLoc]=useState('guntur')
  var mapbox_url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=pk.eyJ1Ijoic3Jpa2Fyb25lIiwiYSI6ImNrd3l6bG94OTBzNWwyeGxhNzllcHMzZmwifQ.Yq625HSyz1S-7jOjQFRd4Q`
  let [data,updateData]=useState([])
  useEffect(()=>{
    function fectdata(){
      fetch(mapbox_url).then((res)=>res.json().then((dt)=>{
        updateData(dt.features)
      }))
    }fectdata()
  },[mapbox_url])

  return (
    <div>
      <Header changeLoc={changeLoc}/>
      <Body data={data}/>
    </div>
  )
}

export default App;
