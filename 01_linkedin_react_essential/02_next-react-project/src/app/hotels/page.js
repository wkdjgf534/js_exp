import HotelBlock from "./HotelBlock";

async function getData(params) {
  const rest = await fetch(
    "https://snowtooth-hotel-api.fly.dev"
  );
  return rest.json();
}

export default async function Page() {
  const data = await getData()
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </div>
    </main>
  )
}