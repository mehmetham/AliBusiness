import SocialMedia from "./socialMedia";

export default function Footer() {
    return (
        <footer class="footer__section">
            <div class="container-fluid">
                <div class="main__footer">
                    <div class="row">
                        <div class="col-lg-2 col-md-6">
                            <div class="footer__widget">
                                <div class="footer__widget--inner">
                                    <a class="footer__logo" href="index.html"><img src="/assets/img/logo/nav-log.png" alt="footer-logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="footer__widget">
                                <ul class="footer__widget--menu footer__widget--inner d-flex justify-content-between">
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Fritöz Yağı Filtreleme</a></li>
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Kesici ve Dilimleyiciler</a></li>
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Kurutma, Parlatma ve Hijyen</a></li>
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Paketleme</a></li>
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Et Makinaları</a></li>
                                    <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="/">Yer Filtreleri ve Yağ Tutucular </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer__widget">
                                <div class="footer__social">
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom text-center">
                    <p class="copyright__content">Copyright © 2024 <a class="copyright__content--link" href="/">Ali's Business</a>. All Rights Reserved. Design By <a href="https://www.yeyu.co">yeyu</a></p>
                </div>
            </div>
        </footer>
    );
  }
  