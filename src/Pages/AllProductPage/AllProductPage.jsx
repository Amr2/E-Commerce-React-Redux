import '../../Styles/index.css';
import shirt1 from '../../assets/image/gallery/shirt-1.png'
import shirt2 from '../../assets/image/gallery/shirt-2.png'
import shirt3 from '../../assets/image/gallery/shirt-3.png'
import shirt4 from '../../assets/image/gallery/shirt-4.png'
import shirt5 from '../../assets/image/gallery/shirt-5.png'
import shirt6 from '../../assets/image/gallery/shirt-6.png'
import shirt7 from '../../assets/image/gallery/shirt-7.png'
import shirt8 from '../../assets/image/gallery/shirt-8.png'
import red from '../../assets/image/gallery/red-tshirt.png'
import pink from '../../assets/image/gallery/pink-tshirt.png'
import purple from '../../assets/image/gallery/purple-tshirt.png'
import orange from '../../assets/image/gallery/orange-tshirt.png'
import shoe1 from '../../assets/image/gallery/shoe-1.png'
import shoe2 from '../../assets/image/gallery/shoe-2.png'
import shoe3 from '../../assets/image/gallery/shoe-3.png'
import shoe4 from '../../assets/image/gallery/shoe-4.png'
import shoe5 from '../../assets/image/gallery/shoe-5.png'
import shoe6 from '../../assets/image/gallery/shoe-6.png'
import shoe7 from '../../assets/image/gallery/shoe-7.png'
import shoe8 from '../../assets/image/gallery/shoe-8.png'
import watch1 from '../../assets/image/gallery/watch-1.png'
import watch2 from '../../assets/image/gallery/watch-2.png'
import watch3 from '../../assets/image/gallery/watch-3.png'
import watch4 from '../../assets/image/gallery/watch-4.png'
import watch5 from '../../assets/image/gallery/watch-5.png'
import watch6 from '../../assets/image/gallery/watch-6.png'
import watch7 from '../../assets/image/gallery/watch-7.png'
import watch8 from '../../assets/image/gallery/watch-8.png'
import sunglass1 from '../../assets/image/gallery/sunglass-1.png'
import sunglass2 from '../../assets/image/gallery/sunglass-2.png'
import sunglass3 from '../../assets/image/gallery/sunglass-3.png'
import sunglass4 from '../../assets/image/gallery/sunglass-4.png'
import sunglass5 from '../../assets/image/gallery/sunglass-5.png'
import sunglass6 from '../../assets/image/gallery/sunglass-6.png'
import sunglass7 from '../../assets/image/gallery/sunglass-7.png'
import sunglass8 from '../../assets/image/gallery/sunglass-8.png'
import bagpacks1 from '../../assets/image/gallery/bagpacks-1.png'
import bagpacks2 from '../../assets/image/gallery/bagpacks-2.png'
import bagpacks3 from '../../assets/image/gallery/bagpacks-3.png'
import bagpacks4 from '../../assets/image/gallery/bagpacks-4.png'
import bagpacks5 from '../../assets/image/gallery/bagpacks-5.png'
import bagpacks6 from '../../assets/image/gallery/bagpacks-6.png'
import bagpacks7 from '../../assets/image/gallery/bagpacks-7.png'
import bagpacks8 from '../../assets/image/gallery/bagpacks-8.png'



const AllProductPage = () => {
    return (
        <>
             <section id="categoryWomen">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">All Productes</h5>
            </div>
            <div class="col-12">
              <nav>
 
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-women" role="tabpanel" aria-labelledby="nav-women-tab">
                    <ul class="nav nav-pills justify-content-center mb-5" id="pills-tab-women" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-wtshirt-tab" data-bs-toggle="pill" data-bs-target="#pills-wtshirt" type="button" role="tab" aria-controls="pills-wtshirt" aria-selected="true">T-Shirt</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-dresses-tab" data-bs-toggle="pill" data-bs-target="#pills-dresses" type="button" role="tab" aria-controls="pills-dresses" aria-selected="false">Shirt</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-wshoes-tab" data-bs-toggle="pill" data-bs-target="#pills-wshoes" type="button" role="tab" aria-controls="pills-wshoes" aria-selected="false">Shoes</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-wwatch-tab" data-bs-toggle="pill" data-bs-target="#pills-wwatch" type="button" role="tab" aria-controls="pills-wwatch" aria-selected="false">Watch </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-wsunglasses-tab" data-bs-toggle="pill" data-bs-target="#pills-wsunglasses" type="button" role="tab" aria-controls="pills-wsunglasses" aria-selected="false">Sunglasses </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-wbagpacks-tab" data-bs-toggle="pill" data-bs-target="#pills-wbagpacks" type="button" role="tab" aria-controls="pills-wbagpacks" aria-selected="false">Bagpacks </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContentWomen">
                      <div class="tab-pane fade" id="pills-dresses" role="tabpanel" aria-labelledby="pills-dresses-tab">
                        <div class="carousel slide" id="carouselCategoryDresses" data-bs-touch="false" data-bs-interval="false">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              
                              
                              
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              
                              
                              
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shirt4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            

                            
                        </div>
                      </div>
                      <div class="tab-pane fade show active" id="pills-wtshirt" role="tabpanel" aria-labelledby="pills-wtshirt-tab">
                        <div class="carousel slide" id="carouselCategoryWTshirt" data-bs-touch="false" data-bs-interval="false">
                          <div class="carousel-inner">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={red} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={pink} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={orange} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={purple} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={red} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={pink} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={orange} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={purple} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>

                           
                           
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="pills-wshoes" role="tabpanel" aria-labelledby="pills-wshoes-tab">
                        <div class="carousel slide" id="carouselCategoryWShoes" data-bs-touch="false" data-bs-interval="false">
                          <div class="carousel-inner">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$200</span><span class="text-primary">$175</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={shoe4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            
                         
                           
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="pills-wwatch" role="tabpanel" aria-labelledby="pills-wwatch-tab">
                        <div class="carousel slide" id="carouselCategoryWwatch" data-bs-touch="false" data-bs-interval="false">
                          <div class="carousel-inner">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                              <div class="row h-100 align-items-center g-2">
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                              <div class="row h-100 align-items-center g-2">
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={watch4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>

                         
                         
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="pills-wsunglasses" role="tabpanel" aria-labelledby="pills-wsunglasses-tab">
                        <div class="carousel slide" id="carouselCategoryWSunglasses" data-bs-touch="false" data-bs-interval="false">
                          <div class="carousel-inner">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={sunglass4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>

                          
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="pills-wbagpacks" role="tabpanel" aria-labelledby="pills-wbagpacks-tab">
                        <div class="carousel slide" id="carouselCategoryWBagpacks" data-bs-touch="false" data-bs-interval="false">
                          <div class="carousel-inner">
                              <div class="row h-100 align-items-center g-2">
                              <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks1} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks2} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks3} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div class="card card-span h-100 text-white"><img class="img-fluid h-100" src={bagpacks4} alt="..." />
                                    <div class="card-img-overlay ps-0"> </div>
                                    <div class="card-body ps-0 bg-200">
                                      <h5 class="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through">$500</span><span class="text-primary">$275</span></div>
                                    </div><a class="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>

                            
                           
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
 
export default AllProductPage;