import React from 'react'

function Chatbot() {
    // const iframe='<iframe height="430" width="350" src=`https://bot.dialogflow.com/${process.env.REACT_APP_AGENT_ID}0`></iframe>'
    
    // const script = `<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>`
    // const dfMessenger=`<df-messenger
    //   chat-icon="https:&#x2F;&#x2F;cdn-icons-png.flaticon.com&#x2F;512&#x2F;4712&#x2F;4712038.png"
    //   intent="WELCOME"
    //   chat-title="Tina-From-Turners"
    //   agent-id=`${process.env.REACT_APP_AGENT_ID}`
    //   language-code="en"
    // ></df-messenger>`
    
    // function Iframe(props:{dHtml:string}) {
    //     return (<div dangerouslySetInnerHTML={ {__html:  props.dHtml?props.dHtml:""}} />);
    //   }

  return (

    <div>
        {/* <iframe height="430" width="350" src=`https://bot.dialogflow.com/${process.env.REACT_APP_AGENT_ID}`></iframe> */}
        
        {/* <Iframe dHtml={script} />
        <Iframe dHtml={dfMessenger} /> */}
    </div>
  )
}

export default Chatbot