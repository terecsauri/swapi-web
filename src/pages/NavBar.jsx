
import { Box, Button, Flex, } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(null);

    navigate("/login");
  };

  return (
    <Flex
      justify={"space-evenly"}
      align={"center"}
      h="70px"
      w="700px"
      margin="0"
      padding="0"
    >
      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={handleClick}
        >
          Logout
        </Button>
      </Box>

      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={()=>navigate("/dashboard")}
        >
          Dashboard
        </Button>
      </Box>
      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={()=>navigate("/personajes")}
        >
          Personajes
        </Button>
      </Box>
      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={()=>navigate("/planetas")}
        >
          Planetas
        </Button>
      </Box>
      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={()=>navigate("/especies")}
        >
          Especies
        </Button>
      </Box>
      <Box
        bg={"blue.100"}
        borderRadius={"md"}
        _hover={{
          background: "blue.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"blue.100"}
          _hover={{
            background: "blue.300",
            border: "0",
          }}
          onClick={()=>navigate("/peliculas")}
        >
          Películas
        </Button>
      </Box>
    </Flex>
  );
};