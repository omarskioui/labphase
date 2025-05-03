import React from 'react'

function About() {
  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <section
          className="section testi text-center has-bg-image"
          style={{ backgroundImage: 'url("./assets/images/testimonial-bg.jpg")' }}
          aria-label="testimonials"
        >
          <div className="container">
            <div className="quote">”</div>
            <p className="headline-2 testi-text">
              I wanted to thank you for inviting me down for that amazing dinner the
              other night. The food was extraordinary.
            </p>
            <div className="wrapper">
              <div className="separator" />
              <div className="separator" />
              <div className="separator" />
            </div>
            <div className="profile">
              <img
                src="./assets/images/testi-avatar.jpg"
                width={100}
                height={100}
                loading="lazy"
                alt="Sam Jhonson"
                className="img"
              />
              <p className="label-2 profile-name">Sam Jhonson</p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className="section about text-center"
          aria-labelledby="about-label"
          id="about"
        >
          <div className="container">
            <div className="about-content">
              <p className="label-2 section-subtitle" id="about-label">
                Our Story
              </p>
              <h2 className="headline-1 section-title">Every Fla vor Tells a Story</h2>
              <p className="section-text">
                Grilli has been crafting unforgettable dining experiences.
                What began as a humble family bistro has evolved into a beloved culinary landmark.
                Each dish carries the legacy of its founders, blending tradition and passion into every bite.
                From secret spice blends to time-honored recipes, every meal is a journey through history, culture, and love,
                proving that great food is more than just taste—it’s a story.
              </p>
              <div className="contact-label">Book Through Call</div>
              <a
                href="tel:+216 00 000 000"
                className="body-1 contact-number hover-underline"
              >
                +216 00 000 000
              </a>
              <a href="#" className="btn btn-primary">
                <span className="text text-1">Read More</span>
                <span className="text text-2" aria-hidden="true">
                  Read More
                </span>
              </a>
            </div>
            <figure className="about-banner">
              <img
                src="./assets/images/about-banner.jpg"
                width={570}
                height={570}
                loading="lazy"
                alt="about banner"
                className="w-100"
                data-parallax-item=""
                data-parallax-speed={1}
              />
              <div
                className="abs-img abs-img-1 has-before"
                data-parallax-item=""
                data-parallax-speed="1.75"
              >
                <img
                  src="./assets/images/about-abs-image.jpg"
                  width={285}
                  height={285}
                  loading="lazy"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="abs-img abs-img-2 has-before">
                <img
                  src="./assets/images/badge-2.png"
                  width={133}
                  height={134}
                  loading="lazy"
                  alt=""
                />
              </div>
            </figure>
            <img
              src="./assets/images/shape-3.png"
              width={197}
              height={194}
              loading="lazy"
              alt=""
              className="shape"
            />
          </div>
        </section>

      </div>

    </>
  )
}

export default About