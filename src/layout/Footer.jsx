function Footer() {
    return (

        <footer className="page-footer #90caf9 blue lighten-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/Lika-2020/movies">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }