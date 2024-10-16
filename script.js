const apiKey = '803452fde7f6498c9c6ff9231c2e5de3';  // Your OpenCageData API Key
const officeAddress = 'My Home Hub, Madhapur, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081';  // Replace with actual office address

// Get Office Coordinates using OpenCageData API
async function getOfficeCoordinates(address) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
    return data.results[0].geometry;
}

// Get User's Current Location using Browser's Geolocation API
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, (error) => {
                reject(error);
            });
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}

// Haversine formula to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

// Main function to get coordinates and calculate distance
async function main() {
    try {
        const officeLocation = await getOfficeCoordinates(officeAddress);
        const userLocation = await getCurrentLocation();
        const distance = calculateDistance(officeLocation.lat, officeLocation.lng, userLocation.lat, userLocation.lng);
        console.log(`Distance between user and office: ${distance} km`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Execute main function
main();
