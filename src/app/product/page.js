
export default function Product() {
  return (
    <>
      <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
              <div className="row row-cols-1">
                  <div className="col">
                      <div className="breadcrumb__content">
                          <h1 className="breadcrumb__content--title text-white mb-10">Categories</h1>
                          <ul className="breadcrumb__content--menu d-flex">
                              <li className="breadcrumb__content--menu__items"><a className="text-white" href="/">Home</a></li>
                              <li className="breadcrumb__content--menu__items"><span className="text-white">Categories</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="shop__section section--padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
                            <button className="widget__filter--btn d-none d-md-2-flex align-items-center">
                                <svg  className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"/><circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/></svg> 
                                <span className="widget__filter--btn__text">Filter</span>
                            </button>
                            <div className="product__view--mode d-flex align-items-center">
                                <div className="product__view--mode__list">
                                    <div className="product__grid--column__buttons d-flex justify-content-center">
                                        <button className="product__grid--column__buttons--icons" data-toggle="tab" aria-label="product grid btn" data-target="#product_grid">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 9 9">
                                                <g  transform="translate(-1360 -479)">
                                                  <rect id="Rectangle_5725" data-name="Rectangle 5725" width="4" height="4" transform="translate(1360 479)" fill="currentColor"/>
                                                  <rect id="Rectangle_5727" data-name="Rectangle 5727" width="4" height="4" transform="translate(1360 484)" fill="currentColor"/>
                                                  <rect id="Rectangle_5726" data-name="Rectangle 5726" width="4" height="4" transform="translate(1365 479)" fill="currentColor"/>
                                                  <rect id="Rectangle_5728" data-name="Rectangle 5728" width="4" height="4" transform="translate(1365 484)" fill="currentColor"/>
                                                </g>
                                              </svg>
                                        </button>
                                        <button className="product__grid--column__buttons--icons active" data-toggle="tab" aria-label="product list btn" data-target="#product_list">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 8">
                                                <g id="Group_14700" data-name="Group 14700" transform="translate(-1376 -478)">
                                                  <g  transform="translate(12 -2)">
                                                    <g id="Group_1326" data-name="Group 1326">
                                                      <rect id="Rectangle_5729" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                                      <rect id="Rectangle_5730" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                                    </g>
                                                    <g id="Group_1328" data-name="Group 1328" transform="translate(0 -3)">
                                                      <rect id="Rectangle_5729-2" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                                      <rect id="Rectangle_5730-2" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                                    </g>
                                                    <g id="Group_1327" data-name="Group 1327" transform="translate(0 -1)">
                                                      <rect id="Rectangle_5731" data-name="Rectangle 5731" width="3" height="2" transform="translate(1364 487)" fill="currentColor"/>
                                                      <rect id="Rectangle_5732" data-name="Rectangle 5732" width="9" height="2" transform="translate(1368 487)" fill="currentColor"/>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop__product--wrapper">
                            <div className="tab_content">
                                <div id="product_grid" className="tab_pane">
                                    <div className="product__section--inner product__grid--inner">
                                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Fashion Plastic Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Modern Swivel Chair</a></h3>                              
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Design Living Sofa</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Plastic Chair Wooden</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Folding Tables Chairs</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product12.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Modern Fabric Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product13.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product14.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Globe Electric Lamp</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product15.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Fashion Plastic Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product14.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Design Rooms Sofa</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Fashion Plastic Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Fashion Plastic Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Modern Swivel Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Design Living Sofa</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Plastic Chair Wooden</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                                        </a>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">New</span>
                                                        </div>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Folding Tables Chairs</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items ">
                                                    <div className="product__items--thumbnail">
                                                        <a className="product__items--link" href="product/deneme">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                                            <img className="product__items--img product__secondary--img" src="assets/img/product/product12.webp" alt="product-img" />
                                                        </a>

                                                    </div>
                                                    <div className="product__items--content text-center">
                                                        <h3 className="product__items--content__title h4"><a href="product/deneme">Modern Fabric Chair</a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="product_list" className="tab_pane active show">
                                    <div className="product__section--inner">
                                        <div className="row row-cols-1 mb--n30">
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                                            </a>
                                                            <div className="product__badge">
                                                                <span className="product__badge--items sale">Sale</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Wooden</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">Larger Minimal Wooden Chair</a></h4>
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Modern</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">White Minimalist Combo Sofa</a></h4>
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                                                            </a>
                                                            <div className="product__badge">
                                                                <span className="product__badge--items sale">Sale</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Chair</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">Modern Swivel Chair</a></h4>
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Wooden</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">Modern Stylish Single Sofa</a></h4>   
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                                                            </a>
                                                            <div className="product__badge">
                                                                <span className="product__badge--items sale">Sale</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Plastic</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">New Furniture Tree Planet</a></h4>   
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-30">
                                                <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                    <div className="product__list--items__left d-flex align-items-center">
                                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                                            <a className="product__items--link" href="product/deneme">
                                                                <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                                                <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product__list--items__content">
                                                            <span className="product__items--content__subtitle mb-5">Wooden</span>
                                                            <h4 className="product__list--items__content--title mb-15"><a href="product/deneme">Single Stylish Mini Chair</a></h4>
                                                            <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                                                        </div>
                                                    </div>
                                                </div>
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
    </>
  );
}
