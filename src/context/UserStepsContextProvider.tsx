/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {StepContextType} from '../@types/step';

export const UserStepContext = React.createContext<StepContextType | null>(
  null,
);

export const UserStepsContextProvider = ({children}: any) => {
  const [step, setStep] = React.useState(0);

  const changerStep = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <UserStepContext.Provider value={{step: step, changerStep: changerStep}}>
      {children}
    </UserStepContext.Provider>
  );
};
