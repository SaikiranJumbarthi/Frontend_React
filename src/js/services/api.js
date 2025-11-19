// API Service for fetching company data
// Replace the base URL with your actual API endpoint

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com';

// Real companies data with actual names, locations, and websites
const realCompaniesData = [
  { name: 'Apple Inc.', industry: 'Technology', location: 'Cupertino, California', employees: 164000, founded: 1976, website: 'https://www.apple.com', description: 'Technology company that designs, develops, and sells consumer electronics, computer software, and online services.' },
  { name: 'Microsoft Corporation', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 221000, founded: 1975, website: 'https://www.microsoft.com', description: 'Multinational technology corporation producing computer software, consumer electronics, and personal computers.' },
  { name: 'Amazon.com Inc.', industry: 'Retail', location: 'Hyderabad, Telangana, India', employees: 1541000, founded: 1994, website: 'https://www.amazon.com', description: 'Multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.' },
  { name: 'Alphabet Inc. (Google)', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 190234, founded: 1998, website: 'https://www.google.com', description: 'Multinational technology conglomerate and parent company of Google and several former Google subsidiaries.' },
  { name: 'Meta Platforms (Facebook)', industry: 'Technology', location: 'Menlo Park, California', employees: 86482, founded: 2004, website: 'https://www.meta.com', description: 'Technology company that operates social networking services and virtual reality products.' },
  { name: 'Tesla Inc.', industry: 'Manufacturing', location: 'Austin, Texas', employees: 140000, founded: 2003, website: 'https://www.tesla.com', description: 'Electric vehicle and clean energy company specializing in electric cars, battery energy storage, and solar panels.' },
  { name: 'JPMorgan Chase & Co.', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 296877, founded: 1799, website: 'https://www.jpmorganchase.com', description: 'Multinational investment bank and financial services holding company.' },
  { name: 'Bank of America', industry: 'Finance', location: 'Hyderabad, Telangana, India', employees: 213000, founded: 1904, website: 'https://www.bankofamerica.com', description: 'Multinational investment bank and financial services holding company.' },
  { name: 'Wells Fargo & Company', industry: 'Finance', location: 'Bangalore, Karnataka, India', employees: 238000, founded: 1852, website: 'https://www.wellsfargo.com', description: 'Financial services company providing banking, investment, and mortgage products.' },
  { name: 'Goldman Sachs', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 45000, founded: 1869, website: 'https://www.goldmansachs.com', description: 'Multinational investment bank and financial services company.' },
  { name: 'Johnson & Johnson', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 152700, founded: 1886, website: 'https://www.jnj.com', description: 'Multinational corporation founded on the principles of science, innovation, and care.' },
  { name: 'Pfizer Inc.', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 83000, founded: 1849, website: 'https://www.pfizer.com', description: 'Multinational pharmaceutical and biotechnology corporation.' },
  { name: 'Merck & Co.', industry: 'Healthcare', location: 'Bangalore, Karnataka, India', employees: 71000, founded: 1891, website: 'https://www.merck.com', description: 'American multinational pharmaceutical company.' },
  { name: 'UnitedHealth Group', industry: 'Healthcare', location: 'Minnetonka, Minnesota', employees: 400000, founded: 1977, website: 'https://www.unitedhealthgroup.com', description: 'Managed healthcare and insurance company.' },
  { name: 'CVS Health', industry: 'Healthcare', location: 'Woonsocket, Rhode Island', employees: 300000, founded: 1963, website: 'https://www.cvshealth.com', description: 'Healthcare company that owns CVS Pharmacy and Aetna health insurance.' },
  { name: 'Walmart Inc.', industry: 'Retail', location: 'Bangalore, Karnataka, India', employees: 2300000, founded: 1962, website: 'https://www.walmart.com', description: 'Multinational retail corporation operating a chain of hypermarkets, discount department stores, and grocery stores.' },
  { name: 'The Home Depot', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 475000, founded: 1978, website: 'https://www.homedepot.com', description: 'American multinational home improvement retail corporation.' },
  { name: 'Target Corporation', industry: 'Retail', location: 'Bangalore, Karnataka, India', employees: 450000, founded: 1902, website: 'https://www.target.com', description: 'American retail corporation operating discount stores and hypermarkets.' },
  { name: 'Costco Wholesale Corporation', industry: 'Retail', location: 'Issaquah, Washington', employees: 304000, founded: 1976, website: 'https://www.costco.com', description: 'Multinational corporation which operates a chain of membership-only big-box retail stores.' },
  { name: 'Nike Inc.', industry: 'Retail', location: 'Beaverton, Oregon', employees: 79000, founded: 1964, website: 'https://www.nike.com', description: 'American multinational corporation engaged in the design, development, manufacturing, and worldwide marketing of footwear, apparel, and equipment.' },
  { name: 'The Boeing Company', industry: 'Manufacturing', location: 'Arlington, Virginia', employees: 142000, founded: 1916, website: 'https://www.boeing.com', description: 'American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles.' },
  { name: 'General Electric', industry: 'Manufacturing', location: 'Boston, Massachusetts', employees: 172000, founded: 1892, website: 'https://www.ge.com', description: 'American multinational conglomerate incorporated in New York State.' },
  { name: 'Ford Motor Company', industry: 'Manufacturing', location: 'Chennai, Tamil Nadu, India', employees: 186000, founded: 1903, website: 'https://www.ford.com', description: 'American multinational automobile manufacturer.' },
  { name: 'General Motors', industry: 'Manufacturing', location: 'Pune, Maharashtra, India', employees: 167000, founded: 1908, website: 'https://www.gm.com', description: 'American multinational automotive manufacturing corporation.' },
  { name: 'Coca-Cola Company', industry: 'Retail', location: 'Atlanta, Georgia', employees: 70000, founded: 1892, website: 'https://www.coca-cola.com', description: 'American multinational beverage corporation.' },
  { name: 'PepsiCo Inc.', industry: 'Retail', location: 'Purchase, New York', employees: 315000, founded: 1965, website: 'https://www.pepsico.com', description: 'American multinational food, snack, and beverage corporation.' },
  { name: 'Starbucks Corporation', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 402000, founded: 1971, website: 'https://www.starbucks.com', description: 'American multinational chain of coffeehouses and roastery reserves.' },
  { name: 'McDonald\'s Corporation', industry: 'Retail', location: 'Delhi, India', employees: 200000, founded: 1940, website: 'https://www.mcdonalds.com', description: 'American multinational fast food chain.' },
  { name: 'The Walt Disney Company', industry: 'Retail', location: 'Burbank, California', employees: 220000, founded: 1923, website: 'https://www.disney.com', description: 'American multinational mass media and entertainment conglomerate.' },
  { name: 'Netflix Inc.', industry: 'Technology', location: 'Los Gatos, California', employees: 13000, founded: 1997, website: 'https://www.netflix.com', description: 'American subscription streaming service and production company.' },
  { name: 'Adobe Inc.', industry: 'Technology', location: 'San Jose, California', employees: 29000, founded: 1982, website: 'https://www.adobe.com', description: 'American multinational computer software company.' },
  { name: 'Oracle Corporation', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 164000, founded: 1977, website: 'https://www.oracle.com', description: 'American multinational computer technology corporation.' },
  { name: 'IBM Corporation', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 282100, founded: 1911, website: 'https://www.ibm.com', description: 'American multinational technology corporation.' },
  { name: 'Intel Corporation', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 121100, founded: 1968, website: 'https://www.intel.com', description: 'American multinational corporation and technology company.' },
  { name: 'NVIDIA Corporation', industry: 'Technology', location: 'Santa Clara, California', employees: 29000, founded: 1993, website: 'https://www.nvidia.com', description: 'American multinational technology company designing graphics processing units.' },
  { name: 'Salesforce', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 79000, founded: 1999, website: 'https://www.salesforce.com', description: 'American cloud-based software company providing customer relationship management services.' },
  { name: 'Uber Technologies', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 32000, founded: 2009, website: 'https://www.uber.com', description: 'American mobility as a service provider.' },
  { name: 'Airbnb Inc.', industry: 'Technology', location: 'Mumbai, Maharashtra, India', employees: 7000, founded: 2008, website: 'https://www.airbnb.com', description: 'American company operating an online marketplace for short- and long-term homestays and experiences.' },
  { name: 'Spotify Technology', industry: 'Technology', location: 'Stockholm, Sweden', employees: 9000, founded: 2006, website: 'https://www.spotify.com', description: 'Swedish audio streaming and media services provider.' },
  { name: 'Samsung Electronics', industry: 'Technology', location: 'Seoul, South Korea', employees: 267937, founded: 1969, website: 'https://www.samsung.com', description: 'South Korean multinational electronics corporation.' },
  { name: 'Sony Corporation', industry: 'Technology', location: 'Tokyo, Japan', employees: 109700, founded: 1946, website: 'https://www.sony.com', description: 'Japanese multinational conglomerate corporation.' },
  { name: 'Toyota Motor Corporation', industry: 'Manufacturing', location: 'Toyota, Japan', employees: 372817, founded: 1937, website: 'https://www.toyota.com', description: 'Japanese multinational automotive manufacturer.' },
  { name: 'Volkswagen Group', industry: 'Manufacturing', location: 'Wolfsburg, Germany', employees: 672800, founded: 1937, website: 'https://www.volkswagen.com', description: 'German multinational automotive manufacturing corporation.' },
  { name: 'BMW Group', industry: 'Manufacturing', location: 'Munich, Germany', employees: 133778, founded: 1916, website: 'https://www.bmw.com', description: 'German multinational manufacturer of luxury vehicles and motorcycles.' },
  { name: 'Mercedes-Benz Group', industry: 'Manufacturing', location: 'Stuttgart, Germany', employees: 172425, founded: 1926, website: 'https://www.mercedes-benz.com', description: 'German luxury automotive brand.' },
  { name: 'HSBC Holdings', industry: 'Finance', location: 'London, United Kingdom', employees: 219000, founded: 1865, website: 'https://www.hsbc.com', description: 'British multinational universal bank and financial services holding company.' },
  { name: 'Barclays PLC', industry: 'Finance', location: 'London, United Kingdom', employees: 83000, founded: 1690, website: 'https://www.barclays.com', description: 'British multinational universal bank.' },
  { name: 'Deutsche Bank', industry: 'Finance', location: 'Frankfurt, Germany', employees: 84000, founded: 1870, website: 'https://www.db.com', description: 'German multinational investment bank and financial services company.' },
  { name: 'BNP Paribas', industry: 'Finance', location: 'Paris, France', employees: 190000, founded: 1848, website: 'https://www.bnpparibas.com', description: 'French international banking group.' },
  { name: 'Credit Suisse', industry: 'Finance', location: 'Zurich, Switzerland', employees: 50000, founded: 1856, website: 'https://www.credit-suisse.com', description: 'Swiss multinational investment bank and financial services company.' },
  { name: 'UBS Group', industry: 'Finance', location: 'Zurich, Switzerland', employees: 72000, founded: 1862, website: 'https://www.ubs.com', description: 'Swiss multinational investment bank and financial services company.' },
  { name: 'Roche Holding', industry: 'Healthcare', location: 'Basel, Switzerland', employees: 101000, founded: 1896, website: 'https://www.roche.com', description: 'Swiss multinational healthcare company.' },
  { name: 'Novartis AG', industry: 'Healthcare', location: 'Basel, Switzerland', employees: 108000, founded: 1996, website: 'https://www.novartis.com', description: 'Swiss multinational pharmaceutical corporation.' },
  { name: 'GlaxoSmithKline', industry: 'Healthcare', location: 'London, United Kingdom', employees: 94000, founded: 2000, website: 'https://www.gsk.com', description: 'British multinational pharmaceutical and biotechnology company.' },
  { name: 'AstraZeneca', industry: 'Healthcare', location: 'Cambridge, United Kingdom', employees: 83000, founded: 1999, website: 'https://www.astrazeneca.com', description: 'British-Swedish multinational pharmaceutical and biotechnology company.' },
  
  // Additional companies in Hyderabad
  { name: 'Dell Technologies', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 165000, founded: 1984, website: 'https://www.dell.com', description: 'American multinational technology company that develops, sells, repairs, and supports computers and related products.' },
  { name: 'Accenture', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 738000, founded: 1989, website: 'https://www.accenture.com', description: 'Multinational professional services company providing strategy, consulting, digital, technology and operations services.' },
  { name: 'Tech Mahindra', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 158000, founded: 1986, website: 'https://www.techmahindra.com', description: 'Indian multinational technology company providing IT services and business process outsourcing.' },
  { name: 'Cognizant Technology Solutions', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 355000, founded: 1994, website: 'https://www.cognizant.com', description: 'Multinational technology company providing IT services, including digital, technology, consulting, and operations services.' },
  { name: 'Infosys', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 345000, founded: 1981, website: 'https://www.infosys.com', description: 'Indian multinational information technology company providing business consulting, information technology and outsourcing services.' },
  { name: 'Wipro Limited', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 250000, founded: 1945, website: 'https://www.wipro.com', description: 'Indian multinational corporation providing information technology, consulting and business process services.' },
  { name: 'HCL Technologies', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 225000, founded: 1976, website: 'https://www.hcltech.com', description: 'Indian multinational information technology services and consulting company.' },
  { name: 'Capgemini', industry: 'Technology', location: 'Hyderabad, Telangana, India', employees: 360000, founded: 1967, website: 'https://www.capgemini.com', description: 'French multinational information technology services and consulting company.' },
  { name: 'Deloitte', industry: 'Consulting', location: 'Hyderabad, Telangana, India', employees: 457000, founded: 1845, website: 'https://www.deloitte.com', description: 'Multinational professional services network providing audit, consulting, financial advisory, risk advisory, tax, and related services.' },
  { name: 'PwC (PricewaterhouseCoopers)', industry: 'Consulting', location: 'Hyderabad, Telangana, India', employees: 364000, founded: 1849, website: 'https://www.pwc.com', description: 'Multinational professional services network providing assurance, tax, and advisory services.' },
  
  // Additional companies in Bangalore
  { name: 'Cisco Systems', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 84000, founded: 1984, website: 'https://www.cisco.com', description: 'American multinational technology conglomerate that develops, manufactures and sells networking hardware, software, telecommunications equipment.' },
  { name: 'VMware', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 37000, founded: 1998, website: 'https://www.vmware.com', description: 'American cloud computing and virtualization technology company providing cloud management and virtualization software.' },
  { name: 'SAP SE', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 111000, founded: 1972, website: 'https://www.sap.com', description: 'German multinational software corporation that makes enterprise software to manage business operations and customer relations.' },
  { name: 'HP Inc.', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 51000, founded: 1939, website: 'https://www.hp.com', description: 'American multinational information technology company that develops and provides hardware and software.' },
  { name: 'Qualcomm', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 51000, founded: 1985, website: 'https://www.qualcomm.com', description: 'American multinational corporation that creates semiconductors, software, and services related to wireless technology.' },
  { name: 'PayPal', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 30000, founded: 1998, website: 'https://www.paypal.com', description: 'American multinational financial technology company operating an online payments system.' },
  { name: 'LinkedIn', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 21000, founded: 2002, website: 'https://www.linkedin.com', description: 'Business and employment-focused social media platform owned by Microsoft.' },
  { name: 'Twitter (X)', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 7500, founded: 2006, website: 'https://www.twitter.com', description: 'Social media platform for microblogging and social networking.' },
  { name: 'Zoom Video Communications', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 8500, founded: 2011, website: 'https://www.zoom.us', description: 'American communications technology company providing videotelephony and online chat services.' },
  { name: 'ServiceNow', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 22000, founded: 2004, website: 'https://www.servicenow.com', description: 'American cloud computing company that provides digital workflow automation software.' },
  { name: 'Atlassian', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 10000, founded: 2002, website: 'https://www.atlassian.com', description: 'Australian software company that develops products for software developers, project managers and content management.' },
  { name: 'Siemens', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 311000, founded: 1847, website: 'https://www.siemens.com', description: 'German multinational technology conglomerate focusing on digitalization, electrification and automation.' },
  { name: 'Schneider Electric', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 162000, founded: 1836, website: 'https://www.schneider-electric.com', description: 'French multinational company providing energy and automation digital solutions.' },
  { name: 'Bosch', industry: 'Manufacturing', location: 'Bangalore, Karnataka, India', employees: 421000, founded: 1886, website: 'https://www.bosch.com', description: 'German multinational engineering and technology company.' },
  { name: 'ABB Group', industry: 'Technology', location: 'Bangalore, Karnataka, India', employees: 105000, founded: 1988, website: 'https://www.abb.com', description: 'Swiss-Swedish multinational corporation specializing in robotics, power, heavy electrical equipment, and automation technology.' },
  
  // Additional companies in Mumbai
  { name: 'Morgan Stanley', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 81000, founded: 1935, website: 'https://www.morganstanley.com', description: 'American multinational investment bank and financial services company.' },
  { name: 'Citigroup', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 240000, founded: 1812, website: 'https://www.citigroup.com', description: 'American multinational investment bank and financial services corporation.' },
  { name: 'Deutsche Bank', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 84000, founded: 1870, website: 'https://www.db.com', description: 'German multinational investment bank and financial services company.' },
  { name: 'Credit Suisse', industry: 'Finance', location: 'Mumbai, Maharashtra, India', employees: 50000, founded: 1856, website: 'https://www.credit-suisse.com', description: 'Swiss multinational investment bank and financial services company.' },
  { name: 'Novartis AG', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 108000, founded: 1996, website: 'https://www.novartis.com', description: 'Swiss multinational pharmaceutical corporation.' },
  { name: 'GlaxoSmithKline', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 94000, founded: 2000, website: 'https://www.gsk.com', description: 'British multinational pharmaceutical and biotechnology company.' },
  { name: 'AstraZeneca', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 83000, founded: 1999, website: 'https://www.astrazeneca.com', description: 'British-Swedish multinational pharmaceutical and biotechnology company.' },
  { name: 'Bayer AG', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 100000, founded: 1863, website: 'https://www.bayer.com', description: 'German multinational pharmaceutical and biotechnology company.' },
  { name: 'Sanofi', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 100000, founded: 1973, website: 'https://www.sanofi.com', description: 'French multinational pharmaceutical and healthcare company.' },
  { name: 'Abbott Laboratories', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 115000, founded: 1888, website: 'https://www.abbott.com', description: 'American multinational medical devices and health care company.' },
  { name: 'Medtronic', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 95000, founded: 1949, website: 'https://www.medtronic.com', description: 'American-Irish medical device company that develops and manufactures medical devices and therapies.' },
  { name: 'Boston Scientific', industry: 'Healthcare', location: 'Mumbai, Maharashtra, India', employees: 41000, founded: 1979, website: 'https://www.bostonscientific.com', description: 'American manufacturer of medical devices used in interventional medical specialties.' },
  { name: 'Reliance Industries', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 195000, founded: 1966, website: 'https://www.ril.com', description: 'Indian multinational conglomerate company with businesses in energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles.' },
  { name: 'Tata Consultancy Services', industry: 'Technology', location: 'Mumbai, Maharashtra, India', employees: 600000, founded: 1968, website: 'https://www.tcs.com', description: 'Indian multinational information technology services and consulting company.' },
  { name: 'Larsen & Toubro', industry: 'Manufacturing', location: 'Mumbai, Maharashtra, India', employees: 150000, founded: 1938, website: 'https://www.larsentoubro.com', description: 'Indian multinational conglomerate company with business interests in engineering, construction, manufacturing, technology, information technology and financial services.' },
  { name: 'Mahindra & Mahindra', industry: 'Manufacturing', location: 'Mumbai, Maharashtra, India', employees: 260000, founded: 1945, website: 'https://www.mahindra.com', description: 'Indian multinational automotive manufacturing corporation.' },
  { name: 'Godrej Group', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 28000, founded: 1897, website: 'https://www.godrej.com', description: 'Indian multinational conglomerate company with businesses in consumer goods, real estate, agriculture, and many other areas.' },
  { name: 'Aditya Birla Group', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 140000, founded: 1857, website: 'https://www.adityabirla.com', description: 'Indian multinational conglomerate company with businesses in metals, textiles, carbon black, telecom, cement, and retail.' },
  { name: 'ITC Limited', industry: 'Retail', location: 'Mumbai, Maharashtra, India', employees: 26000, founded: 1910, website: 'https://www.itcportal.com', description: 'Indian multinational conglomerate company with businesses in fast-moving consumer goods, hotels, paperboards and packaging, agri-business, and information technology.' },
];

