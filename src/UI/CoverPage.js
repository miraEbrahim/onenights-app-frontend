import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../bootstrapCss/cover/cover.css"

function CoverPage() {
  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">One Nights </h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">الرئيسية</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main role="main" className="inner cover pt-5 mt-5">
    <h1 className="cover-heading">Cover your page.</h1>
    <p className="lead pt-4">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    <p className="lead pt-5">
      <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
    </p>
  </main>

  <footer className="mastfoot mt-auto">
    <div className="inner">
      <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    </div>
  </footer>
</div>
    
  );
}

export default CoverPage;
