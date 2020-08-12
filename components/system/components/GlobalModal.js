import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/components/system/svg";
import * as Strings from "~/common/strings";

// TODO(jim): Doesn't work with rollup.
// import FocusLock from "react-focus-lock";

import { css } from "@emotion/react";
import { Boundary } from "~/components/system/components/fragments/Boundary";

const STYLES_BACKGROUND = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(45, 41, 38, 0.6);
  z-index: ${Constants.zindex.modal};
`;

const STYLES_MODAL = css`
  box-sizing: border-box;
  position: relative;
  max-width: 680px;
  width: 100%;
  border-radius: 12px;
  background-color: ${Constants.system.white};
`;

export class GlobalModal extends React.Component {
  state = {
    modal: null,
  };

  componentDidMount = () => {
    window.addEventListener("create-modal", this._handleCreate);
    window.addEventListener("delete-modal", this._handleDelete);
    window.addEventListener("keydown", this._handleDocumentKeydown);
  };

  componentWillUnmount = () => {
    window.removeEventListener("create-modal", this._handleCreate);
    window.removeEventListener("delete-modal", this._handleDelete);
    window.removeEventListener("keydown", this._handleDocumentKeydown);
  };

  _handleCreate = (e) => {
    this.setState({ modal: e.detail.modal });
  };

  _handleDelete = (e) => {
    this.setState({ modal: null });
  };

  _handleDocumentKeydown = (e) => {
    if (this.state.modal && e.keyCode === 27) {
      this.setState({ modal: null });
      e.stopPropagation();
    }
  };

  _handleEnterPress = (e) => {
    if (e.key === "Enter") {
      this.setState({ modal: null });
    }
  };

  render() {
    if (!this.state.modal) return null;
    return (
      <div
        css={STYLES_BACKGROUND}
        style={this.props.backgroundStyle}
        role="dialog"
        aria-modal="true"
        aria-label={this.props.label ? this.props.label : "modal"}
      >
        <Boundary
          enabled
          onOutsideRectEvent={this._handleDelete}
          isDataMenuCaptured={true}
        >
          <div css={STYLES_MODAL} style={this.props.style}>
            {this.state.modal}
          </div>
        </Boundary>
      </div>
    );
  }
}
