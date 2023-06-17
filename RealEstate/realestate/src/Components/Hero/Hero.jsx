import './Hero.css';

function Hero() {
    return (
        <>
        <div className="hero-container">
            <div className="hero-left">
                <h1>Discover Most Suitable Property</h1>
                <div className="circle"></div>
                <p>Find a variety of properties that suit you very easility</p>
                <p>Forget all difficulties in finding a residence for you</p>
                <div className="input-search">
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className="intro">
                    <div className="intro-items">
                        <h4>9,000 +</h4>
                        <p>Premium Product</p>
                    </div>
                    <div className="intro-items">
                        <h4>2,000 +</h4>
                        <p>Happy Customer</p>
                    </div>
                    <div className="intro-items">
                        <h4>28 +</h4>
                        <p>Awards Winning</p>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src="../public/public/hero-image.png" />
            </div>
            </div>
        </>
    )
}

export default Hero;