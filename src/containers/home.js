import globe from '../images/globe.png';
import mainImage from '../images/retro.png';

const Home = () => {
    return (
        <section id="about">
            <div class="container">
                <div id="name">
                    <h2 id="about-label">Software Engineer</h2>
                    <h1>Jessica Harriman</h1>
                </div>
                <div id="location">
                        <img src={globe} />
                        <h4>Melbourne, Australia</h4>
                </div>

                <p className="about">Welcome to my portfolio. I'm an aspiring software developer and UI designer, currently studying at Academy xi. When I'm not hard at work I'm cuddling with my dog, playing video games or (more often than not) a bit of both.</p>

                <p className="tech">HTML   ♥   CSS    ♥   JavaScript   ♥   React   ♥   Redux   ♥   Ruby   ♥   Rails   ♥   Firebase   ♥   GitHub   ♥   Chrome DevTools</p>
            </div>
            <div class="image-container">
                <img src={globe} id="sticker" />
                <img src={mainImage} id="main-image" />
            </div>
        </section>
    )
}

export default Home;