import React, { useState } from "react";
import { Stethoscope, HeartPulse, Baby, Syringe, Calendar, Phone, MapPin, Star, Instagram, Facebook, MessageCircle, Clock, Award, Users, Heart } from "lucide-react";

// ---- REPLACE THESE URLs WITH YOUR REAL PHOTOS ----
// To add your real photos:
// 1. Upload photos to Google Drive or any image hosting service
// 2. Get the direct image URLs
// 3. Replace the URLs below
const MOM_PHOTO = ""; // Add Dr. Shelly's photo URL here
const DAD_PHOTO = ""; // Add Dr. Rakesh's photo URL here  
const HOSPITAL_PHOTO = "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop";

// Reviews with English text and Punjabi cultural elements
const reviews = [
  {
    name: "Gurpreet Kaur Brar",
    city: "Bathinda, Punjab",
    text: "Dr. Shelly ji ne sirf medicine naal hi help kiti. 2 saal baad waheguru ji da kirpa naal baby hoya. Bohot sohni doctor ji ae, family te proud ae assi.",
    stars: 5,
  },
  {
    name: "Harjit Singh Dhillon",
    city: "Mansa",
    text: "Ultrasound bilkul accurate te clear report mildi ae. Dr. Rakesh ji da Air Force wala discipline feel hunda ae har time. Tussi great doctor ho ji.",
    stars: 5,
  },
  {
    name: "Mandeep Kaur Sidhu",
    city: "Faridkot",
    text: "Honest treatment kiti, koi faltu procedures nahi suggest kite. 4 mahine vich conceive ho gayi. Rab da shukar ae, Dr. Shelly ji bahut vadiya ne.",
    stars: 5,
  },
  {
    name: "Jasbir Singh Gill",
    city: "Malout", 
    text: "High risk pregnancy si meri wife di, par Dr. ji ne bohot pyaar naal handle kita. Baby te mummy dono healthy ne. Allah da shukar ae.",
    stars: 5,
  },
  {
    name: "Simran Kaur Sandhu",
    city: "Barnala",
    text: "Pregnancy de time te family warga feel kita hospital vich. Dr. Shelly ji bohot caring ne, har visit te smile naal mildi ae. Tussi amazing ho.",
    stars: 5,
  },
  {
    name: "Amanpreet Singh Bajwa",
    city: "Muktsar",
    text: "Family planning barey clear guidance mili. Wife te meri sari doubts clear ho gayi. Response v jaldi mildi ae phone te. Bahut meherbani doctor ji.",
    stars: 5,
  },
  {
    name: "Navdeep Kaur Randhawa",
    city: "Kotkapura",
    text: "PCOS di problem si, par Dr. ji ne medicine naal theek kar diti. Hun periods regular ne. Bohot shukar ae waheguru da, doctor ji da v.",
    stars: 5,
  },
  {
    name: "Ranjit Singh Cheema",
    city: "Bhucho Mandi",
    text: "Ultrasound report bilkul sahi aundi ae, koi galti nahi. Dr. Rakesh ji bohot experienced ne, trust kar sakde aan fully. Recommend karda han sabnu.",
    stars: 5,
  },
];

const services = [
  { 
    icon: <HeartPulse className="w-6 h-6" />, 
    title: "Infertility Treatment", 
    desc: "Medicine-based approach focusing on natural conception. Bachche di khushi hasil karo.",
    punjabi: "ਸੰਤਾਨ ਪ੍ਰਾਪਤੀ"
  },
  { 
    icon: <Baby className="w-6 h-6" />, 
    title: "Pregnancy Care", 
    desc: "Complete antenatal care, safe deliveries, high-risk pregnancy management. Mata te bachche di suraksha.",
    punjabi: "ਗਰਭਾਵਸਥਾ ਦੇਖਭਾਲ"
  },
  { 
    icon: <Syringe className="w-6 h-6" />, 
    title: "Family Planning", 
    desc: "Birth control counseling and safe contraception options. Parivar niyojan di salah.",
    punjabi: "ਪਰਿਵਾਰ ਨਿਯੋਜਨ"
  },
  { 
    icon: <Stethoscope className="w-6 h-6" />, 
    title: "Women's Health", 
    desc: "PCOS, menstrual disorders, menopause care. Mahila swasthya seva.",
    punjabi: "ਔਰਤਾਂ ਦਾ ਸਿਹਤ"
  },
  { 
    icon: <HeartPulse className="w-6 h-6" />, 
    title: "Ultrasound & Doppler", 
    desc: "High-precision diagnostic imaging and pregnancy scans. Sateek jaanch karvao.",
    punjabi: "ਅਲਟਰਾਸਾਊਂਡ ਜਾਂਚ"
  },
];

const achievements = [
  { icon: <Users className="w-8 h-8" />, number: "2000+", label: "Happy Families", punjabi: "ਖੁਸ਼ ਪਰਿਵਾਰ" },
  { icon: <Baby className="w-8 h-8" />, number: "20+", label: "Years Experience", punjabi: "ਸਾਲ ਤਜਰਬਾ" },
  { icon: <Award className="w-8 h-8" />, number: "98%", label: "Success Rate", punjabi: "ਸਫਲਤਾ ਦਰ" },
  { icon: <Heart className="w-8 h-8" />, number: "5★", label: "Patient Rating", punjabi: "ਮਰੀਜ਼ ਰੇਟਿੰਗ" },
];

const Stat = ({ icon, number, label, punjabi }) => (
  <div className="text-center bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-3 text-blue-600">{icon}</div>
    <div className="text-3xl font-bold text-gray-900">{number}</div>
    <div className="text-sm text-gray-600 font-medium">{label}</div>
    <div className="text-xs text-orange-600 mt-1">{punjabi}</div>
  </div>
);

const Section = ({ id, title, subtitle, children, punjabi }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
      {punjabi && <p className="text-lg text-orange-600 font-medium mb-3">{punjabi}</p>}
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const DoctorCard = ({ photo, name, title, points, experience, punjabi }) => (
  <div className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow p-6">
    <div className="flex items-center gap-4 mb-4">
      {photo ? (
        <img src={photo} alt={name} className="w-24 h-24 rounded-2xl object-cover border-2 border-blue-100" />
      ) : (
        <div className="w-24 h-24 rounded-2xl bg-blue-100 border-2 border-blue-200 flex items-center justify-center">
          <Stethoscope className="w-12 h-12 text-blue-600" />
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{title}</p>
        <p className="text-sm text-gray-500">{experience}</p>
        <p className="text-sm text-orange-600 font-medium mt-1">{punjabi}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-3">
      {[...Array(review.stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>
    <div className="border-t pt-3">
      <p className="font-semibold text-gray-900">{review.name}</p>
      <p className="text-sm text-gray-500">{review.city}</p>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', city: '', service: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `🏥 *Jeevan Jyoti Hospital - Appointment Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *City:* ${formData.city}
🏥 *Service:* ${formData.service}

💬 *Message:*
${formData.message || 'No additional message'}

---
ਮੁਲਾਕਾਤ ਦੀ ਬੇਨਤੀ - Please confirm appointment time.`;

    // WhatsApp number for Jeevan Jyoti Hospital
    const hospitalWhatsApp = "919815185617"; // Updated with correct number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${hospitalWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '', phone: '', city: '', service: '', message: ''
    });
    
    // Show success message
    alert('Redirecting to WhatsApp! ਵਟਸਐਪ ਤੇ ਭੇਜ ਰਹੇ ਹਾਂ!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-2xl border shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Consultation</h3>
      <p className="text-sm text-orange-600 mb-4">ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            placeholder="Full Name (ਪੂਰਾ ਨਾਮ)" 
            required
          />
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            placeholder="Phone Number (ਫੋਨ ਨੰਬਰ)" 
            type="tel"
            required
          />
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <input 
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            placeholder="City / Area (ਸ਼ਹਿਰ)" 
            required
          />
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          >
            <option value="">Select Service (ਸੇਵਾ ਚੁਣੋ)</option>
            <option value="infertility">Infertility Treatment</option>
            <option value="pregnancy">Pregnancy Care</option>
            <option value="ultrasound">Ultrasound</option>
            <option value="family-planning">Family Planning</option>
            <option value="womens-health">Women's Health</option>
          </select>
        </div>
        
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]" 
          placeholder="Describe your concern (ਆਪਣੀ ਸਮੱਸਿਆ ਦੱਸੋ)" 
        />
        
        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Send via WhatsApp (ਵਟਸਐਪ ਰਾਹੀਂ ਭੇਜੋ)
        </button>
        
        <p className="text-xs text-gray-500">
          By submitting, you agree to be contacted for scheduling. ਪ੍ਰਾਈਵੇਸੀ ਦੀ ਪੂਰੀ ਸੁਰੱਖਿਆ ਕਰਾਂਗੇ।
        </p>
      </form>
    </div>
  );
};

export default function JeevanJyotiHospitalSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">Jeevan Jyoti Hospital</span>
              <p className="text-xs text-orange-600">ਜੀਵਨ ਜੋਤੀ ਹਸਪਤਾਲ</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Doctors</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> 
              Book Now
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-gray-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Doctors</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Trusted Women's Healthcare in <span className="text-blue-600">Bathinda</span>
            </h1>
            <p className="text-xl text-orange-600 font-medium mb-4">
              ਮਾਤਾ ਤੇ ਬੱਚੇ ਦੀ ਸੇਵਾ ਵਿੱਚ ਸਮਰਪਿਤ
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Specialized in medicine-based infertility treatment, comprehensive pregnancy care, and precise diagnostic imaging. 
              Your journey to parenthood begins with compassionate, honest care.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </a>
              <a 
                href="tel:+919815185617" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> 
                Call Now
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((achievement, i) => (
                <Stat key={i} {...achievement} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={HOSPITAL_PHOTO} 
              alt="Jeevan Jyoti Hospital" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Bengali Wali Gali</p>
                  <p className="text-sm text-gray-600">Bathinda, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section 
        id="services" 
        title="Our Services" 
        punjabi="ਸਾਡੀ ਸੇਵਾਵਾਂ"
        subtitle="Comprehensive women's healthcare with a focus on natural, medicine-based treatments and compassionate care."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition-colors">
                  <div className="text-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
                  <p className="text-sm text-orange-600 font-medium">{service.punjabi}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Doctors */}
      <Section 
        id="doctors" 
        title="Our Expert Doctors" 
        punjabi="ਸਾਡੇ ਵਿਸ਼ੇਸ਼ੱਗ ਡਾਕਟਰ"
        subtitle="Experienced professionals dedicated to providing personalized, compassionate care for every patient."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <DoctorCard
            photo={MOM_PHOTO}
            name="Dr. Shelly Gupta"
            title="Obstetrics & Gynecology Specialist"
            experience="15+ Years Experience"
            punjabi="ਪ੍ਰਸੂਤੀ ਤੇ ਸਤ੍ਰੀ ਰੋਗ ਵਿਸ਼ੇਸ਼ੱਗ"
            points={[
              "Medicine-based infertility treatment with focus on natural conception",
              "Complete pregnancy care including normal and C-section deliveries",
              "Expert in PCOS, menstrual disorders, and menopause management",
              "Compassionate approach to adolescent gynecology and family planning"
            ]}
          />
          <DoctorCard
            photo={DAD_PHOTO}
            name="Dr. Rakesh Gupta"
            title="Senior Medical Officer (Retd. Air Force)"
            experience="20+ Years Experience"
            punjabi="ਵਰਿਸ਼ਠ ਚਿਕਿਤਸਾ ਅਧਿਕਾਰੀ"
            points={[
              "High-precision ultrasound and Doppler imaging specialist",
              "Expert in diagnostic scans and pregnancy monitoring",
              "Military discipline ensuring timely and accurate reports",
              "Calm, methodical approach to patient care and consultation"
            ]}
          />
        </div>
      </Section>

      {/* Reviews */}
      <Section 
        id="reviews" 
        title="Patient Stories" 
        punjabi="ਮਰੀਜ਼ਾਂ ਦੇ ਕਿੱਸੇ"
        subtitle="Real experiences from families across Punjab who trusted us with their healthcare journey."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section 
        id="contact" 
        title="Contact & Appointments" 
        punjabi="ਸੰਪਰਕ ਤੇ ਮੁਲਾਕਾਤ"
        subtitle="Schedule your consultation today. We'll confirm your preferred time slot via call or WhatsApp."
      >
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ContactForm />
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-lg p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Contact</h3>
              <p className="text-sm text-orange-600 mb-4">ਜਲਦੀ ਸੰਪਰਕ ਕਰੋ</p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+919815185617" 
                  className="flex items-center gap-3 p-3 rounded-xl border hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">+91 98151 85617</p>
                    <p className="text-sm text-gray-600">Call for immediate assistance</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/919815185617?text=Hello%20Dr.%20Shelly%20ji,%20I%20would%20like%20to%20book%20an%20appointment.%20ਸਤ%20ਸ੍ਰੀ%20ਅਕਾਲ!" 
                  className="flex items-center gap-3 p-3 rounded-xl border hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp Us</p>
                    <p className="text-sm text-gray-600">Quick messaging support</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-3 rounded-xl border">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium">Bengali Wali Gali, Bathinda</p>
                    <p className="text-sm text-gray-600">Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl border">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border shadow-lg p-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.066696247877!2d74.9452094!3d30.206643800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a1eee78fb9%3A0x3c9def9de3e45aeb!2sJeevan%20Jyoti%20Hospital%20%E2%80%93%20Obstetrics%2C%20Gynecology%20%26%20Infertility%20Care!5e0!3m2!1sen!2snz!4v1755137701152!5m2!1sen!2snz" 
                  className="w-full h-full rounded-xl"
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jeevan Jyoti Hospital Location"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600">📍 Jeevan Jyoti Hospital - Bengali Wali Gali, Bathinda</p>
                <p className="text-xs text-orange-600">ਜੀਵਨ ਜੋਤੀ ਹਸਪਤਾਲ - ਬੰਗਾਲੀ ਵਾਲੀ ਗਲੀ, ਬਠਿੰਡਾ</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Jeevan Jyoti Hospital</h3>
                  <p className="text-sm text-orange-300">ਸਤ ਸ੍ਰੀ ਅਕਾਲ - ਸੇਵਾ ਦੀ ਭਾਵਨਾ</p>
                </div>
              </div>
              <p className="text-gray-300">
                Dedicated to women's health with compassionate care and modern medical expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Infertility Treatment</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Pregnancy Care</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Ultrasound</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Women's Health</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book Appointment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Bengali Wali Gali, Bathinda</p>
                <p>Punjab, India</p>
                <p>Phone: +91 98151 85617</p>
                <p className="text-orange-300">ਸੇਵਾ ਵਿੱਚ ਸਮਰਪਿਤ</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jeevan Jyoti Hospital. All rights reserved. | Made with ❤️ for better healthcare</p>
          </div>
        </div>
      </footer>
    </div>
  );
}