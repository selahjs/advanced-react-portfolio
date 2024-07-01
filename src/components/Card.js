import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      color="black"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} />
      <VStack p={4} align="start" spacing={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text co fontSize="sm">{description}</Text>
        <HStack spacing={2} align="center">
          <Text fontSize="sm" fontWeight="bold">
            Learn more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
