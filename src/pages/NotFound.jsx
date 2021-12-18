import ErrorMessage from "../components/ErrorMessage/ErrorMessage.js";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '34px' }}>The page doesn't exist...</p>
      <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'text-decoration': 'none', 'color': 'black'}} className="underline-one" to="/"></Link>
    </div>
  )
}

