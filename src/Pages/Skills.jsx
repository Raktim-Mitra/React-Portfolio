import React from 'react'
import { Box, VStack, Heading, Text, Grid, HStack, Icon } from '@chakra-ui/react';
import { FaCode, FaDatabase, FaCertificate ,FaReact,FaCss3,FaJsSquare, FaPython} from 'react-icons/fa';
import Layout from '../Components/Layout'
import { RiNextjsFill } from "react-icons/ri";
import { DiJqueryLogo } from 'react-icons/di';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: FaCode },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React', icon: FaReact },
    { name: 'NodeJs', icon: FaCss3 },
    { name: 'Express', icon: FaCode },
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'Next.js', icon: RiNextjsFill},
    { name: 'Python', icon:FaPython},
    { name: 'JQuery', icon: DiJqueryLogo},
    { name: 'SQL', icon: FaDatabase},
    // Add more technical skills here
  ];

  const csFundamentals = [
    { name: 'DBMS', icon: FaDatabase },
    { name: 'OOPS', icon: FaCode },
    { name: 'Operating System', icon: FaCode },
    // Add more CS fundamentals here
  ];

  const certifications = [
    { name: 'HTML 5', issuer: 'Infosys' , url: "/Infosys Html5.pdf" },
    { name: 'Certificate of perticipation', issuer: 'Unstop' , url: "/Unstop Certificate.pdf"},
    { name: 'Internship completion certificate', issuer: 'Codsoft' , url: "/codesoft.pdf"},

    // Add more certifications here
  ];


  const handleOpenPDF = (url) => {
    window.open(url, "_blank");
  };


  return (
    <Layout>
  <Box 
     py={{base:"0",md:"10"}} 
    px={5} 
    bg="#121212"  // Dark Background
    color="#FFFFFF"  // White Text
    borderRadius="15" 
    m={4}
  >
    <VStack spacing={5} align="start" maxW="1000px" mx="auto">
      <Heading as="h1" size="xl" mb={5}>
        Technical Skills
      </Heading>
      <Grid 
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} 
        gap={6}
      >
        {technicalSkills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </Grid>
    </VStack>

    {/* CS Fundamentals */}
    <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
      <Heading as="h1" size="xl" mb={5}>
        CS Fundamentals
      </Heading>
      <Grid 
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} 
        gap={6}
      >
        {csFundamentals.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </Grid>
    </VStack>

    {/* Certifications */}
    <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
      <Heading as="h1" size="xl" mb={5}>
        Certifications
      </Heading>
      <Grid 
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
        gap={6}
      >
        {certifications.map((certification, index) => (
          <CertificationCard 
            key={index} 
            name={certification.name} 
            issuer={certification.issuer} 
            onClick={() => handleOpenPDF(certification.url)}
          />
        ))}
      </Grid>
    </VStack>
  </Box>
</Layout>
  )
}


const SkillCard = ({ name, icon }) => (
  <HStack
    bg="#1E1E1E"  // Dark Gray Background
    p={4}
    borderRadius="md"
    boxShadow="md"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Icon as={icon} w={6} h={6} color="#BB86FC" />  {/* Accent Color */}
    <Text fontSize="lg" fontWeight="600">
      {name}
    </Text>
  </HStack>
);

const CertificationCard = ({ name, issuer,onClick }) => (
  <Box
    bg="#1E1E1E"  // Dark Gray Background
    p={4}
    borderRadius="md"
    boxShadow="md"
    onClick={onClick}
    cursor="pointer"
  >
    <Heading as="h4" size="md" mb={2} color="#BB86FC">  {/* Accent Color */}
      {name}
    </Heading>
    <Text fontSize="sm" color="#B0BEC5">  {/* Light Gray Text */}
      Issued by: {issuer}
    </Text>
  </Box>
);

export default Skills