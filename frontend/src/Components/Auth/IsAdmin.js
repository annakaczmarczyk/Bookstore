export default function IsAdmin() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.roles == "ROLE_USER") {
      return true;
    } else {
      return false;
    }
  }