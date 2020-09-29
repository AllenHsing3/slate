import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";

import { css } from "@emotion/react";
import { FileTypeIcon } from "~/components/core/FileTypeIcon";

const STYLES_IMAGE = css`
  background-color: ${Constants.system.foreground};
  display: block;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  transition: 200ms ease all;
`;

const STYLES_ENTITY = css`
  height: 100%;
  width: 100%;
  border: 1px solid ${Constants.system.lightBorder};
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: none;
  padding: 8px;
  font-size: 0.9rem;
`;

const STYLES_TITLE = css`
  width: 100%;
  text-align: center;
  margin-top: 8px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: break-word;
`;

const STYLES_VIDEO = css`
  margin-top: 8px;
  overflow: hidden;
  pointer-events: none;
  width: 300px !important;
  height: auto !important;
`;

const STYLES_PDF = css`
  width: 100%;
  height: 76.5%;
  margin-top: 8px;
  overflow: hidden;
  pointer-events: none;
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: ${Constants.system.foreground};
  }
  ::-webkit-scrollbar-thumb {
    background: ${Constants.system.darkGray};
  }
`;

export default class SlateMediaObjectPreview extends React.Component {
  static defaultProps = {
    charCap: 30,
  };

  render() {
    // NOTE(jim):
    // This is a hack to catch this undefined case I don't want to track down yet.
    const url = this.props.url.replace("https://undefined", "https://");
    const title =
      this.props.title && this.props.title.length > this.props.charCap
        ? this.props.title.substring(0, this.props.charCap) + "..."
        : this.props.title;

    if (this.props.type && this.props.type.startsWith("image/")) {
      return <img css={STYLES_IMAGE} style={this.props.imageStyle} src={url} />;
    }

    if (this.props.type && this.props.type.startsWith("application/pdf")) {
      // PDF Toolbar showing up on firefox. Seems like a browser setting issue.
      return <iframe css={STYLES_PDF} type="application/pdf" scrolling='no' src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}></iframe>
    }

    if (this.props.type && this.props.type.startsWith("video/")) {
      return (
        // Not sure if video should autoplay on load.
        <video css={STYLES_VIDEO} loop >
          <source src={url} type="video/mp4"></source>
        </video>
      );
    }
    
    let element = <FileTypeIcon type={this.props.type} height="24px" />;

    return (
      <article css={STYLES_ENTITY} style={this.props.style}>
        <div>{element}</div>
        {this.props.title && !this.props.small ? (
          <div css={STYLES_TITLE}>{title}</div>
        ) : null}
      </article>
    );
  }
}
