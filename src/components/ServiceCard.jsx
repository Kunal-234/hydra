import services from "../services/serviceData";

const ServiceCard = () => {
  const serviceData = services.map((service, index) => {
    return (
      <div
        key={index}
        className="mx-2 gradient-circle items-center text-center p-5 rounded-[30px] "
      >
        <img src={service.image} alt="" className="services-image mx-auto" />
        <h2 className="services-h2 mt-5">{service.title}</h2>
        <div className="line-card" />
        <p className="p-style text-left">{service.description}</p>
        <button className="button-gradient button-hover uppercase mx-auto">
          {service.cta}
        </button>
      </div>
    );
  });

  return (
    <>
      <section>
        <div className="grid grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-20 ">
          {serviceData}
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
