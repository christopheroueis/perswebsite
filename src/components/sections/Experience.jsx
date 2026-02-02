import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../../data/experience';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDguNCAx Mi41IDI4LjUgMTIuNSAyOC41UzI1IDIwLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCAwIDEyLjUgMHptMCAxN2MtMi41IDAtNC41LTItNC41LTQuNXMyLTQuNSA0LjUtNC41IDQuNSAyIDQuNSA0LjUtMiA0LjUtNC41IDQuNXoiIGZpbGw9IiNkYzI2MjYiLz48L3N2Zz4=',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDguNCAxMi41IDI4LjUgMTIuNSAyOC41UzI1IDIwLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCAwIDEyLjUgMHptMCAxN2MtMi41IDAtNC41LTItNC41LTQuNXMyLTQuNSA0LjUtNC41IDQuNSAyIDQuNSA0LjUtMiA0LjUtNC41IDQuNXoiIGZpbGw9IiNkYzI2MjYiLz48L3N2Zz4=',
    shadowUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSBjeD0iMjAuNSIgY3k9IjM4IiByeD0iMTAiIHJ5PSIzIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==',
});

// Component to fly to selected location
function MapController({ center, zoom }) {
    const map = useMap();
    React.useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, { duration: 1.5 });
        }
    }, [center, zoom, map]);
    return null;
}

export const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [mapCenter, setMapCenter] = useState([20, 0]);
    const [mapZoom, setMapZoom] = useState(2);
    const cardRefs = React.useRef({});

    const handleMarkerClick = (exp) => {
        setSelectedExperience(exp);
        setMapCenter([exp.coordinates.lat, exp.coordinates.lng]);
        setMapZoom(6);

        // Scroll to the selected card
        setTimeout(() => {
            cardRefs.current[exp.id]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 100);
    };

    const handleCardClick = (exp) => {
        setSelectedExperience(exp);
        setMapCenter([exp.coordinates.lat, exp.coordinates.lng]);
        setMapZoom(6);
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Section id="experience">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Professional <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Click any location on the map to explore my professional journey
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Interactive Map */}
                    <div className="order-2 lg:order-1">
                        <div className="rounded-xl overflow-hidden border-2 border-gray-800 shadow-xl h-[500px] lg:h-[600px]">
                            <MapContainer
                                center={mapCenter}
                                zoom={mapZoom}
                                style={{ height: '100%', width: '100%', background: '#0a0a0a' }}
                                zoomControl={true}
                            >
                                <MapController center={mapCenter} zoom={mapZoom} />
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                />
                                {experience.map((exp) => (
                                    <Marker
                                        key={exp.id}
                                        position={[exp.coordinates.lat, exp.coordinates.lng]}
                                        eventHandlers={{
                                            click: () => handleMarkerClick(exp),
                                        }}
                                    >
                                        <Popup>
                                            <div className="text-sm">
                                                <div className="font-bold text-deep-red">{exp.organization}</div>
                                                <div className="text-gray-700">{exp.title}</div>
                                                <div className="text-gray-500 text-xs mt-1">{exp.location}</div>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>

                    {/* Experience List */}
                    <div className="order-1 lg:order-2 space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                        {experience.map((exp, index) => {
                            const isSelected = selectedExperience?.id === exp.id;
                            const isExpanded = expandedId === exp.id;

                            return (
                                <motion.div
                                    key={exp.id}
                                    ref={(el) => (cardRefs.current[exp.id] = el)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleCardClick(exp)}
                                    className={`cursor-pointer bg-gradient-to-br from-gray-900 to-black border rounded-xl p-4 transition-all duration-300 ${isSelected
                                            ? 'border-deep-red shadow-lg shadow-deep-red/20 scale-[1.02]'
                                            : 'border-gray-800 hover:border-gray-700'
                                        }`}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-10 h-10 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                                                <img
                                                    src={`/${exp.logo}`}
                                                    alt={exp.organization}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-white">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-xs text-gray-400">{exp.organization}</p>
                                                {exp.status === 'incoming' && (
                                                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-deep-red/20 text-deep-red border border-deep-red/30">
                                                        Incoming
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expand Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleExpand(exp.id);
                                            }}
                                            className="p-2 rounded-lg bg-gray-800 hover:bg-deep-red/20 text-gray-400 hover:text-deep-red transition-colors"
                                        >
                                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                    </div>

                                    {/* Location & Period */}
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={12} />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 border-t border-gray-800 space-y-2">
                                                    <p className="text-sm text-gray-300">{exp.description}</p>
                                                    {exp.highlights && exp.highlights.length > 0 && (
                                                        <ul className="space-y-1">
                                                            {exp.highlights.map((highlight, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                                                                    <span className="text-deep-red mt-0.5">▸</span>
                                                                    <span>{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {exp.skills && (
                                                        <div className="text-xs">
                                                            <span className="text-gray-500 font-medium">Skills: </span>
                                                            <span className="text-gray-400">{exp.skills}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: #1a1a1a;
          color: #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 3px 14px rgba(0,0,0,0.4);
        }
        .leaflet-popup-tip {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ef4444;
        }
      `}</style>
        </Section>
    );
};
