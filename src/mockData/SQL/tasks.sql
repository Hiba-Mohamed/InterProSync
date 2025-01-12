INSERT INTO Tasks (task_id, discipline_id, assigned_by, assigned_to, patient_id, assignment_dateTime, status, description)
VALUES
-- Inserting tasks for Patient 1
    (1, 1, 1, 2, 1, '2025-01-11T08:00:00Z', 'inprogress', 'Administer medication for Patient 1.'),
    (2, 2, 3, 1, 1, '2025-01-11T10:00:00Z', 'inprogress', 'Perform a routine checkup for Patient 1.'),
    (3, 3, 5, 4, 1, '2025-01-11T12:00:00Z', 'inprogress', 'Update Patient 1''s medical records.'),
-- Inserting tasks for Patient 2
    (4, 2, 2, 5, 2, '2025-01-11T09:00:00Z', 'closed', 'Complete physical therapy for Patient 2.'),
    (5, 1, 3, 6, 2, '2025-01-11T11:00:00Z', 'inprogress', 'Administer medication for Patient 2.'),
    (6, 4, 4, 2, 2, '2025-01-11T13:00:00Z', 'inprogress', 'Conduct a follow-up consultation for Patient 2.'),
-- Inserting tasks for Patient 3
    (7, 3, 1, 7, 3, '2025-01-11T10:30:00Z', 'inprogress', 'Update medical records for Patient 3.'),
    (8, 2, 3, 1, 3, '2025-01-11T14:00:00Z', 'closed', 'Complete routine checkup for Patient 3.'),
    (9, 5, 6, 8, 3, '2025-01-11T16:00:00Z', 'inprogress', 'Assist with mobility therapy for Patient 3.'),
-- Inserting tasks for Patient 4
    (10, 1, 2, 3, 4, '2025-01-11T08:30:00Z', 'inprogress', 'Administer first dose of medication for Patient 4.'),
    (11, 2, 5, 6, 4, '2025-01-11T09:30:00Z', 'inprogress', 'Conduct a physical therapy session for Patient 4.'),
    (12, 3, 4, 1, 4, '2025-01-11T11:00:00Z', 'inprogress', 'Update medical records for Patient 4.'),
-- Inserting tasks for Patient 5
    (13, 2, 3, 5, 5, '2025-01-11T08:00:00Z', 'closed', 'Complete a general checkup for Patient 5.'),
    (14, 1, 2, 6, 5, '2025-01-11T10:00:00Z', 'inprogress', 'Administer pain relief for Patient 5.'),
    (15, 4, 5, 3, 5, '2025-01-11T12:30:00Z', 'inprogress', 'Provide nutritional consultation for Patient 5.'),
-- Inserting tasks for Patient 6

    (16, 3, 6, 4, 6, '2025-01-11T09:15:00Z', 'closed', 'Review and update Patient 6''s medical records.'),
    (17, 2, 1, 2, 6, '2025-01-11T10:30:00Z', 'inprogress', 'Perform a physical assessment for Patient 6.'),
    (18, 5, 4, 7, 6, '2025-01-11T13:00:00Z', 'inprogress', 'Assist with mobility exercises for Patient 6.'),
