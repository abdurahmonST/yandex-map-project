import { useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  Clusterer,
  ZoomControl,
  GeolocationControl,
  Polyline,
} from "@pbe/react-yandex-maps";
import styles from "./MapComponent.module.css";

// TypeScript interface
interface Property {
  id: number;
  coords: number[];
  title: string;
  price: string;
}

const MapComponent = () => {
  const properties: Property[] = [
    { id: 1, coords: [41.3111, 69.2797], title: "Chilonzor", price: "$50,000" },
    { id: 2, coords: [41.3275, 69.2815], title: "Yunusobod", price: "$70,000" },
    { id: 3, coords: [41.2995, 69.2401], title: "Olmazor", price: "$65,000" },
    { id: 4, coords: [41.3155, 69.2691], title: "Sergeli", price: "$40,000" },
  ];

  const [selected, setSelected] = useState<Property | null>(null);
  const [search, setSearch] = useState("");
  const [userCoords, setUserCoords] = useState<number[] | null>(null);

  // Filter properties
  const filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.price.toLowerCase().includes(search.toLowerCase())
  );

  // Get user location once
  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserCoords([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* Search bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by title or price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleGeolocation}>My Location</button>
      </div>

      <YMaps>
        <Map
          defaultState={{ center: [41.3111, 69.2797], zoom: 11 }}
          width="100%"
          height="500px"
        >
          <ZoomControl options={{ position: { right: 10, top: 50 } }} />
          <GeolocationControl options={{ float: "left" }} />

          {/* Clusterer */}
          <Clusterer options={{ preset: "islands#invertedVioletClusterIcons" }}>
            {filtered.map((p) => (
              <Placemark
                key={p.id}
                geometry={p.coords}
                properties={{
                  balloonContentHeader: `<b>${p.title}</b>`,
                  balloonContentBody: `<p>Price: ${p.price}</p>`,
                  balloonContentFooter: "<button>View Details</button>",
                }}
                options={{ preset: "islands#blueHomeIcon" }}
                onClick={() => setSelected(p)}
              />
            ))}
          </Clusterer>

          {/* User location marker */}
          {userCoords && (
            <Placemark
              geometry={userCoords}
              options={{ preset: "islands#redCircleDotIcon" }}
            />
          )}

          {/* Route / Polyline from user → selected property */}
          {userCoords && selected && (
            <Polyline
              geometry={[userCoords, selected.coords]}
              options={{
                strokeColor: "#FF0000",
                strokeWidth: 4,
                strokeOpacity: 0.6,
              }}
            />
          )}
        </Map>
      </YMaps>

      {/* Overlay panel */}
      {selected && (
        <div className={styles.overlay}>
          <h2>{selected.title}</h2>
          <p>Price: {selected.price}</p>
          <div className={styles.buttons}>
            <button>View Details</button>
            <button>Save</button>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
