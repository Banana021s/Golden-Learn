import "./InstagramSocial.css"

import instagram from "../../img/instagram/instagram.png"
import { Instagram } from 'iconsax-react';
import ContainerCard from './../ContainerCard/ContainerCard';

const InstagramSocial = () => {
  return (
    <section className="instagram-social">
        <ContainerCard>
            <div className="instagram-social-box">
                <div className="instagram-social-logo">
                    <img src={ instagram } alt="" />
                </div>
                <div className="instagram-social-text">
                    <h1 className="instagram-social-title">Follow us on <span>Instagram</span></h1>
                    <p className="instagram-social-desc">
                        we are spenting lots of time on our social medias
                        <br/>
                        we are trying to make your life easier with our useful posts
                    </p>
                    <button className="instagram-social-btn">
                        <Instagram color="var(--black)" variant="Broken"/>    
                        Let's Follow
                    </button>
                </div>
            </div>
        </ContainerCard>
    </section>
  )
}

export default InstagramSocial