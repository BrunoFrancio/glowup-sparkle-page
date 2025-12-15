import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Termos de Uso
          </h1>

          <div className="prose prose-neutral max-w-none">
            <p>
              Este documento é um <strong>placeholder</strong>. Substitua pelo texto oficial
              de Termos de Uso do GLOWUP antes de publicar em produção.
            </p>

            <h2>1. Aceitação</h2>
            <p>
              Ao acessar e utilizar o site/aplicativo, você concorda com estes Termos.
            </p>

            <h2>2. Uso do serviço</h2>
            <p>
              Descreva aqui o escopo do serviço, limitações, responsabilidades e regras.
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

export default Terms;