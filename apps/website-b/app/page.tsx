import { Button } from '@intent-flow-package/ui';
import { formatDate, formatCurrency, truncate } from '@intent-flow-package/utils';

export default function Home() {
  const today = new Date();
  const sampleAmount = 5678.90;
  const longText = 'This is a very long text that will be truncated to demonstrate the truncate utility function from the shared utils package.';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Website B
        </h1>
        
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="mb-4">
            This is an independent Next.js application running on port 3001.
          </p>
          <p className="mb-4">
            It shares the same packages as Website A but can have completely different:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Database configuration</li>
            <li>Environment variables</li>
            <li>Business logic</li>
            <li>Deployment strategy</li>
          </ul>
        </div>

        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
          
          <div className="mb-4">
            <p className="mb-2">Shared Button Component:</p>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" size="lg">Large Primary</Button>
              <Button variant="secondary" size="md">Medium Secondary</Button>
              <Button variant="outline" size="sm">Small Outline</Button>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">Shared Utility Functions:</p>
            <ul className="space-y-2">
              <li>Today&apos;s date: <strong>{formatDate(today)}</strong></li>
              <li>Formatted currency: <strong>{formatCurrency(sampleAmount, 'EUR')}</strong></li>
              <li>Truncated text: <strong>{truncate(longText, 50)}</strong></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Environment: {process.env.NEXT_PUBLIC_APP_NAME || 'Not set'}</p>
        </div>
      </div>
    </main>
  );
}
