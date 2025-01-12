CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) UNIQUE NOT NULL,
    discipline_id INT,
    FOREIGN KEY (discipline_id) REFERENCES disciplines(discipline_id)
);

CREATE TABLE IF NOT EXISTS disciplines (
    discipline_id SERIAL PRIMARY KEY,
    discipline_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS hospitals (
    hospital_id SERIAL PRIMARY KEY,
    hospital_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS wards (
    ward_id SERIAL PRIMARY KEY,
    ward_name VARCHAR(255) UNIQUE NOT NULL,
    hospital_id INT,
    FOREIGN KEY (hospital_id) REFERENCES hospitals(hospital_id)
);

CREATE TABLE IF NOT EXISTS rooms (
    room_id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) UNIQUE NOT NULL,
    ward_id INT,
    FOREIGN KEY (ward_id) REFERENCES wards(ward_id)
);

CREATE TABLE IF NOT EXISTS patients (
    patient_id SERIAL PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    room_id INT,
    active_patient BOOLEAN,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    discipline_id INT,
    assigned_by INT,
    assigned_to INT,
    patient_id INT,
    assignment_datetime TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20),
    description TEXT,
    FOREIGN KEY (discipline_id) REFERENCES disciplines(discipline_id),
    FOREIGN KEY (assigned_by) REFERENCES users(user_id),
    FOREIGN KEY (assigned_to) REFERENCES users(user_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

CREATE TABLE IF NOT EXISTS tasks_undone (
    undone_id SERIAL PRIMARY KEY,
    task_id INT,
    undone_by INT,
    reason TEXT,
    undone_datetime TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (undone_by) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS tasks_completed (
    completion_id SERIAL PRIMARY KEY,
    task_id INT,
    completed_by INT,
    completion_datetime TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (completed_by) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS tasks_closed (
    closed_id SERIAL PRIMARY KEY,
    task_id INT,
    closed_by INT,
    reason TEXT,
    closed_datetime TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (closed_by) REFERENCES users(user_id)
);