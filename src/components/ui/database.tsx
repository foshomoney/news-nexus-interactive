
import * as React from "react";
import { cn } from "@/lib/utils";

export interface DatabaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Database = React.forwardRef<HTMLDivElement, DatabaseProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative bg-muted rounded-md p-4", className)}
        {...props}
      />
    );
  }
);
Database.displayName = "Database";

export interface DatabaseConfigProps extends React.HTMLAttributes<HTMLDivElement> {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
}

const DatabaseConfig = React.forwardRef<HTMLDivElement, DatabaseConfigProps>(
  ({ className, host, port, database, user, password, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("bg-background rounded-md p-4 space-y-2 border", className)}
        {...props}
      >
        {host && <div><span className="font-medium">Host:</span> {host}</div>}
        {port && <div><span className="font-medium">Port:</span> {port}</div>}
        {database && <div><span className="font-medium">Database:</span> {database}</div>}
        {user && <div><span className="font-medium">User:</span> {user}</div>}
        {password && <div><span className="font-medium">Password:</span> ********</div>}
      </div>
    );
  }
);
DatabaseConfig.displayName = "DatabaseConfig";

export { Database, DatabaseConfig };
