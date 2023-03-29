function App() {

  // return'ün üzerinde değişken tanımlanabilir:

  const forHtml = "HTML içinde kullanmak üzere oluşturulmuş bir değişken"
  return (
    <div>
      {/* Bu bir yorum satırıdır */}
      {/* fonksiyon içerisinde tanımlanmış olan değişkenlere süslü parantezler kullanarak ulaşılabilir. Aşağıdaki gibi: */}
      {forHtml}
    </div>
  );
}

export default App;
