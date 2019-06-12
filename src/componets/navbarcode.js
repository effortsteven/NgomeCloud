import React, { Component } from 'react';
import Navbarslinks from './navbarlinks';

        const backImage = {
            backgroundImage: 'url(assets/img/kit/bg21.jpg)'
        }
    class Navbars extends Component {
    state = {
        navs :[
        {  id: 1, name: 'Home', url: '/'},
        {  id: 2, name: 'About US', url:  '/About'},
        {  id: 3, name: 'Contact US', url: '/Contact'},
        {  id: 4, name: 'Gallery', url:'/Gallery'}
        ]
    }

    // receivenavs = ({tempnavs}) => {
    // let oldnavs = [...this.state.navs, tempnavs];
    // this.setState({
    //   navs : oldnavs
    // })
    // }
    render() {
        return (
        <div className="header-2">
            <nav className="navbar fixed-top  navbar-expand-lg "  id="sectionsNav">
                <label className="call-us-top">Call Free: 080 011 0041 </label>
                <div className="container col-lg-12">
                    <div className="navbar-translate col-lg-3 ml-5" id="mainTitle">
                        <a className="navbar-brand nav-a" href="index.html"> 
                            <img src="../assets/img/kit/nic_2.png" alt="logo" style={{marginTop: '-5px'}}className="bland-img"></img>
                            National Insurance Corparation
                        </a>
                        <button  className="navbar-toggler navbar-toggler-btn" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <div style={{display: 'inline-block'}}>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </div>
                            <span className="navbar-toggler-title">Menu</span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse col-lg-9">
                            <Navbarslinks navs={ this.state.navs } />
                    </div>
                </div>
            </nav>
            <div className="land-page-1">
                <div className="page-header header-filter" style={backImage}>
                    <div className="container land-page-cont-1">
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Navbars