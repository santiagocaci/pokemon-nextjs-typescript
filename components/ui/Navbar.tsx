import Image from "next/image";
import Link from "next/link";
import {
  Spacer,
  Text,
  useTheme,
  Link as LinkUi,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  const { asPath } = useRouter();
  const [id, setId] = useState(1);

  useEffect(() => {
    setId(Math.floor(Math.random() * 150 + 1));
  }, [asPath]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Link href="/">
        <LinkUi>
          <Image
            alt={`Pokemon ${id}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            width={70}
            height={70}
          />
        </LinkUi>
      </Link>
      <Link href="/">
        <LinkUi>
          <Text color="white" h2>
            PokeApp
          </Text>
        </LinkUi>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites">
        <Button auto color="gradient">
          <Text>Favorites</Text>
        </Button>
      </Link>
    </div>
  );
};
