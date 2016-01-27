Nav = React.createClass({

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-default">
                            <ul className="nav navbar-nav navbar-left">
                                <li><img  className="logo-navbar" src="img/logo@2x.png"></img></li>
                                <li><a href="#">Sign up!</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Flashcards<span className="caret"></span></a>
                                    <ul className="dropdown-menu"><li><a href="#">Look for Flashcards</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                <a className="dropdown-toggle " data-toggle="dropdown"  href="#">Courses<span className="caret"></span></a>
                                <ul className="dropdown-menu"><li><a href="#">Find available courses</a></li>
                                </ul>
                            </li>
                                <li><a href="#">KhanAcademy Playlists</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )}
});

