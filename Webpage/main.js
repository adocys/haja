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

  window.location.href = 'report.html';
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

  // Add click event to the Investors tab
  investorsTab.addEventListener('click', () => {
    window.location.href = 'investor.html';
  });
});

// Show City select with animation on State selection
document.getElementById('stateDropdown').addEventListener('change', function () {
  const citySelect = document.getElementById('citySelect');
  const selectedState = this.value;

  if (selectedState) {
    citySelect.classList.add('show'); // Add 'show' class to reveal city selection
  } else {
    citySelect.classList.remove('show'); // Remove 'show' class to hide
  }

  populateCities(selectedState); // Dynamically update city options
});

// Populate cities based on selected state
function populateCities(state) {
  const cityDropdown = document.getElementById('cityDropdown');
  cityDropdown.innerHTML = ''; // Clear previous options

  const citiesByState = {
    new_york: ['Manhattan', 'Buffalo', 'Albany', 'Bronx'],
    california: ['Los Angeles', 'San Francisco', 'San Diego'],
    texas: ['Houston', 'Austin', 'Dallas'],
    georgia: [
      'Atlanta', 'Savannah', 'Augusta', 'Macon', 'Athens', 'Decatur',
      'Duluth', 'Doraville', 'Winder', 'Flowery Branch', 'Buford', 
      'Cumming', 'Johns Creek', 'Alpharetta', 'Roswell', 'Marietta',
      'Sandy Springs', 'Dunwoody', 'Brookhaven', 'Chamblee', 'East Point',
      'Fairburn', 'Forest Park', 'College Park'
    ]
  };

  if (citiesByState[state]) {
    citiesByState[state].forEach(city => {
      const option = document.createElement('option');
      option.value = city.toLowerCase().replace(/\s+/g, '_');
      option.textContent = city;
      cityDropdown.appendChild(option);
    });
  } else {
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'No cities available';
    cityDropdown.appendChild(defaultOption);
  }
}

// File input and drop handling
const fileInput = document.getElementById('fileInput');
const fileDrop = document.getElementById('fileDrop');
const fileNameDisplay = document.getElementById('fileName');

// Handle file selection via input
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    fileNameDisplay.textContent = `Selected file: ${file.name}`;
  } else {
    fileNameDisplay.textContent = ''; // Reset if no file is selected
  }
});

// Handle drag over event to highlight drop area
fileDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
  fileDrop.style.borderColor = '#58a6ff';
});

// Handle drag leave to reset border color
fileDrop.addEventListener('dragleave', () => {
  fileDrop.style.borderColor = '#30363d';
});

// Handle file drop event
fileDrop.addEventListener('drop', (event) => {
  event.preventDefault();
  fileDrop.style.borderColor = '#30363d';

  const file = event.dataTransfer.files[0];
  if (file) {
    fileNameDisplay.textContent = `Dropped file: ${file.name}`;
    fileInput.files = event.dataTransfer.files; // Assign dropped files to input
  }
});
