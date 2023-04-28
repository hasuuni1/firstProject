import { useContext } from "react"
import { AppContext } from "../App"
export const Menu = () => {
    const {username} = useContext(AppContext)
    return (
        <div>
            This Menu Is For {username}
        </div>
    )
}