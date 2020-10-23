import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import {Social,SocialIcon,SocialInfo,SocialInfoSpan,SocialNet} from './SocialStyle.js';
const SocialMedia = () => {
    const [social,setSocial]=useState([]);
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setSocial(res.data.social)});
    })
    const socialList=social.map(e=>{
        return(
            <SocialNet key={e.id} id={e.id}>
                <SocialIcon className={e.icon}></SocialIcon>
                <SocialInfo>
                    <SocialInfoSpan>{e.title}</SocialInfoSpan>
                    <SocialInfoSpan info2>{e.body}</SocialInfoSpan>
                </SocialInfo>
            </SocialNet>
        )
    })
    return(
        <Social>            
            {socialList}
        </Social>
    )
}
export default SocialMedia;