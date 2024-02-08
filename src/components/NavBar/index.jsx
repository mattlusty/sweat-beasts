import "./style.css";

function NavBar() {
    return ( 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
     <img src="./src/components/NavBar/images/HulkBeasts.jpg" alt="Sweat-Beasts" width="50" height="50" ></img>  Sweat-Beasts </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" position="d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">Cardio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Weights</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar;

