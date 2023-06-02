import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { ErrorBoundary } from "react-error-boundary";

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <ErrorBoundary
                onReset={() => {
                    // Reset the state or perform any necessary actions
                }}
                onError={(error, componentStack) => {
                    // Log or handle the error
                    console.error(error);
                }}
            >
                <Component {...pageProps} />
            </ErrorBoundary>
        </ParallaxProvider>
    );
}

export default MyApp;
