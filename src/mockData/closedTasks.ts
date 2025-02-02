export interface ClosedTask {
  closed_id: number;
  task_id: number;
  closer_user_id: number;
  closer_reason: string;
  closed_datetime: string; // ISO 8601 date-time string
}

export const closedTasks = [
  {
    closed_id: 1,
    task_id: 4,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 2,
    task_id: 8,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 3,
    task_id: 13,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 4,
    task_id: 16,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 5,
    task_id: 22,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 6,
    task_id: 31,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 7,
    task_id: 40,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 8,
    task_id: 49,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 9,
    task_id: 58,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 10,
    task_id: 67,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 11,
    task_id: 76,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 12,
    task_id: 85,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 94,
    task_id: 1,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
  {
    closed_id: 103,
    task_id: 1,
    closer_user_id: 2,
    closer_reason: "Duplicate",
    closed_datetime: "2025-01-12T11:00:00Z",
  },
];
