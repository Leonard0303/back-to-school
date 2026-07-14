export default function Footer() {
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1px solid #e8ecf4',
      padding: '28px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px',
          color: '#8a9ab8',
          lineHeight: 1.7,
          margin: '0 0 8px',
        }}>
          * Стоимость услуг указана с учётом НДС. Предложение действует для новых абонентов при подключении тарифного плана «Back to School». Акция ограничена по времени.
          Казахтелеком оставляет за собой право изменять условия акции без предварительного уведомления. Подробнее на сайте.
        </p>
        <p style={{
          fontSize: '11px',
          color: '#8a9ab8',
          lineHeight: 1.7,
          margin: '0 0 8px',
        }}>
          ** Стоимость модема/роутера не включена в абонентскую плату и оплачивается отдельно. Цена оборудования уточняется у менеджера при подключении.
          Доставка оборудования осуществляется курьерской службой в рабочие дни с 9:00 до 18:00.
        </p>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '8px',
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid #f0f3f9',
        }}>
          <span style={{ fontSize: '11px', color: '#aab4cc' }}>
            АО «Казахтелеком» | БИН 941240001585 | г. Алматы, ул. Богенбай батыра, 48
          </span>
          <span style={{ fontSize: '11px', color: '#aab4cc' }}>
            © 2024 Казахтелеком. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  )
}
