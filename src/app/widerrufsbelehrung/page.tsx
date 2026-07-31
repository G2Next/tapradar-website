import { LegalPage } from "@/components/LegalPage";

export default function WiderrufPage() {
  return (
    <LegalPage title="Widerrufsbelehrung" date="Stand: Juni 2025">
      <h2>Widerrufsrecht</h2>
      <p>Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen einen Vertrag zu widerrufen.</p>
      <h2>Widerrufsfrist</h2>
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      <h2>Ausübung des Widerrufs</h2>
      <p>Um Ihr Widerrufsrecht auszuüben, kontaktieren Sie uns per E-Mail an <a href="mailto:support@tapradar.app">support@tapradar.app</a>.</p>
      <h2>Folgen des Widerrufs</h2>
      <p>Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle erhaltenen Zahlungen nach den gesetzlichen Vorgaben zurück.</p>
    </LegalPage>
  );
}
