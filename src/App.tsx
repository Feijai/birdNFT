import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import { clickModalButtonAction } from './redux/actions/ModalAction'
import { ModalProps } from './InterFace'
import styled from 'styled-components';
import Home from './pages/Home'  
import PicValue from './pages/PicValue';
import Export from './pages/Export';
import ArtDetail from './pages/ArtDetail';

const PageCss = styled.div`
  margin-top:104px;
  @media (max-width:996px) {
    margin-top:51px;
  }
`

const App: React.FC<ModalProps> = (props) => {
  const { modalState, getLoginModal } = props
  return (
    <>
      {/* <Header modalState={modalState} getLoginModal={getLoginModal} /> */}
      <Header />
      <PageCss>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/picvalue" element={<PicValue />} />
          <Route path="/export" element={<Export />} />
          <Route path="/artDetail" element={<ArtDetail />} />
        </Routes>
        <Footer />
        {/* <LoginModal modalState={modalState} getLoginModal={getLoginModal} /> */}
      </PageCss>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  modalState: state.modalReducer.modalState,
})

export default connect(mapStateToProps, {
  getLoginModal: clickModalButtonAction,
})(App)
