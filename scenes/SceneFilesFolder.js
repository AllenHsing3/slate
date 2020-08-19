import * as React from "react";
import * as Actions from "~/common/actions";
import * as System from "~/components/system";

import { css } from "@emotion/react";

import ScenePage from "~/components/core/ScenePage";
import DataView from "~/components/core/DataView";
import DataMeter from "~/components/core/DataMeter";

const POLLING_INTERVAL = 10000;

export default class SceneFilesFolder extends React.Component {
  _interval;

  loop = async () => {
    let jobs = [];

    this.props.viewer.library[0].children.forEach((d) => {
      if (d.networks && d.networks.includes("FILECOIN")) {
        console.log(d);
        jobs.push({
          ipfs: d.ipfs,
          cid: d.ipfs.replace("/ipfs/", ""),
          job: d.job,
          error: d.error,
        });
      }
    });

    console.log({ jobs });
    if (jobs.length) {
      const response = await Actions.checkCIDStatus(jobs);

      console.log(response);

      if (response && response.update) {
        await this.props.onRehydrate();
      }
    }

    if (this._interval) {
      this._interval = window.setTimeout(this.loop, POLLING_INTERVAL);
    }
  };

  componentDidMount() {
    this._interval = this.loop();
  }

  componentWillUnmount() {
    window.clearTimeout(this._interval);
    this._interval = null;
  }

  componentDidUpdate(prevProps) {
    if (!this._interval) {
      console.log("Starting loop again");
      this._interval = this.loop();
    }
  }

  render() {
    return (
      <ScenePage>
        <System.DescriptionGroup
          label="Are Filecoin deals working?"
          description="At the moment there are some bugs with deals on our Devnet but our team is working through them."
        />

        <DataMeter
          stats={this.props.viewer.stats}
          style={{ margin: "48px 0 24px 0" }}
        />

        <System.H1 style={{ marginTop: 48 }}>
          {this.props.current.name}
        </System.H1>

        <DataView
          buttons={[
            {
              name: "Upload data",
              type: "SIDEBAR",
              value: "SIDEBAR_ADD_FILE_TO_BUCKET",
            },
          ]}
          viewer={this.props.viewer}
          items={this.props.viewer.library[0].children}
          onAction={this.props.onAction}
          onRehydrate={this.props.onRehydrate}
        />
      </ScenePage>
    );
  }
}
