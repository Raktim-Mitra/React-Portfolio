import React from 'react'
import Layout from '../Components/Layout'
import { Box, Heading, Text, VStack, Divider, useColorModeValue ,Icon,HStack} from "@chakra-ui/react";
import { FiUser } from 'react-icons/fi';
import { GiBookshelf } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';

const About = () => {
    const bg = useColorModeValue("gray.100", "gray.800"); // Light/Dark mode background
    const textColor = useColorModeValue("gray.800", "white");

  return (
    <Layout>
    <Box 
      bg="#121212"  // Dark Background
      color="#FFFFFF"  // White Text
      py={{base:"0",md:"10"}} 
      px={5}  
      borderRadius={"15"} 
      m={"4"} 
      minH={"fit-content"}
    >
      <VStack spacing={5} align="start" maxW="1000px" mx={{base:"0",md:"20"}}>
        {/* Developer Introduction */}
        <Box>
          <HStack gap={"3"} alignItems="center" mb={"5"}>
            <Icon as={FiUser} fontSize={"30px"} color="#BB86FC"/>  {/* Accent Color */}
            <Heading as="h1" size="xl">
              About Me
            </Heading>
          </HStack>
          <Text fontSize="lg" mb={5}>
            Hello! I am Raktim. I am a passionate MERN Stack Developer with expertise in building dynamic and responsive web applications.
            I have a strong foundation in Data Structures and Algorithms using Java, along with comprehensive knowledge
            in Database Management Systems. My version control skills are backed by Git and GitHub, ensuring smooth
            collaboration and code management. I am always eager to learn new technologies and improve my existing skills. Whether it's through personal projects.
          </Text>
        </Box>
  
        {/* Divider */}
        <Divider orientation="horizontal" borderColor="#444444" />  {/* Dark Gray Divider */}
  
        {/* Education Section */}
        <Box>
          <HStack gap={"3"} alignItems="center" mb={"5"}>
            <Icon as={GiBookshelf} fontSize={"30px"} color="#BB86FC"/>  {/* Accent Color */}
            <Heading as="h1" size="xl" lineHeight="1.2">
              Education
            </Heading>
          </HStack>
          <VStack spacing={5} align="stretch">
            <EducationCard year="2022-2026" description="B.Tech in Information Technology" location="Kolkata, West Bengal" />
            <EducationCard year="2020-2022" description="Higher Secondary (12th)" location="Habra, West Bengal"/>
            <EducationCard year="2014-2020" description="Secondary (10th)" location="Habra, West Bengal" />
          </VStack>
        </Box>
      </VStack>
    </Box>
  </Layout>
  
  )
}


function EducationCard({ year, description , location}) {
    return (
      <Box
      bg="transparent"  // Dark Gray Background
      color="#FFFFFF"  // White Text
      p={4}
      display="flex"
      borderRadius="md"
      
    >
      <Box as={MdSchool} w={6} h={6} mr={3} color="#BB86FC"/>  {/* Accent Color */}
      <VStack alignItems="flex-start" spacing={"1"}>
        <Text fontSize={"sm"}>{year}</Text>
        <Text fontSize={"lg"} fontWeight="600" color="#BB86FC">{description}</Text>  {/* Accent Color */}
        <Text fontSize={"sm"}>{location}</Text>
      </VStack>
    </Box>
    );
  }
  

export default About