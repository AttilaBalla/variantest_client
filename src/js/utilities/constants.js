// API URL

// For production
//export const API_BASE_URL = '';

// For development
// Set the correct port in package.json's proxy to avoid CORS policy
export const API_BASE_URL = 'http://localhost:3000/';

// ----------------------------------------------------

export const FETCH_TIMEOUT = 7000; // time to wait before considering a request as timed-out
export const ALERT_TIMEOUT = 3500; // display time of alert messages

export const REQUEST_STATUS = {
    PENDING : "Pending",
    DONE : "Done",
    FAILED : "Failed"
};

export const SERVER_STATUS = {
    AVAILABLE : "Available",
    CHECKED_OUT: "Checked Out",
    DOWN: "Down"
};