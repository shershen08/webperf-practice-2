import Link from "next/link";
import Image from "next/image";

import newsD from "../../images/news/news-detail-header.jpg";
import alex from "../../images/author/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import shoeib from "../../images/author/shoeib-abolhassani-ojl7T2Ah93U-unsplash.jpg";
import louis from "../../images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";
import ella from "../../images/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg";
import gilles from "../../images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import charles from "../../images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg";

export const metadata = {
  title: "Crispy Kitchen - News Page",
};

export default function Page() {
  return (
    <>
      <header className="site-header site-news-detail-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Learning a fine dining experience</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="news-detail section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <Image
                src={newsD}
                className="img-fluid news-detail-image"
                alt="fine dining experience"
              />

              <div className="col-lg-10 col-10 mx-auto mt-5">
                <h4 className="mb-3">
                  The best fine-dining experience at Crispy Kitchen
                </h4>

                <p>
                  Phasellus in augue at quam ornare malesuada. Sed magna lorem,
                  dapibus nec lorem sed, pretium vulputate ante. In porttitor
                  sapien urna, eu vulputate arcu pharetra non. Vivamus nec nulla
                  quis leo sodales semper. Quisque sed ultricies tortor. Fusce
                  porta pretium tellus, sit amet vulputate orci.
                </p>

                <ul className="list">
                  <li className="list-item">
                    Pasta stats published in the International
                  </li>

                  <li className="list-item">
                    Rice flour, or legumes such as beans
                  </li>

                  <li className="list-item">
                    Belgian family developed major food poisoning symptoms
                  </li>
                </ul>

                <p>
                  Pasta is a type of food typically made from an unleavened
                  dough of wheat flour mixed with water or eggs, and formed into
                  sheets or other shapes, then cooked by boiling or baking. Rice
                  flour, or legumes such as beans or lentils, are sometimes used
                  in place of wheat flour to yield a different taste
                </p>

                <div className="ratio ratio-16x9 my-5">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6vebbDZxoKE?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <p>
                  Crispy Kitchen is free Bootstrap 5 HTML template provided by
                  Tooplate. You are free to use this layout for commercial
                  purposes. You are NOT allowed to redistribute the template ZIP
                  file on any template donwnload website. Please{" "}
                  <Link href="https://www.tooplate.com/contact" target="_blank">
                    contact us
                  </Link>{" "}
                  for more information.
                </p>

                <h5 className="mt-4 mb-3">Pasta with Cream Sauce Recipe</h5>

                <p>
                  Pasta is a type of food typically made from an unleavened
                  dough of wheat flour mixed with water or eggs, and formed into
                  sheets or other shapes, then cooked by boiling or baking. Rice
                  flour, or legumes such as beans or lentils, are sometimes used
                  in place of wheat flour to yield a different taste
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comments section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mb-4">Comment Box</h4>
            </div>

            <div className="col-lg-7 col-12 mx-auto">
              <form
                className="custom-form comment-form"
                action="#"
                method="get"
                role="form"
              >
                <input
                  type="text"
                  name="comment-name"
                  id="comment-name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="comment-email"
                  id="comment-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Your Email"
                  required=""
                />

                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="comment"
                  placeholder="Write a comment"
                  required
                ></textarea>

                <div className="col-lg-3 col-4 mx-auto">
                  <button type="submit" className="form-control" id="subscribe">
                    Submit
                  </button>
                </div>
              </form>

              <div className="news-author d-flex flex-wrap align-items-center">
                <Image
                  src={alex}
                  className="img-fluid news-author-image"
                  alt=""
                />

                <div className="ms-4 w-50">
                  <p className="mb-2">
                    Donec pharetra tellus nulla, aliquam elementum lorem
                    hendrerit non.
                  </p>

                  <Link href="#">David Martin</Link>
                </div>

                <span className="ms-auto">14 hours ago</span>
              </div>

              <div className="news-author d-flex flex-wrap align-items-center">
                <Image
                  src={shoeib}
                  className="img-fluid news-author-image"
                  alt=""
                />

                <div className="ms-4 w-50">
                  <p className="mb-2">
                    Quisque non libero ut mauris fermentum efficitur ac ut nibh.
                  </p>

                  <Link href="#">Jessica Noel</Link>
                </div>

                <span className="ms-auto">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-news section-padding bg-white">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">Related News</h2>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={gilles} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>

                  <strong>12 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      Is Coconut good for your health?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={ella} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Career</span>

                  <strong>18 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail" className="news-title-link">
                      How to run a sushi business?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={louis} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Meeting</span>

                  <strong>30 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="/news-detail" className="news-title-link">
                      Learning a fine dining experience
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Image
                src={charles}
                className="img-fluid newsletter-image"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
              <div className="subscribe-form-wrap">
                <h4 className="mb-0">Our Newsletter</h4>

                <p>The food news every day</p>

                <form className="custom-form subscribe-form mt-4" role="form">
                  <input
                    type="email"
                    name="subscribe-email"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Your email address"
                    required=""
                  />

                  <button
                    type="submit"
                    className="form-control mb-3"
                    id="subscribe"
                  >
                    Subscribe
                  </button>

                  <small>
                    By signing up, you agree to our Privacy Notice and the data
                    policy
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
