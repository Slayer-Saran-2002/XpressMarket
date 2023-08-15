import "./Banner.scss";
import Bannerimg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Welcome</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Vero autem quaerat temporibus voluptates iure quia enim,
                         quae doloremque ut voluptatem deleniti rem accusamus? Illum, officiis.
                    </p>
                    <div className="ctas">
                        <div className="cta">Read More</div>
                        <div className="cta-v2">Shop Now</div>
                    </div>
                </div>
                    <img src={Bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
