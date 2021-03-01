import React, { useEffect, useState } from "react";

const People = () => {
    const personButton = document.querySelector(".people");
    const [people, setpeople] = useState([]);


    useEffect(() => {
        personButton.addEventListener("click", () => {
            fetch("https://ghibliapi.herokuapp.com/people")
                .then((res) => res.json())
                .then(newPeople => setpeople(newPeople))
        })
    })

    return (
        <section className="row justify-content-center mt-5">
            {people.map(person => (
                <div className="col-md-6" key={`${person.id}`}>
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h4 className="card-title">{`${person.name} | age: ${person.age}`}</h4>
                            <p className="card-subtitle text-muted">{person.gender}</p>
                            <p className="card-subtitle text-muted">{`learn more about ${person.name}:`}</p>
                            <a href={person.url}>click here!</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default People;