import React from "react";
import styles from "./hostedSearchUI.module.scss"
import IframeResizer from "iframe-resizer-react";

const HostedSearchUI = () => {
  return (
    <div className={styles.HostedSearchUI}>
      <iframe
        // src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=%REACT_APP_CUSTOM_CONFIG%&market=en-US&version=latest&q="
        src={`https://ui.customsearch.ai/hosted-page?customconfig=${process.env.REACT_APP_CUSTOM_CONFIG}&version=latest&market=en-US&q=`}
        title="Bing Custom Search"
        width="100%"
        height="400px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HostedSearchUI;