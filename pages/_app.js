import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Calendify - Your Calendar Management System</title>
        <meta
          name="description"
          content="A full-featured Calendar Management System with drag-and-drop, filtering, and event management capabilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Calendar Management System" />
        <meta
          property="og:description"
          content="Manage your events seamlessly with a powerful and interactive calendar system."
        />
        <meta property="og:image" content="/public/images/ref1.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
