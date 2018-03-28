import { ConnectionProtocol } from '../Enums/connection-protocol.enum';

export class Server {
  private serverUrl: string;

  constructor(
    public ipAddress,
    public port,
    public protocol
  ) { }

  get fullUrl() {
    if (this.serverUrl == null) {
      this.serverUrl = this.buildServerUrl();
    }

    return this.serverUrl;
  }

  private buildServerUrl(): string {
    if (this.ipAddress == null || this.port == null || this.protocol == null) {
      throw new Error('Server configuration is not complete');
    }

    if (this.protocol === 'http') {
      return `http://${this.ipAddress}:${this.port}`;
    } else if (this.protocol === 'https') {
      return `https://${this.ipAddress}:${this.port}`;
    }
  }
}
