import Pet from "./Pet";

const Results = ({pets})=>{
    return (
        <div className="search">
            {!pets.length?(
                <h1>No pets found</h1>
            ): (
                pets.map((pet)=>(
                    <Pet 
                        animal={pet.animal} 
                        breed={pet.breed} 
                        name={pet.name}
                        location={`${pet.city} ,${pet.state}`}
                        images={pet.images}
                        key={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results;