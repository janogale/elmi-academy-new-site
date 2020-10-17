import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Box,
  Divider,
} from "@chakra-ui/core";

import Container from "../components/Container";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SectionBox from "../components/SectionBox";
import SectionHeading from "../components/SectionHeading";
import Problem from "../components/Problem";
import Solution from "../components/Solution";

const Index = () => (
  <Container>
    <Header />
    <Banner />
    <Main>
      <Box as="section">
        <SectionHeading
          title="Bridging the Gap"
          subTitle="Between Academia and Job Market"
          content=""
        />
      </Box>
      <Box as="section" py={12} bg="pink.500" className="expanded">
        <Problem />
      </Box>
      <Divider my={12} />
      <Box as="section" py={12} className="expanded">
        <Solution />
      </Box>

      <section>
        <SectionHeading
          title="Services"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus."
        />
        <SectionBox
          title="Changing Nation with Knowledge"
          content="We are trying teach our Youth with programs that focus on ensuring that students are taught the principles of information and computation, how digital systems work, and they learn how to put this knowledge to use through programming and software development concepts."
          img="images/development1.jpg"
          btnText="Learn More"
        />
      </section>
    </Main>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
