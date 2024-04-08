import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9f2e9216-aeab-4cd3-b30f-f0e58711f783',
};

export const sampleWithPartialData: IAuthority = {
  name: 'eb2023b3-2dcc-4c1f-bddb-8ae0d3d3086d',
};

export const sampleWithFullData: IAuthority = {
  name: 'f587a22e-1848-4e7d-8a5a-c25f1ec4f0c5',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
