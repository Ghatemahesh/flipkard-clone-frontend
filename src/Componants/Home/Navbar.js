import { navData } from "../../constant/NavbarData"

const Navbar = ()=>{
    return(
        <div className=" d-flex justify-content-center border-bottom border-3 row container-fluid m-0 container-fluid" >
            <div className="container col-12 col-md-11 col-lg-10 d-flex justify-content-between p-2 flex-wrap ">
                { navData.map((navItem , index)=>{
                    return(
                    <div key={index} className="d-flex flex-column justify-content-center align-items-center gap-1 custom-width">
                    <img src={navItem.url} alt="" style={{width : 64 }}/>
                    <p className="small fw-lighter mb-0 text-center">{navItem.text}</p>
                    </div>
                    )
                })     
                }
            </div>
        </div>
    )
}
export default Navbar