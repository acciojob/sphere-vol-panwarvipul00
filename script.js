document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    volume_sphere();
});
function volume_sphere() {
	const radiusInput = document.getElementById('radius').value;
    const radius = parseFloat(radiusInput);

    let volume;

    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to 4 decimal places
    }

    document.getElementById('volume').value = volume;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
