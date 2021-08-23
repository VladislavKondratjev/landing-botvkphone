import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
        <ul className="footer__contacts">
            <li>Контакты: <a href="https://t.me/dat_sup" className="footer__contact">@dat_sup</a></li>
        </ul>
      <a className="footer__contact_logo" href="https://freekassa.ru/" target="__blank">
        <img
          className="footer__logo"
          src="//cdn.freekassa.ru/banners/big-dark-1.png"
        />
      </a>
    </section>
  );
}
