import containerLines from "../images/containerLines.png";
import "../styles/WhiteContainer.css";

export function WhiteContainer({ children }) {
  return (
    <div className="white-container">
      <img src={containerLines} alt="" className="containerLines" />
      {children}
    </div>
  )
}
