import { useEffect, useState } from 'react';
import { Lock, Flame, Calendar, Heart, Film, Shield, Instagram, Play } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load custom font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
        <div className="animate-pulse">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-20 mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Instagram className="w-8 h-8 text-white mr-3" />
              <span className="text-2xl font-bold text-white">@acervodelaz</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Acesso Exclusivo
              </span>
              <br />
              <span className="text-4xl sm:text-5xl">aos Meus Vídeos</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-purple-100">
              Entre no clubinho fechado e tenha acesso aos vídeos mais ousados e sensuais que não estão em nenhum outro lugar
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6">
              <a href="https://ig.me/m/privadodelaz">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                  <span className="relative z-10 flex items-center">
                    <Instagram className="w-5 h-5 mr-2" />
                    Tenha acesso por apenas R$30
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </a>

              <div className="text-center">
                <p className="text-purple-100 text-lg mb-2">
                  📱 <strong>Como ter acesso:</strong>
                </p>
                <p className="text-white font-semibold text-xl">
                  Mande "<span className="text-pink-300">Quero entrar no privado</span>" no @privadodelaz ou @acervodelaz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Por que você vai amar
            </h2>
            <p className="text-lg leading-8 text-purple-100">
              Todas as vantagens de estar no grupo VIP
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            {/* Benefit 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Lock className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Acesso Exclusivo</h3>
                <p className="text-purple-100 leading-7">
                  Vídeos que não estão em nenhum outro lugar. Conteúdo feito só para quem está dentro do "clubinho fechado".
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Flame className="h-12 w-12 text-orange-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Vídeos Mais Ousados</h3>
                <p className="text-purple-100 leading-7">
                  Dancinhas mais provocantes, com um toque adulto. Videos exclusivos que não posto no perfil aberto.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Calendar className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Conteúdo Frequente</h3>
                <p className="text-purple-100 leading-7">
                  Vídeos novos toda semana com estilos diferentes, fotos de todos os tipos e stories exclusivos.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Heart className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Mais Proximidade</h3>
                <p className="text-purple-100 leading-7">
                  Seguidores privados têm prioridade nas DMs. Conexão direta comigo!
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Film className="h-12 w-12 text-orange-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Zero Censura</h3>
                <p className="text-purple-100 leading-7">
                  Videos e fotos totalmente exclusivas com um toque a mais!
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <Shield className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Comunidade Seletiva</h3>
                <p className="text-purple-100 leading-7">
                  Só entra quem realmente valoriza o conteúdo. Espaço privado, sem julgamentos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Pronto para entrar?
            </h2>
            <p className="text-xl leading-8 text-purple-100 mb-10">
              Não perca mais tempo. Acesse agora os vídeos exclusivos que você sempre quis ver.
            </p>

            <div className="space-y-6">
              <a href="https://ig.me/m/privadodelaz">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                  <span className="relative z-10 flex items-center justify-center">
                    <Instagram className="w-6 h-6 mr-3" />
                    Enviar "Quero entrar no privado"
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </a>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <p className="text-white text-lg font-semibold mb-2">
                  💬 Para ter acesso:
                </p>
                <p className="text-purple-100 text-base mb-3">
                  1. Vai no Instagram @acervodelaz
                </p>
                <p className="text-purple-100 text-base mb-3">
                  2. Manda: "<span className="text-pink-300 font-semibold">Quero entrar no privado</span>"
                </p>
                <p className="text-purple-100 text-base mb-3">
                  3. Faça o pix para a chave que vai ser enviada
                </p>
                <p className="text-purple-100 text-base">
                  4. Tem acesso imediato ao instagram privado
                </p>
              </div>

              <p className="text-sm text-purple-200">
                Acesso instantâneo • Seguro e discreto • Comunidade exclusiva
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-6 h-6 text-pink-400 mr-2" />
              <span className="text-lg font-semibold text-white">@acervodelaz</span>
            </div>
            <p className="text-purple-200">
              © 2025 @acervodelaz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
