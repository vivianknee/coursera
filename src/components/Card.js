import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      color="black"
      p={4}
      borderRadius="md"
      boxShadow="md"
      spacing={4}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt="" borderRadius="md" />
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack spacing={1}>
        <Text color="blue.500" size="1px">
          See More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;

