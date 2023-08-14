import React from "react";
import myimage from "../media/myimage8.jpg";
import scrolldown from "../media/scrolldown.gif";
import cert2 from "../media/alison-certificate-2.png";
import cert1 from "../media/alison-certificate.png";
import { Fade, Zoom } from "react-reveal";
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <section className="intro">
          <Fade left>
            <div
              className="img"
              style={{ backgroundImage: `url(${myimage})` }}
            ></div>
          </Fade>

          <div className="usp">
            <Zoom>
              <p className="display-5 px-5">
                With <u>50+ books</u> tested, I convert your prospects to
                clients
                <br /> Sale After Sale 💵
              </p>
            </Zoom>
            <Zoom>
              <div className="cta">
                <h3 className="px-5 pt-5">
                  <a href="#">Click Here To View My Work</a>
                </h3>
              </div>
            </Zoom>
            <Fade bottom>
              <h5>Or Scroll Down For More Info</h5>
              <div
                className="scrolldown"
                style={{ backgroundImage: `url(${scrolldown})` }}
              />
            </Fade>
          </div>
        </section>
        <section>
          <Fade left>
            <h3 className="h2 mx-5 px-5">Dedicated to the Grind</h3>
            <h3 className="h5 mx-5 px-5">
              In 2018 I started learning about copywriting, marketing, and
              psychology. From Robert Cialdini, to Joseph Sugarman, to Eugene
              Shwartz, I have read and put to work 10s of books worth of
              knowledge. From the headline to the call to action, I have
              mastered all areas of copywriting.
            </h3>
          </Fade>
          <br />
          <Fade left>
            <h3 className="h2 mx-5 px-5">Structure and Process</h3>
            <h3 className="h5 mx-5 px-5">
              The structure of my copy follows what I learned from copywriter
              Marcia Yudkin, in her course 'Basic Concepts and Techniques for
              Copywriting.' I like to first do my research. Then list out the
              points of differentiation. After that, I dramatize the
              differences. Then write out the bridge. Then write a compelling
              headline. And the Call-To-Action becomes the last part of my
              writing.
            </h3>
          </Fade>
          <br />
          <Fade left>
            <h3 className="h2 mx-5 px-5">Creative Writing</h3>
            <h3 className="h5 mx-5 px-5">
              I'm results driven and I view the copy like a swiss-watch. I
              engineer my marketing material to serve the purpose of converting
              prospects into repeat customers. I'm no fan of overly creative
              writing. My material aims to get the reader to stay engaged
              without drawing much attention to the written words themselves.
            </h3>
          </Fade>
        </section>
        <section>
          <h3 className="h1">Certifications</h3>
          <div className="credentials">
            <div className="cred">
              <div
                className="cert"
                style={{ backgroundImage: `url(${cert2})` }}
              />
              <h3 className="px-5">
                Advanced Copywriting Skills and Techniques
              </h3>
            </div>
            <div className="cred">
              <div
                className="cert"
                style={{ backgroundImage: `url(${cert1})` }}
              />
              <h3>Basic Concepts and Techniques for Copywriting</h3>
            </div>
          </div>
        </section>

        <section>
          <h3 className="h1">What I Can Do For You</h3>
          <div className="services">
            <Fade left>
              <div className="service">
                <h3>Social Media Posts</h3>
                <p>
                  Social Media Marketing gets prospects to your website and
                  gives you more credibility. That's why it's important to post
                  engaging content regularly.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="service">
                <h3>Blog Posts</h3>
                <p>
                  Writing Informative Articles builds a loyal fan base,
                  increases your credibility, and sets you as an authority in
                  your niche.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="service">
                <h3>Landing Pages</h3>
                <p>
                  How many prospects you turn into leads decides how much money
                  you'll make. The fun sits here for me as I write and tweak to
                  maximize lead conversions.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="service">
                <h3>Emails</h3>
                <p>
                  Writing effective email campaigns gets you the money. So it
                  becomes crucial to hire me, a human, to write you emails that
                  can be felt. Getting you results, gets me results.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="service">
                <h3>Video Scripts</h3>
                <p>
                  As most of your competitors are using video, It is more
                  important than ever to have videos that engage with your
                  prospects and customer base.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="service">
                <h3>More</h3>
                <p>
                  Sales Pages, Unique Selling Propositions, Brand Stories,
                  Taglines, Brand Names, Home Pages, About Pages...etc.
                </p>
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
