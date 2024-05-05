import React from 'react'

const Footer = () => {
  return (
    <>
    
{/* Footer*/}
<footer className="footer text-center">
  <div className="container">
    <div className="row">
      {/* Footer Location*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Location</h4>
        <p className="lead mb-0">
          Lahore, Punjab, Pakistan
        </p>
      </div>
      {/* Footer Social Icons*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Around the Web</h4>
        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
      </div>
      {/* Footer About Text*/}
      <div className="col-lg-4">
        <h4 className="text-uppercase mb-4">Copyrights</h4>
        <p className="lead mb-0">
          Website created by Belal
        </p>
      </div>
    </div>
  </div>
</footer>

<div>
  {/* Copyright Section*/}
  <div className="copyright py-4 text-center text-white">
    <div className="container"><small>Belal Website 2024</small></div>
  </div>
  {/* Portfolio Modals*/}
  {/* Portfolio Modal 1*/}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Education</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="https://edusuitepk.b-cdn.net/wp-content/uploads/2022/01/What-is-Importance-of-Educational-Software.jpg" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4"><hr/><br/>
                            <h3>* B.Sc. Electrical Engineering * <br/>
                            - The University of Lahore, Lahore <br/><br/>
                            (2020)</h3><br/><hr/><br/>
                            <h3>* 12th Grade *<br/>
                            - Government College of Science, Lahore <br/><br/>
                            (2015)</h3><br/><hr/><br/>
                            <h3>* 10th Grade *<br/>
                            - L.D.A Model High School For Boys, A.I.T, Lahore<br/><br/>
                            (2012)</h3><br/><hr/>
</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 2*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Work Experience</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="https://cswgroup.co.uk/wp-content/uploads/2018/03/work-experience-1.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4"><h2>Power Solution </h2><br/>
                <h3>Site Engineer (March 2020 - Present)</h3> <br/>

Complete Project Design review including civil and electrical design.
</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 3*/}
  

</div>








    </>
  )
}

export default Footer