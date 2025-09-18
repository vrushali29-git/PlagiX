import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="page">
        <div className="bg-page">
            <div className="main-page">
                <div className="nav">
                    <h1 className="logo">PlagiX</h1>
                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="/login" className="login-btn">Login</a>
                    </div>
                </div>
                <div className="content">
                    <div className="left-content">
                    <h1 className="title">Welcome to PlagiX</h1>
                    <p className="subtitle">Your Ultimate Plagiarism Detection Solution</p>
                    <a href="/signup" className="get-started">Get Started</a>
                    </div>
                    <div className="right-content">
                        <div className="loginpage">
                            <h2>Login to PlagiX</h2>
                            <form className="login-form">
                                <input type="text" placeholder="Username" required />
                                <input type="password" placeholder="Password" required />
                                <button type="submit" className="login-btn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Homepage
