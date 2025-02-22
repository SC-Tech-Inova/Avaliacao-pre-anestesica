import React, { useState } from 'react';
import { Mail, Share2, Download, Save } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

interface FormData {
  patientName: string;
  patientAge: string;
  evaluationDate: string;
  proposedSurgery: string;
  previousSurgeries: string;
  intercorrencia: string;
  intercorrenciaDetails: string;
  familyComplication: string;
  familyComplicationDetails: string;
  medicationAllergy: string;
  medicationAllergyDetails: string;
  hypertension: boolean;
  heartFailure: boolean;
  myocardialInfarction: boolean;
  arrhythmia: boolean;
  diabetesMellitus: boolean;
  hypothyroidism: boolean;
  hyperthyroidism: boolean;
  asthma: boolean;
  bronchitis: boolean;
  stroke: boolean;
  alzheimer: boolean;
  parkinson: boolean;
  seizure: boolean;
  motorDeficit: boolean;
  currentMedications: string;
  hb: string;
  ht: string;
  bloodSugar: string;
  urea: string;
  creatinine: string;
  tp: string;
  ttpa: string;
  rni: string;
  platelets: string;
  sodium: string;
  potassium: string;
  acv: string;
  ar: string;
  bloodPressure: string;
  heartRate: string;
  weight: string;
  height: string;
  mallampati: string;
  functionalCapacity: string;
  dentalProsthesis: string;
  asaClassification: string;
  ecg: string;
  chestXray: string;
  additionalTests: string;
  specialistEvaluation: string;
  fastingSolids: boolean;
  fastingLiquids: boolean;
  bloodTransfusionConsent: boolean;
  proposedAnesthesia: string;
  released: boolean;
  doctorSignature: string;
  fastingInstructions: string;
  consentDetails: string;
  ecgDetails: string;
  chestXrayDetails: string;
  additionalTestsDetails: string;
  specialistEvaluationDetails: string;
  digitalSignature: string;
  signatureFile: File | null;
}

interface LoginData {
  email: string;
  password: string;
}

const PreAnestheticSystem: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    patientName: '', patientAge: '', evaluationDate: '', proposedSurgery: '', previousSurgeries: '', intercorrencia: 'não', intercorrenciaDetails: '',
    familyComplication: 'não', familyComplicationDetails: '', medicationAllergy: 'não', medicationAllergyDetails: '',
    hypertension: false, heartFailure: false, myocardialInfarction: false, arrhythmia: false,
    diabetesMellitus: false, hypothyroidism: false, hyperthyroidism: false,
    asthma: false, bronchitis: false, stroke: false, alzheimer: false, parkinson: false, seizure: false, motorDeficit: false,
    currentMedications: '', hb: '', ht: '', bloodSugar: '', urea: '', creatinine: '', tp: '', ttpa: '', rni: '', platelets: '', sodium: '', potassium: '',
    acv: '', ar: '', bloodPressure: '', heartRate: '', weight: '', height: '', mallampati: '1', functionalCapacity: '',
    dentalProsthesis: 'não', asaClassification: '1', ecg: '', chestXray: '', additionalTests: '', specialistEvaluation: '',
    fastingSolids: true, fastingLiquids: true, bloodTransfusionConsent: false, proposedAnesthesia: '', released: false, doctorSignature: '',
    fastingInstructions: 'Jejum para alimentos sólidos de 08hs antes do procedimento cirúrgico. Jejum de 02 horas para líquidos claros (água, suco coado) antes do procedimento cirúrgico.',
    consentDetails: '',
    ecgDetails: '',
    chestXrayDetails: '',
    additionalTestsDetails: '',
    specialistEvaluationDetails: '',
    digitalSignature: '',
    signatureFile: null
  });

  const [loginData, setLoginData] = useState<LoginData>({
    email: '', password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    let newValue: string | boolean;
    
    if (type === 'checkbox') {
      newValue = target.checked;
    } else if (type === 'radio') {
      newValue = value;
    } else {
      newValue = value;
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
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

  if (!isLoggedIn) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Login Médico</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({...prev, email: e.target.value}))}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
                required
              />
            </div>
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Avaliação Pré-Anestésica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Nome:</Label>
              <Input id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} />
            </div>
            <div>
              <Label>Idade:</Label>
              <Input id="patientAge" name="patientAge" type="number" value={formData.patientAge} onChange={handleInputChange} />
            </div>
            <div>
              <Label>Data:</Label>
              <Input id="evaluationDate" name="evaluationDate" type="date" value={formData.evaluationDate} onChange={handleInputChange} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Cirurgia Proposta:</Label>
              <Input id="proposedSurgery" name="proposedSurgery" value={formData.proposedSurgery} onChange={handleInputChange} />
            </div>
            <div>
              <Label>Cirurgias Prévias:</Label>
              <Input id="previousSurgeries" name="previousSurgeries" value={formData.previousSurgeries} onChange={handleInputChange} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Intercorrência:</Label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" id="intercorrenciaYes" name="intercorrencia" value="sim" checked={formData.intercorrencia.toLowerCase() === 'sim'} onChange={handleInputChange} />
                  <span className="ml-2">Sim</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" id="intercorrenciaNo" name="intercorrencia" value="não" checked={formData.intercorrencia.toLowerCase() === 'não'} onChange={handleInputChange} />
                  <span className="ml-2">Não</span>
                </label>
              </div>
              {formData.intercorrencia.toLowerCase() === 'sim' && (
                <Input id="intercorrenciaDetails" name="intercorrenciaDetails" placeholder="Detalhes" value={formData.intercorrenciaDetails} onChange={handleInputChange} className="mt-2" />
              )}
            </div>

            <div>
              <Label>Complicação Anestésica na Família:</Label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" id="familyComplicationYes" name="familyComplication" value="sim" checked={formData.familyComplication.toLowerCase() === 'sim'} onChange={handleInputChange} />
                  <span className="ml-2">Sim</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" id="familyComplicationNo" name="familyComplication" value="não" checked={formData.familyComplication.toLowerCase() === 'não'} onChange={handleInputChange} />
                  <span className="ml-2">Não</span>
                </label>
              </div>
              {formData.familyComplication.toLowerCase() === 'sim' && (
                <Input id="familyComplicationDetails" name="familyComplicationDetails" placeholder="Detalhes" value={formData.familyComplicationDetails} onChange={handleInputChange} className="mt-2" />
              )}
            </div>

            <div>
              <Label>Alergia a Medicamentos:</Label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" id="medicationAllergyYes" name="medicationAllergy" value="sim" checked={formData.medicationAllergy.toLowerCase() === 'sim'} onChange={handleInputChange} />
                  <span className="ml-2">Sim</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" id="medicationAllergyNo" name="medicationAllergy" value="não" checked={formData.medicationAllergy.toLowerCase() === 'não'} onChange={handleInputChange} />
                  <span className="ml-2">Não</span>
                </label>
              </div>
              {formData.medicationAllergy.toLowerCase() === 'sim' && (
                <Input id="medicationAllergyDetails" name="medicationAllergyDetails" placeholder="Detalhes" value={formData.medicationAllergyDetails} onChange={handleInputChange} className="mt-2" />
              )}
            </div>
          </div>

          {/* Cardiovascular Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cardiovascular</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hypertension" name="hypertension" checked={formData.hypertension} onChange={handleInputChange} />
                <Label htmlFor="hypertension">Hipertensão Arterial</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="heartFailure" name="heartFailure" checked={formData.heartFailure} onChange={handleInputChange} />
                <Label htmlFor="heartFailure">Insuficiência Cardíaca</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="myocardialInfarction" name="myocardialInfarction" checked={formData.myocardialInfarction} onChange={handleInputChange} />
                <Label htmlFor="myocardialInfarction">Infarto Agudo do Miocárdio</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="arrhythmia" name="arrhythmia" checked={formData.arrhythmia} onChange={handleInputChange} />
                <Label htmlFor="arrhythmia">Arritmias</Label>
              </div>
            </div>
          </div>

          {/* Endocrine Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Endócrino</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="diabetesMellitus" name="diabetesMellitus" checked={formData.diabetesMellitus} onChange={handleInputChange} />
                <Label htmlFor="diabetesMellitus">Diabetes Mellitus</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hypothyroidism" name="hypothyroidism" checked={formData.hypothyroidism} onChange={handleInputChange} />
                <Label htmlFor="hypothyroidism">Hipotireoidismo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hyperthyroidism" name="hyperthyroidism" checked={formData.hyperthyroidism} onChange={handleInputChange} />
                <Label htmlFor="hyperthyroidism">Hipertireoidismo</Label>
              </div>
            </div>
          </div>

          {/* Respiratory Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Respiratório</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="asthma" name="asthma" checked={formData.asthma} onChange={handleInputChange} />
                <Label htmlFor="asthma">Asma</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="bronchitis" name="bronchitis" checked={formData.bronchitis} onChange={handleInputChange} />
                <Label htmlFor="bronchitis">Bronquite</Label>
              </div>
            </div>
          </div>

          {/* Neurological Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Neurológico</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="stroke" name="stroke" checked={formData.stroke} onChange={handleInputChange} />
                <Label htmlFor="stroke">AVC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="alzheimer" name="alzheimer" checked={formData.alzheimer} onChange={handleInputChange} />
                <Label htmlFor="alzheimer">Alzheimer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="parkinson" name="parkinson" checked={formData.parkinson} onChange={handleInputChange} />
                <Label htmlFor="parkinson">Parkinson</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="seizure" name="seizure" checked={formData.seizure} onChange={handleInputChange} />
                <Label htmlFor="seizure">Crise Convulsiva</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="motorDeficit" name="motorDeficit" checked={formData.motorDeficit} onChange={handleInputChange} />
                <Label htmlFor="motorDeficit">Déficit Motor</Label>
              </div>
            </div>
          </div>

          {/* Current Medications */}
          <div className="space-y-4">
            <Label>Medicações em Uso:</Label>
            <Textarea
              id="currentMedications"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleInputChange}
              placeholder="Liste as medicações em uso"
            />
          </div>

          {/* Exams Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Exames</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Hb (g/dl):</Label>
                <Input id="hb" name="hb" value={formData.hb} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Ht (%):</Label>
                <Input id="ht" name="ht" value={formData.ht} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Glicemia (mg/dl):</Label>
                <Input id="bloodSugar" name="bloodSugar" value={formData.bloodSugar} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Uréia (mg/dl):</Label>
                <Input id="urea" name="urea" value={formData.urea} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Creatinina (mg/dl):</Label>
                <Input id="creatinine" name="creatinine" value={formData.creatinine} onChange={handleInputChange} />
              </div>
              <div>
                <Label>TP (s):</Label>
                <Input id="tp" name="tp" value={formData.tp} onChange={handleInputChange} />
              </div>
              <div>
                <Label>TTPA (s):</Label>
                <Input id="ttpa" name="ttpa" value={formData.ttpa} onChange={handleInputChange} />
              </div>
              <div>
                <Label>RNI:</Label>
                <Input id="rni" name="rni" value={formData.rni} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Plaquetas (x10³/mm³):</Label>
                <Input id="platelets" name="platelets" value={formData.platelets} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Sódio (mEq/L):</Label>
                <Input id="sodium" name="sodium" value={formData.sodium} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Potássio (mEq/L):</Label>
                <Input id="potassium" name="potassium" value={formData.potassium} onChange={handleInputChange} />
              </div>
              <div>
                <Label>ACV (ml):</Label>
                <Input id="acv" name="acv" value={formData.acv} onChange={handleInputChange} />
              </div>
              <div>
                <Label>AR (ml):</Label>
                <Input id="ar" name="ar" value={formData.ar} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Pressão Arterial (mmHg):</Label>
                <Input id="bloodPressure" name="bloodPressure" value={formData.bloodPressure} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Frequência Cardíaca (bpm):</Label>
                <Input id="heartRate" name="heartRate" value={formData.heartRate} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Peso (kg):</Label>
                <Input id="weight" name="weight" value={formData.weight} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Altura (cm):</Label>
                <Input id="height" name="height" value={formData.height} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Mallampati:</Label>
                <Input id="mallampati" name="mallampati" value={formData.mallampati} onChange={handleInputChange} />
              </div>
              <div>
                <Label>Capacidade Funcional (METs):</Label>
                <Input id="functionalCapacity" name="functionalCapacity" value={formData.functionalCapacity} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Dental Prosthesis */}
          <div className="space-y-4">
            <Label>Prótese Dentária:</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" id="dentalProsthesisYes" name="dentalProsthesis" value="sim" checked={formData.dentalProsthesis.toLowerCase() === 'sim'} onChange={handleInputChange} />
                <span className="ml-2">Sim</span>
              </label>
              <label className="flex items-center">
                <input type="radio" id="dentalProsthesisNo" name="dentalProsthesis" value="não" checked={formData.dentalProsthesis.toLowerCase() === 'não'} onChange={handleInputChange} />
                <span className="ml-2">Não</span>
              </label>
            </div>
          </div>

          {/* ASA Classification */}
          <div className="space-y-4">
            <Label>Classificação ASA:</Label>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <input type="radio" id="asa1" name="asaClassification" value="1" checked={formData.asaClassification === '1'} onChange={handleInputChange} />
                <Label htmlFor="asa1">ASA I</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="asa2" name="asaClassification" value="2" checked={formData.asaClassification === '2'} onChange={handleInputChange} />
                <Label htmlFor="asa2">ASA II</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="asa3" name="asaClassification" value="3" checked={formData.asaClassification === '3'} onChange={handleInputChange} />
                <Label htmlFor="asa3">ASA III</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="asa4" name="asaClassification" value="4" checked={formData.asaClassification === '4'} onChange={handleInputChange} />
                <Label htmlFor="asa4">ASA IV</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="asa5" name="asaClassification" value="5" checked={formData.asaClassification === '5'} onChange={handleInputChange} />
                <Label htmlFor="asa5">ASA V</Label>
              </div>
            </div>
          </div>
<div className="space-y-4">
            <Label>ECG:</Label>
            <Input id="ecg" name="ecg" value={formData.ecg} onChange={handleInputChange} />
          </div>
          
          <div className="space-y-4">
            <Label>Raio-X Tórax:</Label>
            <Input id="chestXray" name="chestXray" value={formData.chestXray} onChange={handleInputChange} />
          </div>

          <div className="space-y-4">
            <Label>Exames Complementares:</Label>
            <Textarea
              id="additionalTests"
              name="additionalTests"
              value={formData.additionalTests}
              onChange={handleInputChange}
              placeholder="Liste os exames complementares"
            />
          </div>

          <div className="space-y-4">
            <Label>Avaliação Especialista:</Label>
            <Textarea
              id="specialistEvaluation"
              name="specialistEvaluation"
              value={formData.specialistEvaluation}
              onChange={handleInputChange}
              placeholder="Avaliação do especialista"
            />
          </div>

          <div className="space-y-4">
            <Label>Jejum:</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" id="fastingSolids" name="fastingSolids" checked={formData.fastingSolids} onChange={handleInputChange} />
                <span className="ml-2">Jejum para alimentos sólidos de 08hs antes do procedimento cirúrgico</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="fastingLiquids" name="fastingLiquids" checked={formData.fastingLiquids} onChange={handleInputChange} />
                <span className="ml-2">Jejum de 02 horas para líquidos claros (água, suco coado) antes do procedimento cirúrgico</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Autorização para receber concentrado de hemácias:</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" id="bloodTransfusionConsentYes" name="bloodTransfusionConsent" value="sim" checked={formData.bloodTransfusionConsent} onChange={handleInputChange} />
                <span className="ml-2">Sim</span>
              </label>
              <label className="flex items-center">
                <input type="radio" id="bloodTransfusionConsentNo" name="bloodTransfusionConsent" value="não" checked={!formData.bloodTransfusionConsent} onChange={handleInputChange} />
                <span className="ml-2">Não</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Anestesia Proposta:</Label>
            <Input id="proposedAnesthesia" name="proposedAnesthesia" value={formData.proposedAnesthesia} onChange={handleInputChange} />
          </div>

          <div className="space-y-4">
            <Label>Liberado para procedimento:</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" id="releasedYes" name="released" value="sim" checked={formData.released} onChange={handleInputChange} />
                <span className="ml-2">Sim</span>
              </label>
              <label className="flex items-center">
                <input type="radio" id="releasedNo" name="released" value="não" checked={!formData.released} onChange={handleInputChange} />
                <span className="ml-2">Não</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Assinatura do Médico:</Label>
            <Input id="doctorSignature" name="doctorSignature" value={formData.doctorSignature} onChange={handleInputChange} />
          </div>

          <div className="space-y-4">
            <Label>Assinatura Digital:</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input 
                type="text" 
                placeholder="Nome para assinatura"
                value={formData.digitalSignature}
                onChange={(e) => setFormData(prev => ({...prev, digitalSignature: e.target.value}))}
              />
              <Input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => {
                  if (e.target.files) {
                    setFormData(prev => ({...prev, signatureFile: e.target.files![0]}))
                  }
                }}
              />
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

export default PreAnestheticSystem;
