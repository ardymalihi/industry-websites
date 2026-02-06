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
        <div className="w-full relative">
            {/* Fallback Content: Show while loading or if failed */}
            {(!isLoaded || hasError) && children && (
                <div className={isLoaded ? 'hidden' : 'block'}>
                    {children}
                </div>
            )}

            <div
                id="service-booking-widget"
                data-user-id={userId}
                data-width="100%"
                data-height="600px"
                className={`w-full ${isLoaded && !hasError ? 'min-h-[600px] opacity-100' : 'h-0 opacity-0'} transition-opacity duration-500`}
            />
        </div>
    );
}
