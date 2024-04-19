// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const liveMatchesList = document.getElementById('live-matches');
  
    // Function to fetch live matches data
    const fetchLiveMatches = async () => {
      try {
        const response = await fetch('https://api.example.com/live-matches');
        const data = await response.json();
        renderLiveMatches(data.matches);
      } catch (error) {
        console.error('Error fetching live matches:', error);
      }
    };
  
    // Function to render live matches
    const renderLiveMatches = (matches) => {
      liveMatchesList.innerHTML = ''; // Clear previous content
  
      if (matches.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No live matches currently.';
        liveMatchesList.appendChild(listItem);
      } else {
        matches.forEach(match => {
          const listItem = document.createElement('li');
          listItem.textContent = `${match.homeTeam} vs ${match.awayTeam} (${match.score}) - ${match.status}`;
          liveMatchesList.appendChild(listItem);
        });
      }
    };
  
    // Fetch live matches on page load
    fetchLiveMatches();
    // Refresh live matches every 30 seconds
    setInterval(fetchLiveMatches, 30000);
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const matchScheduleContainer = document.getElementById('match-schedule');
    const matchResultsContainer = document.getElementById('match-results');
  
    // Function to fetch match data
    const fetchMatchData = async () => {
      try {
        const response = await fetch('https://api.example.com/matches');
        const data = await response.json();
        renderMatchData(data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };
  
    // Function to render match data
    const renderMatchData = (data) => {
      const { schedule, results } = data;
  
      renderMatches(schedule, matchScheduleContainer, 'Schedule');
      renderMatches(results, matchResultsContainer, 'Results');
    };
  
    // Function to render matches (schedule or results)
    const renderMatches = (matches, container, title) => {
      container.innerHTML = ''; // Clear previous content
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = title;
      container.appendChild(titleElement);
  
      if (matches.length === 0) {
        const messageElement = document.createElement('p');
        messageElement.textContent = `No ${title.toLowerCase()} available.`;
        container.appendChild(messageElement);
      } else {
        const listElement = document.createElement('ul');
        matches.forEach(match => {
          const listItem = document.createElement('li');
          listItem.textContent = `${match.homeTeam} vs ${match.awayTeam} - ${match.date}`;
          listElement.appendChild(listItem);
        });
        container.appendChild(listElement);
      }
    };
  
    // Fetch match data on page load
    fetchMatchData();
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const teamListContainer = document.getElementById('team-list');
  
    // Function to fetch team data
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://api.example.com/teams');
        const data = await response.json();
        renderTeamList(data.teams);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
  
    // Function to render list of teams
    const renderTeamList = (teams) => {
      teamListContainer.innerHTML = ''; // Clear previous content
  
      teams.forEach(team => {
        const teamLink = document.createElement('a');
        teamLink.textContent = team.name;
        teamLink.href = `#${team.id}`; // Assuming each team has a unique ID
        teamLink.addEventListener('click', () => renderTeamPage(team));
        
        const listItem = document.createElement('div');
        listItem.appendChild(teamLink);
        teamListContainer.appendChild(listItem);
      });
    };
  
    // Function to render team page
    const renderTeamPage = (team) => {
      // Assuming each team has additional information such as players, manager, etc.
      const teamPageContent = `
        <h2>${team.name}</h2>
        <p>Manager: ${team.manager}</p>
        <p>Stadium: ${team.stadium}</p>
        <h3>Players</h3>
        <ul>
          ${team.players.map(player => `<li>${player.name}</li>`).join('')}
        </ul>
      `;
  
      // Update main content with team page
      document.getElementById('teams').innerHTML = teamPageContent;
    };
  
    // Fetch team data on page load
    fetchTeamData();
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const playerListContainer = document.getElementById('player-list');
    const playerProfileContainer = document.getElementById('player-profile');
  
    // Function to fetch player data
    const fetchPlayerData = async () => {
      try {
        const response = await fetch('https://api.example.com/players');
        const data = await response.json();
        renderPlayerList(data.players);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
  
    // Function to render list of players
    const renderPlayerList = (players) => {
      playerListContainer.innerHTML = ''; // Clear previous content
  
      players.forEach(player => {
        const playerLink = document.createElement('a');
        playerLink.textContent = player.name;
        playerLink.href = `#${player.id}`; // Assuming each player has a unique ID
        playerLink.addEventListener('click', () => renderPlayerProfile(player));
        
        const listItem = document.createElement('div');
        listItem.appendChild(playerLink);
        playerListContainer.appendChild(listItem);
      });
    };
  
    // Function to render player profile
    const renderPlayerProfile = (player) => {
      const playerProfileContent = `
        <h3>${player.name}</h3>
        <p>Team: ${player.team}</p>
        <p>Position: ${player.position}</p>
        <p>Nationality: ${player.nationality}</p>
        <p>Date of Birth: ${player.dateOfBirth}</p>
        <p>Height: ${player.height}</p>
        <p>Weight: ${player.weight}</p>
      `;
  
      // Update player profile container
      playerProfileContainer.innerHTML = playerProfileContent;
    };
  
    // Fetch player data on page load
    fetchPlayerData();
  });
  
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const leagueTableContainer = document.getElementById('league-table');
  
    // Function to fetch league data
    const fetchLeagueData = async () => {
      try {
        const response = await fetch('https://api.example.com/league');
        const data = await response.json();
        renderLeagueTable(data.standings);
      } catch (error) {
        console.error('Error fetching league data:', error);
      }
    };
  
    // Function to render league table
    const renderLeagueTable = (standings) => {
      const table = document.createElement('table');
      const headerRow = table.insertRow();
      const headerCells = ['Position', 'Team', 'Played', 'Won', 'Drawn', 'Lost', 'Points'];
  
      // Create table headers
      headerCells.forEach(cellText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = cellText;
        headerRow.appendChild(headerCell);
      });
  
      // Create table rows for standings
      standings.forEach((team, index) => {
        const row = table.insertRow();
        const cells = [index + 1, team.teamName, team.playedGames, team.won, team.draw, team.lost, team.points];
        
        cells.forEach(cellText => {
          const cell = row.insertCell();
          cell.textContent = cellText;
        });
      });
  
      // Add table to container
      leagueTableContainer.innerHTML = '';
      leagueTableContainer.appendChild(table);
    };
  
    // Fetch league data on page load
    fetchLeagueData();
  });
  // Sample course data
