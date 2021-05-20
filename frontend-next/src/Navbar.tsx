export const Navbar = () => {
    return (
        <nav className={"navbar w-full bg-gray-dark z-overlay min-h-60"}>
            <div className={"container flex items-center justify-between flex-wrap p-6"}>
                <div className={"w-full sm:w-auto mb-3 sm:mb-0 items-center flex-no-shrink sm:mr-3"}>
                    <a className={"link--primary link--no-hover flex flex-row fill-current justify-center"} href={"#"}>
                        <span className={"font-semibold text-xl tracking-tight"}>
                            Daniel Chadwick
                        </span>
                    </a>
                </div>

                <div className={"w-auto flex-grow flex justify-center sm:justify-start"}>
                    <a href={"#"} className={"link--primary inline-block mx-2 text-center"}>
                        Home
                    </a>

                    {/*<a href={"#"} className={"link--primary inline-block mx-2 text-center"}>*/}
                    {/*    CV*/}
                    {/*</a>*/}
                </div>
            </div>
        </nav>
    );
}