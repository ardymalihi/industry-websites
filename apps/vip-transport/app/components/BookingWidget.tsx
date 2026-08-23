'use client';

import { useEffect, useState } from 'react';

const WIDGET_SCRIPT_SRC = 'https://www.intentflow.pro/service-booking-widget.js';

interface BookingWidgetProps {
    children?: React.ReactNode;
}

export function BookingWidget({ children }: BookingWidgetProps) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Avoid re-loading the script if it's already on the page
        if (document.querySelector('script[src*="service-booking-widget.js"]')) {
            return;
        }

        const script = document.createElement('script');
        script.src = WIDGET_SCRIPT_SRC;
        script.async = true;

        script.onerror = () => {
            setHasError(true);
        };

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full relative">
            {/* Fallback content: shown only when the widget script fails to load */}
            {hasError && children && (
                <div className="w-full animate-in fade-in duration-500">
                    {children}
                </div>
            )}

            <div
                id="service-booking-widget"
                data-user-id="6d661af6-540f-4b71-9b43-bdd8da46aee8"
                data-assistant-id="d66e94ef-4ae3-45fc-90ad-f5b78e434512"
                data-theme="dark"
                data-primary-color="#fbbf24"
                data-border-radius="12px"
                data-width="100%"
                data-height="auto"
                data-show-price="true"
                className="w-full isolate bg-transparent relative z-20"
            />
        </div>
    );
}
