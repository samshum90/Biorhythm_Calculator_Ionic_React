import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";

import BiorhythmCard from "./components/BiorhythmCard";

import { useLocalStorage } from "./hooks";

function App() {
  // const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        {/* <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            value={name}
            onIonChange={(event) => setName(event.target.value)}
          />
        </IonItem> */}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            value={birthDate}
            displayFormat="D MMM YYYY"
            onIonChange={(event) => setBirthDate(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime
            value={targetDate}
            displayFormat="D MMM YYYY"
            onIonChange={(event) => setTargetDate(event.target.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
