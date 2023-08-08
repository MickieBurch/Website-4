
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImg from '../assets/Dining-room.jpg'

const MainPage = () => {
return(

<div className='MainPage-container' style={{backgroundImage: `url(${HeaderImg})`,
backgroundRepeat: `no-repeat`,
backgroundSize: `cover`,
height: `100vh`,
width: `100vw`,
}}>

<h2>Rouxe Homes</h2>
<h1>Unique Housing solutions for you.</h1>
<p>Whether you're buying, listing, or renting, we can be of assistance to you.</p>
<button>View Properties</button>
</div>
)
}

export default MainPage