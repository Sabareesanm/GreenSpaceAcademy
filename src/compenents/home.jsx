import train2 from '../assests/train2.jpg'

export function Home2(){
return(
    <>
    <div 
    className='background-img'
    // style={{backgroundImage: `url(${train2})`}}
    >
        {/* <img src={train}  style={{width:'100%'}}/> */}
     <p style={{ padding: '25px'}}> Welcome to
     <strong style={{
          color: 'white',
          textShadow: '2px 2px 4px #000000'
     }}> Green Space Academy
     </strong>    Get trained by professionals </p>
     <img src={train2} width='100%'/>
     </div>
    </>
)
}