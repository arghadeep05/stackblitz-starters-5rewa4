import React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import AccordianDash from '../components/AccordianDash';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GeoChart from '../charts/GeoChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Dash.css';
import BarChart from '../charts/BarChart';
import HBarChart from '../charts/HBarChart';
import PieChart from '../charts/PieChart';
export default function About() {
  return (
    <>
      <div className="aboutsettings">
        <Navbar />
        <Box height={50} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <>
              <div className="bgcolor">
                <Navbar />
                <Box sx={{ display: 'responsive' }}>
                  <Sidenav />
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Stack
                          spacing={2}
                          direction="row"
                          sx={{ width: '50%', padding: '5px' }}
                        >
                          <Card
                            sx={{
                              minWidth: 150,
                              height: 20 + 'vh',
                              spacing: 2,
                            }}
                            className="gradient"
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                Visitors
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                24,630
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: '#ccd1d1' }}
                              >
                                Since last week
                              </Typography>
                            </CardContent>
                          </Card>
                          <Card
                            sx={{
                              marginTop: '16px',
                              minWidth: 150,
                              height: 20 + 'vh',
                              spacing: 2,
                            }}
                            className="gradient"
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                Visitors
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                22000
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: '#ccd1d1' }}
                              >
                                Since last week
                              </Typography>
                            </CardContent>
                          </Card>
                        </Stack>
                        <Stack
                          spacing={2}
                          direction="row"
                          sx={{
                            width: '50%',
                            marginTop: '10',
                            padding: '5px',
                          }}
                        >
                          <Card
                            sx={{
                              minWidth: 150,
                              height: 20 + 'vh',
                              marginTop: '16px',
                              spacing: 2,
                            }}
                            className="gradientlight"
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                Visitors
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                25,690
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: '#ccd1d1' }}
                              >
                                Since last week
                              </Typography>
                            </CardContent>
                          </Card>
                          <Card
                            sx={{
                              minWidth: 150,
                              height: 20 + 'vh',
                              marginTop: '16px',
                              spacing: 2,
                            }}
                            className="gradientlight"
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="p"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                Visitors
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ color: '#ffffff' }}
                              >
                                21,130
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: '#ccd1d1' }}
                              >
                                Since last week
                              </Typography>
                            </CardContent>
                          </Card>
                        </Stack>
                      </Grid>

                      <Grid item xs={8} sx={{ width: '100%', padding: '10px' }}>
                        <HBarChart />
                      </Grid>
                    </Grid>
                    <Box height={16} />

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Card sx={{ height: 40 + 'vh' }}>
                          <CardContent>
                            <GeoChart />
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={6} spacing={2}>
                        <Card sx={{ height: 40 + 'vh' }}>
                          <PieChart />
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </div>
            </>
          </Box>
        </Box>
      </div>
    </>
  );
}
