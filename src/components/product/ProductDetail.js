import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api-transactions/Products';
import CartButtons from '../cart/CartButtons';
import { CartContext } from '../../pages/Index';

export default function ProductDetail() {
    
    const { dispatcher} = useContext(CartContext);
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [image,setImage] = useState()

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                setProduct(data);
            });
    }, [productId]);

    const setProductImage = (imageId)=>{
        setImage(product?.images[imageId]);
    }

    useEffect(()=>{
        setProductImage(0)
    },[product])

    return (
            <div style={{color:"rgb(235 251 255 / 83%)"}} className="row mt-5 g-0 d-flex justify-content-center">
                <div className="col-8">
                    <div className="row">
                        <div className="col-2">
                            {
                                product?.images[0] && <ImageBox imageId={0} setProductImage={setProductImage} product={product}/>
                            }
                            {
                                product?.images[1] && <ImageBox imageId={1} setProductImage={setProductImage} product={product}/>
                            }
                            {
                                product?.images[2] && <ImageBox imageId={2} setProductImage={setProductImage} product={product}/>
                            }
                            
                        </div>
                        <div className="col-md-5">
                            <img className="d-block w-100" src={image} alt="First slide"/> 
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-between">
                            <div className="card-header">
                                <h3 className="card-title mb-5">{product?.title}</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{product?.description}</p>
                            </div>
                            <div className="card-footer mb-3">
                                <div className='mb-3'>
                                    <h2>$ {product?.price}</h2>
                                </div>
                                <div className='mb-5'>
                                    <CartButtons dispatcher={dispatcher} isCart={false} id={product?.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const ImageBox = ({imageId,setProductImage,product})=>{
    
    return (
        <div className='mb-2'>
            <img className="d-block w-100" onClick={()=>setProductImage(imageId)} src={product?.images[imageId]} alt="First slide"/> 
        </div>
    )
}
