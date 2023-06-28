import React from "react";

const HostedSearchUI = () => {
  return (
    <div>
      <iframe
        // src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=%REACT_APP_CUSTOM_CONFIG%&market=en-US&version=latest&q="
        src={`https://ui.customsearch.ai/hosted-page?customconfig=${process.env.REACT_APP_CUSTOM_CONFIG}&version=latest&market=en-US&q=`}
        title="Bing Custom Search"
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HostedSearchUI;