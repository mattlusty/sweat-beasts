import "./style.css";

function NavBar() {
    return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div  id ="Nav" className= "container-fluid">
    <a className="navbar-brand" href="#">
     <img src="./src/components/NavBar/image/HulkBeasts.jpg" alt="Sweat-Beasts" width="50" height="50"></img>  Sweat-Beasts </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end"  id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="#">Cardio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Weights</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default NavBar;
