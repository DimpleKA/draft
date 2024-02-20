import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherOrHusbandName: '',
    relationWithApplicant: '',
    address: '',
    thanaArea: '',
    district: '',
    incidentLocation: '',
    relatedThana: '',
    incidentDistrict: '',
    mobileNumber: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'district') {
      // Simulate fetching thana list based on selected district
      fetchThanaList(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to the server or perform any other action
    console.log(formData);
  };

  // Array of options for the relationWithApplicant select dropdown
  const relationOptions = ['पत्नी', 'पुत्र', 'पिता', 'पति'];

  // Simulated function to fetch thana list based on selected district
  const fetchThanaList = (selectedDistrict) => {
    // You can replace this with actual API call to fetch thana list
    // For now, just a simulated list
    if (selectedDistrict === 'प्रयागराज') {
        setThanaList(['खुल्दाबाद', 'कोतवाली', 'शाहगंज', 'कैंट', 'सिविल लाइन्स', 'महिला थाना', 'शिवकुटी', 'एयरपोर्ट', 'धूमनगंज', 'पूरामुफ्ती', 'अतरसुइया', 'करेली', 'मुट्ठीगंज', 'कर्नलगंज', 'जॉर्जटाउन', 'कीडगंज', 'दारागंज', 'झूंसी', 'हण्डिया', 'सराय ममरेज', 'उतरांव', 'बहरिया', 'मउआइमा', 'फूलपुर', 'होलागढ़', 'नवाबगंज', 'सोरांव', 'फाफामऊ', 'सराय इनायत', 'थरवई', 'औ0 क्षेत्र', 'करछना', 'नैनी', 'कोरांव', 'मांडा', 'मेजा', 'बारा', 'लालापुर', 'शंकरगढ़', 'घूरपुर', 'कौंधियारा', 'खीरी']);

    } 
    // else if (selectedDistrict === 'district2') {
    //   setThanaList(['thana4', 'thana5', 'thana6']);
    // } 
    else {
      setThanaList([]);
    }
  };

  const [thanaList, setThanaList] = useState([]);

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: '#1D2B53', color: '#FAEF5D' }}>
      <h2 className="mb-4">Fill out the form:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">प्रार्थी का नाम:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="fatherOrHusbandName" className="form-label">प्रार्थी के पिता या पति का नाम:</label>
          <input type="text" id="fatherOrHusbandName" name="fatherOrHusbandName" value={formData.fatherOrHusbandName} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="relationWithApplicant" className="form-label">उक्त व्यक्ति प्रार्थी के क्या लगते है:</label>
          <select id="relationWithApplicant" name="relationWithApplicant" value={formData.relationWithApplicant} onChange={handleChange} className="form-select" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}>
            {relationOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">प्रार्थी का पता:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="thanaArea" className="form-label">प्रार्थी किस थाना क्षेत्र में रहता है:</label>
          <input type="text" id="thanaArea" name="thanaArea" value={formData.thanaArea} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="district" className="form-label">प्रार्थी किस जिले का निवासी है:</label>
          <select id="district" name="district" value={formData.district} onChange={handleChange} className="form-select" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}>
            <option value="">Select District</option>
            <option value="प्रयागराज">प्रयागराज</option>
            {/* <option value="district2">District 2</option> */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="incidentLocation" className="form-label">घटना स्थल:</label>
          <input type="text" id="incidentLocation" name="incidentLocation" value={formData.incidentLocation} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="relatedThana" className="form-label">घटना स्थल से सम्बंधित थाना:</label>
          <select id="relatedThana" name="relatedThana" value={formData.relatedThana} onChange={handleChange} className="form-select" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}>
            <option value="">Select Thana</option>
            {thanaList.map((thana, index) => (
              <option key={index} value={thana}>{thana}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="incidentDistrict" className="form-label">घटना स्थल का जिला:</label>
          <input type="text" id="incidentDistrict" name="incidentDistrict" value={formData.incidentDistrict} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">प्रार्थी का मोबाइल नंबर:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">प्रार्थी की उम्र:</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="form-control" style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FF004D', border: 'none' }}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
