import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There,
          <br/>
          <span>I'm Anandu!</span>
          </h1>
          <div className="awards">
            <h2>Top Rated Designer</h2>
            <p>Lorem ipum dolor sit amet,consectetur adipisicing elit.</p>
            <div className="awardList">
              <img src="/award1.png" alt=""/>
              <img src="/award2.png" alt=""/>
              <img src="/award3.png" alt=""/>
            </div>
            </div>
      </div>

    <a href="#services">
      <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
        <path 
        d="M5 9C5 5.13402 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 12.866 15.866 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.6569 4.63214 13.214 5.73223 14.2678C5.8945 14.4241 6 14.6464 6 14.8787C6 15.111 5.8945 15.3333 5.73223 15.4896C4.63214 16.5434 4 18.1005 4 19.7574C4 21.4143 4.63214 22.9714 5.73223 24C5.8945 24.1563 6 24.3786 6 24.6109C6 24.8431 5.8945 25.0654 5.73223 25.2217C4.63214 26.2755 4 27.8326 4 29.4896C4 31.1465 4.63214 32.7036 5.73223 33.7322C6.83232 34.7609 8.38944 35.393 10.0464 35.393C11.7034 35.393 13.2605 34.7609 14.2891 33.7322C15.3177 32.7036 15.9498 31.1465 15.9498 29.4896C15.9498 29.2573 16.0553 29.035 16.2176 28.8787C16.3799 28.7224 16.586 28.6464 16.8086"
        stroke="white"
        strokeWidth="1"
        />
        <path
        d="M12 5V8"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        />
      </svg>
    </a>
      <div className="hSection right"></div>
      <div className="follow">
        <a href="/">
        <img src="/instagram.png" alt=""/>
        </a>
        <a href="/">
        <img src="/facebook.png" alt=""/>
        </a>
        <a href="/">
        <img src="/youtube.png" alt=""/>
        </a>
      </div>
      <Speech/>
      <div className="certificate">
        <img src="/certificate.png" alt=""/> 
        LMA Certificate
        <br />
        PROFESSIONAL
        <br />
        UI DESIGNER 
      </div>
      <a href="/#conatct" className="contactLink"> 
      <div className="contactButton">
        <svg viewBox=" 0 0 200 200" width="150" height="150">
          <circle cx="100" cy="100" r="90" fill="pink" />
          <path 
          id="innerCirclePath"
          fill="none"
          d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" 
          />
          <text className="circleText">
            <textPath href="#innerCirclePath">Hire Now -</textPath>
          </text>
          <text className="circleText">
            <textPath href="#innerCirclePath" startOffset="40%">Contact Me -</textPath>
          </text>
        </svg>
        <div className="arrow">
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="black" strokeWidth="2" >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 6 18 6 18 15" />
          </svg>
        </div>
      </div>
      </a>
    </div>
  );
}
export default Hero;