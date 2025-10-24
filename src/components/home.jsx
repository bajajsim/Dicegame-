import { Button } from "react-bootstrap"
import {Link} from 'react-router-dom'

export function Homepage(){
    return(
        <>
        <div className="home container gap-5 d-flex align-items-center justify-content-center">
      <div className="image">
        <img src="../images/dice.png" alt="" />
        </div>
        <div className="intro d-flex flex-column ">
        <h1 className="title">DICE GAME</h1>
       <Link style={{alignSelf:"end"}} to="/dicegame"><Button className="play" variant="dark">Play Now</Button></Link>
        </div>
        </div>

        
        </>
    )
}