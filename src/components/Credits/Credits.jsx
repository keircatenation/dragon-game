import { Link } from "react-router-dom";

export default function Credits(props) {

    return (
        <div style={{padding:"1rem", maxWidth:"900px", margin:"0 auto", display:"flex", flexDirection:"column"}}>
            <h1>Hey, thanks for playing this game!</h1>
            <p>This is a small game made by Keiran Pillman to practice using React and REST API calls. It is made possible by the <a href="https://www.dnd5eapi.co/" target="_blank">DND 5e API</a>.</p>
            <p>You will face random enemies and will be given weapons in order to fight them. Like in Dungeons and Dragons, you will roll dice to attack and determine damage, so your attack might not hit! You will automatically get the first turn once a fight begins, with your enemy attacking second.</p>
            <h2 style={{alignSelf:"center"}}>Ready?</h2>



            <Link to="/dragon-game/arena" style={{margin:"0 auto", backgroundColor:"var(--highlight)", color:"white", textDecoration:"none", fontFamily:"var(--font)", padding:"1rem", display:"inline-block"}}>Get Started!</Link>
        </div>
    )

}