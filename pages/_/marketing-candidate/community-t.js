import * as React from "react";
import * as Constants from "~/common/constants";
import * as Actions from "~/common/actions";

import { css } from "@emotion/react";

import WebsitePrototypeWrapper from "~/components/core/WebsitePrototypeWrapper";
import WebsitePrototypeHeader from "~/components/core/NewWebsitePrototypeHeader";
import WebsitePrototypeFooter from "~/components/core/NewWebsitePrototypeFooter";

const FEATURES = [
  {
    illustration: "https://slate.textile.io/ipfs/bafkreih4hmgltk3mboh5to6lwzcmcptzsiuzlodpdxztynsl2xij6q4deq",
    title: "Multiplayer slate",
    description:
      "Slate as social space. Co-create slates with family and friends. Share design, code, research, dinner plans with others and discuss your ideas.",
  },
  {
    illustration: "https://slate.textile.io/ipfs/bafybeiebglllfwpqk7v57erslgmsjq2vkfav7zmcgjb7dcq3rhca26iwli",
    title: "Unity game engine",
    description:
      "Slate as playground. Upload your favorite unity game to the file-sharing network. Invite your friends to play together.",
  },
  {
    illustration: "https://slate.textile.io/ipfs/bafkreigwlh7kmqnay2qs5lrcyl34mq7rhlcwfwld4vwstmnhhxyrqdyhaq",
    title: "Flexible content arrangement",
    description:
      "Slate as digital garden. Organized information with gallery view, list view, a node-link diagram, a timeline, a discussion thread and more.",
  },
];

const STYLES_FEATURE_CARD_GROUP = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 48px;
`;

const STYLES_FEATURE_CARD = css`
  width: 32%;
  margin: 0 16px 0 0;
  border-radius: 8px;
  background-color: #f2f4f8;
  box-shadow: -6px -6px 10px #ffffff, 4px 4px 10px #d4d4d4;
`;

const STYLES_CARD_TEXT = css`
  font-family: ${Constants.font.text};
  font-weight: 400;
  font-size: ${Constants.typescale.lvl1};
  letter-spacing: -0.011rem;
  line-height: 1.5;
  margin: 4px 16px;
  color: ${Constants.system.slate};
`;

const STYLES_CARD_IMG = css`
  width: 100%;
  padding: 16px;
`;

const FeatureCard = (props) => {
  return (
    <div css={STYLES_FEATURE_CARD}>
      <img css={STYLES_CARD_IMG} src={props.illustration} />
      <div css={STYLES_CARD_TEXT}>{props.title}</div>
      <div css={STYLES_CARD_TEXT} style={{ opacity: 0.7, marginBottom: 16 }}>
        {props.description}
      </div>
    </div>
  );
};

const STYLES_ROOT = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: -88px 0 0 0;
  background-color: #f2f4f8;
`;

const STYLES_H1 = css`
  font-family: ${Constants.font.medium};
  font-weight: 400;
  font-size: ${Constants.typescale.lvl5};
  letter-spacing: -0.022rem;
  line-height: 1.3;
  color: ${Constants.system.slate};
  margin-bottom: 1rem;
  width: 45%;

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: ${Constants.typescale.lvl4};
  }
`;

const STYLES_H2 = css`
  font-family: ${Constants.font.medium};
  font-weight: 400;
  font-size: ${Constants.typescale.lvl4};
  letter-spacing: -0.022rem;
  line-height: 1.3;
  color: ${Constants.system.slate};
  margin-bottom: 1rem;
  width: 45%;

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
    font-size: ${Constants.typescale.lvl2};
  }
`;

const STYLES_P = css`
  font-family: ${Constants.font.text};
  font-weight: 400;
  font-size: ${Constants.typescale.lvl1};
  letter-spacing: -0.011rem;
  line-height: 1.5;
  margin: 4px 0 0 0;
  width: 50%;
  color: ${Constants.system.slate};
  opacity: 0.7;

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
  }
`;

const STYLES_TEXT_BLOCK = css`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 67%;

  @media (max-width: ${Constants.sizes.mobile}px) {
    display: block;
    width: 100%;
  }
`;

const stylesFullWidthText = {
  width: `100%`,
};

const STYLES_SECTION_WRAPPER = css`
  width: 100%;
  padding: 88px;

  @media (max-width: ${Constants.sizes.mobile}px) {
    padding: 24px;
  }
`;

const STYLES_DINNER_TABLE = css`
  width: 50%;
  padding: 48px 64px;
  background-color: #e7e7e9;
  display: inline-block;
  box-shadow: 0px 10px 50px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
    padding: 24px 32px;
  }
`;

const STYLES_TABLE_ROW = css`
  width: 100%;
`;

const STYLES_FIGURES_GROUP = css`
  width: 50%;
  margin: -4px auto;

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
    margin: 10vh 0 -4px 0;
  }
`;

const STYLES_FIGURE = css`
  width: 50%;
`;

const STYLES_FIGURES_BOTTOM = css`
  width: 50%;
  margin: -4px auto;
  transform: rotate(180deg);

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
  }
`;

const STYLES_FIGURE_RIGHT = css`
  width: 25%;
  transform: rotate(90deg) translateY(39%);

  @media (max-width: ${Constants.sizes.mobile}px) {
    display: none;
  }
`;

