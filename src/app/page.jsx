import Image from "next/image";
import Video from "../components/Video.jsx";
import Link from "next/link";

// Images
import brettJordan from "../images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg";
import jay from "../images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import json from "../images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg";
import ivan from "../images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import farhad from "../images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg";
import keriliwi from "../images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg";
import farhadIbrahimzade from "../images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg";
import louis from "../images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg";
import farhadIbrahimzade2 from "../images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg";
import pablo from "../images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg";
import stefan from "../images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg";
import guilles from "../images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import caroline from "../images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg";
import lousiHansel from "../images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";

export const metadata = {
  title: "Crispy Kitchen - Bootstrap 5 HTML Template",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 m-auto">
              <div className="heroText">
                <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>

                <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center">
                    <h4 className="text-white mb-0 me-3">4.4/5</h4>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>
                  </div>

                  <p className="text-white w-100">
                    From <strong>1,206+</strong> Customer Reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <div
                id="carouselExampleCaptions"
                className="carousel carousel-fade hero-carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-image-wrap">
                      <Image
                        src={jay}
                        className="img-fluid carousel-image"
                        alt=""
                      />
                    </div>

                    <div className="carousel-caption">
                      <span className="text-white">
                        <i className="bi-geo-alt me-2"></i>
                        Manhattan, New York
                      </span>

                      <h4 className="hero-text">Fine Dining Restaurant</h4>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="carousel-image-wrap">
                      <Image
                        src={json}
                        className="img-fluid carousel-image"
                        alt=""
                      />
                    </div>

                    <div className="carousel-caption">
                      <div className="d-flex align-items-center">
                        <h4 className="hero-text">Steak</h4>

                        <span className="price-tag ms-4">
                          <small>$</small>26.50
                        </span>
                      </div>

                      <div className="d-flex flex-wrap align-items-center">
                        <h5 className="reviews-text mb-0 me-3">3.8/5</h5>

                        <div className="reviews-stars">
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star reviews-icon"></i>
                          <i className="bi-star reviews-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="carousel-image-wrap">
                      <Image
                        src={ivan}
                        className="img-fluid carousel-image"
                        alt=""
                      />
                    </div>

                    <div className="carousel-caption">
                      <div className="d-flex align-items-center">
                        <h4 className="hero-text">Sausage Pasta</h4>

                        <span className="price-tag ms-4">
                          <small>$</small>18.25
                        </span>
                      </div>

                      <div className="d-flex flex-wrap align-items-center">
                        <h5 className="reviews-text mb-0 me-3">4.2/5</h5>

                        <div className="reviews-stars">
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star-fill reviews-icon"></i>
                          <i className="bi-star reviews-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Video />

        <div className="overlay"></div>
      </section>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src={brettJordan}
                    className="img-fluid menu-image"
                    alt=""
                    objectFit="contain"
                  />

                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Morning Fresh</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>12.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image src={farhad} className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Lunch</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Tooplate Soup</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>24.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src={keriliwi}
                    className="img-fluid menu-image"
                    alt=""
                  />

                  <span className="menu-tag bg-warning">Dinner</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Premium Steak</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>45
                  </span>

                  <del className="ms-4">
                    <small>$</small>150
                  </del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src={farhadIbrahimzade}
                    className="img-fluid menu-image"
                    alt=""
                  />

                  <span className="menu-tag bg-warning">Dinner</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Seafood Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>86
                  </span>

                  <del className="ms-4">
                    <small>$</small>124
                  </del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image src={louis} className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Burger Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>20.50
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src={farhadIbrahimzade2}
                    className="img-fluid menu-image"
                    alt=""
                  />

                  <span className="menu-tag bg-warning">Lunch</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Healthy Soup</h4>

                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>34.20
                  </span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BgImage"></section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <Image src={pablo} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      Healthy Lifestyle and happy living tips
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <Image src={stefan} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      How to make a healthy meal
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                <Link href="news-detail.html">
                  <Image
                    src={guilles}
                    className="img-fluid news-image"
                    alt=""
                  />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>

                  <strong>8 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      Is Coconut good for you?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                <Link href="news-detail.html">
                  <Image
                    src={caroline}
                    className="img-fluid news-image"
                    alt=""
                  />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag">News</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      Salmon Steak Noodle
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <Image
                    src={lousiHansel}
                    className="img-fluid news-image"
                    alt=""
                  />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Meeting</span>

                  <strong>30 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">
                      Making a healthy salad
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
