import { FiHeart, FiShoppingBag, FiUser, FiLogIn, FiSearch } from 'react-icons/fi';
import { InputBase, IconButton } from '@mui/material';
import { Link } from "react-router-dom"

const Header = () => {

  const user = "";

  return (
    <nav className="header">
        <Link className="logo" to={"/"}>LOGO</Link>
        <Link to={"/rings"}>Rings</Link>
        <Link to={"/neckless"}>Neckless</Link>
        <Link to={"/latest"}>Latest</Link>
        <Link to={"/latest"}>Latest</Link>
        <Link to={"/latest"}>Latest</Link>
        <span className="inputbox">
            <InputBase
                style={{ flex: 1}}
                placeholder="Search..."
            />
            <IconButton type="submit" aria-label="search">
                <FiSearch />
            </IconButton>
        </span>
        <Link className="right-icons" to={"/favourite"}><FiHeart/> <span>Favourite</span></Link>
        <Link className="right-icons" to={"/cart"}><FiShoppingBag/><span>Cart</span></Link>
        {
          user ?
          <Link className="right-icons" to={"/account"}><FiUser/><span>Account</span></Link>
          :
          <Link className="right-icons" to={"/account"}><FiLogIn/><span>Login</span></Link>
        }
    </nav>
  )
}

export default Header
