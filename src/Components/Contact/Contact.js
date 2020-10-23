import React from 'react';
import Footer from '../Footer/Footer'
import {Drop,DropForm,DropFormInput,DropFormInputEmail,DropFormInputSubmit,DropFormInputText,DropSpan,DropTextArea,DropTitle,DropFormInputSub} from './ContactStyle.js';
const Contact = () => {
    return(
        <>
            <Drop>
                <div className="container">
                    <DropTitle className="drop-title"><DropSpan>Drop </DropSpan>Me A line</DropTitle>
                    <DropForm action="">
                        <DropFormInput>
                            <DropFormInputText type="text" placeholder="Your Name" />
                            <DropFormInputEmail type="email" placeholder="Your Email" />
                        </DropFormInput>
                        <DropFormInputSub type="text" placeholder="Your Subject" />
                        <DropTextArea cols="30" rows="10" placeholder="Your Message"></DropTextArea>
                        <DropFormInputSubmit type="submit" value="Send Message" />
                    </DropForm>
                </div>
            </Drop>
            <Footer />
        </>
    )
}
export default Contact;