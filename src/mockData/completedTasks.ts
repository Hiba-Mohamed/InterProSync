export interface CompletedTasksDisplayObjectType {
  task_id: number;
  discipline_id: number;
  assigned_by: number; // ID of the user or team
  patient_id: number;
  assignment_dateTime: string; // ISO 8601 date-time string
  status: string; // e.g., "inprogress", "completed"
  description: string;
  completion_datetime: string; // ISO 8601 date-time string
  completed_by: number;
}

export interface CompletedTaskType {
  task_id: number;
  completed_id: number;
  assigned_by: number; // ID of the user or team
  completion_datetime: string; // ISO 8601 date-time string
  completed_by: number; // this is the user_id from the users item in local storage
}

export const completedTasks = [
  {
    completed_id: 1,
    task_id: 25,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 1,
  },
  {
    completed_id: 2,
    task_id: 27,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 2,
  },
  {
    completed_id: 3,
    task_id: 29,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 3,
  },
  {
    completed_id: 4,
    task_id: 33,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 4,
  },
  {
    completed_id: 5,
    task_id: 36,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 5,
  },
  {
    completed_id: 6,
    task_id: 38,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 6,
  },
  {
    completed_id: 7,
    task_id: 42,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 7,
  },
  {
    completed_id: 8,
    task_id: 45,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 8,
  },
  {
    completed_id: 9,
    task_id: 47,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 9,
  },
  {
    completed_id: 10,
    task_id: 51,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 10,
  },
  {
    completed_id: 11,
    task_id: 52,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 11,
  },
  {
    completed_id: 12,
    task_id: 54,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 12,
  },
  {
    completed_id: 13,
    task_id: 56,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 1,
  },
  {
    completed_id: 14,
    task_id: 60,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 2,
  },
  {
    completed_id: 15,
    task_id: 63,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 3,
  },
  {
    completed_id: 16,
    task_id: 65,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 4,
  },
  {
    completed_id: 17,
    task_id: 69,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 5,
  },
  {
    completed_id: 18,
    task_id: 72,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 6,
  },
  {
    completed_id: 19,
    task_id: 74,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 7,
  },
  {
    completed_id: 20,
    task_id: 78,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 8,
  },
  {
    completed_id: 21,
    task_id: 81,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 9,
  },
  {
    completed_id: 22,
    task_id: 83,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 10,
  },
  {
    completed_id: 23,
    task_id: 87,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 11,
  },
  {
    completed_id: 24,
    task_id: 90,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 12,
  },
  {
    completed_id: 25,
    task_id: 92,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 1,
  },
  {
    completed_id: 26,
    task_id: 96,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 2,
  },
  {
    completed_id: 27,
    task_id: 108,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 3,
  },
  {
    completed_id: 28,
    task_id: 99,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 4,
  },
  {
    completed_id: 29,
    task_id: 101,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 5,
  },
  {
    completed_id: 30,
    task_id: 105,
    completion_datetime: "2025-01-13T14:30:00Z",
    completed_by: 6,
  },
];
