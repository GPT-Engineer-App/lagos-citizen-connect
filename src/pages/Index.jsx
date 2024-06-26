import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { FaInfoCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Lagos State Government Interaction Platform</Heading>
        <Text fontSize="lg" textAlign="center">Connecting citizens with the Lagos state government for a better community.</Text>
        
        <Box width="100%" mt={10}>
          <Flex justify="space-around" wrap="wrap">
            <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="solid" size="lg" mb={4}>
              About Us
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" size="lg" mb={4}>
              Contact Us
            </Button>
            <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid" size="lg" mb={4}>
              Emergency Services
            </Button>
            <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" variant="solid" size="lg" mb={4}>
              Locate Us
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;