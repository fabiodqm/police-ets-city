export default function Home() {
  return (
    <main className="container">
      <aside className="sidebar">
        <div className="logo-box">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div>
            <h1>Polícia - ET's City</h1>
            <span>Sistema interno operacional</span>
          </div>
        </div>

        <nav className="menu">
          <button>Início</button>
          <button>Hierarquia</button>
          <button>Medalhas</button>
          <button>Cursos</button>
          <button>Código Penal</button>
          <button>Exonerações</button>
          <button>Advertências</button>
          <button>Oficiais</button>
        </nav>
      </aside>

      <section className="content">
        <div className="topbar">
          <div className="profile">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=ET"
              alt="Perfil"
            />

            <div className="dropdown">
              <strong>Admin Geral</strong>
              <span>@admin</span>

              <div className="line"></div>

              <button>Meus dados</button>
              <button>Minhas medalhas</button>
              <button>Meus cursos</button>
              <button>Sair</button>
            </div>
          </div>
        </div>

        <div className="page-card">
          <h2>Página Inicial</h2>
          <p>Comunicados oficiais e destaques da corporação.</p>
        </div>
      </section>
    </main>
  );
}