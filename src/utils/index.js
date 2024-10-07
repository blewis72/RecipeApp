const appId = process.env.REACT_APP_EDAMAM_APP_ID;
const appKey = process.env.REACT_APP_EDAMAM_API_KEY;

export async function fetchRecipes(filter){
const {query,limit} = filter;




const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;

console.log('Fetching URL:', url);
// const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}&from=0&to=${limit}`;


const response = await fetch(url);

const data = await response.json();


return data?.hits;
}

export async function fetchRecipe(id){
    const url =  `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${appKey}`;

    const response = await fetch(url)

    const data = await response.json();

    return data[0];
}
