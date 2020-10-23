import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {ProfileTitle,ProfileSkills,ProfileSkillsContent,ProfileSkillsItem,ProfileSkillsItemSpan,ProfileSkillsList,ProfileTitleSpan,Skills,SkillsBar,SkillsBarParent,SkillsBarParentSpan,SkillsBarPerc,SkillsBarTitle,SkillsTitle,SkillsTitleSpan,SkillsDesc} from './ProfileStyle.js';

const Profile = () => {

    const [info,setInfo]=useState([]);
    const [skills,setSkills]=useState([]);
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setInfo(res.data.info)});
    },[]);
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setSkills(res.data.skills)});
    },[]);
    const infoList=info.map(e=>{
        return(
            <ProfileSkillsItem key={e.id}>
                <ProfileSkillsItemSpan>{e.type}</ProfileSkillsItemSpan>
                {e.content}
            </ProfileSkillsItem>
        )
    });
    const skillList=skills.map(e=>{
        return(
            <SkillsBar key={e.id}>
                <SkillsBarTitle>{e.title}</SkillsBarTitle>
                <SkillsBarPerc>{e.percent}</SkillsBarPerc>
                <SkillsBarParent>
                    <SkillsBarParentSpan sp={e.id}></SkillsBarParentSpan>
                </SkillsBarParent>
            </SkillsBar>
        )
    })
    return(
        <ProfileSkills>
            <div className="container">
                <ProfileSkillsContent>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileSkillsList>
                        {infoList}
                    </ProfileSkillsList>
                </ProfileSkillsContent>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillList}
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}
export default Profile;