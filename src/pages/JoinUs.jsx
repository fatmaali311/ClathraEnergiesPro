import { Helmet } from 'react-helmet';

export default function JoinUs() {
  return (
    <>
      <Helmet>
        <title>Join ClathraEnergies - Careers in Renewable Energy</title>
        <meta name="description" content="Join our team at ClathraEnergies: Opportunities in deep-tech engineering, biogas innovation, and sustainable energy." />
        <meta name="keywords" content="join ClathraEnergies, renewable energy careers, biogas engineering jobs, sustainable tech positions, deep-tech team France" /> {/* Keywords مخصصة */}
        <meta property="og:title" content="Join Us - ClathraEnergies" />
        <meta property="og:description" content="Be part of the future of clean energy." />
        <meta property="og:image" content="https://www.clathraenergies.fr/assets/images/map.png" />
        <meta property="og:url" content="https://www.clathraenergies.fr/join" />
        <link rel="canonical" href="https://www.clathraenergies.fr/join" />
      </Helmet>
       <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="section-title text-gray-700 mb-6">Join Us</h1>
      <p className="text-lg text-gray-600">This is the Join Us page.</p>
    </div>
    </>
  );
}