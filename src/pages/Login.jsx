import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);

  const [datosUsername, setDatosUsername] = useState("");
  const [datosPassword, setDatosPassword] = useState("");

  const [show, setShow] = useState(false);

  const correctUsername = "amidala";
  const correctPassword = "skywalker";

  const handleClick = () => setShow(!show);

  const hanldeChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") setDatosUsername(value);
    if (name === "password") setDatosPassword(value);
  };

  let navigate = useNavigate();

  const handleSubmit = () => {
    if (
      datosUsername === correctUsername &&
      datosPassword === correctPassword
    ) {
      navigate("/dashboard");
      setUser(true);
    }
  };

  return (
    <Box
      boxSize={"full"}
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      py={"8"}
      px={"0"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        maxW={"lg"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing="24"
      >
        <Stack
          h="1px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          ></Stack>
        </Stack>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading as="h2" size="md">
            Datos de login:
          </Heading>
          <Heading as="h3" size="sm">
            Usuario: amidala
          </Heading>
          <Heading as="h3" size="sm">
            Contraseña: skywalker
          </Heading>
        </Box>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={"blue.100"}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel fontWeight="600">Usuario</FormLabel>
                <Input
                  borderColor={"blue.900"}
                  _hover={{
                    borderColor: "blue.900",
                    background: "blue.200",
                  }}
                  id="username"
                  name="username"
                  onChange={(event) => {
                    hanldeChange(event);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" fontWeight="600">
                  Contraseña
                </FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    borderColor={"blue.900"}
                    _hover={{
                      borderColor: "blue.900",
                      background: "blue.200",
                    }}
                    id="password"
                    name="password"
                    onChange={(event) => {
                      hanldeChange(event);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      background={"blue.50"}
                      _hover={{
                        background: "blue.300",
                        border: "0",
                      }}
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button
                background={"blue.50"}
                _hover={{
                  background: "blue.300",
                  border: "0",
                }}
                onClick={handleSubmit}
              >
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
