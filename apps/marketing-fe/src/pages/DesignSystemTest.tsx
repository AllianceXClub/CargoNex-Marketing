import React from 'react';
import { Button } from '@/components/ui/button';

export default function DesignSystemTest() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8">Design System Test Page</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Testing Basic Button</h2>
                        <Button>Click Me</Button>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Design System Status</h2>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="mb-4">The design system files have been created:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>✅ Design Tokens (tokens.ts)</li>
                                <li>✅ Button Components (Button.tsx)</li>
                                <li>✅ Card Components (Card.tsx)</li>
                                <li>✅ Central Exports (index.ts)</li>
                                <li>✅ Documentation Files</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                        <div className="bg-muted p-6 rounded-lg">
                            <p className="mb-4">To use the design system components:</p>
                            <pre className="bg-foreground text-background p-4 rounded overflow-x-auto">
                                {`import { Button, Card } from '@/design-system';

function MyComponent() {
  return (
    <Button variant="primary">
      My Button
    </Button>
  );
}`}
                            </pre>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
