import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const validateInputs = () => {
    if (email.length === 0 || !email.includes("@") || password.length < 8) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };
  const submit = () => {
    if (validateInputs()) {
      console.log("submitting----", email, password);
    }
  };
  return (
    <div  >
      <div className={styles.parent}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgLLBB0Vw-glF2FlyhpewdHTJfWp9yNN5ZA&usqp=CAU" alt="" className={styles.img}/>
     
   <div className={styles.box}>
       
        <div className={styles.logged}>
          <input
            placeholder="Email address"
            type="email"
            onChange={onEmailChange}
            value={email}
            className={styles.in11}
           
          />
          </div>
        
          <div className={styles.required}>
            {error ? <p>Required fields</p> : <p></p>}
          </div>
          <br />
          <div className={styles.logged}>
          <input
            placeholder="Enter your password"
            type="password"
            onChange={onPasswordChange}
            value={password}
            className={styles.in12}
           
          />
           </div>
          
          <div className={styles.required1}>
            {error ? <p>Required fields</p> : <p></p>}
          </div>
          <br />
          <div className={styles.logged}>
          <button onClick={submit}  className={styles.in13}>
            <b>Log In</b>
          </button></div>
          <br />
          <div className={styles.logged}>
           <Link to="./signup"><button className={styles.in14}>
            <b>SignUp</b>
          </button></Link> 
        </div>
        </div>
        </div>
        </div>
    
  );
};

           export default Authentication;