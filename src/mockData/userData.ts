export interface UserData {
  username: string;
  chosenHospitalOrHospitals: number[]; // Explicitly type as number[]
  chosenWardOrWards: string[];
  chosenPatientList: number[];
  discipline_id: number;
  currentPatientBeingViewed: number;
};

export const userData: UserData = {
  username: "",
  chosenHospitalOrHospitals: [], // Start with an empty array of numbers
  chosenWardOrWards: [""], // Start with an empty array of strings
  chosenPatientList: [],
  discipline_id: 0,
  currentPatientBeingViewed: 0,
};