// Mock data generator for development/testing
const generateMockCompanies = () => {
  return realCompaniesData.map((company, index) => ({
    id: index + 1,
    ...company
  }));
};

// Fetch companies from API
export const fetchCompanies = async () => {
  try {
    // For demo purposes, we'll use real company data
    // Replace this with actual API call: const response = await fetch(`${API_BASE_URL}/companies`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return real company data
    const companies = generateMockCompanies();
    
    // Uncomment below for real API integration:
    // const response = await fetch(`${API_BASE_URL}/companies`);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const companies = await response.json();
    
    return companies;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

// Filter companies based on filters
export const filterCompanies = (companies, filters) => {
  return companies.filter(company => {
    const matchesName = !filters.name || 
      company.name.toLowerCase().includes(filters.name.toLowerCase());
    
    const matchesIndustry = !filters.industry || 
      company.industry === filters.industry;
    
    let matchesLocation = true;
    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      const companyLocationLower = company.location.toLowerCase();
      
      if (locationLower === 'india') {
        matchesLocation = companyLocationLower.includes('india');
      } else if (locationLower === 'america') {
        // Check for US states
        const usStates = [
          'california', 'new york', 'texas', 'washington', 'massachusetts',
          'illinois', 'georgia', 'oregon', 'arkansas', 'minnesota',
          'rhode island', 'michigan', 'virginia', 'north carolina',
          'new jersey', 'connecticut', 'delaware', 'maryland', 'florida'
        ];
        matchesLocation = usStates.some(state => companyLocationLower.includes(state));
      } else {
        matchesLocation = companyLocationLower.includes(locationLower);
      }
    }
    
    return matchesName && matchesIndustry && matchesLocation;
  });
};

