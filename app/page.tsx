'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Calendar, Clock, TrendingUp, LineChart, PieChart, BarChart3, Youtube, Facebook, Search, MessageCircle, Brain, Filter, Zap, ChartBar } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#323B92]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#434343] leading-tight">
              Transforme seu Consultório em uma{' '}
              <span className="text-[#323B92]">Máquina de Crescimento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#434343]/80 max-w-3xl mx-auto">
              Especialistas em tráfego pago para dentistas. Aumente sua base de pacientes
              com estratégias personalizadas e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                size="lg"
                className="bg-[#323B92] hover:bg-[#323B92]/90 text-white px-8 py-6 text-lg rounded-full"
              >
                Agende uma Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2 text-[#434343]/70">
                <span className="text-sm">Mais de 500 clínicas atendidas</span>
                <div className="h-4 w-[1px] bg-[#434343]/20" />
                <span className="text-sm">ROI médio de 300%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 lg:px-8 bg-[#D9D9D9]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#434343] mb-6">
              Enfrente os Desafios do seu Consultório
            </h2>
            <p className="text-lg text-[#434343]/80 max-w-2xl mx-auto">
              Identificamos os principais obstáculos que impedem o crescimento do seu consultório 
              e desenvolvemos soluções específicas para superá-los.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Poucos Pacientes Novos",
                description: "Média de apenas 8-12 novos pacientes por mês, muito abaixo do potencial real.",
                stat: "73%",
                statText: "das clínicas enfrentam esse problema"
              },
              {
                icon: Target,
                title: "Alto Custo por Lead",
                description: "Desperdício de verba com leads não qualificados e campanhas mal direcionadas.",
                stat: "R$180",
                statText: "custo médio por lead sem otimização"
              },
              {
                icon: Calendar,
                title: "Agenda Inconsistente",
                description: "Oscilação entre períodos lotados e horários ociosos na agenda.",
                stat: "40%",
                statText: "de horários livres em média"
              },
              {
                icon: Clock,
                title: "Tempo Desperdiçado",
                description: "Horas perdidas com gestão manual de campanhas e leads.",
                stat: "15h",
                statText: "gastas por semana em média"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#323B92]/5"
              >
                <div className="h-12 w-12 bg-[#323B92]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-[#323B92]" />
                </div>
                <h3 className="text-xl font-semibold text-[#434343] mb-3">{item.title}</h3>
                <p className="text-[#434343]/70 mb-6">{item.description}</p>
                <div className="border-t border-[#D9D9D9] pt-4">
                  <p className="text-2xl font-bold text-[#323B92]">{item.stat}</p>
                  <p className="text-sm text-[#434343]/60">{item.statText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#434343] mb-6">
              O Potencial do Mercado Odontológico
            </h2>
            <p className="text-lg text-[#434343]/80 max-w-2xl mx-auto">
              O setor odontológico está em constante crescimento, oferecendo oportunidades 
              significativas para clínicas que sabem se posicionar digitalmente.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-[#323B92]/5">
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Crescimento do Mercado",
                      value: "15,7%",
                      description: "crescimento anual do setor"
                    },
                    {
                      icon: LineChart,
                      title: "Busca Online",
                      value: "850K+",
                      description: "buscas mensais por dentistas"
                    },
                    {
                      icon: PieChart,
                      title: "Potencial de Mercado",
                      value: "R$38Bi",
                      description: "valor do mercado em 2024"
                    },
                    {
                      icon: BarChart3,
                      title: "Conversão Digital",
                      value: "67%",
                      description: "pacientes buscam online"
                    }
                  ].map((stat, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-12 w-12 bg-[#323B92]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-[#323B92]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#434343] mb-1">{stat.title}</h3>
                        <p className="text-2xl font-bold text-[#323B92] mb-1">{stat.value}</p>
                        <p className="text-sm text-[#434343]/60">{stat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Growth Potential */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#323B92] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Potencial de Crescimento</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Novos Pacientes",
                    current: "12",
                    potential: "45+",
                    unit: "por mês"
                  },
                  {
                    title: "Custo por Lead",
                    current: "R$180",
                    potential: "R$65",
                    unit: "média"
                  },
                  {
                    title: "Taxa de Conversão",
                    current: "15%",
                    potential: "35%",
                    unit: "média"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 mb-1">{item.title}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-white/60">{item.current}</span>
                        <ArrowRight className="h-4 w-4 text-white/40" />
                        <span className="text-xl font-bold">{item.potential}</span>
                      </div>
                    </div>
                    <span className="text-sm text-white/60">{item.unit}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-8 bg-white text-[#323B92] hover:bg-white/90"
              >
                Descubra Seu Potencial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traffic Platforms Section */}
      <section className="py-24 px-4 lg:px-8 bg-[#D9D9D9]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#434343] mb-6">
              Presença Multi-Plataforma
            </h2>
            <p className="text-lg text-[#434343]/80 max-w-2xl mx-auto">
              Maximize sua presença online através das principais plataformas de mídia paga, 
              alcançando seus pacientes ideais onde eles estiverem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Google Ads",
                description: "Capture pacientes ativamente buscando por tratamentos dentários.",
                features: ["Anúncios de Pesquisa", "Display", "Performance Max"],
                stat: "78%",
                statText: "dos pacientes iniciam busca no Google"
              },
              {
                icon: Facebook,
                title: "Meta Ads",
                description: "Alcance pacientes em potencial no Facebook e Instagram.",
                features: ["Feed", "Stories", "Reels"],
                stat: "3.2x",
                statText: "maior engajamento"
              },
              {
                icon: Youtube,
                title: "YouTube Ads",
                description: "Construa autoridade com vídeos educativos e anúncios.",
                features: ["In-Stream", "Discovery", "Bumper"],
                stat: "85%",
                statText: "taxa de visualização"
              },
              {
                icon: MessageCircle,
                title: "Remarketing",
                description: "Reconquiste leads que já demonstraram interesse.",
                features: ["Multi-Canal", "Personalizado", "Automático"],
                stat: "40%",
                statText: "taxa de recuperação"
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#323B92]/5"
              >
                <div className="h-12 w-12 bg-[#323B92]/10 rounded-full flex items-center justify-center mb-6">
                  <platform.icon className="h-6 w-6 text-[#323B92]" />
                </div>
                <h3 className="text-xl font-semibold text-[#434343] mb-3">{platform.title}</h3>
                <p className="text-[#434343]/70 mb-4">{platform.description}</p>
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[#434343]/70 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#323B92]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#D9D9D9] pt-4">
                  <p className="text-2xl font-bold text-[#323B92]">{platform.stat}</p>
                  <p className="text-sm text-[#434343]/60">{platform.statText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Traffic Benefits Section */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#434343] mb-6">
              Tráfego Inteligente para Resultados Superiores
            </h2>
            <p className="text-lg text-[#434343]/80 max-w-2xl mx-auto">
              Nossa tecnologia proprietária otimiza cada aspecto das suas campanhas, 
              garantindo leads mais qualificados e maior retorno sobre o investimento.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Brain,
                  title: "Inteligência Artificial",
                  description: "Algoritmos avançados que aprendem com cada interação para otimizar suas campanhas em tempo real.",
                  features: [
                    "Análise preditiva de comportamento",
                    "Otimização automática de lances",
                    "Segmentação dinâmica de público"
                  ]
                },
                {
                  icon: Filter,
                  title: "Qualificação Avançada de Leads",
                  description: "Sistema inteligente que filtra e prioriza leads com maior potencial de conversão.",
                  features: [
                    "Score de qualificação em tempo real",
                    "Filtros personalizados por procedimento",
                    "Análise de intenção de compra"
                  ]
                },
                {
                  icon: Zap,
                  title: "Automação de Performance",
                  description: "Processos automatizados que maximizam o desempenho das suas campanhas.",
                  features: [
                    "Ajuste automático de orçamento",
                    "Otimização de palavras-chave",
                    "Teste A/B contínuo"
                  ]
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-[#323B92]/5"
                >
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 bg-[#323B92]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-[#323B92]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#434343] mb-3">{benefit.title}</h3>
                      <p className="text-[#434343]/70 mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature, i) => (
                          <li key={i} className="text-sm text-[#434343]/70 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#323B92]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Results Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#323B92] rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <ChartBar className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Resultados Comprovados</h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    label: "Redução no Custo por Lead",
                    value: "-45%",
                    description: "em média após 3 meses"
                  },
                  {
                    label: "Aumento na Taxa de Conversão",
                    value: "+85%",
                    description: "para leads qualificados"
                  },
                  {
                    label: "Economia em Investimento",
                    value: "R$2.5K",
                    description: "mensais em média"
                  },
                  {
                    label: "ROI Médio",
                    value: "300%",
                    description: "após otimização completa"
                  }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-6">
                    <p className="text-white/80 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold mb-1">{metric.value}</p>
                    <p className="text-sm text-white/60">{metric.description}</p>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full mt-8 bg-white text-[#323B92] hover:bg-white/90"
              >
                Solicite uma Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}