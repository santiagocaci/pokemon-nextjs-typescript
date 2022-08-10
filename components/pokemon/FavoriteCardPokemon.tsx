import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";

interface Props {
  idPokemon: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ idPokemon }) => {
  const router = useRouter();

  const onFavoriteClick = async () => router.push(`/pokemon/${idPokemon}`);

  return (
    <Grid onClick={onFavoriteClick} key={idPokemon} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable css={{ padding: "$8" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
          width="100%"
          height={200}
          alt={`Pokemon #${idPokemon}`}
        />
      </Card>
    </Grid>
  );
};
