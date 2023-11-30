function Header() {
    return (
        <nav className="#2196f3 blue">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/Lika-2020/movies">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }