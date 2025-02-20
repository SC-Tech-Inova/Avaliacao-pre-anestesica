import React, { useState } from 'react';
import { Mail, Share2, Download, Save } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const EvaluationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    weight: '',
    height: '',
    bloodType: '',
    allergies: '',
    currentMedications: '',
    previousSurgeries: '',
    preExistingConditions: '',
    physicalExamNotes: '',
    doctorName: '',
    doctorCRM: '',
    evaluationDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    alert('Dados salvos com sucesso!');
  };

  const handleShare = () => {
    alert('Opções de compartilhamento: Email ou WhatsApp');
  };

  const handleDownloadPDF = () => {
    alert('Baixando PDF...');
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Avaliação Pré-Anestésica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="patientName">Nome do Paciente</Label>
              <Input id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="patientAge">Idade</Label>
              <Input id="patientAge" name="patientAge" type="number" value={formData.patientAge} onChange={handleInputChange} />
            </div>
          </div>
          <div>
            <Label htmlFor="physicalExamNotes">Exame Físico</Label>
            <Textarea id="physicalExamNotes" name="physicalExamNotes" value={formData.physicalExamNotes} onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="doctorName">Nome do Médico</Label>
              <Input id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="doctorCRM">CRM</Label>
              <Input id="doctorCRM" name="doctorCRM" value={formData.doctorCRM} onChange={handleInputChange} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button onClick={handleSave} variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button>
          <Button onClick={handleDownloadPDF} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            PDF
          </Button>
          <Button onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EvaluationPage;
