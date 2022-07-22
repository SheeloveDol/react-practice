

const Header = ({inCase, text, another, greet}) => {
    return (
        <header>
            <div className="container">
                <h1>{text}</h1>
                <h2>{another}</h2>
                <h4>{inCase}</h4>
                <p>{greet}</p>

            </div>
        </header>
    )
}

Header.defaultProps = {
    inCase: 'This is a default prop'
}
export default Header
