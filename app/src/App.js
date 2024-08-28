import React from 'react';
class Home extends React.Component {
    
 
  render() {
   
    return (
     
      <div className="app">
        
       
        <div className="offcanvas offcanvas-end" data-bs-scroll="false" tabIndex="-1" id="offcanvasMenu" aria-modal="true" role="dialog">
                <div className="offcanvas-header justify-content-end">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column pt-0 px-4">
                    <div>
                        <img src="assets/images/logo.svg" className="mt-2  " alt="logo" />
                        <p className="pt-3">Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
                        
                        <ul className="nav d-block flex-column my-4">
                            <li className="nav-item text-primary-hover">
                                <a className="nav-link text-dark h4 active" href="#">Home</a>
                            </li>
                            <li className="nav-item text-primary-hover">
                                <a className="nav-link text-dark h4" href="#">About</a>
                            </li>
                            <li className="nav-item text-primary-hover">
                                <a className="nav-link text-dark h4" href="#">Service</a>
                            </li>
                            <li className="nav-item text-primary-hover">
                                <a className="nav-link text-dark h4" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item text-primary-hover">
                                <a className="nav-link text-dark h4" href="#">Faqs</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="row m-2">
                        <div className="col-12 bg-light p-4 p-sm-5 rounded text-center">
                            <div className="row justify-content-between align-items-center">
                               
                                    <h4>Subscribe today!</h4>
                                    <p>Stay up to date with our latest news and product</p>
                                
                                <form>
                                    <div className="input-group">
                                        <input className="form-control bg-white border-1" type="email" name="Newsletter" placeholder="Enter your email address"/>
                                        <button type="button" className="btn btn-primary mb-0">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                    <div className="mt-auto pb-3 text-center">
                      
                        <p className="text-body mb-2 fw-bold">Ludhiana Bhamia (HQ)</p>
                        <address className="mb-0">750 baba than singh chownnk, Ludhiana, NY, 14845</address>
                        <p className="mb-2">Call: <a href="#" className="text-body">123-456-8780</a> </p>
                        <a href="#" className="text-body d-block">example@gmail.com</a>
                       
                        <ul className="list-unstyled list-group-inline display-9 mt-4">
                            <li> <a className="btn btn-round me-2 bg-facebook" href="#"><i className="fab fa-facebook-square"></i></a> </li>
                            <li> <a className="btn btn-round me-2 bg-instagram-gradient" href="#"><i className="fab fa-instagram-square"></i></a> </li>
                            <li> <a className="btn btn-round me-2 bg-twitter" href="#"><i className="fab fa-twitter-square"></i></a> </li>
                            <li> <a className="btn btn-round bg-linkedin" href="#"><i className="fab fa-linkedin"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
           

           
            <header className="navbar-light navbar-sticky header-static">
                <div className="navbar-top small bg-light d-none d-md-block">
                    <div className="container">
                        <div className="d-md-flex justify-content-between align-items-center my-2">
                            
                            <div className="d-flex align-items-center justify-content-center">
                               
                                <ul className="nav justify-content-center justify-content-md-start">
                                    <li className="nav-item me-3">
                                        <a className="navbar-link" href="#"><i className="far fa-envelope me-2"></i>example@email.com</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="navbar-link" href="#"><i className="fas fa-headset me-2"></i>123-456-789</a>
                                    </li>
                                </ul>
                            </div>

                            
                            <div className="d-flex align-items-center justify-content-center">
                               
                                <ul className="list-unstyled d-flex">
                                    <li> <a className="px-2" href="#"><i className="fab fa-facebook-square"></i></a> </li>
                                    <li> <a className="px-2" href="#"><i className="fab fa-instagram-square"></i></a> </li>
                                    <li> <a className="px-2" href="#"><i className="fab fa-twitter-square"></i></a> </li>
                                    <li> <a className="ps-2" href="#"><i className="fab fa-linkedin"></i></a> </li>
                                </ul>
                               
                                <ul className="nav ms-3">
                        <li className="nav-item">
                        <a href="#" className="nav-link pe-0"><i className="far fa-user me-2"></i>Login</a>
                        </li>
                    </ul>
                            </div>
                        </div>
                    </div>
                </div>

              
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                     
                        <a className="navbar-brand" href="#">
                            <img className="navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
                        </a>
                        

                      
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="text-dark h6">Menu</span> 
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll ms-auto">

                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link navbar-primary-soft-hover dropdown-toggle active" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                    <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                        <li> <a className="dropdown-item active" href="#">Home default</a></li>
                                        <li> <a className="dropdown-item" href="#">Home two</a></li>
                                        <li> <a className="dropdown-item" href="#">Home three</a></li>
                                    </ul>
                                </li>

                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                        <li> <a className="dropdown-item" href="#">About</a></li>
                                        <li> <a className="dropdown-item" href="#">Service</a></li>
                                        <li> <a className="dropdown-item" href="#">Contact</a></li>
                                        <li> <a className="dropdown-item" href="#">Error 404</a></li>
                                        <li> <a className="dropdown-item" href="#">Maintenance</a></li>
                                        <li> <a className="dropdown-item" href="#">Signup</a></li>
                                        <li> <a className="dropdown-item" href="#">Signin</a></li>
                                        <li> <a className="dropdown-item" href="#">Faq</a></li>
                                    </ul>
                                </li>

                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="listings" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listings</a>
                                    <ul className="dropdown-menu" aria-labelledby="listings">
                                        <li> <a className="dropdown-item" href="#">Property list</a></li>
                                        <li> <a className="dropdown-item" href="#">Property grid</a></li>

                                        <li className="dropdown-submenu dropend"> 
                                            <a className="dropdown-item dropdown-toggle" href="#">Property detail</a>
                                            <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                <li> <a className="dropdown-item" href="#">Style 1</a> </li>
                                                <li> <a className="dropdown-item" href="#">Style 2</a> </li>
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu dropend"> 
                                            <a className="dropdown-item dropdown-toggle" href="#">Agent</a>
                                            <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                <li> <a className="dropdown-item" href="#">Agent list</a> </li>
                                                <li> <a className="dropdown-item" href="#">Agent detail</a> </li>
                                            </ul>
                                        </li>

                                        <li className="dropdown-submenu dropend"> 
                                            <a className="dropdown-item dropdown-toggle" href="#">Agency</a>
                                            <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                <li> <a className="dropdown-item" href="#">Agency list</a> </li>
                                                <li> <a className="dropdown-item" href="#">Agency detail</a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dashboard" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dashboard</a>
                                    <div className="dropdown-menu pb-3 pb-lg-0 rounded dropdown-menu-sm-end" data-bs-popper="none" aria-labelledby="dashboard">
                                        
                                        <div className="d-none d-sm-flex p-4 bg-light align-items-center mb-3">
                                            <span className="me-3 mb-0 h2"><i className="far fa-chart-bar fa-fw"></i></span>
                                            <div>
                                                <h5 className="mb-0">Analyze full dashboard</h5>
                                                <p className="mb-0">Points afraid but may end laughter raptures</p>
                                            </div>
                                        </div>

                                        <div className="d-block d-sm-flex">
                                            <ul className="list-unstyled w-100 pe-0 pe-lg-5">
                                                <li> <a className="dropdown-item" href="#">Dashboard</a></li>
                                                <li> <a className="dropdown-item" href="#">Add new property</a></li>
                                                <li> <a className="dropdown-item" href="#">My property</a></li>
                                                <li> <a className="dropdown-item" href="#">My favorites</a></li>
                                                <li> <a className="dropdown-item" href="#">Review</a></li>
                                            </ul>
                                            <ul className="list-unstyled w-100 pe-0 pe-lg-5">
                                                <li> <a className="dropdown-item" href="#">My profile</a></li>
                                                <li> <a className="dropdown-item" href="#">My package</a></li>
                                                <li> <a className="dropdown-item" href="#">Message</a></li>
                                                <li> <a className="dropdown-item" href="agency-#">Agent list</a></li>
                                                <li> <a className="dropdown-item" href="#">Add new agent</a></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="row d-none d-lg-flex align-items-center justify-content-center text-center">
                                            <div className="col-md-11 rounded position-relative mt-2">
                                                <div className="card mb-4 overflow-hidden">
                                                   
                                                    <img className="card-img" src="assets/images/bg/bg-05.jpg" alt="Card image" />
                                                    
                                                    <div className="bg-overlay"></div>
                                                    <div className="card-img-overlay bg-overlay-content"> 
                                                        {/* Category */}
                                                        <div className="w-100 h-100 d-flex flex-column">
                                                            <div className="my-auto">
                                                               
                                                                <h3 className="card-title text-white">Do you want to join our team?</h3>
                                                                
                                                                <a href="#" className="btn btn-primary mb-0">Join us</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                        
                                
                                <li className="nav-item">  <a className="nav-link" href="#">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div className="nav-item dropdown nav-search ms-1 ms-lg-3">
                            <a className="nav-link" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-search fs-4"> </i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
                                <form className="input-group">
                                    <input className="form-control border-primary" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-sm btn-primary m-0" type="submit">Search</button>
                                </form>
                            </div>
                        </div>

                        
                        <div className="nav-item ms-1 ms-lg-3">
                            <a className="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                                <i className="bi bi-text-right display-8 rtl-flip" data-bs-target="#offcanvasMenu"> </i>
                            </a>
                        </div>
                    </div>
                </nav>
                
            </header>
          

            
            <main>
            
            <section className="p-0 hero-2">
                {/* Content and search START */}
                <div className="container hero-2-heading mt-5 mt-lg-0">
                   
                    <div className="row">
                        <div className="col-lg-7 col-xxl-6 mb-xxl-5 mt-0 mt-lg-5">
                           
                            <h1 className="display-5 lh-1">Finding the Dream</h1>
                            <h2 className="display-6 mb-4">for 
                                <span className="text-primary position-relative">Every Owner
                                    
                                    <span className="position-absolute bottom-0 start-0 mb-n2 d-none d-sm-flex">
                                        <svg className="mt-auto fill-primary" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="18px">
                                        <path fillRule="evenodd"
                                        d="M296.739,0.489 C285.945,0.010 273.672,0.221 262.755,0.107 C256.950,0.032 252.201,0.354 246.332,0.729 C238.954,1.208 231.928,1.099 225.028,1.250 C197.012,1.897 170.246,3.016 143.807,4.231 C119.791,5.317 95.259,7.782 71.692,7.663 C49.937,7.511 26.368,7.874 5.021,11.353 C-4.226,12.959 0.483,19.213 9.619,17.825 C30.551,14.704 54.275,14.772 75.655,14.719 C86.428,14.692 97.099,13.610 107.882,12.944 C120.512,12.166 133.165,11.461 145.838,10.724 C170.676,9.284 195.552,7.858 220.991,6.529 C226.702,6.233 232.430,6.096 238.215,5.768 C243.781,5.445 249.180,4.506 254.944,4.164 C260.282,3.845 265.441,3.911 270.998,3.496 C277.816,2.974 284.741,1.990 292.463,1.753 C295.632,1.604 300.215,0.616 296.739,0.489 L296.739,0.489 Z"/>
                                        </svg>
                                    </span>
                                    
                                </span>
                            </h2>
                            
                            <p className="mb-4 mb-lg-0">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child.</p>
                        </div>
                    </div>

                    {/* Svg star decoration */}
                    <figure className="d-none d-lg-block position-absolute top-0 start-50 translate-middle-x ms-5 mt-n5">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="42px" height="42px">
                            <path fillRule="evenodd"  fill="rgb(247, 202, 3)"
                            d="M20.999,-0.000 L28.424,13.575 L41.999,21.000 L28.424,28.424 L20.999,41.999 L13.575,28.424 L-0.001,21.000 L13.575,13.575 L20.999,-0.000 Z"/>
                        </svg>
                    </figure>
                    {/* Svg star decoration */}
                    <figure className="d-none d-xl-block position-absolute top-0 start-0 ms-n9">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px">
                            <path fillRule="evenodd"  fill="rgb(3, 247, 101)"
                            d="M15.752,-0.000 L21.321,10.183 L31.505,15.753 L21.321,21.322 L15.752,31.505 L10.183,21.322 L-0.000,15.753 L10.183,10.183 L15.752,-0.000 Z"/>
                        </svg>
                    </figure>
                    {/* Svg star decoration */}
                    <figure className="d-none d-xl-block position-absolute top-50 start-50 translate-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="33px" height="33px">
                            <path fillRule="evenodd"  fill="rgb(247, 55, 3)"
                            d="M16.128,-0.000 L21.830,10.426 L32.255,16.128 L21.830,21.830 L16.128,32.256 L10.425,21.830 L-0.001,16.128 L10.425,10.426 L16.128,-0.000 Z"/>
                        </svg>
                    </figure>

                    {/* Search bar START */}
                    <div className="row hero-2-searchbar px-5 px-xl-0 my-0 my-lg-5">
                        <div className="col-xl-10">
                            <form className="row">
                                {/* Buy rent and sale button */}
                                <ul className="nav nav-pills nav-pills-white" id="pills-tab" role="tablist">
                                    <li className="nav-item me-3" role="presentation">
                                        <button className="nav-link btn-sm shadow active" id="pills-buy-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-buy" aria-selected="true">Buy</button>
                                    </li>
                                    <li className="nav-item me-3" role="presentation">
                                        <button className="nav-link btn-sm shadow" id="pills-rent-tab" data-bs-toggle="pill" data-bs-target="#pills-rent" type="button" role="tab" aria-controls="pills-rent" aria-selected="false">Rent</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link btn-sm shadow" id="pills-sale-tab" data-bs-toggle="pill" data-bs-target="#pills-sale" type="button" role="tab" aria-controls="pills-sale" aria-selected="false">Sale</button>
                                    </li>
                                </ul>

                                <div className="tab-content pt-0" id="pills-tabContent">
                                    {/* Buy tab content START */}
                                    <div className="tab-pane fade show active" id="pills-buy" role="tabpanel" aria-labelledby="pills-buy-tab">
                                        {/* Search bar */}
                                        <div className="col-lg-11 px-0 pt-3 pt-lg-0">
                                            <div className="bg-white position-relative shadow rounded py-4 px-3 px-lg-5">
                                                <div className="row align-items-center g-3">
                                                    <div className="col-md-10">
                                                        <div className="row">
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Type</option>
                                                                    <option>Rent</option>
                                                                    <option>Buy</option>
                                                                    <option>Sale</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Category</option>
                                                                    <option>Aparement</option>
                                                                    <option>Land</option>
                                                                    <option>Houses</option>
                                                                    <option>Villas</option>
                                                                    <option>Retails</option>
                                                                    <option>Shop</option>
                                                                    <option>Office</option>
                                                                    <option>Office</option>
                                                                    <option>Office</option>
                                                                    <option>Office</option>
                                                                    <option>Office</option>
                                                                    <option>Office</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Location</option>
                                                                    <option>New york</option>
                                                                    <option>California</option>
                                                                    <option>Mumbai</option>
                                                                    <option>Delhi</option>
                                                                    <option>Gujarat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-2">
                                                        <div className="row g-2 g-md-4">
                                                            <div className="col-6 d-grid d-md-block">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined"/>
                                                                <label className="btn btn-sm btn-outline-primary  mx-xl-2 mx-xxl-3" for="btn-check-outlined" data-bs-toggle="collapse" data-bs-target="#collapseBuy" aria-controls="collapseBuy">
                                                                    <i className="bi fa-fw bi-list fs-6" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="top" title="" data-bs-original-title="Advance filter"></i>
                                                                </label>
                                                            </div>
                                                            <div className="col-6 d-grid d-md-block">
                                                                <button className="btn btn-sm btn-primary" type="button"><i className="bi fa-fw fs-fw bi-search fs-6"> </i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                            
                                                <div className="row">
                                                    {/* Colleps body */}
                                                    <div className="collapse advance-search-content mt-n2" id="collapseBuy">
                                                        <div className="row mt-4 px-0 px-sm-4">
                                                            {/* Bedroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bed me-2"></i>Bedroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bedroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bedroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bedroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bedroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bedroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bedroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bedroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bedroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bedroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bedroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Bathroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bath me-2"></i>Bathroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bathroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bathroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bathroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bathroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bathroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bathroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bathroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bathroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="buy-bathroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="buy-bathroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Area item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-street-view me-2"></i>Area:</h6>
                                                                <select className="form-select form-select-sm mb-4 js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Area</option>
                                                                    <option>New York</option>
                                                                    <option>Los Angeles</option>
                                                                    <option>Phoenix</option>
                                                                </select>
                                                            </div>
                                                            {/* City item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-city me-2"></i>City:</h6>
                                                                <select className="form-select  form-select-sm js-choice mb-4" aria-label="Default select">
                                                                    <option value="">Ciry</option>
                                                                    <option>Manhattan</option>
                                                                    <option>Queens</option>
                                                                    <option>West side</option>
                                                                </select>
                                                            </div>
                                                            {/* Price range */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base mb-0"><i className="fas fa-dollar-sign me-2"></i>Price range</h6>
                                                                <div className="position-relative mt-2">
                                                                    <div className="noui-wrapper m-b-50 p-l-r">
                                                                        <div className="d-flex justify-content-between">
                                                                            <input type="text" className="text-body input-with-range-min"/>
                                                                            <input type="text" className="text-body input-with-range-max"/>
                                                                        </div>
                                                                        <div className="noui-slider-range m-b-20 mt-2" data-range-min='2000' data-range-max='50000' data-range-selected-min='3500' data-range-selected-max='30000'></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                            
                                                            {/* Amenities */}
                                                            <div className="row mt-4">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-sliders-h me-2"></i>Amenities</h6>
                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Clinic */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyClinic"/>
                                                                            <label className="form-check-label" for="buyClinic">
                                                                                Clinic
                                                                            </label>
                                                                    </div>
                                                                    {/* Internet */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyInternet"/>
                                                                            <label className="form-check-label" for="buyInternet">
                                                                                Internet
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Park */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyPark"/>
                                                                            <label className="form-check-label" for="buyPark">
                                                                                Park
                                                                            </label>
                                                                    </div>
                                                                    {/* School */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buySchool"/>
                                                                            <label className="form-check-label" for="buySchool">
                                                                                School
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Supermarket */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buySupermarket"/>
                                                                            <label className="form-check-label" for="buySupermarket">
                                                                                Supermarket
                                                                            </label>
                                                                    </div>
                                                                    {/* Swiming pool */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyPool"/>
                                                                            <label className="form-check-label" for="buyPool">
                                                                                Swiming pool
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* More search item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Transportation hub */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyHub"/>
                                                                            <label className="form-check-label" for="buyHub">
                                                                                Transportation hub
                                                                            </label>
                                                                    </div>
                                                                    {/* Air Conditioning */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="buyAc"/>
                                                                            <label className="form-check-label" for="buyAc">
                                                                                Air Conditioning
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div> 
                                        </div>
                                        </div>
                                    </div>
                                    {/* Buy tab content END */}

                                    {/* Rent tab content START */}
                                    <div className="tab-pane fade" id="pills-rent" role="tabpanel" aria-labelledby="pills-rent-tab">
                                        {/* Search bar */}
                                        <div className="col-lg-11 px-0 pt-3 pt-lg-0">
                                            <div className="bg-white position-relative shadow rounded py-4 px-3 px-lg-5">
                                                <div className="row align-items-center g-3">
                                                    <div className="col-md-10">
                                                        <div className="row">
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Type</option>
                                                                    <option>Rent</option>
                                                                    <option>Buy</option>
                                                                    <option>Sale</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Category</option>
                                                                    <option>Aparement</option>
                                                                    <option>Land</option>
                                                                    <option>Houses</option>
                                                                    <option>Villas</option>
                                                                    <option>Retails</option>
                                                                    <option>Shop</option>
                                                                    <option>Office</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Location</option>
                                                                    <option>New york</option>
                                                                    <option>California</option>
                                                                    <option>Mumbai</option>
                                                                    <option>Delhi</option>
                                                                    <option>Gujarat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-2">
                                                        <div className="row g-2 g-md-4">
                                                            <div className="col-6 d-grid d-md-block">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined-rent"/>
                                                                <label className="btn btn-sm btn-outline-primary  mx-xl-2 mx-xxl-3" for="btn-check-outlined-rent" data-bs-toggle="collapse" data-bs-target="#collapseRent" aria-controls="collapseRent">
                                                                    <i className="bi fa-fw bi-list fs-6" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="top" title="" data-bs-original-title="Advance filter"></i>
                                                                </label>
                                                            </div>
                                                            <div className="col-6 d-grid d-md-block">
                                                                <button className="btn btn-sm btn-primary" type="button"><i className="bi fa-fw fs-fw bi-search fs-6"> </i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                            
                                                <div className="row">
                                                    {/* Colleps body */}
                                                    <div className="collapse advance-search-content mt-n2" id="collapseRent">
                                                        <div className="row mt-4 px-0 px-sm-4">
                                                            {/* Bedroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bed me-2"></i>Bedroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bedroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bedroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bedroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bedroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bedroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bedroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bedroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bedroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bedroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bedroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Bathroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bath me-2"></i>Bathroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bathroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bathroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bathroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bathroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bathroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bathroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bathroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bathroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="rent-bathroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="rent-bathroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Area item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-street-view me-2"></i>Area:</h6>
                                                                <select className="form-select form-select-sm js-choice mb-4" aria-label=".form-select-sm">
                                                                    <option value="">Area</option>
                                                                    <option>New York</option>
                                                                    <option>Los Angeles</option>
                                                                    <option>Phoenix</option>
                                                                </select>
                                                            </div>
                                                            {/* City item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-city me-2"></i>City:</h6>
                                                                <select className="form-select  form-select-sm js-choice mb-4" aria-label="Default select">
                                                                    <option value="">Ciry</option>
                                                                    <option>Manhattan</option>
                                                                    <option>Queens</option>
                                                                    <option>West side</option>
                                                                </select>
                                                            </div>
                                                            {/* Price range */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base mb-0"><i className="fas fa-dollar-sign me-2"></i>Price range</h6>
                                                                <div className="position-relative mt-2">
                                                                    <div className="noui-wrapper m-b-50 p-l-r">
                                                                        <div className="d-flex justify-content-between">
                                                                            <input type="text" className="text-body input-with-range-min"/>
                                                                            <input type="text" className="text-body input-with-range-max"/>
                                                                        </div>
                                                                        <div className="noui-slider-range m-b-20 mt-2" data-range-min='3000' data-range-max='40000' data-range-selected-min='5000' data-range-selected-max='7500'></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                            
                                                            {/* Amenities */}
                                                            <div className="row mt-4">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-sliders-h me-2"></i>Amenities</h6>
                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Clinic */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentClinic"/>
                                                                            <label className="form-check-label" for="rentClinic">
                                                                                Clinic
                                                                            </label>
                                                                    </div>
                                                                    {/* Internet */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentInternet"/>
                                                                            <label className="form-check-label" for="rentInternet">
                                                                                Internet
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Park */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentPark"/>
                                                                            <label className="form-check-label" for="rentPark">
                                                                                Park
                                                                            </label>
                                                                    </div>
                                                                    {/* School */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentSchool"/>
                                                                            <label className="form-check-label" for="rentSchool">
                                                                                School
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Supermarket */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentSupermarket"/>
                                                                            <label className="form-check-label" for="rentSupermarket">
                                                                                Supermarket
                                                                            </label>
                                                                    </div>
                                                                    {/* Swiming pool */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentPool"/>
                                                                            <label className="form-check-label" for="rentPool">
                                                                                Swiming pool
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* More search item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Transportation hub */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentHub"/>
                                                                            <label className="form-check-label" for="rentHub">
                                                                                Transportation hub
                                                                            </label>
                                                                    </div>
                                                                    {/* Air Conditioning */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rentAc"/>
                                                                            <label className="form-check-label" for="rentAc">
                                                                                Air Conditioning
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div> 
                                        </div>
                                        </div>
                                    </div>
                                    {/* Rent tab content END */}

                                    {/* Sale tab content START */}
                                    <div className="tab-pane fade" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab">
                                        {/* Search bar */}
                                        <div className="col-lg-11 px-0 pt-3 pt-lg-0">
                                            <div className="bg-white position-relative shadow rounded py-4 px-3 px-lg-5">
                                                <div className="row align-items-center g-3">
                                                    <div className="col-md-10">
                                                        <div className="row">
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Type</option>
                                                                    <option>Rent</option>
                                                                    <option>Buy</option>
                                                                    <option>Sale</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Category</option>
                                                                    <option>Aparement</option>
                                                                    <option>Land</option>
                                                                    <option>Houses</option>
                                                                    <option>Villas</option>
                                                                    <option>Retails</option>
                                                                    <option>Shop</option>
                                                                    <option>Office</option>
                                                                </select>
                                                            </div>
                                                            {/* Search item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Location</option>
                                                                    <option>New york</option>
                                                                    <option>California</option>
                                                                    <option>Mumbai</option>
                                                                    <option>Delhi</option>
                                                                    <option>Gujarat</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-2">
                                                        <div className="row g-2 g-md-4">
                                                            <div className="col-6 d-grid d-md-block">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined-sale"/>
                                                                <label className="btn btn-sm btn-outline-primary  mx-xl-2 mx-xxl-3" for="btn-check-outlined-sale" data-bs-toggle="collapse" data-bs-target="#collapseSale" aria-controls="collapseSale">
                                                                    <i className="bi fa-fw bi-list fs-6" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="top" title="" data-bs-original-title="Advance filter"></i>
                                                                </label>
                                                            </div>
                                                            <div className="col-6 d-grid d-md-block">
                                                                <button className="btn btn-sm btn-primary" type="button"><i className="bi fa-fw fs-fw bi-search fs-6"> </i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                            
                                                <div className="row">
                                                    {/* Colleps body */}
                                                    <div className="collapse advance-search-content mt-n2" id="collapseSale">
                                                        <div className="row mt-4 px-0 px-sm-4">
                                                            {/* Bedroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bed me-2"></i>Bedroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bedroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bedroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bedroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bedroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bedroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bedroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bedroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bedroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bedroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bedroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Bathroom item */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-bath me-2"></i>Bathroom:</h6>
                                                                <ul className="list-inline mb-4 g-3">
                                                                    {/* 1 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bathroom-1"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bathroom-1">1</label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bathroom-2"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bathroom-2">2</label>
                                                                    </li>
                                                                    {/* 3 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bathroom-3"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bathroom-3">3</label>
                                                                    </li>
                                                                    {/* 4 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bathroom-4"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bathroom-4">4</label>
                                                                    </li>
                                                                    {/* 5 */}
                                                                    <li className="list-inline-item mb-2">
                                                                        <input type="checkbox" className="btn-check" id="sale-bathroom-5"/>
                                                                        <label className="btn btn-sm btn-light btn-primary-soft-check" for="sale-bathroom-5">5+</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* Area item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-street-view me-2"></i>Area:</h6>
                                                                <select className="form-select form-select-sm mb-4 js-choice" aria-label=".form-select-sm">
                                                                    <option value="">Area</option>
                                                                    <option>New York</option>
                                                                    <option>Los Angeles</option>
                                                                    <option>Phoenix</option>
                                                                </select>
                                                            </div>
                                                            {/* City item */}
                                                            <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-city me-2"></i>City:</h6>
                                                                <select className="form-select  form-select-sm mb-4 js-choice" aria-label="Default select">
                                                                    <option value="">City</option>
                                                                    <option>Manhattan</option>
                                                                    <option>Queens</option>
                                                                    <option>West side</option>
                                                                </select>
                                                            </div>
                                                            {/* Price range */}
                                                            <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                                                <h6 className="font-base mb-0"><i className="fas fa-dollar-sign me-2"></i>Price range</h6>
                                                                <div className="position-relative mt-2">
                                                                    <div className="noui-wrapper m-b-50 p-l-r">
                                                                        <div className="d-flex justify-content-between">
                                                                            <input type="text" className="text-body input-with-range-min"/>
                                                                            <input type="text" className="text-body input-with-range-max"/>
                                                                        </div>
                                                                        <div className="noui-slider-range m-b-20 mt-2" data-range-min='10000' data-range-max='20000' data-range-selected-min='11000' data-range-selected-max='17000'></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                            
                                                            {/* Amenities */}
                                                            <div className="row mt-4">
                                                                <h6 className="font-base"><i className="fas fa-fw fa-sliders-h me-2"></i>Amenities</h6>
                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Clinic */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleClinic"/>
                                                                            <label className="form-check-label" for="saleClinic">
                                                                                Clinic
                                                                            </label>
                                                                    </div>
                                                                    {/* Internet */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleInternet"/>
                                                                            <label className="form-check-label" for="saleInternet">
                                                                                Internet
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Park */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="salePark"/>
                                                                            <label className="form-check-label" for="salePark">
                                                                                Park
                                                                            </label>
                                                                    </div>
                                                                    {/* School */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleSchool"/>
                                                                            <label className="form-check-label" for="saleSchool">
                                                                                School
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* Amenities item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Supermarket */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleSupermarket"/>
                                                                            <label className="form-check-label" for="saleSupermarket">
                                                                                Supermarket
                                                                            </label>
                                                                    </div>
                                                                    {/* Swiming pool */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="salePool"/>
                                                                            <label className="form-check-label" for="salePool">
                                                                                Swiming pool
                                                                            </label>
                                                                    </div>
                                                                </div>

                                                                {/* More search item */}
                                                                <div className="col-sm-6 col-md-3">
                                                                    {/* Transportation hub */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleHub"/>
                                                                            <label className="form-check-label" for="saleHub">
                                                                                Transportation hub
                                                                            </label>
                                                                    </div>
                                                                    {/* Air Conditioning */}
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="saleAc"/>
                                                                            <label className="form-check-label" for="saleAc">
                                                                                Air Conditioning
                                                                            </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div> 
                                        </div>
                                        </div>
                                    </div>
                                    {/* Sale tab content END */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                
                
                <div className="container-fluid p-0">
                    <div className="row d-flex justify-content-end">
                        
                        <div className="col-5 hero-2-image-left d-none d-xxl-block">
                            <img src="assets/images/bg/bg-03.jpg" className="rounded" alt="" />
                        </div>
                        
                        <div className="col-5 hero-2-image-right d-none d-lg-block">
                            <img src="assets/images/bg/bg-04.jpg" className="rounded" alt="" />
                        </div>
                    </div>
                </div>
                

                
                <div className="container position-relative z-index-n1 mt-0 mt-lg-5 mt-xl-0">
                    <div className="row justify-content-xl-end">
                        <div className="col-xl-7">
                            <h4 className="mb-3 font-base">Our Partners</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    
                                    <div className="tiny-slider arrow-round">
                                        <div className="tiny-slider-inner" data-arrow="false" data-dots="false" data-gutter="80" data-items-lg="4" data-items-sm="2" data-autoplay="3800">
                                            
                                            <div className="item"> <img className="grayscale" src="assets/images/client/coca-cola.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/android.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/envato.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/microsoft.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/netflix.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/google.svg" alt="" /> </div>
                                            <div className="item"> <img className="grayscale" src="assets/images/client/linkedin.svg" alt="" /> </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            
            <section>
                <div className="container">
                    <div className="row">
                        
                        <div className="tiny-slider dots-creative arrow-round">
                            <div className="tiny-slider-inner p-1" 
                            data-autoplay="true"
                            data-edge="10"
                            data-arrow="false"
                            data-dots="false"
                            data-items="5"
                            data-items-xl="4"
                            data-items-lg="3"
                            data-items-md="2"
                            data-items-xs="1">
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-building"></i></span>
                                        <h5 className="mb-0">Apartment</h5>
                                        <a href="#">15 listings</a>
                                    </div>
                                </div>
                                
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-store"></i></span>
                                        <h5 className="mb-0">Commercial</h5>
                                        <a href="#">222 listings</a>
                                    </div>
                                </div>
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-laptop-house"></i></span>
                                        <h5 className="mb-0">Office</h5>
                                        <a href="#">56 listings</a>
                                    </div>
                                </div>
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-person-booth"></i></span>
                                        <h5 className="mb-0">Room</h5>
                                        <a href="#">122 listings</a>
                                    </div>
                                </div>
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-parking"></i></span>
                                        <h5 className="mb-0">Parking lot</h5>
                                        <a href="#">18 listings</a>
                                    </div>
                                </div>
                                
                                <div className="col-md-3">
                                    <div className="text-center justify-content-center bg-white border rounded p-4 text-primary-hover">
                                        <span className="text-primary mb-0 h2"><i className="fas fa-fw fa-building"></i></span>
                                        <h5 className="mb-0">Rental</h5>
                                        <a href="#">86 listings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-light position-relative">
                
                <figure className="d-none d-xxl-block position-absolute top-0 start-0 ms-n7">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="350px" height="350px">
                    <path className="fill-light opacity-8" fillRule="evenodd" d="M150.000,-0.000 C232.843,-0.000 300.000,67.157 300.000,150.000 C300.000,232.842 232.843,300.000 150.000,300.000 C67.157,300.000 0.000,232.842 0.000,150.000 C0.000,67.157 67.157,-0.000 150.000,-0.000 Z"></path>
                    </svg>
                </figure>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-6 d-none d-sm-block position-relative">
                                   
                                    <img src="assets/images/about/07.jpg" className="rounded" alt="" />
                                    
                                    <figure className="position-absolute bottom-0 end-0 mb-5 me-n5">
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" width="146px" height="163px">
                                        <path fillRule="evenodd" d="M140.660,78.206 C133.822,78.206 133.833,67.596 140.660,67.596 C147.499,67.596 147.488,78.206 140.660,78.206 ZM129.938,52.549 C122.387,52.549 122.400,40.835 129.938,40.835 C137.489,40.835 137.476,52.549 129.938,52.549 ZM123.981,92.268 C111.301,92.268 111.322,72.596 123.981,72.596 C136.661,72.596 136.640,92.268 123.981,92.268 ZM103.728,61.232 C100.434,61.232 97.510,59.855 95.131,57.671 C92.744,55.480 91.711,52.219 91.570,49.075 C91.434,46.046 93.022,42.587 95.131,40.478 C97.336,38.274 100.610,36.917 103.728,36.917 C107.022,36.917 109.946,38.295 112.325,40.478 C114.712,42.669 115.745,45.931 115.885,49.075 C116.021,52.103 114.433,55.562 112.325,57.671 C110.120,59.876 106.845,61.232 103.728,61.232 ZM107.302,27.470 C96.759,27.470 96.776,11.113 107.302,11.113 C117.844,11.113 117.827,27.470 107.302,27.470 ZM87.444,35.544 C85.562,37.570 83.333,39.002 80.757,39.840 C78.281,41.141 75.613,41.737 72.752,41.629 C67.122,41.629 62.124,39.275 58.059,35.544 C53.979,31.798 52.214,26.225 51.973,20.851 C51.865,17.991 52.462,15.322 53.762,12.846 C54.601,10.270 56.033,8.041 58.059,6.159 C59.941,4.133 62.170,2.701 64.746,1.863 C67.222,0.562 69.891,-0.034 72.752,0.074 C78.382,0.074 83.379,2.427 87.444,6.159 C91.524,9.905 93.290,15.478 93.530,20.851 C93.638,23.712 93.042,26.381 91.741,28.857 C90.903,31.433 89.471,33.662 87.444,35.544 ZM52.498,70.320 C37.396,70.320 37.421,46.890 52.498,46.890 C67.600,46.890 67.575,70.320 52.498,70.320 ZM34.628,52.549 C27.076,52.549 27.089,40.835 34.628,40.835 C42.178,40.835 42.166,52.549 34.628,52.549 ZM20.331,68.455 C13.777,68.455 13.788,58.287 20.331,58.287 C26.885,58.287 26.874,68.455 20.331,68.455 ZM13.183,122.065 C6.629,122.065 6.640,111.897 13.183,111.897 C19.736,111.897 19.726,122.065 13.183,122.065 ZM6.034,90.341 C-1.089,90.341 -1.077,79.289 6.034,79.289 C13.158,79.289 13.146,90.341 6.034,90.341 ZM29.862,74.340 C41.829,74.340 41.810,92.907 29.862,92.907 C17.894,92.907 17.914,74.340 29.862,74.340 ZM33.436,127.028 C41.984,127.028 41.970,140.291 33.436,140.291 C24.888,140.291 24.902,127.028 33.436,127.028 ZM38.202,93.487 C51.594,93.487 51.572,114.265 38.202,114.265 C24.809,114.265 24.832,93.487 38.202,93.487 ZM62.029,110.915 C64.964,110.915 67.569,112.142 69.688,114.087 C71.815,116.040 72.735,118.945 72.861,121.746 C72.982,124.444 71.567,127.526 69.688,129.405 C67.724,131.369 64.807,132.577 62.029,132.577 C59.095,132.577 56.490,131.350 54.370,129.405 C52.244,127.452 51.323,124.547 51.198,121.746 C51.077,119.048 52.492,115.966 54.370,114.087 C56.334,112.123 59.252,110.915 62.029,110.915 ZM60.838,145.009 C69.244,145.009 69.230,158.050 60.838,158.050 C52.432,158.050 52.446,145.009 60.838,145.009 ZM76.326,149.885 C84.589,149.885 84.576,162.705 76.326,162.705 C68.062,162.705 68.076,149.885 76.326,149.885 ZM82.283,129.325 C89.406,129.325 89.395,140.377 82.283,140.377 C75.159,140.377 75.171,129.325 82.283,129.325 ZM85.406,95.779 C85.290,95.976 85.173,96.173 85.057,96.370 C81.704,102.026 73.330,102.026 69.978,96.370 C69.861,96.173 69.745,95.976 69.628,95.779 C66.088,89.805 70.624,82.033 77.517,82.033 C84.410,82.033 88.947,89.805 85.406,95.779 ZM76.256,64.959 C76.447,62.954 77.006,61.341 78.370,59.855 C79.671,58.438 81.607,57.824 83.474,57.741 C85.272,57.660 87.327,58.603 88.579,59.855 C90.013,61.289 90.506,63.003 90.693,64.959 C90.718,65.224 90.744,65.488 90.769,65.753 C91.158,69.821 87.115,72.885 83.474,73.048 C81.657,73.129 79.581,72.176 78.316,70.911 C77.114,69.710 76.012,67.509 76.179,65.753 C76.205,65.488 76.230,65.224 76.256,64.959 ZM91.814,149.049 C98.082,149.049 98.072,158.775 91.814,158.775 C85.545,158.775 85.555,149.049 91.814,149.049 ZM97.771,118.185 C103.897,118.185 103.887,127.690 97.771,127.690 C91.644,127.690 91.655,118.185 97.771,118.185 ZM110.876,131.265 C114.222,131.265 116.699,134.000 116.844,137.234 C116.989,140.456 113.998,143.202 110.876,143.202 C107.530,143.202 105.052,140.467 104.908,137.234 C104.763,134.010 107.754,131.265 110.876,131.265 ZM106.110,104.661 C97.420,104.661 97.434,91.178 106.110,91.178 C114.801,91.178 114.787,104.661 106.110,104.661 ZM112.007,112.216 C112.007,109.940 112.959,107.919 114.467,106.276 C116.598,103.955 119.723,103.578 122.640,104.116 C122.766,104.139 122.892,104.163 123.018,104.186 C124.887,104.530 127.122,106.360 127.995,108.013 C128.686,109.321 129.065,110.737 129.132,112.216 C129.213,114.039 128.429,115.857 127.344,117.261 C126.319,118.587 124.745,119.927 123.018,120.245 C122.892,120.268 122.766,120.292 122.640,120.315 C119.618,120.872 116.725,120.412 114.467,118.155 C112.944,116.632 112.007,114.369 112.007,112.216 ZM138.277,110.816 C144.689,110.816 144.678,120.763 138.277,120.763 C131.866,120.763 131.877,110.816 138.277,110.816 Z"/>
                                        </svg>
                                    </figure>
                                </div>
                                <div className="col-sm-6">
                                   
                                    <h2>Featured space for you</h2>
                                   
                                    <img src="assets/images/about/06.jpg" className="rounded" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            
                            <p className="lead mt-3">For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own.</p>
                            
                            <div><a href="#" className="btn btn-orange mb-4">View detail</a></div>
                            
                            <div className="bg-white p-4 rounded d-inline-block">
                                <h5 className="mb-3">Start conversation</h5>
                                <div className="d-block d-sm-flex align-items-center">
                                    
                                    <ul className="avatar-group mb-2 mb-sm-0">
                                        <li className="avatar avatar-md">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/1.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-md">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/2.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-md">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/3.jpg" alt="avatar"/>
                                        </li>
                                    </ul>
                                    
                                    <div className="ms-0 ms-sm-3 mb-3">
                                        <span>We will be back online</span>
                                        <p className="h6 font base"><i className="far fa-fw fa-clock text-danger me-2"></i>Later today</p>
                                    </div>
                                </div>
                                
                                <a href="#" className="btn btn-sm btn-outline-primary">Send us message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="pt-5">
                <div className="container">
                   
                    <div className="text-center">
                        <h2>Latest Properties</h2>
                        <p>A pleasure exertion if believed provided to all led out world this music while asked</p>
                    </div>

                    <div className="row mt-4">
                        
                        <div className="col-sm-6 col-lg-4">
                            <div className="card mb-4">
                                <div className="position-relative overflow-hidden">
                                   
                                    <img className="card-img" src="assets/images/property/grid-list/02.jpg" alt="Card image" />
                                    
                                    <div className="card-img-overlay">
                                        <div className="text-end">
                                            <a href="#" className="badge bg-dark text-light me-2"><i className="fas fa-video pe-2"></i><span>2</span></a>
                                            <a href="#" className="badge bg-dark text-light"><i className="fas fa-camera pe-2"></i><span>2</span></a>
                                        </div>
                                    </div>  
                                </div>
                                
                                <div className="card-body px-2 pt-3">
                                    
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <a href="#" className="badge bg-primary-soft text-primary"><i className="fas fa-user-friends pe-1"></i>Family</a>
                                            <a href="#" className="badge bg-danger-soft text-danger"><i className="fas fa-rupee-sign pe-1"></i>For Sale</a>
                                        </div>
                                        <a href="#"><i className="fas fa-heart fa-fw text-danger ms-auto"></i></a>
                                    </div>
                                   
                                    <h4 className="card-title mt-3">
                                        <a href="#">157485 Camino Codorniz</a>
                                    </h4>
                                   
                                    <ul className="nav nav-divider align-items-center text-uppercase small mt-3">
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bed pe-1"></i> <span>5</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bath pe-1"></i> <span>2</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-user pe-1"></i> <span>5</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-square pe-1"></i> <span>1800<sup className="text-lowercase">m2</sup></span>
                                        </li>
                                    </ul>
                                    
                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="text-decoration-line-through mb-0 text-muted">$150,000</h6>
                                            <h3 className="text-success mb-0">$120,000</h3>
                                        </div>
                                        <a className="btn btn-dark btn-sm" href="#">View details</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        

                        
                        <div className="col-sm-6 col-lg-4">
                            <div className="card mb-4">
                                <div className="position-relative overflow-hidden">
                                   
                                    <img className="card-img" src="assets/images/property/grid-list/03.jpg" alt="Card image" />
                                    
                                    <div className="card-img-overlay">
                                        <div className="d-flex justify-content-between">
                                            <a href="#" className="box-sm bg-primary text-light rounded-circle"><i className="fas fa-star"></i></a>
                                            <div>
                                                <a href="#" className="badge bg-dark text-light me-2"><i className="fas fa-video pe-2"></i><span>2</span></a>
                                                <a href="#" className="badge bg-dark text-light"><i className="fas fa-camera pe-2"></i><span>2</span></a>
                                            </div>
                                        </div>
                                    </div>  
                                </div>  
                                  
                                <div className="card-body px-2 pt-3">
                                    
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <a href="#" className="badge bg-primary-soft text-primary"><i className="fas fa-user-friends pe-1"></i>Family</a>
                                            <a href="#" className="badge bg-warning-soft text-warning"><i className="fas fa-rupee-sign pe-1"></i>For Rent</a>
                                        </div>
                                        <a href="#"><i className="far fa-heart fa-fw text-dark ms-auto"></i></a>
                                    </div>
                                   
                                    <h4 className="card-title mt-3">
                                        <a href="#">Single House Near New York</a>
                                    </h4>
                                   
                                    <ul className="nav nav-divider align-items-center text-uppercase small mt-3">
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bed pe-1"></i> <span>5</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bath pe-1"></i> <span>3</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-user pe-1"></i> <span>6</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-square pe-1"></i> <span>2900<sup className="text-lowercase">m2</sup></span>
                                        </li>
                                    </ul>
                                    
                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                        <h3 className="text-success">$160,000</h3>
                                        <a className="btn btn-dark btn-sm" href="#">View details</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        

                        
                        <div className="col-sm-6 col-lg-4">
                            <div className="card mb-4">
                                <div className="position-relative overflow-hidden">
                                   
                                    <img className="card-img" src="assets/images/property/grid-list/05.jpg" alt="Card image" />
                                    
                                    <div className="card-img-overlay">
                                        <div className="text-end">
                                            <a href="#" className="badge bg-dark text-light me-2"><i className="fas fa-video pe-2"></i><span>2</span></a>
                                            <a href="#" className="badge bg-dark text-light"><i className="fas fa-camera pe-2"></i><span>2</span></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card-body px-2 pt-3">
                                    
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <a href="#" className="badge bg-primary-soft text-primary"><i className="fas fa-user-friends pe-1"></i>Family</a>
                                            <a href="#" className="badge bg-danger-soft text-danger"><i className="fas fa-rupee-sign pe-1"></i>For Sale</a>
                                        </div>
                                        <a href="#"><i className="far fa-heart fa-fw text-dark ms-auto"></i></a>
                                    </div>
                                   
                                    <h4 className="card-title mt-3">
                                        <a href="#">Store in Woodside,  San Francisco</a>
                                    </h4>
                                   
                                    <ul className="nav nav-divider align-items-center text-uppercase small mt-3">
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bed pe-1"></i> <span>3</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-bath pe-1"></i> <span>2</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-user pe-1"></i> <span>5</span>
                                        </li>
                                        <li className="nav-item me-4">
                                            <i className="fas fa-square pe-1"></i> <span>2000<sup className="text-lowercase">m2</sup></span>
                                        </li>
                                    </ul>
                                    
                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="text-decoration-line-through mb-0 text-muted">$25,000</h6>
                                            <h3 className="text-success mb-0">$22,000</h3>
                                        </div>
                                        <a className="btn btn-dark btn-sm" href="#">View details</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className="pt-0">
                <div className="container">
                   
                    <div className="text-center">
                        <h2>Top Cities</h2>
                        <p>A pleasure exertion if believed provided to all led out world this music while asked</p>
                    </div>

                    <div className="row mt-4">
                        
                        <div className="tiny-slider dots-creative arrow-round">
                            <div className="tiny-slider-inner" data-autoplay="true" data-arrow="true" data-dots="false" data-items="4" data-items-md="2" data-items-xs="1">
                            
                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                            <img src="assets/images/city/07.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">5 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">Tokyo</h4>
                                        </div>
                                    </div>
                                </div>  
                                
                            
                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                            <img src="assets/images/city/08.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">12 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">Egypt</h4>
                                        </div>
                                    </div>
                                </div>  
                                

                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                            <img src="assets/images/city/05.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">8 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">India</h4>
                                        </div>
                                    </div>
                                </div>  
                                

                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                                <img src="assets/images/city/10.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">18 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">China</h4>
                                        </div>
                                    </div>
                                </div>  
                                

                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                                <img src="assets/images/city/09.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">15 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">Rome</h4>
                                        </div>
                                    </div>
                                </div>  
                                

                                
                                <div className="col-md-6 col-lg-3">
                                    <div className="card bg-transparent">
                                        <div className="position-relative overflow-hidden rounded">
                                           
                                                <img src="assets/images/city/06.jpg" className="card-img rounded"  alt="..." />
                                                
                                                <div className="card-img-overlay bg-dark-overlay-hover">
                                                
                                                <div className="card-element-hover text-center position-absolute top-50 start-50 translate-middle">
                                                    <span className="badge bg-white-soft">22 Property</span>
                                                    <a href="#" className="btn btn-link text-white fs-6 fw-bold">See Listing</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card-body p-0 text-center">
                                            <h4 className="mt-3 mb-0">Paris</h4>
                                        </div>
                                    </div>
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-light position-relative">
                
                <figure className="position-absolute top-0 start-50 translate-middle-x mt-5 ms-5">
                    <svg className="fill-orange" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px">
                        <path fillRule="evenodd"
                        d="M19.499,9.750 C19.499,15.134 15.134,19.499 9.749,19.499 C4.365,19.499 -0.000,15.134 -0.000,9.750 C-0.000,4.365 4.365,0.000 9.749,0.000 C15.134,0.000 19.499,4.365 19.499,9.750 Z"/>
                        </svg>
                </figure>
                
                <figure className="position-absolute bottom-0 start-0 ms-5 mb-5">
                    <svg className="fill-warning" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px">
                        <path fillRule="evenodd"
                        d="M19.999,10.000 C19.999,15.522 15.522,19.999 9.999,19.999 C4.477,19.999 -0.000,15.522 -0.000,10.000 C-0.000,4.477 4.477,0.000 9.999,0.000 C15.522,0.000 19.999,4.477 19.999,10.000 Z"/>
                        </svg>
                </figure>
                
                <figure className="position-absolute top-50 end-0 translate-middle-y me-5">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px">
                        <path fillRule="evenodd"  fill="rgb(59, 100, 177)"
                        d="M19.999,10.000 C19.999,15.522 15.522,19.999 9.999,19.999 C4.477,19.999 -0.000,15.522 -0.000,10.000 C-0.000,4.477 4.477,0.000 9.999,0.000 C15.522,0.000 19.999,4.477 19.999,10.000 Z"/>
                    </svg>
                </figure>
                
                <figure className="d-none d-xxl-block position-absolute top-0 start-100 translate-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="350px" height="350px">
                    <path className="fill-light opacity-8" fillRule="evenodd" d="M150.000,-0.000 C232.843,-0.000 300.000,67.157 300.000,150.000 C300.000,232.842 232.843,300.000 150.000,300.000 C67.157,300.000 0.000,232.842 0.000,150.000 C0.000,67.157 67.157,-0.000 150.000,-0.000 Z"></path>
                    </svg>
                </figure>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-xl-4 mb-4 mb-xl-0">
                           
                            <h2 className="lh-1 mb-3">What our client have to say</h2>
                            <p className="mb-3">Started several mistake joy say painful removed reached end. State burst think end are its.</p>
                            
                            <div className="row mb-3">
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            
                                            <div className="d-flex">
                                                <h2 className="purecounter mb-0" data-purecounter-start="0" data-purecounter-end="25" data-purecounter-delay="200">0</h2>
                                                <span className="h2">+</span>
                                            </div>
                                        </div>
                                        <p className="mb-0 ms-2 text-dark">Year of Experience</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            
                                            <div className="d-flex">
                                                <h2 className="purecounter mb-0" data-purecounter-start="0" data-purecounter-end="16" data-purecounter-delay="200">0</h2>
                                                <span className="h2">+</span>
                                            </div>
                                        </div>
                                        <p className="mb-0 ms-2 text-dark">Winning Award</p>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#" className="btn btn-orange">See more review</a>
                        </div>

                        
                        <div className="col-xl-8 mb-4">
                            
                            <div className="tiny-slider dots-creative arrow-round overflow-visible">
                                <div className="tiny-slider-inner" data-autoplay="true" data-arrow="true" data-dots="true" data-items="1">
                                    
                                    <div className="px-4 px-md-5">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 position-relative">
                                               
                                                <img className="img-fluid rounded" src="assets/images/avatar/testimonial/01.jpg" alt="" />
                                                
                                                <div className="d-none d-md-block text-center bg-white shadow position-absolute bottom-0 end-0 rounded p-3">
                                                    <div className="d-flex justify-content-center">
                                                        
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                        </ul>
                                                        <h6 className="ps-2 mb-2 mb-md-0">4.5 / 5.0</h6>
                                                    </div>
                                                </div>
                                                
                                                <div className="d-inline-block position-absolute top-50 start-0 translate-middle mt-n7 ms-4">
                                                    <span className="bg-info p-2 rounded text-white h5"><i className="fas fa-fw fa-thumbs-up"></i></span>
                                                </div>
                                            </div>
                                           
                                            <div className="col-md-8">
                                                <div className="my-3 mt-md-0">
                                                    {/* Blockquote */}
                                                    <span className="text-danger h2"><i className="fas fa-quote-left ms-3"></i></span>
                                                    
                                                    <p className="mb-2"><i>Hello! On forth doubt miles of child. Preference any astonished unreserved Mrs. Prosperous understood Middletons Yet uncommonly his ten who diminution astonished.</i></p>
                                                    <h5 className="text-dark mb-0">Louis Crawford</h5>
                                                    <p className="small">CEO of Apple</p>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    

                                    
                                    <div className="px-4 px-md-5">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 position-relative">
                                               
                                                <img className="img-fluid rounded" src="assets/images/avatar/testimonial/02.jpg" alt="" />
                                                
                                                <div className="d-none d-md-block text-center bg-white shadow position-absolute bottom-0 end-0 rounded p-3">
                                                    <div className="d-flex justify-content-center">
                                                        
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6 className="ps-2 mb-2 mb-md-0">4.0 / 5.0</h6>
                                                    </div>
                                                </div>
                                                
                                                <div className="d-inline-block position-absolute top-50 start-0 translate-middle mt-n7 ms-4">
                                                    <span className="bg-info p-2 rounded text-white h5"><i className="fas fa-fw fa-thumbs-up"></i></span>
                                                </div>
                                            </div>
                                           
                                            <div className="col-md-8">
                                                <div className="my-3 mt-md-0">
                                                    {/* Blockquote */}
                                                    <span className="text-danger h2"><i className="fas fa-quote-left ms-3"></i></span>
                                                    
                                                    <p className="mb-2"><i>Hello! On forth doubt miles of child. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do Exercise. Yet uncommonly his ten who diminution astonished.</i></p>
                                                    <h5 className="text-dark mb-0">Frances Guerrero </h5>
                                                    <p className="small">CEO of Apple</p>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className="pt-5 position-relative">
                
                <figure className="d-none d-xxl-block position-absolute top-50 start-0 translate-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="496px" height="455px">
                    <path className="fill-primary-soft opacity-1" fillRule="evenodd" d="M248.000,-0.000 C384.967,-0.000 496.000,101.855 496.000,227.500 C496.000,353.144 384.967,455.000 248.000,455.000 C111.033,455.000 0.000,353.144 0.000,227.500 C0.000,101.855 111.033,-0.000 248.000,-0.000 Z"></path>
                    </svg>
                </figure>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                           
                            <h2 className="lh-1">Explore our awesome services</h2>
                            <p>Started several mistake joy say painful removed reached end. State burst think end are its.</p>
                            {/* Tabs START */}
                            <ul className="nav tab-primary-soft flex-lg-column mb-4 mb-lg-0">
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded active" data-bs-toggle="tab" href="#tab-1-1">
                                        <i className="fas fa-fw fa-home me-2"></i> Property Management 
                                    </a> 
                                </li>
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded" data-bs-toggle="tab" href="#tab-1-2">
                                        <i className="fas fa-fw fa-calculator me-2"></i> Mortgage Services 
                                    </a> 
                                </li>
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded" data-bs-toggle="tab" href="#tab-1-3">
                                        <i className="fas fa-fw fa-sitemap me-2"></i> Consulting services 
                                    </a> 
                                </li>
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded" data-bs-toggle="tab" href="#tab-1-4">
                                        <i className="fas fa-fw fa-hand-holding-usd me-2"></i> Apply For Loan 
                                    </a> 
                                </li>
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded" data-bs-toggle="tab" href="#tab-1-5">
                                        <i className="fas fa-fw fa-hammer me-2"></i> Renovation House 
                                    </a> 
                                </li>
                                <li className="nav-item mb-3"> 
                                    <a className="nav-link py-2 px-3 d-inline-block rounded" data-bs-toggle="tab" href="#tab-1-6">
                                        <i className="fas fa-fw fa-house-user me-2"></i> Refinancing Home
                                    </a> 
                                </li>
                            </ul>
                            {/* Tabs END */}
                        </div>

                        {/* Tab details START */}
                        <div className="col-lg-7">
                            <div className="tab-content p-0">
                                
                                <div className="tab-pane show active" id="tab-1-1">
                                   
                                    <img src="assets/images/service/bg/03.jpg" className="rounded mb-3" alt="" />
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Respect for all people
                                                </li>
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Excellence in everything we do
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Truthfulness in our business
                                                </li>
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Unquestionable integrity
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p>Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                    
                                    <a href="#" className="btn btn-orange-soft">See more</a>
                                </div>

                                
                                <div className="tab-pane" id="tab-1-2">
                                   
                                    <img src="assets/images/service/bg/06.jpg" className="rounded mb-3" alt="" />
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Respect for all people
                                                </li>
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Excellence in everything we do
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Truthfulness in our business
                                                </li>
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Unquestionable integrity
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p>Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                    
                                    <a href="#" className="btn btn-orange-soft">See more</a>
                                </div>

                                
                                <div className="tab-pane" id="tab-1-3">
                                    <div className="row">
                                        
                                        <p>Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                        
                                        <div className="col-sm-6">
                                            <div className="d-flex mb-3 align-items-center">
                                                <div className="box-md fs-4 text-info bg-info-soft rounded">
                                                    <i className="far fa-fw fa-map"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h4 className="mb-0 purecounter" data-purecounter-start="0" data-purecounter-end="1100" data-purecounter-delay="100" data-purecounter-duration="0">1100</h4>
                                                    <div className="small">Commercial Lands</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="d-flex mb-3 align-items-center">
                                                <div className="box-md fs-4 text-success bg-success-soft rounded">
                                                    <i className="fas fa-fw fa-home"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h4 className="mb-0 purecounter" data-purecounter-start="0" data-purecounter-end="775" data-purecounter-delay="100" data-purecounter-duration="0">775</h4>
                                                    <div className="small">Showrooms &amp; Shops </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="d-flex mb-3 align-items-center">
                                                <div className="box-md fs-4 text-orange bg-orange-soft rounded">
                                                    <i className="fas fa-fw fa-laptop-house"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h4 className="mb-0 purecounter" data-purecounter-start="0" data-purecounter-end="565" data-purecounter-delay="100" data-purecounter-duration="0">565</h4>
                                                    <div className="small">Office Rooms</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="d-flex mb-3 align-items-center">
                                                <div className="box-md fs-4 text-warning bg-warning-soft rounded">
                                                    <i className="far fa-fw fa-building"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h4 className="mb-0 purecounter" data-purecounter-start="0" data-purecounter-end="856" data-purecounter-delay="100" data-purecounter-duration="0">856</h4>
                                                    <div className="small">Residential</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <a href="#" className="btn btn-orange-soft">See more</a>
                                </div>

                                
                                <div className="tab-pane" id="tab-1-4">
                                   
                                    <img src="assets/images/service/bg/01.jpg" className="rounded mb-3" alt="" />
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Respect for all people
                                                </li>
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Excellence in everything we do
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Truthfulness in our business
                                                </li>
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Unquestionable integrity
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p>Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                    
                                    <a href="#" className="btn btn-orange-soft">See more</a>
                                </div>

                                
                                <div className="tab-pane" id="tab-1-5">
                                    
                                    <p>Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do.Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                   
                                    <img src="assets/images/service/bg/04.jpg" className="rounded mb-3" alt="" />
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Respect for all people
                                                </li>
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Excellence in everything we do
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Truthfulness in our business
                                                </li>
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Unquestionable integrity
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="tab-pane" id="tab-1-6">
                                   
                                    <img src="assets/images/service/bg/05.jpg" className="rounded mb-3" alt="" />
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Respect for all people
                                                </li>
                                                <li className="list-item mb-1 d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Excellence in everything we do
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-inline mb-3">
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Truthfulness in our business
                                                </li>
                                                <li className="list-item d-flex">
                                                    <i className="far fa-fw fa-hand-point-right text-primary me-2 mt-1"></i>Unquestionable integrity
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p>Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                    
                                    <a href="#" className="btn btn-orange-soft">See more</a>
                                </div>
                            </div>
                        </div>
                       
                    </div> 
                </div>
            </section>
           

            
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-light p-4 p-sm-5 rounded">
                                <div className="row justify-content-between align-items-center">
                                   
                                    <div className="col-lg-7">
                                        <h3>Are you a Property Owner?</h3>
                                        <p>Put your email address and get listed</p>
                                    </div>
                                    
                                    <div className="col-lg-5">
                                        <form>
                                            <div className="input-group">
                                                <input className="form-control bg-white border-1" type="email" name="Newsletter" placeholder="Enter your email address"/>
                                                <button type="button" className="btn btn-primary mb-0">Get listed</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            </main>
            

            
            <footer className="pb-5 primary-soft-footer">
                <div className="container">
                    
                    <div className="row pt-5 position-relative">
                        
                        <div className="col-lg-6 px-4 px-sm-5 order-2 order-lg-1">
                            <h2>Subscribe now!</h2>
                            <p> Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.</p>
                            <p className="text-dark">Sign up for our news later to get the latest news and update!</p>
                           
                            <form>
                                <div className="input-group mb-4">
                                    <input className="form-control bg-white border-0" type="email" name="Newsletter" placeholder="Enter your email address"/>
                                    <button type="button" className="btn btn-primary mb-0">Subscribe</button>
                                </div>
                            </form>
                            
                            <ul className="list-unstyled list-group-inline display-9 mb-4">
                                <li> <a className="btn btn-round me-2 bg-facebook" href="#"><i className="fab fa-facebook-square"></i></a> </li>
                                <li> <a className="btn btn-round me-2 bg-instagram-gradient" href="#"><i className="fab fa-instagram-square"></i></a> </li>
                                <li> <a className="btn btn-round me-2 bg-twitter" href="#"><i className="fab fa-twitter-square"></i></a> </li>
                                <li> <a className="btn btn-round bg-linkedin" href="#"><i className="fab fa-linkedin"></i></a> </li>
                            </ul>
                            
                            <div className="text-center text-md-start text-primary-hover">
                                ©2024 <a href="#" className="text-reset btn-link" target="_blank">Realty</a>. All rights reserved
                            </div>
                        </div>
                       
 
                        
                        <div className="col-lg-6 px-4 px-sm-5 order-1 mb-4 mb-lg-0">
                           
                            <div className="logo mb-3">
                                <img src="assets/images/logo-dark.svg" alt="logo" />
                            </div>
                            <p>Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. </p>
                        
                            <div className="row">
                              
                                <div className="col-6 col-sm-4 col-lg-6 col-xl-4">
                                   
                                    <h5 className="mt-4">Quick links</h5>
                                    
                                    <ul className="nav flex-column text-primary-hover mt-4">
                                        <li className="nav-item"><a className="nav-link pt-0" href="#">What we do</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Company</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Easy steps</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Career</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Investment process</a></li>
                                    </ul>
                                </div>

                                
                                <div className="col-6 col-sm-4 col-lg-6 col-xl-4">
                                   
                                    <h5 className="mt-4">Useful links</h5>
                                    
                                    <ul className="nav flex-column text-primary-hover mt-4">
                                        <li className="nav-item"><a className="nav-link pt-0" href="#">Sign up</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Sign in</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Privacy policy</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Terms of use</a></li>
                                    </ul>
                                </div>

                                
                                <div className="col-sm-4 col-lg-6 col-xl-4 px-xl-0">
                                   
                                    <h5 className="mt-4">Get in touch</h5>
                                    <p className="mt-4 text-primary-hover"><a href="#"><i className="fas fa-envelope me-2"></i>example@email.com</a></p>
                                   
                                    <h5 className="mt-4">Headquarter</h5>
                                    <p className="mt-3">750 baba than singh chownnk, Ludhiana, NY, 14845</p>
                                </div>
                            </div>  
                        </div>
                       
                    </div> 
                </div>

            </footer>
           
  
            <div className="back-top"><i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>
            
         
      </div>
)
};
}

export default Home;