import type { Locale } from "./config";

export type DeviceMessages = {
  rotateConfirm: string;
  edit: string;
  save: string;
  deleteConfirm: string;
  copied: string;
  copyLink: string;
  downloadQr: string;
  print: string;
  qrFor: string;
};

export const deviceMessages: Record<Locale, DeviceMessages> = {
  de: { rotateConfirm: "Neuen QR-Code erzeugen? Der bisherige QR-Code und NFC-Link funktionieren danach nicht mehr.", edit: "Gerät bearbeiten", save: "Änderungen speichern", deleteConfirm: "Gerät „{name}“ endgültig löschen? Der QR-Code und NFC-Link funktionieren danach nicht mehr.", copied: "Kopiert", copyLink: "Link kopieren", downloadQr: "QR herunterladen", print: "Drucken", qrFor: "QR-Code für" },
  en: { rotateConfirm: "Generate a new QR code? The previous QR code and NFC link will stop working.", edit: "Edit device", save: "Save changes", deleteConfirm: "Permanently delete “{name}”? Its QR code and NFC link will stop working.", copied: "Copied", copyLink: "Copy link", downloadQr: "Download QR", print: "Print", qrFor: "QR code for" },
  tr: { rotateConfirm: "Yeni bir QR kod oluşturulsun mu? Önceki QR kod ve NFC bağlantısı artık çalışmayacak.", edit: "Cihazı düzenle", save: "Değişiklikleri kaydet", deleteConfirm: "“{name}” cihazı kalıcı olarak silinsin mi? QR kodu ve NFC bağlantısı artık çalışmayacak.", copied: "Kopyalandı", copyLink: "Bağlantıyı kopyala", downloadQr: "QR kodu indir", print: "Yazdır", qrFor: "Şunun için QR kodu:" },
  fr: { rotateConfirm: "Générer un nouveau code QR ? L’ancien code QR et le lien NFC ne fonctionneront plus.", edit: "Modifier l’appareil", save: "Enregistrer les modifications", deleteConfirm: "Supprimer définitivement « {name} » ? Son code QR et son lien NFC ne fonctionneront plus.", copied: "Copié", copyLink: "Copier le lien", downloadQr: "Télécharger le QR", print: "Imprimer", qrFor: "Code QR pour" },
  it: { rotateConfirm: "Generare un nuovo codice QR? Il codice QR e il link NFC precedenti non funzioneranno più.", edit: "Modifica dispositivo", save: "Salva modifiche", deleteConfirm: "Eliminare definitivamente “{name}”? Il relativo codice QR e link NFC non funzioneranno più.", copied: "Copiato", copyLink: "Copia link", downloadQr: "Scarica QR", print: "Stampa", qrFor: "Codice QR per" },
  es: { rotateConfirm: "¿Generar un nuevo código QR? El código QR y el enlace NFC anteriores dejarán de funcionar.", edit: "Editar dispositivo", save: "Guardar cambios", deleteConfirm: "¿Eliminar definitivamente «{name}»? Su código QR y enlace NFC dejarán de funcionar.", copied: "Copiado", copyLink: "Copiar enlace", downloadQr: "Descargar QR", print: "Imprimir", qrFor: "Código QR para" },
  pl: { rotateConfirm: "Wygenerować nowy kod QR? Poprzedni kod QR i link NFC przestaną działać.", edit: "Edytuj urządzenie", save: "Zapisz zmiany", deleteConfirm: "Trwale usunąć urządzenie „{name}”? Jego kod QR i link NFC przestaną działać.", copied: "Skopiowano", copyLink: "Kopiuj link", downloadQr: "Pobierz QR", print: "Drukuj", qrFor: "Kod QR dla" },
  cs: { rotateConfirm: "Vygenerovat nový QR kód? Předchozí QR kód a NFC odkaz přestanou fungovat.", edit: "Upravit zařízení", save: "Uložit změny", deleteConfirm: "Trvale smazat zařízení „{name}“? Jeho QR kód a NFC odkaz přestanou fungovat.", copied: "Zkopírováno", copyLink: "Kopírovat odkaz", downloadQr: "Stáhnout QR", print: "Tisk", qrFor: "QR kód pro" },
  hu: { rotateConfirm: "Új QR-kód létrehozása? A korábbi QR-kód és NFC-hivatkozás ezután nem működik.", edit: "Eszköz szerkesztése", save: "Módosítások mentése", deleteConfirm: "Végleg törli ezt az eszközt: „{name}”? A QR-kódja és NFC-hivatkozása nem fog működni.", copied: "Másolva", copyLink: "Hivatkozás másolása", downloadQr: "QR letöltése", print: "Nyomtatás", qrFor: "QR-kód ehhez:" },
  sk: { rotateConfirm: "Vygenerovať nový QR kód? Predchádzajúci QR kód a NFC odkaz prestanú fungovať.", edit: "Upraviť zariadenie", save: "Uložiť zmeny", deleteConfirm: "Natrvalo odstrániť zariadenie „{name}“? Jeho QR kód a NFC odkaz prestanú fungovať.", copied: "Skopírované", copyLink: "Kopírovať odkaz", downloadQr: "Stiahnuť QR", print: "Tlačiť", qrFor: "QR kód pre" },
  "sr-Latn": { rotateConfirm: "Napraviti novi QR kod? Prethodni QR kod i NFC link više neće raditi.", edit: "Izmeni uređaj", save: "Sačuvaj izmene", deleteConfirm: "Trajno obrisati uređaj „{name}“? Njegov QR kod i NFC link više neće raditi.", copied: "Kopirano", copyLink: "Kopiraj link", downloadQr: "Preuzmi QR", print: "Štampaj", qrFor: "QR kod za" },
  bs: { rotateConfirm: "Napraviti novi QR kod? Prethodni QR kod i NFC link više neće raditi.", edit: "Uredi uređaj", save: "Sačuvaj izmjene", deleteConfirm: "Trajno izbrisati uređaj „{name}“? Njegov QR kod i NFC link više neće raditi.", copied: "Kopirano", copyLink: "Kopiraj link", downloadQr: "Preuzmi QR", print: "Štampaj", qrFor: "QR kod za" },
  hr: { rotateConfirm: "Izraditi novi QR kod? Prethodni QR kod i NFC poveznica više neće raditi.", edit: "Uredi uređaj", save: "Spremi promjene", deleteConfirm: "Trajno izbrisati uređaj „{name}“? Njegov QR kod i NFC poveznica više neće raditi.", copied: "Kopirano", copyLink: "Kopiraj poveznicu", downloadQr: "Preuzmi QR", print: "Ispiši", qrFor: "QR kod za" },
  ro: { rotateConfirm: "Generați un cod QR nou? Codul QR și linkul NFC anterior nu vor mai funcționa.", edit: "Editați dispozitivul", save: "Salvați modificările", deleteConfirm: "Ștergeți definitiv dispozitivul „{name}”? Codul QR și linkul NFC nu vor mai funcționa.", copied: "Copiat", copyLink: "Copiază linkul", downloadQr: "Descarcă QR", print: "Imprimă", qrFor: "Cod QR pentru" },
  bg: { rotateConfirm: "Да се генерира ли нов QR код? Предишният QR код и NFC връзката ще спрат да работят.", edit: "Редактиране на устройство", save: "Запазване на промените", deleteConfirm: "Да се изтрие ли окончателно устройството „{name}“? QR кодът и NFC връзката му ще спрат да работят.", copied: "Копирано", copyLink: "Копиране на връзката", downloadQr: "Изтегляне на QR", print: "Печат", qrFor: "QR код за" },
};
