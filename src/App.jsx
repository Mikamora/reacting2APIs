import React, { useEffect, useState } from "react";
import People from "./components/People";

const App = () => {
    const filmButton = document.querySelector(".film");
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        filmButton.addEventListener("click", ()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then(film => setMovie(film))
        })
    })

    return (
        <div className="container">
            <section className="row justify-content-center mt-5">
                {movie.map(movie => (
                    <div className="col-md-6" key={`${movie.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{movie.title}</h4>
                                <p className="card-subtitle text-muted">{`director: ${movie.director} / producer: ${movie.producer}`}</p>
                                <p className="card-subtitle text-muted">{movie.release_date}</p>
                                <p className="card-text">{`${movie.description} ${movie.rt_score}% on rotten tomatoes!`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <People />
        </div>
    )
}

export default App;