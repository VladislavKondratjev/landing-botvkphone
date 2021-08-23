import "./Presentation.css";

export default function Presentation() {
  return (
    <section className="presentation">
      <article className="presentation__article">
        <h2 className="presentation__title">Получение SMS на номера более 150+ стран.</h2>
        <p className="presentation__subtitle">С помощью нашего сервиса можно получить код в SMS для, например, активации/регистрации аккаунта в социальной сети ВКонтакте.</p>
      </article>
      <article className="presentation__article">
        <h2 className="presentation__title">Вы платите только за сообщение.</h2>
        <p className="presentation__subtitle">Если номер не получил сообщение, деньги не взимаются.</p>
      </article>
    </section>
  );
}
