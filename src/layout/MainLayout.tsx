import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "220px", background: "#111", color: "#fff", padding: "1rem" }}>
        <h3>ABANTE</h3>
        <nav>
          <div>Dashboard</div>
          <div>Projects</div>
          <div>Costs</div>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
