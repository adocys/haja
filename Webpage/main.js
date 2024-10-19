// Example pre-fill function
function preFillExample(state, infrastructure) {
    document.getElementById('stateDropdown').value = state.toLowerCase().replace(' ', '_');
    document.getElementById('infrastructureDropdown').value = infrastructure.toLowerCase().replace(' ', '_');
  }
  
  // Redirect to dashboard with state and infrastructure data
  function getFeasibilityReport() {
    const state = document.getElementById('stateDropdown').value;
    const infrastructure = document.getElementById('infrastructureDropdown').value;
    const fileInput = document.getElementById('fileInput');
  
    if (!state || !infrastructure) {
      alert('Please select both state and infrastructure type.');
      return;
    }
  
    if (fileInput.files.length === 0) {
      alert('Please upload a file to proceed.');
      return;
    }
  
    alert('Feasibility report generated!'); // Replace this with real logic.
  }
  
  // Highlight the active tab dynamically
  document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const plannersTab = document.getElementById('plannersTab');
    const investorsTab = document.getElementById('investorsTab');
  
    if (currentPage === 'main.html') {
      plannersTab.classList.add('active');
    } else if (currentPage === 'investor.html') {
      investorsTab.classList.add('active');
    }
  });
  