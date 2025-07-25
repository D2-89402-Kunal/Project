import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SignUp = () => {
  // Form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: 'PATIENT'
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Demo validation and "success"
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    // Very basic demo validation
    if (!form.name || !form.email || !form.password || !form.phoneNumber) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Invalid email address');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!/^\d{10,15}$/.test(form.phoneNumber)) {
      setError('Phone number must be between 10 and 15 digits');
      return;
    }
    // "Success" for demo
    setSuccess('Signup successful! (This is only a frontend demo)');
    setTimeout(() => {
      setForm({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        role: 'PATIENT'
      });
      setSuccess(null);
    }, 2000);
  };

  // Handle field changes
  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", alignItems: "center",
        background: "linear-gradient(135deg,#e3f0ff,#def3ec)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-4 shadow-lg position-relative"
        style={{
          maxWidth: "440px",
          width: "100%",
          backgroundColor: "#ffffffdd",
          backdropFilter: "blur(10px)",
          boxShadow: "0 6px 28px 0 rgb(43 101 222 / 13%)",
          position: "relative"
        }}
      >
        <button
          onClick={() => {
            setForm({
              name: '',
              email: '',
              password: '',
              phoneNumber: '',
              role: 'PATIENT'
            });
            setError(null);
            setSuccess(null);
          }}
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
        <div className="p-5 bg-white" style={{ flex: 1, width: "100%" }}>
          <h2 className="text-center text-dark mb-4" style={{fontWeight: 'bold', color: '#22395d'}}>Create an Account</h2>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="alert alert-danger text-center rounded-3"
              style={{background: '#ffe0e3', color: '#b71c1c', padding: '8px 0', marginBottom: "20px", fontWeight: 500}}
              role="alert"
            >
              {error}
            </motion.div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="alert alert-success text-center rounded-3"
              style={{background: '#e1f9df', color: '#146b1c', padding: '8px 0', marginBottom: "20px", fontWeight: 500}}
              role="alert"
            >
              {success}
            </motion.div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-dark" style={{fontWeight:500}}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control rounded-pill shadow-sm"
                style={{
                  padding: '10px 18px',
                  marginBottom: '8px',
                  border: "1.5px solid #adadad",
                  fontSize: "1.05rem"
                }}
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-dark" style={{fontWeight:500}}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control rounded-pill shadow-sm"
                style={{padding: '10px 18px', marginBottom: '8px', border: "1.5px solid #adadad", fontSize: "1.05rem"}}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-dark" style={{fontWeight:500}}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control rounded-pill shadow-sm"
                style={{padding: '10px 18px', marginBottom: '8px', border: "1.5px solid #adadad", fontSize: "1.05rem"}}
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label text-dark" style={{fontWeight:500}}>Phone Number</label>
              <input
                type="text"
                id="phonenumber"
                name="phoneNumber"
                className="form-control rounded-pill shadow-sm"
                style={{padding: '10px 18px', marginBottom: '8px', border: "1.5px solid #adadad", fontSize: "1.05rem"}}
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label text-dark" style={{fontWeight:500}}>Role</label>
              <select
                id="role"
                name="role"
                className="form-select rounded-pill shadow-sm"
                value={form.role}
                onChange={handleChange}
                style={{marginBottom: '8px', padding: '10px 18px'}}
              >
                <option value="PATIENT">Patient</option>
                <option value="DOCTOR">Doctor</option>
                {/* <option value="ADMIN">Admin</option> */}
              </select>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn w-100 rounded-pill shadow-sm"
              style={{
                backgroundColor: "#1976D2",
                borderColor: "#1976D2",
                color: "#fff",
                minHeight: "42px",
                fontWeight: 'bold',
                fontSize: "1.1rem"
              }}
            >
              Sign Up
            </motion.button>
          </form>
          <div className="text-center mt-3">
            <p className="text-dark" style={{marginBottom: "8px"}}>Already have an account? 
              <button 
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: 'underline', fontSize: "1rem" }}
                onClick={() => alert("Log In modal would open (static demo)")}
                type="button"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
