import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch((data) =>{
      setExperience(data);
    });
    client.fetch((data) =>{
      setSkills(data)
    });
  }, []);
  

  return (
    <div>Skills</div>
  )
}


export default Skills