import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface Patient {
  id: string;
  patientName: string;
  patientAge: number;
  createdAt: string; // Add createdAt field to sort by date
  medicalRecordNumber: string; // Assuming this field exists
  evaluationDate: string; // Assuming this field exists
  status: string; // Assuming this field exists
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        if (user && user.patients) {
          const sortedPatients = user.patients.sort((a: Patient, b: Patient) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setPatients(sortedPatients);
        } else {
          // Fetch patients from API if not in sessionStorage
          const response = await fetch('/api/patients');
          if (!response.ok) {
            throw new Error('Failed to fetch patients');
          }
          const data = await response.json();
          const sortedPatients = data.sort((a: Patient, b: Patient) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setPatients(sortedPatients);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    window.location.href = '/login';
  };

  const handlePatientClick = (id: string) => {
    window.location.href = `/PreAnestheticEvaluation?id=${id}`;
  };

  const handleDownloadPDF = async (id: string, patientName: string) => {
    const response = await fetch(`/api/patients/${id}/pdf`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ficha_${patientName}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Lista de Pacientes</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = '/PreAnestheticSystem'}>
                Nova Avaliação Pré-Anestésica
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Sair
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Lista de Pacientes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {patients.map((patient: Patient) => (
                  <li key={patient.id} className="flex justify-between items-center">
                    <div>
                      <button onClick={() => handlePatientClick(patient.id)}>
                        {patient.patientName} - Prontuário: {patient.medicalRecordNumber} - {patient.patientAge} anos - Avaliação: {new Date(patient.evaluationDate).toLocaleDateString()}
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={() => handleDownloadPDF(patient.id, patient.patientName)} variant="outline">
                        PDF
                      </Button>
                      <span>{patient.status === 'pending' ? 'Pendente' : 'Concluído'}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default PatientList;

