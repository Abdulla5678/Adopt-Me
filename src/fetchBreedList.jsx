
const fetchBreedList = async({queryKey})=>{
    const [,animal] = queryKey
    if(!animal) return []

    try{
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        if(!res.ok){
            throw new Error(`problem while fetching the breeds : ${res.statusText}`)
        }
        return res.json()
    }catch(error){
        console.error(`fetched error :`. error);
        throw error
    }
}

export default fetchBreedList