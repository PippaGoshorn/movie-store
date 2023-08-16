// import {movies_data} from "../movie-data";
// import { useEffect, useState } from "react";

function DVDTile(props){
    return (
        <>
            <div className="dvd-tile">
            <img className="dvd-tile-img" src={props.imgSrc} alt={props.filmTitle}></img>
            <ul>
                <li className="movie-title">{props.filmTitle}</li>
                <li><span className="rel-year">{props.releaseYear}</span></li>
                <li><span className="genre">{props.genre}</span></li>
                <li><span className="price">{props.price}</span></li>
                <li className="stock-info">{props.stock}</li>
            </ul>
            <button className="buy-button">Add to basket</button>
        </div>
        </>
    )
}
export default DVDTile;

// Passing data in to tiles not working:
// function DVDTile(props){
//     const [movieArray, setmovieArray]=useState(movies_data);
//     Object.entries(movieArray).forEach((item, i)=>{  
//         item.map((dvd, i)=>{
//     });
// })
//     useEffect(() => {
//         if(movieArray!==null){
//         }
//     },[movieArray])
//     return (
//         <>
//         {Object.entries(movieArray).forEach((item, i)=>{
//             <div className="dvd-tile" key={i}>
//             <img src={item[1].imgSrc} alt={item[1].filmTitle}></img>
//             <ul>
//                 <li className="movie-title">{item[1].filmTitle}</li>
//                 <li><span className="rel-year">{item[1].releaseYear}</span>, <span className="genre">{item[1].genre}</span></li>
//                 <li><span className="genre">{item[1].genre}</span></li>
//                 <li><span className="price">{item[1].price}</span></li>
//                 <li className="stock-info">{item[1].stock}</li>
//             </ul>
//             <button className="buy-button">Add to basket</button>
//         </div>
//             })
//         }
//         </>
//     )
// }
// export default DVDTile;
