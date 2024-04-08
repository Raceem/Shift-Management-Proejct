import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10361,
  login: 'jJO',
};

export const sampleWithPartialData: IUser = {
  id: 24370,
  login: '12O4qH@xPD\\!DWe\\+0Awk7\\kOeTB\\*2sE8\\aFv',
};

export const sampleWithFullData: IUser = {
  id: 4680,
  login: 'bcc8r7@8Dz',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
