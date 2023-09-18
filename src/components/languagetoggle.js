import React, { useEffect, useState } from "react";

const SelectedLanguage = () => {
  // 1. Inicializa o estado 'language' com o valor armazenado em localStorage ou 'null' se não houver nada.
  const [language, setLanguage] = useState(localStorage.getItem("selectedLanguage"));

  // 2. Define a função 'toggleLanguage' que é chamada quando o elemento é clicado.
  const toggleLanguage = () => {
    // 3. Alterna entre os valores 'pt' (português) e 'en' (inglês) e atualiza o estado 'language'.
    setLanguage(language === "pt" ? "en" : "pt");
    // 4. Recarrega a página quando o botão for clicado.
    window.location.reload();
  };

  // 5. O useEffect é usado para realizar ações após a renderização do componente.
  useEffect(() => {
    // 6. Salva o valor de 'language' em localStorage sempre que ele mudar.
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  // 7. Renderiza um elemento <div> com a classe "nav_ac" que chama a função 'toggleLanguage' quando clicado.
  return (
    <div className="nav_ac" onClick={toggleLanguage}>
      {/* 9. Renderiza o valor de 'language' dentro do componente */}
      {language}
    </div>
  );
};

export default SelectedLanguage;
