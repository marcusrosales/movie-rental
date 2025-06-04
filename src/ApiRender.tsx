import { fetchData } from "./ApiService.js";

fetchData().then(renderCall)


function renderCall(data) {
    for (let index = 0; index < data.length; index++){
        return(<>
        <h1>{index}</h1>
        </>)
    }
}