import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="page-content d-flex flex-wrap">
                <div className="footer__col">
                    <div className="title">
                        Техподдержка:
                    </div>
                    <div className="info">
                        <a href="tel:88005507094">8 (800) 550-70-94</a>
                    </div>
                </div>
                <div className="footer__col">
                    <div className="title">
                        Режим работы:
                    </div>
                    <div className="info">
                        Ежедневно, 9:00–18:00
                    </div>
                </div>
                <div className="footer__col">
                    <div className="title">
                        Адрес:
                    </div>
                    <div className="info">
                        г. Симферополь, ул. Павленко, 2А
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;