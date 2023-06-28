// ALTERNATIVE RESOURCE: https://learn.microsoft.com/en-us/azure/cognitive-services/bing-custom-search/call-endpoint-nodejs

import React from 'react'
// import useScript from '../../hooks/useScript'
import useScript, { ScriptStatus } from '@charlietango/use-script'


function ContainBrowseResults() {

    // useScript("text/javascript", "bcs_js_snippet", `https://ui.customsearch.ai/api/ux/rendering-js?customConfig=${process.env.REACT_APP_CUSTOM_CONFIG}&market=en-US&version=latest&q=`)
    // useScript(`https://ui.customsearch.ai/api/ux/rendering-js?customConfig=${process.env.REACT_APP_CUSTOM_CONFIG}&market=en-US&version=latest&q=`)
  


    const [ready, status] = useScript(`https://ui.customsearch.ai/api/ux/rendering-js?customConfig=${process.env.REACT_APP_CUSTOM_CONFIG}&market=en-US&version=latest&q=`)
    if (status === ScriptStatus.ERROR) {
      return <div>Failed to load API</div>
    }



    return (
    <div className='ContainBrowseResults'>
        Hi
        {/* <script type="text/javascript" 
            id="bcs_js_snippet"
            src=`https://ui.customsearch.ai/api/ux/rendering-js?customConfig=${process.env.REACT_APP_CUSTOM_CONFIG}&market=en-US&version=latest&q=`>
        </script> */}


        {/* {ready} */}


    </div>
  )
}

export default ContainBrowseResults