import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { useMemo, useState } from "react";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { UserContext } from "./pages/UserContext";
import { Personajes } from "./pages/Personajes";
import { Planetas } from "./pages/Planetas";
import { Especies } from "./pages/Especies";
import { Peliculas } from "./pages/Películas";
import { NavBar } from "./pages/NavBar";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <PrimeReactProvider>
            <UserContext.Provider value={value}>
              <Box
                h={"100vh"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent="center"
                bg="radial-gradient(#ebda59 10%, #2b2a23 90%)"
              >
                {user && <NavBar />}
                <Routes>
                  <Route path="login/*" element={<Login setUser={setUser} />} />
                  <Route path="*" element={<Navigate to={"/login"} />} />
                  <Route
                    path="dashboard"
                    element={<ProtectedRoute user={user} />}
                  >
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
                  <Route
                    path="personajes"
                    element={<ProtectedRoute user={user} />}
                  >
                    <Route path="/personajes" element={<Personajes />} />
                  </Route>
                  <Route
                    path="planetas"
                    element={<ProtectedRoute user={user} />}
                  >
                    <Route path="/planetas" element={<Planetas />} />
                  </Route>
                  <Route
                    path="especies"
                    element={<ProtectedRoute user={user} />}
                  >
                    <Route path="/especies" element={<Especies />} />
                  </Route>
                  <Route
                    path="peliculas"
                    element={<ProtectedRoute user={user} />}
                  >
                    <Route path="/peliculas" element={<Peliculas />} />
                  </Route>
                </Routes>
              </Box>
            </UserContext.Provider>
          </PrimeReactProvider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
