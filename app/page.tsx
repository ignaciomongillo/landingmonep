import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#093F59] text-[#D7CEB2] font-sans flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* 1. SECCIÓN DEL LOGO (FIX DE INFRAESTRUCTURA) */}
      <div className="relative w-72 h-32 mb-12 flex items-center justify-center">
        <Image 
          src="/logo-monep.png" 
          alt="MONEP Logo" 
          width={300}
          height={120}
          priority
          className="object-contain"
        />
      </div>

      {/* 2. CONTENIDO PRINCIPAL (DISEÑO Y MARKETING) */}
      <div className="max-w-4xl text-center z-10">
        {/* Lema de Misión Crítica */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase leading-[0.9]">
          Precisión cuando la <br />
          <span className="text-[#93A8AC] italic font-light lowercase">misión lo exige.</span>
        </h1>
        
        {/* Sectores de Impacto - Estrategia de Segmentación */}
        <p className="text-[#93A8AC] text-sm uppercase tracking-[0.4em] mb-8 opacity-70">
          Seguridad Aeroportuaria • Defensa • Emergencia
        </p>

        {/* Propuesta de Valor Solidez Operativa */}
        <p className="text-xl md:text-2xl text-[#93A8AC] font-light max-w-2xl mx-auto leading-relaxed border-t border-[#114B5F] pt-8">
          MONEP SpA — Infraestructura, soporte táctico y solidez operativa para escenarios de alta exigencia.
        </p>

        {/* 3. CALL TO ACTION (ESTRATEGIA DE CONVERSIÓN) */}
        <div className="mt-12">
          <button className="bg-[#FF4F1F] hover:bg-[#e6461c] text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl">
            Contactar Consultoría
          </button>
        </div>
      </div>

      {/* 4. ELEMENTO DE MARCA ABSTRACTO (DISEÑO DE AUTORIDAD) */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[#114B5F] text-[20vw] font-bold select-none pointer-events-none opacity-20">
        MONEP
      </div>

      {/* Footer Legal Sutil */}
      <footer className="absolute bottom-6 text-[#93A8AC] text-[10px] uppercase tracking-widest opacity-40">
        © 2026 MONEP SpA — Chile
      </footer>
    </main>
  )
} // build-v2
