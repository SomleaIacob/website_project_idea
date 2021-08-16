<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebDev</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="stil.css">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="img/WDLogo.png" alt="Missing logo!" width="100" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <!-- <button
            type="button"
            id="butonLogin"
            class="btn btn-primary ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Login
          </button> -->
          <a class="ms-auto" href="logout.php">Logout</a>
        </div>
      </div>
    </nav>

    <div class="text-center">
        <h1 class="display-2 text-primary">Welcome to my amazing site!</h1>
    </div>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src="img/banner1.png" class="d-block w-100" alt="missing banner">
          </div>
          <div class="carousel-item">
            <img src="img/banner2.png" class="d-block w-100" alt="missing banner">
          </div>
          <div class="carousel-item">
            <img src="img/banner3.png" class="d-block w-100" alt="missing banner">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container mt-5">
          <div class="row">
            <main class="col-10 border-end">
                <h1>This is available only to YOU!</h1>
                <?php include 'myfile.php'; ?>
            </main>    

              <aside class="col ps-5">
                <h3>Aside info</h3>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
              </aside>
          </div>
      </div>


    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login form</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form method="" action="login.php">
                <div class="mb-3">
                  <label for="exampleInputUserName" class="form-label">User name:</label>
                  <input type="text" class="form-control" name="userName"
                  id="exampleInputUserName" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password:</label>
                  <input type="password" name="userPass" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

          </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="container-fluid bg-dark">
        <div class="text-white mt-3 p-3 row d-flex justify-content-around">
            <p class="col-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione facere aliquid explicabo cumque accusamus voluptatibus saepe unde! Quam cumque rerum facilis nemo. Laborum a harum, molestias minima aliquid animi.</p>
            <p class="col-3">Nulla dignissimos, et vel repellendus voluptatem voluptate officia provident, totam iure dicta enim doloribus qui reprehenderit? Architecto, quasi sed! Nobis fugiat repellat asperiores reiciendis, voluptatum eum reprehenderit adipisci deserunt repudiandae.</p>
            <p class="col-3">Veniam distinctio at porro doloribus nemo alias, sit iste eaque laudantium quas sapiente fugiat, exercitationem suscipit itaque amet iusto esse. Velit ratione sint officiis earum voluptatibus soluta. Voluptatem, similique facilis.</p>
        </div>
    </footer>

    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
