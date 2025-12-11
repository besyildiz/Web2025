document.getElementById('free-fall-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const initial_velocity = parseFloat(document.getElementById('initial_velocity').value);

    if (isNaN(acceleration) || isNaN(initial_velocity)) {
        alert("Lütfen geçerli sayılar girin.");
        return;
    }

    // Hız ve mesafe hesaplama formülü: v = u + at
    const time_of_fall = 1; // Sadece 1 saniye boyunca düşecek, bu süre değiştirilebilir
    const final_velocity = initial_velocity + acceleration * time_of_fall;
    
    document.getElementById('result').innerHTML = `
        <p>İlk Hız (m/s): ${initial_velocity}</p>
        <p>Yerçekimi Kuvveti (m/s²): ${acceleration}</p>
        <p>Sonuc: Son Hız (m/s): ${final_velocity.toFixed(2)}</p>
    `;
});