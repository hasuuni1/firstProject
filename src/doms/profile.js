import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../App"
import { Changeprofile } from "./changeprofile"
export const Profile = () => {
    const {username} = useContext(AppContext)
    const Mum = useNavigate()
    // let {username1} = useParams()
    return (
    <div>
    <div>This is Profile Page For {username}</div>
    <button onClick={()=>Mum ("/")}>Take Me To Home Page</button>
    <Changeprofile/>
    </div>
    )
}