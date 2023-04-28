// import { useContext } from "react"
// import { AppContext } from "../App"
import { useQuery  } from "react-query"
import Axios from "axios"
export const Home = () => {
    const {data , isLoading , isError} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    })
    // const {username} = useContext(AppContext)
    if ( isError ) {
        return <h1>Error Occured!!</h1>
    }
    if ( isLoading ){
        return <h1>Loading Please....</h1>
    }
    return <h1>This is Home Page <p>{data?.fact}</p></h1>
}