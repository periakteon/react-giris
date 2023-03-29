import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"

// oluşturulan App.js'in import edildiği kısım
import App from './App';

// App.js'in, indirilmiş olan React ve ReactDOM üzerinden render edildiğini belirten kısım. Aşağıda görüldüğü üzere yalnızca "App" render ediliyor
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
