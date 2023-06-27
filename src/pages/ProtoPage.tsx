import React from 'react'
import Header from '../common-components/Header'
import Footer from '../common-components/Footer'
import styles from './protoPage.module.scss'
import Chatbot from '../components/proto-page/Chatbot'
import ContainBrowseResults from '../components/proto-page/ContainBrowseResults'

function ProtoPage() {
  return (
    <div className={styles.protoPage}>
      <Header/>
      <Chatbot/>
      <Footer/>
    </div>
  )
}

export default ProtoPage