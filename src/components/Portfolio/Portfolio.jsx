import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import portfolio_data from '../../assets/portfolio_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="portfolio-title">
                <h1>My Portfolio</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="portfolio-container">
                {
                    portfolio_data.map((work, index) => {
                        return (
                            <a key={index} href={work.w_link} target="_blank"><img src={work.w_img} alt="Work Image" /></a>
                        )
                    })
                }
            </div>
            <div className="portfolio-show-more">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
    );
};

export default Portfolio;