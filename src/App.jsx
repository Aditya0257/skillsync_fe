import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Dashboard } from './components/Dashboard';
import { McqQuesPage } from './components/McqQuesPage';
import { ProfilePage } from './components/ProfilePage';
import { AudioQuesPage } from './components/AudioQuesPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mcq" element={<McqQuesPage />} />
          <Route path="/audio_question" element={<AudioQuesPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<Navigate to="/signin" replace />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
