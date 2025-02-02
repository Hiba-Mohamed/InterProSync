export interface TaskType {
  task_id: number;
  discipline_id: number;
  assigned_by: number; // ID of the user or team
  patient_id: number;
  assignment_dateTime: string; // ISO 8601 date-time string
  status: string; // e.g., "inprogress", "completed"
  description: string;
}

export const tasks = [
  // Tasks for Patient 1
  {
    task_id: 1,
    discipline_id: 1,
    assigned_by: 1,
    patient_id: 1,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description: "Administer medication for Patient 1.",
  },
  {
    task_id: 2,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 1,
    assignment_dateTime: "2025-01-11T10:00:00Z",
    status: "inprogress",
    description: "Perform a routine checkup for Patient 1.",
  },
  {
    task_id: 3,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 1,
    assignment_dateTime: "2025-01-11T12:00:00Z",
    status: "inprogress",
    description: "Update Patient 1's medical records.",
  },

  // Tasks for Patient 2
  {
    task_id: 4,
    discipline_id: 2,
    assigned_by: 2,
    patient_id: 2,
    assignment_dateTime: "2025-01-11T09:00:00Z",
    status: "closed",
    description: "Complete physical therapy for Patient 2.",
  },
  {
    task_id: 5,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 2,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "inprogress",
    description: "Administer medication for Patient 2.",
  },
  {
    task_id: 6,
    discipline_id: 4,
    assigned_by: 4,
    patient_id: 2,
    assignment_dateTime: "2025-01-11T13:00:00Z",
    status: "inprogress",
    description: "Conduct a follow-up consultation for Patient 2.",
  },

  // Tasks for Patient 3
  {
    task_id: 7,
    discipline_id: 3,
    assigned_by: 1,
    patient_id: 3,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "inprogress",
    description: "Update medical records for Patient 3.",
  },
  {
    task_id: 8,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 3,
    assignment_dateTime: "2025-01-11T14:00:00Z",
    status: "closed",
    description: "Complete routine checkup for Patient 3.",
  },
  {
    task_id: 9,
    discipline_id: 5,
    assigned_by: 6,
    patient_id: 3,
    assignment_dateTime: "2025-01-11T16:00:00Z",
    status: "inprogress",
    description: "Assist with mobility therapy for Patient 3.",
  },

  // Tasks for Patient 4
  {
    task_id: 10,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 4,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "inprogress",
    description: "Administer first dose of medication for Patient 4.",
  },
  {
    task_id: 11,
    discipline_id: 2,
    assigned_by: 5,
    patient_id: 4,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description: "Conduct a physical therapy session for Patient 4.",
  },
  {
    task_id: 12,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 4,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "inprogress",
    description: "Update medical records for Patient 4.",
  },

  // Tasks for Patient 5
  {
    task_id: 13,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 5,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "closed",
    description: "Complete a general checkup for Patient 5.",
  },
  {
    task_id: 14,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 5,
    assignment_dateTime: "2025-01-11T10:00:00Z",
    status: "inprogress",
    description: "Administer pain relief for Patient 5.",
  },
  {
    task_id: 15,
    discipline_id: 4,
    assigned_by: 5,
    patient_id: 5,
    assignment_dateTime: "2025-01-11T12:30:00Z",
    status: "inprogress",
    description: "Provide nutritional consultation for Patient 5.",
  },

  // Tasks for Patient 6
  {
    task_id: 16,
    discipline_id: 3,
    assigned_by: 6,
    patient_id: 6,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "closed",
    description: "Review and update Patient 6's medical records.",
  },
  {
    task_id: 17,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 6,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "inprogress",
    description: "Perform a physical assessment for Patient 6.",
  },
  {
    task_id: 18,
    discipline_id: 5,
    assigned_by: 4,
    patient_id: 6,
    assignment_dateTime: "2025-01-11T13:00:00Z",
    status: "inprogress",
    description: "Assist with mobility exercises for Patient 6.",
  },
  // Tasks for Patient 7
  {
    task_id: 19,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 7,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "inprogress",
    description: "Administer initial medication for Patient 7.",
  },
  {
    task_id: 20,
    discipline_id: 2,
    assigned_by: 5,
    patient_id: 7,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description: "Conduct a rehabilitation therapy session for Patient 7.",
  },
  {
    task_id: 21,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 7,
    assignment_dateTime: "2025-01-11T11:30:00Z",
    status: "inprogress",
    description: "Update medical records for Patient 7.",
  },

  // Tasks for Patient 8
  {
    task_id: 22,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 8,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description: "Complete physical examination for Patient 8.",
  },
  {
    task_id: 23,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 8,
    assignment_dateTime: "2025-01-11T10:00:00Z",
    status: "inprogress",
    description: "Administer second dose of medication for Patient 8.",
  },
  {
    task_id: 24,
    discipline_id: 4,
    assigned_by: 1,
    patient_id: 8,
    assignment_dateTime: "2025-01-11T12:00:00Z",
    status: "inprogress",
    description: "Provide a dietary consultation for Patient 8.",
  },

  // Tasks for Patient 9
  {
    task_id: 25,
    discipline_id: 3,
    assigned_by: 2,
    patient_id: 9,
    assignment_dateTime: "2025-01-11T09:00:00Z",
    status: "complete",
    description: "Review medical history and update records for Patient 9.",
  },
  {
    task_id: 26,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 9,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "inprogress",
    description: "Perform a physical therapy session for Patient 9.",
  },
  {
    task_id: 27,
    discipline_id: 5,
    assigned_by: 6,
    patient_id: 9,
    assignment_dateTime: "2025-01-11T12:30:00Z",
    status: "complete",
    description: "Assist with mobility exercises for Patient 9.",
  },
  {
    task_id: 28,
    discipline_id: 1,
    assigned_by: 5,
    patient_id: 10,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description: "Administer initial pain management for Patient 10.",
  },
  {
    task_id: 29,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 10,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "complete",
    description: "Conduct a rehabilitation session for Patient 10.",
  },
  {
    task_id: 30,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 10,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "inprogress",
    description: "Review and update medical records for Patient 10.",
  },

  // Tasks for Patient 11
  {
    task_id: 31,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 11,
    assignment_dateTime: "2025-01-11T08:15:00Z",
    status: "closed",
    description: "Complete physical examination for Patient 11.",
  },
  {
    task_id: 32,
    discipline_id: 1,
    assigned_by: 6,
    patient_id: 11,
    assignment_dateTime: "2025-01-11T10:00:00Z",
    status: "inprogress",
    description: "Administer first dose of medication for Patient 11.",
  },
  {
    task_id: 33,
    discipline_id: 4,
    assigned_by: 2,
    patient_id: 11,
    assignment_dateTime: "2025-01-11T12:00:00Z",
    status: "complete",
    description: "Provide dietary consultation for Patient 11.",
  },

  // Tasks for Patient 12
  {
    task_id: 34,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 12,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "inprogress",
    description: "Review and update medical records for Patient 12.",
  },
  {
    task_id: 35,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 12,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description: "Perform a physical therapy session for Patient 12.",
  },
  {
    task_id: 36,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 12,
    assignment_dateTime: "2025-01-11T11:30:00Z",
    status: "complete",
    description: "Assist with mobility exercises for Patient 12.",
  },

  {
    task_id: 37,
    discipline_id: 1,
    assigned_by: 4,
    patient_id: 13,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description: "Administer initial pain relief medication for Patient 13.",
  },
  {
    task_id: 38,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 13,
    assignment_dateTime: "2025-01-11T09:00:00Z",
    status: "complete",
    description: "Conduct physiotherapy session for Patient 13.",
  },
  {
    task_id: 39,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 13,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "inprogress",
    description: "Update medical records and treatment plan for Patient 13.",
  },

  // Tasks for Patient 14
  {
    task_id: 40,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 14,
    assignment_dateTime: "2025-01-11T08:15:00Z",
    status: "closed",
    description: "Complete physical examination and assessment for Patient 14.",
  },
  {
    task_id: 41,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 14,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description:
      "Administer first dose of pain relief medication for Patient 14.",
  },
  {
    task_id: 42,
    discipline_id: 4,
    assigned_by: 6,
    patient_id: 14,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "complete",
    description:
      "Provide nutritional consultation and guidelines for Patient 14.",
  },

  // Tasks for Patient 15
  {
    task_id: 43,
    discipline_id: 3,
    assigned_by: 1,
    patient_id: 15,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "inprogress",
    description:
      "Review medical history and update treatment plan for Patient 15.",
  },
  {
    task_id: 44,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 15,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "inprogress",
    description: "Conduct a physical therapy session for Patient 15.",
  },
  {
    task_id: 45,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 15,
    assignment_dateTime: "2025-01-11T11:45:00Z",
    status: "complete",
    description:
      "Assist with mobility exercises and strength training for Patient 15.",
  },
  // Tasks for Patient 16
  {
    task_id: 46,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 16,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer initial assessment and pain management for Patient 16.",
  },
  {
    task_id: 47,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 16,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "complete",
    description: "Complete rehabilitation session for Patient 16.",
  },
  {
    task_id: 48,
    discipline_id: 3,
    assigned_by: 3,
    patient_id: 16,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "inprogress",
    description:
      "Review and update medical history and treatment plan for Patient 16.",
  },

  // Tasks for Patient 17
  {
    task_id: 49,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 17,
    assignment_dateTime: "2025-01-11T08:15:00Z",
    status: "closed",
    description: "Complete physical therapy evaluation for Patient 17.",
  },
  {
    task_id: 50,
    discipline_id: 1,
    assigned_by: 5,
    patient_id: 17,
    assignment_dateTime: "2025-01-11T10:00:00Z",
    status: "inprogress",
    description: "Administer pain medication for Patient 17.",
  },
  {
    task_id: 51,
    discipline_id: 4,
    assigned_by: 2,
    patient_id: 17,
    assignment_dateTime: "2025-01-11T11:30:00Z",
    status: "complete",
    description: "Provide dietary consultation and support for Patient 17.",
  },

  // Tasks for Patient 18
  {
    task_id: 52,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 18,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "complete",
    description:
      "Update and review medical records and treatment history for Patient 18.",
  },
  {
    task_id: 53,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 18,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description: "Conduct a physical therapy session for Patient 18.",
  },
  {
    task_id: 54,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 18,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "complete",
    description:
      "Assist with mobility exercises and strengthen core muscles for Patient 18.",
  },
  // Tasks for Patient 19
  {
    task_id: 55,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 19,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer initial pain relief and assessment for Patient 19.",
  },
  {
    task_id: 56,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 19,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "complete",
    description: "Complete physical rehabilitation session for Patient 19.",
  },
  {
    task_id: 57,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 19,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "inprogress",
    description:
      "Review and update treatment plan and medical history for Patient 19.",
  },

  // Tasks for Patient 20
  {
    task_id: 58,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 20,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description: "Complete physical therapy assessment for Patient 20.",
  },
  {
    task_id: 59,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 20,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description: "Administer first dose of pain medication for Patient 20.",
  },
  {
    task_id: 60,
    discipline_id: 4,
    assigned_by: 5,
    patient_id: 20,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "complete",
    description: "Provide dietary consultation and guidelines for Patient 20.",
  },

  // Tasks for Patient 21
  {
    task_id: 61,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 21,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "inprogress",
    description:
      "Review medical history and update treatment plan for Patient 21.",
  },
  {
    task_id: 62,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 21,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description: "Conduct physical therapy session for Patient 21.",
  },
  {
    task_id: 63,
    discipline_id: 5,
    assigned_by: 2,
    patient_id: 21,
    assignment_dateTime: "2025-01-11T10:15:00Z",
    status: "complete",
    description:
      "Assist with mobility exercises and strength training for Patient 21.",
  },
  // Tasks for Patient 22
  {
    task_id: 64,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 22,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer pain management and initial assessment for Patient 22.",
  },
  {
    task_id: 65,
    discipline_id: 2,
    assigned_by: 5,
    patient_id: 22,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "complete",
    description: "Complete physical therapy session for Patient 22.",
  },
  {
    task_id: 66,
    discipline_id: 3,
    assigned_by: 3,
    patient_id: 22,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "undone",
    description:
      "Review and update treatment plan and medical history for Patient 22.",
  },

  // Tasks for Patient 23
  {
    task_id: 67,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 23,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description: "Complete rehabilitation assessment for Patient 23.",
  },
  {
    task_id: 68,
    discipline_id: 1,
    assigned_by: 4,
    patient_id: 23,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description:
      "Administer pain medication and monitor response for Patient 23.",
  },
  {
    task_id: 69,
    discipline_id: 4,
    assigned_by: 2,
    patient_id: 23,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "complete",
    description: "Provide dietary consultation for Patient 23.",
  },

  // Tasks for Patient 24
  {
    task_id: 70,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 24,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "undone",
    description:
      "Review and update medical records and treatment plan for Patient 24.",
  },
  {
    task_id: 71,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 24,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description: "Conduct physical therapy session for Patient 24.",
  },
  {
    task_id: 72,
    discipline_id: 5,
    assigned_by: 4,
    patient_id: 24,
    assignment_dateTime: "2025-01-11T11:30:00Z",
    status: "complete",
    description:
      "Assist with strength training and mobility exercises for Patient 24.",
  },
  // Tasks for Patient 25
  {
    task_id: 73,
    discipline_id: 1,
    assigned_by: 4,
    patient_id: 25,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description: "Administer pain relief and assess condition for Patient 25.",
  },
  {
    task_id: 74,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 25,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "complete",
    description: "Conduct a physical rehabilitation session for Patient 25.",
  },
  {
    task_id: 75,
    discipline_id: 3,
    assigned_by: 2,
    patient_id: 25,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "undone",
    description:
      "Review and update treatment plan and medical history for Patient 25.",
  },

  // Tasks for Patient 26
  {
    task_id: 76,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 26,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description: "Complete physical therapy assessment for Patient 26.",
  },
  {
    task_id: 77,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 26,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description:
      "Administer pain medication and monitor for any adverse reactions for Patient 26.",
  },
  {
    task_id: 78,
    discipline_id: 4,
    assigned_by: 5,
    patient_id: 26,
    assignment_dateTime: "2025-01-11T11:00:00Z",
    status: "complete",
    description: "Provide dietary consultation and guidelines for Patient 26.",
  },

  // Tasks for Patient 27
  {
    task_id: 79,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 27,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "undone",
    description:
      "Review medical history and update treatment plan for Patient 27.",
  },
  {
    task_id: 80,
    discipline_id: 2,
    assigned_by: 2,
    patient_id: 27,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description:
      "Conduct physical therapy and mobility exercises for Patient 27.",
  },
  {
    task_id: 81,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 27,
    assignment_dateTime: "2025-01-11T11:30:00Z",
    status: "complete",
    description: "Assist with strength training exercises for Patient 27.",
  },
  // Tasks for Patient 28
  {
    task_id: 82,
    discipline_id: 1,
    assigned_by: 6,
    patient_id: 28,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer pain management and perform initial assessment for Patient 28.",
  },
  {
    task_id: 83,
    discipline_id: 2,
    assigned_by: 5,
    patient_id: 28,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "complete",
    description:
      "Conduct physical therapy and rehabilitation session for Patient 28.",
  },
  {
    task_id: 84,
    discipline_id: 3,
    assigned_by: 2,
    patient_id: 28,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "undone",
    description:
      "Review medical history and update the treatment plan for Patient 28.",
  },

  // Tasks for Patient 29
  {
    task_id: 85,
    discipline_id: 2,
    assigned_by: 3,
    patient_id: 29,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description:
      "Complete the physical therapy session and assessment for Patient 29.",
  },
  {
    task_id: 86,
    discipline_id: 1,
    assigned_by: 4,
    patient_id: 29,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description: "Administer pain relief medication and monitor Patient 29.",
  },
  {
    task_id: 87,
    discipline_id: 4,
    assigned_by: 1,
    patient_id: 29,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "complete",
    description: "Provide dietary consultation for Patient 29.",
  },

  // Tasks for Patient 30
  {
    task_id: 88,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 30,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "undone",
    description: "Review and update the treatment plan for Patient 30.",
  },
  {
    task_id: 89,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 30,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description:
      "Conduct physical therapy session and monitor progress for Patient 30.",
  },
  {
    task_id: 90,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 30,
    assignment_dateTime: "2025-01-11T11:15:00Z",
    status: "complete",
    description:
      "Assist with strength training and mobility exercises for Patient 30.",
  },
  // Tasks for Patient 31
  {
    task_id: 91,
    discipline_id: 1,
    assigned_by: 2,
    patient_id: 31,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer pain relief and perform initial assessment for Patient 31.",
  },
  {
    task_id: 92,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 31,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "complete",
    description: "Conduct physical therapy session for Patient 31.",
  },
  {
    task_id: 93,
    discipline_id: 3,
    assigned_by: 6,
    patient_id: 31,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "undone",
    description: "Review and update treatment plan for Patient 31.",
  },

  // Tasks for Patient 32
  {
    task_id: 94,
    discipline_id: 2,
    assigned_by: 1,
    patient_id: 32,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description:
      "Complete physical therapy and rehabilitation session for Patient 32.",
  },
  {
    task_id: 95,
    discipline_id: 1,
    assigned_by: 5,
    patient_id: 32,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description: "Administer pain relief and monitor condition for Patient 32.",
  },
  {
    task_id: 96,
    discipline_id: 4,
    assigned_by: 3,
    patient_id: 32,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "complete",
    description: "Provide dietary consultation and guidelines for Patient 32.",
  },

  // Tasks for Patient 33
  {
    task_id: 97,
    discipline_id: 3,
    assigned_by: 4,
    patient_id: 33,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "undone",
    description:
      "Review medical history and update treatment plan for Patient 33.",
  },
  {
    task_id: 98,
    discipline_id: 2,
    assigned_by: 6,
    patient_id: 33,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description:
      "Conduct physical therapy session and monitor progress for Patient 33.",
  },
  {
    task_id: 99,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 33,
    assignment_dateTime: "2025-01-11T11:15:00Z",
    status: "complete",
    description:
      "Assist with strength training and mobility exercises for Patient 33.",
  },
  // Tasks for Patient 34
  {
    task_id: 100,
    discipline_id: 1,
    assigned_by: 3,
    patient_id: 34,
    assignment_dateTime: "2025-01-11T08:00:00Z",
    status: "inprogress",
    description:
      "Administer pain management and perform an initial assessment for Patient 34.",
  },
  {
    task_id: 101,
    discipline_id: 2,
    assigned_by: 5,
    patient_id: 34,
    assignment_dateTime: "2025-01-11T09:15:00Z",
    status: "complete",
    description:
      "Conduct physical therapy and rehabilitation session for Patient 34.",
  },
  {
    task_id: 102,
    discipline_id: 3,
    assigned_by: 2,
    patient_id: 34,
    assignment_dateTime: "2025-01-11T10:30:00Z",
    status: "undone",
    description:
      "Review medical history and update treatment plan for Patient 34.",
  },

  // Tasks for Patient 35
  {
    task_id: 103,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 35,
    assignment_dateTime: "2025-01-11T08:30:00Z",
    status: "closed",
    description:
      "Complete physical therapy session and assessment for Patient 35.",
  },
  {
    task_id: 104,
    discipline_id: 1,
    assigned_by: 6,
    patient_id: 35,
    assignment_dateTime: "2025-01-11T09:30:00Z",
    status: "inprogress",
    description: "Administer pain relief medication and monitor Patient 35.",
  },
  {
    task_id: 105,
    discipline_id: 4,
    assigned_by: 1,
    patient_id: 35,
    assignment_dateTime: "2025-01-11T10:45:00Z",
    status: "complete",
    description: "Provide dietary consultation for Patient 35.",
  },

  // Tasks for Patient 36
  {
    task_id: 106,
    discipline_id: 3,
    assigned_by: 5,
    patient_id: 36,
    assignment_dateTime: "2025-01-11T08:45:00Z",
    status: "undone",
    description: "Review and update the treatment plan for Patient 36.",
  },
  {
    task_id: 107,
    discipline_id: 2,
    assigned_by: 4,
    patient_id: 36,
    assignment_dateTime: "2025-01-11T09:45:00Z",
    status: "inprogress",
    description:
      "Conduct physical therapy session and monitor progress for Patient 36.",
  },
  {
    task_id: 108,
    discipline_id: 5,
    assigned_by: 3,
    patient_id: 36,
    assignment_dateTime: "2025-01-11T11:15:00Z",
    status: "complete",
    description:
      "Assist with strength training and mobility exercises for Patient 36.",
  },
];
