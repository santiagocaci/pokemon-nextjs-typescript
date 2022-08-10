import Head from "next/head";
import { PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title = "Poke App",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Santiago Caci" />
        <meta name="description" content={`Info sobre el pokemon ${title}`} />
        <meta name="keywords" content={`XXX, pokemon, ${title}`} />
        <meta property="og:title" content={`Information about the ${title}`} />
        <meta property="og:description" content={`Page about${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.webp`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
