import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../Firebase';
import ProductCard from '../product/ProductCard';
import { Carousel } from "react-bootstrap";
import "../carousel/ImageCarousel.css";
import { CarouselData } from "../carousel/CarouselData";
import {useEffect} from 'react';
import './Home.css'
function Home() {
    const [user, loading, error] = useAuthState(auth);
    const ProductCardData = [{
        title: "Amazon Sales",
        price: "2000",
        imgSrc: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Events/Jupiter-22/kiosk/PC_CC_UNREC_1x_EN._SY304_CB609456025_.jpg"
    },
    {
        title: "Amazon Sales",
        price: "2000",
        imgSrc: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Events/Jupiter-22/kiosk/PC_CC_UNREC_1x_EN._SY304_CB609456025_.jpg"
    },
    {
        title: "Amazon Sales",
        price: "2000",
        imgSrc: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Events/Jupiter-22/kiosk/PC_CC_UNREC_1x_EN._SY304_CB609456025_.jpg"
    },
    {
        title: "Amazon Sales",
        price: "2000",
        imgSrc: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Events/Jupiter-22/kiosk/PC_CC_UNREC_1x_EN._SY304_CB609456025_.jpg"
    }];
  
    
    
    return (
        <>
            <h1>Home Component Welcome {user?.email}</h1>
            <Carousel>
                {CarouselData.map((imageData) => {
                    return (
                        <Carousel.Item>
                            <img
                                key={imageData.id}
                                src={imageData.image}
                                className="carousel-image"
                                alt=""
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div className="products-align">

                {/* {user!==undefined ? <SignOut/>:<SignIn/>} */}
                {
                    ProductCardData.map((product) => {
                        return (
                            <ProductCard title={product.title} price={product.price} imgSrc={product.imgSrc} />
                        )
                    })
                }

            </div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </>
    )
}
export default Home;