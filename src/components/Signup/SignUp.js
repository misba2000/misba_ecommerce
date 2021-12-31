import React from "react";
import styles from "./styles.module.css";
const SignUp = () => {
    return(
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrotFnxhPVWpV2Yk0exAjgPkqLrqNxx0UJbg&usqp=CAU" alt="" className={styles.signupimage}/>
            </div>
        <div className={styles.signupmain}>
          <input type="text" placeholder="First name" className={styles.signup1}/> </div><br/>
           <div className={styles.signupmain}>
          <input type="text" placeholder="Surname" className={styles.signup2}/> </div><br/>
          <div className={styles.signupmain}>
          <input type="text" placeholder="Email-address" className={styles.signup3}/> </div><br/>
          <div className={styles.signupmain}>
          <input type="text" placeholder="Password" className={styles.signup4}/> </div><br/>
          <div className={styles.signupmain}><button className={styles.signup5}
          >Sign Up</button></div>
        </div>
    )
}
export default SignUp;