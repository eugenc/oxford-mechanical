import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

// Import all pages
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/services/ServicesPage';
import EmergencyServicesPage from '../pages/services/EmergencyServicesPage';
import DrainCleaningPage from '../pages/services/DrainCleaningPage';
import CameraInspectionPage from '../pages/services/CameraInspectionPage';
import LeakRepairPage from '../pages/services/LeakRepairPage';
import MaintenancePage from '../pages/services/MaintenancePage';
import WaterSavingPage from '../pages/services/WaterSavingPage';
import RoughInPage from '../pages/services/RoughInPage';
import ValveReplacementPage from '../pages/services/ValveReplacementPage';

import IndustriesPage from '../pages/industries/IndustriesPage';
import CondosPage from '../pages/industries/CondosPage';
import OfficePage from '../pages/industries/OfficePage';
import EducationPage from '../pages/industries/EducationPage';
import HealthcarePage from '../pages/industries/HealthcarePage';
import RetailPage from '../pages/industries/RetailPage';
import IndustrialPage from '../pages/industries/IndustrialPage';

import ProjectsPage from '../pages/ProjectsPage';
import ResourcesPage from '../pages/resources/ResourcesPage';
import BlogPage from '../pages/resources/BlogPage';
import MaintenanceGuidesPage from '../pages/resources/MaintenanceGuidesPage';
import EmergencyProceduresPage from '../pages/resources/EmergencyProceduresPage';
import WaterSavingTipsPage from '../pages/resources/WaterSavingTipsPage';
import CaseStudiesPage from '../pages/resources/CaseStudiesPage';
import CertificationsPage from '../pages/resources/CertificationsPage';

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

// Utility pages
import PrivacyPolicyPage from '../pages/utility/PrivacyPolicyPage';
import TermsPage from '../pages/utility/TermsPage';
import CookiePolicyPage from '../pages/utility/CookiePolicyPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/emergency" element={<EmergencyServicesPage />} />
          <Route path="/services/drain-cleaning" element={<DrainCleaningPage />} />
          <Route path="/services/camera-inspection" element={<CameraInspectionPage />} />
          <Route path="/services/leak-repair" element={<LeakRepairPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/services/water-saving" element={<WaterSavingPage />} />
          <Route path="/services/rough-in" element={<RoughInPage />} />
          <Route path="/services/valve-replacement" element={<ValveReplacementPage />} />
          
          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/condos" element={<CondosPage />} />
          <Route path="/industries/office" element={<OfficePage />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/industrial" element={<IndustrialPage />} />
          
          {/* Projects */}
          <Route path="/projects" element={<ProjectsPage />} />
          
          {/* Resources */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/maintenance-guides" element={<MaintenanceGuidesPage />} />
          <Route path="/resources/emergency-procedures" element={<EmergencyProceduresPage />} />
          <Route path="/resources/water-saving" element={<WaterSavingTipsPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/certifications" element={<CertificationsPage />} />
          
          {/* About & Contact */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Utility Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
