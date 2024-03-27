import Link from "next/link";
import Image from "next/image";
import matthew from "../../images/team/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import nicolas from "../../images/team/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import rc from "../../images/team/rc-cf-FMh5o5m5N9E-unsplash.jpg";
import charles from "../../images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg";

export const metadata = {
  title: "About Crispy Kitchen HTML Template",
};
export default function Page() {
  return (
    <>
      <header className="site-header site-about-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Kitchen's Story</h1>

              <strong className="text-white">
                this is how our kitchen evolved in new digital era
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="about section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-2">
              <h4 className="mb-3">
                Crispy Kitchen is the latest Bootstrap 5 HTML template provided
                by Tooplate website.
              </h4>

              <Link href="news.html" className="custom-btn btn btn-dark mt-3">
                Check out News
              </Link>

              <Link
                href="/contact"
                className="custom-btn btn btn-danger mt-3 ms-3"
              >
                Say Hi
              </Link>
            </div>

            <div className="col-lg-6 col-12">
              <p>
                Since this website template is 100% free to use, you can edit
                and apply it for your commercial restaurant websites. There are
                6 HTML pages included in this template. Please{" "}
                <strong>click "Reservation" button</strong> on the top right to
                see the pop-up reservation form.
              </p>

              <p>
                You are NOT allowed to redistribute the template ZIP file on any
                template donwnload website. Please{" "}
                <Link href="https://www.tooplate.com/contact" target="_blank">
                  contact us
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-5">Team Members</h2>
            </div>

            <div className="col-lg-4 col-12">
              <div className="team-thumb">
                <Image src={matthew} className="img-fluid team-image" alt="" />

                <div className="team-info">
                  <h4 className="mt-3 mb-0">Sophia</h4>

                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4">
              <div className="team-thumb">
                <Image src={nicolas} className="img-fluid team-image" alt="" />

                <h4 className="mt-3 mb-0">Benjamin W.</h4>

                <p>Restaurant Manager</p>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="team-thumb">
                <Image src={rc} className="img-fluid team-image" alt="" />

                <h4 className="mt-3 mb-0">Muchen Jack</h4>

                <p>Senior Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section-padding bg-white">
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