const STYLES_FIGURE_LEFT = css`
  width: 25%;
  transform: rotate(-90deg) translateY(39%);

  @media (max-width: ${Constants.sizes.mobile}px) {
    display: none;
  }
`;

const STYLES_BUTTON = css`
  margin-top: 48px;
  min-height: 48px;
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: #e7e7e9;
  color: ${Constants.system.slate};
  font-family: ${Constants.font.semiBold};
  font-weight: 400;
  font-size: ${Constants.typescale.lvl1};
  letter-spacing: -0.011rem;

  box-shadow: -4px -4px 10px #ffffff, 4px 4px 10px #b2b4b3;
  transition: 200ms ease all;
  cursor: pointer;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const STYLES_CENTER_BLOCK = css`
  width: 33%;
  margin: 48px auto;
  text-align: center;
`;

const STYLES_IMG = css`
  width: 20%;
`;

export const getServerSideProps = async (context) => {
  return {
    props: { ...context.query },
  };
};

export default class CommunityPage extends React.Component {
  async componentDidMount() {
    const response = await Actions.health();
    console.log("HEALTH_CHECK", response);
  }

  render() {
    const title = `Slate`;
    const description =
      "Slate is designed and built by a growing community of hackers, artists, and creatives on the web.";
    const url = "https://slate.host/community";

    return (
      <WebsitePrototypeWrapper title={title} description={description} url={url}>
        <WebsitePrototypeHeader />
        <div css={STYLES_ROOT}>
          <section css={STYLES_SECTION_WRAPPER}>
            <div css={STYLES_FIGURES_GROUP}>
              <img
                css={STYLES_FIGURE}
                src="https://slate.textile.io/ipfs/bafybeiekksvkiaa2vwyzaitjb44adb5mfbqaqkagizwuw5odmgcwdmmiha"
              />
              <img
                css={STYLES_FIGURE}
                src="https://slate.textile.io/ipfs/bafybeiehufugq7vujsclzdpkdhff5kop6c4uw6emjuswwp3jhpznaou2se"
              />
            </div>
            <div css={STYLES_TABLE_ROW}>
              <img
                css={STYLES_FIGURE_LEFT}
                src="https://slate.textile.io/ipfs/bafybeiehufugq7vujsclzdpkdhff5kop6c4uw6emjuswwp3jhpznaou2se"
              />
              <div css={STYLES_DINNER_TABLE}>
                <h1 css={STYLES_H1} style={stylesFullWidthText}>
                  An open invitation to everyone
                </h1>
                <p css={STYLES_P} style={stylesFullWidthText}>
                  Slate is designed and built by a growing community of hackers, artists, and creatives on the web.
                </p>
                <button css={STYLES_BUTTON} onClick={() => window.open("https://filecoin.io/slack")}>
                  Join our community{" "}
                </button>
              </div>
              <img
                css={STYLES_FIGURE_RIGHT}
                src="https://slate.textile.io/ipfs/bafybeiekksvkiaa2vwyzaitjb44adb5mfbqaqkagizwuw5odmgcwdmmiha"
              />
            </div>
            <div css={STYLES_FIGURES_BOTTOM}>
              <img
                css={STYLES_FIGURE}
                src="https://slate.textile.io/ipfs/bafybeiekksvkiaa2vwyzaitjb44adb5mfbqaqkagizwuw5odmgcwdmmiha"
              />
              <img
                css={STYLES_FIGURE}
                src="https://slate.textile.io/ipfs/bafybeiehufugq7vujsclzdpkdhff5kop6c4uw6emjuswwp3jhpznaou2se"
              />
            </div>
          </section>
          <section css={STYLES_SECTION_WRAPPER}>
            <div css={STYLES_TEXT_BLOCK}>
              <h2 css={STYLES_H2}>Further down the road</h2>
              <p css={STYLES_P}>Slate has infinite possibilities. Here are some of them that we’re excited about.</p>
            </div>
            <div css={STYLES_FEATURE_CARD_GROUP}>
              {FEATURES.map((each) => (
                <FeatureCard illustration={each.illustration} title={each.title} description={each.description} />
              ))}
            </div>
            <br />
            <br />
            <br />
            <br />
            <div css={STYLES_CENTER_BLOCK}>
              <img
                css={STYLES_IMG}
                src="https://slate.textile.io/ipfs/bafkreibq5lv5jfpjrk6obisfrsdl4rnijqbb23fcrehufh4w4vx5zsszfa"
              />
              <h2 css={STYLES_H2} style={stylesFullWidthText}>
                Have an idea?
                <br />
                Expand our imaginations.
              </h2>
              <button
                css={STYLES_BUTTON}
                onClick={() => window.open("https://github.com/filecoin-project/slate/issues")}
              >
                Submit a feature request
              </button>
            </div>
          </section>
          <section css={STYLES_SECTION_WRAPPER}>
            <div css={STYLES_TEXT_BLOCK}>
              <h2 css={STYLES_H2}>We couldn’t build Slate without our community of contributors</h2>
              <p css={STYLES_P}>
                Here features some great work from our contributors. We define contribution beyond code. And we believe
                that everyone has something to bring to the table. 🍰
              </p>
            </div>
          </section>
        </div>
        <WebsitePrototypeFooter />
      </WebsitePrototypeWrapper>
    );
  }
}
