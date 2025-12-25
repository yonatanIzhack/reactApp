import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">יהלומי יוקרה</h1>
          <nav className="nav">
            <a href="#about">אודות</a>
            <a href="#gallery">גלריה</a>
            <a href="#contact">יצירת קשר</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">יהלומים יוקרתיים במיטב המסורת</h2>
          <p className="hero-subtitle">איכות, יופי ומומחיות של עשרות שנים</p>
          <a href="#contact" className="cta-button">צרו קשר</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">אודותינו</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                חנות יהלומי יוקרה היא שם נרדף לאיכות, יופי ומומחיות בעולם היהלומים. 
                עם ניסיון של עשרות שנים בתחום, אנו מתמחים ביצירת תכשיטים ייחודיים 
                ומעוצבים במיוחד עבור הלקוחות שלנו.
              </p>
              <p>
                כל יהלום שאנו מציעים עובר בדיקה קפדנית ומגיע עם תעודת אימות. 
                אנו מתחייבים לאיכות הגבוהה ביותר ולשירות אישי ומקצועי לכל לקוח.
              </p>
              <div className="features">
                <div className="feature">
                  <h3>איכות מובטחת</h3>
                  <p>כל יהלום עם תעודת אימות GIA</p>
                </div>
                <div className="feature">
                  <h3>עיצוב מותאם אישית</h3>
                  <p>תכשיטים מעוצבים במיוחד עבורך</p>
                </div>
                <div className="feature">
                  <h3>שירות מקצועי</h3>
                  <p>ייעוץ אישי ומומחיות של עשרות שנים</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">גלריה</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image diamond-1"></div>
              <h3>טבעות אירוסין</h3>
              <p>עיצובים קלאסיים ומודרניים</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image diamond-2"></div>
              <h3>עגילים יוקרתיים</h3>
              <p>מגוון עיצובים אלגנטיים</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image diamond-3"></div>
              <h3>שרשראות</h3>
              <p>יצירות אמנות ייחודיות</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image diamond-4"></div>
              <h3>צמידים</h3>
              <p>עיצובים מעודנים ומרשימים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">יצירת קשר</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>כתובת</h3>
                <p>רחוב רוטשילד 15, תל אביב</p>
              </div>
              <div className="contact-item">
                <h3>טלפון</h3>
                <p>03-1234567</p>
              </div>
              <div className="contact-item">
                <h3>אימייל</h3>
                <p>info@diamonds-luxury.co.il</p>
              </div>
              <div className="contact-item">
                <h3>שעות פעילות</h3>
                <p>ראשון - חמישי: 10:00 - 19:00</p>
                <p>שישי: 10:00 - 14:00</p>
                <p>שבת: סגור</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>שלחו לנו הודעה</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="שם מלא" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="אימייל" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="טלפון" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="הודעה" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">שלח</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 יהלומי יוקרה. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
