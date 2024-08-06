import "../styles/pages/Splash.css"
import star from "../assets/images/star.png"
import tent from "../assets/images/tent.png"

function Splash() {
    return (
        <>
            <div className="Splash">
                <div className="title">
                    <h1 className="title-1">별별</h1>
                    <h1 className="title-2">캠핑</h1>
                </div>
                <div className="star">
                    <img src={star}/>
                </div>
                <div className="camping-scene">
                    <div className="tent">
                        <img src={tent}/>
                    </div>
                    <div className="shadow-wrapper">
                        <div className="shadow shadow1"></div>
                        <div className="shadow shadow2"></div>
                        <div className="shadow shadow3"></div>
                        <div className="shadow shadow4"></div>
                        <div className="shadow shadow5"></div>
                        <div className="shadow shadow6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash