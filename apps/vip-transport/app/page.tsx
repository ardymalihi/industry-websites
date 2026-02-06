import { Button } from '@my-org/ui';
import { formatDate, formatCurrency } from '@my-org/utils';

export default function Home() {
  const today = new Date();
  const sampleAmount = 1234.56;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          VIP Transport
        </h1>
        
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="mb-4">
            This is an independent Next.js application running on port 3000.
          </p>
          <p className="mb-4">
            It uses shared packages from the monorepo:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">@my-org/ui</code> - Shared UI components</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">@my-org/utils</code> - Shared utilities</li>
          </ul>
        </div>

        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
          
          <div className="mb-4">
            <p className="mb-2">Shared Button Component:</p>
            <div className="flex gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">Shared Utility Functions:</p>
            <ul className="space-y-1">
              <li>Today&apos;s date: <strong>{formatDate(today)}</strong></li>
              <li>Formatted currency: <strong>{formatCurrency(sampleAmount)}</strong></li>
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
