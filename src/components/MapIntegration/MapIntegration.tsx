import { useMemo, useState } from "react";
import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import styles from "./MapIntegration.module.css";

export type Property = {
  id: string;
  title: string;
  address: string;
  price: string;
  coords: [number, number];
};

const initialProperties: Property[] = [
  {
    id: "p1",
    title: "Modern Apartment",
    address: "Yakkasaroy, Tashkent",
    price: "$1200/mo",
    coords: [41.2995, 69.2401],
  },
  {
    id: "p2",
    title: "Cozy Studio",
    address: "Chilonzor, Tashkent",
    price: "$750/mo",
    coords: [41.285, 69.203],
  },
  {
    id: "p3",
    title: "Family House",
    address: "Yunusobod, Tashkent",
    price: "$1600/mo",
    coords: [41.356, 69.287],
  },
  {
    id: "p4",
    title: "City Center Loft",
    address: "Downtown, Tashkent",
    price: "$1400/mo",
    coords: [41.317, 69.279],
  },
];

const MapIntegration: React.FC = () => {
  const defaultState = useMemo(
    () => ({
      center: [41.311081, 69.240562] as [number, number], // Tashkent
      zoom: 11,
    }),
    []
  );

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return initialProperties;
    const q = query.toLowerCase();
    return initialProperties.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.price.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Property Map Viewer</h1>
          <p className={styles.subtitle}>
            Interactive map with clustering, search, and detail overlay.
          </p>
        </div>
        <div className={styles.actions}>
          <input
            className={styles.search}
            placeholder="Search by title, address, or price..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search properties"
          />
          <button
            className={styles.clearBtn}
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            Clear
          </button>
        </div>
      </header>

      <div className={styles.mapCard}>
        <YMaps
          query={{
            lang: "en_US",
            load: "package.full",
            // Uncomment and add your API key if required
            // apikey: 'YOUR_YANDEX_API_KEY',
          }}
        >
          <Map
            defaultState={defaultState}
            width="100%"
            height="100%"
            options={{
              suppressMapOpenBlock: true,
              yandexMapDisablePoiInteractivity: true,
            }}
            modules={[
              "control.ZoomControl",
              "control.FullscreenControl",
              "control.GeolocationControl",
            ]}
          >
            <Clusterer
              options={{
                preset: "islands#invertedBlueClusterIcons",
                groupByCoordinates: false,
                clusterDisableClickZoom: false,
                clusterOpenBalloonOnClick: false,
              }}
            >
              {filtered.map((p) => (
                <Placemark
                  key={p.id}
                  geometry={p.coords}
                  options={{
                    preset: "islands#blueHomeCircleIcon",
                    iconImageSize: [32, 32],
                    iconImageOffset: [-16, -16],
                  }}
                  properties={{
                    hintContent: `<strong>${p.title}</strong><br/>${p.address}`,
                  }}
                  onClick={() => setSelected(p)}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>

        {selected && (
          <div className={styles.overlay}>
            <div className={styles.overlayHeader}>
              <h3 className={styles.overlayTitle}>{selected.title}</h3>
              <button
                className={styles.closeBtn}
                onClick={() => setSelected(null)}
                aria-label="Close overlay"
              >
                ✕
              </button>
            </div>
            <div className={styles.overlayBody}>
              <div className={styles.badge}>Featured</div>
              <p className={styles.address}>{selected.address}</p>
              <p className={styles.price}>{selected.price}</p>
              <div className={styles.overlayActions}>
                <button className={styles.primaryBtn}>View Details</button>
                <button className={styles.secondaryBtn}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <span>{filtered.length}</span> result(s) • Built with{" "}
        <code>@pbe/react-yandex-maps</code>
      </footer>
    </div>
  );
};

export default MapIntegration;
