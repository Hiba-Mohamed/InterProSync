export type UserData = {
  userName: string;
  chosenHospitalOrHospitals: number[]; // Explicitly type as number[]
  chosenWardOrWards: string[];
  chosenPatientList: number[];
  discipline_id: number;
};

export const userData: UserData = {
  userName: "",
  chosenHospitalOrHospitals: [], // Start with an empty array of numbers
  chosenWardOrWards: [""], // Start with an empty array of strings
  chosenPatientList: [],
  discipline_id: 0,
};
