import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import axios from 'axios';
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { API_URL } from '../constants/General';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [Package, SetPackage] = useState(0);
  const [Contact, SetContact] = useState(0);
  const [Visas, SetVisas] = useState(0);
  const [gtour, SetGtour] = useState(0);
  const [country, SetCountry] = useState(0);
  const [Subscriber, SetSubscriber] = useState(0);
  const LoadNumbers = async () => {
    const PackageData = await axios.get(`${API_URL}/packages`);
    SetPackage(PackageData.data.packages.length);

    const ContactData = await axios.get(`${API_URL}/getContacts`);
    SetContact(ContactData.data.data.length);

    const SubscriberData = await axios.get(`${API_URL}/getSubscriber`);
    SetSubscriber(SubscriberData.data.length);

    const VisasData = await axios.get(`${API_URL}/getVisas`);
    SetVisas(VisasData.data.data.length);

    const generate = await axios.get(`${API_URL}/getGtour`);
    SetGtour(generate.data.data.length);

    const country = await axios.get(`${API_URL}/getCountries`);
    SetCountry(country.data.data.length);
  };
  useEffect(() => {
    LoadNumbers();
  });
  return (
    <>
      <Helmet>
        <title> Dashboard |New Vision </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Package" total={Package} icon={'ant-design:lock-outlined'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Contact" total={Contact} color="info" icon={'ant-design:contacts-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Subscriber" total={Subscriber} color="warning" icon={'ant-design:user-outlined'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Visas" total={Visas} color="error" icon={'ant-design:check-outlined'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Countries" total={country} color="success" icon={'ant-design:rise-outlined'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Generate Tour" total={gtour} color="error" icon={'ant-design:pie-chart'} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
