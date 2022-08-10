import { useRouter } from "next/router";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} key={pokemon.id}>
      <Card onClick={onPokemonClick} isHoverable isPressable>
        <Card.Body>
          <Card.Image
            alt={pokemon.name}
            src={pokemon.image}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row
            css={{
              backgroundColor: "$gray400",
              borderRadius: "$md",
            }}
            style={{ padding: "0 1rem" }}
            justify="space-between"
          >
            <Text h3 transform="capitalize">
              {pokemon.name}
            </Text>
            <Text h3>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
