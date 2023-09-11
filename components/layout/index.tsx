import Header from '../header/index';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    );
}

export default Layout;