import React from 'react';

/**
 * RealTimeTracking Component
 * Displays the real-time container tracking section from cargonex.io as a static image
 */
export default function RealTimeTracking() {
    return (
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
                src="/real-time-tracking.png"
                alt="מעקב מכולות בזמן אמת - Real-time Container Tracking"
                className="w-full h-auto object-cover"
                loading="lazy"
            />

            {/* Optional overlay gradient for aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
        </div>
    );
}
