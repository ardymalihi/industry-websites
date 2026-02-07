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
                data-theme="dark"
                data-primary-color="#fbbf24"
                data-border-radius="12px"
                data-width="100%"
                data-height={hasError ? "auto" : "800px"}
                className={`w-full isolate bg-transparent relative z-20 ${hasError ? "" : "min-h-[800px]"}`}
            />
        </div>
    );
}
