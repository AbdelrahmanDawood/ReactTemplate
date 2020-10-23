import styled from 'styled-components';

export const ProfileSkills =styled.div`
    padding: 50px 0;
    overflow: hidden;
`;

export const ProfileSkillsContent = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px;
    }
`;

export const ProfileSkillsList =styled.ul`
    list-style: none;
`;

export const ProfileSkillsItem =styled.li`
    margin-bottom: 8px;
`;

export const ProfileSkillsItemSpan=styled.span`
    display: inline-block;
    width: 100px;
`;

export const Skills =styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none;
    }
`;

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const SkillsBarTitle = styled.span`
    float: left;
`;

export const SkillsBarPerc = styled.span`
    float: right;
    margin-right: 100px;
`;

export const SkillsBarParent =styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`;

export const SkillsBarParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props=>props.sp==="1" ? '100%': props.sp==="2" ? '90%': '80%'};
`;


export const ProfileTitle=styled.div`
    font-size: 40px; 
    margin-bottom: 20px;
`;
export const SkillsTitle=styled(ProfileTitle)``;

export const ProfileTitleSpan=styled.span`
    font-weight: normal;
`;
export const SkillsTitleSpan=styled(ProfileTitleSpan)``;

