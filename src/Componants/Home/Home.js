import { useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { getproduct } from "../../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidBanner from "./MidBanner";

const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getproduct);

  const { product } = getProducts;

  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Banner />
      <MidSlide product = {product} title = "Deals of the Day" timer = {true}/>
      <MidBanner/>
      <Slide product = {product} title = "Top Selections"/>
      <Slide product = {product} title = "Discounts For You" timer={true}/>
      <Slide product = {product} title = "Suggested Items"/>
    </>
  );
};
export default Home;
