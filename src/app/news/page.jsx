import Link from "next/link";
import Image from "next/image";

import pablo from "../../images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg";
import stefan from "../../images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg";
import gilles from "../../images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import ella from "../../images/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg";
import louis from "../../images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";

export const metadata = {
  title: "Crispy Kitchen - News Section",
};

export default function Page() {
  return (
    <>
      <header className="site-header site-news-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">News &amp; Events</h1>

              <strong className="text-white">
                our latest updates, news, events and special promotions
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="news section-padding bg-white">
        <div className="container">
          <div className="row">
            <h2 className="mb-lg-5 mb-4">Latest Updates</h2>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={pablo} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="/news-detail" className="news-title-link">
                      How to make a healthy diet?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={stefan} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="/news-detail" className="news-title-link">
                      Happy Living and happy eating tips
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="/news-detail">
                  <Image src={gilles} className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>

                  <strong>12 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="/news-detail" className="news-title-link">
                      Is Coconut good for your health?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <a href="/news-detail">
                  <Image src={ella} className="img-fluid news-image" alt="" />
                </a>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Career</span>

                  <strong>18 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="/news-detail" className="news-title-link">
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
    </>
  );
}
