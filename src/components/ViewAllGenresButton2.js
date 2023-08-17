import { movies_data } from "../movie-data";

function GenreButton2(props){
    let movieArray = movies_data;
    function handleClick(e) {
        e.preventDefault();
        let genreFilter = document.getElementById("genre-filter");
        let tile = document.getElementById("tile");
        tile.innerHTML = "";
        genreFilter.innerHTML = "";
        Object.entries(movieArray).forEach((item, i)=>{
            if (item[1].genre.length > 1) {
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
        <div>
            <button className="genre-button all" onClick={(e)=>handleClick(e)}>
                {props.genre}View all</button>
        </div>
    )
}

export default GenreButton2;