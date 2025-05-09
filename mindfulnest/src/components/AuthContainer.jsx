import "../styles/AuthContainer.css"
import logo from "../images/logo.png"
import upperLeaf from "../images/upperLeaf.png"
import lowerLeaf from "../images/lowerLeaf.png"
import upperLines from "../images/upperLines.png"
import lowerLines from "../images/lowerLines.png"

export function AuthContainer({ title, children }) {
    return (
        <section className="auth-section">
            <div className="auth-container">
                <img src={upperLines} className="upperLines"/>
                <div className="auth-logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="auth-content">
                    <div className="auth-content-title">
                        <h2>{title}</h2>
                        <img src={upperLeaf} alt="leaf" className="upperLeaf"/>
                    </div>
                    {children}
                    <img src={lowerLines} className="lowerLines"/>
                    <img src={lowerLeaf} alt="leaf" className="lowerLeaf"/>
                </div>
            </div>
        </section>
    )
}