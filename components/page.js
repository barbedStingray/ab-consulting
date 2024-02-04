// IMPORTS
import Header from './header'

const Page = ({ children }) => {
    return (
        // THIS IS YOUR PAGE STRUCTURE
        // Items on this page will display on every page.
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Page;
