import Client from "./homeData.json";

function Sponsors() {
  return (
    <div className="grid grid-cols-5 items-center">
      {Client.sponsors.map((client) => {
        return (
          <div className="flex justify-center" key={client.id}>
            <img className="w-[50%]" src={client.img} alt="Client_image" />
          </div>
        );
      })}
    </div>
  );
}
export default Sponsors;
