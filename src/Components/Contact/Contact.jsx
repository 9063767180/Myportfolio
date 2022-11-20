import React,{ useContext } from 'react';
import "./Contact.css";
import { themeContext } from "../../Context";


const Contact = () =>
{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    //const form = useRef();
    //const [done, setDone] = useState(false)
    return(
        <div className='contact-form' id="contact">
            <div className='w-left'>
                <div className='awesome'>
                    {/* darkMode */}
                     <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
                        <span>Contact me</span>

                    <div className='blur s-blur1'
                        style={{ background: "#ABF1FF94"}}>
                    </div>
                </div>
            </div>



            <div className='c-right'>
            <form>
                <input type="text" name="user_name" className="user" placeholder='Name'/>
                <input type="email" name="user_email" className="user" placeholder='Email'/>
                <textarea name="Message" className="user" placeholder='Message'/>
                <input onClick="myFunction()" type="submit" value="send" className="button"/>

                <div className="blur c-blur1"
                style={{ background: "var(--purple)"}}>
                </div>
                
            </form>
            </div>
        </div>
        

        
    )
}

export default Contact;