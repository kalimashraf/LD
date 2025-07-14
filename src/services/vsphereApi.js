import { API_ENDPOINTS } from '../utils/constants';

class VSphereAPI {
  constructor() {
    this.baseURL = API_ENDPOINTS.BASE_URL;
    this.authToken = localStorage.getItem('authToken') || null;
  }

  // Helper method for making API requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.authToken && { Authorization: `Bearer ${this.authToken}` }),
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(credentials) {
    const response = await this.request(`${API_ENDPOINTS.AUTH}/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.token) {
      this.authToken = response.token;
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  }

  async logout() {
    await this.request(`${API_ENDPOINTS.AUTH}/logout`, {
      method: 'POST',
    });
    
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  // VM Management
  async getVMs() {
    return await this.request(API_ENDPOINTS.VMS);
  }

  async getVM(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}`);
  }

  async createVM(vmConfig) {
    return await this.request(API_ENDPOINTS.VMS, {
      method: 'POST',
      body: JSON.stringify(vmConfig),
    });
  }

  async cloneVM(templateId, cloneConfig) {
    return await this.request(`${API_ENDPOINTS.VMS}/clone`, {
      method: 'POST',
      body: JSON.stringify({
        templateId,
        ...cloneConfig,
      }),
    });
  }

  async startVM(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/start`, {
      method: 'POST',
    });
  }

  async stopVM(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/stop`, {
      method: 'POST',
    });
  }

  async restartVM(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/restart`, {
      method: 'POST',
    });
  }

  async deleteVM(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}`, {
      method: 'DELETE',
    });
  }

  async getVMConsoleUrl(vmId, consoleType = 'webmks') {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/console?type=${consoleType}`);
  }

  // Template Management
  async getTemplates() {
    return await this.request(API_ENDPOINTS.TEMPLATES);
  }

  async getTemplate(templateId) {
    return await this.request(`${API_ENDPOINTS.TEMPLATES}/${templateId}`);
  }

  async createTemplate(templateConfig) {
    return await this.request(API_ENDPOINTS.TEMPLATES, {
      method: 'POST',
      body: JSON.stringify(templateConfig),
    });
  }

  async deleteTemplate(templateId) {
    return await this.request(`${API_ENDPOINTS.TEMPLATES}/${templateId}`, {
      method: 'DELETE',
    });
  }

  // Lab Management
  async getLabs() {
    return await this.request(API_ENDPOINTS.LABS);
  }

  async getLab(labId) {
    return await this.request(`${API_ENDPOINTS.LABS}/${labId}`);
  }

  async createLab(labConfig) {
    return await this.request(API_ENDPOINTS.LABS, {
      method: 'POST',
      body: JSON.stringify(labConfig),
    });
  }

  async updateLab(labId, updates) {
    return await this.request(`${API_ENDPOINTS.LABS}/${labId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteLab(labId) {
    return await this.request(`${API_ENDPOINTS.LABS}/${labId}`, {
      method: 'DELETE',
    });
  }

  async startLab(labId) {
    return await this.request(`${API_ENDPOINTS.LABS}/${labId}/start`, {
      method: 'POST',
    });
  }

  async stopLab(labId) {
    return await this.request(`${API_ENDPOINTS.LABS}/${labId}/stop`, {
      method: 'POST',
    });
  }

  // Host Management
  async getHosts() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/hosts`);
  }

  async getHost(hostId) {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/hosts/${hostId}`);
  }

  async getHostResources(hostId) {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/hosts/${hostId}/resources`);
  }

  // User Management
  async getUsers() {
    return await this.request(API_ENDPOINTS.USERS);
  }

  async getUser(userId) {
    return await this.request(`${API_ENDPOINTS.USERS}/${userId}`);
  }

  async createUser(userConfig) {
    return await this.request(API_ENDPOINTS.USERS, {
      method: 'POST',
      body: JSON.stringify(userConfig),
    });
  }

  async updateUser(userId, updates) {
    return await this.request(`${API_ENDPOINTS.USERS}/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteUser(userId) {
    return await this.request(`${API_ENDPOINTS.USERS}/${userId}`, {
      method: 'DELETE',
    });
  }

  // Credential Management
  async generateCredentials(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/credentials`, {
      method: 'POST',
    });
  }

  async getCredentials(vmId) {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/credentials`);
  }

  // Monitoring and Metrics
  async getDashboardMetrics() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/metrics/dashboard`);
  }

  async getVMMetrics(vmId, timeRange = '1h') {
    return await this.request(`${API_ENDPOINTS.VMS}/${vmId}/metrics?range=${timeRange}`);
  }

  async getHostMetrics(hostId, timeRange = '1h') {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/hosts/${hostId}/metrics?range=${timeRange}`);
  }

  // Network Management
  async getNetworks() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/networks`);
  }

  async createNetwork(networkConfig) {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/networks`, {
      method: 'POST',
      body: JSON.stringify(networkConfig),
    });
  }

  // Storage Management
  async getDatastores() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/datastores`);
  }

  async getDatastore(datastoreId) {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/datastores/${datastoreId}`);
  }

  // Health Check
  async healthCheck() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/health`);
  }

  // vCenter Connection Status
  async getVCenterStatus() {
    return await this.request(`${API_ENDPOINTS.VSPHERE}/status`);
  }
}

// Create and export a singleton instance
const vsphereAPI = new VSphereAPI();
export default vsphereAPI;