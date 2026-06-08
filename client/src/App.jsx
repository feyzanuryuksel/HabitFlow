import { useState, useEffect } from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard';
import HabitDetail from './HabitDetail';
import Statistics from './Statistics';

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedHabit, setSelectedHabit] = useState(null);

  // --- DARK MODE ---
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // --- FONKSİYONLAR ---
  const handleLogout = () => {
    setUser(null);
    setCurrentView('dashboard');
    setSelectedHabit(null);
  };

  const goToHabitDetail = (habit) => {
    setSelectedHabit(habit);
    setCurrentView('detail');
  };

  // --- ANA RENDER MANTIĞI ---
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-main)', 
      minHeight: '100vh', 
      color: 'var(--text-main)', 
      transition: 'all 0.3s ease' 
    }}>
      {!user ? (
        // Kullanıcı giriş yapmamışsa Auth ekranını göster
        <Auth onLogin={(userData) => setUser(userData)} />
      ) : (
        // Kullanıcı giriş yapmışsa ana uygulama yapısını göster
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '40px' }}>
          
          {/* NAVBAR */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px 20px', 
            backgroundColor: 'var(--bg-card)', 
            borderBottom: '2px solid var(--border-color)', 
            marginBottom: '20px' 
          }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={() => setCurrentView('dashboard')} 
                style={{ 
                  padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                  background: currentView === 'dashboard' ? (theme === 'dark' ? '#374151' : '#e2e8f0') : 'transparent', 
                  color: 'var(--text-main)', fontWeight: '600'
                }}>
                🏠 Ana Sayfa
              </button>
              <button 
                onClick={() => setCurrentView('statistics')} 
                style={{ 
                  padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                  background: currentView === 'statistics' ? (theme === 'dark' ? '#374151' : '#e2e8f0') : 'transparent', 
                  color: 'var(--text-main)', fontWeight: '600'
                }}>
                📊 İstatistikler
              </button>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
               <button onClick={toggleTheme} style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                 {theme === 'light' ? '☀️' : '🌙'}
               </button>
               <button onClick={handleLogout} style={{ padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', background: '#ef4444', color: 'white', fontWeight: '600' }}>
                 Çıkış Yap
               </button>
            </div>
          </div>

          {/* SAYFA İÇERİKLERİ (BOŞ SAYFA SORUNUNU ÇÖZEN KISIM) */}
          <div style={{ padding: '0 20px' }}>
            {/* 1. Dashboard Görünümü */}
            {currentView === 'dashboard' && (
              <Dashboard user={user} onSelectHabit={goToHabitDetail} />
            )}
            
            {/* 2. İstatistik Görünümü */}
            {currentView === 'statistics' && (
              <Statistics user={user} />
            )}

            {/* 3. Detay Görünümü */}
            {currentView === 'detail' && selectedHabit && (
              <HabitDetail 
                habit={selectedHabit} 
                onBack={() => setCurrentView('dashboard')} 
              />
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;