function loginUser(username, password) {
    if (!password || password.length === 0) {
        console.error("Login failed: Password is required.");
        return false;
    }

    console.log("User " + username + " logged in successfully.");
    return true;
}