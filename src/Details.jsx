import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import fetchPet from "./fetchPet"
const Details = () => {
    const {id} = useParams()
    const {data,isError,isLoading,error} = useQuery({
            queryKey:["Details",id],
            queryFn:fetchPet
        }
    )
    
    if(isError){
        return(
            <div className="loading-pane">
                <h2 className="loader">Error: {error.message}</h2>
            </div>
        )
    }
    if(isLoading){
        return(
            <div className="loading-pane">
                <h2 className="loader">🤐</h2>
            </div>
        )
    }
    const pet = data.pets[0]

    return(
        <div className="details">
            <div>
                <h2>
                    {pet.name} - {pet.breed} - {pet.city} - {pet.state}
                </h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    )
}

export default Details;