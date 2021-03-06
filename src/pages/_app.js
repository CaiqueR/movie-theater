import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <title>Movie Theater</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
