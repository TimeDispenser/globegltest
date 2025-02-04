const globe = Globe()(document.getElementById('globeViz'))
  .globeImageUrl('https://drive.google.com/file/d/13gXQWeuAXBZdn2CyFWcSjv_amCZ03j2U/view?usp=sharing') // Replace with your map image URL
  .backgroundImageUrl('https://drive.google.com/file/d/13VW2x6mZjOAGh3mY4WEyMB9mm_B9LZX7/view?usp=sharing')
  .showGraticules(true);

// Remove loading indicator once the globe is ready
globe.onGlobeReady(() => {
  document.getElementById('loading-indicator').style.display = 'none';
});

globe.onGlobeClick(coords => {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = event.clientX + 10 + 'px';
  tooltip.style.top = event.clientY + 10 + 'px';
  tooltip.textContent = `Latitude: ${coords.lat.toFixed(4)}, Longitude: ${coords.lng.toFixed(4)}`; //Show 4 decimals
});

globe.onGlobeHover(coords => {
  if (!coords) {
    document.getElementById('tooltip').style.display = 'none'; // Hide tooltip when not hovering
  }
});

// Optional: Rotate the globe
(function rotateGlobe() {
  globe.rotation().y += 0.1;
  requestAnimationFrame(rotateGlobe);
})();
