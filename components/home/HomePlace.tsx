import Image from "next/image";
import churchImage from "../../public/images/church.jpeg";
import receptionImage from "../../public/images/reception.jpeg";

function HomePlace() {
  return (
    <div className="lg:px-3 flex lg:flex-row flex-col items-start gap-3 lg:mt-3 mb-20">
      <div className="lg:w-1/2 w-full h-[900px] bg-[#17392B] flex flex-col items-center p-14">
        <h2 className="font-serif text-5xl mt-5 text-white">Ceremony</h2>
        <h2 className="font-serif text-5xl text-white">Starts at 2PM</h2>
        <div className="bg-black bg-[url('/images/church.jpeg')] h-[225px] w-[400px] bg-center bg-cover bg-no-repeat mt-3" />
        <h3 className="font-maharlika text-white text-2xl mt-5 w-[400px] text-center">
          San Antonio de Padua Parish, Antipolo
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7722.74609584661!2d121.19238481191711!3d14.57780657696628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c0a3cc688529%3A0x34629c524483642d!2sSan%20Antonio%20de%20Padua%20Parish%20Church%20-%20San%20Antonio%20Village%2C%20Dalig%2C%20Antipolo%20City%2C%20Rizal%20(Diocese%20of%20Antipolo)!5e0!3m2!1sen!2sph!4v1693142474704!5m2!1sen!2sph"
          loading="lazy"
          className="w-[400px] h-[300px] mt-5"
        ></iframe>
      </div>
      <div className="lg:w-1/2 w-full h-[900px] bg-[#17392B] flex flex-col items-center p-14">
        <h2 className="font-serif text-5xl mt-5 text-white">Reception</h2>
        <h2 className="font-serif text-5xl text-white">Starts at 4PM</h2>
        <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="w-[400px] mt-3"
        >
          <source src="/videos/reception.mp4" type="video/mp4" />
        </video>
        <div className="items-center flex">
          <h3 className="font-maharlika text-white text-2xl mt-5 w-[400px] text-center">
            LeBlanc Hotel and Resort, Antipolo
          </h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15444.365797967423!2d121.1708341!3d14.5938646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8b2b68b4fe3%3A0x5418bb6f5e7508c6!2sLeBlanc%20Hotel%20and%20Resort!5e0!3m2!1sen!2sph!4v1693143301157!5m2!1sen!2sph"
          loading="lazy"
          className="w-[400px] h-[300px] mt-5"
        ></iframe>
      </div>
    </div>
  );
}

export default HomePlace;
