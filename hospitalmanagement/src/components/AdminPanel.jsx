import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import AppointmentScheduling from './AppointmentManagement/AppointmentScheduling';
import CalenderView from './AppointmentManagement/CalenderView';
import GenerateInvoices from './BillingInvoices/GenerateInvoices';
import PaymentProcessing from './BillingInvoices/PaymentProcessing';
import Messaging from './Communication/Messaging';
import Notifications from './Communication/Notifications';
import Dashboard from './Dashboard/Dashboard';
import MedicationSupplies from './InventoryManagement/MedicationSupplies';
import OrderReorder from './InventoryManagement/OrderReorder';
import AdmissionsDischarges from './PatientManagement/AdmissionsDischarges';
import HealthRecords from './PatientManagement/HealthRecords';
import PatientRecords from './PatientManagement/PatientRecords';
import PatientRegistration from './PatientManagement/PatientRegistration';
import DataVisualization from './ReportsAnalytics/DataVisualization';
import GenerateReports from './ReportsAnalytics/GenerateReports';
import AuditTrails from './SecurityAccessControl/AuditTrails';
import UserAuthentication from './SecurityAccessControl/UserAuthentication';
import ActivityMonitoring from './StaffManagement/ActivityMonitoring';
import DeactivationRemoval from './StaffManagement/DeactivationRemoval';
import FeedbackManagement from './StaffManagement/FeedbackManagement';
import ProfileManagement from './StaffManagement/ProfileManagement';
import StaffRegistration from './StaffManagement/StaffRegistration';

const AdminPanel = () => {

    const [activeKey, setActiveKey] = useState("1");

    const handleSelect = (key) => {
        setActiveKey(key);
    };

    return (
        <div className="d-flex flex-row">
            <Navbar className="bg-body-tertiary p-2 align-items-start navigate-border" data-bs-theme="dark" style={{ width: "250px", height: "100vh" }} >
                <Nav className="flex-column" activeKey={activeKey} onSelect={handleSelect}>
                    <Nav.Link eventKey="1">Dashboard</Nav.Link>
                    <NavDropdown title="Patient Management" active={activeKey.split('.')[0] === "2"}>
                        <NavDropdown.Item eventKey="2.1">Patient Registration</NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.2">Patient Records</NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.3">Admissions & Discharges</NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.4">Health Records</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Appointment Management" active={activeKey.split('.')[0] === "3"}>
                        <NavDropdown.Item eventKey="3.1">Appointment Scheduling</NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.2">Calender View</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Staff Management" active={activeKey.split('.')[0] === "4"}>
                        <NavDropdown.Item eventKey="4.1">Staff Registration</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Profile Management</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Activity Monitoring</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Deactivation & Removal</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5">Feedback Management</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Inventory Management" active={activeKey.split('.')[0] === "5"}>
                        <NavDropdown.Item eventKey="5.1">Medication & Supplies</NavDropdown.Item>
                        <NavDropdown.Item eventKey="5.2">Order & Reorder</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Billing & Invoices" active={activeKey.split('.')[0] === "6"}>
                        <NavDropdown.Item eventKey="6.1">Generate Invoices</NavDropdown.Item>
                        <NavDropdown.Item eventKey="6.2">Payment Processing</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reports & Analytics" active={activeKey.split('.')[0] === "7"}>
                        <NavDropdown.Item eventKey="7.1">Generate Reports</NavDropdown.Item>
                        <NavDropdown.Item eventKey="7.2">Data Visualization</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Security & Access Control" active={activeKey.split('.')[0] === "8"}>
                        <NavDropdown.Item eventKey="8.1">User Authentication</NavDropdown.Item>
                        <NavDropdown.Item eventKey="8.2">Audit Trails</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Communication" active={activeKey.split('.')[0] === "9"}>
                        <NavDropdown.Item eventKey="9.1">Messaging</NavDropdown.Item>
                        <NavDropdown.Item eventKey="9.2">Notifications</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            {activeKey === "1" && (
                <Dashboard />
            )}
            {activeKey === "2.1" && (
                <PatientRegistration />
            )}
            {activeKey === "2.2" && (
                <PatientRecords />
            )}
            {activeKey === "2.3" && (
                <AdmissionsDischarges />
            )}
            {activeKey === "2.4" && (
                <HealthRecords />
            )}
            {activeKey === "3.1" && (
                <AppointmentScheduling />
            )}
            {activeKey === "3.2" && (
                <CalenderView />
            )}
            {activeKey === "4.1" && (
                <StaffRegistration />
            )}
            {activeKey === "4.2" && (
                <ProfileManagement />
            )}
            {activeKey === "4.3" && (
                <ActivityMonitoring />
            )}
            {activeKey === "4.4" && (
                <DeactivationRemoval />
            )}
            {activeKey === "4.5" && (
                <FeedbackManagement />
            )}
            {activeKey === "5.1" && (
                <MedicationSupplies />
            )}
            {activeKey === "5.2" && (
                <OrderReorder />
            )}
            {activeKey === "6.1" && (
                <GenerateInvoices />
            )}
            {activeKey === "6.2" && (
                <PaymentProcessing />
            )}
            {activeKey === "7.1" && (
                <GenerateReports />
            )}
            {activeKey === "7.2" && (
                <DataVisualization />
            )}
            {activeKey === "8.1" && (
                <UserAuthentication />
            )}
            {activeKey === "8.2" && (
                <AuditTrails />
            )}
            {activeKey === "9.1" && (
                <Messaging />
            )}
            {activeKey === "9.2" && (
                <Notifications />
            )}
        </div>
    );
}

export default AdminPanel;