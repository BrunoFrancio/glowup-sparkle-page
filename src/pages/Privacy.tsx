import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Política de Privacidade
          </h1>

          <div className="prose prose-neutral max-w-none">
            <p>
              Este documento é um <strong>placeholder</strong>. Substitua pela Política de Privacidade oficial
              (LGPD) antes de publicar em produção.
            </p>

            <h2>1. Dados coletados</h2>
            <p>
              Descreva quais dados são coletados (ex.: email na lista de espera) e para qual finalidade.
            </p>

            <h2>2. Base legal e consentimento</h2>
            <p>
              Indique a base legal (consentimento, execução de contrato etc.) e como o usuário pode revogar.
            </p>

            <h2>3. Contato</h2>
            <p>
              Em caso de dúvidas, entre em contato via <a href="mailto:contato@glowup.app">contato@glowup.app</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;