-- Inserting tasks for Patient 7
    (19, 1, 3, 4, 7, '2025-01-11T08:45:00Z', 'inprogress', 'Administer initial medication for Patient 7.'),
    (20, 2, 5, 6, 7, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct a rehabilitation therapy session for Patient 7.'),
    (21, 3, 4, 2, 7, '2025-01-11T11:30:00Z', 'inprogress', 'Update medical records for Patient 7.'),
-- Inserting tasks for Patient 8
    (22, 2, 6, 5, 8, '2025-01-11T08:30:00Z', 'closed', 'Complete physical examination for Patient 8.'),
    (23, 1, 3, 4, 8, '2025-01-11T10:00:00Z', 'inprogress', 'Administer second dose of medication for Patient 8.'),
    (24, 4, 1, 2, 8, '2025-01-11T12:00:00Z', 'inprogress', 'Provide a dietary consultation for Patient 8.'),
-- Inserting tasks for Patient 9
    (25, 3, 2, 6, 9, '2025-01-11T09:00:00Z', 'complete', 'Review medical history and update records for Patient 9.'),
    (26, 2, 4, 5, 9, '2025-01-11T10:30:00Z', 'inprogress', 'Perform a physical therapy session for Patient 9.'),
    (27, 5, 6, 3, 9, '2025-01-11T12:30:00Z', 'complete', 'Assist with mobility exercises for Patient 9.'),
-- Inserting tasks for Patient 10
    (28, 1, 5, 4, 10, '2025-01-11T08:00:00Z', 'inprogress', 'Administer initial pain management for Patient 10.'),
    (29, 2, 3, 6, 10, '2025-01-11T09:30:00Z', 'complete', 'Conduct a rehabilitation session for Patient 10.'),
    (30, 3, 4, 2, 10, '2025-01-11T12:00:00Z', 'inprogress', 'Update and review medical history for Patient 10.'),
-- Inserting tasks for Patient 11
    (31, 2, 1, 5, 11, '2025-01-11T08:15:00Z', 'closed', 'Complete physical examination for Patient 11.'),
    (32, 1, 6, 4, 11, '2025-01-11T10:00:00Z', 'inprogress', 'Administer first dose of medication for Patient 11.'),
    (33, 4, 2, 3, 11, '2025-01-11T12:00:00Z', 'complete', 'Provide dietary consultation for Patient 11.'),
-- Inserting tasks for Patient 12
    (34, 3, 5, 6, 12, '2025-01-11T08:30:00Z', 'inprogress', 'Review and update medical records for Patient 12.'),
    (35, 2, 1, 4, 12, '2025-01-11T09:45:00Z', 'inprogress', 'Perform a physical therapy session for Patient 12.'),
    (36, 5, 3, 2, 12, '2025-01-11T11:30:00Z', 'complete', 'Assist with mobility exercises for Patient 12.'),
-- Inserting tasks for Patient 13
    (37, 1, 4, 3, 13, '2025-01-11T08:00:00Z', 'inprogress', 'Administer initial pain relief medication for Patient 13.'),
    (38, 2, 6, 4, 13, '2025-01-11T09:00:00Z', 'complete', 'Conduct physiotherapy session for Patient 13.'),
    (39, 3, 5, 2, 13, '2025-01-11T10:30:00Z', 'inprogress', 'Update medical records and treatment plan for Patient 13.'),
-- Inserting tasks for Patient 14
    (40, 2, 3, 6, 14, '2025-01-11T08:15:00Z', 'closed', 'Complete physical examination and assessment for Patient 14.'),
    (41, 1, 2, 5, 14, '2025-01-11T09:45:00Z', 'inprogress', 'Administer first dose of pain relief medication for Patient 14.'),
    (42, 4, 6, 1, 14, '2025-01-11T11:00:00Z', 'complete', 'Provide nutritional consultation and guidelines for Patient 14.'),
-- Inserting tasks for Patient 15
    (43, 3, 1, 6, 15, '2025-01-11T08:30:00Z', 'inprogress', 'Review medical history and update treatment plan for Patient 15.'),
    (44, 2, 4, 5, 15, '2025-01-11T09:15:00Z', 'inprogress', 'Conduct a physical therapy session for Patient 15.'),
    (45, 5, 3, 2, 15, '2025-01-11T11:45:00Z', 'complete', 'Assist with mobility exercises and strength training for Patient 15.'),
-- Inserting tasks for Patient 16
    (46, 1, 2, 5, 16, '2025-01-11T08:00:00Z', 'inprogress', 'Administer initial assessment and pain management for Patient 16.'),
    (47, 2, 4, 6, 16, '2025-01-11T09:30:00Z', 'complete', 'Complete rehabilitation session for Patient 16.'),
    (48, 3, 3, 2, 16, '2025-01-11T10:45:00Z', 'inprogress', 'Review and update medical history and treatment plan for Patient 16.'),
-- Inserting tasks for Patient 17
    (49, 2, 6, 4, 17, '2025-01-11T08:15:00Z', 'closed', 'Complete physical therapy evaluation for Patient 17.'),
    (50, 1, 5, 1, 17, '2025-01-11T10:00:00Z', 'inprogress', 'Administer pain medication for Patient 17.'),
    (51, 4, 2, 3, 17, '2025-01-11T11:30:00Z', 'complete', 'Provide dietary consultation and support for Patient 17.'),
-- Inserting tasks for Patient 18
    (52, 3, 4, 5, 18, '2025-01-11T08:30:00Z', 'complete', 'Update and review medical records and treatment history for Patient 18.'),
    (53, 2, 1, 4, 18, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct a physical therapy session for Patient 18.'),
    (54, 5, 3, 6, 18, '2025-01-11T11:00:00Z', 'complete', 'Assist with mobility exercises and strengthen core muscles for Patient 18.'),
-- Inserting tasks for Patient 19
    (55, 1, 3, 4, 19, '2025-01-11T08:00:00Z', 'inprogress', 'Administer initial pain relief and assessment for Patient 19.'),
    (56, 2, 6, 5, 19, '2025-01-11T09:15:00Z', 'complete', 'Complete physical rehabilitation session for Patient 19.'),
    (57, 3, 4, 2, 19, '2025-01-11T10:45:00Z', 'inprogress', 'Review and update treatment plan and medical history for Patient 19.'),
-- Inserting tasks for Patient 20
    (58, 2, 1, 6, 20, '2025-01-11T08:30:00Z', 'closed', 'Complete physical therapy assessment for Patient 20.'),
    (59, 1, 2, 3, 20, '2025-01-11T09:30:00Z', 'inprogress', 'Administer first dose of pain medication for Patient 20.'),
    (60, 4, 5, 1, 20, '2025-01-11T11:00:00Z', 'complete', 'Provide dietary consultation and guidelines for Patient 20.'),
-- Inserting tasks for Patient 21
    (61, 3, 4, 5, 21, '2025-01-11T08:45:00Z', 'inprogress', 'Review medical history and update treatment plan for Patient 21.'),
    (62, 2, 3, 6, 21, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy session for Patient 21.'),
    (63, 5, 2, 4, 21, '2025-01-11T10:15:00Z', 'complete', 'Assist with mobility exercises and strength training for Patient 21.'),
-- Inserting tasks for Patient 22
    (64, 1, 2, 6, 22, '2025-01-11T08:00:00Z', 'inprogress', 'Administer pain management and initial assessment for Patient 22.'),
    (65, 2, 5, 4, 22, '2025-01-11T09:30:00Z', 'complete', 'Complete physical therapy session for Patient 22.'),
    (66, 3, 3, 2, 22, '2025-01-11T10:45:00Z', 'undone', 'Review and update treatment plan and medical history for Patient 22.'),
-- Inserting tasks for Patient 23
    (67, 2, 1, 3, 23, '2025-01-11T08:30:00Z', 'closed', 'Complete rehabilitation assessment for Patient 23.'),
    (68, 1, 4, 6, 23, '2025-01-11T09:30:00Z', 'inprogress', 'Administer pain medication and monitor response for Patient 23.'),
    (69, 4, 2, 5, 23, '2025-01-11T11:00:00Z', 'complete', 'Provide dietary consultation for Patient 23.'),
-- Inserting tasks for Patient 24
    (70, 3, 5, 2, 24, '2025-01-11T08:45:00Z', 'undone', 'Review and update medical records and treatment plan for Patient 24.'),
    (71, 2, 3, 1, 24, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy session for Patient 24.'),
    (72, 5, 4, 6, 24, '2025-01-11T11:30:00Z', 'complete', 'Assist with strength training and mobility exercises for Patient 24.'),
-- Inserting tasks for Patient 25
    (73, 1, 4, 2, 25, '2025-01-11T08:00:00Z', 'inprogress', 'Administer pain relief and assess condition for Patient 25.'),
    (74, 2, 6, 3, 25, '2025-01-11T09:15:00Z', 'complete', 'Conduct a physical rehabilitation session for Patient 25.'),
    (75, 3, 2, 5, 25, '2025-01-11T10:45:00Z', 'undone', 'Review and update treatment plan and medical history for Patient 25.'),
-- Inserting tasks for Patient 26
    (76, 2, 1, 4, 26, '2025-01-11T08:30:00Z', 'closed', 'Complete physical therapy assessment for Patient 26.'),
    (77, 1, 3, 6, 26, '2025-01-11T09:30:00Z', 'inprogress', 'Administer pain medication and monitor for any adverse reactions for Patient 26.'),
    (78, 4, 5, 2, 26, '2025-01-11T11:00:00Z', 'complete', 'Provide dietary consultation and guidelines for Patient 26.'),
-- Inserting tasks for Patient 27
    (79, 3, 4, 1, 27, '2025-01-11T08:45:00Z', 'undone', 'Review medical history and update treatment plan for Patient 27.'),
    (80, 2, 2, 5, 27, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy and mobility exercises for Patient 27.'),
    (81, 5, 3, 6, 27, '2025-01-11T11:30:00Z', 'complete', 'Assist with strength training exercises for Patient 27.'),
-- Inserting tasks for Patient 28
    (82, 1, 6, 2, 28, '2025-01-11T08:00:00Z', 'inprogress', 'Administer pain management and perform initial assessment for Patient 28.'),
    (83, 2, 5, 4, 28, '2025-01-11T09:15:00Z', 'complete', 'Conduct physical therapy and rehabilitation session for Patient 28.'),
    (84, 3, 2, 1, 28, '2025-01-11T10:30:00Z', 'undone', 'Review medical history and update the treatment plan for Patient 28.'),
-- Inserting tasks for Patient 29
    (85, 2, 3, 5, 29, '2025-01-11T08:30:00Z', 'closed', 'Complete the physical therapy session and assessment for Patient 29.'),
    (86, 1, 4, 6, 29, '2025-01-11T09:30:00Z', 'inprogress', 'Administer pain relief medication and monitor Patient 29.'),
    (87, 4, 1, 2, 29, '2025-01-11T10:45:00Z', 'complete', 'Provide dietary consultation for Patient 29.'),
-- Inserting tasks for Patient 30
    (88, 3, 5, 3, 30, '2025-01-11T08:45:00Z', 'undone', 'Review and update the treatment plan for Patient 30.'),
    (89, 2, 4, 6, 30, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy session and monitor progress for Patient 30.'),
    (90, 5, 3, 2, 30, '2025-01-11T11:15:00Z', 'complete', 'Assist with strength training and mobility exercises for Patient 30.'),
-- Inserting tasks for Patient 31
    (91, 1, 2, 3, 31, '2025-01-11T08:00:00Z', 'inprogress', 'Administer pain relief and perform initial assessment for Patient 31.'),
    (92, 2, 4, 5, 31, '2025-01-11T09:15:00Z', 'complete', 'Conduct physical therapy session for Patient 31.'),
    (93, 3, 6, 2, 31, '2025-01-11T10:30:00Z', 'undone', 'Review and update treatment plan for Patient 31.'),
-- Inserting tasks for Patient 32
    (94, 2, 1, 4, 32, '2025-01-11T08:30:00Z', 'closed', 'Complete physical therapy and rehabilitation session for Patient 32.'),
    (95, 1, 5, 6, 32, '2025-01-11T09:30:00Z', 'inprogress', 'Administer pain relief and monitor condition for Patient 32.'),
    (96, 4, 3, 2, 32, '2025-01-11T10:45:00Z', 'complete', 'Provide dietary consultation and guidelines for Patient 32.'),
-- Inserting tasks for Patient 33
    (97, 3, 4, 5, 33, '2025-01-11T08:45:00Z', 'undone', 'Review medical history and update treatment plan for Patient 33.'),
    (98, 2, 6, 1, 33, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy session and monitor progress for Patient 33.'),
    (99, 5, 3, 4, 33, '2025-01-11T11:15:00Z', 'complete', 'Assist with strength training and mobility exercises for Patient 33.'),
-- Inserting tasks for Patient 34
    (100, 1, 3, 2, 34, '2025-01-11T08:00:00Z', 'inprogress', 'Administer pain management and perform an initial assessment for Patient 34.'),
    (101, 2, 5, 4, 34, '2025-01-11T09:15:00Z', 'complete', 'Conduct physical therapy and rehabilitation session for Patient 34.'),
    (102, 3, 2, 1, 34, '2025-01-11T10:30:00Z', 'undone', 'Review medical history and update treatment plan for Patient 34.'),
-- Inserting tasks for Patient 35
    (103, 2, 4, 5, 35, '2025-01-11T08:30:00Z', 'closed', 'Complete physical therapy session and assessment for Patient 35.'),
    (104, 1, 6, 2, 35, '2025-01-11T09:30:00Z', 'inprogress', 'Administer pain relief medication and monitor Patient 35.'),
    (105, 4, 1, 3, 35, '2025-01-11T10:45:00Z', 'complete', 'Provide dietary consultation for Patient 35.'),
-- Inserting tasks for Patient 36
    (106, 3, 5, 6, 36, '2025-01-11T08:45:00Z', 'undone', 'Review and update the treatment plan for Patient 36.'),
    (107, 2, 4, 1, 36, '2025-01-11T09:45:00Z', 'inprogress', 'Conduct physical therapy session and monitor progress for Patient 36.'),
    (108, 5, 3, 2, 36, '2025-01-11T11:15:00Z', 'complete', 'Assist with strength training and mobility exercises for Patient 36.'),