'use client';

import { useEffect, useState } from 'react';

interface BookingWidgetProps {
    userId: string;
    children?: React.ReactNode;
}

export function BookingWidget({ userId, children }: BookingWidgetProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Only run on client side
        const script = document.createElement('script');
        const baseUrl = process.env.NEXT_PUBLIC_WIDGET_BASE_URL || "http://localhost:3000";
        script.src = `${baseUrl}/service-booking-widget.js`;
        script.async = true;

        script.onload = () => {
            setIsLoaded(true);
        };

        script.onerror = () => {
            setHasError(true);
        };

        // Add script to the document
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full relative min-h-[400px]">
            {/* Fallback Content: Only show if an error occurred */}
            {hasError && children && (
                <div className="w-full animate-in fade-in duration-500">
                    {children}
                </div>
            )}

            <div
                id="service-booking-widget"
                data-user-id={userId}
                data-width="100%"
                data-height="600px"
                className={`w-full min-h-[600px] transition-opacity duration-1000 ${isLoaded && !hasError ? 'opacity-100' : hasError ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}
            />
        </div>
    );
}
