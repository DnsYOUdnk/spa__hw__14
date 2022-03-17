function Footer () {
    this.create = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.innerHTML = `
                            <div class="container">
                                <div class="footer__wrapper">
                                    <div class="footer__copy">
                                        <span>&copy; dnsYOUdnk-2022</span>
                                    </div>
                                    <div class="footer__social">
                                        <a target="_blanc" href="https://www.instagram.com/"><img src="../image/inst.png"></a>
                                        <a target="_blanc" href="https://www.facebook.com/"><img src="../image/facebook.png"></a>
                                        <a target="_blanc" href="https://www.linkedin.com/"><img src="../image/link.png"></a>
                                    </div>
                                </div>
                            </div>
                         `
        return footer
    }

    this.init = () => {
        return this.create()
    }
}

const footer = new Footer().init()

export default footer