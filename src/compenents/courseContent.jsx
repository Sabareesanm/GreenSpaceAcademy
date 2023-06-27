import elastic from '../assests/assests1/elastic.png';
import golang from '../assests/assests1/golang.png';
import iot_devices from '../assests/assests1/iot_devices.avif';
import Maria from '../assests/assests1/Maria.png';
import Mongo from '../assests/assests1/Mongo.png';
import mysql from '../assests/assests1/mysql.png';
import oracle from '../assests/assests1/oracle.png';
import postgre from '../assests/assests1/postgre.png';
import python1 from '../assests/assests1/python1.png';


export default function Courses(){
    return(<>
    <div style={{
        fontFamily:'sans-serif',
        fontSize: '25px',
        fontWeight:'bold',
        padding:'30px 20px 10px'
    }}>We provide training on</div>
    <div class='d-flex justify-content-evenly'>
    <div style={{
        padding: '5px 40px'
    }}>
    {y.map(e=>
    <li className="lists">{e}</li>)}</div>
    <div className='courseImage'>
        <img src={elastic} />
    <img src={golang} />
    <img src={iot_devices} />
    <img src={Maria} />
    <img src={Mongo} />
    <img src={mysql} />
    <img src={oracle} />
    <img src={postgre} />
    <img src={python1} />
    </div>
    </div>
</>)
}
let x=`Angular 
React
Vue
JavaScript,Html,CSS
Java
Python
Go Lang
Ruby
Fullstackdevelopment
Springboot
ReSTAPI
Microservices
DesignPatterns
Oracle
Postgres
MySQL
MongoDB
Neo4J
AWS
GCP
Azure
ArtificialIntelligence
Machinelearning
Deeplearning
IoT
BestpracticesinJavaprogramming
SpringbootBestpractices `
let y=x.match(/\b(\w+)\b/g);
console.log(y);
