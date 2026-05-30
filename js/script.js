const el = id => document.getElementById(id);
const screens = ['selection-screen', 'student-portal', 'admin-portal', 'student-dashboard', 'admin-dashboard'];

function show(id) {
  screens.forEach(s => el(s).classList.add('hidden'));
  el(id).classList.remove('hidden');
}

function showPortal(role) {
  show(role === 'student' ? 'student-login' : 'admin-login');
}

function goBack() {
  show('selection-screen');
}

function logout() {
    location.href = "../../index.html";
}

function handleLogin(e, role) {
  e.preventDefault();
  show(role === 'student' ? 'student-dashboard' : 'admin-dashboard');
}

function studentLogin(event) {
    event.preventDefault();

    location.href = "student-dashboard.html";
}

function adminLogin(event) {
    event.preventDefault();

    location.href = "admin-dashboard.html";
}