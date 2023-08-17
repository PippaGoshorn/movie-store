// import React, { useState } from "react";
// import { movies_data } from "../movie-data";

// function SearchBar(props) {
//   const [filteredMovies, setFilteredMovies] = useState([]);

//   function handleSearchSubmit(e) {
//     e.preventDefault();

//     const searchInput = e.target.searchInput.value.toLowerCase();
//     const filteredMovies = movies_data.filter(
//       (item) => item.filmTitle.toLowerCase().includes(searchInput)
//     );

//     setFilteredMovies(filteredMovies);
//   }

//   return (
//     <div>
//       <form className="search-bar" onSubmit={handleSearchSubmit}>
//         <input
//           className="search-bar-input"
//           id="searchInput"
//           type="text"
//           placeholder="Search..."
//           name="search"
//         />
//         <button className="search-bar-button" type="submit">
//           Go
//         </button>
//       </form>

//       <div id="genre-filter">
//         {filteredMovies.map((item) => (
//           <div key={item.id} className="dvd-tile filter-genre">
//             <button className="buy-button filter-genre">Add to basket</button>
//             <img
//               src={item.imgSrc}
//               alt={item.filmTitle}
//               className="dvd-tile-img filter-genre"
//             />
//             <ul>
//               <li className="movie-title">{item.filmTitle}</li>
//               <li>{item.releaseYear}</li>
//               <li>{item.genre}</li>
//               <li>{item.price}</li>
//               <li className="stock-info">{item.stock} in stock</li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import { movies_data } from "../movie-data";

// Link to searchInput (assign id) >> if movieTitle .includes searchInput, display relevant DVDs.
// Event listener on submit/button click? -- not working on email signup alert...

function SearchBar(props) {
    let movieArray = movies_data;
    function handleClick(e) {
        e.preventDefault();
        let searchInput = document.getElementById("searchInput")
        let genreFilter = document.getElementById("genre-filter");
        let tile = document.getElementById("tile");
        tile.innerHTML = "";
        genreFilter.innerHTML = "";
        Object.entries(movieArray).forEach((item, i)=>{
            if (item[1].movieTitle.includes(searchInput)) {
            let img = document.createElement("img");
            let movieTitle = document.createElement("li");
            let relYear = document.createElement("li");
            let genre = document.createElement("li");
            let price = document.createElement("li");
            let stockInfo = document.createElement("li");
            let button = document.createElement("button");

            let li = document.createElement("li");
            let div = document.createElement("div");
            
            div.classList.add("dvd-tile");
            div.classList.add("filter-genre");
            button.classList.add("buy-button");
            button.classList.add("filter-genre");
            movieTitle.classList.add("movie-title");
            stockInfo.classList.add("stock-info");
            img.classList.add("dvd-tile-img");
            img.classList.add("filter-genre");
            
            img.src = item[1].imgSrc;
            movieTitle.innerText = item[1].filmTitle;
            price.innerText = item[1].price;
            relYear.innerText = item[1].releaseYear;
            genre.innerText = item[1].genre;
            stockInfo.innerText = item[1].stock + " in stock";
            button.innerText = "Add to basket";
            
            li.append(img);
            li.appendChild(movieTitle);
            li.appendChild(relYear);
            li.appendChild(genre);
            li.appendChild(price);
            li.appendChild(stockInfo);
            div.append(button);

            // Don't add anything below these 2 items
            div.append(li);
            genreFilter.append(div);
            }
    })
    } 
    
    return (
        <form className="search-bar">
            <input className="search-bar-input" id="searchInput" onClick={(e)=>handleClick(e)}
             type="text" placeholder="Search..." name="search"></input>
            <button className="search-bar-button" type="submit">Go</button>
        </form>
    )
}

export default SearchBar;