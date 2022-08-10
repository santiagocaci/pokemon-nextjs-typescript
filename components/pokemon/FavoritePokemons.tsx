import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  pokemonsId: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemonsId }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsId.map((id) => (
        <FavoriteCardPokemon key={id} idPokemon={id} />
      ))}
    </Grid.Container>
  );
};
