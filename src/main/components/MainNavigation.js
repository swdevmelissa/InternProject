import classes from './MainNavigation.module.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
        <a className="navbar-brand " href="/welcome-page">
          E-commerce Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
       
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/dashboard" >
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active mx-5 ">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>

            <li className="nav-item active mx-5 ">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>

            <li className="nav-item active mx-5 ">
              <a className="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
