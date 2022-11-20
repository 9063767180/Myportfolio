import React, {useContext} from 'react';
import { themeContext } from "../../Context";
import './Exprience.css';

const Exprience = () =>
{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="exprience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
                <span style={{color: darkMode?'white':''}}>years</span>
                <span>Exprience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
                <span style={{color: darkMode?'white':''}}>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
                <span style={{color: darkMode?'white':''}}>internships</span>
                <span>Real time Exprience</span>
            </div>  
        </div>
    )
}
export default Exprience;