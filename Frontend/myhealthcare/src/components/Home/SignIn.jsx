import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // For demo: Pretend login
  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    if (email === '' || password === '') {
      setError('Email and password are required');
    } else if (email === 'test@example.com' && password === '123456') {
      setError(null);
      alert('Login successful! (Static Demo)');
    } else {
      setError('Invalid Username or Password');
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        background: "linear-gradient(135deg,#e3f0ff,#def3ec)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="d-flex rounded-4 shadow-lg overflow-hidden position-relative"
        style={{
          maxWidth: "420px",
          width: "100%",
          backgroundColor: "#ffffffdd",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 6px 32px 0 rgb(43 101 222 / 13%)",
          position: 'relative'
        }}
      >
        <button
          onClick={()=> { setEmail(''); setPassword(''); setError(null);} }
          className="btn-close position-absolute"
          aria-label="Close"
          style={{
            top: "1rem",
            right: "1rem",
            zIndex: 1,
            padding: "0.5rem",
            border: 0,
            background: 'none',
            color: '#222',
            cursor: 'pointer'
          }}
        >
          <X size={22} strokeWidth={2.5} />
        </button>
        <div className="p-5 bg-white" style={{ flex: 1, width: '100%' }}>
          <h2 className="text-center text-dark mb-4" style={{fontWeight: 'bold', color: '#22395d'}}>Welcome Back!</h2>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="alert alert-danger text-center rounded-3"
              role="alert"
              style={{background: '#ffe0e3', color: '#b71c1c', padding: '8px 0', marginBottom: "20px", fontWeight: 500}}
            >
              {error}
            </motion.div>
          )}
          <form onSubmit={handleLogin} style={{width: '100%'}}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-dark" style={{fontWeight: 500}}>Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control rounded-pill shadow-sm"
                style={{
                  padding: '10px 18px',
                  marginBottom: '8px',
                  border: "1.5px solid #adadad",
                  fontSize: "1.05rem"
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-dark" style={{fontWeight: 500}}>Password</label>
              <input
                type="password"
                id="password"
                className="form-control rounded-pill shadow-sm"
                style={{
                  padding: '10px 18px',
                  marginBottom: '8px',
                  border: "1.5px solid #adadad",
                  fontSize: "1.05rem"
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="btn w-100 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#1976D2",
                borderColor: "#1976D2",
                color: "#fff",
                minHeight: '42px',
                fontWeight: 'bold',
                fontSize: '1.12rem'
              }}
            >
              Login
            </motion.button>
          </form>
          <div className="text-center mt-3">
            <p className="text-dark" style={{marginBottom: "8px"}}>
              New User?{" "}
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: 'underline', fontSize: "1rem" }}
                onClick={() => {
                  setShowSignup(true);
                  alert('Sign Up modal would open (static demo)');
                }}
                type="button"
              >
                Sign Up
              </button>
            </p>
            <p>
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: 'underline', fontSize: "1rem" }}
                onClick={() => {
                  setShowForgotPassword(true);
                  alert('Forgot Password modal would open (static demo)');
                }}
                type="button"
              >
                Forgot Password?
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
