import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact ClathraEnergies - Get Free Consultation</title>
        <meta name="description" content="Contact ClathraEnergies for biogas plant design, renewable energy solutions, or partnerships in sustainable technologies." />
        <meta name="keywords" content="contact ClathraEnergies, biogas consultation France, renewable energy inquiry, gas storage partnership, clean energy contact" /> {/* Keywords مخصصة */}
        <meta property="og:title" content="Contact Us - ClathraEnergies" />
        <meta property="og:description" content="Reach out for free consultations on renewable gas projects." />
        <meta property="og:image" content="https://www.clathraenergies.fr/assets/images/lab-bg.jpg" />
        <meta property="og:url" content="https://www.clathraenergies.fr/contact" />
        <link rel="canonical" href="https://www.clathraenergies.fr/contact" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="section-title text-gray-700 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600">This is the Contact Us page.</p>
    </div>
    </>
  );
}