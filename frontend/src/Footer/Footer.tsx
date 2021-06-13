export const Footer = () => {
    return (
        <footer className={"footer-container bg-gray-dark"}>
            <div className={"site-info"}>
                <div className={"footer-brand"}>
                    <img src={"img/brand_logo.png"} width={30} height={30} alt={"Daniel Chadwick logo."} />

                    <span>Daniel Chadwick</span>
                </div>

                <p>
                    Powered by NextJS, NestJS, PostgreSQL.

                    <br />

                    <small>Built with TailwindCSS.</small>
                </p>
            </div>
        </footer>
    );
};
