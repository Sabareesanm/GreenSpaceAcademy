import startup from '../assests/startup.jpg'
export default function About(){
    return(
        <>
        <div className='aboutUs'>
        <p style={{
            padding:'10px'
        }}>
            <span style={{
            fontWeight:'bold',
        }}>About Us - </span>
        <br /> 
        &nbsp;
        &nbsp;
        &nbsp;
<span style={{ fontFamily:"'Times New Roman', Times, serif",
fontWeight:'bolder',
 textShadow:'0px 0px 0px',
 color:'black'
}}>Green space academy</span> is a startup firm. We are in to developing innovative products, applications and training. 
</p>
<img src={startup} style={{
    maxWidth: '100%',
    padding:'0px 20%'
}}/>
</div></>
    )
}