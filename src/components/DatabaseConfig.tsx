
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DatabaseConfig } from '@/components/ui/database';
import { testDatabaseConnection, setDatabaseConfig, getDatabaseConfig } from '@/services/dbService';

const DatabaseConfigComponent = () => {
  const [config, setConfig] = useState(getDatabaseConfig());
  const [isConnecting, setIsConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleInputChange = (field: keyof typeof config) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | number = e.target.value;
    
    // Convert port to number
    if (field === 'port') {
      value = Number(value) || 5432;
    }
    
    setConfig({
      ...config,
      [field]: value
    });
  };

  const handleTestConnection = async () => {
    setIsConnecting(true);
    try {
      // Update the global config
      setDatabaseConfig(config);
      
      // Test the connection
      const success = await testDatabaseConnection(config);
      setConnected(success);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>PostgreSQL Database Configuration</CardTitle>
        <CardDescription>
          Configure your PostgreSQL connection running on Docker
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="host">Host</Label>
            <Input
              id="host"
              value={config.host}
              onChange={handleInputChange('host')}
              placeholder="localhost"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="port">Port</Label>
            <Input
              id="port"
              type="number"
              value={config.port}
              onChange={handleInputChange('port')}
              placeholder="5432"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="database">Database Name</Label>
          <Input
            id="database"
            value={config.database}
            onChange={handleInputChange('database')}
            placeholder="newsdb"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="user">Username</Label>
          <Input
            id="user"
            value={config.user}
            onChange={handleInputChange('user')}
            placeholder="postgres"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={config.password}
            onChange={handleInputChange('password')}
            placeholder="postgres"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {connected ? (
            <span className="text-green-500">✓ Connected</span>
          ) : (
            <span>Not connected</span>
          )}
        </div>
        <Button onClick={handleTestConnection} disabled={isConnecting}>
          {isConnecting ? 'Connecting...' : 'Test Connection'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DatabaseConfigComponent;
