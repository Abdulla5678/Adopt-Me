const fetchPet = async ({ queryKey }) => {
    const [, id] = queryKey;

    try {
        const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

        if (!apiRes.ok) {
            console.log(`details/${id} fetch not ok`);
            throw new Error(`An error occurred while fetching the pet details: ${apiRes.statusText}`);
        }

        return apiRes.json();
    } catch (error) {
        console.error("Fetch error: ", error);
        throw error;
    }
};

export default fetchPet;