const courses = [
  { title: "Introduction to Programming", instructor: "Moses soye", description: "Learn the basics of programming with this beginner-friendly course.", price: "$49.99" },
  { title: "Web Development ", instructor: "William gwiyo", description: "Master the skills needed to build modern web applications from scratch.", price: "$79.99" },
  { title: "Data Science Fundamentals", instructor: "Christopher", description: "Explore the fundamentals of data science and statistical analysis.", price: "$59.99" }
];

// Function to generate course cards
function generateCourseCard(course) {
  return `
      <div class="course-card">
          <h3>${course.title}</h3>
          <p><strong>Instructor:</strong> ${course.instructor}</p>
          <p>${course.description}</p>
          <p><strong>Price:</strong> ${course.price}</p>
      </div>
  `;
}

// Function to display courses
function displayCourses() {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Clear existing content
  
  courses.forEach(course => {
      const courseCard = generateCourseCard(course);
      courseList.innerHTML += courseCard;
  });
}

// Call the displayCourses function to render course listings
displayCourses();
// Function to register a new user
function register() {
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;

  if (!username || !password) {
      showMessage("Please enter both username and password.");
      return;
  }

  // Check if user already exists in local storage
  if (localStorage.getItem(username)) {
      showMessage("User already exists. Please choose a different username.");
      return;
  }

  // Store user data in local storage
  localStorage.setItem(username, password);
  showMessage("Registration successful. You can now login.");
}

// Function to authenticate user login
function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  if (!username || !password) {
      showMessage("Please enter both username and password.");
      return;
  }

  // Check if user exists in local storage and password matches
  var storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
      showMessage("Login successful. Welcome, " + username + "!");
  } else {
      showMessage("Invalid username or password.");
  }
}

// Function to display messages
function showMessage(message) {
  document.getElementById("message").textContent = message;
}
// Function to add a new post
function addPost() {
  var postContent = document.getElementById("post-content").value;
  if (!postContent.trim()) {
      alert("Please enter your post content.");
      return;
  }

  var postList = document.getElementById("post-list");
  var postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.textContent = postContent;
  postList.prepend(postDiv);

  // Clear the textarea after posting
  document.getElementById("post-content").value = "";
}
// Sample interactive content data
const interactiveContent = [
  { 
      title: "Quiz",
      description: "Test your knowledge with this interactive quiz.",
      action: "startQuiz()"
  },
  { 
      title: "Interactive Presentation",
      description: "Explore key concepts with this interactive presentation.",
      action: "startPresentation()"
  },
  // Add more interactive content items as needed
];

// Function to generate interactive content items
function generateInteractiveItems() {
  const interactiveContentDiv = document.getElementById("interactive-content");
  
  interactiveContent.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("interactive-item");
      itemDiv.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <button onclick="${item.action}">Start</button>
      `;
      interactiveContentDiv.appendChild(itemDiv);
  });
}

// Function to start quiz
function startQuiz() {
  // Implement quiz functionality
  alert("Starting quiz...");
}

// Function to start interactive presentation
function startPresentation() {
  // Implement interactive presentation functionality
  alert("Starting interactive presentation...");
}

// Generate interactive content items when the page loads
generateInteractiveItems();

let progress = 0;

// Function to update progress bar and text
function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";
}

// Function to increment progress
function incrementProgress() {
    if (progress < 100) {
        progress += 10;
        updateProgress();
    } else {
        alert("Congratulations! You've completed 100% of the progress.");
    }
}

// Initial update of progress
updateProgress();
// Function to generate a certificate
function generateCertificate() {
  const certificateContainer = document.getElementById("certificate-container");
  
  // Clear existing certificate if any
  certificateContainer.innerHTML = "";
  
  // Generate certificate content
  const certificateContent = `
      <div class="certificate">
          <h3>Certificate of Completion</h3>
          <p>This certifies that</p>
          <h2>John Doe</h2>
          <p>has successfully completed the course</p>
          <h2>Web Development Fundamentals</h2>
          <p>Date of Completion: April 19, 2024</p>
      </div>
  `;
  
  // Append certificate content to the container
  certificateContainer.innerHTML = certificateContent;
}
const data = [
  "Introduction to Programming",
  "Web Development Fundamentals",
  "Data Science Essentials",
  "Machine Learning Basics",
  "Artificial Intelligence Concepts"
];

// Function to perform search
function search() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const searchResults = document.getElementById("search-results");

  // Clear previous search results
  searchResults.innerHTML = "";

  // Filter data based on search input
  const filteredData = data.filter(item => item.toLowerCase().includes(searchInput));

  // Display search results
  filteredData.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      searchResults.appendChild(listItem);
  });
}

// Perform search when input changes
document.getElementById("search-input").addEventListener("input", search);

