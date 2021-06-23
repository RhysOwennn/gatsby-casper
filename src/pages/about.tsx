import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Sybersyn By Rhys Owen <br /> GitHub: <a href="https://github.com/scttcper/gatsby-casper">scttcper/gatsby-casper</a>
                </h5>
                <p>
                  Sybersyn is a music project created by Rhys John Owen that aims to create visual and auditory experiences.
                  There is an emphasis on the current global socio-political climate and every aspect of the project aims to provide 
                  commentary and artistic expression.
                </p>
                <p>
                  It is no secret that we're living in a new era. A time of global surveillance, mass psychological manipulation
                  and covert warfare. The future is more uncertain than ever, with the compounding of technological advancements,
                  the increasing concentration of power and wealth among the priviledged few - it's clear that we are in need of 
                  artworks of innovation to help us explore the possibilites of a tomorrow that alone none of us could imagine but 
                  together, one that could be far richer and fufilling than we ever could have imagined.  
                </p>
                <p>
                  In nunc lacus, dapibus vitae lacus sit amet, efficitur iaculis neque. Suspendisse
                  ut tellus quis leo vestibulum tincidunt. Aenean nec enim ac dolor lacinia semper.
                  Ut sed laoreet libero. Nunc elementum sollicitudin accumsan. Nunc eu augue neque.
                  Proin a tortor nibh. Cras eu nisl ornare sapien feugiat pellentesque. Mauris
                  dignissim vel quam eu pellentesque. Integer sit amet posuere quam, eu ullamcorper
                  odio. Nullam a lacus tempus sapien dignissim ullamcorper. In hac habitasse platea
                  dictumst. Proin quis massa aliquam, feugiat tortor sit amet, tincidunt urna. Donec
                  posuere pulvinar lectus, ac semper ipsum vulputate quis.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
