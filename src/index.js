import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import GlobalStyles from './GlobalStyles'


render(
    <>
        <GlobalStyles />
        <Router>
            <App />
        </Router>
    </>

    , document.getElementById('root')
)