
// import "../styles/pages/index.scss"
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/components/index.scss"


export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />;
  </Layout>
}
