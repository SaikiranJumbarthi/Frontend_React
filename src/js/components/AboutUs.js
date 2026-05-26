import React from 'react';
import { useCompanies } from '../context/CompaniesContext';
import '../../css/components/AboutUs.css';

const AboutUs = ({ onClose }) => {
  const { companies } = useCompanies();

  // Calculate statistics
  const totalCompanies = companies.length;
  const industries = [...new Set(companies.map(c => c.industry))];
  
  // Companies in India
  const indiaCompanies = companies.filter(c => 
    c.location.toLowerCase().includes('india')
  );
  
  // Companies in America (USA)
  const americaCompanies = companies.filter(c => 
    c.location.toLowerCase().includes('california') ||
    c.location.toLowerCase().includes('new york') ||
    c.location.toLowerCase().includes('texas') ||
    c.location.toLowerCase().includes('washington') ||
    c.location.toLowerCase().includes('massachusetts') ||
    c.location.toLowerCase().includes('illinois') ||
    c.location.toLowerCase().includes('georgia') ||
    c.location.toLowerCase().includes('oregon') ||
    c.location.toLowerCase().includes('arkansas') ||
    c.location.toLowerCase().includes('minnesota') ||
    c.location.toLowerCase().includes('rhode island') ||
    c.location.toLowerCase().includes('michigan') ||
    c.location.toLowerCase().includes('virginia') ||
    c.location.toLowerCase().includes('north carolina') ||
    c.location.toLowerCase().includes('new jersey') ||
    c.location.toLowerCase().includes('connecticut')
  );

  // Technology companies
  const techCompanies = companies.filter(c => c.industry === 'Technology');
  
  // Get unique technologies/technologies used
  const technologies = [
    'Cloud Computing', 'Artificial Intelligence', 'Machine Learning', 
    'Data Analytics', 'Cybersecurity', 'Mobile Development', 
    'Web Development', 'Blockchain', 'IoT', 'DevOps'
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-header">
          <h1>About Companies Directory</h1>
          <button className="about-us-close" onClick={onClose}>×</button>
        </div>

        <div className="about-us-section">
          <h2>Welcome to Companies Directory</h2>
          <p>
            Companies Directory is a comprehensive platform that provides detailed information 
            about leading global companies across various industries. Our mission is to help you 
            discover, explore, and connect with companies that shape the modern business landscape.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Platform</h2>
          <p>
            We showcase <strong>{totalCompanies}</strong> companies spanning <strong>{industries.length}</strong> different industries, 
            including Technology, Finance, Healthcare, Retail, and Manufacturing. Each company profile 
            includes detailed information about their location, employee count, founding year, and more.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Technologies & Innovation</h2>
          <p>
            The companies in our directory leverage cutting-edge technologies to drive innovation 
            and transform industries. Here are some of the key technologies shaping the business world:
          </p>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <h3>{tech}</h3>
                <p>
                  {tech === 'Cloud Computing' && 'Enabling scalable infrastructure and services'}
                  {tech === 'Artificial Intelligence' && 'Transforming business operations with intelligent automation'}
                  {tech === 'Machine Learning' && 'Powering data-driven decision making'}
                  {tech === 'Data Analytics' && 'Extracting insights from complex datasets'}
                  {tech === 'Cybersecurity' && 'Protecting digital assets and information'}
                  {tech === 'Mobile Development' && 'Creating innovative mobile experiences'}
                  {tech === 'Web Development' && 'Building modern web applications'}
                  {tech === 'Blockchain' && 'Revolutionizing trust and transparency'}
                  {tech === 'IoT' && 'Connecting devices and enabling smart solutions'}
                  {tech === 'DevOps' && 'Streamlining development and deployment'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-us-section">
          <h2>Companies in India</h2>
          <p>
            India has emerged as a major hub for global companies, with <strong>{indiaCompanies.length}</strong> companies 
            operating across various cities including Bangalore, Mumbai, Hyderabad, Delhi, Chennai, and Pune.
          </p>
          <div className="region-highlights">
            <div className="region-card">
              <h3>Bangalore, Karnataka</h3>
              <p>
                Known as the "Silicon Valley of India," Bangalore hosts major technology companies including 
                Microsoft, Google, IBM, Intel, Oracle, and many more. The city is a center for software development, 
                IT services, and innovation.
              </p>
            </div>
            <div className="region-card">
              <h3>Mumbai, Maharashtra</h3>
              <p>
                India's financial capital, Mumbai is home to major banks, healthcare companies, and retail giants. 
                Companies like JPMorgan Chase, Goldman Sachs, Johnson & Johnson, Pfizer, and Starbucks have 
                significant operations here.
              </p>
            </div>
            <div className="region-card">
              <h3>Hyderabad, Telangana</h3>
              <p>
                Hyderabad has become a major IT and business hub, hosting companies like Amazon, Salesforce, 
                and Bank of America. The city offers excellent infrastructure and a skilled workforce.
              </p>
            </div>
            <div className="region-card">
              <h3>Other Indian Cities</h3>
              <p>
                Delhi hosts major fast-food chains like McDonald's, while Chennai and Pune are centers for 
                automotive manufacturing with companies like Ford and General Motors operating facilities there.
              </p>
            </div>
          </div>
          <div className="companies-list">
            <h3>Key Companies in India:</h3>
            <ul>
              {indiaCompanies.slice(0, 10).map(company => (
                <li key={company.id}>
                  <strong>{company.name}</strong> - {company.industry} ({company.location})
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-us-section">
          <h2>Companies in America</h2>
          <p>
            The United States remains a global leader in business and innovation, with <strong>{americaCompanies.length}</strong> companies 
            operating across various states including California, New York, Texas, Washington, and more.
          </p>
          <div className="region-highlights">
            <div className="region-card">
              <h3>Silicon Valley, California</h3>
              <p>
                The heart of the global technology industry, Silicon Valley is home to tech giants like Apple, 
                Google, Meta (Facebook), Adobe, Netflix, and NVIDIA. The region drives innovation in software, 
                hardware, and digital services.
              </p>
            </div>
            <div className="region-card">
              <h3>New York, New York</h3>
              <p>
                The financial capital of the world, New York hosts major financial institutions including 
                JPMorgan Chase, Goldman Sachs, and Bank of America. The city is also home to pharmaceutical 
                companies like Pfizer.
              </p>
            </div>
            <div className="region-card">
              <h3>Seattle, Washington</h3>
              <p>
                Seattle is home to tech giants Amazon and Microsoft, as well as retail companies like Costco 
                and Starbucks. The city has a strong tech ecosystem and innovation culture.
              </p>
            </div>
            <div className="region-card">
              <h3>Other American Regions</h3>
              <p>
                Texas hosts companies like Tesla and Oracle, while Massachusetts is home to General Electric. 
                The Midwest hosts automotive manufacturers, and the East Coast has numerous financial and 
                healthcare institutions.
              </p>
            </div>
          </div>
          <div className="companies-list">
            <h3>Key Companies in America:</h3>
            <ul>
              {americaCompanies.slice(0, 10).map(company => (
                <li key={company.id}>
                  <strong>{company.name}</strong> - {company.industry} ({company.location})
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-us-section">
          <h2>Technology Companies</h2>
          <p>
            Technology companies represent a significant portion of our directory, with <strong>{techCompanies.length}</strong> companies 
            leading innovation in software, hardware, cloud services, and digital transformation.
          </p>
          <p>
            These companies are at the forefront of developing solutions that power modern businesses, Technologies
            from cloud infrastructure and artificial intelligence to cybersecurity and mobile applications. 
            They drive digital transformation across industries and shape the future of technology.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Companies Directory aims to provide transparent, comprehensive information about global companies 
            to help professionals, researchers, students, and businesses make informed decisions. We believe 
            in the power of information to drive connections and opportunities.
          </p>
        </div>

        <div className="about-us-footer">
          <button className="about-us-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


