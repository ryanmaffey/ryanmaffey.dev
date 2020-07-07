import "../styles/index.css";

function MyApp({
    Component,
    pageProps,
}: {
    Component: any;
    pageProps: Object;
}) {
    return <Component {...pageProps} />;
}

export default MyApp;
