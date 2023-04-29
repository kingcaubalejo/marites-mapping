import Head from "next/head";
import useSWR from "swr";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";
import Typing from "@components/Typing"
// import Location from "@components/Location";

import styles from "@styles/Home.module.scss";

const DEFAULT_CENTER = [14.7010556, 120.9830225];
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://marites-dataset.s3.ap-southeast-1.amazonaws.com/ph.json",
    fetcher
  );
  let id = 0;

  return (
    <Layout>
      <Head>
        <title>Marites Locator - Alpha</title>
        <meta
          name="description"
          content="Create mapping of marites with Next.js and leaflet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <p>
            <Typing />
          </p>
          <Map
            className={styles.homeMap}
            width="1200"
            height="800"
            center={DEFAULT_CENTER}
            zoom={15}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>Tala, Caloocan City</Popup>
                </Marker>
                {data?.destinations.map(({ lat, lng, city }) => {
                  id = id + 1;
                  return (
                    <Marker key={id} position={[lat, lng]}>
                      <Popup>{city}</Popup>
                    </Marker>
                  );
                })}
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  );
}
