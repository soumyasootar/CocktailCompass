import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCocktail from "../Redux/action";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CockTailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  console.log("loading: ", loading);
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  useEffect(() => {
    console.log("yes");
    dispatch(fetchCocktail());
    console.log("yes");
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      let newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strIngredient1,
          strIngredient2,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
        } = item;
        return {
          id: idDrink,
          name: strIngredient1,
          name1: strIngredient2,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </Center>
    );
  }

  if (!cocktails) {
    <h2>No Cocktails Found</h2>;
  }
  return (
    <Box zIndex={"-10"} margin={"auto"}>
      <SimpleGrid columns={[1, 2, 4]} spacing="40px">
        {modifiedCocktails.map((ele) => {
          return (
            <Card maxW="sm" key={ele.id} boxShadow={"2xl"}>
              <CardBody>
                <Image src={ele.image} alt="cocktail.png" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    {ele.name},{ele.name1}
                  </Heading>
                  <Text fontWeight={"bold"} color={"purple"} fontSize={"2xl"}>{ele.glass}</Text>
                  <Text size="md">{ele.info}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
              <Link to={`/cocktails/${ele.id}`}>
                <Button variant="solid" colorScheme="blue">
                  Details
                </Button>
              </Link>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CockTailList;
