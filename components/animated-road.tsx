"use client"

export function AnimatedRoad() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Inline keyframes for animation */}
      <style jsx>{`
        @keyframes moveRoadLines {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .road-lines-animate {
          animation: moveRoadLines 12s linear infinite;
        }
      `}</style>
      
      {/* Sky gradient - warm sunset colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-300 to-amber-500" />
      
      {/* Sun glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-yellow-100 blur-3xl opacity-90" />
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white blur-2xl opacity-95" />
      
      {/* Horizon glow */}
      <div className="absolute top-[40%] left-0 right-0 h-20 bg-gradient-to-b from-transparent via-amber-300/50 to-transparent blur-md" />
      
      {/* Ground/landscape */}
      <div className="absolute top-[45%] left-0 right-0 bottom-0 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800" />
      
      {/* Distant hills/mountains silhouette */}
      <div 
        className="absolute top-[38%] left-0 right-0 h-[15%] opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #92400e 20%, #78350f 40%, #92400e 60%, #78350f 80%, transparent 100%)',
          borderRadius: '100% 100% 0 0',
        }}
      />
      
      {/* Road - perspective trapezoid */}
      <div className="absolute top-[45%] left-0 right-0 bottom-0 flex justify-center overflow-hidden">
        <div 
          className="relative h-full w-full"
          style={{
            clipPath: 'polygon(50% 0%, 30% 100%, 70% 100%)',
            background: 'linear-gradient(to bottom, #4b5563 0%, #374151 50%, #1f2937 100%)',
          }}
        >
          {/* Road edge lines - left */}
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(49.2% 0%, 29% 100%, 31% 100%, 49.6% 0%)',
              background: '#fbbf24',
            }}
          />
          {/* Road edge lines - right */}
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(50.8% 0%, 69% 100%, 71% 100%, 50.4% 0%)',
              background: '#fbbf24',
            }}
          />
          
          {/* Center dashed line container - animated */}
          <div 
            className="absolute top-0 bottom-0 overflow-hidden"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
            }}
          >
            <div 
              className="road-lines-animate"
              style={{
                height: '200%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
              }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-yellow-400 w-full shrink-0"
                  style={{ 
                    height: `${Math.max(4, 2 + i * 1.5)}px`,
                    marginBottom: `${Math.max(8, 6 + i * 2)}px`,
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-100/10" />
    </div>
  )
}
