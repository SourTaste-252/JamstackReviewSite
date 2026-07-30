async function saveData() {

    const name = document.getElementById("name").value;

    const response = await fetch("/./netlify/functions/SaveData.js", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name
        })
    });

    const data = await response.json();

    document.getElementById("result").textContent =
        data.message;
}
