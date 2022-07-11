import React from 'react';
import {FaInstagram } from "react-icons/fa";

import {
  Text,
  Container,
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  Button,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';

const IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4ompJ3n-M2UQZv4jerf8FwgoPXfMetcM0Q&usqp=CAU';

export default function Instagram() {
  return (
    <Container  mb={6} maxW="container.lg">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          fontWeight={700}
        >
          Check out @foodieland on instragram
        </Heading>
        <Text color={'gray.500'} maxW={'2xl'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Sapiente numquam commodi ea debitis atque assumenda, 
        </Text>
      </Stack>
      <SimpleGrid columns={[1, null, 4]} spacing="30px">
        <Box bg={useColorModeValue('white', 'gray.900')}>
          <Flex pb={2}>
            <Box>
              <Stack direction={'row'} spacing={2} align={'center'}>
                <Avatar
                  w={10}
                  h={10}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} fontSize={'sm'}>
                  <Text fontWeight={700} pb={0} mb={0}> Foodieland </Text>
                  <Text pt={0} mt={0}>Tokyo, Japan</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={700}><i class="fa-solid fa-ellipsis-vertical"></i></Text>
              </Stack>
            </Box>
          </Flex>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Box bg={'gray.100'} pos={'relative'}>
              <Image src={IMAGE} layout={'fill'} />
            </Box>
            <Stack p={2}>
              <Flex>
                <Box>
                  <Stack direction={'row'} spacing={2} align={'center'}>
                    <Text fontWeight={700}><i class="fa-solid fa-heart"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-comment"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-paper-plane"></i></Text>
                  </Stack>
                </Box>
                <Spacer />
                <Box>
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={700}><i class="fa-solid fa-bookmark"></i></Text>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
            <Stack p={1}>
              <Text fontSize={'sm'}>
                {' '}
                <Avatar
                  w={6}
                  h={6}
                  fontSize={1}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
               {''} Liked By Shub_sirts and 445 
              </Text>
            </Stack>
            <Stack p={1} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={400}>
                Foodieland. Never miss meet. Never be late for one too. A Keep
                track.{' '}
              </Text>
            </Stack>
            <Stack p={1} pt={1} pb={2} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={600}>September 10</Text>
            </Stack>
          </Box>
        </Box>
        <Box bg={useColorModeValue('white', 'gray.900')}>
          <Flex pb={2}>
            <Box>
              <Stack direction={'row'} spacing={2} align={'center'}>
                <Avatar
                  w={10}
                  h={10}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} fontSize={'sm'}>
                  <Text fontWeight={700} pb={0} mb={0}> Foodieland </Text>
                  <Text pt={0} mt={0}>Tokyo, Japan</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={700}><i class="fa-solid fa-ellipsis-vertical"></i></Text>
              </Stack>
            </Box>
          </Flex>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Box bg={'gray.100'} pos={'relative'}>
              <Image src={IMAGE} layout={'fill'} />
            </Box>
            <Stack p={2}>
              <Flex>
                <Box>
                  <Stack direction={'row'} spacing={2} align={'center'}>
                    <Text fontWeight={700}><i class="fa-solid fa-heart"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-comment"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-paper-plane"></i></Text>
                  </Stack>
                </Box>
                <Spacer />
                <Box>
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={700}><i class="fa-solid fa-bookmark"></i></Text>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
            <Stack p={1}>
              <Text fontSize={'sm'}>
                {' '}
                <Avatar
                  w={6}
                  h={6}
                  fontSize={1}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
               {''} Liked By Shub_sirts and 445 
              </Text>
            </Stack>
            <Stack p={1} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={400}>
                Foodieland. Never miss meet. Never be late for one too. A Keep
                track.{' '}
              </Text>
            </Stack>
            <Stack p={1} pt={1} pb={2} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={600}>September 10</Text>
            </Stack>
          </Box>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.900')}>
          <Flex pb={2}>
            <Box>
              <Stack direction={'row'} spacing={2} align={'center'}>
                <Avatar
                  w={10}
                  h={10}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} fontSize={'sm'}>
                  <Text fontWeight={700} pb={0} mb={0}> Foodieland </Text>
                  <Text pt={0} mt={0}>Tokyo, Japan</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={700}><i class="fa-solid fa-ellipsis-vertical"></i></Text>
              </Stack>
            </Box>
          </Flex>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Box bg={'gray.100'} pos={'relative'}>
              <Image src={IMAGE} layout={'fill'} />
            </Box>
            <Stack p={2}>
              <Flex>
                <Box>
                  <Stack direction={'row'} spacing={2} align={'center'}>
                    <Text fontWeight={700}><i class="fa-solid fa-heart"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-comment"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-paper-plane"></i></Text>
                  </Stack>
                </Box>
                <Spacer />
                <Box>
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={700}><i class="fa-solid fa-bookmark"></i></Text>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
            <Stack p={1}>
              <Text fontSize={'sm'}>
                {' '}
                <Avatar
                  w={6}
                  h={6}
                  fontSize={1}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
               {''} Liked By Shub_sirts and 445 
              </Text>
            </Stack>
            <Stack p={1} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={400}>
                Foodieland. Never miss meet. Never be late for one too. A Keep
                track.{' '}
              </Text>
            </Stack>
            <Stack p={1} pt={1} pb={2} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={600}>September 10</Text>
            </Stack>
          </Box>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.900')}>
          <Flex pb={2}>
            <Box>
              <Stack direction={'row'} spacing={2} align={'center'}>
                <Avatar
                  w={10}
                  h={10}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} fontSize={'sm'}>
                  <Text fontWeight={700} pb={0} mb={0}> Foodieland </Text>
                  <Text pt={0} mt={0}>Tokyo, Japan</Text>
                </Stack>
              </Stack>
            </Box>
            <Spacer />
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={700}><i class="fa-solid fa-ellipsis-vertical"></i></Text>
              </Stack>
            </Box>
          </Flex>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Box bg={'gray.100'} pos={'relative'}>
              <Image src={IMAGE} layout={'fill'} />
            </Box>
            <Stack p={2}>
              <Flex>
                <Box>
                  <Stack direction={'row'} spacing={2} align={'center'}>
                    <Text fontWeight={700}><i class="fa-solid fa-heart"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-comment"></i></Text>
                    <Text fontWeight={700}><i class="fa-solid fa-paper-plane"></i></Text>
                  </Stack>
                </Box>
                <Spacer />
                <Box>
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={700}><i class="fa-solid fa-bookmark"></i></Text>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
            <Stack p={1}>
              <Text fontSize={'sm'}>
                {' '}
                <Avatar
                  w={6}
                  h={6}
                  fontSize={1}
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
               {''} Liked By Shub_sirts and 445 
              </Text>
            </Stack>
            <Stack p={1} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={400}>
                Foodieland. Never miss meet. Never be late for one too. A Keep
                track.{' '}
              </Text>
            </Stack>
            <Stack p={1} pt={1} pb={2} direction={'row'} spacing={4} align={'center'}>
              <Text fontWeight={600}>September 10</Text>
            </Stack>
          </Box>
          </Box>
      </SimpleGrid>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          fontWeight={700}
        >
          <Button colorScheme="teal" bg="black">View For Instragram <FaInstagram /> </Button>
        </Heading>
      </Stack>
    </Container>
  );
}