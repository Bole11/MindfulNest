import "../styles/FormContainer.css"
import logo from "../images/logo.png"
import upperLeaf from "../images/upperLeaf.png"
import lowerLeaf from "../images/lowerLeaf.png"
import upperLines from "../images/upperLines.png"
import lowerLines from "../images/lowerLines.png"

export function FormContainer({ title, children }) {
    return (
        <section className="form-section">
            <div className="form-container">
                <img src={upperLines} className="upperLines"/>
                <div className="form-header">
                    <img src={logo} alt="logo" className="form-logo"/>
                </div>
                <div className="form-content">
                    <div className="form-content-title">
                        <h2 className="form-title">{title}</h2>
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