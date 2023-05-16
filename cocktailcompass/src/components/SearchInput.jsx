import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../Redux/action";
import { Center, FormLabel, Input } from "@chakra-ui/react";

const SearchInput = () => {

    const ref = useRef(null)
    const dispatch =useDispatch()

  const HandleSubmit = (e) => {
    e.preventDefault();
};
console.log("ref.current.value: ", ref.current);
  const SearchCocktail = () => {
    dispatch(fetchSearchCocktail(ref.current.value))
  };

  return (
    <form onSubmit={HandleSubmit}>
      <Center my={"10"}>
        <FormLabel color={"whatsapp.100"}>SEARCH </FormLabel>
        <Input
        ref={ref}
          type="text"
          variant={"filled"}
          bg={"white !important"}
          w={"50%"}
          name="name"
          onChange={SearchCocktail}
        ></Input>
      </Center>
    </form>
  );
};

export default SearchInput;
