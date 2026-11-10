import './Login.scss';
import googleIcon from '../../assets/google.svg';
import registr from '../../assets/registr.jpg';

function Login() {
    return (
        <main className="login-page">
            <div className="login-form-side">
                <div className="form-container">
                    <div className="header-text">
                        <h1>Login</h1>
                        <p>
                            Don't have an account? <a href="/signup">Sign up</a>
                        </p>
                    </div>

                    <div className="inputs-block">
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
                        <button className="btn-orange">Log in</button>
                        <button className="btn-google">
                            <img src={googleIcon} alt="Google" />
                            <span>Log in with google</span>
                        </button>
                    </div>

                    <div className="copyright">
                        <p>Copyright © 2022 Delizioso</p>
                    </div>
                </div>
            </div>

            <div className="login-image-side">
                <img src={registr} alt="" />
            </div>
        </main>
    );
}

export default Login;
