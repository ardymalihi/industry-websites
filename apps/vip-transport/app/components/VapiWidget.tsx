'use client';

import { useEffect, useRef } from 'react';

const VAPI_WIDGET_SCRIPT = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';

const VAPI_WIDGET_ATTRIBUTES: Record<string, string> = {
    'public-key': '98fcf245-a62c-405c-b75c-113952fa91c5',
    'assistant-id': 'd66e94ef-4ae3-45fc-90ad-f5b78e434512',
    mode: 'chat',
    theme: 'dark',
    size: 'full',
    position: 'bottom-right',
    'accent-color': '#fbbf24',
    'button-base-color': '#1F2937',
    'button-accent-color': '#FFFFFF',
    'border-radius': 'medium',
    'main-label': 'AI Assistant',
    'start-button-text': 'Chat with us',
    'empty-chat-message': 'How can I help you?',
};

export function VapiWidget() {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;

        // The Vapi script scans the DOM for <vapi-widget> exactly once when it runs
        // (no MutationObserver), so the element must exist before the script loads.
        if (!host.querySelector('vapi-widget')) {
            const widget = document.createElement('vapi-widget');
            for (const [name, value] of Object.entries(VAPI_WIDGET_ATTRIBUTES)) {
                widget.setAttribute(name, value);
            }
            host.appendChild(widget);
        }

        // Load the script once, globally.
        if (document.querySelector('script[src*="widget.umd.js"]')) {
            return;
        }

        const script = document.createElement('script');
        script.src = VAPI_WIDGET_SCRIPT;
        script.async = true;
        document.head.appendChild(script);
    }, []);

    return <div ref={hostRef} />;
}
