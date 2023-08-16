function ViewAllGenresButton(){
    function handleClickAllGenres(e) {
        e.preventDefault();
        window.location.reload();
            }

return (
        <div>
            <button className="genre-button all" onClick={(e)=>handleClickAllGenres(e)}>
                View all</button>
        </div>
    )
}

export default ViewAllGenresButton;