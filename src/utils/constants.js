// VM Status Constants
export const VM_STATUS = {
  RUNNING: 'running',
  STOPPED: 'stopped',
  SUSPENDED: 'suspended',
  UNKNOWN: 'unknown',
  CREATING: 'creating',
  DELETING: 'deleting'
};

// OS Templates with detailed configurations
export const OS_TEMPLATES = [
  {
    id: 'win-server-2022',
    name: 'Windows Server 2022',
    category: 'Windows',
    icon: '🪟',
    description: 'Latest Windows Server with enhanced security',
    minCpu: 2,
    minRam: 4,
    minDisk: 40,
    defaultCpu: 4,
    defaultRam: 8,
    defaultDisk: 60
  },
  {
    id: 'win-11-pro',
    name: 'Windows 11 Pro',
    category: 'Windows',
    icon: '🪟',
    description: 'Modern Windows desktop environment',
    minCpu: 2,
    minRam: 4,
    minDisk: 30,
    defaultCpu: 2,
    defaultRam: 8,
    defaultDisk: 50
  },
  {
    id: 'ubuntu-22-04',
    name: 'Ubuntu 22.04 LTS',
    category: 'Linux',
    icon: '🐧',
    description: 'Long-term support Ubuntu release',
    minCpu: 1,
    minRam: 2,
    minDisk: 20,
    defaultCpu: 2,
    defaultRam: 4,
    defaultDisk: 40
  },
  {
    id: 'centos-9',
    name: 'CentOS 9',
    category: 'Linux',
    icon: '🐧',
    description: 'Enterprise-grade Linux distribution',
    minCpu: 1,
    minRam: 2,
    minDisk: 20,
    defaultCpu: 2,
    defaultRam: 4,
    defaultDisk: 40
  },
  {
    id: 'kali-linux',
    name: 'Kali Linux',
    category: 'Security',
    icon: '🔒',
    description: 'Penetration testing and security auditing',
    minCpu: 2,
    minRam: 4,
    minDisk: 25,
    defaultCpu: 4,
    defaultRam: 8,
    defaultDisk: 50
  },
  {
    id: 'pfsense',
    name: 'pfSense',
    category: 'Network',
    icon: '🌐',
    description: 'Firewall and router platform',
    minCpu: 1,
    minRam: 1,
    minDisk: 8,
    defaultCpu: 2,
    defaultRam: 2,
    defaultDisk: 20
  }
];

// Application Stacks by Category
export const APPLICATIONS = {
  WINDOWS: [
    { id: 'iis', name: 'IIS', description: 'Web server role' },
    { id: 'sql-server', name: 'SQL Server', description: 'Database management system' },
    { id: 'active-directory', name: 'Active Directory', description: 'Directory service' },
    { id: 'exchange', name: 'Exchange Server', description: 'Email server' },
    { id: 'sharepoint', name: 'SharePoint', description: 'Collaboration platform' },
    { id: 'hyper-v', name: 'Hyper-V', description: 'Virtualization platform' }
  ],
  LINUX: [
    { id: 'docker', name: 'Docker', description: 'Container platform' },
    { id: 'kubernetes', name: 'Kubernetes', description: 'Container orchestration' },
    { id: 'jenkins', name: 'Jenkins', description: 'CI/CD automation' },
    { id: 'apache', name: 'Apache HTTP Server', description: 'Web server' },
    { id: 'nginx', name: 'Nginx', description: 'Web server and reverse proxy' },
    { id: 'mysql', name: 'MySQL', description: 'Relational database' },
    { id: 'postgresql', name: 'PostgreSQL', description: 'Advanced database' },
    { id: 'redis', name: 'Redis', description: 'In-memory data store' }
  ],
  SECURITY: [
    { id: 'metasploit', name: 'Metasploit', description: 'Penetration testing framework' },
    { id: 'nmap', name: 'Nmap', description: 'Network discovery tool' },
    { id: 'wireshark', name: 'Wireshark', description: 'Network protocol analyzer' },
    { id: 'burp-suite', name: 'Burp Suite', description: 'Web application security testing' },
    { id: 'owasp-zap', name: 'OWASP ZAP', description: 'Security testing proxy' },
    { id: 'nikto', name: 'Nikto', description: 'Web server scanner' }
  ],
  DEVELOPMENT: [
    { id: 'vscode', name: 'VS Code', description: 'Code editor' },
    { id: 'git', name: 'Git', description: 'Version control system' },
    { id: 'nodejs', name: 'Node.js', description: 'JavaScript runtime' },
    { id: 'python', name: 'Python', description: 'Programming language' },
    { id: 'java', name: 'Java JDK', description: 'Java development kit' },
    { id: 'maven', name: 'Maven', description: 'Build automation tool' }
  ]
};

