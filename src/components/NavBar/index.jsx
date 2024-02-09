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
    <div class="collapse navbar-collapse justify-content-end"  id="navbarNav">
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

<div class="navbar navbar-fixed-top navbar-custom ">
  <div class="container" >
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><span class="navbar-logo">Logo_A</span></a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">Menu Item 1</a></li>
        <li><a href="#contact">Menu Item 2</a></li>
        <li><a href="#about">Menu Item 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"></a></li>
      </ul>
    </div>
  </div>
</div>