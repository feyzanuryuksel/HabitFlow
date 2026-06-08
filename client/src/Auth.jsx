import { useState } from 'react';
import axios from 'axios';
import { 
  FiMail, FiLock, FiUser, FiArrowRight, 
  FiCheckCircle, FiAlertCircle, FiInfo 
} from 'react-icons/fi';
import { FaBrain, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

import userAvatar from './44.png'; 

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/auth";

  // Şifre Kontrol Fonksiyonu (Regex)
  const validatePassword = (pass) => {
    // En az 1 harf, 1 rakam ve 1 noktalama işareti/özel karakter
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,;:])[A-Za-z\d@$!%*?&.,;:]{6,}$/;
    return regex.test(pass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // Kayıt olurken şifre gücünü kontrol et
    if (!isLogin && !validatePassword(password)) {
      setMessage({ 
        text: "Şifre en az bir harf, bir rakam ve bir noktalama işareti içermelidir (En az 6 karakter).", 
        type: "error" 
      });
      return;
    }

    setIsLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        setMessage({ text: "Giriş Başarılı!", type: "success" });
        setTimeout(() => onLogin(res.data), 1500);
      } else {
        await axios.post(`${API_URL}/register`, { username, email, password });
        setMessage({ text: "Kayıt Başarılı! Giriş yapabilirsiniz.", type: "success" });
        setTimeout(() => setIsLogin(true), 2000);
      }
    } catch (err) {
      setMessage({ text: err.response?.data || "Hata oluştu.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.logo}>
            <FaBrain size={40} color="#6366f1" />
            <span style={styles.logoText}>HabitFlow</span>
          </div>
          <h1 style={styles.heroTitle}>Alışkanlıklarını <span style={styles.gradientText}>Güçlendir</span></h1>
          <p style={styles.heroSubtitle}>Hedeflerine ulaşman için ihtiyacın olan tüm araçlar bir arada.</p>
          <div style={styles.features}>
            <div style={styles.featureItem}><FaChartLine size={20} color="#6366f1" /><span>İlerlemeni Takip Et</span></div>
            <div style={styles.featureItem}><FaCalendarCheck size={20} color="#6366f1" /><span>Günlük Hatırlatıcılar</span></div>
          </div>
        </div>
      </div>

      <div style={styles.authSection}>
        <div style={styles.authCard}>
          <div style={styles.authHeader}>
            <h2 style={styles.authTitle}>{isLogin ? "Hoş Geldiniz" : "Hesap Oluşturun"}</h2>
            <p style={styles.authSubtitle}>{isLogin ? "Devam etmek için giriş yapın" : "Yeni bir başlangıç yapın"}</p>
          </div>

          {message.text && (
            <div style={{...styles.message, backgroundColor: message.type === 'success' ? '#ecfdf5' : '#fef2f2', color: message.type === 'success' ? '#065f46' : '#991b1b', borderColor: message.type === 'success' ? '#34d399' : '#f87171'}}>
              {message.type === 'success' ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
              <span style={{fontSize: '13px'}}>{message.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <div style={styles.inputGroup}>
                <FiUser style={styles.inputIcon} size={18} color="#9ca3af" />
                <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />
              </div>
            )}
            <div style={styles.inputGroup}>
              <FiMail style={styles.inputIcon} size={18} color="#9ca3af" />
              <input type="email" placeholder="Email Adresi" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <FiLock style={styles.inputIcon} size={18} color="#9ca3af" />
              <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
            </div>

            {!isLogin && (
              <p style={{fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px'}}>
                <FiInfo size={14}/> Şifre: En az 1 harf, 1 rakam ve 1 noktalama içermeli.
              </p>
            )}

            <button type="submit" disabled={isLoading} style={{...styles.submitButton, opacity: isLoading ? 0.7 : 1}}>
              {isLoading ? "İşleniyor..." : <>{isLogin ? "Giriş Yap" : "Hesap Oluştur"} <FiArrowRight /></>}
            </button>
          </form>

          <div style={styles.switchMode}>
            <p style={styles.switchModeText}>{isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}</p>
            <button onClick={() => { setIsLogin(!isLogin); setMessage({text: "", type: ""}); }} style={styles.switchModeButton}>
              {isLogin ? "Ücretsiz Kaydol" : "Giriş Yap"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stil objesi
const styles = {
  container: { display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' },
  heroSection: { flex: 1, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' },
  heroContent: { maxWidth: '500px', color: 'white' },
  logo: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' },
  logoText: { fontSize: '24px', fontWeight: 'bold' },
  heroTitle: { fontSize: '48px', fontWeight: '800', marginBottom: '20px' },
  gradientText: { background: 'linear-gradient(135deg, #f6d5f7 0%, #fbe9d7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSubtitle: { fontSize: '18px', marginBottom: '40px', opacity: 0.9 },
  features: { display: 'flex', flexDirection: 'column', gap: '15px' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '12px' },
  authSection: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: '#f9fafb' },
  authCard: { maxWidth: '400px', width: '100%', padding: '40px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' },
  authHeader: { textAlign: 'center', marginBottom: '30px' },
  authTitle: { fontSize: '28px', fontWeight: '700', color: '#111827' },
  authSubtitle: { fontSize: '14px', color: '#6b7280' },
  message: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '8px', marginBottom: '20px', border: '1px solid' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { position: 'relative', display: 'flex', alignItems: 'center' },
  inputIcon: { position: 'absolute', left: '12px' },
  input: { width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none' },
  submitButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  switchMode: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px' },
  switchModeText: { fontSize: '14px', color: '#6b7280' },
  switchModeButton: { background: 'none', border: 'none', color: '#6366f1', fontWeight: '600', cursor: 'pointer' }
};