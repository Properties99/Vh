document.addEventListener('DOMContentLoaded', function() {
    const typeSelect = document.getElementById('type');
    const floorSelect = document.getElementById('floor');
    const detailsDiv = document.getElementById('details');
    const body = document.body; // Select the body element

    // Map apartment types to background styles
    const backgroundStyles = {
        '2 BED': 'url("mountain.jpeg") no-repeat center center fixed', // Adjusted to use the uploaded image
        '3 BED': 'lightblue',
        '4 BED': 'lightpink',
    };

    const propertyDetails = {
        '2 BED': `
            <ul>
                <li>Starting Price:</li>
                <ul>
                    <li>Cash: 16,858,000 for 215 Sqm</li>
                    <li>Cash: 16,864,000 for 217 Sqm</li>
                    <li>3Y Plan: 22,679,000</li>
                    <li>5Y Plan: 26,587,000</li>
                    <li>7Y Plan: 30,651,000</li>
                    <li>10Y Plan: 37,494,000</li>
                </ul>
            </ul>`,
        '3 BED': `
            <ul>
                <li>Starting Price 8.8M</li>
            </ul>`,
        '4 BED': `
            <ul>
                <li>Starting Price:</li>
                <ul>
                    <li>Cash: 61,375,000</li>
                    <li>3Y Plan: 82,539,000</li>
                    <li>5Y Plan: 96,761,000</li>
                    <li>7Y Plan: 111,553,000</li>
                    <li>10Y Plan: 136,455,000</li>
                </ul>
                <li>Available only on 22nd floor (678 Sqm)</li>
            </ul>`
    };

    const availability = {
        '2 BED': ['G (7Apts)', '1 (4Apts)', '2 (6Apts)', '3 (4Apts)', '4 (7Apts)', '5 (5Apts)', '6 (7Apts)', '7 (4Apts)', '8 (5Apts)', '9 (2Apts)', '10 (3Apts)'],
        '3 BED': ['G (7Apts)', '2 (6Apts)', '4 (7Apts)'],
        '4 BED': ['22 (3Apts)'],
    };

    typeSelect.addEventListener('change', function() {
        const selectedType = typeSelect.value;
        floorSelect.innerHTML = '<option value="">--Choose floor no.--</option>';

        if (selectedType && availability[selectedType]) {
            availability[selectedType].forEach(floor => {
                const option = document.createElement('option');
                option.value = floor;
                option.textContent = floor;
                floorSelect.appendChild(option);
            });
        } else {
            for (let i = 0; i < floorSelect.options.length; i++) {
                floorSelect.options[i].style.display = '';
            }
        }

        if (selectedType) {
            detailsDiv.innerHTML = propertyDetails[selectedType];
            body.style.background = backgroundStyles[selectedType];
            if (selectedType === '2 BED') {
                body.style.backgroundSize = 'cover'; // Ensures the image covers the entire background
            } else {
                body.style.backgroundSize = ''; // Reset for other types
            }
        } else {
            detailsDiv.innerHTML = '';
            body.style.background = ''; // Reset background if none selected
        }
    });
});