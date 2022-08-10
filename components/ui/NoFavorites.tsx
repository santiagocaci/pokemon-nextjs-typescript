import { Container, Text, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      justify="center"
      css={{
        height: "calc(100vh - 100px)",
      }}
    >
      <Text h1>No favorite pokemon</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg"
        alt="Licktung"
        css={{
          opacity: "0.5",
        }}
      />
    </Container>
  );
};
