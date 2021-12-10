import { useEffect ,useState} from "react"
const Main=({loc})=>{
    var api=`http://api.weatherstack.com/current?access_key=528ec37e3217f99eeda61f132c3eff44&query=${loc}`
    let [cu,updateCu]=useState({})
    useEffect(()=>{
        function fetchdata(){
            fetch(api).then((res)=>{res.json().then((dt)=>{
                updateCu(dt)
            })})
        }fetchdata()
    },[api])
    if(cu.location){
        return (
            <div>
                <h3>Statistics</h3>
                <div className='card pt-5'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col'>{cu.request.type} : {cu.request.query}</div>
                            <div className='col'>country : {cu.location.country}</div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div>
                                <img {...{src:cu.current.weather_icons[0]}} alt='cant load..' style={{width:150,height:150}}></img>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col'>Wind Speed : {cu.current.wind_speed}</div>
                            <div className='col'>Temperatue : {cu.current.temperature} <span style={{fontSize:15}}>&#8451;</span></div>
                            <div className='col'>Weather description : {cu.current.weather_descriptions[0]}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        null
    )
}


export default Main