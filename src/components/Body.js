import React from 'react'

const Body = () => {
  return (
    <>
<div>


  {/* Portfolio Section*/}
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      {/* Portfolio Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Portfolio Grid Items*/}
      <div className="row justify-content-center">
        {/* Portfolio Item 1*/}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="https://cdn.punchng.com/wp-content/uploads/2016/08/15123425/education.jpg" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 2*/}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="https://static4.depositphotos.com/1007959/316/i/450/depositphotos_3163402-stock-photo-experience-green-road-sign-copy.jpg" alt="..." />
          </div>
        </div>
        {/* Portfolio Item 3*/}
        
        {/* Portfolio Item 4*/}

        {/* Portfolio Item 5*/}

        {/* Portfolio Item 6*/}

      </div>
    </div>
  </section>
  {/* About Section*/}
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* About Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>
      {/* Icon Divider*/}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* About Section Content*/}
      <div className="row">
        <div className="col-lg-4 ms-auto"><p className="lead">I am an enthusiastic and dedicated engineer and looking forward to work for an organization which provides me the opportunity to develop and improve my technical skills. I have the strength and potential to handle any kind of competitive environment, where hard work and focus is very essential, while I experience advancement opportunities.</p></div>
        <div className="col-lg-4 me-auto"><p className="lead">Hi there! I'm Bilal, a passionate web developer with a keen eye for detail and a love for creating beautiful, functional websites. With a background in IT, I bring 5 years of experience in MNC. I thrive on challenges and enjoy turning ideas into reality through clean, efficient code. Whether it's building responsive user interfaces, optimizing performance, or solving complex problems, I'm dedicated to delivering high-quality solutions that exceed expectations. Let's connect and collaborate on your next project!</p></div>
      </div>
      {/* About Section Button*/}
      <div className="text-center mt-4">

      </div>
    </div>
  </section>
  {/* Contact Section*/}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form*/}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            {/* Name input*/}
            <div className="form-floating mb-3">
              <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
              <label htmlFor="name">Full name</label>
              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            {/* Email address input*/}
            <div className="form-floating mb-3">
              <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
              <label htmlFor="email">Email address</label>
              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            {/* Phone number input*/}
            <div className="form-floating mb-3">
              <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
              <label htmlFor="phone">Phone number</label>
              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
            {/* Message input*/}
            <div className="form-floating mb-3">
              <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
              <label htmlFor="message">Message</label>
              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            {/* Submit Button*/}
            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>





    </>
  )
}

export default Body