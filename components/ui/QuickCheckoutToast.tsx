"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "@/constants";
import { ShoppingBag, X, ExternalLink } from "lucide-react";
import Link from "next/link";

export function QuickCheckoutToast() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Initial appear delay
        const initialTimer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        let reOpenTimer: NodeJS.Timeout;
        if (!isVisible && hasInteracted) {
            reOpenTimer = setTimeout(() => {
                setIsVisible(true);
                // Reset interaction so it can be closed again
                setHasInteracted(false);
            }, 45000); // 45s
        }
        return () => clearTimeout(reOpenTimer);
    }, [isVisible, hasInteracted]);

    const handleClose = () => {
        setIsVisible(false);
        setHasInteracted(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed z-50 bottom-6 left-0 right-0 mx-auto w-[90%] max-w-sm md:mx-0 md:left-8 md:right-auto md:w-auto md:max-w-md"
                >
                    <div className="relative bg-[var(--color-indigo-deep)] text-[var(--color-cream-silk)] p-5 rounded-xl shadow-2xl border border-[var(--color-gold-muted)]/30 backdrop-blur-sm overflow-hidden">
                        {/* Glossy effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-muted)] to-transparent opacity-50" />

                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 p-1 text-[var(--color-cream-silk)]/60 hover:text-[var(--color-cream-silk)] transition-colors rounded-full hover:bg-white/10"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[var(--color-gold-muted)]/20 rounded-lg">
                                    <ShoppingBag size={20} className="text-[var(--color-gold-muted)]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm leading-tight text-white">Ready to simplify?</h3>
                                    <p className="text-xs text-[var(--color-cream-silk)]/80">Get your copy today.</p>
                                </div>
                            </div>

                            <Link
                                href={LINKS.lynk}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--color-gold-muted)] hover:bg-[#A88B6A] text-[var(--color-indigo-deep)] text-xs font-bold rounded-lg transition-all duration-200 shadow-sm active:scale-95"
                            >
                                <ExternalLink size={12} />
                                Get Your Copy
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
