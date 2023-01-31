const EmptyCart = ()=>{
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return(
        <div className = "container-fluid d-flex justify-content-center mt-3 ">
            <div className = "container d-flex justify-content-center align-items-center flex-column" style = {{background  : "#ffff" , height : "60vh"}}>
                <img className ="mb-3" style={{width : 270 , height :220}} src={imgurl} alt="cart is empty" />
                <p className = "mb-1 fw-bold">Your cart is empty!</p>
                <p className = "mb-1 fw-bold">Add items to it now</p>
            </div>
        </div>
    )
}
export default EmptyCart ;