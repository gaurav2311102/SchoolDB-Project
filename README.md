# 🎓 StudentProject — Student Form using JPDB API

This is a simple web application that allows you to **create**, **retrieve**, and **update student data** using [Login2Explore's JPDB API](https://login2explore.com/). It uses **HTML**, **Bootstrap**, **jQuery**, and **JavaScript** for client-side interaction.

---

## 🌐 Features

- ✅ Add new student records
- 🔍 Retrieve student info by Roll Number
- ✏️ Update student records
- ❌ Reset form easily
- 🗃️ Data stored in JPDB (JSONPowerDB) — no backend code needed

---

🌟 Benefits of using JsonPowerDB

  🚀 High performance with low latency

  📦 Lightweight and easy to integrate

  🔐 Built-in authentication & access control

  💡 Serverless architecture — No backend setup required

  📊 Powerful querying features with native JSON structure

  ⌛ Real-time with minimal setup

  💻 Works well with client-side applications like this one

---


## 🖼️ UI Preview

> Basic form layout with fields:
- Roll No
- Student Name
- Class
- Birth Date
- Address
- Enrollment Date

And buttons for: Save, Update, Reset

---

## 🚀 How to Run

1. Clone or download this repository:
   git clone https://github.com/gaurav2311102/SchoolDB-project.git
   
2. Open student_form.html in your browser (double-click or drag into Chrome).
   
3. Enter Roll No and fill the form.

4. Use:

  - Save → to add a new student
  
  - Update → to change existing student data
  
  - Reset → to clear the form 


## 🚀  Dependencies

  - Bootstrap 3
  
  - jQuery 3.5.1
  
  - JPDB Commons JS SDK


## 🚀 Release History
  v1.0 - Initial Release

  - Basic student form UI

  - Save, update, and fetch student data via JPDB

  - Form validation and localStorage integration

  - This is the first version of the project using JsonPowerDB on GitHub. Further improvements may include better UI, input date validation, or switching to newer frontend frameworks.

⚠️ Notes

  - Data is stored remotely on JPDB, not in localStorage (except for recno)
  
  - The Roll No field acts as the primary key


