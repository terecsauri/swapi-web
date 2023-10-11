import { Flex } from "@chakra-ui/react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { useEffect, useState } from "react";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([{}]);

  const personajeGet = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/?results=20");
      const data = await response.json();
      setPersonajes(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    personajeGet();
  }, []);

  return (
    <Flex
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      {personajes.map((personajito, index) => {
        return (
          <div key={index}>
            <h1>{personajito.name}</h1>
          </div>
          // <div key={index} className="card">
          //   <DataTable value={personajito} tableStyle={{ minWidth: "50rem" }}>
          //     <Column field="code" header="Code">
          //       {personajito.name}
          //     </Column>
          //     <Column field="name" header="Name"></Column>
          //     <Column field="category" header="Category"></Column>
          //     <Column field="quantity" header="Quantity"></Column>
          //   </DataTable>
          // </div>
        );
      })}
    </Flex>
  );
};
