//Nav bar using flexbox
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
  return (

    <div className="navbar">
        <div className="wrapper">
            <div className="left">
               <div className="item">
                <img src="/images/en.png" alt=""/>
                <KeyboardArrowDownIcon/>

               </div>
               <div className="item">
                <span>USA</span>
                <KeyboardArrowDownIcon/>
               </div>

               <div className="item">
                <Link className="link" to="/products/1">Women</Link>
               </div>

               <div className="item">
                <Link className="link"  to="/products/2">Men</Link>
               </div>

               <div className="item">
                <Link className="link" to="/products/3">Children</Link>
               </div>

               <div className="item">
                <Link className="link" to="/products/3">Accessories</Link>
               </div>
            </div>
            <div className="center">
                <Link  to="/"className='logo' >Apparel</Link>
                {/* <img src="/images/logo.png"/> */}
            </div>
            <div className="right">
                <div className="item">
                    <Link className="link" to="/products/3">Homepage</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/About">About</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/Contact">Contact</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/Stores">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Navbar