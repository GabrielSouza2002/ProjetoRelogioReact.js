import './header.css';


function Header(props) {
  return (
    <div className="Header">
      <div className='headerLogo'>
        <h2>Logo</h2> 
      </div>
      <div className='headerMenu'>
        <a href=''>Home</a>
        <a href=''>sobre</a>
      </div>
    </div>
  );
}

export default Header;