// Hardware Configuration Presets
export const HARDWARE_PRESETS = {
  SMALL: {
    name: 'Small',
    cpu: 2,
    ram: 4,
    disk: 40,
    description: 'Basic development and testing'
  },
  MEDIUM: {
    name: 'Medium',
    cpu: 4,
    ram: 8,
    disk: 60,
    description: 'Standard applications and services'
  },
  LARGE: {
    name: 'Large',
    cpu: 8,
    ram: 16,
    disk: 100,
    description: 'Resource-intensive applications'
  },
  XLARGE: {
    name: 'Extra Large',
    cpu: 16,
    ram: 32,
    disk: 200,
    description: 'High-performance computing'
  }
};

// ESXi Host Information
export const ESXI_HOSTS = [
  {
    id: 'esxi-host-01',
    name: 'ESXi-Host-01',
    ip: '192.168.1.101',
    status: 'online',
    cpu: { total: 32, used: 12 },
    memory: { total: 128, used: 48 },
    storage: { total: 2000, used: 800 },
    vms: 8
  },
  {
    id: 'esxi-host-02',
    name: 'ESXi-Host-02',
    ip: '192.168.1.102',
    status: 'online',
    cpu: { total: 32, used: 16 },
    memory: { total: 128, used: 64 },
    storage: { total: 2000, used: 1200 },
    vms: 12
  },
  {
    id: 'esxi-host-03',
    name: 'ESXi-Host-03',
    ip: '192.168.1.103',
    status: 'maintenance',
    cpu: { total: 32, used: 4 },
    memory: { total: 128, used: 16 },
    storage: { total: 2000, used: 400 },
    vms: 3
  }
];

// Network Configuration Options
export const NETWORK_CONFIGS = [
  {
    id: 'lab-network',
    name: 'Lab Network',
    vlan: 100,
    subnet: '192.168.100.0/24',
    gateway: '192.168.100.1',
    dns: ['192.168.100.10', '8.8.8.8']
  },
  {
    id: 'isolated-network',
    name: 'Isolated Network',
    vlan: 200,
    subnet: '10.0.200.0/24',
    gateway: '10.0.200.1',
    dns: ['10.0.200.10']
  },
  {
    id: 'dmz-network',
    name: 'DMZ Network',
    vlan: 300,
    subnet: '172.16.300.0/24',
    gateway: '172.16.300.1',
    dns: ['172.16.300.10', '1.1.1.1']
  }
];

// Lab Duration Options
export const LAB_DURATIONS = [
  { value: 1, label: '1 Hour', hours: 1 },
  { value: 2, label: '2 Hours', hours: 2 },
  { value: 4, label: '4 Hours', hours: 4 },
  { value: 8, label: '8 Hours (1 Day)', hours: 8 },
  { value: 24, label: '24 Hours', hours: 24 },
  { value: 72, label: '3 Days', hours: 72 },
  { value: 168, label: '1 Week', hours: 168 },
  { value: 0, label: 'Permanent', hours: 0 }
];

// User Roles and Permissions
export const USER_ROLES = {
  ADMIN: {
    id: 'admin',
    name: 'Administrator',
    permissions: ['create', 'read', 'update', 'delete', 'manage_users', 'manage_hosts']
  },
  INSTRUCTOR: {
    id: 'instructor',
    name: 'Instructor',
    permissions: ['create', 'read', 'update', 'delete', 'manage_labs']
  },
  STUDENT: {
    id: 'student',
    name: 'Student',
    permissions: ['read', 'access_assigned_labs']
  }
};

// API Endpoints
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  VSPHERE: '/vsphere',
  VMS: '/vms',
  TEMPLATES: '/templates',
  LABS: '/labs',
  USERS: '/users',
  AUTH: '/auth'
};

// Credential Generation Settings
export const CREDENTIAL_SETTINGS = {
  PASSWORD_LENGTH: 12,
  INCLUDE_UPPERCASE: true,
  INCLUDE_LOWERCASE: true,
  INCLUDE_NUMBERS: true,
  INCLUDE_SYMBOLS: true,
  EXCLUDE_AMBIGUOUS: true
};

// VM Console Access Types
export const CONSOLE_TYPES = {
  WEBMKS: 'webmks',
  NOVNC: 'novnc',
  RDP: 'rdp',
  SSH: 'ssh'
};

// Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Lab Status Constants
export const LAB_STATUS = {
  CREATING: 'creating',
  RUNNING: 'running',
  STOPPED: 'stopped',
  DELETING: 'deleting',
  ERROR: 'error'
};