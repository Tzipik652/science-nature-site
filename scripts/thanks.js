  const params = new URLSearchParams(window.location.search);
    const userName = document.getElementById("userName");
    const nameParams = params.get("name");
    if (nameParams && userName) {
      userName.textContent = `${nameParams}`;
    }