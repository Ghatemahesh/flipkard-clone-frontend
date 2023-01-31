import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getproduct } from "../../Redux/actions/productActions";
const Search = () => {
  const [Text, setText] = useState('');
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.getproduct);

  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);

  const getText = (value) => {
    setText(value);
  };

  const resetText = ()=>{
    setText('')
  }

  return (
    <div className="search-input ms-3  position-relative ">
      <div className="input-group input-group-sm ">
        <input
          type="text"
          className="form-control rounded rounded-0 border border-0 bg-light "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search for products, brands and more"
          onChange={(event) => getText(event.target.value)}
          value={Text}
        />
        <span
          className="input-group-text rounded rounded-0 bg-light border border-0 "
          id="inputGroup-sizing-sm"
        >
          <i className="fa fa-search text-primary mx-2"></i>
        </span>
      </div>
      {Text.length > 0 ? (
        <ul className="search-autocompleate small mt-1 p-2 d-none d-md-flex flex-column border border-1">
          {product
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(Text.toLowerCase())
            )
            .map((item) => (
              <Link to={`/product/${item.id}`} onClick={() => resetText()} style={{textDecoration : "none"}}>
              <li className=" d-flex mb-1 border-bottom pt-1 pb-2 border-bottom border-1">
                <p className=" m-0 text-sm  text-dark">
                  {item.title.longTitle}
                </p>
              </li>
              </Link>
            ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Search;
