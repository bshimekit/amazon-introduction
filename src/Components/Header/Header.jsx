import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase"

function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* delivery */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search Amazon" />
            <BsSearch size={38} />
          </div>

          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <section name="" id="">
                <option value="">EN</option>
              </section>
            </Link>

            {/*three Components*/}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                    <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                ) : (
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                      </>
                  )
}
              </div>
            </Link>
            {/*order*/}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/*cart*/}

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;

// Gitcode below
// import React, { useContext } from "react";
// import classes from "./Header.module.css";
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";
// // icons
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// function Header() {
//   const [{ basket }, dispatch] = useContext(DataContext);
//   // console.log(basket.length)
//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);
//   return (
//     <section className={classes.fixed}>
//       <section>
//         <div className={classes.header__container}>
//           <div className={classes.logo__container}>
//             {/* logo section*/}
//             <Link to="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>
//             <div className={classes.delivery}>
//               {/* delivery */}
//               <span>
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>Canada</span>
//               </div>
//             </div>
//           </div>
//           {/* search section*/}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" placeholder="Search Amazon" />
//             <BsSearch size={40} />
//           </div>
//           {/* other section */}
//           <div className={classes.order__container}>
//             <Link to="" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Canada_flag_icon.png/800px-Canada_flag_icon.png?20200402074802"
//                 alt=""
//               />

//               <select name="" id="">
//                 <option value="">EN</option>
//               </select>
//             </Link>
//             <Link to="/signin">
//               <p>Sign In</p>
//               <span>Account & Lists</span>
//             </Link>
//             <Link to="/orders">
//               <p>returns</p>
//               <span>& Orders</span>
//             </Link>
//             <Link to="/cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>{totalItem}</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// }

// export default Header;
