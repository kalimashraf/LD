import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
  Fab,
  Tooltip,
  Badge
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  Computer as ComputerIcon,
  Storage as StorageIcon,
  NetworkCheck as NetworkIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  MonitorHeart as MonitorIcon,
  PlayArrow as PlayIcon,
  Stop as StopIcon,
  ContentCopy as CopyIcon,
  Visibility as VisibilityIcon,
  PowerSettingsNew as PowerIcon,
  Add as AddIcon,
  AutoAwesome as AutoAwesomeIcon,
  CloudQueue as CloudIcon,
  Memory as MemoryIcon,
  AccountTree as AccountTreeIcon,
  VpnKey as VpnKeyIcon,
  Router as RouterIcon,
  ManageAccounts as ManageAccountsIcon,
 
  Layers,
  Zap
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 280;

export default function VSphereLabDashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const mainMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'Lab Wizard', icon: <AutoAwesomeIcon /> },
    { text: 'VM Templates', icon: <Layers /> },
    { text: 'Lab Sessions', icon: <MonitorIcon /> },
    { text: 'User Management', icon: <PeopleIcon /> },
  ];

  const labMenuItems = [
    // { text: 'Active Labs', icon: <Activity /> },
    { text: 'VM Instances', icon: <ComputerIcon /> },
    { text: 'Templates', icon: <StorageIcon /> },
    { text: 'Networks', icon: <NetworkIcon /> },
    { text: 'Storage', icon: <CloudIcon /> },
    { text: 'Host Management', icon: <MemoryIcon /> },
    { text: 'Credentials', icon: <VpnKeyIcon /> },
    { text: 'Access Control', icon: <SecurityIcon /> },
    { text: 'Monitoring', icon: <MonitorIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  const labMetrics = {
    activeLabs: 3,
    totalVMs: 12,
    runningVMs: 8,
    totalUsers: 25,
    activeUsers: 15,
    templates: 8,
    hosts: 4,
    storage: '2.5 TB'
  };

  const wizardSteps = [
    'Lab Configuration',
    'OS Selection', 
    'Application Stack',
    'Hardware Configuration',
    'Host Assignment',
    'Credential Generation',
    'Network Configuration'
  ];

  const activeLabs = [
    {
      id: 'LAB001',
      name: 'Windows Server 2022 Lab',
      os: 'Windows Server 2022',
      vms: 3,
      status: 'running',
      users: 8,
      created: '2025-07-10',
      host: 'ESXi-Host-01'
    },
    {
      id: 'LAB002',
      name: 'Linux Development Environment', 
      os: 'Ubuntu 22.04',
      vms: 4,
      status: 'running',
      users: 12,
      created: '2025-07-08',
      host: 'ESXi-Host-02'
    },
    {
      id: 'LAB003',
      name: 'Security Testing Lab',
      os: 'Kali Linux',
      vms: 2,
      status: 'stopped',
      users: 5,
      created: '2025-07-05',
      host: 'ESXi-Host-03'
    }
  ];

  const recentVMs = [
    {
      name: 'WS2022-DC01',
      template: 'Windows Server 2022',
      status: 'running',
      host: 'ESXi-Host-01',
      cpu: 4,
      ram: '8 GB',
      disk: '60 GB',
      ip: '192.168.1.10',
      credentials: { username: 'Administrator', password: 'Auto-Gen-Pass123!' }
    },
    {
      name: 'UBUNTU-DEV01',
      template: 'Ubuntu 22.04 LTS',
      status: 'running',
      host: 'ESXi-Host-02',
      cpu: 2,
      ram: '4 GB', 
      disk: '40 GB',
      ip: '192.168.1.20',
      credentials: { username: 'labuser', password: 'SecurePass456!' }
    }
  ];

  const quickActions = [
    { title: 'Launch Lab Wizard', icon: <AutoAwesomeIcon />, color: 'primary' },
    { title: 'Clone VM Template', icon: <CopyIcon />, color: 'success' },
    { title: 'Access VM Console', icon: <VisibilityIcon />, color: 'secondary' },
    { title: 'Generate Credentials', icon: <VpnKeyIcon />, color: 'warning' },
  ];

  const drawer = (
    <div>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
            <Typography variant="caption" fontWeight="bold">vS</Typography>
          </Avatar>
          {open && (
            <Typography variant="h6" noWrap fontWeight="bold">
              vSphere Labs
            </Typography>
          )}
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      
      <Divider />
      
      <List>
        {mainMenuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={item.active}
              onClick={() => setSelectedItem(item.text)}
              sx={{ minHeight: 48, px: 2.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      {open && (
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="overline" color="text.secondary" fontWeight="bold">
            Lab Management
          </Typography>
        </Box>
      )}
      
      <List>
        {labMenuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => setSelectedItem(item.text)}
              sx={{ minHeight: 40, px: 2.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {open && (
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2 }}>
          <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
            <Typography variant="body2" fontWeight="bold">
              vSphere Connected
            </Typography>
            <Typography variant="caption">
              vcenter.lab.local
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%', mr: 1 }} />
              <Typography variant="caption" fontWeight="bold">Online</Typography>
            </Box>
          </Paper>
        </Box>
      )}
    </div>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? drawerWidth : 64}px)` },
          ml: { sm: `${open ? drawerWidth : 64}px` },
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div">
              Lab Dashboard
            </Typography>
            <Typography variant="caption" color="inherit" sx={{ opacity: 0.7 }}>
              Manage your vSphere lab environments
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AutoAwesomeIcon />}
            sx={{ mr: 2 }}
          >
            Create Lab
          </Button>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: open ? drawerWidth : 64 }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: open ? drawerWidth : 64,
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: 'hidden',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}>
        <Toolbar />
        
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Production Home
        </Typography>
        
        {/* Metrics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {/* <Activity /> */}
                  </Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {labMetrics.activeLabs}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Active Labs
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                    <ComputerIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {labMetrics.runningVMs}/{labMetrics.totalVMs}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Running VMs
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                    <PeopleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {labMetrics.activeUsers}/{labMetrics.totalUsers}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Active Users
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                    <StorageIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {labMetrics.templates}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      VM Templates
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Lab Creation Wizard */}
          <Grid item xs={12} lg={8}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    Lab Creation Wizard
                  </Typography>
                  <Chip label="7 Steps Process" color="primary" variant="outlined" />
                </Box>
                
                <Stepper orientation="vertical">
                  {wizardSteps.map((label, index) => (
                    <Step key={label} active={index === 0}>
                      <StepLabel>
                        <Typography variant="body1" fontWeight="medium">
                          {label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Quick Actions */}
          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Quick Actions
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      color={action.color}
                      startIcon={action.icon}
                      sx={{ justifyContent: 'flex-start', p: 2 }}
                      fullWidth
                    >
                      {action.title}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Active Labs */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" fontWeight="bold">
                Active Lab Environments
              </Typography>
              <Button variant="text" color="primary">
                View All
              </Button>
            </Box>
            
            <Grid container spacing={3}>
              {activeLabs.map((lab) => (
                <Grid item xs={12} md={6} lg={4} key={lab.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">
                          {lab.name}
                        </Typography>
                        <Chip
                          label={lab.status}
                          color={lab.status === 'running' ? 'success' : 'error'}
                          size="small"
                        />
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {lab.os}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {lab.vms} VMs on {lab.host}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {lab.users} active users
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          Created: {lab.created}
                        </Typography>
                        <Box>
                          <IconButton size="small" color="primary">
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton size="small" color="success">
                            <PlayIcon />
                          </IconButton>
                          <IconButton size="small" color="warning">
                            <PowerIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        
        {/* Recent VMs Table */}
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Recent VM Deployments
            </Typography>
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>VM Name</TableCell>
                    <TableCell>Template</TableCell>
                    <TableCell>Resources</TableCell>
                    <TableCell>Credentials</TableCell>
                    <TableCell>Access</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentVMs.map((vm, index) => (
                    <TableRow key={index} hover>
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight="bold">
                            {vm.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {vm.ip} • {vm.host}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{vm.template}</TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {vm.cpu} CPU • {vm.ram}<br />
                          {vm.disk} Disk
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Paper sx={{ p: 1, bgcolor: 'grey.100', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                          User: {vm.credentials.username}<br />
                          Pass: {vm.credentials.password}
                        </Paper>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<MonitorIcon />}
                        >
                          Console
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Tooltip title="Start">
                            <IconButton size="small" color="success">
                              <PlayIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Stop">
                            <IconButton size="small" color="error">
                              <StopIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Clone">
                            <IconButton size="small" color="primary">
                              <CopyIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
      
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}