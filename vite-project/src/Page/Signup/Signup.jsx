import './Signup.scss';
import googleIcon from '../../assets/google.svg';
import signup from '../../assets/signup.png';

function Signup() {
    return (
        <main className="signup-page">
            <div className="signup-form-side">
                <div className="form-container">
                    <div className="header-text">
                        <h1>Sign up</h1>
                        <p>
                            Don't have an account? <a href="/login">Log in</a>
                        </p>
                    </div>

                    <div className="inputs-block">
                        <div className="input-group">
                            <label>Full name</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email address</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                    </div>

                    <div className="options-row">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="/forgot" className="forgot-link">
                            Forgot Password?
                        </a>
                    </div>

                    <div className="buttons-block">
                        <button className="btn-orange">Sign up</button>
                        <button className="btn-google">
                            <img src={googleIcon} alt="Google" />
                            <span>Sign up with google</span>
                        </button>
                    </div>

                    <div className="copyright">
                        <p>Copyright © 2022 Delizioso</p>
                    </div>
                </div>
            </div>

            <div className="signup-image-side">
                <img src={signup} alt="Pancakes" />
            </div>
        </main>
    );
}

export default Signup;
