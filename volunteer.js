// Sample opportunity data
const opportunities = [
    {
        title: "Teaching Assistant",
        category: "education",
        time: "weekday",
        description: "Help students with after-school programs and homework.",
        requirements: "Patient, good with children",
        location: "Local Elementary School",
        commitment: "2-3 hours/week"
    },
    {
        title: "Park Cleanup",
        category: "environment",
        time: "weekend",
        description: "Join our monthly park cleanup initiative.",
        requirements: "Physically active, outdoor work",
        location: "City Parks",
        commitment: "4 hours/month"
    },
    {
        title: "Hospital Support",
        category: "health",
        time: "evening",
        description: "Assist hospital staff with non-medical tasks.",
        requirements: "Compassionate, reliable",
        location: "General Hospital",
        commitment: "4 hours/week"
    },
    {
        title: "Food Bank Helper",
        category: "community",
        time: "weekday",
        description: "Sort and distribute food to those in need.",
        requirements: "Able to lift 25lbs, team player",
        location: "Community Center",
        commitment: "3 hours/week"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayOpportunities(opportunities);
    setupFilters();
    setupForm();
});

// Display opportunities
function displayOpportunities(opps) {
    const container = document.getElementById('opportunitiesList');
    container.innerHTML = '';

    opps.forEach(opp => {
        const card = document.createElement('div');
        card.className = 'opportunity-card';
        card.innerHTML = `
            <h3>${opp.title}</h3>
            <div class="tags">
                <span class="tag">${opp.category}</span>
                <span class="tag">${opp.time}</span>
            </div>
            <p>${opp.description}</p>
            <p><strong>Requirements:</strong> ${opp.requirements}</p>
            <p><strong>Location:</strong> ${opp.location}</p>
            <p><strong>Time Commitment:</strong> ${opp.commitment}</p>
        `;
        container.appendChild(card);
    });
}

// Setup filters
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const timeFilter = document.getElementById('timeFilter');

    function filterOpportunities() {
        const categoryValue = categoryFilter.value;
        const timeValue = timeFilter.value;

        const filtered = opportunities.filter(opp => {
            const categoryMatch = categoryValue === 'all' || opp.category === categoryValue;
            const timeMatch = timeValue === 'all' || opp.time === timeValue;
            return categoryMatch && timeMatch;
        });

        displayOpportunities(filtered);
    }

    categoryFilter.addEventListener('change', filterOpportunities);
    timeFilter.addEventListener('change', filterOpportunities);
}

// Setup form submission
function setupForm() {
    const form = document.getElementById('volunteerForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server
        console.log('Volunteer Application:', { name, email, interest, message });

        // Show success message
        alert('Thank you for your interest in volunteering! We will contact you soon.');
        form.reset();
    });
}