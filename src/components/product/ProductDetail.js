import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api-transactions/Products';

// Import Swiper styles
import 'swiper/css';

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, [productId]);

    return (
            <div className="row mt-5 g-0 d-flex justify-content-center">
                <div className="col-8">
                    <div className="row">
                        <div className="col-md-6">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src={product?.images[0]} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={product?.images[1]} alt="First slide"/> 
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={product?.images[2]} alt="First slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                <div className="card-header">
                                    <h3 className="card-title mb-5">{product?.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{product?.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div>
                                        <label htmlFor="">Price</label>
                                        <h2>$ {product?.price}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
        </div>
    );
}
