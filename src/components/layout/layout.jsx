import Header from "./parts/header";



export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}