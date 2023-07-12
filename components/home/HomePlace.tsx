function HomePlace() {
  return (
    <div className="lg:px-3 flex lg:flex-row flex-col items-start gap-3 lg:mt-3 mb-20">
      <div className="lg:w-1/2 w-full h-[820px] bg-[#17392B] flex flex-col items-center p-14">
        <h2 className="font-maharlika text-2xl mt-5 text-white">Ceremony</h2>
        <h2 className="font-maharlika text-2xl text-white">Starts at 2PM</h2>
        <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="w-[400px] mt-3"
        >
          <source src="/videos/church.mp4" type="video/mp4" />
        </video>
        <h3 className="font-serif text-white text-5xl mt-5 w-[400px] text-center">
          Nuestra Señora dela Annunciata Parish Church
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2889668648613!2d121.23565301062689!3d14.639531285792376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397be6b6774597d%3A0xe5a30a211df17a18!2sNuestra%20Se%C3%B1ora%20dela%20Annunciata%20Parish%20Church%20-%20Lumang%20Bosoboso%20cms!5e0!3m2!1sen!2sph!4v1688968687978!5m2!1sen!2sph"
          loading="lazy"
          className="w-[400px] h-[250px] mt-5"
        ></iframe>
      </div>
      <div className="lg:w-1/2 w-full h-[820px] bg-[#17392B] flex flex-col items-center p-14">
        <h2 className="font-maharlika text-2xl mt-5 text-white">Reception</h2>
        <h2 className="font-maharlika text-2xl text-white">Starts at 4PM</h2>
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
        <div className="h-[115px] items-center flex">
          <h3 className="font-serif text-white text-5xl mt-5">
            LeBlanc Hotel and Resort
          </h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.091449740429!2d121.16825381062597!3d14.593864585832844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8b2b68b4fe3%3A0x5418bb6f5e7508c6!2sLeBlanc%20Hotel%20and%20Resort!5e0!3m2!1sen!2sph!4v1688969057817!5m2!1sen!2sph"
          loading="lazy"
          className="w-[400px] h-[250px] mt-5"
        ></iframe>
      </div>
    </div>
  );
}

export default HomePlace;
