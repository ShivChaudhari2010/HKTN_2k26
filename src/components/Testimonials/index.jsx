import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "This AI automation platform completely transformed our workflow. Tasks that previously took hours are now completed within minutes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudSync",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The performance is outstanding. Integration was effortless and the automation accuracy exceeded our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder",
    company: "ScaleFlow",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Highly recommended for startups. The ROI became visible within the first month of implementation.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonial-heading">
          <span className="section-badge">Testimonials</span>

          <h2>
            Trusted by
            <span> Industry Leaders</span>
          </h2>

          <p>
            Thousands of teams use our AI platform every day to automate
            repetitive work, improve productivity, and scale faster.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <div className="testimonial-stars">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <p className="testimonial-review">"{item.review}"</p>

              <div className="testimonial-user">
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-avatar"
                />

                <div>
                  <h4>{item.name}</h4>

                  <p>
                    {item.role}
                    {" • "}
                    {item.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
