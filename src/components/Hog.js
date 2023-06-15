import {useState} from 'react'
const JustThePic = ({image}) => <img src={image} alt='hoggie'/>
const AllDetails = ({hog}) => {
    return (
        <div>
            <h1>{hog.name}</h1>
            <h2>{hog.specialty}</h2>
            <h3>{hog.weight}</h3>
            <h4>{hog[ 'highest medal achieved']} medal achieved</h4>
            {hog.greased ? <h1>ready for fun</h1> : <div>no grease</div>}
        </div>
    )
}

export default function Hog({hog}) {

    const [showFront, setShowFront] = useState(true)
    const toggleFront = () => {
        setShowFront(!showFront)
    }
    
    return (
        <div onClick={toggleFront} className="ui three wide column image pigTile">
            { showFront ? 
                <JustThePic image={hog.image}/> 
            :
                <AllDetails hog ={hog}/>
            }
        </div>
    )
}

