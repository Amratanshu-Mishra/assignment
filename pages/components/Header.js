import Navbar from "../Navbar";
import styles from "../../styles/index.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
       <h3 className={styles.heading_primary}>
        TAAN     TRIM <span style={{marginLeft:'80%'}}><Image className="ico" src='/search.png'width={'15px'} height={'15px'}/>
        <span style={{marginLeft:'20px'}}>
        <Image className="ico" src='/user-alt.png'width={'15px'} height={'15px'}/>
        </span>
        <span style={{marginLeft:'20px'}}>
        <Image className="ico" src='/bookmark.png'width={'15px'} height={'15px'}/>
        </span>
        <span style={{marginLeft:'20px'}}>
        <Image className="ico" src='/shopping-bag.png'width={'15px'} height={'15px'}/>
        </span></span></h3> 
            
        <Navbar />
      </div>
  
    </header>
  );
};

export default Header;
