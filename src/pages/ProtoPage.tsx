import React from 'react'
import Header from '../common-components/Header'
import Footer from '../common-components/Footer'
import styles from './protoPage.module.scss'
import ContainBrowseResults from '../components/proto-page/ContainBrowseResults'
import HostedSearchUI from '../components/proto-page/HostedSearchUI'

function ProtoPage() {
  return (
    <div className={styles.protoPage}>
      <Header/>
      <HostedSearchUI/>
      {/* <ContainBrowseResults/> */}
      <Footer/>
    </div>
  )
}

export default ProtoPage