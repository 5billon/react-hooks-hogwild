// import React, {useState} from "react"
// import hogs from "../porkers_data";


// function HogTile() {
//     const [showDetail, setShowDetail] = useState(false)

//     let handleClick = () => {
//         setShowDetail(!showDetail)
//     }
//     return (
//         <div className='ui grid container'>
//             {hogs.map((hog) => (
//                 <div key={hog.name} className='ui eight wide column' onClick={handleClick}>
//                     <h3>{hog.name}</h3>
//                     <img src={hog.image}></img>
//                     {showDetail ? <div>
//                         <p>specialty: {hog.specialty}</p>
//                         <p>greased: {hog.greased}</p>
//                         <p>weight: {hog.weight}</p>
//                         </div>:null}
//                 </div>
//             ))}
//         </div>
//     )
    
// }
// export default HogTile;

import Hog from './Hog'

const PigPen = ({hogsArray}) => {

    const hogComponents = hogsArray.map(hogObject => {
        return <Hog key={hogObject.name} hog={hogObject}/>
    })
    
    return (
        <div className='ui grid container'>
            { hogComponents }
            
        </div>
    );
}
export default PigPen;

